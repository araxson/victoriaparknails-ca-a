"use client";

import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import { ContactInfoSection } from "@/components/sections/contact-info-section";
import { GalleryCarousel } from "@/components/ui/gallery-carousel";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Group images by category
  const categories = [...new Set(galleryImages.map(image => image.category))];
  
  // Filter images based on selected category
  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Gallery</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Browse through our collection of beautiful nail designs and salon photos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.replace(/-/g, " ")}
              </button>
            ))}
          </div>

          {/* Gallery Carousel */}
          {filteredImages.length > 0 && (
            <GalleryCarousel 
              images={filteredImages}
              showThumbnails={true}
            />
          )}
        </div>
      </section>
      
      <ContactInfoSection />
    </main>
  );
}