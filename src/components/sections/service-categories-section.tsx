import { serviceCategories } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import Image from 'next/image';

export function ServiceCategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-sans">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Professional Nail & Spa Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Discover our comprehensive range of nail care and spa services designed to pamper and beautify.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
                <CardHeader>
                <CardTitle className="text-xl font-serif">{category.name}</CardTitle>
                <CardDescription className="font-sans">{category.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.services.slice(0, 3).map((serviceId, index) => (
                    <Badge key={index} variant="secondary" className="text-xs font-sans">
                      {serviceId.replace('-', ' ')}
                    </Badge>
                  ))}
                  {category.services.length > 3 && (
                    <Badge variant="outline" className="text-xs font-sans">
                      +{category.services.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors font-sans">
                  View Services
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
