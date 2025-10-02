import { businessInfo } from "@/data";

export const getBreadcrumbStructuredData = (items: Array<{ name: string; url?: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
};

export const getLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessInfo.contact.website,
    name: businessInfo.name,
    alternateName: [
      "Victoria Park Nails Calgary",
      "Victoria Park Spa Calgary",
      "VP Nails Calgary",
    ],
    url: businessInfo.contact.website,
    telephone: businessInfo.contact.phone.replace(/[^0-9+]/g, ''),
    email: businessInfo.contact.email,
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
    hasMap: "https://maps.google.com/?q=Victoria+Park+Nails+and+Spa+Calgary",
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 51.0447,
          longitude: -114.0719,
        },
        geoRadius: "15000",
      },
    ],
    isAccessibleForFree: false,
    publicAccess: true,
    smokingAllowed: false,
    tourBookingPage: businessInfo.contact.bookingUrl,
  };
};

export const getFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export const getServiceStructuredData = (service: {
  name: string;
  description: string;
  price?: string;
  duration?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: businessInfo.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessInfo.address.street,
        addressLocality: businessInfo.address.city,
        addressRegion: businessInfo.address.province,
        postalCode: businessInfo.address.postalCode,
        addressCountry: "CA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Calgary",
      "@id": "https://en.wikipedia.org/wiki/Calgary",
    },
    ...(service.price && {
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "CAD",
      },
    }),
    ...(service.duration && {
      timeRequired: service.duration,
    }),
  };
};

export const getGeoCircleStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 51.0447,
        longitude: -114.0719,
      },
      geoRadius: "25000",
    },
    description: "Service area covering Calgary and surrounding communities including Victoria Park, Beltline, Mission, Downtown, Inglewood, Ramsay, East Village, and more.",
  };
};