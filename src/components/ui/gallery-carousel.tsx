"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, X, Download, Share2 } from "lucide-react";
import { GalleryImage } from "@/data/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  Button,
  Image,
} from "@/components/ui";
import { cn } from "@/lib/utils";

interface GalleryCarouselProps {
  images: GalleryImage[];
  initialIndex?: number;
  onClose?: () => void;
  showThumbnails?: boolean;
}

export function GalleryCarousel({
  images,
  initialIndex = 0,
  onClose,
  showThumbnails = true,
}: GalleryCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(initialIndex);
  const [thumbnailCols, setThumbnailCols] = React.useState(3);
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const isProgrammaticScroll = React.useRef(false);

  // Handle responsive thumbnail columns
  React.useEffect(() => {
    const updateThumbnailCols = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width >= 1024) {
          setThumbnailCols(8);
        } else if (width >= 768) {
          setThumbnailCols(6);
        } else if (width >= 480) {
          setThumbnailCols(4);
        } else {
          setThumbnailCols(3);
        }
      }
    };

    updateThumbnailCols();
    window?.addEventListener('resize', updateThumbnailCols);
    return () => window?.removeEventListener('resize', updateThumbnailCols);
  }, []);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (!api || !thumbApi) return;
      isProgrammaticScroll.current = true;
      api.scrollTo(index);
      // Center the selected thumbnail in the carousel
      thumbApi.scrollTo(index);
    },
    [api, thumbApi],
  );

  React.useEffect(() => {
    if (!api) return;

    // Set initial current state and scroll to the initial index
    setCurrent(initialIndex);
    api.scrollTo(initialIndex, true);

    const onSelect = () => {
      if (isProgrammaticScroll.current) {
        isProgrammaticScroll.current = false;
        const selected = api.selectedScrollSnap();
        setCurrent(selected);
        return;
      }
      const selected = api.selectedScrollSnap();
      setCurrent(selected);
      // Center the thumbnail when navigating with arrow keys
      thumbApi?.scrollTo(selected);
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, thumbApi, initialIndex]);

  // Ensure thumbnail is centered when initialIndex changes
  React.useEffect(() => {
    if (thumbApi && initialIndex !== undefined) {
      thumbApi.scrollTo(initialIndex);
    }
  }, [thumbApi, initialIndex]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Let the dialog handle the Escape key, so we don't need to handle it here
      if (event.key === "ArrowLeft" && api) {
        event.preventDefault();
        api.scrollPrev();
      } else if (event.key === "ArrowRight" && api) {
        event.preventDefault();
        api.scrollNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [api]);

  const nextImage = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const prevImage = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const shareImage = React.useCallback(() => {
    if (typeof navigator !== 'undefined' && 'share' in navigator && images[current]) {
      navigator.share({
        title: `Gallery Image ${current + 1}`,
        text: images[current].alt || `Gallery image ${current + 1}`,
        url: window.location.href,
      }).catch(console.error);
    }
  }, [current, images]);

  return (
    <div className="w-full flex flex-col items-center h-full max-h-full p-0 m-0 bg-transparent">
      <div className="w-full flex-1 flex flex-col min-h-0">
        {/* Main carousel */}
        <div className="flex-1 min-h-0 flex items-center justify-center relative">
          <Carousel
            setApi={setApi}
            className="w-full h-full"
            opts={{
              loop: true,
              startIndex: initialIndex,
            }}
          >
            <CarouselContent className="h-full">
              {images.map((image, index) => (
                <CarouselItem key={`image-${index}`} className="h-full flex items-center justify-center">
                  <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] max-h-[80vh] overflow-hidden flex items-center justify-center">
                    {!isImageLoaded && (
                      <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
                    )}
                    <Image
                      src={image.src}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      fill
                      className="object-contain transition-opacity duration-300"
                      sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 85vw"
                      priority={index === current}
                      onLoad={() => setIsImageLoaded(true)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Enhanced controls */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={shareImage}
                  className="bg-white/10 backdrop-blur-md rounded-full w-10 h-10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200"
                >
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share image</span>
                </Button>
              )}
              
              {onClose && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={onClose} 
                  className="bg-white/10 backdrop-blur-md rounded-full w-10 h-10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close gallery</span>
                </Button>
              )}
            </div>

            {/* Enhanced navigation buttons */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 z-10 h-12 w-12 text-white border border-white/20 transition-all duration-200 hover:scale-110"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 z-10 h-12 w-12 text-white border border-white/20 transition-all duration-200 hover:scale-110"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Progress indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20">
              {current + 1} / {images.length}
            </div>
          </Carousel>
        </div>

        {/* Enhanced Thumbnails */}
        {showThumbnails && (
          <div className="w-full bg-black/30 backdrop-blur-md border-t border-white/10 py-4 px-3">
            <div className="w-full max-w-6xl mx-auto">
              <Carousel
                setApi={setThumbApi}
                className="w-full"
                opts={{
                  align: "center",
                  containScroll: "trimSnaps",
                  dragFree: true,
                  slidesToScroll: 1,
                }}
              >
                <CarouselContent className="gap-3">
                  {images.map((image, index) => (
                    <CarouselItem
                      key={`thumb-${index}`}
                      className="pl-0"
                      style={{
                        flexBasis: thumbnailCols === 8 
                          ? 'calc(12.5% - 12px)' // 8 thumbnails per view
                          : thumbnailCols === 6 
                            ? 'calc(16.666667% - 12px)' // 6 thumbnails per view
                            : thumbnailCols === 4 
                              ? 'calc(25% - 12px)' // 4 thumbnails per view  
                              : 'calc(33.333333% - 12px)', // 3 thumbnails per view
                        minWidth: thumbnailCols === 8 
                          ? 'calc(12.5% - 12px)'
                          : thumbnailCols === 6 
                            ? 'calc(16.666667% - 12px)'
                            : thumbnailCols === 4 
                              ? 'calc(25% - 12px)' 
                              : 'calc(33.333333% - 12px)',
                        marginRight: '6px',
                      }}
                    >
                      <div className="aspect-square w-full">
                        <button
                          className={cn(
                            "relative h-full w-full overflow-hidden rounded-lg transition-all duration-200 transform",
                            current === index
                              ? "border-2 border-white opacity-100 scale-105 shadow-lg"
                              : "border border-white/30 opacity-60 hover:opacity-90 hover:border-white/60 hover:scale-102",
                          )}
                          onClick={() => scrollTo(index)}
                          aria-label={`View image ${index + 1}: ${image.alt || 'Gallery image'}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt || `Gallery image ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 480px) 60px, (max-width: 768px) 70px, 80px"
                            loading="lazy"
                          />
                          {current === index && (
                            <div className="absolute inset-0 bg-white/10" />
                          )}
                        </button>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
