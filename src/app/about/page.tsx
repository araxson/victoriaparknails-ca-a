import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title:
    "Our Story & Mission | Victoria Park Nails and Spa | Calgary's Trusted Nail Salon Since 2015",
  description:
    "Discover the story behind Calgary's premier nail salon. Founded in 2015, Victoria Park Nails and Spa has been providing exceptional nail care, custom art, and spa services in downtown Calgary. Learn about our commitment to quality, hygiene, creativity, and customer satisfaction.",
  keywords: [
    "about Victoria Park Nails and Spa Calgary",
    "Calgary nail salon story",
    "nail salon mission Calgary",
    "professional nail salon Calgary",
    "trusted nail salon Calgary",
    "nail salon since 2015",
    "Calgary spa story",
    "nail salon values Calgary",
    "downtown Calgary nail salon history",
    "Victoria Park Nails and Spa nail salon team",
    "nail salon commitment Calgary",
    "quality nail care Calgary",
    "nail salon hygiene standards",
    "creative nail art Calgary",
    "customer satisfaction nail salon",
  ],
  openGraph: {
    title: "Our Story & Mission | Victoria Park Nails and Spa Calgary",
    description:
      "Discover the story behind Calgary's premier nail salon. Founded in 2015, learn about our commitment to quality, hygiene, creativity, and exceptional customer care.",
    url: "https://victoriaparknails.ca/about",
    images: [
      {
        url: "/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Victoria Park Nails and Spa team - Calgary's trusted nail salon professionals since 2015",
      },
    ],
  },
  alternates: {
    canonical: "https://victoriaparknails.ca/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex-col">
      <HeroSection
        title="Our Story"
        subtitle="A passion for pampering, a commitment to care"
        videoSrc="/videos/hero-bg-video-001.mp4"
      />

      <AboutSection />
      <CtaSection />
    </main>
  );
}
