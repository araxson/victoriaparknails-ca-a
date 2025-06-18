'use client';

import { Card, CardContent, CardHeader, CardTitle, Badge, Button, Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { CheckCircle, Star, Crown, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import * as React from "react";

const popularPackages = [
  {
    name: "Essential Care",
    price: "65",
    originalPrice: "70",
    duration: "1.5 hrs",
    popular: false,
    icon: Sparkles,
    services: [
      "Classic Manicure",
      "Classic Pedicure", 
      "Regular Polish",
      "Basic Cuticle Care"
    ],
    description: "Perfect for regular maintenance and basic nail care needs.",
    savings: "Save $5"
  },
  {
    name: "Luxury Experience",
    price: "85",
    originalPrice: "95",
    duration: "2 hrs",
    popular: true,
    icon: Crown,
    services: [
      "Deluxe Manicure",
      "Deluxe Pedicure",
      "Shellac Polish",
      "Extended Massage",
      "Hot Stone Treatment"
    ],
    description: "Our most popular package combining luxury and value.",
    savings: "Save $10"
  },
  {
    name: "Complete Pampering",
    price: "135",
    originalPrice: "150",
    duration: "2.5 hrs",
    popular: false,
    icon: Star,
    services: [
      "Intensive Care Manicure",
      "Deluxe Spa Pedicure",
      "Shellac Polish",
      "Paraffin Treatment",
      "Extended Massage",
      "Hot Stone Treatment"
    ],
    description: "Ultimate relaxation with premium services and treatments.",
    savings: "Save $15"
  }
];

export function ServicePricingComparison() {
  const isMobile = useIsMobile();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const renderPackageCard = (pkg: typeof popularPackages[0]) => {
    const Icon = pkg.icon;
    return (      <Card 
        key={pkg.name}
        className={`relative h-full flex flex-col ${
          pkg.popular 
            ? 'border-primary/50 pt-8' 
            : 'border-border/50'
        }`}
      >        {pkg.popular && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
            <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
              Most Popular
            </Badge>
          </div>
        )}

        <CardHeader className={`text-center pb-6 flex-shrink-0 ${pkg.popular ? 'pt-16' : ''}`}>
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            
            <div className="space-y-3">
              <CardTitle className="text-2xl font-playfair font-semibold">
                {pkg.name}
              </CardTitle>
              
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-foreground">${pkg.price}</span>
                  <span className="text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    {pkg.savings}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Duration: {pkg.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-between gap-6">
          <div className="grid gap-4">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              {pkg.description}
            </p>

            <div className="space-y-3">
              <h4 className="font-medium text-sm text-foreground">What&apos;s Included:</h4>
              <div className="grid gap-2">
                {pkg.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button 
              size="lg"
              className={`w-full ${
                pkg.popular 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                  : 'variant-outline hover:bg-primary hover:text-primary-foreground'
              }`}
              variant={pkg.popular ? 'default' : 'outline'}
            >
              Book This Package
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Section variant="muted" className="py-16">
      <div className="container">
        <SectionHeader
          badge="Popular Packages"
          title="Service Combinations That Save You More"
          description="Discover our carefully curated service packages designed to give you the best value while experiencing multiple treatments."
        />        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative px-[-4px]">
            <div className="-mx-4">
              <Carousel 
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: false,
                  dragFree: false,
                  containScroll: "trimSnaps",
                }}
                className="w-full"
              >
                <CarouselContent className="ml-4">
                  {popularPackages.map((pkg) => (
                    <CarouselItem key={pkg.name} className="mr-4 basis-[85%] sm:basis-[70%]">
                      {renderPackageCard(pkg)}
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Interactive Dots indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {popularPackages.map((_, index) => (
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
        ) : (/* Desktop Grid */
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {popularPackages.map((pkg) => renderPackageCard(pkg))}
          </div>
        )}
      </div>
    </Section>
  );
} 