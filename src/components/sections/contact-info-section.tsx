import { businessInfo } from "@/data/business-info";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
} from "lucide-react";
import { Section } from "@/components/layouts";
import { LocationMap } from "@/components/sections/location-map";
import { SectionHeader } from "@/components/layouts/section-header";

export function ContactInfoSection() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <Section variant="muted">
      <div className="container">
        <SectionHeader
          badge="Contact & Visit"
          title="Location & Hours"
          description="Find us in the heart of the city. We're here to serve you with convenient hours throughout the week and welcome any questions you might have."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPinIcon className="h-6 w-6 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Address</h4>
                <p className="text-muted-foreground">
                  {businessInfo.address.fullAddress}
                </p>
                <p className="text-sm text-green-600 font-medium">
                  ✓ Free Parking Available
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Phone</h4>{" "}
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="text-muted-foreground"
                >
                  {businessInfo.contact.phone}
                </a>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Email</h4>{" "}
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="text-muted-foreground"
                >
                  {businessInfo.contact.email}
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  {businessInfo.socialMedia.facebook && (
                    <a
                      href={businessInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="h-6 w-6" />
                    </a>
                  )}
                  {businessInfo.socialMedia.instagram && (
                    <a
                      href={businessInfo.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <ClockIcon className="h-6 w-6 text-primary" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                  >
                    <span className="font-medium text-foreground">{day}</span>
                    <span className="text-muted-foreground">
                      {
                        businessInfo.hours[
                          day as keyof typeof businessInfo.hours
                        ]
                      }
                    </span>
                  </div>
                ))}
              </div>{" "}
              {businessInfo.holidayHours && (
                <div className="rounded-lg p-4 text-center mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200 font-medium text-sm">
                    <strong>Holiday Hours:</strong> {businessInfo.holidayHours.hours}
                  </p>
                  {businessInfo.holidayHours.note && (
                    <p className="text-amber-700 dark:text-amber-300 text-xs mt-1">
                      {businessInfo.holidayHours.note}
                    </p>
                  )}
                </div>
              )}
              <div className="rounded-lg p-4 text-center mt-6 bg-muted">
                <p className="text-primary font-medium">
                  Walk-ins welcome! Appointments recommended.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Find Us</h3>
          <LocationMap className="w-full max-w-6xl mx-auto rounded-lg overflow-hidden" />
        </div>
      </div>
    </Section>
  );
}
