import { businessInfo } from "@/data";

/**
 * Get today's business hours based on current day
 * @returns Formatted business hours string for today
 */
export function getTodayHours(): string {
  const today = new Date();
  const dayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1; // Convert Sunday (0) to Saturday (6)
  const dayKeys = Object.keys(businessInfo.hours) as Array<keyof typeof businessInfo.hours>;
  return businessInfo.hours[dayKeys[dayIndex]];
}

/**
 * Handle smooth scrolling to sections, works for both same-page and cross-page navigation
 * @param e - Mouse event from the anchor click
 * @param href - The href attribute of the anchor
 */
export function handleSectionNavigation(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
): void {
  // Handle section navigation (links starting with /#)
  if (href.startsWith('/#') && typeof window !== 'undefined') {
    const currentPath = window.location.pathname;
    const targetId = href.substring(2); // Remove /#
    
    if (currentPath === '/') {
      // Same page navigation - prevent default and scroll smoothly
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Cross-page navigation - let the browser navigate to home page
      // The browser will handle the fragment identifier automatically
      // We don't prevent default here to allow normal navigation
      
      // Optional: Add smooth scrolling after page load
      // This will work when the page loads with the hash
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure page has loaded
    }
  }
}

/**
 * Get description for a given section
 * @param section - The section identifier
 * @returns Description string for the section
 */
export function getSectionDescription(section: string): string {
  const descriptions: Record<string, string> = {
    about: "Learn about our story and commitment to excellence",
    team: "Meet our skilled and experienced nail technicians",
    testimonials: "Read what our valued customers say about us",
    faq: "Find answers to commonly asked questions",
    packages: "Discover our special service packages and deals",
  };
  return descriptions[section] ?? "";
}
