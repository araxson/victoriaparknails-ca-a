import { ServiceCategory } from './types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: "manicure",
    name: "Manicures & Pedicures",
    description: "Restore the health and beauty of your hands and feet with our meticulous nail care services. Each treatment is designed to be a relaxing escape, leaving you with a flawless, long-lasting finish.",
    image: "/images/categories/manicure.webp",
    services: [
      "classic-manicure",
      "gel-manicure", 
      "french-manicure"
    ]
  },
  {
    id: "pedicure",
    name: "Nail Enhancements",
    description: "Add glamorous length, strength, and artistry to your nails. Our talented technicians specialize in creating durable, beautiful, and natural-looking enhancements, from classic looks to custom designs.",
    image: "/images/categories/pedicure.webp",
    services: [
      "classic-pedicure",
      "spa-pedicure",
      "gel-pedicure"
    ]
  },
  {
    id: "nail-art",
    name: "Lash & Brow Bar",
    description: "Perfectly frame your features with our professional lash and brow services. Our experts will help you achieve a polished and defined look.",
    image: "/images/categories/nail-art.webp",
    services: [
      "nail-art-basic",
      "nail-art-advanced"
    ]
  },
  {
    id: "extensions",
    name: "Waxing & Massage",
    description: "Silky smooth skin and deep relaxation await. Our professional waxing services use high-quality, gentle wax for effective, long-lasting hair removal and restorative massage treatments.",
    image: "/images/categories/extensions.webp",
    services: [
      "acrylic-extensions",
      "gel-extensions"
    ]
  },
  {
    id: "spa",
    name: "Spa Treatments",
    description: "Therapeutic spa treatments for hands and feet. Rejuvenate your skin with our specialized treatments and relaxation services.",
    image: "/images/categories/spa.webp",
    services: [
      "hand-treatment",
      "paraffin-treatment"
    ]
  }
];
