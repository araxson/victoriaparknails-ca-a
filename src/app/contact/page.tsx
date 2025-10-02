import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { businessInfo } from "@/data";

// Force static generation for maximum SSG performance
export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title:
    `Contact & Location | Book Appointment | ${businessInfo.name} Calgary | ${businessInfo.address.street}`,
  description:
    `Contact ${businessInfo.name} at ${businessInfo.address.fullAddress}. Call ${businessInfo.contact.phone} or book online. Open Monday-Friday ${businessInfo.hours.monday}, weekends ${businessInfo.hours.saturday}. Free parking available, accessible location in downtown Calgary. Professional nail technicians ready to serve you.`,
  keywords: [
    `contact ${businessInfo.name} Calgary`,
    "nail salon Calgary location",
    `${businessInfo.address.street} Calgary`,
    "book nail appointment Calgary",
    "Calgary nail salon phone number",
    "downtown Calgary nail salon address",
    `${businessInfo.name} nail salon hours`,
    "nail salon contact Calgary",
    "book manicure Calgary",
    "nail salon directions Calgary",
    "Calgary nail salon map",
    "nail appointment booking Calgary",
    "nail salon near me Calgary",
    "Victoria Park nail salon contact",
    "Calgary nail salon appointments",
    "nail spa booking Calgary",
    "professional nail salon Calgary contact",
    "nail care appointment Calgary",
    "downtown nail salon Calgary",
    "1st Street SE nail salon",
    "Calgary beauty salon contact",
    "nail technician appointment",
  ],
  openGraph: {
    title: `Contact & Location | ${businessInfo.name} Calgary`,
    description:
      `Contact us to book your appointment at Calgary's premier nail salon. Located in downtown Calgary at ${businessInfo.address.street}. Call ${businessInfo.contact.phone} or book online. Free parking available, easy access.`,
    url: `${businessInfo.contact.website}/contact`,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/Victoria_Park_Nails_Spa_Logo_Primary_small.png",
        width: 800,
        height: 600,
        alt: `${businessInfo.name} location in downtown Calgary - contact us to book your appointment`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${businessInfo.name} | Calgary Nail Salon`,
    description:
      `Book your appointment at Calgary's premier nail salon. Located downtown at ${businessInfo.address.street}. Call ${businessInfo.contact.phone}.`,
    images: ["/Victoria_Park_Nails_Spa_Logo_Primary_small.png"],
    creator: "@victoriaparknails",
  },
  alternates: {
    canonical: `${businessInfo.contact.website}/contact`,
  },
  other: {
    "page-topic": "Contact Information, Location, Appointment Booking",
    "business-phone": businessInfo.contact.phone,
    "business-address": businessInfo.address.fullAddress,
    "business-hours": `Mon-Fri: ${businessInfo.hours.monday}, Sat-Sun: ${businessInfo.hours.saturday}`,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex-col">
      <HeroSection
        title="Get In Touch"
        subtitle="Book your visit or send us a message"
        videoSrc="/videos/hero-bg-video-004.mp4"
      />
      <ContactSection />
      <CtaSection />
    </main>
  );
}
