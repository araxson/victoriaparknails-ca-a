// Centralized data exports for Victoria Park Nails and Spa

// Import services and categories directly first so they're available to utility functions
import { services as servicesList } from "./services";
import { teamMembers as teamMembersList } from "./team";
import { testimonials as testimonialsList } from "./testimonials";
import { faqs as faqsList } from "./faqs";
import { offers as offersList } from "./offers";
import { galleryImages as galleryImagesList } from "./gallery";

// Type definitions
export * from "./types";

// Business information
export { businessInfo } from "./business-info";
export { websiteContent } from "./content";

// Services and categories
export { servicesList as services };
export { serviceCategories } from "./services";
export { getServicesByCategory, getServiceById } from "./services";

// Team and testimonials
export { teamMembersList as teamMembers };
export { testimonialsList as testimonials };

// FAQ and offers
export { faqsList as faqs };
export { offersList as offers };

// Gallery and blog
export { galleryImagesList as galleryImages };

// Utility functions for data access - grouped by type for better organization
export const teamUtils = {
  getById: (id: string) => teamMembersList.find((member) => member.id === id),
};

export const testimonialUtils = {
  getByService: (serviceName: string) => {
    return testimonialsList.filter((testimonial) =>
      testimonial.service.toLowerCase().includes(serviceName.toLowerCase()),
    );
  },
};

export const faqUtils = {
  getByCategory: (category: string) =>
    faqsList.filter((faq) => faq.category === category),
};

export const offerUtils = {
  getActive: () => {
    const now = new Date();
    return offersList.filter((offer) => {
      // Filter offers that are currently active based on validUntil date
      const endDate = offer.validUntil ? new Date(offer.validUntil) : null;

      // If no end date specified, consider the offer as always active
      if (!endDate) return true;

      // Check if current date is before end date
      return now <= endDate;
    });
  },
};
