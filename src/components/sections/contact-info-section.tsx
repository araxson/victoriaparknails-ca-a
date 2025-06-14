import { businessInfo } from "@/data/business-info";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/shadcn/data-display/card";
import { Badge } from "@/components/ui/shadcn/data-display/badge";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
} from 'lucide-react';
import { Section } from "@/components/layouts";
import { LocationMap } from "@/components/sections/location-map";

export function ContactInfoSection() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return (
    <Section className="bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-base rounded-full font-medium">
            Contact & Visit
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif leading-tight max-w-4xl mx-auto">
            Location & Hours
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find us in the heart of the city. We&apos;re here to serve you with convenient hours throughout the week and welcome any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <Card className="border bg-card">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="flex items-center gap-3 font-serif text-xl md:text-2xl">
                <MapPinIcon className="w-6 h-6 text-primary flex-shrink-0" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6 pt-0">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-base">
                  Address
                </h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {businessInfo.address.fullAddress}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-base">
                  Phone
                </h4>
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-base"
                >
                  {businessInfo.contact.phone}
                </a>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-base">
                  Email
                </h4>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-base"
                >
                  {businessInfo.contact.email}
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4 text-base">
                  Follow Us
                </h4>
                <div className="flex gap-6">
                  {businessInfo.socialMedia.facebook && (
                    <a
                      href={businessInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-6 h-6" />
                    </a>
                  )}
                  {businessInfo.socialMedia.instagram && (
                    <a
                      href={businessInfo.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border bg-card">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="flex items-center gap-3 font-serif text-xl md:text-2xl">
                <ClockIcon className="w-6 h-6 text-primary flex-shrink-0" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-4">
                {daysOfWeek.map(day => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                  >
                    <span className="font-medium text-foreground text-base">
                      {day}
                    </span>
                    <span className="text-muted-foreground text-base">
                      {businessInfo.hours[day as keyof typeof businessInfo.hours]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-base text-primary font-medium text-center">
                  Walk-ins welcome! Appointments recommended.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-serif font-semibold mb-6 text-center">Find Us</h3>
          <LocationMap className="w-full max-w-5xl mx-auto" />
        </div>
      </div>
    </Section>
  );
}
