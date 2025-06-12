import { promotions } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import Image from 'next/image';

interface PromotionsSectionProps {
  showAllPromotions?: boolean;
}

export function PromotionsSection({ showAllPromotions = false }: PromotionsSectionProps) {
  const featuredPromotions = showAllPromotions 
    ? promotions.filter(promotion => promotion.featured)
    : promotions.filter(promotion => promotion.featured).slice(0, 2);
  
  const regularPromotions = showAllPromotions
    ? promotions.filter(promotion => !promotion.featured)
    : promotions.filter(promotion => !promotion.featured).slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Special Offers
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Current Promotions & Deals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take advantage of our special offers and save on your favorite nail and spa services.
          </p>
        </div>

        {/* Featured Promotions */}
        {featuredPromotions.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Featured Deals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPromotions.map(promotion => (
                <Card key={promotion.id} className="overflow-hidden hover:shadow-lg transition-shadow border-primary/20">
                  {promotion.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={promotion.image}
                        alt={promotion.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                          {promotion.discount}
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">
                        {promotion.title}
                      </CardTitle>
                      {!promotion.image && (
                        <Badge className="bg-red-500 text-white">
                          {promotion.discount}
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600">
                      {promotion.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-sm text-gray-500">
                      Valid until: {new Date(promotion.validUntil).toLocaleDateString()}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Terms & Conditions:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {promotion.terms.map((term, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{term}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Promotions */}
        {regularPromotions.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              More Great Deals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPromotions.map(promotion => (
                <Card key={promotion.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        {promotion.title}
                      </CardTitle>
                      <Badge variant="secondary">
                        {promotion.discount}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600">
                      {promotion.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="text-sm text-gray-500">
                      Valid until: {new Date(promotion.validUntil).toLocaleDateString()}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-xs mb-1">Terms:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {showAllPromotions ? (
                          // Show all terms when showAllPromotions is true
                          promotion.terms.map((term, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-1">•</span>
                              <span>{term}</span>
                            </li>
                          ))
                        ) : (
                          // Show limited terms when showAllPromotions is false
                          <>
                            {promotion.terms.slice(0, 3).map((term, index) => (
                              <li key={index} className="flex items-start">
                                <span className="mr-1">•</span>
                                <span>{term}</span>
                              </li>
                            ))}
                            {promotion.terms.length > 3 && (
                              <li className="text-gray-500 italic">
                                +{promotion.terms.length - 3} more conditions
                              </li>
                            )}
                          </>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
