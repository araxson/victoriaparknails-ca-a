import { businessInfo } from "@/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui";
import { Button } from "@/components/ui";
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";

export function ContactSection() {
  const today = new Date();
  const todayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const todayKey = todayName.toLowerCase();

  return (
    <Section variant="muted">
      <div className="container">
        <SectionHeader
          badge="Contact Information"
          title="Hours & Location"
          description="Find us in the heart of Calgary with convenient hours seven days a week."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Location Card */}
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-muted">
                <MapPinIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Location</CardTitle>
              <CardDescription>
                Easy to find with free parking available
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-2">
                <p className="font-semibold">{businessInfo.name}</p>
                <p className="text-muted-foreground">
                  {businessInfo.address.street}
                </p>
                <p className="text-muted-foreground">
                  {businessInfo.address.city}, {businessInfo.address.province}{" "}
                  {businessInfo.address.postalCode}
                </p>
                <p className="text-sm text-green-600 font-medium">
                  ✓ Free Parking Available
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center justify-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-primary" />{" "}
                  <a
                    href={`tel:${businessInfo.contact.phone}`}
                    className="text-primary"
                  >
                    {businessInfo.contact.phone}
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <MailIcon className="h-4 w-4 text-primary" />{" "}
                  <a
                    href={`mailto:${businessInfo.contact.email}`}
                    className="text-primary"
                  >
                    {businessInfo.contact.email}
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild size="lg" className="w-full">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.address.fullAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-muted">
                <ClockIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>
                Open seven days a week for your convenience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableBody>
                    {Object.entries(businessInfo.hours).map(([day, hours]) => {
                      const isToday = day === todayKey;
                      const dayName =
                        day.charAt(0).toUpperCase() + day.slice(1);

                      let rowClasses = "";
                      if (isToday) {
                        rowClasses = "bg-muted";
                      }

                      return (
                        <TableRow key={day} className={rowClasses}>
                          <TableCell className="font-medium py-3">
                            <span
                              className={
                                isToday ? "text-primary font-semibold" : ""
                              }
                            >
                              {dayName}
                              {isToday && (
                                <span className="ml-2 text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground">
                                  Today
                                </span>
                              )}
                            </span>
                          </TableCell>
                          <TableCell className="text-right py-3">
                            <span
                              className={
                                isToday
                                  ? "text-primary font-semibold"
                                  : "text-muted-foreground"
                              }
                            >
                              {hours}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              {businessInfo.holidayHours && (
                <div className="mt-4 p-4 bg-muted border border-border rounded-lg">
                  <p className="text-foreground text-sm text-center font-medium">
                    <strong>Holiday Hours:</strong> {businessInfo.holidayHours.hours}
                  </p>
                  {businessInfo.holidayHours.note && (
                    <p className="text-muted-foreground text-xs text-center mt-1">
                      {businessInfo.holidayHours.note}
                    </p>
                  )}
                </div>
              )}

              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Note:</strong> We recommend calling ahead to confirm
                  availability and book your preferred time slot.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
