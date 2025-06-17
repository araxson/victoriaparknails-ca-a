import type { Metadata } from "next";
import { offers } from "@/data/offers";
import { businessInfo } from "@/data";
import { HeroSection } from "@/components/sections/hero-section";
import { OfferCard } from "@/components/ui/offer-card";
import { Button } from "@/components/ui/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import { Section } from "@/components/layouts";
import { Sparkles, Gift, Tag, Phone, CalendarCheck } from "lucide-react";
import { Separator } from "@/components/ui/shadcn/separator";
import { Badge } from "@/components/ui/shadcn/badge";

export const metadata: Metadata = {
  title:
    "Special Offers & Promotions | Nail Salon Deals Calgary | Victoria Park Nails and Spa",
  description:
    "Discover amazing nail salon deals and promotions in Calgary. New client discounts, loyalty programs, seasonal offers, and exclusive packages. Save on manicures, pedicures, nail art, and spa services at Victoria Park Nails and Spa.",
  keywords: [
    "nail salon deals Calgary",
    "manicure discounts Calgary",
    "new client nail salon offers",
    "pedicure promotions Calgary",
    "nail art specials Calgary",
    "loyalty rewards nail salon",
    "Calgary nail salon coupons",
    "spa package deals Calgary",
    "seasonal nail offers",
    "Victoria Park nail promotions",
    "affordable nail services Calgary",
    "nail salon membership Calgary",
    "group booking discounts",
    "student nail discounts Calgary",
  ],
  openGraph: {
    title: "Special Offers & Promotions | Victoria Park Nails and Spa Calgary",
    description:
      "Save on professional nail and spa services with our exclusive offers and promotions in Calgary.",
    images: ["/images/offers/offers-hero.webp"],
  },
};

export default async function OffersPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Special Offers & Promotions"
        subtitle="Discover amazing deals and save on your favorite nail and spa services"
        description="From new client welcome bonuses to exclusive loyalty rewards, we have something special for everyone."
        showButtons={true}
        showBadge={false}
      />

      {/* All Offers Section */}
      <Section variant="muted">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col items-center text-center mb-10">
            <Badge variant="outline" className="mb-3">
              <Sparkles className="w-4 h-4 mr-1" /> Limited Time
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Special Offers</h2>
            <Separator className="w-24 mb-5" />
            <p className="text-muted-foreground max-w-2xl">
              Don&apos;t miss out on these exclusive limited-time offers
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section variant="accent">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              How to Redeem Your Offers
            </h2>
            <Separator className="w-24 mb-5" />
            <p className="text-muted-foreground max-w-2xl">
              It&apos;s easy to save on your next visit. Follow these simple
              steps to claim your discount.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: 1,
                icon: <Gift className="w-6 h-6" />,
                title: "Choose Your Offer",
                description:
                  "Browse our current offers and select the deal that's perfect for you.",
              },
              {
                step: 2,
                icon: <CalendarCheck className="w-6 h-6" />,
                title: "Book Your Appointment",
                description:
                  "Call us or book online and mention your chosen offer when scheduling.",
              },
              {
                step: 3,
                icon: <Tag className="w-6 h-6" />,
                title: "Enjoy Your Savings",
                description:
                  "Present your offer at your appointment and enjoy your discounted service!",
              },
            ].map((item) => (
              <Card key={item.step} className="border-0">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center relative">
                      {item.icon}
                      <Badge className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 flex items-center justify-center">
                        {item.step}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section variant="secondary">
        <div className="container py-12 md:py-16">
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6 pb-6 px-6 md:px-8">
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Questions About Our Offers?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our friendly team is here to help you choose the perfect deal
                  and book your appointment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">
                    <Phone className="w-4 h-4" /> 
                    Call {businessInfo.contact.phone}
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <CalendarCheck className="w-4 h-4" />
                    Book Online
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  );
}
