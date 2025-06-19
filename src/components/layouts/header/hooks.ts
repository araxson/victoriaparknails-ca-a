"use client";

import { useState, useEffect, useRef } from "react";
import { SCROLL_CONFIG } from "./constants";

interface UseScrollBehaviorReturn {
  isScrolled: boolean;
  isHidden: boolean;
}

/**
 * Custom hook to manage header scroll behavior (hide/show and background)
 * @returns Object containing scroll state information
 */
export function useScrollBehavior(): UseScrollBehaviorReturn {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY.current;

          // Update background state based on scroll position
          setIsScrolled(currentScrollY > SCROLL_CONFIG.showThreshold);

          // Update hidden state based on scroll direction and position
          if (currentScrollY > SCROLL_CONFIG.hideThreshold) {
            if (scrollDifference > SCROLL_CONFIG.threshold) {
              // Scrolling down - hide header
              setIsHidden(true);
            } else if (scrollDifference < -SCROLL_CONFIG.threshold) {
              // Scrolling up - show header
              setIsHidden(false);
            }
          } else {
            // Always show header when near top
            setIsHidden(false);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    }

    // Initial call to set proper state
    handleScroll();

    // Add throttled scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrolled, isHidden };
}
