// Business constants to eliminate string duplication
export const BUSINESS_CONSTANTS = {
  name: {
    full: "Victoria Park Nails and Spa",
    short: "Victoria Park Nails",
    display: "Victoria Park Nails & Spa",
  },
  alt: {
    prefix: "Victoria Park Nails",
    fallback: (index: number) => `Victoria Park Nails gallery image ${index + 1}`,
  },
  seo: {
    suffix: "Calgary",
    tagline: "Calgary's Premier Nail Salon",
  },
} as const;

// Animation constants
export const ANIMATION_CONSTANTS = {
  transitions: {
    default: "transition-all duration-300",
    hover: "transition-all duration-300 transform hover:scale-[1.02]",
    opacity: "transition-opacity duration-300",
  },
  timing: {
    short: 300,
    medium: 500,
    long: 1000,
  },
} as const;

// Layout constants
export const LAYOUT_CONSTANTS = {
  container: "container mx-auto px-4",
  section: "py-16",
  grid: {
    default: "gap-4 sm:gap-6 md:gap-8",
    tight: "gap-2 sm:gap-3 md:gap-4",
  },
} as const; 