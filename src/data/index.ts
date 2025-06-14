// Centralized data exports for Victoria Park Nails and Spa

// Import services directly first so they're available to utility functions
import { services as servicesList } from './services';
import { serviceCategories as serviceCategoriesList } from './service-categories';
import { teamMembers as teamMembersList } from './team';
import { testimonials as testimonialsList } from './testimonials';
import { faqs as faqsList } from './faqs';
import { promotions as promotionsList } from './promotions';
import { galleryImages as galleryImagesList } from './gallery';

// Type definitions
export * from './types';

// Business information
export { businessInfo } from './business-info';

// Services and categories
export { servicesList as services };
export { serviceCategoriesList as serviceCategories };

// Team and testimonials
export { teamMembersList as teamMembers };
export { testimonialsList as testimonials };

// FAQ and promotions
export { faqsList as faqs };
export { promotionsList as promotions };

// Gallery and blog
export { galleryImagesList as galleryImages };

// Utility functions for data access
export const getServiceById = (id: string) => {
  return servicesList.find(service => service.id === id);
};

export const getServicesByCategory = (categoryId: string) => {
  return servicesList.filter(service => service.category === categoryId);
};

export const getFeaturedServices = () => {
  return servicesList.filter(service => service.featured);
};

export const getPopularServices = () => {
  return servicesList.filter(service => service.popular);
};

export const getAllServices = () => {
  return servicesList;
};

export const getTeamMemberById = (id: string) => {
  return teamMembersList.find(member => member.id === id);
};

export const getTestimonialsByService = (serviceName: string) => {
  return testimonialsList.filter(testimonial => 
    testimonial.service.toLowerCase().includes(serviceName.toLowerCase())
  );
};

export const getFaqsByCategory = (category: string) => {
  return faqsList.filter(faq => faq.category === category);
};

export const getFeaturedPromotions = () => {
  return promotionsList.filter(promotion => promotion.featured);
};

export const getActivePromotions = () => {
  const now = new Date();
  return promotionsList.filter(promotion => {
    if (promotion.validUntil === 'Ongoing') return true;
    if (!promotion.validUntil) return false;
    const validUntil = new Date(promotion.validUntil);
    return validUntil > now;
  });
};

export const getGalleryImagesByCategory = (category: string) => {
  return galleryImagesList.filter(image => image.category === category);
};

export const getFeaturedGalleryImages = () => {
  return galleryImagesList.filter(image => image.featured);
};
