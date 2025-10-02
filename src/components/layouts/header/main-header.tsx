"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useScrollBehavior } from "./hooks";
import { HeaderLogo } from "./header-logo";
import { DesktopNavigation } from "./desktop-navigation";
import { HeaderActions } from "./header-actions";
import { sectionNavigation } from "./constants";
import type { HeaderProps } from "./types";

/**
 * Main header component with sticky behavior and responsive design
 * Features scroll-based hide/show behavior and section tracking
 */
export function MainHeader({ className }: HeaderProps = {}) {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { isScrolled, isHidden } = useScrollBehavior();
  
  // Track active section for scroll spy on homepage
  const sectionIds = sectionNavigation.map(item => item.section);
  const activeSection = useScrollSpy(sectionIds, 120);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        "border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent",
        // Hide/show header based on scroll direction
        isHidden ? "-translate-y-full" : "translate-y-0",
        className
      )}
    >      <div className="w-full lg:max-w-[90%] lg:mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <HeaderLogo />
        
        <DesktopNavigation 
          pathname={pathname} 
          activeSection={activeSection} 
        />
        
        <HeaderActions
          isSheetOpen={isSheetOpen}
          onSheetOpenChange={setIsSheetOpen}
          pathname={pathname}
          activeSection={activeSection}
        />
      </div>
    </header>
  );
}