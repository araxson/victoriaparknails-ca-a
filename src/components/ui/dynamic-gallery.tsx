"use client";

import * as React from "react";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { GalleryModal } from "@/components/ui/gallery-modal";
import { Button, GallerySkeleton } from "@/components/ui";
import { useDynamicGallery } from "@/hooks/use-gallery";
import { GalleryImage } from "@/data/types";

interface DynamicGalleryProps {
  count?: number;
  columns?: 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "masonry";
  featured?: boolean;
  className?: string;
  fallbackImages?: GalleryImage[];
}

export function DynamicGallery({
  count = 8,
  columns = 5,
  variant = "default",
  featured = false,
  className,
  fallbackImages = [],
}: DynamicGalleryProps) {
  const { images, isLoading, error, refresh } = useDynamicGallery({
    count,
    featured,
    autoLoad: true,
  });

  const [modalOpen, setModalOpen] = React.useState(false);
  const [initialIndex, setInitialIndex] = React.useState(0);

  const handleImageClick = (index: number) => {
    setInitialIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const displayImages = images.length > 0 ? images : fallbackImages;

  if (isLoading && displayImages.length === 0) {
    return (
      <div className={className}>
        <GallerySkeleton 
          count={count} 
          columns={columns} 
          variant={variant}
        />
      </div>
    );
  }

  if (error && displayImages.length === 0) {
    return (
      <div className={className}>
        <div className="text-center py-8 space-y-4">
          <p className="text-muted-foreground">Failed to load gallery images</p>
          <Button onClick={refresh} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <GalleryGrid
        images={displayImages}
        onImageClick={handleImageClick}
        columns={columns}
        variant={variant}
      />

      {modalOpen && (
        <GalleryModal
          images={displayImages}
          initialIndex={initialIndex}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
