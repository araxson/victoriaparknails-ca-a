"use client";

import * as React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { GalleryImage } from "@/data/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/shadcn/data-display/carousel";
import { Button } from "@/components/ui/shadcn/inputs/button";
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

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Set initial slide
    api.scrollTo(initialIndex);
    setCurrent(initialIndex);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, initialIndex]);

  React.useEffect(() => {
    if (!api || !thumbApi) {
      return;
    }

    const onSelect = () => {
      const selected = api.selectedScrollSnap();
      setCurrent(selected);
      thumbApi.scrollTo(selected);
    };

    const onThumbClick = () => {
      const selected = thumbApi.selectedScrollSnap();
      api.scrollTo(selected);
    };

    api.on("select", onSelect);
    thumbApi.on("select", onThumbClick);

    return () => {
      api.off("select", onSelect);
      thumbApi.off("select", onThumbClick);
    };
  }, [api, thumbApi]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Close button */}
      {onClose && (
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={onClose}
            className="bg-background/80 backdrop-blur-sm"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close gallery</span>
          </Button>
        </div>
      )}

      {/* Main carousel */}
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          startIndex: initialIndex,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={image.id} className="pl-2 md:pl-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority={index === current}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* Image counter */}
      <div className="flex justify-center mt-4">
        <div className="bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
          {current + 1} of {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="mt-6">
          <Carousel
            setApi={setThumbApi}
            className="w-full"
            opts={{
              containScroll: "keepSnaps",
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-2">
              {images.map((image, index) => (
                <CarouselItem
                  key={`thumb-${image.id}`}
                  className="pl-2 basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8"
                >
                  <button
                    className={cn(
                      "relative aspect-square w-full overflow-hidden rounded-md transition-all duration-200",
                      "hover:ring-2 hover:ring-primary hover:ring-offset-2",
                      current === index
                        ? "ring-2 ring-primary ring-offset-2 opacity-100"
                        : "opacity-70 hover:opacity-100"
                    )}
                    onClick={() => scrollTo(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 12.5vw"
                    />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </div>
  );
}
