import { GalleryImage } from './types';

// Import gallery images
const GALLERY_PATH = '/images/gallery';

// Helper function to get image path
const getImagePath = (path: string): string => `${GALLERY_PATH}/${path}`;

export const galleryImages: GalleryImage[] = Array.from(
  { length: 34 },
  (_, i) => {
    const imageNumber = (i + 1).toString().padStart(4, "0");
    return {
      id: `victoriaparknails-${imageNumber}`,
      src: getImagePath(`victoriaparknails-${imageNumber}.webp`),
      alt: `Victoria Park Nails and Spa Gallery Image ${i + 1}`,
      category: "General",
      featured: i < 8,
    };
  }
);
