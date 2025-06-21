export interface Service {
  name: string;
  duration: string;
  price: string;
  shortDescription?: string;
  details?: string;
  bookingUrl?: string;
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
            name: "Classic Manicure with regular polish",
            duration: "30 mins",
            price: "25",
            shortDescription: "Fresh & polished look",
            details: "Refresh your hands with our signature manicure! We'll shape your nails, care for your cuticles, treat you to a relaxing hand massage, and finish with your choice of regular polish. Perfect for keeping your nails healthy and beautiful.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=0e19aa9b-86a5-4bd5-804a-26e9dabb3725&type=service"
          },
          {
            name: "Shellac Manicure",
            duration: "45 mins",
            price: "35",
            shortDescription: "Long-lasting shine",
            details: "Get gorgeous nails that last! Our premium shellac manicure includes everything you love about our classic service, plus durable shellac polish that stays chip-free for weeks. Perfect for busy lifestyles and special occasions.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=96dcf9ac-8f37-4c1d-bd12-7e7caafad618&type=service"
          },
          {
            name: "Shellac Manicure with Gel Top",
            duration: "50 mins",
            price: "40",
            shortDescription: "Extra strength & protection",
            details: "Give your nails the ultimate protection! This enhanced manicure features our complete nail care routine topped with a protective gel coat that adds incredible durability and mirror-like shine to your manicure.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=0bd9debc-a1f5-4487-bd99-c952afb44201&type=service"
          },
          {
            name: "Shellac Manicure with Gel Overlay",
            duration: "60 mins",
            price: "45",
            shortDescription: "Maximum durability & glamour",
            details: "Experience our most luxurious manicure! This premium service includes comprehensive nail care and a professional gel overlay that provides maximum protection, incredible shine, and long-lasting beauty that's perfect for any occasion.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=379fedbf-35d8-4816-9098-ba8ba0a875e2&type=service"
          }
        ],
      },
      {
        name: "Pedicures",
        services: [
          {
            name: "Classic Pedicure with regular polish",
            duration: "45 mins",
            price: "40",
            shortDescription: "Relaxing foot refresh",
            details: "Treat your feet to pure bliss! Start with a warm, therapeutic soak, then enjoy nail care, cuticle treatment, gentle callus removal, and a soothing massage. We'll finish with beautiful regular polish for happy, healthy feet.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=35658703-d882-4ca9-b970-e47bd2d187ac&type=service"
          },
          {
            name: "Spa Pedicure with Hot Stones",
            duration: "60 mins",
            price: "50",
            shortDescription: "Ultimate relaxation experience",
            details: "Indulge in our signature spa experience! Everything from our classic pedicure plus intensive callus treatment, extended massage, and luxurious hot stone therapy finished with regular polish. Perfect for melting away stress and pampering tired feet.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=22ec16a1-b447-4bbe-a33f-a797a9740040&type=service"
          },
          {
            name: "Shellac Pedicure",
            duration: "50 mins",
            price: "45",
            shortDescription: "Long-lasting beautiful toes",
            details: "Beautiful feet that stay beautiful! All the pampering of our classic pedicure finished with chip-resistant shellac polish that keeps your toes looking perfect for weeks. Ideal for vacations and active lifestyles.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=177ec3cb-4941-441f-a651-75c530357458&type=service"
          },
          {
            name: "Deluxe Spa Pedicure",
            duration: "75 mins",
            price: "55",
            shortDescription: "The ultimate foot indulgence",
            details: "Our most luxurious foot treatment! Enjoy everything we offer: intensive callus care, exfoliating scrub, nourishing foot mask, extended massage, hot stone therapy, and long-lasting shellac polish. The ultimate self-care experience!",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=267056b5-9fdb-48e0-8c55-28b3c67d25d4&type=service"
          }
        ],
      },
      {
        name: "Nail Extensions",
        services: [
          {
            name: "Nail New Set",
            duration: "90 mins",
            price: "60",
            shortDescription: "Acrylic or gel will be same price",
            details: "Get the nails you've always wanted! Our custom extensions give you beautiful length and strength while protecting your natural nails underneath. Choose your perfect shape and length for stunning, durable nails.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=c693e48b-e509-44ad-a752-27dffe01377c&type=service"
          },
          {
            name: "Nail Refill",
            duration: "20 mins",
            price: "45",
            shortDescription: "Keep your nails always perfect",
            details: "Keep your nails always perfect. We'll fill in growth areas, reshape as needed, and give you a fresh polish change. Regular maintenance keeps your nails strong and beautiful between appointments.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=11140b5b-6dad-429e-a0a4-69a833e610f6&type=service"
          }
        ],
      },
      {
        name: "Add-Ons",
        services: [
          {
            name: "Polish Change",
            duration: "15 mins",
            price: "15",
            shortDescription: "Quick color refresh",
            details: "Switch up your look in minutes! We'll remove your old polish and apply a fresh new color with regular polish. Perfect for trying new shades or refreshing your look between full services.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=1882e18e-9e09-405d-932e-3134bf65869f&type=service"
          },
          {
            name: "Shellac Polish Change",
            duration: "20 mins",
            price: "30",
            shortDescription: "Long-lasting color switch",
            details: "Change your color the smart way! Quick removal of old polish and application of beautiful new shellac that lasts for weeks. Great for keeping up with trends or matching special outfits.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=90a1ee10-111b-4281-9b36-05524c75a893&type=service"
          },
          {
            name: "Hand Nail Trim & Shape",
            duration: "10 mins",
            price: "15",
            shortDescription: "Quick nail maintenance",
            details: "Keep your nails neat and tidy! Quick trimming and shaping service that's perfect for maintenance between full manicures or when you just need a quick touch-up.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=67a49dc4-0de6-44da-8d1d-cc30b7fda0f4&type=service"
          },
          {
            name: "Foot Nail Trim & Shape",
            duration: "15 mins",
            price: "25",
            shortDescription: "Toenail care made easy",
            details: "Keep your toenails comfortable and neat! Professional trimming and shaping that's perfect for maintenance between pedicures or when you need quick foot care.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=1cea68ef-bc0d-4e47-aa39-bf725a438f11&type=service"
          },
          {
            name: "Shellac Removal",
            duration: "15 mins",
            price: "15",
            shortDescription: "Gentle, professional removal",
            details: "Safe removal that protects your nails! We use proper techniques to gently remove shellac without damaging your natural nails. Your nails will thank you!",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=63d78b40-d53d-44fd-9ad2-df431c61423c&type=service"
          },
          {
            name: "Acrylic/Gel Removal (up)",
            duration: "20 mins",
            price: "20+",
            shortDescription: "Safe removal service",
            details: "Professional removal that cares for your natural nails! We safely remove artificial or gel extensions with gentle soaking and conditioning to restore your nail health.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=87a3bd9a-9435-48e8-a448-1e0a9e13d7fc&type=service"
          },
          {
            name: "Paraffin Wax Treatment - Hands",
            duration: "15 mins",
            price: "15",
            shortDescription: "Deep moisture therapy for hands",
            details: "Pamper your hands with warm, therapeutic wax! This luxurious treatment deeply moisturizes dry skin and soothes tired hands. Especially wonderful during winter months or for extra-dry skin.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=88c89c89-7ffd-4611-84fd-cb903bbc65ea&type=service"
          },
          {
            name: "Paraffin Wax Treatment - Feet",
            duration: "15 mins",
            price: "25",
            shortDescription: "Deep moisture therapy for feet",
            details: "Pamper your feet with warm, therapeutic wax! This luxurious treatment deeply moisturizes dry skin and soothes tired feet. Especially wonderful during winter months or for extra-dry skin.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=62e389f2-7cff-4b50-ae7b-96f55904c7b0&type=service"
          },
          {
            name: "Callus Removal",
            duration: "10 mins",
            price: "10",
            shortDescription: "Smooth, comfortable feet",
            details: "Say goodbye to rough, uncomfortable calluses! Our gentle but effective treatment focuses on problem areas to leave your feet feeling smooth and comfortable again.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=29b13cdf-35c9-40c9-aba5-e47c4d42ddca&type=service"
          },
          {
            name: "Nail Repair",
            duration: "10 mins",
            price: "5",
            shortDescription: "Fix broken nails instantly",
            details: "Don't let a broken nail ruin your day! We'll repair splits, breaks, or damage using professional techniques. Get back to beautiful nails in no time. Priced per nail.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=69cd19e9-764a-492a-8ff7-f2d86430b10d&type=service"
          },
          {
            name: "French Tip",
            duration: "15 mins",
            price: "10",
            shortDescription: "Timeless elegance",
            details: "Classic never goes out of style! Beautiful white tips with a natural base create an elegant, sophisticated look that goes with everything and makes your fingers look longer and more graceful.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=f3eea388-d341-4603-9ab6-0bdd81fce4ca&type=service"
          },
          {
            name: "Chrome, Cateye or Ombre",
            duration: "10 mins",
            price: "15",
            shortDescription: "Eye-catching metallic magic",
            details: "Make a statement with stunning effects! Choose mirror-like chrome for ultra-glam, mesmerizing cat eye patterns that shift and flow, or beautiful ombre gradients that blend colors seamlessly. These specialty finishes create nails that are truly show-stopping.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=c5d3c7de-4eeb-48e9-87b0-a85d91e06b4c&type=service"
          },
          {
            name: "Simple Nail Art",
            duration: "10 mins",
            price: "10",
            shortDescription: "Cute accent details (2 nails)",
            details: "Add personality to your manicure! Simple, charming designs like dots, stripes, tiny flowers, or geometric patterns on 2 accent nails. Perfect for adding just the right touch of creativity.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=6d135edb-ab76-45d6-8e8a-0a5229e529a4&type=service"
          },
          {
            name: "Custom Nail Art",
            duration: "20 mins",
            price: "15",
            shortDescription: "Creative designs (2-4 nails)",
            details: "Express your style with beautiful hand-painted designs! From gradients and marbling to detailed motifs on 2-4 nails. Let us create something special that reflects your personality.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=b98b98d2-f2f0-4673-a6ac-64bc265cee8a&type=service"
          },
          {
            name: "Intricate Nail Art",
            duration: "Varies",
            price: "By Quote",
            shortDescription: "One-of-a-kind masterpieces",
            details: "Dream it, we'll create it! Custom artwork tailored to your vision, from detailed scenes to complex multi-technique designs. Let's discuss your ideas and create something truly unique together.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com"
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
            details: "A magical first manicure experience! Gentle nail care and fun colors in a kid-friendly environment. Perfect for birthdays, special occasions, or teaching little ones about nail care in a fun way.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=f107e0d7-a52e-4be7-bb06-1b8727113712&type=service"
          },
          {
            name: "Little Princess Pedicure",
            duration: "30 mins",
            price: "25",
            shortDescription: "Bubbly fun for tiny toes",
            details: "Make foot care fun! A delightful experience with bubbly soaks, gentle nail care, tickly massages, and their favorite polish colors. Great for introducing self-care while creating precious memories together.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=37a14e1c-a55e-4826-9b1c-3d6f8fb2c984&type=service"
          }
        ],
      }
    ],
  },
  {
    name: "Massage & Spa",
    subcategories: [
      {
        name: "Massage",
        services: [
          {
            name: "1-Hour Relaxation Massage",
            duration: "60 mins",
            price: "120",
            shortDescription: "Melt away stress & tension",
            details: "Escape the everyday with our therapeutic full-body massage! Perfect pressure to release muscle tension, improve circulation, and help you completely unwind. Leave feeling refreshed, relaxed, and renewed.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=79e22787-9882-4c6e-bbb6-bc86a49dc3f3&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
          },
          {
            name: "1-Hour Hot Stone Massage",
            duration: "60 mins",
            price: "130",
            shortDescription: "Luxurious heated stone therapy",
            details: "Experience pure bliss with warm volcanic stones! The gentle heat melts deep into your muscles while expert massage techniques ease tension. It's like being wrapped in warmth and relaxation from head to toe.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=ab304f4c-87a7-4e47-b08b-ff2670ce1b0e&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
          },
          {
            name: "90-Minute Extended Massage",
            duration: "90 mins",
            price: "180",
            shortDescription: "Extra time for deeper relief",
            details: "When you need more time to truly unwind! Extended session allows for comprehensive full-body treatment with extra attention to your trouble spots. Perfect for when you really want to disconnect and restore.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=cad7b49f-9d7d-4e18-a1dc-025ed2b6f89b&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
          },
          {
            name: "90-Minute Hot Stone Massage",
            duration: "90 mins",
            price: "190",
            shortDescription: "Extended heated stone bliss",
            details: "The ultimate in heated stone relaxation! More time means deeper muscle penetration, complete tension relief, and an incredibly restorative experience. This is self-care at its finest.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=223b51c2-4e50-4ef9-8309-b1cfb3852e65&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
          },
          {
            name: "2-Hour Ultimate Massage",
            duration: "120 mins",
            price: "240",
            shortDescription: "The ultimate escape experience",
            details: "Our most comprehensive relaxation experience! Two full hours dedicated to your wellness with personalized attention to exactly what your body needs. Complete mind-body renewal and the ultimate treat for yourself.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=6105a80e-e1ea-47a3-ba15-5b00b565b4d7&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
          },
          {
            name: "2-Hour Ultimate Hot Stone",
            duration: "120 mins",
            price: "250",
            shortDescription: "The pinnacle of relaxation",
            details: "The absolute ultimate in spa luxury! Two hours combining our best massage techniques with therapeutic hot stone treatment. This is the experience you'll dream about long after it's over.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=8ce64029-993f-42ab-a744-724385467b3e&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
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
            details: "Give your skin the love it deserves! Deep cleansing, gentle exfoliation, and nourishing treatments customized for your skin type. Walk out with a healthy glow and skin that feels amazing.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com"
          },
        ],
      },
    ],
  },
  {
    name: "Waxing",
    subcategories: [
      {
        name: "Waxing",
        services: [
          {
            name: "Eyebrow Shaping",
            duration: "15 mins",
            price: "15",
            shortDescription: "Perfect brow definition",
            details: "Frame your face beautifully! Professional eyebrow shaping creates the perfect arch for your face shape. Includes waxing, tweezing for precision, and soothing aftercare for gorgeous, defined brows.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=d781203f-7db9-4623-8df3-a27faeaa8ffe&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
          },
          {
            name: "Facial Hair Removal",
            duration: "10 mins",
            price: "12",
            shortDescription: "Smooth, hair-free skin",
            details: "Quick and comfortable facial hair removal for areas like upper lip, chin, or cheeks. Gentle wax designed for delicate facial skin leaves you smooth and confident. Price per area.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=eef37418-d05a-4e81-a3fa-a409b06355e2&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
          },
          {
            name: "Complete Facial Waxing",
            duration: "30 mins",
            price: "45",
            shortDescription: "Full-face smooth perfection",
            details: "Complete facial hair removal for ultimate smoothness! Covers all areas including brows, lips, chin, and cheeks. Professional technique with gentle aftercare for beautifully smooth, hair-free skin.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=b09b3ad6-c492-4d6f-93b2-89c77aa8106f&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
          },
          {
            name: "Underarm Waxing",
            duration: "15 mins",
            price: "20",
            shortDescription: "Quick & comfortable",
            details: "Smooth underarms in minutes! Fast, effective hair removal that lasts much longer than shaving. Gentle technique designed for sensitive underarm skin with proper aftercare.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=425908d7-945e-4ae6-aeba-4d836f096fcc&type=service"
          },
          {
            name: "Full Arm Waxing",
            duration: "30 mins",
            price: "40",
            shortDescription: "Silky smooth arms",
            details: "Beautiful, hair-free arms from shoulder to fingertips! Professional technique ensures even coverage and long-lasting smoothness. Perfect for sleeveless seasons and special occasions.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=a37cc4f0-ec48-4a1d-9315-8cd1292dc1f7&type=service"
          },
          {
            name: "Lower Leg Waxing",
            duration: "30 mins",
            price: "30",
            shortDescription: "Smooth from knee down",
            details: "Perfect for those who prefer partial leg waxing! Hair removal from knee to ankle gives you smooth, touchable skin that lasts weeks longer than shaving.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=1a45a4fc-5a67-4f3c-a918-5a79bbf1a0b8&type=service"
          },
          {
            name: "Full Leg Waxing",
            duration: "60 mins",
            price: "50",
            shortDescription: "Complete leg smoothness",
            details: "Gorgeous, hair-free legs from top to toe! Complete removal for silky smooth skin that's perfect for dresses, swimwear, or just feeling confident in your own skin.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=043f3b56-dc6e-4d2f-b84f-62201eb48fe3&type=service"
          },
          {
            name: "Bikini Line Waxing",
            duration: "30 mins",
            price: "35",
            shortDescription: "Swimsuit-ready confidence",
            details: "Clean, groomed bikini line for confidence in swimwear! Removes hair that would show outside underwear or bikini bottoms while keeping you comfortable and confident.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=4490dba0-ef2f-490d-8ed0-b7c0cfd04a89&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
          },
          {
            name: "Brazilian Waxing",
            duration: "30 mins",
            price: "60",
            shortDescription: "Complete smooth confidence",
            details: "Our most comprehensive intimate hair removal service performed with the utmost professionalism and care. Completely smooth results in a comfortable, private environment.",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=9f75ae91-e66f-4177-9182-d1f8dcce06f1&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
          },
          {
            name: "Back or Chest Waxing",
            duration: "40 mins",
            price: "55",
            shortDescription: "Smooth, confident torso",
            details: "Professional body hair removal for back or chest (price per area). Effective, long-lasting results with attention to your comfort. Feel confident whether you're at the beach or the gym!",
            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=757faa06-320f-4908-84e5-102e1c1d712f&type=service"
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