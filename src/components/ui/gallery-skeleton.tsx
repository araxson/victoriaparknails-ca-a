import * as React from "react";
import { cn } from "@/lib/utils";

interface GallerySkeletonProps {
  columns?: 2 | 3 | 4 | 5 | 6;
  itemCount?: number;
  className?: string;
  variant?: "grid" | "masonry";
}

export function GallerySkeleton({
  columns = 6,
  itemCount = 12,
  className,
  variant = "grid",
}: GallerySkeletonProps) {
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

  if (variant === "masonry") {
    return (
      <div className={cn("columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4", className)}>
        {Array.from({ length: itemCount }).map((_, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-4"
          >
            <div
              className="w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl"
              style={{
                height: `${200 + Math.random() * 150}px`, // Random heights for masonry effect
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn(`grid ${gridColumnsClasses} gap-4 sm:gap-6 md:gap-8`, className)}>
      {Array.from({ length: itemCount }).map((_, i) => (
        <div
          key={i}
          className="aspect-square bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl"
        />
      ))}
    </div>
  );
} 