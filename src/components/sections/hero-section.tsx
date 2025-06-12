import { businessInfo } from '@/data';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { Card, CardContent } from '@/components/ui/shadcn/data-display/card';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-white/90 text-gray-900">
            Est. {businessInfo.founded}
          </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif drop-shadow-lg">
            {businessInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-4 font-serif drop-shadow-lg">
            {businessInfo.tagline}
          </p>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-sans drop-shadow-lg">
            {businessInfo.description}
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-sans">
              Book Appointment
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors font-sans">
              View Services
            </button>
          </div>
            <Card className="bg-white/95 backdrop-blur-md shadow-xl">
            <CardContent className="p-6">              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-serif">Location</h3>
                  <p className="text-gray-600 font-sans">{businessInfo.address.city}, {businessInfo.address.province}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-serif">Contact</h3>
                  <p className="text-gray-600 font-sans">{businessInfo.contact.phone}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-serif">Hours Today</h3>
                  <p className="text-gray-600 font-sans">{businessInfo.hours.Monday}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
