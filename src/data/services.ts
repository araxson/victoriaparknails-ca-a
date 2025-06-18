export interface Service {
  name: string;
  duration: string;
  price: string;
  shortDescription?: string;
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
            price: "25",
            shortDescription: "Fresh & polished look",
            details: "Refresh your hands with our signature manicure! We'll shape your nails, care for your cuticles, treat you to a relaxing hand massage, and finish with your choice of regular polish. Perfect for keeping your nails healthy and beautiful."
          },
          {
            name: "Shellac Manicure",
            duration: "45 mins",
            price: "35",
            shortDescription: "Long-lasting shine",
            details: "Get gorgeous nails that last! Our premium shellac manicure includes everything you love about our classic service, plus durable shellac polish that stays chip-free for weeks. Perfect for busy lifestyles and special occasions."
          },
          {
            name: "Gel Top Manicure",
            duration: "50 mins",
            price: "40",
            shortDescription: "Extra strength & protection",
            details: "Give your nails the ultimate protection! This enhanced manicure features our complete nail care routine topped with a protective gel coat that adds incredible durability and mirror-like shine to your manicure."
          },
          {
            name: "Premium Gel Overlay",
            duration: "60 mins",
            price: "45",
            shortDescription: "Maximum durability & glamour",
            details: "Experience our most luxurious manicure! This premium service includes comprehensive nail care and a professional gel overlay that provides maximum protection, incredible shine, and long-lasting beauty that's perfect for any occasion."
          }
        ],
      },
      {
        name: "Pedicures",
        services: [
          {
            name: "Classic Pedicure",
            duration: "45 mins",
            price: "40",
            shortDescription: "Relaxing foot refresh",
            details: "Treat your feet to pure bliss! Start with a warm, therapeutic soak, then enjoy nail care, cuticle treatment, gentle callus removal, and a soothing massage. We'll finish with beautiful regular polish for happy, healthy feet."
          },
          {
            name: "Spa Pedicure with Hot Stones",
            duration: "60 mins",
            price: "50",
            shortDescription: "Ultimate relaxation experience",
            details: "Indulge in our signature spa experience! Everything from our classic pedicure plus intensive callus treatment, extended massage, and luxurious hot stone therapy. Perfect for melting away stress and pampering tired feet."
          },
          {
            name: "Shellac Pedicure",
            duration: "50 mins",
            price: "45",
            shortDescription: "Long-lasting beautiful toes",
            details: "Beautiful feet that stay beautiful! All the pampering of our classic pedicure finished with chip-resistant shellac polish that keeps your toes looking perfect for weeks. Ideal for vacations and active lifestyles."
          },
          {
            name: "Deluxe Spa Pedicure",
            duration: "75 mins",
            price: "55",
            shortDescription: "The ultimate foot indulgence",
            details: "Our most luxurious foot treatment! Enjoy everything we offer: intensive callus care, exfoliating scrub, nourishing foot mask, extended massage, hot stone therapy, and long-lasting shellac polish. The ultimate self-care experience!"
          }
        ],
      },
      {
        name: "Nail Extensions",
        services: [
          {
            name: "Full Set Extensions",
            duration: "90 mins",
            price: "60",
            shortDescription: "Strong, beautiful length",
            details: "Get the nails you've always wanted! Our custom extensions give you beautiful length and strength while protecting your natural nails underneath. Choose your perfect shape and length for stunning, durable nails."
          },
          {
            name: "Extension Maintenance",
            duration: "60 mins",
            price: "45",
            shortDescription: "Keep your extensions perfect",
            details: "Keep your extensions looking fresh! We'll fill in growth areas, reshape as needed, and give you a fresh polish change. Regular maintenance keeps your extensions strong and beautiful between appointments."
          }
        ],
      },
      {
        name: "Quick Services & Add-Ons",
        services: [
          {
            name: "Polish Change",
            duration: "15 mins",
            price: "15",
            shortDescription: "Quick color refresh",
            details: "Switch up your look in minutes! We'll remove your old polish and apply a fresh new color with regular polish. Perfect for trying new shades or refreshing your look between full services."
          },
          {
            name: "Shellac Polish Change",
            duration: "20 mins",
            price: "30",
            shortDescription: "Long-lasting color switch",
            details: "Change your color the smart way! Quick removal of old polish and application of beautiful new shellac that lasts for weeks. Great for keeping up with trends or matching special outfits."
          },
          {
            name: "Hand Nail Trim & Shape",
            duration: "10 mins",
            price: "15",
            shortDescription: "Quick nail maintenance",
            details: "Keep your nails neat and tidy! Quick trimming and shaping service that's perfect for maintenance between full manicures or when you just need a quick touch-up."
          },
          {
            name: "Foot Nail Trim & Shape",
            duration: "15 mins",
            price: "25",
            shortDescription: "Toenail care made easy",
            details: "Keep your toenails comfortable and neat! Professional trimming and shaping that's perfect for maintenance between pedicures or when you need quick foot care."
          },
          {
            name: "Shellac Removal",
            duration: "15 mins",
            price: "15",
            shortDescription: "Gentle, professional removal",
            details: "Safe removal that protects your nails! We use proper techniques to gently remove shellac without damaging your natural nails. Your nails will thank you!"
          },
          {
            name: "Extension Removal",
            duration: "30 mins",
            price: "20+",
            shortDescription: "Safe removal service",
            details: "Professional removal that cares for your natural nails! We safely remove artificial or gel extensions with gentle soaking and conditioning to restore your nail health."
          },
          {
            name: "Paraffin Wax Treatment",
            duration: "15 mins",
            price: "15-25",
            shortDescription: "Deep moisture therapy",
            details: "Pamper your skin with warm, therapeutic wax! This luxurious treatment deeply moisturizes dry skin and soothes tired hands or feet. Especially wonderful during winter months or for extra-dry skin."
          },
          {
            name: "Callus Removal",
            duration: "10 mins",
            price: "10",
            shortDescription: "Smooth, comfortable feet",
            details: "Say goodbye to rough, uncomfortable calluses! Our gentle but effective treatment focuses on problem areas to leave your feet feeling smooth and comfortable again."
          },
          {
            name: "Nail Repair",
            duration: "10 mins",
            price: "5",
            shortDescription: "Fix broken nails instantly",
            details: "Don't let a broken nail ruin your day! We'll repair splits, breaks, or damage using professional techniques. Get back to beautiful nails in no time. Priced per nail."
          },
          {
            name: "French Manicure",
            duration: "15 mins",
            price: "10",
            shortDescription: "Timeless elegance",
            details: "Classic never goes out of style! Beautiful white tips with a natural base create an elegant, sophisticated look that goes with everything and makes your fingers look longer and more graceful."
          },
          {
            name: "Chrome & Cat Eye Effects",
            duration: "10 mins",
            price: "15",
            shortDescription: "Eye-catching metallic magic",
            details: "Make a statement with stunning effects! Choose mirror-like chrome for ultra-glam or mesmerizing cat eye patterns that shift and flow. These specialty finishes create nails that are truly show-stopping."
          },
          {
            name: "Simple Nail Art",
            duration: "10 mins",
            price: "10",
            shortDescription: "Cute accent details (2 nails)",
            details: "Add personality to your manicure! Simple, charming designs like dots, stripes, tiny flowers, or geometric patterns on 2 accent nails. Perfect for adding just the right touch of creativity."
          },
          {
            name: "Custom Nail Art",
            duration: "20 mins",
            price: "15",
            shortDescription: "Creative designs (2-4 nails)",
            details: "Express your style with beautiful hand-painted designs! From gradients and marbling to detailed motifs on 2-4 nails. Let us create something special that reflects your personality."
          },
          {
            name: "Intricate Nail Art",
            duration: "Varies",
            price: "By Quote",
            shortDescription: "One-of-a-kind masterpieces",
            details: "Dream it, we'll create it! Custom artwork tailored to your vision, from detailed scenes to complex multi-technique designs. Let's discuss your ideas and create something truly unique together."
          }
        ],
      },
      {
        name: "Kids' Services",
        services: [
          {
            name: "Little Princess Manicure",
            duration: "20 mins",
            price: "15",
            shortDescription: "Special treat for ages 8 & under",
            details: "A magical first manicure experience! Gentle nail care and fun colors in a kid-friendly environment. Perfect for birthdays, special occasions, or teaching little ones about nail care in a fun way."
          },
          {
            name: "Little Princess Pedicure",
            duration: "30 mins",
            price: "25",
            shortDescription: "Bubbly fun for tiny toes",
            details: "Make foot care fun! A delightful experience with bubbly soaks, gentle nail care, tickly massages, and their favorite polish colors. Great for introducing self-care while creating precious memories together."
          }
        ],
      }
    ],
  },
  {
    name: "Relaxation & Wellness",
    subcategories: [
      {
        name: "Therapeutic Massage",
        services: [
          {
            name: "1-Hour Relaxation Massage",
            duration: "1 hr",
            price: "120",
            shortDescription: "Melt away stress & tension",
            details: "Escape the everyday with our therapeutic full-body massage! Perfect pressure to release muscle tension, improve circulation, and help you completely unwind. Leave feeling refreshed, relaxed, and renewed."
          },
          {
            name: "1-Hour Hot Stone Massage",
            duration: "1 hr",
            price: "130",
            shortDescription: "Luxurious heated stone therapy",
            details: "Experience pure bliss with warm volcanic stones! The gentle heat melts deep into your muscles while expert massage techniques ease tension. It's like being wrapped in warmth and relaxation from head to toe."
          },
          {
            name: "90-Minute Extended Massage",
            duration: "1 hr 30 mins",
            price: "180",
            shortDescription: "Extra time for deeper relief",
            details: "When you need more time to truly unwind! Extended session allows for comprehensive full-body treatment with extra attention to your trouble spots. Perfect for when you really want to disconnect and restore."
          },
          {
            name: "90-Minute Hot Stone Massage",
            duration: "1 hr 30 mins",
            price: "190",
            shortDescription: "Extended heated stone bliss",
            details: "The ultimate in heated stone relaxation! More time means deeper muscle penetration, complete tension relief, and an incredibly restorative experience. This is self-care at its finest."
          },
          {
            name: "2-Hour Ultimate Massage",
            duration: "2 hrs",
            price: "240",
            shortDescription: "The ultimate escape experience",
            details: "Our most comprehensive relaxation experience! Two full hours dedicated to your wellness with personalized attention to exactly what your body needs. Complete mind-body renewal and the ultimate treat for yourself."
          },
          {
            name: "2-Hour Ultimate Hot Stone",
            duration: "2 hrs",
            price: "250",
            shortDescription: "The pinnacle of relaxation",
            details: "The absolute ultimate in spa luxury! Two hours combining our best massage techniques with therapeutic hot stone treatment. This is the experience you'll dream about long after it's over."
          },
        ],
      },
      {
        name: "Facial Treatments",
        services: [
          {
            name: "Refreshing Facial",
            duration: "30 mins",
            price: "45",
            shortDescription: "Glowing, refreshed skin",
            details: "Give your skin the love it deserves! Deep cleansing, gentle exfoliation, and nourishing treatments customized for your skin type. Walk out with a healthy glow and skin that feels amazing."
          },
        ],
      },
    ],
  },
  {
    name: "Hair Removal",
    subcategories: [
      {
        name: "Professional Waxing",
        services: [
          {
            name: "Eyebrow Shaping",
            duration: "15 mins",
            price: "15",
            shortDescription: "Perfect brow definition",
            details: "Frame your face beautifully! Professional eyebrow shaping creates the perfect arch for your face shape. Includes waxing, tweezing for precision, and soothing aftercare for gorgeous, defined brows."
          },
          {
            name: "Facial Hair Removal",
            duration: "10 mins",
            price: "12",
            shortDescription: "Smooth, hair-free skin",
            details: "Quick and comfortable facial hair removal for areas like upper lip, chin, or cheeks. Gentle wax designed for delicate facial skin leaves you smooth and confident. Price per area."
          },
          {
            name: "Complete Facial Waxing",
            duration: "30 mins",
            price: "45",
            shortDescription: "Full-face smooth perfection",
            details: "Complete facial hair removal for ultimate smoothness! Covers all areas including brows, lips, chin, and cheeks. Professional technique with gentle aftercare for beautifully smooth, hair-free skin."
          },
          {
            name: "Underarm Waxing",
            duration: "15 mins",
            price: "20",
            shortDescription: "Quick & comfortable",
            details: "Smooth underarms in minutes! Fast, effective hair removal that lasts much longer than shaving. Gentle technique designed for sensitive underarm skin with proper aftercare."
          },
          {
            name: "Full Arm Waxing",
            duration: "30 mins",
            price: "40",
            shortDescription: "Silky smooth arms",
            details: "Beautiful, hair-free arms from shoulder to fingertips! Professional technique ensures even coverage and long-lasting smoothness. Perfect for sleeveless seasons and special occasions."
          },
          {
            name: "Lower Leg Waxing",
            duration: "30 mins",
            price: "30",
            shortDescription: "Smooth from knee down",
            details: "Perfect for those who prefer partial leg waxing! Hair removal from knee to ankle gives you smooth, touchable skin that lasts weeks longer than shaving."
          },
          {
            name: "Full Leg Waxing",
            duration: "1 hr",
            price: "50",
            shortDescription: "Complete leg smoothness",
            details: "Gorgeous, hair-free legs from top to toe! Complete removal for silky smooth skin that's perfect for dresses, swimwear, or just feeling confident in your own skin."
          },
          {
            name: "Bikini Line Waxing",
            duration: "30 mins",
            price: "35",
            shortDescription: "Swimsuit-ready confidence",
            details: "Clean, groomed bikini line for confidence in swimwear! Removes hair that would show outside underwear or bikini bottoms while keeping you comfortable and confident."
          },
          {
            name: "Brazilian Waxing",
            duration: "30 mins",
            price: "60",
            shortDescription: "Complete smooth confidence",
            details: "Our most comprehensive intimate hair removal service performed with the utmost professionalism and care. Completely smooth results in a comfortable, private environment."
          },
          {
            name: "Back or Chest Waxing",
            duration: "40 mins",
            price: "55",
            shortDescription: "Smooth, confident torso",
            details: "Professional body hair removal for back or chest (price per area). Effective, long-lasting results with attention to your comfort. Feel confident whether you're at the beach or the gym!"
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