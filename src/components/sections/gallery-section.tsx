import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { StaticGalleryGrid } from "@/components/ui/gallery-grid-static";
import { ArrowRight } from "lucide-react";
import { getFeaturedGalleryImages } from "@/data/gallery";

export function GallerySection() {
  // Get featured gallery images statically at build time
  const featuredImages = getFeaturedGalleryImages(8);

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
          <StaticGalleryGrid 
            images={featuredImages} 
            columns={4}
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
