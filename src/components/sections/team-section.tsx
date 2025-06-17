import { teamMembers } from "@/data/team";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Separator,
} from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { Star, GraduationCap, Calendar } from "lucide-react";
import Link from "next/link";

export function TeamSection() {
  return (
    <Section variant="muted" id="team" className="py-16">
      <div className="container">
        <SectionHeader
          badge="Our Team"
          title="Meet Our Expert Professionals"
          description="Our skilled team of nail technicians and beauty professionals are dedicated to providing you with exceptional service."
          className="max-w-3xl mx-auto text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member) => (
            <Card 
              key={member.id} 
              className="flex flex-col overflow-hidden transition-all duration-300 p-0 border-0 border-2 border-secondary/20 hover:border-secondary/70"
            >
              <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/20 pt-8 pb-4">
                <Avatar className="w-28 h-28 mx-auto border-4 border-background">
                  <AvatarImage
                    src={member.image ?? "/avatar-placeholder.webp"}
                    alt={member.name}
                  />
                  <AvatarFallback className="text-2xl bg-secondary text-background">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>

              <CardHeader className="text-center space-y-1 p-4 pb-0">
                <h2 className="text-xl font-semibold text-primary">{member.name}</h2>
                <CardDescription className="font-medium">{member.position}</CardDescription>
                
                <div className="flex items-center justify-center gap-3 mt-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    <span>{member.experience}</span>
                  </div>
                  
                  {member.certifications && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <GraduationCap className="h-3.5 w-3.5 text-primary" />
                      <span>{member.certifications.length} Cert{member.certifications.length > 1 ? 's' : ''}</span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <Separator />
              
              <CardContent className="flex-grow p-4 pt-3 pb-2">
                <div className="space-y-4">
                  {/* Specialties */}
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wide mb-2 text-muted-foreground">Specialties</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.slice(0, 4).map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs font-normal">
                          {specialty}
                        </Badge>
                      ))}
                      {member.specialties.length > 4 && (
                        <Badge variant="outline" className="text-xs font-normal">
                          +{member.specialties.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Mini bio */}
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wide mb-2 text-muted-foreground">About</h4>
                    <p className="text-xs line-clamp-3 text-foreground/80">
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
                  <Button variant="secondary" className="w-full group">
                    <Calendar className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                    Book with {member.name}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
