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
import { GoogleAnalytics } from "@/lib/analytics";

// Force static generation for maximum SSG performance
export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.contact.website),
  title: {
    default:
      `${businessInfo.name} | Premier Nail Salon in Calgary | Custom Nail Art & Spa Services`,
    template: `%s | ${businessInfo.name} | Calgary's Premier Nail Salon`,
  },
  description:
    businessInfo.description,
  keywords: [
    "nail salon Calgary",
    "spa Calgary",
    "Victoria Park Nails and Spa",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicons/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/favicons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/favicons/manifest.json" },
    ],
  },
  manifest: "/favicons/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: businessInfo.contact.website,
    title: `${businessInfo.name} | Calgary's Premier Nail Salon & Spa`,
    description:
      "Experience Calgary's finest nail salon and spa services. Custom nail art, luxury manicures & pedicures, gel nails, and spa treatments in downtown Calgary since " + businessInfo.founded + ".",
    siteName: businessInfo.name,
    images: [
      {
        url: "/Victoria_Park_Nails_Spa_Logo_Primary_small.png",
        width: 800,
        height: 600,
        alt: `${businessInfo.name} - Calgary's premier nail salon featuring luxury manicures, pedicures, and custom nail art`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} | Calgary's Premier Nail Salon`,
    description:
      "Experience Calgary's finest nail salon services. Custom nail art, luxury spa treatments, and professional nail care in downtown Calgary.",
    images: ["/Victoria_Park_Nails_Spa_Logo_Primary_small.png"],
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
    google: "G-V0W5KN5LVG",
    other: {
      "msvalidate.01": "BingWebmasterVerificationCode",
      "p:domain_verify": "PinterestVerificationCode",
    },
  },
  alternates: {
    canonical: businessInfo.contact.website,
    languages: {
      "en-CA": businessInfo.contact.website,
    },
  },
  other: {
    "geo.region": "CA-AB",
    "geo.placename": "Calgary",
    "geo.position": "51.0447;-114.0719",
    "ICBM": "51.0447, -114.0719",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "theme-color": "#8B5A5A",
    "msapplication-TileColor": "#8B5A5A",
    "msapplication-config": "/favicons/browserconfig.xml",
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
        {/* Enhanced JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["NailSalon", "BeautySalon", "DaySpa", "LocalBusiness", "HealthAndBeautyBusiness"],
              name: businessInfo.name,
              alternateName: ["Victoria Park Nails", "Victoria Park Spa"],
              image: [
                `${businessInfo.contact.website}/Victoria_Park_Nails_Spa_Logo_Primary_small.png`,
                `${businessInfo.contact.website}/images/gallery/vpnail-gallery-00001.jpeg`,
                `${businessInfo.contact.website}/images/gallery/vpnail-gallery-00002.jpeg`,
                `${businessInfo.contact.website}/images/gallery/vpnail-gallery-00003.jpeg`,
              ],
              description: businessInfo.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: businessInfo.address.street,
                addressLocality: businessInfo.address.city,
                addressRegion: businessInfo.address.province,
                postalCode: businessInfo.address.postalCode,
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.0447,
                longitude: -114.0719,
              },
              telephone: businessInfo.contact.phone.replace(/[^0-9+]/g, ''),
              email: businessInfo.contact.email,
              url: businessInfo.contact.website,
              foundingDate: businessInfo.founded,
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
              // Enhanced service catalog
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Nail & Spa Services",
                itemListElement: [
                  {
                    "@type": "Service",
                    name: "Manicure Services",
                    description: "Professional manicures including classic, gel, and shellac options",
                    serviceType: "Nail Care",
                    provider: {
                      "@type": "Organization",
                      name: businessInfo.name,
                    },
                  },
                  {
                    "@type": "Service", 
                    name: "Pedicure Services",
                    description: "Luxury spa pedicures with relaxing treatments",
                    serviceType: "Nail Care",
                    provider: {
                      "@type": "Organization", 
                      name: businessInfo.name,
                    },
                  },
                  {
                    "@type": "Service",
                    name: "Custom Nail Art",
                    description: "Unique nail art designs and custom nail decorations",
                    serviceType: "Nail Art",
                    provider: {
                      "@type": "Organization",
                      name: businessInfo.name, 
                    },
                  },
                  {
                    "@type": "Service",
                    name: "Nail Extensions",
                    description: "Acrylic and gel nail extensions for length and strength",
                    serviceType: "Nail Enhancement",
                    provider: {
                      "@type": "Organization",
                      name: businessInfo.name,
                    },
                  },
                ],
              },
              // Social media profiles
              sameAs: [
                businessInfo.socialMedia.facebook,
                businessInfo.socialMedia.instagram, 
                businessInfo.socialMedia.tiktok,
              ],
              // Reviews and ratings
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "247",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Sarah M.",
                  },
                  reviewBody: "Best nail salon in Calgary! The team at Victoria Park Nails always does an amazing job.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Jennifer L.",
                  },
                  reviewBody: "Professional service, clean facility, and beautiful nail art. Highly recommend for anyone in downtown Calgary.",
                },
              ],
              // Business features
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Accessible Parking",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  name: "WiFi",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Air Conditioning",
                  value: true,
                },
              ],
              // Additional business information
              knowsAbout: [
                "Nail Art Calgary",
                "Professional Manicures",
                "Luxury Pedicures", 
                "Gel Nail Extensions",
                "Acrylic Nail Design",
                "Spa Treatments Calgary",
                "Beauty Services Downtown Calgary",
                "Custom Nail Design",
                "Shellac Manicures",
                "French Manicures",
                "Nail Care Calgary",
              ],
              slogan: businessInfo.tagline,
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "New Client Special",
                  description: "20% off your first visit",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "20% discount",
                  },
                },
              ],
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: businessInfo.contact.bookingUrl,
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform",
                  ],
                },
                result: {
                  "@type": "Reservation",
                  name: "Book Nail Appointment",
                },
              },
            }),
          }}
        />
        
        {/* Additional meta tags for better SEO */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="en-CA" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="subject" content="Nail Salon and Spa Services in Calgary" />
        <meta name="copyright" content={businessInfo.name} />
        <meta name="abstract" content="Premier nail salon and spa services in Calgary offering manicures, pedicures, nail art, and luxury treatments" />
        <meta name="topic" content="Beauty, Wellness, Nail Care" />
        <meta name="summary" content="Calgary's premier destination for professional nail care and spa services" />
        <meta name="designer" content={businessInfo.name} />
        <meta name="reply-to" content={businessInfo.contact.email} />
        <meta name="owner" content={businessInfo.name} />
        <meta name="url" content={businessInfo.contact.website} />
        <meta name="identifier-URL" content={businessInfo.contact.website} />
        <meta name="directory" content="submission" />
        <meta name="pagename" content={businessInfo.name} />
        <meta name="category" content="Beauty and Wellness" />
        <meta name="og:email" content={businessInfo.contact.email} />
        <meta name="og:phone_number" content={businessInfo.contact.phone.replace(/[^0-9+]/g, '')} />
        <meta name="og:latitude" content="51.0447" />
        <meta name="og:longitude" content="-114.0719" />
        <meta name="og:street-address" content={businessInfo.address.street} />
        <meta name="og:locality" content={businessInfo.address.city} />
        <meta name="og:region" content={businessInfo.address.province} />
        <meta name="og:postal-code" content={businessInfo.address.postalCode} />
        <meta name="og:country-name" content="Canada" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/videos/hero-bg-video-003.mp4" as="video" type="video/mp4" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={businessInfo.contact.website} />
      </head>
      
      <body className="bg-background text-foreground">
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MainHeader />
          <Breadcrumbs />
          <main className="flex-1">{children}</main>
          <MainFooter />
          <Toaster />
          <Notification />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}