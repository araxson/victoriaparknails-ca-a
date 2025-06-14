"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Sparkles, Heart } from "lucide-react";
import { businessInfo } from "@/data";
import { Button } from "@/components/ui/shadcn/inputs/button";
import { Separator } from "@/components/ui/shadcn/layout/separator";
import { LocationMap } from "@/components/sections/location-map";

const footerNavigation = {
  services: [
    { name: "Manicures", href: "/services#manicures" },
    { name: "Pedicures", href: "/services#pedicures" },
    { name: "Nail Art", href: "/services#nail-art" },
    { name: "Spa Services", href: "/services#spa-services" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Promotions", href: "/promotions" },
    { name: "FAQ", href: "/faq" },
  ],
  support: [
    { name: "Book Appointment", href: `tel:${businessInfo.contact.phone}` },
    { name: "Contact Us", href: `mailto:${businessInfo.contact.email}` },
    { name: "Directions", href: "https://maps.app.goo.gl/Bybt5QQfCJKHycm86" },
    { name: "Gift Cards", href: "#" },
  ],
}

export function MainFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Business Info */}
          <div className="space-y-6 lg:col-span-1 md:col-span-2">
            <div className="flex flex-col items-center">
              <div className="relative w-auto h-auto mb-4">
                <Image 
                  src="/Victoria_Park_Nails_Spa_Logo_Primary_small.png" 
                  alt={businessInfo.name}
                  width={200}
                  height={86}
                  className="object-contain dark:invert"
                />
              </div>
              <div className="text-center lg:text-right">
                <h2 className="text-2xl font-bold text-foreground font-serif">
                  {businessInfo.name}
                </h2>
                <p className="text-sm text-muted-foreground font-sans">
                  {businessInfo.tagline}
                </p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              {businessInfo.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/Bybt5QQfCJKHycm86" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground group-hover:text-primary transition-colors"
                >
                  {businessInfo.address.fullAddress}
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <Link
                  href={`tel:${businessInfo.contact.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {businessInfo.contact.phone}
                </Link>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <Link
                  href={`mailto:${businessInfo.contact.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {businessInfo.contact.email}
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a
                href={businessInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/90 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={businessInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/90 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4 font-serif">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4 font-serif">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Support */}
          <div className="space-y-8 lg:col-span-1">
            {/* Business Hours */}
            <div className="p-5 bg-card rounded-xl border">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2.5 text-primary" />
                Business Hours
              </h4>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Mon - Fri</span>
                  <span className="text-foreground font-medium">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sat - Sun</span>
                  <span className="text-foreground font-medium">10:00 AM - 5:30 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 font-serif">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <LocationMap className="mt-10" />

        <Separator className="my-8 sm:my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <span>© {currentYear} {businessInfo.name}. All rights reserved.</span>
          </div>
        </div>

        {/* Health & Safety Notice */}
        <div className="mt-8 p-6 bg-card rounded-xl border">
          <div className="flex items-start space-x-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10 flex-shrink-0">
              <Heart className="h-5 w-5 text-destructive" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-card-foreground mb-1.5">
                Health & Safety First
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We maintain the highest standards of cleanliness and follow all health protocols 
                to ensure your safety and comfort during your visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
