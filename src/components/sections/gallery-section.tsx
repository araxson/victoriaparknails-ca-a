import * as React from "react";
import Link from "next/link";
import { Button, GallerySkeleton } from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { ArrowRight } from "lucide-react";
import { getAllGalleryImages } from "@/lib/gallery-loader";
import { ClientGalleryGrid } from "@/components/ui/client-gallery-grid";

interface GallerySectionProps {
  isLoading?: boolean;
}

export async function GallerySection({ isLoading = false }: GallerySectionProps) {
  if (isLoading) {
    return (
      <Section variant="muted" id="gallery">
        <div className="container">
          <SectionHeader
            badge="Our Work"
            title="Gallery"
            description="Browse our collection of beautiful nail art and transformations"
            centered
          />
          
          <div className="mt-8">
            <GallerySkeleton 
              count={8}
              columns={4}
            />
          </div>
          
          <div className="text-center mt-8">
            <div className="h-10 w-40 bg-muted rounded-md mx-auto animate-pulse" />
          </div>
        </div>
      </Section>
    );
  }

  // Get ALL gallery images for client-side randomization
  // This ensures fresh random selection on every page visit
  const allGalleryImages = await getAllGalleryImages();

  return (
    <Section variant="muted" id="gallery">
      <div className="container">
        <SectionHeader
          badge="Our Work"
          title="Gallery"
          description="Browse our collection of beautiful nail art and transformations"
          centered
        />
        
        <div className="mt-8">
          <ClientGalleryGrid 
            images={allGalleryImages} 
            columns={4}
            displayCount={8}
            randomizeOnClient={true}
          />
        </div>
        
        <div className="text-center mt-8">
          <Button asChild size="lg" className="gap-2">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
