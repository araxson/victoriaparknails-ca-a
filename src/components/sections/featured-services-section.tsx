import { getFeaturedServices } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import Image from 'next/image';

export function FeaturedServicesSection() {
  const featuredServices = getFeaturedServices();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4">
            Featured Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Popular Treatments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most loved services that keep our clients coming back for more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {service.popular && (
                  <Badge className="absolute top-3 left-3" variant="destructive">
                    Popular
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">${service.price}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                </div>
                <CardDescription>{service.shortDescription}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Book Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
