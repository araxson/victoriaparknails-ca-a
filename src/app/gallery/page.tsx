"use client";

import * as React from "react";
import { galleryImages } from "@/data/gallery";
import { ContactInfoSection } from "@/components/sections/contact-info-section";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { GalleryModal } from "@/components/ui/gallery-modal";
import { HeroSection } from '@/components/sections/hero-section';

export default function GalleryPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [initialIndex, setInitialIndex] = React.useState(0);

  const handleImageClick = (index: number) => {
    setInitialIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <HeroSection 
          title="Our Gallery"
          subtitle="Browse through our collection of beautiful nail designs and salon photos"
          videoSrc="/videos/hero-bg-video-002.mp4"
        />

        <section className="w-full py-12 md:py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {galleryImages.length > 0 && (
              <GalleryGrid
                images={galleryImages}
                onImageClick={handleImageClick}
              />
            )}
          </div>
        </section>
        
        <ContactInfoSection />
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