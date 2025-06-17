import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Nail Art & Salon Photos | Victoria Park Nails & Spa",
  description:
    "Browse our gallery of beautiful nail designs, custom nail art, and salon photos. See examples of our work at Victoria Park Nails and Spa in Calgary.",
  keywords: [
    "nail art gallery",
    "Calgary nail designs",
    "custom nail art",
    "nail salon photos",
    "manicure examples",
    "pedicure gallery",
    "Victoria Park Nails and Spa nails gallery",
  ],
  openGraph: {
    title: "Gallery | Victoria Park Nails and Spa",
    description:
      "Browse our collection of beautiful nail designs and salon photos from Calgary's premier nail salon.",
    url: "https://victoriaparknails.ca/gallery",
    images: [
      {
        url: "/gallery-og.jpg",
        width: 1200,
        height: 630,
        alt: "Beautiful nail art and designs from Victoria Park Nails and Spa",
      },
    ],
  },
  alternates: {
    canonical: "https://victoriaparknails.ca/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
