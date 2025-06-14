import { promotions } from '@/data/promotions';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { Button } from '@/components/ui/shadcn/inputs/button';
import { ChevronRight, CheckIcon } from 'lucide-react';
import { AnimatedList } from '@/components/ui/animated-elements';

export function PromotionsSection() {
  // Only show featured promotions on the homepage
  const featuredPromotions = promotions
    .filter(promo => promo.featured)
    .slice(0, 3); // Limit to 3 promotions

  return (
    <section className="py-16 md:py-20 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-14">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif animate-fade-in">
              Special Offers
            </h2>
            <p className="text-base text-muted-foreground max-w-md animate-fade-in-delay-100">
              Save on your favorite nail services with these deals
            </p>
          </div>
          
          <Link 
            href="/promotions"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors animate-fade-in-delay-200"
          >
            View all offers
            <ChevronRight size={16} className="mt-0.5" />
          </Link>
        </div>

        <AnimatedList 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          itemDelay={100}
          itemThreshold={0.2}
        >
          {featuredPromotions.map((promotion) => (
            <Link href={`/promotions#${promotion.id}`} key={promotion.id} className="group">
              <div className="relative overflow-hidden rounded-xl border bg-card h-full hover:border-primary/50 transition-colors duration-300">
                {/* Image */}
                {promotion.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={promotion.image}
                      alt={promotion.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="destructive" className="text-sm font-semibold">
                        {promotion.discount}
                      </Badge>
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                    {promotion.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {promotion.description}
                  </p>
                  
                  <div className="space-y-1">
                    {promotion.terms.slice(0, 2).map((term, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs">
                        <CheckIcon size={12} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{term}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </AnimatedList>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/promotions">
              View All Offers
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 