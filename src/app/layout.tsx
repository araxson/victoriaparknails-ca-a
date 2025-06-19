import type { Metadata } from "next";
import "./globals.css";
import { MainHeader, MainFooter, Breadcrumbs } from "@/components/layouts";
import { businessInfo } from "@/data";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui";
import { Notification } from "@/components/ui/notifications";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { cn } from "@/lib/utils";
import { playfairDisplay, roboto } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://victoriaparknails.ca"),
  title: {
    default:
      "Victoria Park Nails and Spa | Premier Nail Salon in Calgary | Custom Nail Art & Spa Services",
    template: "%s | Victoria Park Nails and Spa | Calgary's Premier Nail Salon",
  },
  description:
    "Victoria Park Nails and Spa - Calgary's premier nail salon offering exceptional manicures, pedicures, custom nail art, gel nails, acrylic extensions, and luxury spa treatments. Located in downtown Calgary since 2015. Book your appointment today!",
  keywords: [
    "nail salon Calgary",
    "spa Calgary",
    "Victoria Park Nails and Spa nails",
    "downtown Calgary nails",
    "manicure Calgary",
    "pedicure Calgary",
    "nail art Calgary",
    "gel nails Calgary",
    "acrylic nails Calgary",
    "shellac manicure Calgary",
    "custom nail design",
    "nail salon downtown Calgary",
    "best nail salon Calgary",
    "nail extensions Calgary",
    "spa pedicure Calgary",
    "Calgary nail technician",
    "professional nail care Calgary",
    "luxury nail salon Calgary",
    "nail salon Victoria Park Nails and Spa",
    "Calgary spa services",
    "nail art design Calgary",
    "bridal nails Calgary",
    "nail salon 1st Street SE",
  ],
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  category: "Beauty & Wellness",
  classification: "Nail Salon & Spa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://victoriaparknails.ca",
    title: "Victoria Park Nails and Spa | Calgary's Premier Nail Salon & Spa",
    description:
      "Experience Calgary's finest nail salon and spa services. Custom nail art, luxury manicures & pedicures, gel nails, and spa treatments in downtown Calgary since 2015.",
    siteName: businessInfo.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Victoria Park Nails and Spa - Calgary's premier nail salon featuring luxury manicures, pedicures, and custom nail art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victoria Park Nails and Spa | Calgary's Premier Nail Salon",
    description:
      "Experience Calgary's finest nail salon services. Custom nail art, luxury spa treatments, and professional nail care in downtown Calgary.",
    images: ["/og-image.jpg"],
    creator: "@victoriaparknails",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },
  alternates: {
    canonical: "https://victoriaparknails.ca",
    languages: {
      "en-CA": "https://victoriaparknails.ca",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={cn(
        "min-h-screen bg-background font-sans",
        roboto.variable,
        playfairDisplay.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["NailSalon", "BeautySalon", "DaySpa"],
              name: "Victoria Park Nails and Spa",
              alternateName: "Victoria Park Nails and Spa",
              image: [
                "https://victoriaparknails.ca/og-image.jpg",
                "https://victoriaparknails.ca/images/salon-exterior.jpg",
                "https://victoriaparknails.ca/images/salon-interior.jpg",
              ],
              description:
                "Calgary's premier nail salon and spa offering luxury manicures, pedicures, custom nail art, gel nails, acrylic extensions, and spa treatments since 2015.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1411 1st Street SE",
                addressLocality: "Calgary",
                addressRegion: "AB",
                postalCode: "T2G 2G3",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.0447,
                longitude: -114.0719,
              },
              telephone: "+14037193600",
              email: "calgaryvpark@gmail.com",
              url: "https://victoriaparknails.ca",
              foundingDate: "2015",
              paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
              currenciesAccepted: "CAD",
              priceRange: "$$",
              areaServed: {
                "@type": "City",
                name: "Calgary",
                addressRegion: "AB",
                addressCountry: "CA",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 51.0447,
                  longitude: -114.0719,
                },
                geoRadius: "25000",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "10:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "10:00",
                  closes: "17:30",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Nail & Spa Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Manicure Services",
                      description:
                        "Professional manicure services including regular, shellac, and gel options",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pedicure Services",
                      description:
                        "Luxury pedicure services with spa options and shellac finish",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Nail Extensions",
                      description:
                        "Acrylic and gel nail extensions with custom designs",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Nail Art",
                      description: "Professional nail art and custom designs",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Jessica L.",
                  },
                  reviewBody:
                    "This is hands-down the best nail salon in Calgary! The attention to detail is incredible, the salon is beautiful and clean, and my gel manicure lasts for weeks.",
                },
              ],
              sameAs: [
                "https://www.facebook.com/victoriaparknails",
                "https://www.instagram.com/victoriaparknails",
                "https://www.tiktok.com/@victoriaparknails",
              ],
            }),
          }}
        />
        {/* Favicons are automatically handled by Next.js through files in the app directory */}
        {/* The following are additional icons and configurations */}
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="theme-color" content="#c2864b" />
        <meta name="msapplication-TileColor" content="#c2864b" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Notification />
          <MainHeader />
          <main className="relative flex min-h-screen flex-col">
            <Breadcrumbs />
            <div className="flex-grow">{children}</div>
          </main>
          <MainFooter />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}