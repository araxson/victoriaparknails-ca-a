import type { Metadata } from "next";
import { offers } from "@/data/offers";
import { businessInfo } from "@/data";
import { HeroSection } from "@/components/sections/hero-section";
import { OfferCard } from "@/components/ui/offer-card";
import { Button } from "@/components/ui/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import { Section } from "@/components/layouts";
import { Gift, Tag, Phone, CalendarCheck, Percent } from "lucide-react";
import { Separator } from "@/components/ui/shadcn/separator";
import { Badge } from "@/components/ui/shadcn/badge";

// Force static generation for maximum SSG performance
export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title:
    `Special Offers & Promotions | Nail Salon Deals Calgary | ${businessInfo.name}`,
  description:
    `Exclusive nail salon deals in Calgary. New client discounts, loyalty programs, seasonal offers and packages for manicures, pedicures, and nail art at ${businessInfo.name}. Save on professional nail services with our current promotions and special packages.`,
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
    "nail service packages Calgary",
    "beauty deals Calgary",
    "nail salon savings",
    "special promotions Calgary",
    "discounted nail services",
    "Calgary nail deals",
    "nail spa offers",
    "professional nail discounts",
  ],
  openGraph: {
    title: "Special Offers & Promotions | Victoria Park Nails and Spa Calgary",
    description:
      "Save on professional nail and spa services with our exclusive offers and promotions in Calgary. New client discounts, seasonal specials, and package deals available.",
    url: `${businessInfo.contact.website}/offers`,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/Victoria_Park_Nails_Spa_Logo_Primary_small.png",
        width: 800,
        height: 600,
        alt: "Special offers and promotions at Victoria Park Nails and Spa Calgary - nail salon deals and discounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Offers | Victoria Park Nails Calgary",
    description:
      "Save on professional nail services with our exclusive offers and promotions. New client discounts and seasonal specials available.",
    images: ["/Victoria_Park_Nails_Spa_Logo_Primary_small.png"],
    creator: "@victoriaparknails",
  },
  alternates: {
    canonical: `${businessInfo.contact.website}/offers`,
  },
  other: {
    "page-topic": "Special Offers, Promotions, Discounts, Deals",
    "offer-types": "New Client Discounts, Seasonal Specials, Package Deals",
    "savings-available": "Yes",
  },
};

export default function OffersPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Special Offers & Promotions"
        subtitle="Exclusive deals on premium nail & spa services"
        description="Save on your favorite services with our limited-time offers and seasonal specials."
        showButtons={true}
        showBadge={false}
      />

      {/* All Offers Section */}
      <Section variant="muted">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col items-center text-center mb-10">
            <Badge variant="outline" className="mb-3 bg-primary text-primary-foreground">
              <Percent className="w-4 h-4 mr-1" /> Exclusive Savings
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Current Special Offers</h2>
            <Separator className="w-24 mb-5" />
            <p className="text-muted-foreground max-w-2xl">
              Take advantage of these limited-time savings on our most popular services
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
                  <Button size="lg" className="gap-2" asChild>
                    <a href={`tel:${businessInfo.contact.phone}`}>
                      <Phone className="w-4 h-4" /> 
                      Call {businessInfo.contact.phone}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a 
                      href={businessInfo.contact.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      Book Online
                    </a>
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
