"use client";

import * as React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { GalleryImage } from "@/data/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
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
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const isProgrammaticScroll = React.useRef(false);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (!api || !thumbApi) return;
      isProgrammaticScroll.current = true;
      api.scrollTo(index);
      thumbApi.scrollTo(index);
    },
    [api, thumbApi],
  );

  React.useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    setCurrent(api.selectedScrollSnap());
    api.scrollTo(initialIndex, true);

    const onSelect = () => {
      if (isProgrammaticScroll.current) {
        isProgrammaticScroll.current = false;
        setCurrent(api.selectedScrollSnap());
        return;
      }
      const selected = api.selectedScrollSnap();
      setCurrent(selected);
      thumbApi?.scrollTo(selected);
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, thumbApi, initialIndex]);

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
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        {/* Close button */}
        {onClose && (
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={onClose}
              className="backdrop-blur-sm"
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
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={image.id}>
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: full) 100vw, 100vw"
                    priority={index === current}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination */}
        <div
          className="flex justify-center items-center gap-2 mt-4"
          role="tablist"
          aria-label="Carousel Pagination"
        >
          {scrollSnaps.map((_, index) => {
            const distance = Math.abs(current - index);
            const isActive = distance === 0;
            const scale = Math.max(0, 1 - distance / 4);
            const opacity = Math.max(0.4, 1 - distance / 5);

            if (scale <= 0) return null;

            return (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-500 ease-in-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isActive
                    ? "bg-foreground/90"
                    : "bg-foreground/50",
                )}
                style={{
                  transform: `scale(${isActive ? 1.5 : scale})`,
                  opacity: isActive ? 1 : opacity,
                }}
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Thumbnails */}
        {showThumbnails && (
          <div className="pt-4 w-full">
            <Carousel
              setApi={setThumbApi}
              className="w-full"
              opts={{
                align: "center",
                containScroll: "keepSnaps",
                dragFree: true,
              }}
            >
              <CarouselContent className="gap-0.1">
                {images.map((image, index) => (
                  <CarouselItem
                    key={`thumb-${image.id}`}
                    className="basis-1/5 sm:basis-1/6 md:basis-1/7 lg:basis-1/8"
                  >
                    <button
                      className={cn(
                        "relative aspect-square w-full overflow-hidden rounded-md transition-all duration-200",
                        "",
                        current === index
                          ? "opacity-100"
                          : "opacity-70 hover:opacity-100",
                      )}
                      onClick={() => scrollTo(index)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="11vw"
                      />
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
