import { BUSINESS_CONSTANTS, ANIMATION_CONSTANTS } from "./constants";

// Centralized gallery configuration to eliminate redundancy
export const GRID_COLUMN_CONFIGS = {
  2: { grid: "grid-cols-3 sm:grid-cols-2", sizes: "(max-width: 640px) 33.33vw, 50vw" },
  3: { grid: "grid-cols-3", sizes: "33.33vw" },
  4: { grid: "grid-cols-3 sm:grid-cols-3 md:grid-cols-4", sizes: "(max-width: 768px) 33.33vw, 25vw" },
  5: { grid: "grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", sizes: "(max-width: 640px) 33.33vw, (max-width: 768px) 33.33vw, (max-width: 1024px) 25vw, 20vw" },
  6: { grid: "grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6", sizes: "(max-width: 640px) 33.33vw, (max-width: 768px) 33.33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16.66vw" },
} as const;

export const MASONRY_GRID = "columns-3 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4";

export const GALLERY_ANIMATION_CLASSES = {
  hover: ANIMATION_CONSTANTS.transitions.hover,
  hoverOverlay: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300",
  hoverIcon: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0",
  iconContainer: "bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30",
} as const;

export const getGridConfig = (columns: keyof typeof GRID_COLUMN_CONFIGS) => 
  GRID_COLUMN_CONFIGS[columns] || GRID_COLUMN_CONFIGS[6];

export const getImageAlt = (alt: string | undefined, index: number): string => 
  alt || BUSINESS_CONSTANTS.alt.fallback(index); 