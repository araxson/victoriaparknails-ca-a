import { serviceCategories } from "@/data";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { ServiceDetailsClient } from "@/components/sections/service-details-client";

export default function ServiceDetailsSection() {
  const defaultActiveTab = serviceCategories[0]?.id || '';

  return (
    <Section variant="default" className="bg-gradient-to-b from-background to-muted/30" id="service-details-section">
      <div className="container">
        <SectionHeader
          badge="Our Services"
          title="Complete Service Menu"
          description="Explore our full range of professional nail and spa services, each designed to provide you with exceptional results and an unforgettable experience."
        />
        
        <ServiceDetailsClient 
          serviceCategories={serviceCategories}
          defaultActiveTab={defaultActiveTab}
        />
      </div>
    </Section>
  );
}
