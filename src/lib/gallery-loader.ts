import { GalleryImage } from '@/data/types';

// Import the static manifest generated at build time
let galleryManifest: {
  generated: string;
  totalImages: number;
  images: GalleryImage[];
  supportedFormats: string[];
} | null = null;

// Dynamic import to handle cases where manifest doesn't exist yet
async function loadManifest() {
  if (galleryManifest) return galleryManifest;
  
  try {
    const manifest = await import('@/data/gallery-manifest.json');
    galleryManifest = manifest.default || manifest;
    return galleryManifest;
  } catch {
    console.warn('Gallery manifest not found, using fallback images');
    return null;
  }
}

/**
 * Get all images from the static manifest (build-time generated)
 * This is client-safe and works with static export
 */
export async function getAllGalleryImagesFromFolder(): Promise<GalleryImage[]> {
  const manifest = await loadManifest();
  return manifest?.images || [];
}

/**
 * Get random selection of gallery images
 * Uses Fisher-Yates shuffle for true randomness
 */
export function getRandomGalleryImages(
  images: GalleryImage[], 
  count: number = 30
): GalleryImage[] {
  if (images.length <= count) {
    return shuffleArray([...images]);
  }
  
  const shuffled = shuffleArray([...images]);
  return shuffled.slice(0, count);
}

/**
 * Fisher-Yates shuffle algorithm for true random distribution
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get images with priority for WebP format for performance
 */
export function optimizeImageOrder(images: GalleryImage[]): GalleryImage[] {
  return images.sort((a, b) => {
    const aIsWebP = a.src.toLowerCase().endsWith('.webp');
    const bIsWebP = b.src.toLowerCase().endsWith('.webp');
    
    // Prioritize WebP images for better performance
    if (aIsWebP && !bIsWebP) return -1;
    if (!aIsWebP && bIsWebP) return 1;
    return 0;
  });
}

/**
 * Get featured gallery images with smart selection
 * Combines performance optimization with randomness
 */
export async function getFeaturedGalleryImages(
  count: number = 8,
  randomize: boolean = true
): Promise<GalleryImage[]> {
  const allImages = await getAllGalleryImagesFromFolder();
  const optimizedImages = optimizeImageOrder(allImages);
  
  if (randomize) {
    return getRandomGalleryImages(optimizedImages, count);
  }
  
  return optimizedImages.slice(0, count);
}

/**
 * Get manifest information (for debugging/stats)
 */
export async function getGalleryManifestInfo() {
  const manifest = await loadManifest();
  return manifest ? {
    generated: manifest.generated,
    totalImages: manifest.totalImages,
    supportedFormats: manifest.supportedFormats
  } : null;
} 