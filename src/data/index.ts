// Central data exports for Static Site Generation (SSG)
// All data is available at build time for maximum performance

export { businessInfo } from "./business-info";
export { websiteContent } from "./content";
export { faqs } from "./faqs";
export { 
  fallbackGalleryImages as galleryImages, 
  getAllGalleryImages, 
  getFeaturedGalleryImages,
  getRandomGalleryImagesAsync
} from "./gallery";
export { offers } from "./offers";
export { services, serviceCategories, getServicesByCategory, getServiceById } from "./services";
export { teamMembers } from "./team";
export { testimonials } from "./testimonials";

// Export types once to avoid ambiguity
export type {
  Service,
  ServiceCategory,
  TeamMember,
  Testimonial,
  FAQ,
  Offer,
  GalleryImage,
  BusinessInfo,
} from "./types";
