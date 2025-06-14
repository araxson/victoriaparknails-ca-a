import { FAQSection } from "@/components/sections/faq-section";
import { ContactInfoSection } from "@/components/sections/contact-info-section";
import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions | Nail Care Tips | Victoria Park Nails and Spa Calgary",
  description: "Find answers to frequently asked questions about our nail and spa services, booking policies, aftercare tips, pricing, and hygiene standards at Victoria Park Nails and Spa Calgary. Expert nail care advice and service information.",
  keywords: [
    "nail salon FAQ Calgary",
    "manicure questions Calgary",
    "pedicure aftercare tips", 
    "nail salon policies Calgary",
    "nail booking questions Calgary",
    "Calgary nail salon FAQ",
    "nail care tips Calgary",
    "gel nails aftercare Calgary",
    "acrylic nails FAQ Calgary",
    "nail salon hygiene questions",
    "nail service questions Calgary",
    "nail appointment FAQ Calgary",
    "nail extension care tips",
    "nail art questions Calgary"
  ],
  openGraph: {
    title: "FAQ | Frequently Asked Questions | Victoria Park Nails and Spa Calgary",
    description: "Find answers to frequently asked questions about our professional nail and spa services, booking policies, and expert nail care tips.",
    url: "https://victoriaparknails.ca/faq",
    images: [{
      url: "/faq-og.jpg",
      width: 1200, 
      height: 630,
      alt: "Frequently asked questions about Victoria Park Nails and Spa services in Calgary"
    }]
  },
  alternates: {
    canonical: "https://victoriaparknails.ca/faq"
  }
};

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, booking, and policies"
        videoSrc="/videos/hero-bg-video-003.mp4"
      />

      <FAQSection />
      
      <ContactInfoSection />
    </main>
  );
}