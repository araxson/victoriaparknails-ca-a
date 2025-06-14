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
import { Calendar, CheckCircle, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: "Special Offers & Promotions | Nail Salon Discounts | Victoria Park Nails and Spa Calgary",
  description: "Discover exclusive deals and limited-time promotions at Victoria Park Nails and Spa. Student discounts, loyalty rewards, seasonal offers, and package deals for our premium nail and spa services in downtown Calgary.",
  keywords: [
    "nail salon promotions Calgary",
    "nail spa discounts",
    "Victoria Park nail specials", 
    "Calgary nail salon deals",
    "nail care promotions",
    "manicure discounts Calgary",
    "pedicure special offers",
    "nail art promotions",
    "student discounts nail salon",
    "loyalty program nail spa",
    "seasonal nail offers Calgary",
    "package deals nails",
    "bridal nail packages",
    "group discounts nail salon",
    "Calgary spa promotions",
    "nail treatment specials",
    "referral program nail salon",
    "first-time client discount",
    "downtown Calgary nail deals"
  ],
  openGraph: {
    title: "Special Offers & Promotions | Victoria Park Nails and Spa Calgary",
    description: "Exclusive deals and limited-time promotions at Victoria Park Nails and Spa. Discover our special offers, loyalty rewards program, and seasonal discounts.",
    url: "https://victoriaparknails.ca/promotions",
    images: [{
      url: "/promotions-og.jpg",
      width: 1200,
      height: 630,
      alt: "Special promotions and discounts at Victoria Park Nails and Spa Calgary - student deals, loyalty rewards, and seasonal offers"
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
        title="Special Offers & Promotions"
        subtitle="Discover exclusive deals and savings on our premium nail care and spa services. From seasonal specials to loyalty rewards, find the perfect promotion for your next visit."
        videoSrc="/videos/hero-bg-video-003.mp4"
      />

      {/* Featured Promotions Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
              Featured Promotions
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Our most popular limited-time offers and seasonal specials designed to give you maximum value
            </p>
          </div>

          <AnimatedList 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            itemDelay={70}
            itemThreshold={0.2}
          >
            {featuredPromotions.map((promotion) => (
              <Card key={promotion.id} className="overflow-hidden border-2 border-primary/10 bg-card fade-on-hover">
                <div className="relative h-48 md:h-60">
                  {promotion.image && (
                    <Image
                      src={promotion.image}
                      alt={promotion.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive" className="text-sm font-semibold px-3 py-1">
                      {promotion.discount}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-balance">{promotion.title}</CardTitle>
                  <CardDescription className="text-base text-balance">{promotion.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="text-primary" />
                      <span>Valid until: {promotion.validUntil === "Ongoing" ? "Ongoing" : new Date(promotion.validUntil).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Terms & Conditions:</h4>
                      <ul className="space-y-2">
                        {promotion.terms.map((term, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                            <span>{term}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold">
                    Book With This Promotion
                  </button>
                </CardFooter>
              </Card>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* Regular Promotions Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
              More Offers & Discounts
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Additional special offers to help you save on your favorite nail and spa services
            </p>
          </div>

          <AnimatedList 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            itemDelay={50}
            itemThreshold={0.1}
          >
            {regularPromotions.map((promotion) => (
              <Card key={promotion.id} className="h-full flex flex-col border bg-card fade-on-hover">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-serif text-balance">{promotion.title}</CardTitle>
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {promotion.discount}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-balance">{promotion.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={16} />
                    <span>Valid until: {promotion.validUntil === "Ongoing" ? "Ongoing" : new Date(promotion.validUntil).toLocaleDateString()}</span>
                  </div>
                  <div className="space-y-1 mt-2 text-sm">
                    {promotion.terms.slice(0, 3).map((term, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-primary mt-1 flex-shrink-0" />
                        <span>{term}</span>
                      </div>
                    ))}
                    {promotion.terms.length > 3 && (
                      <div className="text-sm text-primary cursor-pointer hover:underline mt-1">
                        + {promotion.terms.length - 3} more terms
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="w-full bg-primary/10 text-primary hover:bg-primary/20 py-2 rounded-lg transition-colors text-sm font-medium">
                    View Details
                  </button>
                </CardFooter>
              </Card>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* Loyalty Program Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
                Loyalty Rewards Program
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed text-balance">
                Join our loyalty program and earn points with every visit. Collect 1 point for every dollar spent and redeem your points for discounts on future services.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Tag size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Earn Points</h3>
                    <p className="text-sm text-muted-foreground">Receive 1 point for every $1 spent on services and products</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <CheckCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Redeem Rewards</h3>
                    <p className="text-sm text-muted-foreground">Every 100 points equals $10 off your next service</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Never Expires</h3>
                    <p className="text-sm text-muted-foreground">Your points never expire as long as your account remains active</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Sign Up for Rewards
              </button>
            </div>
            
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image 
                src="/images/promotions/loyalty-program.webp"
                alt="Victoria Park Nails Loyalty Program"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif text-balance">
              Never Miss a Promotion
            </h2>
            <p className="text-base text-primary-foreground/80 mb-6 text-balance">
              Subscribe to our newsletter to receive exclusive promotions, seasonal offers, and nail care tips directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-foreground"
              />
              <button className="bg-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-primary-foreground/70 mt-4">
              By subscribing, you agree to receive marketing emails from {businessInfo.name}. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4 font-serif text-balance">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto text-balance">
            Experience the Victoria Park Nails difference. Book your appointment
            today and let our expert team take care of you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Book Online
            </button>
            <button className="border border-primary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Call Us: {businessInfo.contact.phone}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 