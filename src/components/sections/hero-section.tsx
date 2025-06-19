import { businessInfo } from "@/data";
import { Badge, Button } from "@/components/ui";
import { Section } from "@/components/layouts";
import Link from "next/link";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showButtons?: boolean;
  showBadge?: boolean;
  videoSrc?: string;
}

const HERO_DEFAULTS = {
  videoSrc: "/videos/hero-bg-video-001.mp4",
  showButtons: false,
  showBadge: false,
} as const;

export function HeroSection({
  title,
  subtitle,
  description,
  showButtons = HERO_DEFAULTS.showButtons,
  showBadge = HERO_DEFAULTS.showBadge,
  videoSrc = HERO_DEFAULTS.videoSrc,
}: HeroSectionProps) {
  return (
    <Section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rewards Announcement Banner */}
      <RewardsAnnouncementBanner />
      
      {/* Video Background */}
      <VideoBackground src={videoSrc} />

      {/* Content Overlay */}
      <ContentOverlay>
        <HeroContent
          title={title || businessInfo.name}
          subtitle={subtitle || businessInfo.tagline}
          description={description || businessInfo.description}
          showBadge={showBadge}
          showButtons={showButtons}
        />
      </ContentOverlay>
    </Section>
  );
}

function RewardsAnnouncementBanner() {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 px-4">
      <div className="container">
        <div className="flex items-center justify-center text-center">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span className="font-semibold text-sm sm:text-base">
              NEW! Reward & Redeem Points Program
            </span>
            <span className="text-xs sm:text-sm opacity-90">
              Earn points with every visit - Ask us how to start earning today!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoBackground({ src }: { src: string }) {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-background/30" />
    </>
  );
}

function ContentOverlay({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full">
      <div className="container">{children}</div>
    </div>
  );
}

interface HeroContentProps {
  title: string;
  subtitle: string;
  description: string;
  showBadge: boolean;
  showButtons: boolean;
}

function HeroContent({
  title,
  subtitle,
  description,
  showBadge,
  showButtons,
}: HeroContentProps) {
  return (
    <div className="space-y-6 text-center">
      {showBadge && <HeroBadge />}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
      {description && (
        <div className="pt-2">
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      )}

      {showButtons && <HeroButtons />}
    </div>
  );
}

function HeroBadge() {
  return (
    <div className="mb-4">
      <Badge variant="secondary">Est. {businessInfo.founded}</Badge>
    </div>
  );
}

function HeroButtons() {
  return (
    <div className="pt-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button 
          size="lg" 
          asChild 
          className="w-full sm:w-auto rounded-full backdrop-blur-sm bg-primary/70 border border-white/20"
        >
          <a
            href={businessInfo.contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Appointment Online
          </a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          asChild
          className="w-full sm:w-auto rounded-full backdrop-blur-sm bg-background/50 border border-white/20"
        >
          <Link href="/services">View Services</Link>
        </Button>
      </div>
    </div>
  );
}
