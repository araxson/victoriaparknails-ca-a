import type { Metadata } from 'next';
// import { services } from '@/data';
import {
  serviceCategories,
  getServicesByCategory,
  getAllServices,
  Service
} from '@/data';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn/data-display/card';
import { businessInfo } from '@/data';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesFilter } from '@/components/sections/services-filter';
import { AnimatedList } from '@/components/ui/animated-elements';
import { NoResultsMessage } from '@/components/ui/no-results-message';
import { Suspense } from 'react';
import { Button } from '@/components/ui/shadcn/inputs/button';

export const metadata: Metadata = {
  title: "Professional Nail & Spa Services | Manicures, Pedicures, Nail Art | Victoria Park Nails and Spa Calgary",
  description: "Explore our comprehensive menu of professional nail and spa services in Calgary. Expert manicures, luxury pedicures, custom nail art, gel & acrylic extensions, waxing, massage, and lash services. View pricing and book online at Calgary's premier nail salon.",
  keywords: [
    "Calgary nail services",
    "manicure prices Calgary",
    "pedicure services Calgary", 
    "gel nails Calgary",
    "acrylic nails Calgary",
    "nail art services Calgary",
    "shellac manicure Calgary",
    "spa pedicure Calgary",
    "nail extensions Calgary",
    "professional nail care Calgary",
    "nail salon pricing Calgary",
    "custom nail design Calgary",
    "luxury nail services Calgary",
    "downtown Calgary nail services",
    "Victoria Park nail services",
    "nail technician Calgary",
    "best nail salon services Calgary",
    "nail enhancement Calgary",
    "spa treatments Calgary",
    "waxing services Calgary",
    "massage therapy Calgary",
    "eyelash extensions Calgary",
    "nail art design Calgary",
    "French manicure Calgary",
    "bridal nail services Calgary"
  ],
  openGraph: {
    title: "Professional Nail & Spa Services | Victoria Park Nails and Spa Calgary",
    description: "Comprehensive nail and spa services in downtown Calgary. Expert manicures, luxury pedicures, custom nail art, extensions, and spa treatments with transparent pricing.",
    url: "https://victoriaparknails.ca/services",
    images: [{
      url: "/services-og.jpg",
      width: 1200,
      height: 630,
      alt: "Professional nail services at Victoria Park Nails and Spa Calgary - manicures, pedicures, nail art, and spa treatments"
    }]
  },
  alternates: {
    canonical: "https://victoriaparknails.ca/services"
  }
};

export default function ServicesPage({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    search?: string;
  };
}) {
  const currentCategoryId = searchParams?.category || 'all';
  const searchTerm = searchParams?.search || '';
  
  // Get services based on category
  let services = currentCategoryId === 'all' 
    ? getAllServices() 
    : getServicesByCategory(currentCategoryId);
  
  // Filter services by search term if provided
  if (searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    services = services.filter((service: Service) => 
      service.name.toLowerCase().includes(lowerSearchTerm) || 
      service.shortDescription.toLowerCase().includes(lowerSearchTerm) ||
      service.description.toLowerCase().includes(lowerSearchTerm)
    );
  }

  // Get the current category information
  const currentCategory = currentCategoryId === 'all' 
    ? {
        id: 'all',
        name: 'All Services',
        description: 'Browse our complete range of professional nail care and spa treatments'
      }
    : serviceCategories.find(c => c.id === currentCategoryId);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        title="Professional Nail & Spa Services"
        subtitle="Experience luxury nail care and spa treatments with our comprehensive range of services. From classic manicures to advanced nail art, we offer everything you need for beautiful, healthy nails."
        videoSrc="/videos/hero-bg-video-002.mp4"
      />
      {/* Services Filter */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif text-balance">
                Choose Your Service Category
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto text-balance">
                Browse our comprehensive range of professional nail and spa services
              </p>
            </div>
            <Suspense key={`filter-${currentCategoryId}-${searchTerm}`} fallback={<div>Loading...</div>}>
              <ServicesFilter />
            </Suspense>
          </div>

          {currentCategory && (
            <div className="space-y-12 mt-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
                  {currentCategory.name}
                </h2>
                <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                  {currentCategory.description}
                </p>
                {searchTerm && (
                  <p className="text-sm mt-4 text-muted-foreground">
                    Showing results for: <span className="font-medium">&quot;{searchTerm}&quot;</span> ({services.length} {services.length === 1 ? 'service' : 'services'} found)
                  </p>
                )}
              </div>                {services.length > 0 ? (
                  <AnimatedList 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                  {services.map((service: Service) => (                    <Card
                      key={service.id}
                      className="border bg-card flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    >
                      <CardHeader className="flex-grow p-6">
                        <div className="flex justify-between items-start gap-4 mb-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2 font-serif group-hover:text-primary transition-colors text-balance">
                              {service.name}
                            </CardTitle>
                            <CardDescription className="text-sm leading-relaxed text-balance">
                              {service.shortDescription}
                            </CardDescription>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-xl font-bold text-primary">
                              {typeof service.price === 'number' ? `$${service.price}` : service.price}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {service.duration}
                            </div>
                          </div>
                        </div>                        <div className="space-y-4">
                          <Button asChild className="w-full">
                            <a
                              href="https://victoriaparknailsspa.setmore.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-all text-sm font-semibold"
                            >
                              Book This Service
                            </a>
                          </Button>
                        </div></CardHeader>
                    </Card>
                  ))}
                </AnimatedList>
              ) : (
                <NoResultsMessage />
              )}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4 font-serif text-balance">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-base text-primary-foreground/90 mb-6 max-w-2xl mx-auto text-balance">
            Experience the Victoria Park Nails difference. Book your appointment
            today and let our expert team take care of you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a
                href="https://victoriaparknailsspa.setmore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground text-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                Book Online
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="border border-primary-foreground/50 text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Call Us: {businessInfo.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}