"use client";
import { useState, useRef, useEffect } from "react";
import { ServicesFilter } from "./services-filter";
import { categoryMap } from "@/data/categories";
import { Service } from "@/data/types";
import { AnimatedDetail } from "@/components/ui/animated-elements";
import { AnimatedFilteredResults, AnimatedOnce } from "@/components/ui/animated-filtered-results";

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollPositionRef = useRef(0);
  
  // Extract unique categories from services
  const categories = ["all", ...new Set(services.map(service => service.category))];
  
  // Filter services based on active category
  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);
  
  // Preserve scroll position when activeCategory changes
  useEffect(() => {
    // Short timeout to ensure rendering is complete
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, scrollPositionRef.current);
    }, 10);
    
    return () => clearTimeout(timeoutId);
  }, [activeCategory]);
  
  // Custom setActiveCategory function to remember scroll position
  const handleCategoryChange = (category: string) => {
    scrollPositionRef.current = window.scrollY;
    setActiveCategory(category);
  };
  
  // Format price display for different price types
  const formatPrice = (price: number | string | { min: number, max: number }) => {
    if (typeof price === 'number') {
      return `$${price}`;
    } else if (typeof price === 'string') {
      return price;
    } else if (price && typeof price === 'object') {
      return `$${price.min} - $${price.max}`;
    }
    return 'Price varies';
  };    return (
    <section className="container mx-auto py-12">      <AnimatedDetail animation="slideUp" delay={50}>
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      </AnimatedDetail>
      
      <AnimatedOnce animation="slideUp" delay={100}>
        <ServicesFilter 
          categories={categories}
          categoryLabels={categoryMap}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
        />
      </AnimatedOnce>
      
      <AnimatedFilteredResults 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        itemDelay={80}
        itemThreshold={0.3}
        triggerKey={activeCategory}
      >
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white p-4 rounded-lg shadow-md fade-on-hover">
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-700 mb-4">{service.shortDescription}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">{formatPrice(service.price)}</span>
              {service.duration && (
                <span className="text-sm text-gray-500">{service.duration}</span>
              )}
            </div>
          </div>
        ))}
      </AnimatedFilteredResults>
    </section>
  );
}