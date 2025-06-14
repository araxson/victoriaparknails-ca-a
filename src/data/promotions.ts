import { Promotion } from './types';

export const promotions: Promotion[] = [
  {
    id: "new-client",
    title: "First Visit Discount",
    description: "20% off your first service with us.",
    discount: "20% OFF",
    terms: [
      "For new clients only",
      "Mention when booking",
      "For services $30+"
    ],
    image: "/images/promotions/new-client-special.webp",
    featured: true
  },
  {
    id: "student",
    title: "Student Discount",
    description: "15% off with your student ID.",
    discount: "15% OFF",
    terms: [
      "Show student ID",
      "Monday-Wednesday only",
      "All services"
    ],
    image: "/images/promotions/student-discount.webp",
    featured: false
  },
  {
    id: "loyalty",
    title: "Loyalty Points",
    description: "Earn points with every visit. $10 off for every 100 points.",
    discount: "POINTS",
    terms: [
      "1 point = $1 spent",
      "100 points = $10 off",
      "Points never expire"
    ],
    image: "/images/promotions/loyalty-program.webp",
    featured: true
  },
  {
    id: "family",
    title: "Family Deal",
    description: "10% off when 2+ family members book together.",
    discount: "10% OFF",
    terms: [
      "Book 2+ people together",
      "Same day appointments",
      "All nail services"
    ],
    image: "/images/promotions/mother-daughter.webp",
    featured: true
  },
  {
    id: "group",
    title: "Group Discount",
    description: "15% off for groups of 4 or more.",
    discount: "15% OFF",
    terms: [
      "Groups of 4+",
      "Book in advance",
      "Same day service"
    ],
    image: "/images/promotions/bridal-party.webp",
    featured: true
  },
  {
    id: "nail-art",
    title: "Nail Art Deal",
    description: "25% off nail art with any manicure.",
    discount: "25% OFF",
    terms: [
      "With any manicure",
      "All nail art styles",
      "Any day of the week"
    ],
    image: "/images/promotions/holiday-special.webp",
    featured: false
  },
  {
    id: "referral",
    title: "Refer a Friend",
    description: "You and your friend each get $10 off.",
    discount: "$10 OFF",
    terms: [
      "Friend must be new",
      "Applied to next visit",
      "No referral limit"
    ],
    image: "/images/promotions/referral-program.webp",
    featured: false
  },
  {
    id: "combo",
    title: "Mani-Pedi Combo",
    description: "$15 off when you book both manicure and pedicure.",
    discount: "$15 OFF",
    terms: [
      "Same day service",
      "Regular or gel",
      "All days available"
    ],
    image: "/images/promotions/mani-pedi-combo.webp",
    featured: true
  }
];
