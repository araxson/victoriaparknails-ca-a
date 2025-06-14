import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/shadcn/data-display/card";
import { Badge } from "@/components/ui/shadcn/data-display/badge";
import { Button } from "@/components/ui/shadcn/inputs/button";
import { Section } from "@/components/layouts";
import { services } from "@/data";
import { ClockIcon, DollarSignIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { AnimatedDetail, AnimatedList, AnimatedCardItem } from "@/components/ui/animated-elements";

export function ServicesSection() {
  // Focus on popular nail services only
  const popularNailServices = [
    {
      service: services.find(service => service.id === "shellac-manicure"),
      category: "Manicure"
    },
    {
      service: services.find(service => service.id === "spa-pedicure-shellac-polish"),
      category: "Pedicure"
    },
    {
      service: services.find(service => service.id === "acrylic-new-set"),
      category: "Nail Extensions"
    },
    {
      service: services.find(service => service.id === "nail-design-each-nail"),
      category: "Nail Art"
    },
    {
      service: services.find(service => service.id === "uv-gel-new-set"),
      category: "Nail Extensions"
    },
    {
      service: services.find(service => service.id === "french-tips"),
      category: "Nail Design"
    }
  ].filter(item => item.service);

  // Format price correctly to avoid double dollar signs
  const formatPrice = (price: number | string) => {
    if (typeof price === 'number') {
      return `$${price}`;
    }
    return price.startsWith('$') ? price : `$${price}`;
  };

  return (    <Section className="bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <div className="text-center mb-12 sm:mb-16 md:mb-20">          <AnimatedDetail animation="fade" delay={50}>
            <Badge variant="outline" size="lg" className="mb-6 rounded-full font-medium">
              Popular Services
            </Badge>
          </AnimatedDetail>
          
          <AnimatedDetail animation="slideUp" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
              Our Most Popular Nail Services
            </h2>
          </AnimatedDetail>
          
          <AnimatedDetail animation="slideUp" delay={150}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most requested professional nail services that keep our clients coming back
            </p>
          </AnimatedDetail>
        </div>        <AnimatedList 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          itemDelay={80}
          itemThreshold={0.3}
        >
          {popularNailServices.map(({service, category}) => (
            service && (
              <Card key={service.id} className="flex flex-col h-full border bg-card fade-on-hover">
                <CardHeader className="pb-2 text-center">
                  <AnimatedCardItem animation="fade" delay={50}>
                    <Badge variant="secondary" size="default" className="mb-2 self-center">
                      {category}
                    </Badge>
                  </AnimatedCardItem>
                  <AnimatedCardItem animation="fade" delay={100}>
                    <CardTitle className="text-xl mt-1">{service.name}</CardTitle>
                  </AnimatedCardItem>
                </CardHeader>
                <CardContent className="pt-4 flex-grow">
                  <AnimatedCardItem animation="fade" delay={150}>
                    <p className="text-muted-foreground mb-6 text-center">
                      {service.shortDescription}
                    </p>
                  </AnimatedCardItem>
                  <AnimatedCardItem animation="scale" delay={200}>
                    <div className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
                      <div className="flex items-center">
                        <DollarSignIcon className="h-4 w-4 text-primary mr-2" />
                        <span className="font-semibold text-lg">
                          {formatPrice(service.price)}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-muted-foreground">{service.duration}</span>
                      </div>
                    </div>
                  </AnimatedCardItem>
                </CardContent>
                <CardFooter className="pt-2">
                  <AnimatedCardItem animation="fade" delay={250}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                      <a href="https://victoriaparknailsspa.setmore.com/" target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  </AnimatedCardItem>
                </CardFooter>
              </Card>
            )
          ))}
        </AnimatedList>
        
        <AnimatedDetail animation="slideUp" delay={200} className="text-center mt-14">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services" className="px-8">
              View All Services 
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedDetail>
      </div>
    </Section>
  );
} 