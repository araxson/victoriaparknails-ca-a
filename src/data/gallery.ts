import { GalleryImage } from "./types";

/**
 * Static gallery images - All images are defined here for SSG optimization
 * This eliminates the need for dynamic API calls and enables full static generation
 */
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/victoriaparknails-0001.webp",
    alt: "Victoria Park Nails - Professional manicure service",
  },
  {
    src: "/images/gallery/victoriaparknails-0002.webp",
    alt: "Victoria Park Nails - Elegant nail art design",
  },
  {
    src: "/images/gallery/victoriaparknails-0003.webp",
    alt: "Victoria Park Nails - Luxury pedicure treatment",
  },
  {
    src: "/images/gallery/victoriaparknails-0004.webp",
    alt: "Victoria Park Nails - Custom gel nail design",
  },
  {
    src: "/images/gallery/victoriaparknails-0005.webp",
    alt: "Victoria Park Nails - Acrylic nail extensions",
  },
  {
    src: "/images/gallery/victoriaparknails-0006.webp",
    alt: "Victoria Park Nails - French manicure style",
  },
  {
    src: "/images/gallery/victoriaparknails-0007.webp",
    alt: "Victoria Park Nails - Intricate nail art",
  },
  {
    src: "/images/gallery/victoriaparknails-0008.webp",
    alt: "Victoria Park Nails - Spa pedicure service",
  },
  {
    src: "/images/gallery/victoriaparknails-0009.webp",
    alt: "Victoria Park Nails - Colorful nail designs",
  },
  {
    src: "/images/gallery/victoriaparknails-0010.webp",
    alt: "Victoria Park Nails - Professional nail care",
  },
  {
    src: "/images/gallery/victoriaparknails-0011.webp",
    alt: "Victoria Park Nails - Shellac manicure finish",
  },
  {
    src: "/images/gallery/victoriaparknails-0012.webp",
    alt: "Victoria Park Nails - Detailed nail artwork",
  },
  {
    src: "/images/gallery/victoriaparknails-0013.webp",
    alt: "Victoria Park Nails - Relaxing spa environment",
  },
  {
    src: "/images/gallery/victoriaparknails-0014.webp",
    alt: "Victoria Park Nails - Premium nail treatments",
  },
  {
    src: "/images/gallery/victoriaparknails-0015.webp",
    alt: "Victoria Park Nails - Creative nail designs",
  },
  {
    src: "/images/gallery/victoriaparknails-0016.webp",
    alt: "Victoria Park Nails - Manicure and pedicure combo",
  },
  {
    src: "/images/gallery/victoriaparknails-0017.webp",
    alt: "Victoria Park Nails - Trendy nail fashion",
  },
  {
    src: "/images/gallery/victoriaparknails-0018.webp",
    alt: "Victoria Park Nails - Professional nail technician at work",
  },
  {
    src: "/images/gallery/victoriaparknails-0019.webp",
    alt: "Victoria Park Nails - Beautiful nail transformation",
  },
  {
    src: "/images/gallery/victoriaparknails-0020.webp",
    alt: "Victoria Park Nails - Elegant bridal nail design",
  },
  {
    src: "/images/gallery/victoriaparknails-0021.webp",
    alt: "Victoria Park Nails - Seasonal nail art collection",
  },
  {
    src: "/images/gallery/victoriaparknails-0022.webp",
    alt: "Victoria Park Nails - Luxury salon interior",
  },
];

/**
 * Get a subset of gallery images for featured display
 */
export function getFeaturedGalleryImages(count: number = 8): GalleryImage[] {
  return galleryImages.slice(0, count);
}

/**
 * Get all gallery images (for full gallery page)
 */
export function getAllGalleryImages(): GalleryImage[] {
  return galleryImages;
}
