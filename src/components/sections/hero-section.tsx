import { businessInfo } from '@/data';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { Button } from '@/components/ui/shadcn/inputs/button';
import { Section } from '@/components/layouts';
import { AnimatedDetail } from '@/components/ui/animated-elements';
import Link from 'next/link';

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
      {/* Video Background with zoom animation */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 motion-safe:animate-heroVideoZoom"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/50 dark:bg-background/70 z-10" />
      
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto text-center space-y-6 md:space-y-8 lg:space-y-10 px-4 md:px-6">
          {showBadge && (
            <AnimatedDetail animation="slideDown" delay={200}>
              <Badge
                variant="secondary"
                size="lg"
                className="bg-card/60 rounded-full dark:bg-card/70 text-card-foreground dark:text-card-foreground backdrop-blur-sm border font-medium motion-safe:animate-float"
              >
                Est. {businessInfo.founded}
              </Badge>
            </AnimatedDetail>
          )}          <AnimatedDetail animation="slideUp" delay={300}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-foreground font-serif leading-tight max-w-6xl mx-auto [text-shadow:_0_2px_4px_rgb(0_0_0_/_20%)]">
              {title || businessInfo.name}
            </h1>
          </AnimatedDetail>          <AnimatedDetail animation="slideUp" delay={500}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-sans leading-tight max-w-6xl mx-auto text-balance px-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_20%)]">
              {subtitle || businessInfo.tagline}
            </p>
          </AnimatedDetail>

          {(description || businessInfo.description) && (
            <AnimatedDetail animation="scale" delay={700}>
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-5xl mx-auto font-sans leading-relaxed text-balance px-4 sm:px-6">
                {description || businessInfo.description}
              </p>
            </AnimatedDetail>
          )}

          {showButtons && (
            <AnimatedDetail animation="slideUp" delay={900}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 px-4">
                <Button size="lg" className="font-semibold text-base transition-all duration-300 hover:scale-105" asChild>
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
                  className="font-semibold text-base backdrop-blur-sm bg-card/80 dark:bg-card/50 border-border/80 transition-all duration-300 hover:bg-card/90"
                  asChild
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </AnimatedDetail>
          )}
        </div>
      </div>
    </Section>
  );
}
