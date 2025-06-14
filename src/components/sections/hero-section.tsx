import { businessInfo } from '@/data';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { Button } from '@/components/ui/shadcn/inputs/button';
import { Section } from '@/components/layouts';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showButtons?: boolean;
  showBadge?: boolean;
  videoSrc?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  showButtons = false,
  showBadge = false,
  videoSrc = "/videos/hero-bg-video-001.mp4",
}: HeroSectionProps) {
  return (
    <Section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden !py-0">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/50 dark:bg-background/70 z-10" />
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto text-center space-y-6 md:space-y-8 lg:space-y-10 px-4 md:px-6">
          {showBadge && (
            <Badge
              variant="secondary"
              size="lg"
              className="bg-card/60 rounded-full dark:bg-card/70 text-card-foreground dark:text-card-foreground backdrop-blur-sm border font-medium"
            >
              Est. {businessInfo.founded}
            </Badge>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-foreground font-serif leading-tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_20%)] max-w-6xl mx-auto">
            {title || businessInfo.name}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-sans leading-tight max-w-6xl mx-auto text-balance [text-shadow:_0_2px_4px_rgb(0_0_0_/_20%)] px-4">
            {subtitle || businessInfo.tagline}
          </p>

          {(description || businessInfo.description) && (
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-5xl mx-auto font-sans leading-relaxed text-balance px-4 sm:px-6">
              {description || businessInfo.description}
            </p>
          )}

          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 px-4">
              <Button size="lg" className="font-semibold text-base" asChild>
                <a
                  href={businessInfo.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Appointment
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-base backdrop-blur-sm bg-card/80 dark:bg-card/50 border-border/80"
              >
                View Services
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
