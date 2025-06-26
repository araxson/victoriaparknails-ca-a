"use client";

import * as React from "react";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { GalleryModal } from "@/components/ui/gallery-modal";
import { Button, GallerySkeleton } from "@/components/ui";
import { GalleryImage } from "@/data/types";

interface StaticGalleryClientProps {
  images: GalleryImage[];
  randomizeOnClient?: boolean;
  displayCount?: number;
}

// Fisher-Yates shuffle algorithm for client-side randomization
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function StaticGalleryClient({ 
  images: initialImages, 
  randomizeOnClient = true,
  displayCount = 30 
}: StaticGalleryClientProps) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [initialIndex, setInitialIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [galleryImages, setGalleryImages] = React.useState<GalleryImage[]>(initialImages);
  
  // Client-side randomization effect
  React.useEffect(() => {
    if (randomizeOnClient && initialImages.length > 0) {
      // Randomize and select images on client side
      const shuffled = shuffleArray(initialImages);
      const selected = shuffled.slice(0, Math.min(displayCount, shuffled.length));
      setGalleryImages(selected);
    } else {
      setGalleryImages(initialImages);
    }
    
    // Simulate loading state for initial render
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [initialImages, randomizeOnClient, displayCount]);
  
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

  const handleRefreshGallery = () => {
    if (randomizeOnClient && initialImages.length > 0) {
      setIsLoading(true);
      const shuffled = shuffleArray(initialImages);
      const selected = shuffled.slice(0, Math.min(displayCount, shuffled.length));
      setGalleryImages(selected);
      setVisibleCount(ITEMS_PER_ROW * INITIAL_ROWS);
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return (
    <>
      {/* Gallery Header with Refresh Option */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-muted-foreground">
            Showing {galleryImages.length} images from our collection
          </p>
        </div>
        {randomizeOnClient && (
          <Button 
            onClick={handleRefreshGallery}
            variant="outline"
            size="sm"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Refresh Gallery"}
          </Button>
        )}
      </div>

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