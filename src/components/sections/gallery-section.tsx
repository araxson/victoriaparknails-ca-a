import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { StaticGalleryGrid } from "@/components/ui/gallery-grid-static";
import { ArrowRight } from "lucide-react";
import { getFeaturedGalleryImages } from "@/data/gallery";

export async function GallerySection() {
  // Get featured gallery images dynamically at build time
  // This will automatically include any new images added to the gallery folder
  const featuredImages = await getFeaturedGalleryImages(8, true);

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
