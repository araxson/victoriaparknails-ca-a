"use client";

import * as React from "react";
import { useGallery } from "@/hooks/use-gallery";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { GalleryModal } from "@/components/ui/gallery-modal";
import { GallerySkeleton } from "@/components/ui/gallery-skeleton";
import { HeroSection } from "@/components/sections/hero-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Section } from "@/components/layouts";
import { Button } from "@/components/ui";

export default function GalleryPage() {
  const { images: galleryImages, loading, error } = useGallery();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [initialIndex, setInitialIndex] = React.useState(0);
  
  // Load more functionality
  const ITEMS_PER_ROW = 12;
  const INITIAL_ROWS = 6; // Show 6 rows initially instead of 3
  const [visibleCount, setVisibleCount] = React.useState(ITEMS_PER_ROW * INITIAL_ROWS);
  
  const visibleImages = React.useMemo(() => {
    return galleryImages.slice(0, visibleCount);
  }, [galleryImages, visibleCount]);
  
  const hasMoreImages = visibleCount < galleryImages.length;
  
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + (ITEMS_PER_ROW * 2), galleryImages.length)); // Load 2 rows at a time
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
      <main className="min-h-screen flex-col">
        <HeroSection
          title="Our Gallery"
          subtitle="Explore our collection of beautiful nail art, designs, and salon moments"
          videoSrc="/videos/hero-bg-video-001.mp4"
        />

        <Section variant="muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Our Gallery</h1>
              <p className="text-muted-foreground">
                {loading ? "Loading..." : `${galleryImages.length} beautiful images`}
              </p>
            </div>
            
            {/* Gallery content */}
            {loading && <GallerySkeleton columns={6} itemCount={24} />}
            
            {error && (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center max-w-md">
                  <h3 className="text-lg font-semibold text-destructive mb-2">
                    Failed to load gallery
                  </h3>
                  <p className="text-muted-foreground mb-4">{error}</p>
                  <Button onClick={() => window.location.reload()} size="lg">
                    Try Again
                  </Button>
                </div>
              </div>
            )}
            
            {!loading && !error && visibleImages.length > 0 && (
              <>
                <GalleryGrid
                  images={visibleImages}
                  onImageClick={handleImageClick}
                  columns={6}
                />
                
                {hasMoreImages && (
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
                
                {!hasMoreImages && galleryImages.length > ITEMS_PER_ROW && (
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
              </>
            )}
            
            {!loading && !error && galleryImages.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center max-w-md">
                  <h3 className="text-lg font-semibold mb-2">No images available</h3>
                  <p className="text-muted-foreground">
                    Our gallery is currently empty. Please check back later.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Section>
        
        <CtaSection />
      </main>

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
