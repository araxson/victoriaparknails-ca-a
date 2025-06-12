import * as React from "react"
import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, ExternalLink, Sparkles, Heart } from "lucide-react"

import { businessInfo } from "@/data"
import { Button } from "@/components/ui/shadcn/inputs/button"
import { Separator } from "@/components/ui/shadcn/layout/separator"
import { Badge } from "@/components/ui/shadcn/data-display/badge"

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
    { name: "Directions", href: "#" },
    { name: "Gift Cards", href: "#" },
  ],
}

export function MainFooter() {
  const currentYear = new Date().getFullYear()

  return (    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">          {/* Business Info */}
          <div className="space-y-4">            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary font-serif">
                  {businessInfo.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium font-sans">
                  {businessInfo.tagline}
                </p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              {businessInfo.description}
            </p>

            <div className="space-y-3">              <div className="flex items-center space-x-3 text-sm group">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors font-sans">
                  {businessInfo.address.fullAddress}
                </span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm group">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium font-sans"
                >
                  {businessInfo.contact.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-sm group">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-sans"
                >
                  {businessInfo.contact.email}
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a
                href={businessInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={businessInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 font-serif">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-sans"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 font-serif">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Support */}
          <div className="space-y-6">            {/* Business Hours */}
            <div className="p-4 bg-muted rounded-lg border">
              <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <Badge variant="secondary" className="text-xs">10:00 AM - 7:00 PM</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday - Sunday</span>
                  <Badge variant="secondary" className="text-xs">10:00 AM - 5:30 PM</Badge>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                      {item.name}
                      {item.href.startsWith('tel:') || item.href.startsWith('mailto:') ? (
                        <ExternalLink className="h-3 w-3 ml-1" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />        {/* Bottom Footer */}
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0 md:items-center">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} {businessInfo.name}. All rights reserved.</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
          </div>
          
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6 md:items-center">
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${businessInfo.contact.phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                Book Now
              </a>
            </Button>
            
            <div className="flex space-x-4 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>        {/* Emergency Notice */}
        <div className="mt-8 p-6 bg-muted rounded-xl border">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            <span className="font-semibold text-foreground">Walk-ins Welcome!</span> Available based on scheduling.
            <br />
            For guaranteed service, please call ahead to book your appointment.
            <br />
            <Badge variant="outline" className="mt-2 text-xs">
              Emergency repairs available during business hours
            </Badge>
          </p>
        </div>
      </div>
    </footer>
  )
}
