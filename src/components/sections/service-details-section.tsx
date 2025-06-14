// import { services } from '@/data';
import { getServicesByCategory, serviceCategories, businessInfo } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { ClockIcon, DollarSignIcon, StarIcon, CheckCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/shadcn/inputs/button';
import { Section } from '@/components/layouts';

export default function ServiceDetailsSection() {
  return (
    <Section className="py-20 md:py-28 lg:py-36 xl:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-lg">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 font-serif max-w-5xl mx-auto">
            Complete Service Menu
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our full range of professional nail and spa services, each designed to provide you with exceptional results.
          </p>
        </div>

        {serviceCategories.map(category => {
          const categoryServices = getServicesByCategory(category.id);
          
          if (categoryServices.length === 0) return null;

          return (
            <div key={category.id} className="mb-20 lg:mb-24">
              <div className="text-center mb-12 lg:mb-16">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
                  {category.name}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {categoryServices.map(service => (
                  <Card key={service.id} className="transition-all duration-300">
                    <CardHeader className="p-1">
                      <div className="flex justify-between items-center mb-2">
                        <CardTitle className="text-xl md:text-2xl">{service.name}</CardTitle>
                        <div className="flex gap-2">
                          {service.featured && (
                            <Badge>
                              <StarIcon className="h-4 w-4 mr-2" />
                              Featured
                            </Badge>
                          )}
                          {service.popular && (
                            <Badge variant="destructive">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6 p-8 pt-0">
                      {/* Price and Duration */}
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <DollarSignIcon className="h-5 w-5 text-primary" />
                          <span className="font-semibold text-primary text-lg">
                            {typeof service.price === 'number' || service.price.startsWith('$') ? service.price : `$${service.price}`}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ClockIcon className="h-5 w-5 text-muted-foreground" />
                          <span className="text-base text-muted-foreground">{service.duration}</span>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-base mb-4 text-foreground">Benefits:</h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircleIcon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                            </div>
                          ))}
                          {service.benefits.length > 3 && (
                            <div className="text-sm text-muted-foreground italic pl-7">
                              +{service.benefits.length - 3} more benefits
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Process (if available) */}
                      {service.process && service.process.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-base mb-4 text-foreground">Process:</h4>
                          <div className="text-sm text-muted-foreground space-y-2">
                            {service.process.slice(0, 2).map((step, index) => (
                              <div key={index} className="leading-relaxed">
                                {index + 1}. {step}
                              </div>
                            ))}
                            {service.process.length > 2 && (
                              <div className="text-muted-foreground italic">
                                +{service.process.length - 2} more steps
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {/* Book Now Button */}
                      <Button className="w-full py-6 text-lg font-medium" asChild>
                        <a href={businessInfo.contact.bookingUrl} target="_blank" rel="noopener noreferrer">
                          Book {service.name}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
