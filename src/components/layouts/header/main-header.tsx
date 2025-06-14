"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { businessInfo } from "@/data";
import { Button } from "@/components/ui/shadcn/inputs/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/shadcn/overlays/sheet";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import { Menu, Phone, Clock, Home, HandHeart, ImageIcon } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: HandHeart },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Contact", href: "/contact", icon: Phone },

];

export function MainHeader() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);
  const scrollThreshold = 20; // Minimum scroll difference to trigger direction change
  const scrollHideThreshold = 150; // Minimum scroll position to consider hiding header

  React.useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY.current;
          
          // Update background state based on scroll position
          setIsScrolled(currentScrollY > 10);
          
          // Update hidden state based on scroll direction and position
          if (currentScrollY > scrollHideThreshold) {
            if (scrollDifference > scrollThreshold) {
              // Scrolling down - hide header
              setIsHidden(true);
            } else if (scrollDifference < -scrollThreshold/2) {
              // Scrolling up - show header
              setIsHidden(false);
            }
          } else {
            // Always show header near the top of the page
            setIsHidden(false);
          }
          
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "border-b bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-16 w-28">
            <Image
              src="/Victoria_Park_Nails_Spa_Logo_Primary_small.png"
              alt="Victoria Park Nails and Spa Logo"
              fill
              className="object-contain dark:invert"
              sizes="(max-width: 768px) 20vw, (max-width: 1200px) 15vw, 10vw"
            />
          </div>
          <div className="hidden flex-col lg:flex">
            <span className="text-xl font-bold tracking-tight text-foreground font-serif">
              {businessInfo.name.split(" ").slice(0, 4).join(" ")}
            </span>
            <span className="text-sm text-muted-foreground">
              {businessInfo.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center space-x-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden lg:flex px-4 py-2 h-auto" asChild>
            <a href={businessInfo.contact.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden">
                <Menu className="hover:bg-secondary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm p-0 overflow-y-auto">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="border-b p-6 bg-secondary/30">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold font-serif">
                      {businessInfo.name.split(" ").slice(0, 4).join(" ")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {businessInfo.tagline}
                    </span>
                  </div>
                </div>
                <nav className="flex-1 p-0">
                  <div className="py-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-center px-6 py-4 text-base font-medium transition-all",
                          pathname === item.href
                            ? "bg-accent text-accent-foreground border-l-4 border-primary"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                        )}
                      >
                        {item.icon && <item.icon className="mr-3 h-5 w-5" />}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
                <div className="mt-auto border-t">
                  <div className="p-6 space-y-6">
                    <Button className="w-full h-auto py-3 text-base font-medium shadow-sm" asChild>
                      <a href={businessInfo.contact.bookingUrl} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                    <div className="grid gap-4 text-sm">
                      <a
                        href={`tel:${businessInfo.contact.phone}`}
                        className="flex items-center space-x-4 p-3 rounded-md transition-colors bg-secondary/50 hover:bg-secondary hover:text-foreground"
                      >
                        <Phone className="h-5 w-5" />
                        <span>{businessInfo.contact.phone}</span>
                      </a>
                      <div className="flex items-center space-x-4 p-3 rounded-md bg-secondary/50">
                        <Clock className="h-5 w-5" />
                        <div className="flex flex-col">
                          <span className="font-medium">Open Today</span>
                          <span className="text-xs text-muted-foreground">
                            {businessInfo.hours[Object.keys(businessInfo.hours)[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]]}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-center space-x-6 pt-2">
                        {businessInfo.socialMedia.facebook && (
                          <a 
                            href={businessInfo.socialMedia.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                        {businessInfo.socialMedia.instagram && (
                          <a 
                            href={businessInfo.socialMedia.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                        {businessInfo.socialMedia.tiktok && (
                          <a 
                            href={businessInfo.socialMedia.tiktok} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M9 4.5a5 5 0 0 1 10 0v4.25a.75.75 0 0 1-1.5 0V4.5a3.5 3.5 0 1 0-7 0v11a3.5 3.5 0 1 0 7 0V11a.75.75 0 0 1 1.5 0v4.5a5 5 0 0 1-10 0v-11Z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}