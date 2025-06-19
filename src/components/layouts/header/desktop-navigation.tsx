import { memo } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { navigation, sectionNavigation } from "./constants";
import { handleSectionNavigation, getSectionDescription } from "./utils";
import type { NavigationProps } from "./types";

/**
 * Desktop navigation using shadcn NavigationMenu component
 * Features main navigation and quick links dropdown for homepage sections
 */
export const DesktopNavigation = memo(function DesktopNavigation({
  pathname,
  activeSection,
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {/* Main Navigation Items */}
        {navigation.map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/50",
                )}
              >
                {item.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        
        {/* Section Navigation - Available on all pages */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Quick Links</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {sectionNavigation.map((item) => {
                const isActiveSection = pathname === "/" && activeSection === item.section;
                
                return (
                  <NavigationMenuLink
                    key={item.name}
                    asChild
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActiveSection && "bg-accent/50"
                    )}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleSectionNavigation(e, item.href);
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">
                          {item.name}
                        </div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        {getSectionDescription(item.section)}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                );
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
});
