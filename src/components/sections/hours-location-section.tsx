import { businessInfo } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon, ExternalLinkIcon } from 'lucide-react';

export function HoursLocationSection() {
  const today = new Date().toLocaleLowerName('en-US', { weekday: 'long' });
  const todayHours = businessInfo.hours[today];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Visit Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hours & Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us conveniently located in Calgary. We're open 7 days a week to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Location Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPinIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Location</CardTitle>
              <CardDescription>
                Easy to find with plenty of parking available
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-900">
                  {businessInfo.name}
                </p>
                <p className="text-gray-600">
                  {businessInfo.address.fullAddress}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-2">
                  <PhoneIcon className="h-4 w-4 text-gray-500" />
                  <a 
                    href={`tel:${businessInfo.contact.phone}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    {businessInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MailIcon className="h-4 w-4 text-gray-500" />
                  <a 
                    href={`mailto:${businessInfo.contact.email}`}
                    className="text-primary hover:text-primary/80"
                  >
                    {businessInfo.contact.email}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <ExternalLinkIcon className="h-4 w-4 text-gray-500" />
                  <a 
                    href={businessInfo.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    {businessInfo.contact.website}
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Get Directions
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ClockIcon className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Opening Hours</CardTitle>
              <CardDescription>
                We're open 7 days a week for your convenience
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Today's Hours Highlight */}
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-center">
                  <p className="text-sm font-medium text-green-800 mb-1">Today ({today})</p>
                  <p className="text-lg font-bold text-green-900">{todayHours}</p>
                </div>
              </div>

              {/* All Hours */}
              <div className="space-y-3">
                {Object.entries(businessInfo.hours).map(([day, hours]) => (
                  <div 
                    key={day} 
                    className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                      day === today 
                        ? 'bg-primary/10 border border-primary/20' 
                        : 'bg-gray-50'
                    }`}
                  >
                    <span className={`font-medium ${
                      day === today ? 'text-primary' : 'text-gray-700'
                    }`}>
                      {day}
                    </span>
                    <span className={`${
                      day === today ? 'text-primary font-semibold' : 'text-gray-600'
                    }`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 space-y-3">
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Book Appointment
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Walk-ins welcome when availability permits
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">🅿️</div>
                  <h3 className="font-semibold text-gray-900 mb-1">Free Parking</h3>
                  <p className="text-sm text-gray-600">
                    Convenient parking available in front and adjacent lot
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">♿</div>
                  <h3 className="font-semibold text-gray-900 mb-1">Accessible</h3>
                  <p className="text-sm text-gray-600">
                    Wheelchair accessible entrance and facilities
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">🚌</div>
                  <h3 className="font-semibold text-gray-900 mb-1">Transit Friendly</h3>
                  <p className="text-sm text-gray-600">
                    Easy access via public transportation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
