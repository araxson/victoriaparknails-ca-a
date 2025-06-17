"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
  const isProgrammaticScroll = React.useRef(false);

  // Handle responsive thumbnail columns
  React.useEffect(() => {
    const updateThumbnailCols = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width >= 768) {
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

  return (
    <div className="w-full flex flex-col items-center h-full max-h-full p-0 m-0 bg-transparent">
      <div className="w-full flex-1 flex flex-col min-h-0">
        {/* Main carousel */}
        <div className="flex-1 min-h-0 flex items-center justify-center relative bg-black/20 backdrop-blur-sm">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
              startIndex: initialIndex,
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={`image-${index}`}>
                  <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] max-h-[70vh] overflow-hidden rounded-md bg-transparent flex items-center justify-center">
                    <Image
                      src={image.src}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 85vw"
                      priority={index === current}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Close button */}
            {onClose && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose} 
                className="absolute right-2 top-2 z-50 bg-black/50 backdrop-blur-sm rounded-full w-8 h-8 hover:bg-black/70 text-white border border-white/20"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close gallery</span>
              </Button>
            )}

            {/* Navigation buttons */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 z-10 h-8 w-8 text-white border border-white/20"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 z-10 h-8 w-8 text-white border border-white/20"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Carousel>
        </div>

        {/* Thumbnails */}
        {showThumbnails && (
          <div className="w-full bg-background/90 backdrop-blur-md border-t border-border/30 py-3 px-2">
            <div className="w-full">
              {/* Swipeable thumbnails carousel in one row */}
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
                <CarouselContent className="gap-2">
                  {images.map((image, index) => (
                    <CarouselItem
                      key={`thumb-${index}`}
                      className="pl-0"
                      style={{
                        // Calculate width based on screen size to show exact number of thumbnails
                        // with proper gaps, but allow swiping to see more
                        flexBasis: thumbnailCols === 6 
                          ? 'calc(16.666667% - 8px)' // 6 thumbnails per view
                          : thumbnailCols === 4 
                            ? 'calc(25% - 8px)' // 4 thumbnails per view  
                            : 'calc(33.333333% - 8px)', // 3 thumbnails per view
                        minWidth: thumbnailCols === 6 
                          ? 'calc(16.666667% - 8px)'
                          : thumbnailCols === 4 
                            ? 'calc(25% - 8px)' 
                            : 'calc(33.333333% - 8px)',
                        marginRight: '4px',
                      }}
                    >
                      <div className="aspect-square w-full">
                        <button
                          className={cn(
                            "relative h-full w-full overflow-hidden rounded-md",
                            current === index
                              ? "border-2 border-primary opacity-100"
                              : "border border-border/40 opacity-70 hover:opacity-90 hover:border-border/60",
                          )}
                          onClick={() => scrollTo(index)}
                          aria-label={`View image ${index + 1}: ${image.alt || 'Gallery image'}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt || `Gallery image ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 480px) 80px, (max-width: 768px) 85px, 90px"
                            loading="lazy"
                          />
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
