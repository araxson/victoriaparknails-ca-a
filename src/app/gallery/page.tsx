import * as React from "react";
import type { Metadata } from "next";
import { getAllGalleryImages } from "@/data/gallery";
import { HeroSection } from "@/components/sections/hero-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Section } from "@/components/layouts";
import { StaticGalleryClient } from "./static-gallery-client";
import { businessInfo } from "@/data";

// Force static generation for maximum SSG performance
export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: "Gallery | Victoria Park Nails and Spa | Nail Art & Design Showcase Calgary",
  description:
    "Browse our stunning nail art gallery showcasing custom designs, manicures, and pedicures at Victoria Park Nails and Spa in Calgary. Professional nail work, creative designs, and inspiring nail art examples. Get inspired for your next appointment at Calgary's premier nail salon.",
  keywords: [
    "nail art gallery Calgary",
    "nail design examples",
    "Victoria Park nails gallery",
    "Calgary nail art showcase",
    "manicure examples",
    "pedicure designs",
    "custom nail art Calgary",
    "nail salon portfolio",
    "professional nail work",
    "nail design inspiration",
    "gel nail designs Calgary",
    "acrylic nail art",
    "nail art photos Calgary",
    "nail salon gallery",
    "beautiful nail designs",
    "nail art portfolio",
    "Calgary nail technician work",
    "professional nail art",
    "nail design ideas",
    "nail art inspiration Calgary",
  ],
  openGraph: {
    title: "Gallery | Victoria Park Nails and Spa - Nail Art Showcase Calgary",
    description:
      "Browse our beautiful collection of nail art, custom designs, and professional nail services. Get inspired for your next appointment at Calgary's premier nail salon with over 100+ stunning examples.",
    url: `${businessInfo.contact.website}/gallery`,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/images/gallery/victoriaparknails-0001.webp",
        width: 800,
        height: 600,
        alt: "Victoria Park Nails gallery - Professional nail art showcase featuring custom designs and manicures",
      },
      {
        url: "/images/gallery/victoriaparknails-0002.webp",
        width: 800,
        height: 600,
        alt: "Beautiful nail art examples from Victoria Park Nails and Spa Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Victoria Park Nails - Nail Art Showcase",
    description:
      "Browse our beautiful collection of nail art and custom designs. Get inspired for your next appointment at Calgary's premier nail salon.",
    images: ["/images/gallery/victoriaparknails-0001.webp"],
    creator: "@victoriaparknails",
  },
  alternates: {
    canonical: `${businessInfo.contact.website}/gallery`,
  },
  other: {
    "page-topic": "Nail Art Gallery, Nail Design Portfolio",
    "content-type": "Image Gallery",
    "image-count": "20+",
  },
};

export default function GalleryPage() {
  // Get all gallery images statically at build time
  const allGalleryImages = getAllGalleryImages();

  return (
    <>
      <main className="min-h-screen flex-col">
        <HeroSection
          title="Our Gallery"
          subtitle="Explore our collection of beautiful nail art, designs, and salon moments"
          videoSrc="/videos/hero-bg-video-001.mp4"
        />

        <Section variant="muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Our Gallery</h1>
              <p className="text-muted-foreground">
                {allGalleryImages.length} beautiful images showcasing our work
              </p>
            </div>
            
            {/* Static Gallery with Client-side Interactivity */}
            <StaticGalleryClient images={allGalleryImages} />
          </div>
        </Section>
        
        <CtaSection />
      </main>
    </>
  );
}
