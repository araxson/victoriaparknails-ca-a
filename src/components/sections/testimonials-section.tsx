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
  Button,
  Image,
} from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { useIsMobile } from "@/hooks/use-mobile";

export function TestimonialsSection() {
  const isMobile = useIsMobile();
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const displayTestimonials = testimonials.slice(0, 9);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
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

  const renderTestimonialCard = (testimonial: typeof testimonials[0]) => {
    return (
      <Card key={testimonial.id} className="min-h-[320px] h-full flex flex-col">
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
    );
  };

  return (
    <Section variant="default" id="testimonials">
      <div className="container">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what some of our amazing clients have to say about their experience."
        />

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative px-[-4px]">
            <div className="-mx-4">
              <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                opts={{
                  align: "start",
                  loop: false,
                  dragFree: false,
                  containScroll: "trimSnaps",
                }}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent className="ml-4">
                  {displayTestimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="mr-4 basis-[85%] sm:basis-[70%]">
                      {renderTestimonialCard(testimonial)}
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Interactive Dots indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {displayTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Carousel */
          <div className="w-full overflow-hidden">
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              className="w-full max-w-none"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {displayTestimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-4 md:pl-6 basis-4/5 sm:basis-3/5 md:basis-5/6 xl:basis-1/3 2xl:basis-1/4"
                  >
                    <div className="h-full">
                      {renderTestimonialCard(testimonial)}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Custom Slider Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {displayTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg" asChild>
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
