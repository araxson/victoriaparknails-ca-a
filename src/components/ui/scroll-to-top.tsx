"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down to half the page
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const halfPageHeight = (documentHeight - windowHeight) / 2;
      
      setIsVisible(scrollTop > halfPageHeight);
    };

    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8 pointer-events-none"
      )}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
