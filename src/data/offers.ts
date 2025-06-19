import { Offer } from "./types";

export const offers: Offer[] = [
  {
    id: "rewards-program",
    title: "Reward & Redeem Points",
    description: "Earn points for every visit and redeem them for services and discounts.",
    discount: "EARN POINTS EVERY VISIT",
    terms: [
      "Earn 1 point for every visit",
      "Redeem points for discounts on future services",
      "Ask our staff about point values and redemption options",
      "Points accumulate with each visit"
    ],
    image: "/images/offers/rewards-program.webp"
  },
  {
    id: "wedding-group-discount",
    title: "Wedding Group Special",
    description: "Special discount for wedding parties with 4 or more people. Available on weekends with advance booking.",
    discount: "SPECIAL GROUP DISCOUNT",
    terms: [
      "Groups of 4 or more people",
      "Available only on Saturday and Sunday",
      "Must book by appointment in advance",
      "Call to discuss group pricing and availability",
      "Perfect for bridal parties and wedding preparations"
    ],
    image: "/images/offers/wedding-group-special.webp"
  }
];
