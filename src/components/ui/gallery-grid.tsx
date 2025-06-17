"use client";

import * as React from "react";
import { Eye } from "lucide-react";
import { GalleryImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { Image } from "./image";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  className?: string;
  columns?: 2 | 3 | 4 | 5 | 6;
}

export function GalleryGrid({
  images,
  onImageClick,
  className,
  columns = 5,
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

  return (
    <div
      className={cn(
        `grid ${gridColumnsClasses} gap-3 sm:gap-4 md:gap-6`,
        className,
      )}
    >
      {images.map((image, index) => (
        <button
          key={`gallery-${index}`}
          className="group relative block aspect-square w-full overflow-hidden rounded-md"
          onClick={() => onImageClick(index)}
        >
          <Image
            src={image.src}
            alt={image.alt || `Gallery image ${index + 1}`}
            fill
            className="object-cover"
            sizes={imageSizes}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye className="h-8 w-8 text-white" />
          </div>
        </button>
      ))}
    </div>
  );
}
