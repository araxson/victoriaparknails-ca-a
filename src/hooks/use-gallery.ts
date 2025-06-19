import { getAllGalleryImages } from "@/data/gallery";
import { GalleryImage } from "@/data/types";

/**
 * Hook that returns static gallery images for SSG optimization
 * No longer fetches from API - uses static data at build time
 */
export function useGallery() {
  // Return static data - no loading states needed for SSG
  const images: GalleryImage[] = getAllGalleryImages();
  
  return {
    images,
    loading: false,
    error: null,
  };
}
