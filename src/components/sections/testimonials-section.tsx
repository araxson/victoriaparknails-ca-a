"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/shadcn/data-display/carousel";

import { testimonials } from "@/data/testimonials";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/shadcn/data-display/card";
import { Badge } from "@/components/ui/shadcn/data-display/badge";
import { Section } from "@/components/layouts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/data-display/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/shadcn/inputs/button";

export function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Show only first 9 testimonials for the homepage carousel
  const displayTestimonials = testimonials.slice(0, 9);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-amber-400 fill-current" : "text-muted"
        }`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };
  return (
    <Section className="bg-background">
      <div className="max-full mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="outline" size="lg" className="mb-6 rounded-full font-medium">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif leading-tight max-w-4xl mx-auto">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what some of our
            amazing clients have to say about their experience.
          </p>
        </div>
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-6">
            {displayTestimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-6 md:basis-1/2 xl:basis-1/4"
              >
                <div className="p-2 h-full">
                  <Card className="h-full border bg-card flex flex-col">
                    <CardHeader className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <h4 className="font-semibold text-lg truncate">
                              {testimonial.name}
                            </h4>
                          </div>
                          <div className="flex gap-0.5">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between p-6">
                      <blockquote className="text-muted-foreground leading-relaxed text-base mb-4 italic border-l-2 border-primary/20 pl-4">
                        {testimonial.review}
                      </blockquote>
                      <div className="flex justify-end items-center text-sm text-muted-foreground pt-4 border-t border-dashed">
                        <span className="text-xs">
                          {new Date(testimonial.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-20px] xl:left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex w-12 h-12" />
          <CarouselNext className="absolute right-[-20px] xl:right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex w-12 h-12" />
        </Carousel>
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-all duration-300",
                current === index + 1 ? "w-6 bg-primary" : "bg-primary/25"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            variant="secondary" 
            size="lg"
            className="gap-2"
            onClick={() => window.open("https://maps.app.goo.gl/Bybt5QQfCJKHycm86", "_blank")}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
            </svg>
            See All Reviews on Google
          </Button>
        </div>
      </div>
    </Section>
  );
}
