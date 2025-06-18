import type { Metadata } from "next";
// import { services } from '@/data';
import { HeroSection } from "@/components/sections/hero-section";
import { Suspense } from "react";
import ServiceDetailsSection from "@/components/sections/service-details-section";
import { ServicePricingComparison } from "@/components/sections/service-combinations";
import { CtaSection } from "@/components/sections/cta-section";
import { Section } from "@/components/layouts";

export const metadata: Metadata = {
  title:
    "Professional Nail & Spa Services | Manicures, Pedicures, Nail Art | Victoria Park Nails and Spa Calgary",
  description:
    "Explore our comprehensive menu of professional nail and spa services in Calgary. Expert manicures, luxury pedicures, custom nail art, gel & acrylic extensions, waxing, massage, and lash services. View pricing and book online at Calgary's premier nail salon.",
  keywords: [
    "Calgary nail services",
    "manicure prices Calgary",
    "pedicure services Calgary",
    "gel nails Calgary",
    "acrylic nails Calgary",
    "nail art services Calgary",
    "shellac manicure Calgary",
    "spa pedicure Calgary",
    "nail extensions Calgary",
    "professional nail care Calgary",
    "nail salon pricing Calgary",
    "custom nail design Calgary",
    "luxury nail services Calgary",
    "downtown Calgary nail services",
    "Victoria Park nail services",
    "nail technician Calgary",
    "best nail salon services Calgary",
    "nail enhancement Calgary",
    "spa treatments Calgary",
    "waxing services Calgary",
    "massage therapy Calgary",
    "eyelash extensions Calgary",
    "nail art design Calgary",
    "French manicure Calgary",
    "bridal nail services Calgary",
  ],
  openGraph: {
    title:
      "Professional Nail & Spa Services | Victoria Park Nails and Spa Calgary",
    description:
      "Comprehensive nail and spa services in downtown Calgary. Expert manicures, luxury pedicures, custom nail art, extensions, and spa treatments with transparent pricing.",
    url: "https://victoriaparknails.ca/services",
    images: [
      {
        url: "/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional nail services at Victoria Park Nails and Spa Calgary - manicures, pedicures, nail art, and spa treatments",
      },
    ],
  },
  alternates: {
    canonical: "https://victoriaparknails.ca/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="Professional Nail & Spa Services"
        subtitle="Experience luxury nail care and spa treatments with our comprehensive range of services. From classic manicures to advanced nail art, we offer everything you need for beautiful, healthy nails."
        videoSrc="/videos/hero-bg-video-002.mp4"
      />

      {/* Services Content */}
      <Suspense fallback={
        <Section variant="default" className="py-20">
          <div className="container">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading our beautiful services menu...</p>
            </div>
          </div>
        </Section>
      }>
        <ServiceDetailsSection />
      </Suspense>

      {/* Service Package Pricing Comparison */}
      <ServicePricingComparison />

      {/* Call to Action Section */}
      <CtaSection />
    </div>
  );
}
