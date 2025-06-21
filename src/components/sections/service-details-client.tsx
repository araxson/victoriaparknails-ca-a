"use client";

import { getServicesByCategory, businessInfo } from "@/data";
import {
  Card,
  CardHeader,
  CardTitle,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Button,
} from "@/components/ui";
import { ClockIcon, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ServiceCategoryItem {
  id: string;
  name: string;
  description: string;
  index: number;
}

interface ServiceDetailsClientProps {
  serviceCategories: ServiceCategoryItem[];
  defaultActiveTab: string;
}

export function ServiceDetailsClient({ serviceCategories, defaultActiveTab }: ServiceDetailsClientProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  useEffect(() => {
    // Check for URL fragment on mount
    const hash = window.location.hash.substring(1);
    if (hash && serviceCategories.some(cat => cat.id === hash)) {
      setActiveTab(hash);
      // Scroll to the section after a short delay to ensure content is rendered
      setTimeout(() => {
        const element = document.getElementById('service-details-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [serviceCategories]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Update URL hash without triggering a page refresh
    window.history.replaceState(null, '', `#${value}`);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      {/* Enhanced Tab Navigation */}
      <div className="flex justify-center mb-8">
        <TabsList className="flex-wrap w-full md:w-auto bg-card/50 backdrop-blur-sm border p-1.5 rounded-xl">
          {serviceCategories.map((category) => {
            return (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex-1 md:flex-initial data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-4 py-2.5 font-medium"
              >
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>
      
      {serviceCategories.map((category) => {
        const categoryServices = getServicesByCategory(category.id);
        if (categoryServices.length === 0) return null;
        
        const servicesBySubcategory = categoryServices.reduce((acc, service) => {
          if (!acc[service.subcategory]) {
            acc[service.subcategory] = [];
          }
          acc[service.subcategory].push(service);
          return acc;
        }, {} as Record<string, typeof categoryServices>);
        
        return (
          <TabsContent 
            key={category.id} 
            value={category.id}
            className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-4 duration-500"
          >
            {/* Category Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-playfair font-semibold tracking-tight mb-2">
                {category.name}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {category.id === 'nail-services' && "Professional nail care services including manicures, pedicures, and artistic nail enhancements."}
                {category.id === 'spa-services' && "Luxurious spa treatments designed to relax, rejuvenate, and restore your body and mind."}
                {category.id === 'hair-removal' && "Professional waxing services for smooth, hair-free skin using gentle, effective techniques."}
                {category.id === 'kids-services' && "Child-friendly nail services in a safe, fun environment perfect for little ones."}
              </p>
            </div>
            
            {Object.entries(servicesBySubcategory).map(([subcategoryName, subcategoryServices]) => (
              <div key={`${category.id}-${subcategoryName}`} className="mb-12">
                {/* Subcategory Header */}
                <div className="text-center mb-6">
                  <Badge 
                    variant="secondary" 
                    className="py-2 px-4 mb-4 text-sm font-medium bg-primary/5 text-primary border-primary/20"
                  >
                    {subcategoryName}
                  </Badge>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto"></div>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">                  {subcategoryServices.map((service, serviceIndex) => {
                    return (                      <Card
                        key={`${service.name}-${service.subcategory}-${serviceIndex}`}
                        className="border-border/50 bg-card/80 backdrop-blur-sm"
                      >
                        <CardHeader>
                          <div className="grid grid-rows-[auto_auto_auto] gap-4">
                            {/* First Row: Service Info + Pricing (2 columns) */}
                            <div className="grid grid-cols-[1fr_auto] gap-4 items-start">
                              {/* Service Info Column */}
                              <div className="grid gap-2">                                <CardTitle className="text-lg md:text-xl font-playfair font-medium text-foreground leading-tight">
                                  {service.name}
                                </CardTitle>
                                {service.shortDescription && (
                                  <p className="text-sm text-muted-foreground font-medium">
                                    {service.shortDescription}
                                  </p>
                                )}
                              </div>
                              
                              {/* Pricing Column */}
                              <div className="grid gap-1 items-center justify-items-end">
                                <span className="text-xl md:text-2xl font-bold text-primary leading-none">
                                  ${service.price}
                                </span>
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                  <ClockIcon className="h-3 w-3" />
                                  <span>{service.duration}</span>
                                </div>
                              </div>
                            </div>
                              {/* Second Row: Service Details (Full Width) */}
                            {service.details && (
                              <div className="grid">
                                <div className="text-xs text-muted-foreground leading-relaxed">
                                  {service.details}
                                </div>
                              </div>
                            )}
                              {/* Third Row: Book Button (Full Width) */}
                            <div className="grid">                              <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="w-full justify-center gap-1.5 text-xs font-medium"
                              >
                                <a 
                                  href={service.bookingUrl || businessInfo.contact.bookingUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center"
                                >
                                  Book This Service
                                  <ArrowRight className="h-3 w-3" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {/* Call to Action for each category */}
            <div className="text-center pt-8 border-t border-border/50">
              <h4 className="text-xl font-playfair font-semibold mb-3">
                Ready to Book Your {category.name}?
              </h4>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
                Call us now to schedule your appointment or visit us at our downtown Calgary location.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                <Button variant="outline" size="lg" asChild>
                  <a href={`tel:${businessInfo.contact.phone.replace(/[^0-9+]/g, '')}`} className="gap-2">
                    <span>Call {businessInfo.contact.phone}</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact" className="gap-2">
                    <span>Get Directions</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}