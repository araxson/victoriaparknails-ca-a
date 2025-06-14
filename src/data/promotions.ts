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
    description: "15% off when 2+ family members book together.",
    discount: "15% OFF",
    terms: [
      "Book 2+ people together",
      "Same day appointments",
      "All nail services"
    ],
    image: "/images/promotions/mother-daughter.webp",
    featured: true
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
