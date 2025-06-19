'use client';

import { teamMembers } from "@/data/team";
import {
  Card,
  CardContent,
  CardFooter,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Separator,
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { Star, GraduationCap, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import * as React from "react";
import Link from "next/link";

export function TeamSection() {
  const isMobile = useIsMobile();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const renderTeamMemberCard = (member: typeof teamMembers[0]) => {
    return (
      <Card 
        key={member.id} 
        className="flex flex-col overflow-hidden transition-all duration-300 p-0 border border-border h-full"
      >
        <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/20 p-4">
          <div className="flex items-start gap-4">
            <Avatar className="w-20 h-20 border border-background flex-shrink-0">
              <AvatarImage
                src={member.image ?? "/avatar-placeholder.webp"}
                alt={member.name}
              />
              <AvatarFallback className="text-lg bg-secondary text-background">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-primary mb-1">{member.name}</h2>
              <p className="text-sm font-medium text-muted-foreground mb-2">{member.position}</p>
              
              <div className="flex items-center gap-1 mb-3">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span className="text-xs text-muted-foreground">{member.experience}</span>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-1">
                  {member.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs font-normal">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />
        
        <CardContent className="flex-grow p-4 pt-3 pb-2">
          <div className="space-y-4">            
            {/* Certifications */}
            {member.certifications && member.certifications.length > 0 && (
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wide mb-2 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-3.5 w-3.5 text-primary" />
                    Certifications
                  </span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {member.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="text-xs font-normal">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* Mini bio */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wide mb-2 text-muted-foreground">About</h4>
              <p className="text-xs text-foreground/80">
                {member.bio}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-2">
          <Link 
            href={`https://victoriaparknailsspa.setmore.com/`}
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="secondary" size="lg" className="w-full group">
              <Calendar className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
              Book with {member.name}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  };

  return (
    <Section variant="muted" id="team" className="py-16">
      <div className="container">
        <SectionHeader
          badge="Our Team"
          title="Meet Our Expert Professionals"
          description="Our skilled team of nail technicians and beauty professionals are dedicated to providing you with exceptional service."
          className="max-w-3xl mx-auto text-center"
        />

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative px-[-4px] mt-12">
            <div className="-mx-4">
              <Carousel 
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: false,
                  dragFree: false,
                  containScroll: "trimSnaps",
                }}
                className="w-full"
              >
                <CarouselContent className="ml-4">
                  {teamMembers.map((member) => (
                    <CarouselItem key={member.id} className="mr-4 basis-[85%] sm:basis-[70%]">
                      {renderTeamMemberCard(member)}
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Interactive Dots indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member) => renderTeamMemberCard(member))}
          </div>
        )}
      </div>
    </Section>
  );
}
