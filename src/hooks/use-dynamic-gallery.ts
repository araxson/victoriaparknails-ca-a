"use client";

import { useState, useEffect, useCallback } from 'react';
import { GalleryImage } from '@/data/types';
import { getAllGalleryImagesFromFolder, getRandomGalleryImages } from '@/lib/gallery-loader';

interface UseDynamicGalleryOptions {
  count?: number;
  randomize?: boolean;
  autoLoad?: boolean;
}

interface UseDynamicGalleryReturn {
  images: GalleryImage[];
  loading: boolean;
  error: string | null;
  total: number;
  loadImages: () => Promise<void>;
  refresh: () => Promise<void>;
}

export function useDynamicGallery(options: UseDynamicGalleryOptions = {}): UseDynamicGalleryReturn {
  const {
    count = 30,
    randomize = true,
    autoLoad = true
  } = options;

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  const loadImages = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Get all images from the static manifest
      const allImages = await getAllGalleryImagesFromFolder();
      setTotal(allImages.length);

      // Apply randomization and count limits
      let resultImages = allImages;
      if (randomize) {
        resultImages = getRandomGalleryImages(allImages, count);
      } else {
        resultImages = allImages.slice(0, count);
      }

      setImages(resultImages);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Gallery loading error:', err);
    } finally {
      setLoading(false);
    }
  }, [count, randomize]);

  const refresh = useCallback(() => {
    return loadImages();
  }, [loadImages]);

  useEffect(() => {
    if (autoLoad) {
      loadImages();
    }
  }, [autoLoad, loadImages]);

  return {
    images,
    loading,
    error,
    total,
    loadImages,
    refresh
  };
} 