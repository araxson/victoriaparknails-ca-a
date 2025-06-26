"use client";

import * as React from "react";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { GalleryModal } from "@/components/ui/gallery-modal";
import { Button, GallerySkeleton } from "@/components/ui";
import { GalleryImage } from "@/data/types";

interface StaticGalleryClientProps {
  images: GalleryImage[];
}

export function StaticGalleryClient({ images: galleryImages }: StaticGalleryClientProps) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [initialIndex, setInitialIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  
  // Simulate loading state for initial render
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  // Load more functionality
  const ITEMS_PER_ROW = 12;
  const INITIAL_ROWS = 6;
  const [visibleCount, setVisibleCount] = React.useState(ITEMS_PER_ROW * INITIAL_ROWS);
  
  const visibleImages = React.useMemo(() => {
    return galleryImages.slice(0, visibleCount);
  }, [galleryImages, visibleCount]);
  
  const hasMoreImages = visibleCount < galleryImages.length;
  
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + (ITEMS_PER_ROW * 2), galleryImages.length));
  };

  const handleLoadAll = () => {
    setVisibleCount(galleryImages.length);
  };

  const handleImageClick = (index: number) => {
    setInitialIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {isLoading ? (
        <GallerySkeleton count={visibleCount} columns={6} />
      ) : (
        <GalleryGrid
          images={visibleImages}
          onImageClick={handleImageClick}
          columns={6}
        />
      )}      
      {!isLoading && hasMoreImages && (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <Button onClick={handleLoadMore} size="lg" className="px-8">
            Load More Images
            <span className="ml-2 text-sm opacity-75">
              ({visibleImages.length} of {galleryImages.length})
            </span>
          </Button>
          <Button 
            onClick={handleLoadAll} 
            variant="outline" 
            size="lg" 
            className="px-8"
          >
            Load All Images
          </Button>
        </div>
      )}
      
      {!isLoading && !hasMoreImages && galleryImages.length > ITEMS_PER_ROW && (
        <div className="text-center mt-12 py-8 border-t">
          <p className="text-muted-foreground">
            You&apos;ve reached the end of our gallery. 
            <br />
            <span className="font-medium">
              {galleryImages.length} beautiful images in total
            </span>
          </p>
        </div>
      )}

      {modalOpen && (
        <GalleryModal
          images={galleryImages}
          initialIndex={initialIndex}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
} 