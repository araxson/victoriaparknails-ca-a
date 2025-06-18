"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { businessInfo } from "@/data";
import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  Image,
} from "@/components/ui";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import {
  Menu,
  Phone,
  Clock,
  Home,
  HandHeart,
  ImageIcon,
  Gift,
  Facebook,
  Instagram,
} from "lucide-react";
import { TikTokIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

// Utility function to get today's business hours
const getTodayHours = () => {
  const today = new Date();
  const dayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1; // Convert Sunday (0) to Saturday (6)
  const dayKeys = Object.keys(businessInfo.hours);
  return businessInfo.hours[
    dayKeys[dayIndex] as keyof typeof businessInfo.hours
  ];
};

const SCROLL_CONFIG = {
  threshold: 15, // Reduced for more responsive hiding
  hideThreshold: 100, // Reduced threshold for better UX
  showThreshold: 10, // Distance to scroll back up to show header
} as const;

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: HandHeart },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Offers", href: "/offers", icon: Gift },
  { name: "Contact", href: "/contact", icon: Phone },
] as const;

export function MainHeader() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const { isScrolled, isHidden } = useScrollBehavior();

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        "transform-gpu border-b isolate", // Added isolate to create a stacking context
        isScrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent",
        // Hide/show header based on scroll direction
        isHidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <HeaderLogo />
        <DesktopNavigation pathname={pathname} />
        <HeaderActions
          isSheetOpen={isSheetOpen}
          onSheetOpenChange={setIsSheetOpen}
          pathname={pathname}
        />
      </div>
    </header>
  );
}

function useScrollBehavior() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);
  const ticking = React.useRef(false);

  React.useEffect(() => {
    const handleScroll = () => {
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
    };

    // Throttle scroll events for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled, isHidden };
}

const HeaderLogo = React.memo(function HeaderLogo() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 transition-opacity hover:opacity-80"
      aria-label="Victoria Park Nails and Spa - Home"
    >
      <div className="relative h-[43px] w-[100px]">
        <Image
          src="/Victoria_Park_Nails_Spa_Logo_Primary_small.png"
          alt="Victoria Park Nails and Spa Logo"
          fill
          className="object-contain dark:invert"
          sizes="100px"
          priority
        />
      </div>

      <div className="hidden flex-col justify-center lg:flex">
        <h1 className="font-semibold text-foreground text-lg leading-tight">
          {businessInfo.name}
        </h1>
        <span className="text-sm text-muted-foreground leading-tight">
          {businessInfo.tagline}
        </span>
      </div>
    </Link>
  );
});

const DesktopNavigation = React.memo(function DesktopNavigation({
  pathname,
}: {
  pathname: string;
}) {
  return (
    <nav
      className="hidden items-center space-x-1 lg:flex"
      role="navigation"
      aria-label="Main navigation"
    >
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/50",
            pathname === item.href
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
});

function HeaderActions({
  isSheetOpen,
  onSheetOpenChange,
  pathname,
}: {
  isSheetOpen: boolean;
  onSheetOpenChange: (open: boolean) => void;
  pathname: string;
}) {
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
      />
    </div>
  );
}

function MobileNavigation({
  isOpen,
  onOpenChange,
  pathname,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  pathname: string;
}) {
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
      </SheetTrigger>

      <SheetContent side="right" className="w-80">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        <div className="flex h-full flex-col">
          <MobileMenuHeader />
          <MobileMenuNavigation pathname={pathname} />
          <MobileMenuFooter />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileMenuHeader() {
  return (
    <div className="border-b p-4">
      <div className="space-y-1">
        <h2 className="font-semibold text-lg">{businessInfo.name}</h2>
        <p className="text-sm text-muted-foreground">{businessInfo.tagline}</p>
      </div>
    </div>
  );
}

function MobileMenuNavigation({ pathname }: { pathname: string }) {
  return (
    <nav
      className="flex-1 py-4"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-3 text-sm font-medium transition-colors rounded-md mx-2",
              pathname === item.href
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
            )}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.icon && <item.icon className="mr-3 h-4 w-4" />}
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function MobileMenuFooter() {
  const todayHours = getTodayHours();

  return (
    <div className="border-t p-4 space-y-4">
      <Button size="lg" className="w-full" asChild>
        <a
          href={businessInfo.contact.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book appointment online"
        >
          Book Appointment Online
        </a>
      </Button>

      <div className="space-y-2">
        <a
          href={`tel:${businessInfo.contact.phone}`}
          className="flex items-center space-x-2 p-2 rounded-md bg-secondary transition-colors hover:bg-secondary/80"
          aria-label={`Call ${businessInfo.contact.phone}`}
        >
          <Phone className="h-4 w-4" />
          <span className="text-sm">{businessInfo.contact.phone}</span>
        </a>

        <div className="flex items-center space-x-2 p-2 rounded-md bg-secondary">
          <Clock className="h-4 w-4" />
          <div>
            <div className="text-sm font-medium">Open Today</div>
            <div className="text-xs text-muted-foreground">{todayHours}</div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 pt-2">
          {businessInfo.socialMedia.facebook && (
            <SocialMediaLink
              href={businessInfo.socialMedia.facebook}
              platform="facebook"
            />
          )}
          {businessInfo.socialMedia.instagram && (
            <SocialMediaLink
              href={businessInfo.socialMedia.instagram}
              platform="instagram"
            />
          )}
          {businessInfo.socialMedia.tiktok && (
            <SocialMediaLink
              href={businessInfo.socialMedia.tiktok}
              platform="tiktok"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function SocialMediaLink({
  href,
  platform,
}: {
  href: string;
  platform: "facebook" | "instagram" | "tiktok";
}) {
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
    >
      {icons[platform]}
    </a>
  );
}
