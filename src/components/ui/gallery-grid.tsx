"use client";

import * as React from "react";
import { Eye, ZoomIn } from "lucide-react";
import { GalleryImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { Image } from "./image";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  className?: string;
  columns?: 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "masonry";
}

export function GalleryGrid({
  images,
  onImageClick,
  className,
  columns = 5,
  variant = "default",
}: GalleryGridProps) {
  // Determine grid column classes based on columns prop
  const gridColumnsClasses = React.useMemo(() => {
    switch (columns) {
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-2 sm:grid-cols-3";
      case 4:
        return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
      case 5:
        return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
      case 6:
      default:
        return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6";
    }
  }, [columns]);

  // Determine sizes attribute based on column count
  const imageSizes = React.useMemo(() => {
    switch (columns) {
      case 2:
        return "50vw";
      case 3:
        return "(max-width: 640px) 50vw, 33.33vw";
      case 4:
        return "(max-width: 640px) 50vw, (max-width: 768px) 33.33vw, 25vw";
      case 5:
        return "(max-width: 640px) 50vw, (max-width: 768px) 33.33vw, (max-width: 1024px) 25vw, 20vw";
      case 6:
      default:
        return "(max-width: 640px) 50vw, (max-width: 768px) 33.33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16.66vw";
    }
  }, [columns]);

  if (variant === "masonry") {
    return (
      <div className={cn("columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4", className)}>
        {images.map((image, index) => (
          <div
            key={`gallery-${index}`}
            className="break-inside-avoid mb-4"
          >
            <button
              className="group relative block w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              onClick={() => onImageClick(index)}
            >
              <div className="relative w-full">
                <Image
                  src={image.src}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes={imageSizes}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                    <ZoomIn className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        `grid ${gridColumnsClasses} gap-4 sm:gap-6 md:gap-8`,
        className,
      )}
    >
      {images.map((image, index) => (
        <button
          key={`gallery-${index}`}
          className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
          onClick={() => onImageClick(index)}
        >
          <Image
            src={image.src}
            alt={image.alt || `Gallery image ${index + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes={imageSizes}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
              <ZoomIn className="h-6 w-6 text-white" />
            </div>
          </div>
          
          {/* Image number indicator */}
          <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {index + 1}
          </div>
        </button>
      ))}
    </div>
  );
}
