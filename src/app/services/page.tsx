import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import ServiceDetailsSection from "@/components/sections/service-details-section";
import { ServicePricingComparison } from "@/components/sections/service-combinations";
import { CtaSection } from "@/components/sections/cta-section";
import { businessInfo } from "@/data";

// Force static generation for maximum SSG performance
export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title:
    `Professional Nail & Spa Services | Manicures, Pedicures, Nail Art | ${businessInfo.name} Calgary`,
  description:
    `Professional nail and spa services in Calgary. Expert manicures, pedicures, nail art, gel & acrylic extensions, waxing, and lash services with transparent pricing. Located in downtown Calgary at ${businessInfo.address.street}. Experience luxury nail care by certified technicians since ${businessInfo.founded}.`,
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
    "nail care packages Calgary",
    "professional manicures",
    "luxury pedicures",
    "nail salon menu Calgary",
    "beauty services Calgary",
  ],
  openGraph: {
    title:
      `Professional Nail & Spa Services | ${businessInfo.name} Calgary`,
    description:
      "Comprehensive nail and spa services in downtown Calgary. Expert manicures, luxury pedicures, custom nail art, extensions, and spa treatments with transparent pricing. Professional certified technicians.",
    url: `${businessInfo.contact.website}/services`,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/Victoria_Park_Nails_Spa_Logo_Primary_small.png",
        width: 800,
        height: 600,
        alt: `Professional nail services at ${businessInfo.name} Calgary - manicures, pedicures, nail art, and spa treatments`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Professional Nail & Spa Services | ${businessInfo.name} Calgary`,
    description:
      "Expert nail services including manicures, pedicures, custom nail art, and spa treatments in downtown Calgary.",
    images: ["/Victoria_Park_Nails_Spa_Logo_Primary_small.png"],
    creator: "@victoriaparknails",
  },
  alternates: {
    canonical: `${businessInfo.contact.website}/services`,
  },
  other: {
    "page-topic": "Nail Services, Spa Services, Beauty Treatments",
    "service-types": "Manicures, Pedicures, Nail Art, Extensions, Spa",
    "price-range": "$$",
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

      {/* Services Content - Now fully static */}
      <ServiceDetailsSection />

      {/* Service Package Pricing Comparison */}
      <ServicePricingComparison />

      {/* Call to Action Section */}
      <CtaSection />
    </div>
  );
}
