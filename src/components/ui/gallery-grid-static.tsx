import * as React from "react";
import { GalleryImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { Image } from "./image";

// Constants
const GRID_COLUMN_CONFIGS = {
  2: { grid: "grid-cols-3 sm:grid-cols-2", sizes: "(max-width: 640px) 33.33vw, 50vw" },
  3: { grid: "grid-cols-3", sizes: "33.33vw" },
  4: { grid: "grid-cols-3 sm:grid-cols-3 md:grid-cols-4", sizes: "(max-width: 768px) 33.33vw, 25vw" },
  5: { grid: "grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", sizes: "(max-width: 640px) 33.33vw, (max-width: 768px) 33.33vw, (max-width: 1024px) 25vw, 20vw" },
  6: { grid: "grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6", sizes: "(max-width: 640px) 33.33vw, (max-width: 768px) 33.33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16.66vw" },
} as const;

const MASONRY_GRID = "columns-3 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4";

interface StaticGalleryGridProps {
  images: GalleryImage[];
  className?: string;
  columns?: 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "masonry";
}

// Utility functions
const getGridConfig = (columns: keyof typeof GRID_COLUMN_CONFIGS) => 
  GRID_COLUMN_CONFIGS[columns] || GRID_COLUMN_CONFIGS[6];

const getImageAlt = (alt: string | undefined, index: number) => 
  alt || `Gallery image ${index + 1}`;

/**
 * Server-only gallery grid component optimized for SSG
 * This component renders static HTML with no client-side JavaScript
 * Perfect for featured galleries and improved SEO/performance
 */
export function StaticGalleryGrid({
  images,
  className,
  columns = 5,
  variant = "default",
}: StaticGalleryGridProps) {
  const { grid: gridClasses, sizes: imageSizes } = getGridConfig(columns);
  
  // For masonry layout
  if (variant === "masonry") {
    return (
      <div className={cn(MASONRY_GRID, className)}>
        {images.map((image, index) => (
          <div key={`static-gallery-${index}`} className="break-inside-avoid mb-4">
            <div className="relative block w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <div className="relative w-full">
                <Image
                  src={image.src}
                  alt={getImageAlt(image.alt, index)}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes={imageSizes}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // For default grid layout
  return (
    <div className={cn(`grid ${gridClasses} gap-4 sm:gap-6 md:gap-8`, className)}>
      {images.map((image, index) => (
        <div
          key={`static-gallery-${index}`}
          className="relative block aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
        >
          <Image
            src={image.src}
            alt={getImageAlt(image.alt, index)}
            fill
            className="object-cover"
            sizes={imageSizes}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
} 