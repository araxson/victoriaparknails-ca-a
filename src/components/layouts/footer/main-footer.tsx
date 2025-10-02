"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Heart,
} from "lucide-react";
import { businessInfo } from "@/data";
import { Separator, Card, CardContent, Button, Image } from "@/components/ui";
import { LocationMap } from "@/components/sections/location-map";

const footerNavigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Offers", href: "/offers" },
  ],
  support: [
    { name: "Book Appointment", href: `tel:${businessInfo.contact.phone}` },
    { name: "Contact Us", href: `mailto:${businessInfo.contact.email}` },
    { name: "Directions", href: "https://maps.app.goo.gl/Bybt5QQfCJKHycm86" },
  ],
};

export function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer border-t bg-gradient-to-b from-muted/20 pt-6 pb-12 to-muted/40">
      <div className="container py-12 lg:py-16">
        {/* Hero Section - Centered Business Info */}
        <div className="text-center space-y-6 mb-12 lg:mb-16">
          <div className="flex justify-center mb-4 lg:mb-6">
            <Link href="/" className="inline-block">
              <Image
                src="/Victoria_Park_Nails_Spa_Logo_Primary_small.png"
                alt={businessInfo.name}
                width={200}
                height={85}
                className="object-contain dark:invert transition-transform hover:scale-105"
              />
            </Link>
          </div>

          <div className="max-w-2xl mx-auto space-y-3 lg:space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              {businessInfo.name}
            </h2>
            <p className="text-lg lg:text-xl text-primary font-medium">
              {businessInfo.tagline}
            </p>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              {businessInfo.description}
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-3 lg:gap-4 pt-4 lg:pt-6">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a
                href={businessInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a
                href={businessInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Quick Links Card */}
          <Card className="border bg-card/60 backdrop-blur-sm transition-colors">
            <CardContent>
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-lg ml-3">Quick Links</h4>
              </div>
              <div className="space-y-2">
                {footerNavigation.company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center w-full text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-muted/50 group"
                  >
                    <span className="text-sm font-medium group-hover:font-semibold transition-all">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Get In Touch Card */}
          <Card className="border bg-card/60 backdrop-blur-sm transition-colors">
            <CardContent>
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-lg ml-3">Get In Touch</h4>
              </div>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start h-auto py-3 px-0 hover:bg-primary/10 hover:text-primary transition-colors group"
                  asChild
                >
                  <a href={`tel:${businessInfo.contact.phone}`} className="flex items-center w-full px-3 py-2 rounded-md">
                    <Phone className="h-4 w-4 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-medium text-sm">Call Us</div>
                      <div className="text-xs text-muted-foreground group-hover:text-primary/80">
                        {businessInfo.contact.phone}
                      </div>
                    </div>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start h-auto py-3 px-0 hover:bg-primary/10 hover:text-primary transition-colors group"
                  asChild
                >
                  <a href={`mailto:${businessInfo.contact.email}`} className="flex items-center w-full px-3 py-2 rounded-md">
                    <Mail className="h-4 w-4 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-medium text-sm">Email Us</div>
                      <div className="text-xs text-muted-foreground group-hover:text-primary/80">
                        {businessInfo.contact.email}
                      </div>
                    </div>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start h-auto py-3 px-0 hover:bg-primary/10 hover:text-primary transition-colors group"
                  asChild
                >
                  <a
                    href="https://maps.app.goo.gl/Bybt5QQfCJKHycm86"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full px-3 py-2 rounded-md"
                  >
                    <MapPin className="h-4 w-4 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-medium text-sm">Visit Us</div>
                      <div className="text-xs text-muted-foreground group-hover:text-primary/80">
                        {businessInfo.address.fullAddress}
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        ✓ Free Parking
                      </div>
                    </div>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours Card */}
          <Card className="border bg-card/60 backdrop-blur-sm transition-colors md:col-span-2 xl:col-span-1">
            <CardContent>
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-lg ml-3">Business Hours</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 px-4 rounded-lg bg-muted/40 border border-muted">
                  <span className="text-muted-foreground font-medium text-sm">
                    Monday - Friday
                  </span>
                  <span className="font-semibold text-sm text-primary">{businessInfo.hours.monday}</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 rounded-lg bg-muted/40 border border-muted">
                  <span className="text-muted-foreground font-medium text-sm">
                    Saturday - Sunday
                  </span>
                  <span className="font-semibold text-sm text-primary">{businessInfo.hours.saturday}</span>
                </div>
                {businessInfo.holidayHours && (
                  <div className="flex justify-between items-center py-3 px-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                    <span className="text-amber-800 dark:text-amber-200 font-medium text-sm">
                      Holiday Hours
                    </span>
                    <span className="font-semibold text-sm text-amber-800 dark:text-amber-200">{businessInfo.holidayHours.hours}</span>
                  </div>
                )}
                <div className="pt-4 border-t border-muted">
                  <Button className="w-full transition-colors" size="lg" asChild>
                    <a
                      href={businessInfo.contact.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Appointment Online
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Map */}
        <div className="mt-12 lg:mt-16">
          <h3 className="text-xl lg:text-2xl font-bold text-center mb-6 lg:mb-8">Find Us</h3>
          <LocationMap className="overflow-hidden" />
        </div>

        <Separator className="my-8 lg:my-12" />

        {/* Health & Safety Notice */}
        <Card className="mb-6 lg:mb-8 border-primary/20 bg-primary/5">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                <Shield className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base lg:text-lg">Health & Safety First</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  We maintain the highest standards of cleanliness and follow
                  all health protocols to ensure your safety and comfort during
                  your visit. All tools are properly sterilized and our facility
                  is regularly sanitized.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Bar */}
        <div className="text-center space-y-3 lg:space-y-4">
          <div className="text-xs lg:text-sm text-muted-foreground">
            <span>
              © {currentYear} {businessInfo.name}. All rights reserved.
            </span>
          </div>
          <div className="text-xs text-muted-foreground">
            <span>
              Website crafted with{" "}
              <Heart className="inline h-3 w-3 mx-1 text-red-500" /> by{" "}
              <a
                href="https://zss.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                ZSS.ca
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
