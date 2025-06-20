import { fallbackGalleryImages } from "@/data/gallery";
import { GalleryImage } from "@/data/types";

/**
 * Hook that returns static gallery images for SSG optimization
 * Uses fallback images to ensure client-side compatibility
 */
export function useGallery() {
  // Return static data - no loading states needed for SSG
  const images: GalleryImage[] = fallbackGalleryImages;
  
  return {
    images,
    loading: false,
    error: null,
  };
}
