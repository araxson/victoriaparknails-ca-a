import { Offer } from "./types";

export const offers: Offer[] = [
  {
    id: "summer-ready",
    title: "Summer Ready Package",
    description: "Get both a Shellac manicure and pedicure at a $10 discount. Perfect for summer events, vacations, or simply showing off in sandals.",
    discount: "SAVE $10 - ONLY $90",
    terms: [
      "Gel Manicure (Shellac) + Gel Pedicure (Shellac)",
      "Regular price $100 ($45 + $55), now $90",
      "Limited time offer through August 2025",
      "Book both services in one visit"
    ],
    validUntil: "2025-08-31",
    image: "/images/offers/summer-ready-package.webp"
  },
  {
    id: "new-client-welcome",
    title: "New Client Welcome",
    description: "New to Victoria Park Nails & Spa? Enjoy 20% off your first service! Applies to any service, from a basic manicure to a premium gel full set.",
    discount: "20% OFF FIRST SERVICE",
    terms: [
      "For new clients only",
      "Applies to any service",
      "Mention offer when booking",
      "Cannot be combined with other offers"
    ],
    image: "/images/offers/new-client-welcome.webp"
  },
];
