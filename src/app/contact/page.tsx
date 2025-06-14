import type { Metadata } from 'next';
import { ContactInfoSection } from "@/components/sections/contact-info-section";
import { HeroSection } from '@/components/sections/hero-section';

export const metadata: Metadata = {
  title: "Contact & Location | Book Appointment | Victoria Park Nails and Spa Calgary | 1411 1st Street SE",
  description: "Contact Victoria Park Nails and Spa in downtown Calgary. Located at 1411 1st Street SE, Calgary AB. Call (403) 719-3600 to book your appointment. Open Monday-Friday 10am-7pm, weekends 10am-5:30pm. Get directions and book online.",
  keywords: [
    "contact Victoria Park Nails and Spa Calgary",
    "nail salon Calgary location",
    "1411 1st Street SE Calgary",
    "book nail appointment Calgary",
    "Calgary nail salon phone number",
    "downtown Calgary nail salon address",
    "Victoria Park Nails and Spa nail salon hours",
    "nail salon contact Calgary",
    "book manicure Calgary",
    "nail salon directions Calgary",
    "Calgary nail salon map",
    "nail appointment booking Calgary"
  ],
  openGraph: {
    title: "Contact & Location | Victoria Park Nails and Spa Calgary",
    description: "Contact us to book your appointment at Calgary's premier nail salon. Located in downtown Victoria Park Nails and Spa at 1411 1st Street SE. Call (403) 719-3600.",
    url: "https://victoriaparknails.ca/contact",
    images: [{
      url: "/contact-og.jpg",
      width: 1200,
      height: 630,
      alt: "Victoria Park Nails and Spa location in downtown Calgary - contact us to book your appointment"
    }]
  },
  alternates: {
    canonical: "https://victoriaparknails.ca/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection 
        title="Get In Touch"
        subtitle="Book your visit or send us a message"
        videoSrc="/videos/hero-bg-video-004.mp4"
      />

      <ContactInfoSection />
    </main>
  );
}
