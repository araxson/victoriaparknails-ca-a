import { services, getServicesByCategory, serviceCategories } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { ClockIcon, DollarSignIcon, StarIcon, CheckCircleIcon } from 'lucide-react';
import Image from 'next/image';

export function ServiceDetailsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Service Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our full range of professional nail and spa services, each designed to provide you with exceptional results.
          </p>
        </div>

        {serviceCategories.map(category => {
          const categoryServices = getServicesByCategory(category.id);
          
          if (categoryServices.length === 0) return null;

          return (
            <div key={category.id} className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map(service => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow group">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {service.featured && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-yellow-500 text-white">
                            <StarIcon className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                      {service.popular && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-red-500 text-white">
                            Popular
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Price and Duration */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <DollarSignIcon className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-green-600">
                            {typeof service.price === 'number' ? `$${service.price}` : service.price}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ClockIcon className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-blue-600">{service.duration}</span>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-gray-900">Benefits:</h4>
                        <div className="space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircleIcon className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{benefit}</span>
                            </div>
                          ))}
                          {service.benefits.length > 3 && (
                            <div className="text-xs text-gray-500 italic">
                              +{service.benefits.length - 3} more benefits
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Process (if available) */}
                      {service.process && service.process.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm mb-2 text-gray-900">Process:</h4>
                          <div className="text-xs text-gray-600">
                            {service.process.slice(0, 2).map((step, index) => (
                              <div key={index} className="mb-1">
                                {index + 1}. {step}
                              </div>
                            ))}
                            {service.process.length > 2 && (
                              <div className="text-gray-500 italic">
                                +{service.process.length - 2} more steps
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Book Now Button */}
                      <button className="w-full bg-primary text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                        Book {service.name}
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
