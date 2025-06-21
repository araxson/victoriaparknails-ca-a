"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, X, Share2 } from "lucide-react";
import { GalleryImage } from "@/data/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  Button,
  Image,
  Skeleton,
} from "@/components/ui";
import { cn } from "@/lib/utils";

// Constants
const THUMBNAIL_BREAKPOINTS = {
  lg: { width: 1024, cols: 10 },
  md: { width: 768, cols: 8 },
  sm: { width: 640, cols: 6 },
  xs: { width: 0, cols: 4 },
} as const;

const BUTTON_STYLES = "bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 text-white border border-white/20 transition-all duration-200";

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
  const [thumbnailCols, setThumbnailCols] = React.useState(4);
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const isProgrammaticScroll = React.useRef(false);

  // Get thumbnail column count based on screen width
  const getThumbnailCols = React.useCallback((width: number) => {
    return Object.values(THUMBNAIL_BREAKPOINTS)
      .reverse()
      .find(bp => width >= bp.width)?.cols ?? 4;
  }, []);

  // Calculate thumbnail flex basis
  const getThumbnailBasis = React.useCallback((cols: number) => {
    const percentage = 100 / cols;
    return `calc(${percentage}% - 4px)`;
  }, []);

  // Handle responsive thumbnail columns and keyboard events
  React.useEffect(() => {
    const updateThumbnailCols = () => {
      if (typeof window !== 'undefined') {
        setThumbnailCols(getThumbnailCols(window.innerWidth));
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!api) return;
      
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        api.scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        api.scrollNext();
      }
    };

    updateThumbnailCols();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateThumbnailCols);
    }
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateThumbnailCols);
      }
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [api, getThumbnailCols]);

  // Handle carousel selection and synchronization
  React.useEffect(() => {
    if (!api) return;

    setCurrent(initialIndex);
    api.scrollTo(initialIndex, true);

    const onSelect = () => {
      const selected = api.selectedScrollSnap();
      setCurrent(selected);
      
      if (!isProgrammaticScroll.current) {
        thumbApi?.scrollTo(selected);
      }
      isProgrammaticScroll.current = false;
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, thumbApi, initialIndex]);

  // Center thumbnail when initialIndex changes
  React.useEffect(() => {
    if (thumbApi && initialIndex !== undefined) {
      thumbApi.scrollTo(initialIndex);
    }
  }, [thumbApi, initialIndex]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (!api || !thumbApi) return;
      isProgrammaticScroll.current = true;
      api.scrollTo(index);
      thumbApi.scrollTo(index);
    },
    [api, thumbApi],
  );

  const navigation = React.useMemo(() => ({
    next: () => api?.scrollNext(),
    prev: () => api?.scrollPrev(),
    share: () => {
      if (typeof navigator !== 'undefined' && 'share' in navigator && images[current]) {
        navigator.share({
          title: `Gallery Image ${current + 1}`,
          text: images[current].alt || `Gallery image ${current + 1}`,
          url: window.location.href,
        }).catch(console.error);
      }
    },
  }), [api, current, images]);

  const thumbnailBasis = getThumbnailBasis(thumbnailCols);

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
                      <Skeleton className="absolute inset-0 rounded-lg" />
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

            {/* Controls */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={navigation.share}
                  className={cn(BUTTON_STYLES, "w-10 h-10")}
                >
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share image</span>
                </Button>
              )}
              
              {onClose && (
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={onClose} 
                  className={cn(BUTTON_STYLES, "w-10 h-10")}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close gallery</span>
                </Button>
              )}
            </div>

            {/* Navigation buttons */}
            <Button 
              variant="outline" 
              size="icon" 
              className={cn(BUTTON_STYLES, "absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12")}
              onClick={navigation.prev}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className={cn(BUTTON_STYLES, "absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12")}
              onClick={navigation.next}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Progress indicator */}
            <div className={cn(BUTTON_STYLES, "absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 text-sm font-medium")}>
              {current + 1} / {images.length}
            </div>
          </Carousel>
        </div>

        {/* Thumbnails */}
        {showThumbnails && (
          <div className="w-full bg-black/50 backdrop-blur-sm border-t border-white/20 pt-3">
            <div className="w-full">
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
                <CarouselContent className="-ml-1">
                  {images.map((image, index) => (
                    <CarouselItem
                      key={`thumb-${index}`}
                      className="pl-1"
                      style={{
                        flexBasis: thumbnailBasis,
                        minWidth: thumbnailBasis,
                      }}
                    >
                      <div className="aspect-square w-full">
                        <Button
                          variant="outline"
                          className={cn(
                            "relative h-full w-full overflow-hidden rounded-lg transition-all duration-200 border p-0",
                            current === index
                              ? "border-primary opacity-100 ring-1 ring-primary/50"
                              : "border-primary/30 opacity-70 hover:opacity-100 hover:border-primary/60",
                          )}
                          onClick={() => scrollTo(index)}
                          aria-label={`View image ${index + 1}: ${image.alt || 'Gallery image'}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt || `Gallery image ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 10vw, (max-width: 768px) 8vw, 6vw"
                            loading="lazy"
                          />
                          {current === index && (
                            <div className="absolute inset-0 bg-white/20 border border-white/40 rounded-md" />
                          )}
                        </Button>
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
