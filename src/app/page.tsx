import { HeroSection } from '@/components/sections/hero-section';
import { ServiceCategoriesSection } from '@/components/sections/service-categories-section';
import { FeaturedServicesSection } from '@/components/sections/featured-services-section';
import { TeamSection } from '@/components/sections/team-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactInfoSection } from '@/components/sections/contact-info-section';
import { PromotionsSection } from '@/components/sections/promotions-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { BlogSection } from '@/components/sections/blog-section';
import { FAQSection } from '@/components/sections/faq-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceCategoriesSection />
      <FeaturedServicesSection />
      <GallerySection />
      <PromotionsSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactInfoSection />
    </main>
  );
}