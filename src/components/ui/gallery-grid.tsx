"use client";

import * as React from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { GalleryImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-elements";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  className?: string;
}

export function GalleryGrid({
  images,
  onImageClick,
  className,
}: GalleryGridProps) {
  return (
    <AnimatedList
      className={cn(
        "grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4",
        className
      )}
    >
      {images.map((image, index) => (
        <button
          key={image.id}
          className="group relative block aspect-square w-full overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-opacity hover:opacity-80"
          onClick={() => onImageClick(index)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Eye className="h-6 w-6 text-white" />
          </div>
        </button>
      ))}
    </AnimatedList>
  );
}