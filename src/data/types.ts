// Business Information Types
export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
    bookingUrl: string;
  };
  hours: {
    [key: string]: string;
  };
  holidayHours?: {
    hours: string;
    note?: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
}

// Service Types
export interface Service {
  id: string;
  name: string;
  description?: string;
  categoryId: string;
  price: number | string;
  duration: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

// Gallery Types
export interface GalleryImage {
  src: string;
  alt?: string;
}

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
  specialties: string[];
  experience: string;
  certifications?: string[];
  bookingUrl?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
  service: string;
  verified: boolean;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Offer Types
export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  terms: string[];
  validUntil?: string;
  image?: string;
  code?: string;
}

// Content Types
export interface PageContent {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  category?: string;
}
