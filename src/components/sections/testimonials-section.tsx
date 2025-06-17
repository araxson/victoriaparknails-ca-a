"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui";
import { Star } from "lucide-react";

import { testimonials } from "@/data/testimonials";
import {
  Card,
  CardHeader,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Button,
  Image,
} from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";

export function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-primary fill-current" : "text-muted-foreground"
        }`}
      />
    ));
  };
  return (
    <Section variant="default">
      <div className="container">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what some of our amazing clients have to say about their experience."
        />
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {displayTestimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 xl:basis-1/4"
              >
                <div className="p-1 h-full">
                  <Card className="min-h-[320px] h-full flex flex-col">
                    <CardHeader className="flex-none">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <div className="flex gap-0.5 mt-2">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <blockquote className="text-sm text-muted-foreground italic mb-auto flex-grow">
                        &ldquo;{testimonial.review}&rdquo;
                      </blockquote>
                      <div className="flex justify-end text-xs text-muted-foreground pt-4 border-t mt-4">
                        <span>
                          {new Date(testimonial.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        {/* Custom Slider Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`size-2 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                index === current - 1 ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <a
              href="https://www.google.com/search?q=Victoria+Park+Nails+and+Spa+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Image
                src="/google-logo.svg"
                alt="Google"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              View More Reviews on Google
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
