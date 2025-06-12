import { services, serviceCategories, getServicesByCategory } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn/layout/tabs';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Nail & Spa Services
            </h1>
            <p className="text-lg text-gray-600">
              Experience luxury nail care and spa treatments with our comprehensive range of services. 
              From classic manicures to advanced nail art, we offer everything you need for beautiful, healthy nails.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={serviceCategories[0]?.id} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2 md:max-w-2xl md:grid-cols-4">
                {serviceCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getServicesByCategory(category.id).map((service) => (
                    <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                      <div className="relative h-48 overflow-hidden rounded-t-xl">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          {service.featured && (
                            <Badge variant="default" className="text-xs">
                              Featured
                            </Badge>
                          )}
                          {service.popular && (
                            <Badge variant="destructive" className="text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                            <CardDescription>{service.shortDescription}</CardDescription>
                          </div>
                          <CardAction>
                            <div className="text-right">
                              <div className="text-xl font-bold text-primary">${service.price}</div>
                              <div className="text-sm text-gray-500">{service.duration}</div>
                            </div>
                          </CardAction>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {service.benefits.slice(0, 3).map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <svg className="w-3 h-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                          Book Appointment
                        </button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience the Victoria Park Nails difference. Book your appointment today and let our expert team take care of you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Book Online
            </button>
            <button className="border border-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
              Call Us: (403) 555-NAIL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}