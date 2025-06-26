"use client";

import * as React from "react";
import { GalleryImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { Image } from "./image";
import { 
  MASONRY_GRID,
  getGridConfig,
  getImageAlt 
} from "@/lib/gallery-config";

interface ClientGalleryGridProps {
  images: GalleryImage[];
  className?: string;
  columns?: 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "masonry";
  displayCount?: number;
  randomizeOnClient?: boolean;
}

// Fisher-Yates shuffle algorithm for client-side randomization
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Client-side gallery grid component with randomization
 * Perfect for static exports where we need fresh random selection on each visit
 */
export function ClientGalleryGrid({
  images: initialImages,
  className,
  columns = 4,
  variant = "default",
  displayCount = 8,
  randomizeOnClient = true,
}: ClientGalleryGridProps) {
  const [displayImages, setDisplayImages] = React.useState<GalleryImage[]>([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  const { grid: gridClasses, sizes: imageSizes } = getGridConfig(columns);
  
  // Client-side randomization effect
  React.useEffect(() => {
    if (randomizeOnClient && initialImages.length > 0) {
      const shuffled = shuffleArray(initialImages);
      const selected = shuffled.slice(0, Math.min(displayCount, shuffled.length));
      setDisplayImages(selected);
    } else {
      setDisplayImages(initialImages.slice(0, displayCount));
    }
    setIsLoaded(true);
  }, [initialImages, randomizeOnClient, displayCount]);
  
  // Show skeleton during initial client-side hydration
  if (!isLoaded) {
    return (
      <div className={cn(`grid ${gridClasses} gap-4 sm:gap-6 md:gap-8`, className)}>
        {Array.from({ length: displayCount }).map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="relative block aspect-square w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse"
          />
        ))}
      </div>
    );
  }
  
  // For masonry layout
  if (variant === "masonry") {
    return (
      <div className={cn(MASONRY_GRID, className)}>
        {displayImages.map((image, index) => (
          <div key={`client-gallery-${index}`} className="break-inside-avoid mb-4">
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
      {displayImages.map((image, index) => (
        <div
          key={`client-gallery-${index}`}
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