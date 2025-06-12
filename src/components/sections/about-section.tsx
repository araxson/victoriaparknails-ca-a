import { businessInfo } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { MapPinIcon, PhoneIcon, ClockIcon, CalendarIcon } from 'lucide-react';

export function AboutSection() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - parseInt(businessInfo.founded);

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {businessInfo.name}
          </h2>
          <p className="text-xl text-primary font-medium mb-6">
            {businessInfo.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story & Description */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {businessInfo.description}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">
                      Established {businessInfo.founded}
                    </span>
                  </div>
                  <Badge variant="secondary">
                    {yearsInBusiness}+ Years of Excellence
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Mission/Values */}
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  What Sets Us Apart
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-pink-50">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {yearsInBusiness}+
                    </div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-purple-50">
                    <div className="text-2xl font-bold text-primary mb-1">
                      1000+
                    </div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-blue-50">
                    <div className="text-2xl font-bold text-primary mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-green-50">
                    <div className="text-2xl font-bold text-primary mb-1">
                      7
                    </div>
                    <div className="text-sm text-gray-600">Days a Week</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location & Contact Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">{businessInfo.address.fullAddress}</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center space-x-2">
                      <PhoneIcon className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{businessInfo.contact.phone}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <ClockIcon className="h-5 w-5 text-primary mr-2" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(businessInfo.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Follow Us
                </CardTitle>
                <CardDescription>
                  Stay connected for updates, tips, and inspiration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-3">
                  {Object.entries(businessInfo.socialMedia).map(([platform, url]) => 
                    url ? (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors capitalize"
                      >
                        {platform}
                      </a>
                    ) : null
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
