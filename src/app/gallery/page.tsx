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
import { Grid, Grid3X3, LayoutGrid, Search } from "lucide-react";
import { Input } from "@/components/ui/shadcn/input";

type ViewMode = "grid" | "masonry";

export default function GalleryPage() {
  const { images: galleryImages, loading, error } = useGallery();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [initialIndex, setInitialIndex] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [viewMode, setViewMode] = React.useState<ViewMode>("grid");
  
  // Load more functionality
  const ITEMS_PER_ROW = 12;
  const INITIAL_ROWS = 3;
  const [visibleCount, setVisibleCount] = React.useState(ITEMS_PER_ROW * INITIAL_ROWS);
  
  // Filter images based on search query
  const filteredImages = React.useMemo(() => {
    if (!searchQuery.trim()) return galleryImages;
    
    return galleryImages.filter((image) =>
      image.alt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.src.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [galleryImages, searchQuery]);
  
  const visibleImages = React.useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);
  
  const hasMoreImages = visibleCount < filteredImages.length;
  
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_ROW, filteredImages.length));
  };

  const handleImageClick = (index: number) => {
    setInitialIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(ITEMS_PER_ROW * INITIAL_ROWS); // Reset visible count when searching
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
            {/* Header with controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Our Gallery</h1>
                <p className="text-muted-foreground">
                  {loading ? "Loading..." : `${filteredImages.length} beautiful images`}
                </p>
              </div>
              
              {/* Search and view controls */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search images..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                
                {/* View mode toggle */}
                <div className="flex border rounded-lg p-1 bg-background">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="px-3"
                  >
                    <Grid3X3 className="h-4 w-4" />
                    <span className="sr-only">Grid view</span>
                  </Button>
                  <Button
                    variant={viewMode === "masonry" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("masonry")}
                    className="px-3"
                  >
                    <LayoutGrid className="h-4 w-4" />
                    <span className="sr-only">Masonry view</span>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Gallery content */}
            {loading && <GallerySkeleton columns={6} itemCount={24} variant={viewMode === "masonry" ? "masonry" : "grid"} />}
            
            {error && (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center max-w-md">
                  <h3 className="text-lg font-semibold text-destructive mb-2">
                    Failed to load gallery
                  </h3>
                  <p className="text-muted-foreground mb-4">{error}</p>
                  <Button onClick={() => window.location.reload()}>
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
                  variant={viewMode === "masonry" ? "masonry" : "default"}
                />
                
                {hasMoreImages && (
                  <div className="flex justify-center mt-12">
                    <Button onClick={handleLoadMore} size="lg" className="px-8">
                      Load More Images
                      <span className="ml-2 text-sm opacity-75">
                        ({visibleImages.length} of {filteredImages.length})
                      </span>
                    </Button>
                  </div>
                )}
                
                {!hasMoreImages && filteredImages.length > ITEMS_PER_ROW && (
                  <div className="text-center mt-12 py-8 border-t">
                    <p className="text-muted-foreground">
                      You've reached the end of our gallery. 
                      <br />
                      <span className="font-medium">
                        {filteredImages.length} beautiful images in total
                      </span>
                    </p>
                  </div>
                )}
              </>
            )}
            
            {!loading && !error && filteredImages.length === 0 && searchQuery && (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center max-w-md">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No images found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search terms or{" "}
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-primary hover:underline"
                    >
                      view all images
                    </button>
                  </p>
                </div>
              </div>
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
          images={filteredImages}
          initialIndex={initialIndex}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
