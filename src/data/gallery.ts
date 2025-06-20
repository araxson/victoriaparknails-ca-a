import { GalleryImage } from "./types";
import { 
  getAllGalleryImagesFromFolder, 
  getRandomGalleryImages,
  getFeaturedGalleryImages as getDynamicFeaturedImages
} from "@/lib/gallery-loader";

/**
 * Static gallery images - Fallback for SSG and when dynamic loading fails
 * This ensures the site works even without file system access
 */
export const fallbackGalleryImages: GalleryImage[] = [
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
 * Get all gallery images dynamically from the filesystem
 * Falls back to static images if dynamic loading fails
 */
export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  try {
    const dynamicImages = await getAllGalleryImagesFromFolder();
    return dynamicImages.length > 0 ? dynamicImages : fallbackGalleryImages;
  } catch (error) {
    console.error("Failed to load gallery images dynamically, using fallback:", error);
    return fallbackGalleryImages;
  }
}

/**
 * Get a random subset of gallery images for featured display
 * @param count Number of images to return (default: 8)
 * @param randomize Whether to randomize the selection (default: true)
 */
export async function getFeaturedGalleryImages(
  count: number = 8, 
  randomize: boolean = true
): Promise<GalleryImage[]> {
  try {
    return await getDynamicFeaturedImages(count, randomize);
  } catch (error) {
    console.error("Failed to load featured images dynamically, using fallback:", error);
    const images = randomize 
      ? getRandomGalleryImages(fallbackGalleryImages, count)
      : fallbackGalleryImages.slice(0, count);
    return images;
  }
}

/**
 * Get random gallery images for dynamic displays
 * @param count Number of images to return (default: 30)
 */
export async function getRandomGalleryImagesAsync(count: number = 30): Promise<GalleryImage[]> {
  const allImages = await getAllGalleryImages();
  return getRandomGalleryImages(allImages, count);
}

/**
 * Legacy function for backward compatibility
 * @deprecated Use getFeaturedGalleryImages instead
 */
export function getFeaturedGalleryImagesSync(count: number = 8): GalleryImage[] {
  return fallbackGalleryImages.slice(0, count);
}
