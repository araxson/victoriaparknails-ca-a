import type { ComponentPropsWithoutRef } from "react";

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SectionNavigationItem extends NavigationItem {
  section: string;
}

export interface HeaderProps {
  className?: string;
}

export interface NavigationProps {
  pathname: string;
  activeSection?: string;
}

export interface MobileNavigationProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  pathname: string;
  onClose: () => void;
}

export interface HeaderActionsProps {
  isSheetOpen: boolean;
  onSheetOpenChange: (open: boolean) => void;
  pathname: string;
  activeSection?: string;
}

export interface ScrollConfig {
  readonly threshold: number;
  readonly hideThreshold: number;
  readonly showThreshold: number;
}

export interface SocialMediaLinkProps {
  href: string;
  platform: "facebook" | "instagram" | "tiktok";
  onClose: () => void;
}
