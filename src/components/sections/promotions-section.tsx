import { promotions } from '@/data/promotions';
import { Promotion } from '@/data/types';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { Button } from '@/components/ui/shadcn/inputs/button';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Tag } from 'lucide-react';

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
              Take advantage of our limited-time promotions and exclusive deals on premium nail and spa services
            </p>
          </div>
          
          <Link 
            href="/promotions"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors animate-fade-in-delay-200"
          >
            View all promotions
            <ChevronRight size={16} className="mt-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <AnimatePresence>
            {featuredPromotions.map((promotion, idx) => (
              <motion.div
                key={promotion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/promotions#${promotion.id}`} className="block">
                  <div className="relative overflow-hidden rounded-xl border bg-card h-full">
                    {/* Image */}
                    {promotion.image && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={promotion.image}
                          alt={promotion.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                      <p className="text-sm text-muted-foreground mb-4">
                        {promotion.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-primary">
                          <Tag size={14} className="mr-1.5" />
                          {promotion.validUntil === "Ongoing" 
                            ? "Ongoing Offer" 
                            : `Valid until: ${new Date(promotion.validUntil).toLocaleDateString()}`
                          }
                        </div>
                        
                        <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/promotions">
              View All Promotions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 