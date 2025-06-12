import { Promotion } from './types';

export const promotions: Promotion[] = [
  {
    id: "new-client-special",
    title: "New Client Special",
    description: "First visit discount for new clients. Enjoy 20% off any service during your first appointment with us.",
    discount: "20% OFF",
    validUntil: "2025-12-31",
    terms: [
      "Valid for new clients only",
      "Cannot be combined with other offers",
      "Must mention offer when booking",
      "Valid for services $30 and above"
    ],
    image: "/images/promotions/new-client-special.webp",
    featured: true
  },
  {
    id: "student-discount",
    title: "Student Discount",
    description: "Students get 15% off all services with valid student ID. Perfect for maintaining beautiful nails on a budget.",
    discount: "15% OFF",
    validUntil: "2025-12-31",
    terms: [
      "Valid student ID required",
      "Available Monday-Wednesday only",
      "Cannot be combined with other offers",
      "Valid for all services"
    ],
    image: "/images/promotions/student-discount.webp",
    featured: false
  },
  {
    id: "loyalty-program",
    title: "Loyalty Rewards Program",
    description: "Collect points with every visit! Earn 1 point per dollar spent and redeem 100 points for $10 off your next service.",
    discount: "Earn Points",
    validUntil: "Ongoing",
    terms: [
      "1 point per $1 spent",
      "100 points = $10 off",
      "Points never expire",
      "Cannot be combined with other discounts",
      "Ask about signing up at your next visit"
    ],
    image: "/images/promotions/loyalty-program.webp",
    featured: true
  },
  {
    id: "mother-daughter-package",
    title: "Mother & Daughter Package",
    description: "Special bonding experience! Book matching manicures or pedicures and save 10% on both services.",
    discount: "10% OFF Both",
    validUntil: "2025-12-31",
    terms: [
      "Must book same service type",
      "Both appointments same day",
      "Cannot be combined with other offers",
      "Available for manicures and pedicures"
    ],
    image: "/images/promotions/mother-daughter.webp",
    featured: false
  },
  {
    id: "bridal-party-special",
    title: "Bridal Party Special",
    description: "Make your special day perfect! Groups of 4+ receive 15% off all services. Perfect for bridal parties and special events.",
    discount: "15% OFF",
    validUntil: "2025-12-31",
    terms: [
      "Minimum 4 people",
      "Advanced booking required",
      "Same day appointments",
      "Valid for all services",
      "Must mention when booking"
    ],
    image: "/images/promotions/bridal-party.webp",
    featured: true
  },
  {
    id: "seasonal-holiday",
    title: "Holiday Season Special",
    description: "Get festive for the holidays! 25% off all nail art services featuring holiday themes and seasonal designs.",
    discount: "25% OFF Nail Art",
    validUntil: "2025-01-31",
    terms: [
      "Valid for nail art services only",
      "Must feature holiday/seasonal theme",
      "Cannot be combined with other offers",
      "Book early for holiday season"
    ],
    image: "/images/promotions/holiday-special.webp",
    featured: false
  },
  {
    id: "referral-program",
    title: "Refer a Friend",
    description: "Share the love! Refer a friend and you both get $10 off your next service when they complete their first appointment.",
    discount: "$10 OFF Each",
    validUntil: "Ongoing",
    terms: [
      "Friend must be new client",
      "Friend must complete first service",
      "Both receive $10 credit",
      "No limit on referrals",
      "Credits applied to future visits"
    ],
    image: "/images/promotions/referral-program.webp",
    featured: false
  },
  {
    id: "manicure-pedicure-combo",
    title: "Mani-Pedi Combo Deal",
    description: "Complete package deal! Book a manicure and pedicure together and save $15 off the total price.",
    discount: "$15 OFF Combo",
    validUntil: "2025-12-31",
    terms: [
      "Must book both services same day",
      "Valid for classic or gel options",
      "Cannot be combined with other offers",
      "Available all days of the week"
    ],
    image: "/images/promotions/mani-pedi-combo.webp",
    featured: true
  }
];
