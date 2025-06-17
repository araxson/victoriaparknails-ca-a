export interface Service {
  name: string;
  duration: string;
  price: string;
  details?: string;
}

export interface ServiceSubcategory {
  name: string;
  services: Service[];
}

export interface ServiceCategory {
  name: string;
  subcategories: ServiceSubcategory[];
}

export const services: ServiceCategory[] = [
  {
    name: "Nail Services",
    subcategories: [
      {
        name: "Manicures",
        services: [
          {
            name: "Classic Manicure",
            duration: "30 mins",
            price: "$25",
            details: "A revitalizing treatment including nail shaping, cuticle care, moisturizing hand massage, and regular polish application. Perfect for maintaining healthy nails with a quick refresh."
          },
          {
            name: "Deluxe Spa Manicure",
            duration: "45 mins",
            price: "$40",
            details: "Our elevated manicure experience includes everything in the Classic service plus exfoliating scrub, hydrating hand mask with hot towels, and an extended massage targeting pressure points. Ideal for dry hands or anyone seeking extra pampering."
          },
          {
            name: "Gel Manicure (Shellac)",
            duration: "45 mins",
            price: "$45",
            details: "Enjoy long-lasting color with our gel polish that cures instantly under LED light for a smudge-proof, high-shine finish. Includes all the care of our Classic manicure with polish that resists chipping for up to two weeks. Perfect for busy lifestyles."
          }
        ],
      },
      {
        name: "Pedicures",
        services: [
          {
            name: "Classic Pedicure",
            duration: "45 mins",
            price: "$35",
            details: "This refreshing foot treatment includes a warm therapeutic soak, nail trimming and shaping, cuticle care, light callus removal, moisturizing massage, and polish application. Provides essential relief for tired feet and maintains foot health."
          },
          {
            name: "Deluxe Spa Pedicure",
            duration: "60 mins",
            price: "$55",
            details: "Our premium pedicure builds on the Classic service with intensive callus treatment, exfoliating sugar scrub, nourishing foot mask with hot towels, and extended massage. Perfect for deep relaxation and revitalizing tired, rough feet."
          },
          {
            name: "Gel Pedicure (Shellac)",
            duration: "60 mins",
            price: "$55",
            details: "All the benefits of our Classic pedicure finished with long-wearing gel polish that resists chips and scratches for up to three weeks. Ideal for vacations, sandal season, or active lifestyles when you need your polish to last."
          }
        ],
      },
      {
        name: "Nail Enhancements",
        services: [
          {
            name: "Acrylic Full Set",
            duration: "90 mins",
            price: "$60",
            details: "Strong, durable nail extensions created with powder and liquid that hardens to form a protective layer. Customized to your preferred length and shape, these enhancements provide strength while allowing damaged natural nails to grow underneath."
          },
          {
            name: "Acrylic Fill-in (2-3 weeks)",
            duration: "60 mins",
            price: "$45",
            details: "Maintenance service for existing acrylic nails to fill the growth area, prevent lifting, and maintain appearance. Includes reshaping and gel polish change if desired. Regular fills preserve enhancement integrity and protect natural nails."
          },
          {
            name: "Dip Powder on Natural Nails",
            duration: "45 mins",
            price: "$50",
            details: "A lightweight, odorless enhancement that creates strong, beautiful nails without UV light or harsh chemicals. Multiple layers of colored powder are applied and sealed for exceptional durability that lasts 3-4 weeks. Ideal for strengthening natural nails."
          },
          {
            name: "Dip Powder with Tips (Full Set)",
            duration: "75 mins",
            price: "$60",
            details: "Combines nail tips for added length with the dip powder technique for durable, natural-looking extensions. Creates lightweight, comfortable nails with remarkable strength and vibrant color that lasts for weeks."
          },
          {
            name: "Hard Gel / Builder Gel Full Set",
            duration: "90 mins",
            price: "$70",
            details: "Premium extensions using sculptable gel that creates flexible, natural-feeling nails with exceptional clarity and shine. More lightweight than acrylic with better resistance to lifting. Perfect for those wanting durable enhancements with a more natural feel."
          },
          {
            name: "Hard Gel / Builder Gel Fill-in",
            duration: "60 mins",
            price: "$55",
            details: "Maintenance service for hard gel enhancements that fills the growth area and rebalances the nail structure. Preserves the integrity of your extensions while allowing for shape adjustments and color changes."
          }
        ],
      },
      {
        name: "Add-Ons & Extras",
        services: [
          {
            name: "Polish Change (Hands)",
            duration: "15 mins",
            price: "$15",
            details: "Quick color update without full manicure maintenance. Includes removal of old polish, nail cleansing, base coat, two coats of color, and top coat. Perfect for refreshing your look between full services."
          },
          {
            name: "Polish Change (Feet)",
            duration: "20 mins",
            price: "$20",
            details: "Refresh your toenail color without the complete pedicure. Includes polish removal, nail preparation, and application of new color with base and top coats for maximum durability."
          },
          {
            name: "French Tips",
            duration: "15 mins",
            price: "$10",
            details: "Classic white-tipped design with a natural pink or beige base. Creates an elegant, timeless look that complements any outfit and makes fingers appear longer and more slender."
          },
          {
            name: "Matte Top Coat",
            duration: "5 mins",
            price: "$5",
            details: "Transform any glossy polish into a sophisticated velvet-like finish. Creates depth and dimension that works beautifully with any color, particularly dramatic with dark shades."
          },
          {
            name: "Chrome / Cat Eye / Holographic",
            duration: "10 mins",
            price: "$15",
            details: "Specialty finishes that create eye-catching effects: mirror-like metallic surface (Chrome), flowing magnetic patterns (Cat Eye), or rainbow-shifting colors (Holographic). Applied over gel polish for dramatic visual impact."
          },
          {
            name: "Simple Nail Art (2 nails)",
            duration: "10 mins",
            price: "$10",
            details: "Basic designs such as dots, lines, minimalist flowers, or geometric patterns applied to two accent nails. Adds personal style without overwhelming your manicure."
          },
          {
            name: "Moderate Nail Art (2-4 nails)",
            duration: "20 mins",
            price: "$15",
            details: "More detailed designs on multiple nails using techniques like hand-painting, gradients, marbling, or stylized motifs. Creates focal points that enhance your base color and express your creativity."
          },
          {
            name: "Intricate/Custom Art",
            duration: "Varies",
            price: "By Quote",
            details: "Personalized designs ranging from detailed imagery to complex multi-technique creations. Pricing based on complexity, time requirements, and techniques needed. Consultation required to discuss design and determine pricing."
          },
          {
            name: "Gems / Rhinestones",
            duration: "5 mins & up",
            price: "$1 / stone",
            details: "Add sparkle with premium crystals in various sizes and colors. Each gem is individually applied for long-lasting wear. Create subtle accents or bold statements with strategic placement."
          },
          {
            name: "Paraffin Wax Treatment",
            duration: "15 mins",
            price: "$15",
            details: "Therapeutic treatment using warm wax to deeply hydrate skin and improve circulation. Particularly beneficial for dry, cracked skin, arthritis discomfort, or during winter months. Leaves skin noticeably softer."
          },
          {
            name: "Intensive Callus Removal",
            duration: "10 mins",
            price: "$10",
            details: "Targeted treatment for stubborn calluses using professional softening solutions and gentle removal techniques. Focuses on problem areas like heels and pressure points to alleviate discomfort."
          },
          {
            name: "Nail Repair (per nail)",
            duration: "10-15 mins",
            price: "$5",
            details: "Fix for broken, split, or damaged nails using specialized techniques tailored to the specific issue. Restores appearance and prevents further damage between appointments."
          },
          {
            name: "Soak-Off Removal (with service)",
            duration: "15 mins",
            price: "$10",
            details: "Professional removal of previous enhancement products when combined with a new service. Uses appropriate techniques to protect natural nails while ensuring complete product removal."
          },
          {
            name: "Soak-Off Removal (alone)",
            duration: "20 mins",
            price: "$20",
            details: "Standalone removal service that safely eliminates enhancement products without damaging natural nails. Includes gentle filing, proper soaking, and post-removal conditioning to restore nail health."
          }
        ],
      },
      {
        name: "For The Kids (12 & Under)",
        services: [
          {
            name: "Mini Manicure",
            duration: "20 mins",
            price: "$15",
            details: "Child-friendly nail care including gentle shaping, light cuticle care, and application of kid-safe polish in their favorite color. Introduces proper nail hygiene in a fun, age-appropriate way. Perfect for special occasions or parent-child bonding."
          },
          {
            name: "Mini Pedicure",
            duration: "30 mins",
            price: "$25",
            details: "Delightful foot care experience tailored for children featuring a bubbly foot soak, careful nail trimming, gentle buffing, light massage with kid-friendly lotion, and colorful polish application. Creates a positive introduction to self-care routines."
          }
        ],
      }
    ],
  },
  {
    name: "Spa Services",
    subcategories: [
      {
        name: "Massage",
        services: [
          {
            name: "60-Minute Body Massage",
            duration: "1 hr",
            price: "$120",
          },
          {
            name: "60-Minute Hot Stone Body Massage",
            duration: "1 hr",
            price: "$130",
          },
          {
            name: "90-Minute Body Massage",
            duration: "1 hr 30 mins",
            price: "$180",
          },
          {
            name: "90-Minute Hot Stone Body Massage",
            duration: "1 hr 30 mins",
            price: "$190",
          },
          {
            name: "120-Minute Body Massage",
            duration: "2 hrs",
            price: "$240",
          },
        ],
      },
      {
        name: "Facial Treatments",
        services: [
          {
            name: "Full Face Facial",
            duration: "30 mins",
            price: "$45",
          },
        ],
      },
    ],
  },
  {
    name: "Hair Removal",
    subcategories: [
      {
        name: "Waxing Services",
        services: [
          {
            name: "Eyebrow Waxing",
            duration: "15 mins",
            price: "$15",
          },
          {
            name: "Face Waxing (Per Area)",
            duration: "10 mins",
            price: "$12",
          },
          {
            name: "Full Face Waxing",
            duration: "30 mins",
            price: "$45",
          },
          {
            name: "Under Arm Waxing",
            duration: "15 mins",
            price: "$20",
          },
          {
            name: "Full Arm Waxing",
            duration: "30 mins",
            price: "$40",
          },
          {
            name: "Half Leg Waxing",
            duration: "30 mins",
            price: "$30",
          },
          {
            name: "Full Leg Waxing",
            duration: "1 hr",
            price: "$50",
          },
          {
            name: "Bikini Waxing",
            duration: "30 mins",
            price: "$35",
          },
          {
            name: "Brazilian Waxing",
            duration: "30 mins",
            price: "$60",
          },
          {
            name: "Back or Chest Waxing (Each)",
            duration: "40 mins",
            price: "$55",
          },
        ],
      },
    ],
  }
];

// Utility: Flatten all categories for UI
export const serviceCategories = services.map((cat, idx) => ({
  id: cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name: cat.name,
  description: "", // Add descriptions if needed
  index: idx,
}));

// Utility: Get all services for a given category name or id
export function getServicesByCategory(categoryIdOrName: string) {
  const category = services.find(
    (cat) =>
      cat.name.toLowerCase() === categoryIdOrName.toLowerCase() ||
      cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") ===
        categoryIdOrName.toLowerCase(),
  );
  if (!category) return [];
  // Flatten all subcategory services
  return category.subcategories.flatMap((sub) =>
    sub.services.map((service) => ({
      ...service,
      subcategory: sub.name,
    })),
  );
}

// Utility: Get a service by name (unique within all categories)
export function getServiceById(serviceName: string) {
  for (const cat of services) {
    for (const sub of cat.subcategories) {
      const found = sub.services.find((s) => s.name === serviceName);
      if (found) return { ...found, category: cat.name, subcategory: sub.name };
    }
  }
  return undefined;
}

export default services;
