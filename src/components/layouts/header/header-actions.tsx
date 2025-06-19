import { memo } from "react";
import Link from "next/link";
import { businessInfo } from "@/data";
import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import { 
  Menu, 
  Phone, 
  Clock, 
  Facebook, 
  Instagram, 
  ArrowRight 
} from "lucide-react";
import { TikTokIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { navigation, sectionNavigation } from "./constants";
import { handleSectionNavigation, getTodayHours } from "./utils";
import type { 
  HeaderActionsProps, 
  MobileNavigationProps, 
  SocialMediaLinkProps 
} from "./types";

/**
 * Mobile navigation component with slide-out menu
 */
function MobileNavigation({
  isOpen,
  onOpenChange,
  pathname,
  onClose,
}: MobileNavigationProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>      <SheetContent side="right" className="w-80 sm:w-96 p-0">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        <div className="flex h-full flex-col">
          <MobileMenuHeader />
          <MobileMenuNavigation pathname={pathname} onClose={onClose} />
          <MobileMenuFooter onClose={onClose} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

/**
 * Mobile menu header with business info
 */
function MobileMenuHeader() {
  return (
    <div className="border-b px-4 py-2">
      <div>
        <h2 className="font-semibold text-sm">{businessInfo.name}</h2>
        <p className="text-xs text-muted-foreground">{businessInfo.tagline}</p>
      </div>
    </div>
  );
}

/**
 * Mobile menu navigation links
 */
function MobileMenuNavigation({ 
  pathname, 
  onClose 
}: { 
  pathname: string; 
  onClose: () => void; 
}) {  return (
    <nav className="flex-1 py-2" role="navigation" aria-label="Mobile navigation">
      <div className="space-y-3">
        {/* Primary Navigation */}
        <div>
          <h3 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Main Pages
          </h3>
          <div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md mx-2",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                )}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={onClose}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Secondary Navigation - Sections */}
        <div>
          <h3 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Quick Links
          </h3>
          <div>
            {sectionNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md mx-2",
                  "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                )}
                onClick={(e) => {
                  handleSectionNavigation(e, item.href);
                  onClose();
                }}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>        {/* Book Online Action */}
        <div className="mx-2">
          <Link
            href={businessInfo.contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={onClose}
          >
            <ArrowRight className="mr-3 h-4 w-4" />
            Book Online
          </Link>
        </div>
      </div>
    </nav>
  );
}

/**
 * Mobile menu footer with contact info and social links
 */
function MobileMenuFooter({ onClose }: { onClose: () => void }) {
  const todayHours = getTodayHours();
  return (
    <div className="border-t px-4 py-4 space-y-3">
      {/* Business Info */}
      <div className="space-y-3">        {/* Phone Number - Button matching Book Online styling */}
        <div className="mx-2">
          <a
            href={`tel:${businessInfo.contact.phone}`}
            aria-label={`Call ${businessInfo.contact.phone}`}
            onClick={onClose}
            className="flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md bg-primary text-primary-foreground hover:bg-primary/90 w-full"
          >
            <Phone className="mr-3 h-4 w-4" />
            {businessInfo.contact.phone}
          </a>
        </div>        <div className="flex items-center space-x-2 p-3 rounded-md bg-secondary/50 text-sm mx-2">
          <Clock className="h-4 w-4" />
          <div>
            <div className="text-sm font-medium">Open Today</div>
            <div className="text-xs text-muted-foreground">{todayHours}</div>
          </div>
        </div>
      </div>      {/* Social Media */}
      <div className="flex justify-center space-x-4 pt-2">
        {businessInfo.socialMedia.facebook && (
          <SocialMediaLink
            href={businessInfo.socialMedia.facebook}
            platform="facebook"
            onClose={onClose}
          />
        )}
        {businessInfo.socialMedia.instagram && (
          <SocialMediaLink
            href={businessInfo.socialMedia.instagram}
            platform="instagram"
            onClose={onClose}
          />
        )}
        {businessInfo.socialMedia.tiktok && (
          <SocialMediaLink
            href={businessInfo.socialMedia.tiktok}
            platform="tiktok"
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}

/**
 * Social media link component
 */
function SocialMediaLink({ href, platform, onClose }: SocialMediaLinkProps) {
  const icons = {
    facebook: <Facebook className="h-4 w-4" />,
    instagram: <Instagram className="h-4 w-4" />,
    tiktok: <TikTokIcon className="h-4 w-4" />,
  };

  const platformLabels = {
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground transition-colors hover:text-foreground"
      aria-label={`Follow us on ${platformLabels[platform]}`}
      onClick={onClose}
    >
      {icons[platform]}
    </a>
  );
}

/**
 * Header actions including book appointment button, theme toggle, and mobile menu
 */
export const HeaderActions = memo(function HeaderActions({
  isSheetOpen,
  onSheetOpenChange,
  pathname,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button size="lg" asChild className="hidden sm:inline-flex">
        <a
          href={businessInfo.contact.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book appointment online"
        >
          Book Appointment Online
        </a>
      </Button>

      <ThemeToggle />
      
      <MobileNavigation
        isOpen={isSheetOpen}
        onOpenChange={onSheetOpenChange}
        pathname={pathname}
        onClose={() => onSheetOpenChange(false)}
      />
    </div>
  );
});
