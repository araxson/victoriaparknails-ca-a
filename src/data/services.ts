export interface Service {
  name: string;
  duration: string;
  price: string;
  shortDescription?: string;
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

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=0e19aa9b-86a5-4bd5-804a-26e9dabb3725&type=service"
          },
          {
            name: "Shellac Manicure",
            duration: "45 mins",
            price: "35",
            shortDescription: "Long-lasting shine",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=96dcf9ac-8f37-4c1d-bd12-7e7caafad618&type=service"
          },
          {
            name: "Shellac Manicure with Gel Top",
            duration: "50 mins",
            price: "40",
            shortDescription: "Extra strength & protection",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=0bd9debc-a1f5-4487-bd99-c952afb44201&type=service"
          },
          {
            name: "Shellac Manicure with Gel Overlay",
            duration: "60 mins",
            price: "45",
            shortDescription: "Maximum durability & glamour",

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

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=35658703-d882-4ca9-b970-e47bd2d187ac&type=service"
          },
          {
            name: "Spa Pedicure with Hot Stones",
            duration: "60 mins",
            price: "50",
            shortDescription: "Ultimate relaxation experience",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=22ec16a1-b447-4bbe-a33f-a797a9740040&type=service"
          },
          {
            name: "Shellac Pedicure",
            duration: "50 mins",
            price: "45",
            shortDescription: "Long-lasting beautiful toes",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=177ec3cb-4941-441f-a651-75c530357458&type=service"
          },
          {
            name: "Deluxe Spa Pedicure",
            duration: "75 mins",
            price: "55",
            shortDescription: "The ultimate foot indulgence",

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

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=c693e48b-e509-44ad-a752-27dffe01377c&type=service"
          },
          {
            name: "Nail Refill",
            duration: "20 mins",
            price: "45",
            shortDescription: "Keep your nails always perfect",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/services/0dcb3f25-5eca-4461-ab9d-b8971689f723?step=staff&products=0dcb3f25-5eca-4461-ab9d-b8971689f723&type=service"
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

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=1882e18e-9e09-405d-932e-3134bf65869f&type=service"
          },
          {
            name: "Shellac Polish Change",
            duration: "20 mins",
            price: "30",
            shortDescription: "Long-lasting color switch",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=90a1ee10-111b-4281-9b36-05524c75a893&type=service"
          },
          {
            name: "Hand Nail Trim & Shape",
            duration: "10 mins",
            price: "15",
            shortDescription: "Quick nail maintenance",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=67a49dc4-0de6-44da-8d1d-cc30b7fda0f4&type=service"
          },
          {
            name: "Foot Nail Trim & Shape",
            duration: "15 mins",
            price: "25",
            shortDescription: "Toenail care made easy",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=1cea68ef-bc0d-4e47-aa39-bf725a438f11&type=service"
          },
          {
            name: "Shellac Removal",
            duration: "15 mins",
            price: "15",
            shortDescription: "Gentle, professional removal",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=63d78b40-d53d-44fd-9ad2-df431c61423c&type=service"
          },
          {
            name: "Acrylic/Gel Removal (up)",
            duration: "20 mins",
            price: "20+",
            shortDescription: "Safe removal service",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=87a3bd9a-9435-48e8-a448-1e0a9e13d7fc&type=service"
          },
          {
            name: "Paraffin Wax Treatment - Hands",
            duration: "15 mins",
            price: "15",
            shortDescription: "Deep moisture therapy for hands",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=88c89c89-7ffd-4611-84fd-cb903bbc65ea&type=service"
          },
          {
            name: "Paraffin Wax Treatment - Feet",
            duration: "15 mins",
            price: "25",
            shortDescription: "Deep moisture therapy for feet",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=62e389f2-7cff-4b50-ae7b-96f55904c7b0&type=service"
          },
          {
            name: "Callus Removal",
            duration: "10 mins",
            price: "10",
            shortDescription: "Smooth, comfortable feet",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=29b13cdf-35c9-40c9-aba5-e47c4d42ddca&type=service"
          },
          {
            name: "Nail Repair",
            duration: "10 mins",
            price: "5",
            shortDescription: "Fix broken nails instantly",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=69cd19e9-764a-492a-8ff7-f2d86430b10d&type=service"
          },
          {
            name: "French Tip",
            duration: "15 mins",
            price: "10",
            shortDescription: "Timeless elegance",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=f3eea388-d341-4603-9ab6-0bdd81fce4ca&type=service"
          },
          {
            name: "Chrome, Cateye or Ombre",
            duration: "10 mins",
            price: "15",
            shortDescription: "Eye-catching metallic magic",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=c5d3c7de-4eeb-48e9-87b0-a85d91e06b4c&type=service"
          },
          {
            name: "Simple Nail Art",
            duration: "10 mins",
            price: "10",
            shortDescription: "Cute accent details (2 nails)",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=6d135edb-ab76-45d6-8e8a-0a5229e529a4&type=service"
          },
          {
            name: "Custom Nail Art",
            duration: "20 mins",
            price: "15",
            shortDescription: "Creative designs (2-4 nails)",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=b98b98d2-f2f0-4673-a6ac-64bc265cee8a&type=service"
          },
          {
            name: "Intricate Nail Art",
            duration: "Varies",
            price: "By Quote",
            shortDescription: "One-of-a-kind masterpieces",

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

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=f107e0d7-a52e-4be7-bb06-1b8727113712&type=service"
          },
          {
            name: "Little Princess Pedicure",
            duration: "30 mins",
            price: "25",
            shortDescription: "Bubbly fun for tiny toes",

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

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=79e22787-9882-4c6e-bbb6-bc86a49dc3f3&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
          },
          {
            name: "1-Hour Hot Stone Massage",
            duration: "60 mins",
            price: "130",
            shortDescription: "Luxurious heated stone therapy",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=ab304f4c-87a7-4e47-b08b-ff2670ce1b0e&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
          },
          {
            name: "90-Minute Extended Massage",
            duration: "90 mins",
            price: "180",
            shortDescription: "Extra time for deeper relief",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=cad7b49f-9d7d-4e18-a1dc-025ed2b6f89b&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
          },
          {
            name: "90-Minute Hot Stone Massage",
            duration: "90 mins",
            price: "190",
            shortDescription: "Extended heated stone bliss",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=223b51c2-4e50-4ef9-8309-b1cfb3852e65&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
          },
          {
            name: "2-Hour Ultimate Massage",
            duration: "120 mins",
            price: "240",
            shortDescription: "The ultimate escape experience",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=6105a80e-e1ea-47a3-ba15-5b00b565b4d7&type=service&staff=cyenzUfc96WJtwAUlopx7DhYQ83kffxi&staffSelected=false"
          },
          {
            name: "2-Hour Ultimate Hot Stone",
            duration: "120 mins",
            price: "250",
            shortDescription: "The pinnacle of relaxation",

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

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=d781203f-7db9-4623-8df3-a27faeaa8ffe&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
          },
          {
            name: "Facial Hair Removal",
            duration: "10 mins",
            price: "12",
            shortDescription: "Smooth, hair-free skin",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=eef37418-d05a-4e81-a3fa-a409b06355e2&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
          },
          {
            name: "Complete Facial Waxing",
            duration: "30 mins",
            price: "45",
            shortDescription: "Full-face smooth perfection",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=b09b3ad6-c492-4d6f-93b2-89c77aa8106f&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
          },
          {
            name: "Underarm Waxing",
            duration: "15 mins",
            price: "20",
            shortDescription: "Quick & comfortable",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=425908d7-945e-4ae6-aeba-4d836f096fcc&type=service"
          },
          {
            name: "Full Arm Waxing",
            duration: "30 mins",
            price: "40",
            shortDescription: "Silky smooth arms",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=a37cc4f0-ec48-4a1d-9315-8cd1292dc1f7&type=service"
          },
          {
            name: "Lower Leg Waxing",
            duration: "30 mins",
            price: "30",
            shortDescription: "Smooth from knee down",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=1a45a4fc-5a67-4f3c-a918-5a79bbf1a0b8&type=service"
          },
          {
            name: "Full Leg Waxing",
            duration: "60 mins",
            price: "50",
            shortDescription: "Complete leg smoothness",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=staff&products=043f3b56-dc6e-4d2f-b84f-62201eb48fe3&type=service"
          },
          {
            name: "Bikini Line Waxing",
            duration: "30 mins",
            price: "35",
            shortDescription: "Swimsuit-ready confidence",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=4490dba0-ef2f-490d-8ed0-b7c0cfd04a89&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
          },
          {
            name: "Brazilian Waxing",
            duration: "30 mins",
            price: "60",
            shortDescription: "Complete smooth confidence",

            bookingUrl: "https://victoriaparknailsspa.setmore.com/book?step=additional-products&products=9f75ae91-e66f-4177-9182-d1f8dcce06f1&type=service&staff=cLetBzJqo9uYtJFldrdZpDYEbgo7v4ne&staffSelected=false"
          },
          {
            name: "Back or Chest Waxing",
            duration: "40 mins",
            price: "55",
            shortDescription: "Smooth, confident torso",

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