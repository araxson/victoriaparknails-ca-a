"use client";

import * as React from "react";
import Link from "next/link";
import { useGallery } from "@/hooks/use-gallery";
import { Button } from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { GalleryModal } from "@/components/ui/gallery-modal";
import { GallerySkeleton } from "@/components/ui/gallery-skeleton";
import { ArrowRight, Camera } from "lucide-react";

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
            title="Beautiful Nail Art & Designs"
            description="Discover our latest nail art creations, from elegant classics to trendy designs. Each image tells a story of creativity and craftsmanship."
          />

          {loading ? (
            <GallerySkeleton columns={6} itemCount={12} />
          ) : featuredImages.length > 0 ? (
            <>
              <GalleryGrid
                images={featuredImages}
                onImageClick={handleImageClick}
                columns={6}
                className="mb-8"
              />
              
              {/* CTA section */}
              <div className="flex flex-col items-center text-center space-y-6 mt-12 pt-8 border-t border-border/30">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Ready to see more?</h3>
                  <p className="text-muted-foreground max-w-md">
                    Browse our complete gallery to explore all of our nail art creations and get inspired for your next visit.
                  </p>
                  
                  <Button asChild size="lg" className="group">
                    <Link href="/gallery">
                      View Full Gallery
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <Camera className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gallery Coming Soon</h3>
              <p className="text-muted-foreground text-center max-w-md">
                We&apos;re preparing beautiful images of our work to share with you. Check back soon!
              </p>
            </div>
          )}
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
