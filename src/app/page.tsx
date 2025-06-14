import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { TeamSection } from '@/components/sections/team-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { FAQSection } from '@/components/sections/faq-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesSection } from '@/components/sections/services-section';

export const metadata: Metadata = {
  title: "Victoria Park Nails and Spa | Calgary's Premier Nail Salon | Custom Nail Art & Luxury Spa Services",
  description: "Experience Calgary's finest nail salon and spa since 2015. Located in downtown Victoria Park Nails and Spa, we offer luxury manicures, pedicures, custom nail art, gel nails, acrylic extensions, and spa treatments. Book your appointment at Calgary's most trusted nail salon today!",
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
    "premium nail salon Calgary"
  ],
  openGraph: {
    title: "Victoria Park Nails and Spa | Calgary's Premier Nail Salon & Spa",
    description: "Experience Calgary's finest nail salon and spa services. Custom nail art, luxury manicures & pedicures, gel nails, and spa treatments in downtown Calgary since 2015.",
    url: "https://victoriaparknails.ca",
    images: [{
      url: "/og-home.jpg",
      width: 1200,
      height: 630,
      alt: "Victoria Park Nails and Spa - Calgary's premier nail salon interior showcasing luxury manicure and pedicure stations"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Victoria Park Nails and Spa | Calgary's Premier Nail Salon",
    description: "Experience Calgary's finest nail salon services. Custom nail art, luxury spa treatments, and professional nail care in downtown Calgary.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "https://victoriaparknails.ca"
  }
};

export default function Home() {
  return (
    <main className="space-y-0">
      {/* Hero section loads immediately without scroll animation */}
      <HeroSection showButtons={true} showBadge={true} videoSrc="/videos/hero-bg-video-001.mp4" />
      
      {/* All sections now have individual element animations within them */}
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}