import * as React from "react";
import { GalleryImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { Image } from "./image";
import { 
  MASONRY_GRID,
  getGridConfig,
  getImageAlt 
} from "@/lib/gallery-config";

interface StaticGalleryGridProps {
  images: GalleryImage[];
  className?: string;
  columns?: 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "masonry";
}

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