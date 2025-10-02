"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { GalleryImage } from "@/data/types";
import { getAllGalleryImagesFromFolder, getRandomGalleryImages, getFeaturedGalleryImages } from "@/lib/gallery-loader";

interface UseGalleryOptions {
  count?: number;
  randomize?: boolean;
  autoLoad?: boolean;
  featured?: boolean;
  static?: boolean; // For SSG optimization
}

interface UseGalleryReturn {
  images: GalleryImage[];
  isLoading: boolean;
  error: string | null;
  total: number;
  loadImages: () => Promise<void>;
  refresh: () => Promise<void>;
}

/**
 * Unified gallery hook that supports both static and dynamic loading
 * Combines the best features from the previous gallery hooks
 * Optimized for Next.js 15+ App Router with SSG and client-side hydration
 */
export function useGallery(options: UseGalleryOptions = {}): UseGalleryReturn {
  const {
    count = 30,
    randomize = true,
    autoLoad = true,
    featured = false,
    static: isStatic = false
  } = options;

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(!isStatic);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  // Enhanced abort controller for request cancellation
  const abortControllerRef = useRef<AbortController | null>(null);

  const loadImages = useCallback(async () => {
    // Cancel previous request if still pending
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    setIsLoading(true);
    setError(null);

    try {
      let resultImages: GalleryImage[];
      
      if (featured) {
        // Use optimized featured images function
        resultImages = await getFeaturedGalleryImages(count, randomize);
        setTotal(resultImages.length);
      } else {
        // Get all images and apply filtering
        const allImages = await getAllGalleryImagesFromFolder();
        setTotal(allImages.length);

        if (randomize) {
          resultImages = getRandomGalleryImages(allImages, count);
        } else {
          resultImages = allImages.slice(0, count);
        }
      }

      // Check if request was cancelled
      if (abortControllerRef.current?.signal.aborted) {
        setIsLoading(false);
        return;
      }

      setImages(resultImages);
    } catch (err) {
      if (abortControllerRef.current?.signal.aborted) {
        setIsLoading(false);
        return; // Request was cancelled
      }
      
      const errorMessage = err instanceof Error ? err.message : 'Failed to load gallery images';
      setError(errorMessage);
      console.error('Gallery loading error:', err);
      
      // Set empty array on error
      setImages([]);
      setTotal(0);
    } finally {
      setIsLoading(false);
    }
  }, [count, randomize, featured, isStatic]);

  const refresh = useCallback(async () => {
    return loadImages();
  }, [loadImages]);

  useEffect(() => {
    if (autoLoad) {
      loadImages();
    }

    // Cleanup on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [autoLoad, loadImages]);

  return {
    images,
    isLoading,
    error,
    total,
    loadImages,
    refresh
  };
}

/**
 * Hook for static gallery images (SSG optimization)
 */
export function useStaticGallery() {
  return useGallery({ static: true, autoLoad: false });
}

/**
 * Hook for dynamic gallery with loading states
 */
export function useDynamicGallery(options: Omit<UseGalleryOptions, 'static'> = {}) {
  return useGallery({ ...options, static: false });
}

/**
 * Hook for featured gallery images
 */
export function useFeaturedGallery(count: number = 8, randomize: boolean = true) {
  return useGallery({ count, randomize, featured: true, static: false });
}
