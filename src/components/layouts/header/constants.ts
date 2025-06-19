import {
  Home,
  HandHeart,
  ImageIcon,
  Gift,
  Phone,
  Users,
  Info,
  HelpCircle,
  Star,
  Sparkles,
} from "lucide-react";
import type { NavigationItem, SectionNavigationItem, ScrollConfig } from "./types";

export const SCROLL_CONFIG: ScrollConfig = {
  threshold: 15, // Reduced for more responsive hiding
  hideThreshold: 100, // Reduced threshold for better UX
  showThreshold: 10, // Distance to scroll back up to show header
} as const;

export const navigation: readonly NavigationItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: HandHeart },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Offers", href: "/offers", icon: Gift },
  { name: "Contact", href: "/contact", icon: Phone },
] as const;

export const sectionNavigation: readonly SectionNavigationItem[] = [
  { name: "About Us", href: "/#about", icon: Info, section: "about" },
  { name: "Our Team", href: "/#team", icon: Users, section: "team" },
  { name: "Reviews", href: "/#testimonials", icon: Star, section: "testimonials" },
  { name: "FAQ", href: "/#faq", icon: HelpCircle, section: "faq" },
  { name: "Packages", href: "/#packages", icon: Sparkles, section: "packages" },
] as const;

export const sectionDescriptions: Record<string, string> = {
  about: "Learn about our story and commitment to excellence",
  team: "Meet our skilled and experienced nail technicians",
  testimonials: "Read what our valued customers say about us",
  faq: "Find answers to commonly asked questions",
  packages: "Discover our special service packages and deals",
} as const;
