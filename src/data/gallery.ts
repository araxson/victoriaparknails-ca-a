import { GalleryImage } from "./types";

/**
 * Fallback gallery images - these will be used if the API fails
 * The actual gallery images are loaded dynamically from /api/gallery
 */
export const fallbackGalleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/victoriaparknails-0001.webp",
    alt: "Victoria Park Nails gallery image",
  },
  {
    src: "/images/gallery/victoriaparknails-0002.webp",
    alt: "Victoria Park Nails gallery image",
  },
  {
    src: "/images/gallery/victoriaparknails-0003.webp",
    alt: "Victoria Park Nails gallery image",
  },
  {
    src: "/images/gallery/victoriaparknails-0004.webp",
    alt: "Victoria Park Nails gallery image",
  },
];

// Legacy export for backward compatibility
export const galleryImages = fallbackGalleryImages;

/**
 * Get a subset of gallery images for featured display
 */
export function getFeaturedGalleryImages(count: number = 8): GalleryImage[] {
  return galleryImages.slice(0, count);
}
