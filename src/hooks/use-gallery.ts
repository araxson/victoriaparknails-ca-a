import { useState, useEffect } from 'react';
import { GalleryImage } from '@/data/types';

interface UseGalleryResult {
  images: GalleryImage[];
  loading: boolean;
  error: string | null;
}

export function useGallery(): UseGalleryResult {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/gallery');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch images: ${response.statusText}`);
        }
        
        const data = await response.json();
        setImages(data.images || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load gallery images');
        console.error('Error fetching gallery images:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return { images, loading, error };
}
