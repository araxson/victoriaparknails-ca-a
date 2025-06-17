"use client";

import * as React from "react";
import Link from "next/link";
import { useGallery } from "@/hooks/use-gallery";
import { Button } from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { GalleryModal } from "@/components/ui/gallery-modal";

export function GallerySection() {
  const { images: allImages, loading } = useGallery();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [initialIndex, setInitialIndex] = React.useState(0);

  // Get first 12 images for featured display
  const featuredImages = React.useMemo(
    () => allImages.slice(0, 12),
    [allImages],
  );

  const handleImageClick = (index: number) => {
    setInitialIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Section variant="accent">
        <div className="container">
          <SectionHeader
            badge="Our Gallery"
            title="Our Work"
            description="Browse our gallery of beautiful nail designs and services."
          />

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-lg">Loading gallery...</div>
            </div>
          ) : (
            <GalleryGrid
              images={featuredImages}
              onImageClick={handleImageClick}
              columns={6}
            />
          )}

          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </Section>

      {modalOpen && (
        <GalleryModal
          images={featuredImages}
          initialIndex={initialIndex}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
