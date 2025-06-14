import type { Metadata } from 'next';
import { promotions } from '@/data/promotions';
import { HeroSection } from '@/components/sections/hero-section';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { businessInfo } from '@/data';
import { AnimatedList } from '@/components/ui/animated-elements';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '@/components/ui/shadcn/data-display/card';
import Image from 'next/image';
import { CheckIcon, PhoneIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: "Nail Salon Discounts & Offers | Victoria Park Nails and Spa Calgary",
  description: "Save on your next visit with our special discounts and offers at Victoria Park Nails and Spa. Student deals, family packages, and loyalty rewards.",
  keywords: [
    "nail salon discounts",
    "nail spa offers", 
    "Calgary nail deals",
    "manicure discounts",
    "pedicure offers",
    "Victoria Park nail savings",
    "student discount nail salon",
    "nail art deals",
    "nail salon promotions",
    "family nail package"
  ],
  openGraph: {
    title: "Nail Salon Discounts & Offers | Victoria Park Nails and Spa",
    description: "Save on your next visit with our special deals at Victoria Park Nails and Spa in Calgary.",
    url: "https://victoriaparknails.ca/promotions",
    images: [{
      url: "/promotions-og.jpg",
      width: 1200,
      height: 630,
      alt: "Special offers at Victoria Park Nails and Spa Calgary"
    }]
  },
  alternates: {
    canonical: "https://victoriaparknails.ca/promotions"
  }
};

export default function PromotionsPage() {
  const featuredPromotions = promotions.filter(promo => promo.featured);
  const regularPromotions = promotions.filter(promo => !promo.featured);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        title="Our Special Offers"
        subtitle="Save on your favorite nail services with these deals"
        videoSrc="/videos/hero-bg-video-003.mp4"
      />

      {/* All Promotions Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
              Current Deals
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              Take advantage of these special offers on your next visit
            </p>
          </div>

          <AnimatedList 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            itemDelay={70}
            itemThreshold={0.2}
          >
            {promotions.map((promotion) => (
              <Card key={promotion.id} id={promotion.id} className="overflow-hidden border bg-card hover:border-primary/50 transition-colors duration-300">
                {promotion.image && (
                  <div className="relative h-48">
                    <Image
                      src={promotion.image}
                      alt={promotion.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant={promotion.featured ? "destructive" : "secondary"} className="text-sm font-semibold">
                        {promotion.discount}
                      </Badge>
                    </div>
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-serif text-balance">{promotion.title}</CardTitle>
                  <CardDescription className="text-base text-balance">{promotion.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {promotion.terms.map((term, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckIcon size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                    Book Now
                  </button>
                </CardFooter>
              </Card>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-serif text-center text-balance">
              How to Use Our Offers
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Mention the Offer</h3>
                  <p className="text-muted-foreground">Let us know which offer you'd like to use when booking your appointment.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Book Your Service</h3>
                  <p className="text-muted-foreground">You can book by phone or online. Make sure to meet all conditions for the offer you choose.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Enjoy Your Savings</h3>
                  <p className="text-muted-foreground">The discount will be applied to your service when you pay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4 font-serif text-balance">
            Ready to Book?
          </h2>
          <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto text-balance">
            Call us or book online to take advantage of these special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Book Online
            </a>
            <a 
              href={`tel:${businessInfo.contact.phone}`}
              className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <PhoneIcon size={18} />
              {businessInfo.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 