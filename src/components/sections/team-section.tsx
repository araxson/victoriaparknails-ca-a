import { teamMembers } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import Image from 'next/image';

export function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our skilled team of nail technicians and beauty professionals are dedicated to providing you with exceptional service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="font-medium text-primary">
                  {member.position}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{member.bio}</p>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <div className="text-sm text-gray-500">
                    <strong>Experience:</strong> {member.experience}
                  </div>
                  {member.certifications && member.certifications.length > 0 && (
                    <div className="text-xs text-gray-400 mt-1">
                      {member.certifications.join(', ')}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
