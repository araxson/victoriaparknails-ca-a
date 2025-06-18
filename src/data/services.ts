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
            shortDescription: "(w/ Regular Polish)",
            details: "A revitalizing treatment including nail shaping, cuticle care, moisturizing hand massage, and regular polish application. Perfect for maintaining healthy nails with a quick refresh."
          },
          {
            name: "Deluxe Manicure",
            duration: "45 mins",
            price: "35",
            shortDescription: "(w/ Shellac)",
            details: "Our elevated manicure experience with shellac polish. Includes nail shaping, cuticle care, moisturizing hand massage, and long-lasting shellac polish application that resists chipping."
          },
          {
            name: "Intensive Care Manicure",
            duration: "50 mins",
            price: "40",
            shortDescription: "(w/ Gel Top)",
            details: "Advanced manicure treatment with gel top coat. Includes comprehensive nail care, cuticle treatment, moisturizing massage, and protective gel top coat for enhanced durability and shine."
          },
          {
            name: "Gel Overlay Deluxe Manicure",
            duration: "60 mins",
            price: "45",
            shortDescription: "(Premium Protection)",
            details: "Premium manicure service featuring gel overlay for maximum protection and shine. Includes complete nail care, cuticle treatment, massage, and professional gel overlay application."
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
            shortDescription: "(w/ Regular Polish)",
            details: "This refreshing foot treatment includes a warm therapeutic soak, nail trimming and shaping, cuticle care, light callus removal, moisturizing massage, and regular polish application. Provides essential relief for tired feet and maintains foot health."
          },
          {
            name: "Deluxe Pedicure",
            duration: "60 mins",
            price: "50",
            shortDescription: "(w/ Regular Polish + Massage + Hot Stone)",
            details: "Our premium pedicure with regular polish, includes everything in the Classic service plus intensive callus treatment, extended massage, and hot stone treatment. Perfect for deep relaxation and revitalizing tired, rough feet."
          },
          {
            name: "Classic Pedicure with Shellac",
            duration: "50 mins",
            price: "45",
            shortDescription: "(w/ Shellac)",
            details: "All the benefits of our Classic pedicure finished with long-wearing shellac polish that resists chips and scratches. Ideal for active lifestyles when you need your polish to last."
          },
          {
            name: "Deluxe Spa Pedicure",
            duration: "75 mins",
            price: "55",
            shortDescription: "(w/ Shellac + Massage + Hot Stone)",
            details: "Our ultimate pedicure experience with shellac polish, massage, and hot stone treatment. Includes intensive callus treatment, exfoliating scrub, nourishing foot mask, extended massage, and hot stone therapy for the ultimate relaxation."
          }
        ],
      },
      {
        name: "Combo Services",
        services: [
          {
            name: "Combo Deluxe Manicure & Pedicure",
            duration: "2 hrs",
            price: "85",
            shortDescription: "(Complete Package)",
            details: "Complete pampering package combining our Deluxe Manicure and Deluxe Pedicure services. Includes comprehensive nail care for hands and feet, cuticle treatment, moisturizing massage, and your choice of regular or shellac polish. Perfect for a full spa experience."
          }
        ],
      },
      {
        name: "Nail Enhancements",
        services: [
          {
            name: "Acrylic/Gel New Set",
            duration: "90 mins",
            price: "60",
            shortDescription: "(Full Set)",
            details: "Strong, durable nail extensions created with acrylic or gel that hardens to form a protective layer. Customized to your preferred length and shape, these enhancements provide strength while allowing damaged natural nails to grow underneath."
          },
          {
            name: "Acrylic/Gel Fill-in",
            duration: "60 mins",
            price: "45",
            shortDescription: "(3 weeks)",
            details: "Maintenance service for existing acrylic or gel nails to fill the growth area, prevent lifting, and maintain appearance. Includes reshaping and polish change if desired. Regular fills preserve enhancement integrity and protect natural nails."
          }
        ],
      },
      {
        name: "Add-Ons & Extras",
        services: [
          {
            name: "Color Change Only",
            duration: "15 mins",
            price: "15",
            shortDescription: "(Regular Polish)",
            details: "Quick color update with regular polish without full manicure maintenance. Includes removal of old polish, nail cleansing, base coat, two coats of color, and top coat. Perfect for refreshing your look between full services."
          },
          {
            name: "Shellac Color Change Only",
            duration: "20 mins",
            price: "30",
            shortDescription: "(Quick Update)",
            details: "Quick color update with long-lasting shellac polish. Includes removal of old polish, nail preparation, and application of new shellac color for maximum durability."
          },
          {
            name: "Nail Cut Only",
            duration: "10 mins",
            price: "15",
            shortDescription: "(Hands)",
            details: "Simple nail trimming and shaping service for hands. Perfect for maintenance between full manicure appointments."
          },
          {
            name: "Toe Nail Cut Only",
            duration: "15 mins",
            price: "15",
            shortDescription: "(Feet)",
            details: "Basic toenail trimming and shaping service. Ideal for maintenance between full pedicure appointments."
          },
          {
            name: "Shellac Removal Only",
            duration: "15 mins",
            price: "15",
            shortDescription: "(Professional)",
            details: "Professional removal of shellac polish without additional services. Uses proper soaking techniques to protect natural nails."
          },
          {
            name: "Artificial/Gel Nail Removal",
            duration: "30 mins",
            price: "20+",
            shortDescription: "(Alone)",
            details: "Standalone removal service that safely eliminates artificial or gel nail products with soak treatment. Includes gentle filing, proper soaking, and post-removal conditioning to restore nail health."
          },
          {
            name: "Paraffin Wax Treatment",
            duration: "15 mins",
            price: "15-25",
            shortDescription: "(Therapeutic)",
            details: "Therapeutic treatment using warm wax to deeply hydrate skin and improve circulation. Particularly beneficial for dry, cracked skin, arthritis discomfort, or during winter months. Leaves skin noticeably softer."
          },
          {
            name: "Intensive Callus Removal",
            duration: "10 mins",
            price: "10",
            shortDescription: "(Targeted)",
            details: "Targeted treatment for stubborn calluses using professional softening solutions and gentle removal techniques. Focuses on problem areas like heels and pressure points to alleviate discomfort."
          },
          {
            name: "Nail Repair",
            duration: "10 mins",
            price: "5",
            shortDescription: "(per nail)",
            details: "Fix for broken, split, or damaged nails using specialized techniques tailored to the specific issue. Restores appearance and prevents further damage between appointments. Price per nail."
          },
          {
            name: "French Tips",
            duration: "15 mins",
            price: "10",
            shortDescription: "(Classic Style)",
            details: "Classic white-tipped design with a natural pink or beige base. Creates an elegant, timeless look that complements any outfit and makes fingers appear longer and more slender."
          },
          {
            name: "Chrome/Cat Eye",
            duration: "10 mins",
            price: "15",
            shortDescription: "(Specialty Finish)",
            details: "Specialty finishes that create eye-catching effects: mirror-like metallic surface (Chrome) or flowing magnetic patterns (Cat Eye). Applied over gel polish for dramatic visual impact."
          },
          {
            name: "Simple Nail Art",
            duration: "10 mins",
            price: "10",
            shortDescription: "(2 nails)",
            details: "Basic designs such as dots, lines, minimalist flowers, or geometric patterns applied to 2 nails. Adds personal style without overwhelming your manicure."
          },
          {
            name: "Moderate Nail Art",
            duration: "20 mins",
            price: "15",
            shortDescription: "(2-4 nails)",
            details: "More detailed designs on 3-4 nails using techniques like hand-painting, gradients, marbling, or stylized motifs. Creates focal points that enhance your base color and express your creativity."
          },
          {
            name: "Intricate/Custom Art",
            duration: "Varies",
            price: "By Quote",
            shortDescription: "(By Quote)",
            details: "Personalized designs ranging from detailed imagery to complex multi-technique creations. Pricing based on complexity, time requirements, and techniques needed. Consultation required to discuss design and determine pricing."
          }
        ],
      },
      {
        name: "For The Kids",
        services: [
          {
            name: "Mini Manicure",
            duration: "20 mins",
            price: "15",
            shortDescription: "(8 & Under)",
            details: "Child-friendly nail care including gentle shaping, light cuticle care, and application of kid-safe polish in their favorite color. Introduces proper nail hygiene in a fun, age-appropriate way. Perfect for special occasions or parent-child bonding."
          },
          {
            name: "Mini Pedicure",
            duration: "30 mins",
            price: "25",
            shortDescription: "(8 & Under)",
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
            price: "120",
            shortDescription: "(Relaxation)",
            details: "Full body therapeutic massage designed to relieve tension and promote deep relaxation. Uses gentle to moderate pressure to ease muscle tension, improve circulation, and provide a calming escape from daily stress. Perfect for unwinding and rejuvenating your body and mind."
          },
          {
            name: "60-Minute Hot Stone Body Massage",
            duration: "1 hr",
            price: "130",
            shortDescription: "(Hot Stone Therapy)",
            details: "Luxurious hot stone massage combining the benefits of traditional massage with heated volcanic stones. The warmth penetrates deep into muscles, melting away tension and promoting profound relaxation. Stones are strategically placed and used to massage key points for maximum therapeutic benefit."
          },
          {
            name: "90-Minute Body Massage",
            duration: "1 hr 30 mins",
            price: "180",
            shortDescription: "(Extended Session)",
            details: "Extended therapeutic massage session allowing for comprehensive full-body treatment with additional time for targeted problem areas. Includes deeper muscle work, focused attention on areas of tension, and extra time for complete relaxation and stress relief."
          },
          {
            name: "90-Minute Hot Stone Body Massage",
            duration: "1 hr 30 mins",
            price: "190",
            shortDescription: "(Extended Hot Stone)",
            details: "Premium extended hot stone massage experience combining traditional techniques with therapeutic heated stones. The longer session allows for deeper muscle penetration, comprehensive treatment of all tension areas, and ultimate relaxation through extended stone therapy."
          },
          {
            name: "120-Minute Body Massage",
            duration: "2 hrs",
            price: "240",
            shortDescription: "(Ultimate Relaxation)",
            details: "Our most comprehensive massage experience offering the ultimate in relaxation and therapeutic benefit. Includes full-body massage with extra time for personalized treatment of specific areas, promoting deep muscle recovery, stress relief, and complete mind-body renewal."
          },
          {
            name: "120-Minute Hot Stone Body Massage",
            duration: "2 hrs",
            price: "250",
            shortDescription: "(Ultimate Hot Stone Experience)",
            details: "The pinnacle of relaxation combining our longest massage session with therapeutic hot stone treatment. Features comprehensive full-body work with extended hot stone therapy, allowing for maximum muscle penetration, complete tension release, and the ultimate spa experience."
          },
        ],
      },
      {
        name: "Facial Treatments",
        services: [
          {
            name: "Full Face Facial",
            duration: "30 mins",
            price: "45",
            shortDescription: "(Complete Treatment)",
            details: "Comprehensive facial treatment that cleanses, exfoliates, and nourishes your skin. Includes deep cleansing, gentle exfoliation, extractions if needed, moisturizing mask, and finishing with appropriate moisturizer and SPF. Customized to your skin type for optimal results."
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
            price: "15",
            shortDescription: "(Shape & Define)",
            details: "Professional eyebrow shaping using high-quality wax to remove unwanted hair and create defined, well-groomed brows. Includes tweezing for precision and finishing with soothing aftercare to minimize irritation."
          },
          {
            name: "Face Waxing",
            duration: "10 mins",
            price: "12",
            shortDescription: "(Per Area)",
            details: "Targeted facial hair removal for specific areas such as upper lip, chin, or cheeks. Quick and effective treatment using gentle wax formulated for sensitive facial skin. Price listed is per individual area."
          },
          {
            name: "Full Face Waxing",
            duration: "30 mins",
            price: "45",
            shortDescription: "(Complete)",
            details: "Comprehensive facial hair removal covering all areas including eyebrows, upper lip, chin, cheeks, and any other facial hair concerns. Provides smooth, hair-free skin with professional technique and gentle aftercare."
          },
          {
            name: "Under Arm Waxing",
            duration: "15 mins",
            price: "20",
            shortDescription: "(Quick & Clean)",
            details: "Fast and efficient underarm hair removal providing smooth, clean results that last weeks longer than shaving. Uses gentle wax suitable for sensitive underarm skin with proper aftercare to prevent irritation."
          },
          {
            name: "Full Arm Waxing",
            duration: "30 mins",
            price: "40",
            shortDescription: "(Complete Arms)",
            details: "Complete arm hair removal from shoulders to fingertips, including hands if desired. Provides smooth, hair-free arms with long-lasting results. Professional technique ensures even coverage and minimal discomfort."
          },
          {
            name: "Half Leg Waxing",
            duration: "30 mins",
            price: "30",
            shortDescription: "(Lower Legs)",
            details: "Hair removal for lower legs from knee to ankle, perfect for those who prefer partial leg waxing or have minimal upper leg hair. Provides smooth, touchable skin with results lasting 3-6 weeks."
          },
          {
            name: "Full Leg Waxing",
            duration: "1 hr",
            price: "50",
            shortDescription: "(Complete Legs)",
            details: "Complete leg hair removal from upper thighs to toes, including knees and any areas in between. Comprehensive service providing smooth, hair-free legs with professional technique and attention to detail."
          },
          {
            name: "Bikini Waxing",
            duration: "30 mins",
            price: "35",
            shortDescription: "(Bikini Line)",
            details: "Hair removal along the bikini line for a clean, groomed appearance in swimwear. Removes hair that would be visible outside of underwear or bikini bottoms while maintaining your desired level of coverage."
          },
          {
            name: "Brazilian Waxing",
            duration: "30 mins",
            price: "60",
            shortDescription: "(Complete Removal)",
            details: "Complete intimate hair removal providing the smoothest possible result. Professional service performed with the utmost care and discretion, using high-quality wax and proper techniques for comfort and effectiveness."
          },
          {
            name: "Back or Chest Waxing",
            duration: "40 mins",
            price: "55",
            shortDescription: "(Each Area)",
            details: "Professional hair removal for back or chest area (priced per area). Effective treatment for removing unwanted body hair with long-lasting, smooth results. Performed with attention to comfort and thorough coverage."
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