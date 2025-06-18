'use client';

import { getServicesByCategory, serviceCategories } from "@/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui";
import { ClockIcon } from "lucide-react";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";

export default function ServiceDetailsSection() {
  return (
    <Section variant="muted">
      <div className="container">
        <SectionHeader
          badge="Our Services"
          title="Complete Service Menu"
          description="Explore our full range of professional nail and spa services, each designed to provide you with exceptional results."
        />
        
        <Tabs defaultValue={serviceCategories[0]?.id} className="w-full mb-10">
          <div className="flex justify-center mb-6">
            <TabsList className="flex-wrap w-full md:w-auto">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex-1 md:flex-initial"
                >
                  {category.name}
                </TabsTrigger>
              ))}
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
                className="space-y-6 animate-in fade-in-50 duration-300"
              >
                <div className="mb-6 text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  )}
                </div>
                
                {Object.entries(servicesBySubcategory).map(([subcategoryName, subcategoryServices]) => (
                  <div key={`${category.id}-${subcategoryName}`} className="mb-8">
                    <div className="text-center mb-4">
                      <Badge 
                        variant="outline" 
                        className="py-0.5 px-3 mb-3 inline-block text-sm font-medium"
                      >
                        {subcategoryName}
                      </Badge>
                    </div>
                    
                    <div className="grid gap-3 md:gap-4">
                      {subcategoryServices.map((service) => (
                        <Card
                          key={service.name + "-" + service.subcategory}
                          className="transition-all duration-200 border-border/50 hover:border-border hover:shadow-sm"
                        >
                          <CardHeader className="pb-2">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                              <div className="flex-1">
                                <CardTitle className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                                  {service.name}
                                  {service.shortDescription && (
                                    <span className="text-sm font-normal text-muted-foreground ml-2">
                                      {service.shortDescription}
                                    </span>
                                  )}
                                </CardTitle>
                              </div>
                              <div className="flex flex-col sm:items-end gap-0.5 shrink-0">
                                <div className="flex items-center gap-1">
                                  <span className="font-bold text-lg text-foreground">
                                    ${service.price}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                  <ClockIcon className="h-3 w-3" />
                                  <span>{service.duration}</span>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          
                          {service.details && (
                            <CardContent className="pt-0 pb-3">
                              <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                                {service.details}
                              </CardDescription>
                            </CardContent>
                          )}
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
