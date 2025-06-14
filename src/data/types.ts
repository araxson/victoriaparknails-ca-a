// Data types for Victoria Park Nails and Spa website

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
    country: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
    bookingUrl?: string;
  };
  hours: {
    [key: string]: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    youtube?: string;
  };
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  duration: string;
  price: number | string;
  priceRange?: {
    min: number;
    max: number;
  };
  gallery?: string[];
  process?: string[];
  aftercare?: string[];
  featured?: boolean;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  services: string[]; // Service IDs
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
  specialties: string[];
  experience: string;
  certifications?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  review: string;
  date: string;
  image?: string;
  verified?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  terms: string[];
  image?: string;
  featured?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  service?: string;
  featured?: boolean;
}
