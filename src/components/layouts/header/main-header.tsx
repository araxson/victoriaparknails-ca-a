"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { businessInfo } from "@/data";
import { Button } from "@/components/ui/shadcn/inputs/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/shadcn/overlays/dropdown-menu";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import { ChevronDown, Menu, Phone, Clock } from "@/lib/icons";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "All Services", href: "/services" },
      { name: "Manicures", href: "/services#manicures" },
      { name: "Pedicures", href: "/services#pedicures" },
      { name: "Nail Art", href: "/services#nail-art" },
      { name: "Spa Services", href: "/services#spa" },
    ]
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Promotions", href: "/promotions" },
  { name: "FAQ", href: "/faq" },
];

export function MainHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">          {/* Logo */}          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center rounded-xl transition-all duration-200 p-1">
                  <Image
                    src="/Victoria_Park_Nails_Spa_Logo_Primary_small.png"
                    alt="Victoria Park Nails & Spa"
                    height={32}
                    width={100}
                    className="object-contain h-8 w-auto"
                  />
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-xl font-bold text-foreground tracking-tight font-serif">
                    {businessInfo.name.split(' ').slice(0, 2).join(' ')}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium font-sans">
                    {businessInfo.tagline}
                  </span>
                </div>
              </div>
            </Link>
          </div>          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.hasDropdown ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 font-sans",
                              pathname.startsWith(item.href) && "bg-accent text-accent-foreground"
                            )}
                          >
                            {item.name}
                            <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <DropdownMenuItem key={dropdownItem.name} asChild>
                              <Link
                                href={dropdownItem.href}
                                className="w-full cursor-pointer"
                              >
                                {dropdownItem.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 font-sans",
                            pathname === item.href && "bg-accent text-accent-foreground"
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Contact Info (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">{businessInfo.contact.phone}</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Open Today 10AM-7PM</span>
              </div>
            </div>

            {/* Book Now Button (Desktop) */}
            <Button className="hidden md:flex shadow-sm" asChild>
              <a href={`tel:${businessInfo.contact.phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                Book Now
              </a>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="md:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <DropdownMenuItem asChild>
                          <Link href={item.href} className="w-full cursor-pointer font-medium">
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                        {item.dropdownItems?.map((dropdownItem) => (
                          <DropdownMenuItem key={dropdownItem.name} asChild>
                            <Link href={dropdownItem.href} className="w-full cursor-pointer pl-6 text-sm">
                              {dropdownItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </>
                    ) : (
                      <DropdownMenuItem asChild>
                        <Link href={item.href} className="w-full cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </div>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href={`tel:${businessInfo.contact.phone}`} className="w-full cursor-pointer">
                    <Phone className="h-4 w-4 mr-2" />
                    Call {businessInfo.contact.phone}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
