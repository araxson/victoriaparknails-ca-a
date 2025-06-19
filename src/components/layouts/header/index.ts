/**
 * Header Component Exports
 * 
 * This file provides a clean and organized way to import header components
 * and utilities from other parts of the application.
 */

// Main header component
export { MainHeader } from './main-header';

// Individual components
export { HeaderLogo } from './header-logo';
export { DesktopNavigation } from './desktop-navigation';
// You should decide whether to keep MobileNavigation in header-actions.tsx or in its own file
// Uncomment the line below if you keep it in its own file
// export { MobileNavigation } from './mobile-navigation';
export { HeaderActions } from './header-actions';

// Hooks and utilities
export { useScrollBehavior } from './hooks';
export { 
  getTodayHours, 
  handleSectionNavigation, 
  getSectionDescription 
} from './utils';

// Constants and types
export { 
  SCROLL_CONFIG, 
  navigation, 
  sectionNavigation, 
  sectionDescriptions 
} from './constants';
export type { 
  NavigationItem, 
  SectionNavigationItem, 
  HeaderProps, 
  NavigationProps, 
  MobileNavigationProps,
  HeaderActionsProps,
  SocialMediaLinkProps,
  ScrollConfig 
} from './types';
