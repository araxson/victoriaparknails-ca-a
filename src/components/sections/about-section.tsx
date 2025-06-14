import { businessInfo } from '@/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { MapPinIcon, PhoneIcon, ClockIcon, CalendarIcon } from 'lucide-react';
import { Section } from '@/components/layouts';
import { AnimatedDetail, AnimatedList } from '@/components/ui/animated-elements';

export function AboutSection() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - parseInt(businessInfo.founded);
  return (
    <Section className="bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <div className="text-center mb-12 sm:mb-16 md:mb-20">          <AnimatedDetail>
            <Badge variant="outline" size="lg" className="mb-6 rounded-full font-medium">
              About Us
            </Badge>
          </AnimatedDetail>
          
          <AnimatedDetail>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif leading-tight max-w-4xl mx-auto">
              Welcome to {businessInfo.name}
            </h2>
          </AnimatedDetail>
          
          <AnimatedDetail>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {businessInfo.tagline}
            </p>
          </AnimatedDetail>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Story & Description */}
          <div className="space-y-8">            <AnimatedDetail>
              <Card className="border bg-card/80 backdrop-blur-sm transition-opacity hover:opacity-80">
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-2xl md:text-3xl text-card-foreground font-serif">
                    Our Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {businessInfo.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-base font-medium text-muted-foreground">
                        Established {businessInfo.founded}
                      </span>
                    </div>
                    <Badge variant="secondary" size="default" className="px-4 py-1 text-sm">
                      {yearsInBusiness}+ Years of Excellence
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedDetail>

            {/* Mission/Values */}
            <AnimatedDetail>
              <Card className="border bg-card/80 backdrop-blur-sm transition-opacity hover:opacity-80">
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-2xl md:text-3xl text-card-foreground font-serif">
                    What Sets Us Apart
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <AnimatedList
                    className="grid grid-cols-2 gap-4 sm:gap-6"
                  >
                    {[
                      { value: `${yearsInBusiness}+`, label: 'Years Experience' },
                      { value: '1000+', label: 'Happy Clients' },
                      { value: '100%', label: 'Satisfaction' },
                      { value: '7', label: 'Days a Week' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-4 rounded-lg bg-accent/40 hover:bg-accent/50 transition-colors">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </AnimatedList>
                </CardContent>
              </Card>
            </AnimatedDetail>
          </div>
          
          {/* Location & Contact Info */}
          <div className="space-y-8">            <AnimatedDetail>
              <Card className="border bg-card/80 backdrop-blur-sm transition-opacity hover:opacity-80">
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-2xl md:text-3xl text-card-foreground flex items-center font-serif">
                    <MapPinIcon className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <div>
                    <p className="font-medium text-card-foreground leading-relaxed text-base">{businessInfo.address.fullAddress}</p>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <PhoneIcon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <a 
                          href={`tel:${businessInfo.contact.phone}`}
                          className="text-base text-primary hover:text-primary/80 font-medium"
                        >
                          {businessInfo.contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ClockIcon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <span className="text-base text-muted-foreground">Open 7 days a week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedDetail>

            {/* Hours Card */}
            <AnimatedDetail>
              <Card className="border bg-card/80 backdrop-blur-sm transition-opacity hover:opacity-80">
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-2xl md:text-3xl text-card-foreground flex items-center font-serif">
                    <ClockIcon className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6 pt-0">
                  <div className="flex justify-between items-center py-2.5 border-b">
                    <span className="text-base text-muted-foreground">Monday - Friday</span>
                    <span className="text-base text-foreground font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-base text-muted-foreground">Saturday - Sunday</span>
                    <span className="text-base text-foreground font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-base text-muted-foreground">Holidays</span>
                      <span className="text-base text-foreground font-medium">Call for hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedDetail>
          </div>
        </div>
      </div>
    </Section>
  );
}
