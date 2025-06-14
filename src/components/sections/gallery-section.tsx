"use client";

import * as React from "react";
import Link from "next/link";
import { galleryImages } from "@/data/gallery";
import { Badge } from "@/components/ui/shadcn/data-display/badge";
import { Button } from "@/components/ui/shadcn/inputs/button";
import { Section } from "@/components/layouts";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { GalleryModal } from "@/components/ui/gallery-modal";
import { AnimatedDetail } from "@/components/ui/animated-elements";

export function GallerySection() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [initialIndex, setInitialIndex] = React.useState(0);

  // Get featured gallery images
  const featuredImages = React.useMemo(() => 
    galleryImages
      .filter(image => image.featured)
      .slice(0, 8), 
    []
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
    <Section className="bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <AnimatedDetail>
            <Badge variant="outline" className="mb-6 px-6 py-2 text-base rounded-full font-medium">
              Our Gallery
            </Badge>
          </AnimatedDetail>
          
          <AnimatedDetail>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight max-w-4xl mx-auto">Our Work</h2>
          </AnimatedDetail>
          
          <AnimatedDetail>
            <p className="mx-auto max-w-3xl text-muted-foreground text-base sm:text-lg leading-relaxed">
              Browse our gallery of beautiful nail designs and services.
            </p>
          </AnimatedDetail>
        </div>
          
          <GalleryGrid 
            images={featuredImages} 
            onImageClick={handleImageClick}
            className="mx-auto"
          />

          <AnimatedDetail className="flex justify-center mt-10 sm:mt-12">
            <Button asChild size="lg" className="font-semibold h-auto py-3 text-base">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </AnimatedDetail>
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