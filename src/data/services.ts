import { Service } from './types';

export const services: Service[] = [
  // Manicure Services
  {
    id: "classic-manicure",
    name: "Regular Manicure",
    category: "manicure",
    description: "Transform your hands with our signature regular manicure. Includes precise nail shaping, gentle cuticle care, relaxing hand massage, and your choice of premium polish for a flawless finish.",
    shortDescription: "Complete hand care with shaping, massage, and polish",
    duration: "30 minutes",
    price: 25,
    image: "/images/services/classic-manicure.webp",
    benefits: [
      "Nail shaping and filing",
      "Cuticle care and removal",
      "Hand and nail massage",
      "Base coat, polish, and top coat",
      "Hand moisturizing treatment"
    ],
    process: [
      "Nail assessment and consultation",
      "Nail shaping and filing",
      "Cuticle softening and care",
      "Hand exfoliation and massage",
      "Polish application"
    ],
    aftercare: [
      "Avoid water for 2 hours after treatment",
      "Use cuticle oil daily",
      "Wear gloves when cleaning",
      "Apply hand cream regularly"
    ],
    featured: true
  },  {
    id: "shellac-manicure",
    name: "Shellac/Gel Manicure",
    category: "manicure",
    description: "Experience weeks of chip-free, high-gloss nails with our premium gel manicure. Perfect for busy lifestyles, this long-lasting treatment maintains its stunning shine.",
    shortDescription: "Long-lasting gel manicure with 2-3 weeks wear",
    duration: "45 minutes",
    price: 35,
    image: "/images/services/gel-manicure.webp",
    benefits: [
      "Lasts up to 3 weeks",
      "Chip-resistant finish",
      "High-gloss shine",
      "Quick drying",
      "Strengthens natural nails"
    ],
    popular: true
  },
  {
    id: "french-manicure",
    name: "French Manicure",
    category: "manicure",
    description: "Timeless and elegant French manicure with natural pink base and white tips. Available in both regular and gel polish options.",
    shortDescription: "Classic French style with natural pink base and white tips",    duration: "40 minutes",
    price: 35,
    image: "/images/services/french-manicure.webp",
    benefits: [
      "Timeless, elegant look",
      "Versatile for any occasion",
      "Natural appearance",
      "Professional finish"
    ]
  },

  // Pedicure Services
  {
    id: "classic-pedicure",
    name: "Classic Pedicure",
    category: "pedicure",    description: "Indulge in our relaxing classic pedicure featuring warm aromatherapy foot soak, nail care, callus removal, soothing foot massage, and polish application in our luxury pedicure chairs.",
    shortDescription: "Complete foot care with soak, massage, and polish",
    duration: "50 minutes",
    price: 35,
    image: "/images/services/classic-pedicure.webp",
    benefits: [
      "Warm foot soak",
      "Nail trimming and shaping",
      "Callus and dead skin removal",
      "Foot and leg massage",
      "Polish application"
    ],
    featured: true
  },
  {
    id: "spa-pedicure",
    name: "Deluxe Spa Pedicure",
    category: "pedicure",    description: "Luxurious spa pedicure featuring extended massage, exfoliation, hydrating mask treatment, and hot towel service for the ultimate relaxation experience.",
    shortDescription: "Premium pedicure with extended spa treatments",
    duration: "75 minutes",
    price: 55,
    image: "/images/services/spa-pedicure.webp",
    benefits: [
      "Extended foot and leg massage",
      "Exfoliating scrub treatment",
      "Hydrating foot mask",
      "Hot towel treatment",
      "Paraffin wax therapy"
    ],
    popular: true
  },
  {
    id: "gel-pedicure",
    name: "Gel Pedicure",
    category: "pedicure",    description: "Long-lasting gel pedicure with chip-resistant color that maintains its shine for weeks. Perfect for active lifestyles and summer activities.",
    shortDescription: "Durable gel polish pedicure with extended wear",
    duration: "60 minutes",
    price: 45,
    image: "/images/services/gel-pedicure.webp",
    benefits: [
      "Long-lasting color",
      "Chip-resistant finish",
      "Perfect for summer",
      "High-gloss shine"
    ]
  },

  // Nail Art Services
  {
    id: "nail-art-basic",
    name: "Basic Nail Art",
    category: "nail-art",
    description: "Simple and elegant nail art designs including stripes, dots, and basic patterns. Perfect for adding a touch of creativity to your manicure.",
    shortDescription: "Simple nail art designs and patterns",    duration: "20 minutes",
    price: 10,
    priceRange: { min: 10, max: 20 },
    image: "/images/services/basic-nail-art.webp",
    benefits: [
      "Custom design consultation",
      "Simple geometric patterns",
      "Accent nail designs",
      "Seasonal themes available"
    ]
  },
  {
    id: "nail-art-advanced",
    name: "Advanced Nail Art",
    category: "nail-art",    description: "Intricate nail art designs including 3D elements, detailed patterns, and custom artwork. Each nail is a small masterpiece created by our skilled artists.",
    shortDescription: "Complex nail art with detailed designs and 3D elements",
    duration: "45-60 minutes",
    priceRange: { min: 25, max: 50 },
    price: "Starting at $25",
    image: "/images/services/advanced-nail-art.webp",
    benefits: [
      "Custom design creation",
      "3D nail art elements",
      "Detailed hand-painted designs",
      "Unique artistic expression"
    ]
  },

  // Nail Extensions
  {
    id: "acrylic-extensions",
    name: "Acrylic Nail Extensions",
    category: "extensions",    description: "Durable acrylic nail extensions that provide length and strength. Perfect for those who want long, beautiful nails that last with professional quality.",
    shortDescription: "Strong, durable nail extensions with custom length",
    duration: "90-120 minutes",
    price: 65,
    image: "/images/services/acrylic-extensions.webp",
    benefits: [
      "Custom length and shape",
      "Durable and strong",
      "Can be filled every 2-3 weeks",
      "Perfect base for nail art"
    ]
  },
  {
    id: "gel-extensions",
    name: "Gel Nail Extensions",
    category: "extensions",    description: "Natural-looking gel extensions that are lighter than acrylics and provide a more flexible feel while maintaining excellent strength and durability.",
    shortDescription: "Natural-looking gel extensions with flexible strength",
    duration: "120-150 minutes",
    price: 75,
    image: "/images/services/gel-extensions.webp",
    benefits: [
      "Natural appearance",
      "Lighter than acrylics",
      "More flexible feel",
      "Less damage to natural nails"
    ]
  },

  // Spa Services
  {
    id: "hand-treatment",
    name: "Intensive Hand Treatment",
    category: "spa",    description: "Rejuvenating hand treatment featuring deep exfoliation, intensive moisturizing, and anti-aging care to restore soft, youthful-looking hands.",
    shortDescription: "Rejuvenating treatment for soft, youthful hands",
    duration: "30 minutes",
    price: 30,
    image: "/images/services/hand-treatment.webp",
    benefits: [
      "Deep exfoliation",
      "Intensive moisturizing",
      "Anti-aging treatment",
      "Cuticle conditioning"
    ]
  },
  {
    id: "paraffin-treatment",
    name: "Paraffin Wax Treatment",
    category: "spa",    description: "Therapeutic paraffin wax treatment that deeply moisturizes and soothes dry, cracked skin on hands and feet with warming, healing properties.",
    shortDescription: "Therapeutic wax treatment for deep moisturizing",
    duration: "20 minutes",
    price: 20,
    image: "/images/services/paraffin-treatment.webp",
    benefits: [
      "Deep moisturizing",
      "Improves circulation",
      "Softens rough skin",
      "Relaxing warmth"
    ]
  }
];
