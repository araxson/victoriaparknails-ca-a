'use client';

import { getServicesByCategory, serviceCategories } from "@/data";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Button,
} from "@/components/ui";
import { ClockIcon, Star, Sparkles, Crown, Heart, ArrowRight } from "lucide-react";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";

// Icon mapping for different service categories
const categoryIcons = {
  "nail-services": Sparkles,
  "spa-services": Heart,
  "hair-removal": Star,
  "kids-services": Crown,
} as const;

export default function ServiceDetailsSection() {
  return (
    <Section variant="default" className="bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <SectionHeader
          badge="Our Services"
          title="Complete Service Menu"
          description="Explore our full range of professional nail and spa services, each designed to provide you with exceptional results and an unforgettable experience."
        />
        
        <Tabs defaultValue={serviceCategories[0]?.id} className="w-full">
          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center mb-8">
            <TabsList className="flex-wrap w-full md:w-auto bg-card/50 backdrop-blur-sm border shadow-lg p-1.5 rounded-xl">
              {serviceCategories.map((category) => {
                const Icon = categoryIcons[category.id as keyof typeof categoryIcons] || Sparkles;
                return (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex-1 md:flex-initial data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 rounded-lg px-4 py-2.5 font-medium"
                  >
                    <Icon className="h-4 w-4 mr-2" />
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    {(() => {
                      const Icon = categoryIcons[category.id as keyof typeof categoryIcons] || Sparkles;
                      return <Icon className="h-8 w-8 text-primary" />;
                    })()}
                  </div>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
                      {subcategoryServices.map((service, serviceIndex) => (
                        <Card
                          key={`${service.name}-${service.subcategory}-${serviceIndex}`}
                          className="group transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/80 backdrop-blur-sm"
                        >
                          <CardHeader>
                            <div className="grid grid-rows-[auto_auto_auto] gap-4">
                              {/* First Row: Service Info + Pricing (2 columns) */}
                              <div className="grid grid-cols-[1fr_auto] gap-4 items-start">
                                {/* Service Info Column */}
                                <div className="grid gap-2">
                                  <CardTitle className="text-lg md:text-xl font-playfair font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
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
                                  <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                                    {service.details}
                                  </CardDescription>
                                </div>
                              )}
                              
                              {/* Third Row: Action Button (Full Width) */}
                              <div className="grid">
                                <Button 
                                  variant="outline" 
                                  size="lg"
                                  asChild
                                  className="group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 w-full justify-center"
                                >
                                  <a 
                                    href="https://victoriaparknailsspa.setmore.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center"
                                  >
                                    Book Service
                                    <ArrowRight className="ml-1.5 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </Section>
  );
}
