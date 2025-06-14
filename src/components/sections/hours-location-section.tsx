import { businessInfo } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon, ExternalLinkIcon } from 'lucide-react';
import { Section } from '@/components/layouts';

export function HoursLocationSection() {
  const today = new Date()
  const todayName = today.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
  const todayHours = businessInfo.hours[todayName as keyof typeof businessInfo.hours];

  return (
    <Section className="py-16 sm:py-20 md:py-28 lg:py-36 xl:py-44 bg-gradient-to-br from-accent/20 to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-lg font-medium">
            Visit Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 font-serif max-w-5xl mx-auto">
            Our Hours & Location
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Find us in the heart of Calgary. We&apos;re here to serve you with convenient hours
            throughout the week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Location Card */}
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center p-6 sm:p-8 lg:p-10">
              <div className="mx-auto w-16 h-16 sm:w-18 sm:h-18 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MapPinIcon className="h-8 w-8 sm:h-9 sm:w-9 text-primary" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-serif">Our Location</CardTitle>
              <CardDescription className="text-lg sm:text-xl">
                Easy to find with plenty of parking available
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6 p-6 sm:p-8 lg:p-10">
              <div className="space-y-3">
                <p className="text-lg sm:text-xl font-medium text-card-foreground">
                  {businessInfo.name}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {businessInfo.address.fullAddress}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <div className="flex items-center justify-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={`tel:${businessInfo.contact.phone}`}
                    className="text-lg text-primary hover:text-primary/80 font-medium"
                  >
                    {businessInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MailIcon className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={`mailto:${businessInfo.contact.email}`}
                    className="text-lg text-primary hover:text-primary/80"
                  >
                    {businessInfo.contact.email}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <ExternalLinkIcon className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={businessInfo.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-primary hover:text-primary/80"
                  >
                    {businessInfo.contact.website}
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full bg-primary text-primary-foreground py-4 px-8 rounded-lg font-medium hover:bg-primary/90 dark:hover:bg-primary/95 transition-colors shadow-sm text-lg">
                  Get Directions
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center p-6 sm:p-8 lg:p-10">
              <div className="mx-auto w-16 h-16 sm:w-18 sm:h-18 bg-accent/30 rounded-full flex items-center justify-center mb-6">
                <ClockIcon className="h-8 w-8 sm:h-9 sm:w-9 text-primary" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-serif">Opening Hours</CardTitle>
              <CardDescription className="text-lg sm:text-xl">
                We&apos;re open 7 days a week for your convenience
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 lg:p-10">
              {/* Today's Hours Highlight */}
              <div className="mb-8 p-6 bg-accent/40 rounded-lg border border-accent">
                <div className="text-center">
                  <p className="text-sm font-medium text-accent-foreground mb-2">Today ({todayName.charAt(0).toUpperCase() + todayName.slice(1)})</p>
                  <p className="text-lg font-bold text-accent-foreground">
                    {todayHours || 'Closed'}
                  </p>
                </div>
              </div>

              {/* Weekly Hours */}
              <div className="space-y-4">
                {Object.entries(businessInfo.hours).map(([day, hours]) => (
                  <div
                    key={day}
                    className={`flex justify-between items-center p-4 rounded-lg transition-colors ${
                      day.toLowerCase() === todayName
                        ? 'bg-primary/10 border border-primary/20'
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <span className={`text-lg capitalize ${
                      day.toLowerCase() === todayName ? 'font-semibold text-primary' : 'text-muted-foreground'
                    }`}>
                      {day}
                    </span>
                    <span className={`text-lg ${
                      day.toLowerCase() === todayName ? 'font-semibold text-primary' : 'text-foreground'
                    }`}>
                      {hours || 'Closed'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-base text-muted-foreground mb-4">
                    Ready to book your appointment?
                  </p>
                  <button className="w-full bg-secondary text-secondary-foreground py-4 px-8 rounded-lg font-medium hover:bg-secondary/90 transition-colors shadow-sm text-lg">
                    Call Now: {businessInfo.contact.phone}
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
