"use client";

import * as React from "react";
import { useGallery } from "@/hooks/use-gallery";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { GalleryModal } from "@/components/ui/gallery-modal";
import { HeroSection } from "@/components/sections/hero-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Section } from "@/components/layouts";
import { Button } from "@/components/ui";

export default function GalleryPage() {
  const { images: galleryImages, loading, error } = useGallery();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [initialIndex, setInitialIndex] = React.useState(0);
  
  // Load more functionality
  const ITEMS_PER_ROW = 6;
  const INITIAL_ROWS = 2;
  const [visibleCount, setVisibleCount] = React.useState(ITEMS_PER_ROW * INITIAL_ROWS);
  
  const visibleImages = React.useMemo(() => {
    return galleryImages.slice(0, visibleCount);
  }, [galleryImages, visibleCount]);
  
  const hasMoreImages = visibleCount < galleryImages.length;
  
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_ROW, galleryImages.length));
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
          subtitle="Browse through our collection of beautiful nail designs and salon photos"
          videoSrc="/videos/hero-bg-video-001.mp4"
        />

        <Section variant="muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Gallery</h2>
            
            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="text-lg">Loading gallery images...</div>
              </div>
            )}
            
            {error && (
              <div className="flex justify-center items-center py-12">
                <div className="text-lg text-red-600">Error: {error}</div>
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
                  <div className="flex justify-center mt-8">
                    <Button onClick={handleLoadMore} size="lg">
                      Load More
                    </Button>
                  </div>
                )}
              </>
            )}
            
            {!loading && !error && galleryImages.length === 0 && (
              <div className="flex justify-center items-center py-12">
                <div className="text-lg">No gallery images found.</div>
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
