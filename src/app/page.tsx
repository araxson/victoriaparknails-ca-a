import type { Metadata } from "next";
import { businessInfo } from "@/data";
import { HeroSection } from "@/components/sections/hero-section";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { FAQSection } from "@/components/sections/faq-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ServicePricingComparison } from "@/components/sections/service-combinations";
import { CtaSection } from "@/components/sections/cta-section";

// Force static generation for maximum SSG performance
export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title:
    `${businessInfo.name} | Calgary's Premier Nail Salon | Custom Nail Art & Luxury Spa Services`,
  description:
    `Calgary's finest nail salon since ${businessInfo.founded}. Luxury manicures, pedicures, custom nail art, gel nails, and spa treatments in downtown Calgary. Professional nail technicians, relaxing atmosphere, and premium services. Book your appointment today!`,
  keywords: [
    "Calgary nail salon",
    "Victoria Park nail salon",
    "downtown Calgary nails",
    "best nail salon Calgary",
    "custom nail art Calgary",
    "luxury manicure Calgary",
    "spa pedicure Calgary",
    "gel nails Calgary",
    "acrylic nails Calgary",
    "shellac manicure Calgary",
    "nail extensions Calgary",
    "professional nail care Calgary",
    "nail salon 1st Street SE",
    "Calgary spa services",
    "nail art design Calgary",
    "bridal nails Calgary",
    "premium nail salon Calgary",
    "nail technician Calgary",
    "manicure and pedicure Calgary",
    "nail salon Victoria Park",
    "Calgary beauty salon",
    "professional nail services",
    "nail care Calgary",
  ],
  openGraph: {
    title: `${businessInfo.name} | Calgary's Premier Nail Salon & Spa`,
    description:
      `Experience Calgary's finest nail salon and spa services. Custom nail art, luxury manicures & pedicures, gel nails, and spa treatments in downtown Calgary since ${businessInfo.founded}. Professional nail technicians in a relaxing, premium environment.`,
    url: businessInfo.contact.website,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/Victoria_Park_Nails_Spa_Logo_Primary_small.png",
        width: 800,
        height: 600,
        alt: `${businessInfo.name} - Calgary's premier nail salon interior showcasing luxury manicure and pedicure stations`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} | Calgary's Premier Nail Salon`,
    description:
      `Experience Calgary's finest nail salon services. Custom nail art, luxury spa treatments, and professional nail care in downtown Calgary since ${businessInfo.founded}.`,
    images: ["/Victoria_Park_Nails_Spa_Logo_Primary_small.png"],
    creator: "@victoriaparknails",
  },
  alternates: {
    canonical: businessInfo.contact.website,
  },
  other: {
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "page-topic": "Nail Salon, Beauty, Spa Services",
    "page-type": "Home Page",
    "audience": "Beauty enthusiasts, Calgary residents, Nail care seekers",
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero section loads immediately without scroll animation */}
      <HeroSection
        showButtons={true}
        showBadge={true}
        videoSrc="/videos/hero-bg-video-003.mp4"
      />

      {/* All sections now have individual element animations within them */}
      <AboutSection />
      <ServicesSection />
      <ServicePricingComparison />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <CtaSection />
    </main>
  );
}
