"use client";

import * as React from "react";
import { ZoomIn } from "lucide-react";
import { GalleryImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { Image } from "./image";
import { Button } from "@/components/ui/shadcn/button";
import { 
  MASONRY_GRID,
  GALLERY_ANIMATION_CLASSES,
  getGridConfig,
  getImageAlt 
} from "@/lib/gallery-config";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick?: (index: number) => void;
  className?: string;
  columns?: 2 | 3 | 4 | 5 | 6 ;
  variant?: "default" | "masonry";
  interactive?: boolean;
}

// Main gallery component - optimized for both static and interactive use
export function GalleryGrid({
  images,
  onImageClick,
  className,
  columns = 5,
  variant = "default",
  interactive = true,
}: GalleryGridProps) {
  const { grid: gridClasses, sizes: imageSizes } = getGridConfig(columns);

  // For masonry layout
  if (variant === "masonry") {
    return (
      <div className={cn(MASONRY_GRID, className)}>
        {images.map((image, index) => (
          <div key={`gallery-${index}`} className="break-inside-avoid mb-4">
            {interactive && onImageClick ? (
              <Button
                variant="outline"
                size="lg"
                onClick={() => onImageClick(index)}
                className={`group relative block w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 ${GALLERY_ANIMATION_CLASSES.hover} p-0 h-auto`}
              >
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
                  <div className={GALLERY_ANIMATION_CLASSES.hoverOverlay} />
                  <div className={GALLERY_ANIMATION_CLASSES.hoverIcon}>
                    <div className={GALLERY_ANIMATION_CLASSES.iconContainer}>
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </Button>
            ) : (
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
            )}
          </div>
        ))}
      </div>
    );
  }

  // For default grid layout
  return (
    <div className={cn(`grid ${gridClasses} gap-4 sm:gap-6 md:gap-8`, className)}>
      {images.map((image, index) => (
        interactive && onImageClick ? (
          <Button
            key={`gallery-${index}`}
            variant="outline"
            size="lg"
            onClick={() => onImageClick(index)}
            className={`group relative block aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 ${GALLERY_ANIMATION_CLASSES.hover} p-0 h-auto`}
          >
            <Image
              src={image.src}
              alt={getImageAlt(image.alt, index)}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes={imageSizes}
              loading="lazy"
            />
            <div className={GALLERY_ANIMATION_CLASSES.hoverOverlay} />
            <div className={GALLERY_ANIMATION_CLASSES.hoverIcon}>
              <div className={GALLERY_ANIMATION_CLASSES.iconContainer}>
                <ZoomIn className="h-6 w-6 text-white" />
              </div>
            </div>
            
            {/* Image number indicator */}
            <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {index + 1}
            </div>
          </Button>
        ) : (
          <div
            key={`gallery-${index}`}
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
        )
      ))}
    </div>
  );
}
