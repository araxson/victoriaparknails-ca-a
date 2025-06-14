import { teamMembers } from "@/data/team";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/shadcn/data-display/card";
import { Badge } from "@/components/ui/shadcn/data-display/badge";
import { Section } from "@/components/layouts";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/data-display/avatar";
import { AnimatedDetail, AnimatedList } from "@/components/ui/animated-elements";

export function TeamSection() {
  return (
    <Section className="py-12 sm:py-16 md:py-20 bg-muted/30">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">          <AnimatedDetail animation="fade" delay={50}>
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1 text-base font-medium"
            >
              Our Team
            </Badge>
          </AnimatedDetail>
          
          <AnimatedDetail animation="slideUp" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif leading-tight max-w-4xl mx-auto">
              Meet Our Expert Professionals
            </h2>
          </AnimatedDetail>
          
          <AnimatedDetail animation="slideUp" delay={150}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our skilled team of nail technicians and beauty professionals are dedicated to providing you with exceptional service.
            </p>
          </AnimatedDetail>
        </div>
          <AnimatedList 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          itemDelay={80}
          itemThreshold={0.3}
        >
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="text-center border bg-card flex flex-col fade-on-hover"
            >
              <CardHeader className="p-6 pb-4">
                <Avatar className="w-28 h-28 mx-auto mb-6 ring-4 ring-primary/10">
                  <AvatarImage
                    src={member.image ?? "/avatar-placeholder.webp"}
                    alt={member.name}
                  />
                  <AvatarFallback className="text-2xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl md:text-2xl mb-2 font-serif">
                  {member.name}
                </CardTitle>
                <CardDescription className="font-medium text-primary text-base">
                  {member.position}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow flex flex-col justify-between p-6 pt-0">
                <p className="text-muted-foreground text-base leading-relaxed">
                  {member.bio}
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-base mb-4 text-muted-foreground">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {member.specialties.map((specialty, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-sm px-2 py-1"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t">
                    <div className="text-base text-muted-foreground">
                      <strong>Experience:</strong> {member.experience}
                    </div>
                    {member.certifications && member.certifications.length > 0 && (
                      <div className="text-sm text-muted-foreground/80 mt-3">
                        {member.certifications.join(' | ')}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>            </Card>
          ))}
        </AnimatedList>
      </div>
    </Section>
  );
}
