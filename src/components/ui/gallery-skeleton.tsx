import * as React from "react";
import { cn } from "@/lib/utils";

// Constants
const GRID_COLUMN_CONFIGS = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",
} as const;

const MASONRY_GRID = "columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4";
const SKELETON_BASE = "bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl";

interface GallerySkeletonProps {
  columns?: 2 | 3 | 4 | 5 | 6;
  itemCount?: number;
  className?: string;
  variant?: "grid" | "masonry";
}

// Utility functions
const getGridClasses = (columns: keyof typeof GRID_COLUMN_CONFIGS) => 
  GRID_COLUMN_CONFIGS[columns] || GRID_COLUMN_CONFIGS[6];

const getRandomHeight = () => `${200 + Math.random() * 150}px`;

const renderMasonrySkeleton = (itemCount: number, className?: string) => (
  <div className={cn(MASONRY_GRID, className)}>
    {Array.from({ length: itemCount }).map((_, i) => (
      <div key={i} className="break-inside-avoid mb-4">
        <div
          className={cn(SKELETON_BASE, "w-full")}
          style={{ height: getRandomHeight() }}
        />
      </div>
    ))}
  </div>
);

const renderGridSkeleton = (itemCount: number, gridClasses: string, className?: string) => (
  <div className={cn(`grid ${gridClasses} gap-4 sm:gap-6 md:gap-8`, className)}>
    {Array.from({ length: itemCount }).map((_, i) => (
      <div key={i} className={cn(SKELETON_BASE, "aspect-square")} />
    ))}
  </div>
);

export function GallerySkeleton({
  columns = 6,
  itemCount = 12,
  className,
  variant = "grid",
}: GallerySkeletonProps) {
  if (variant === "masonry") {
    return renderMasonrySkeleton(itemCount, className);
  }

  const gridClasses = getGridClasses(columns);
  return renderGridSkeleton(itemCount, gridClasses, className);
} 