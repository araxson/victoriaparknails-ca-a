"use client";

import * as React from "react";
import { ZoomIn } from "lucide-react";
import { GalleryImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { Image } from "./image";
import { Button } from "@/components/ui/shadcn/button";

// Constants
const GRID_COLUMN_CONFIGS = {
  2: { grid: "grid-cols-3 sm:grid-cols-2", sizes: "(max-width: 640px) 33.33vw, 50vw" },
  3: { grid: "grid-cols-3", sizes: "33.33vw" },
  4: { grid: "grid-cols-3 sm:grid-cols-3 md:grid-cols-4", sizes: "(max-width: 768px) 33.33vw, 25vw" },
  5: { grid: "grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", sizes: "(max-width: 640px) 33.33vw, (max-width: 768px) 33.33vw, (max-width: 1024px) 25vw, 20vw" },
  6: { grid: "grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6", sizes: "(max-width: 640px) 33.33vw, (max-width: 768px) 33.33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16.66vw" },
} as const;

const MASONRY_GRID = "columns-3 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick?: (index: number) => void;
  className?: string;
  columns?: 2 | 3 | 4 | 5 | 6 ;
  variant?: "default" | "masonry";
  interactive?: boolean;
}

// Utility functions
const getGridConfig = (columns: keyof typeof GRID_COLUMN_CONFIGS) => 
  GRID_COLUMN_CONFIGS[columns] || GRID_COLUMN_CONFIGS[6];

const getImageAlt = (alt: string | undefined, index: number) => 
  alt || `Gallery image ${index + 1}`;

// Interactive components
const HOVER_OVERLAY = "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300";
const HOVER_ICON = "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0";
const ICON_CONTAINER = "bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30";

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
                className="group relative block w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] p-0 h-auto"
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
                  <div className={HOVER_OVERLAY} />
                  <div className={HOVER_ICON}>
                    <div className={ICON_CONTAINER}>
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
            className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] p-0 h-auto"
          >
            <Image
              src={image.src}
              alt={getImageAlt(image.alt, index)}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes={imageSizes}
              loading="lazy"
            />
            <div className={HOVER_OVERLAY} />
            <div className={HOVER_ICON}>
              <div className={ICON_CONTAINER}>
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
