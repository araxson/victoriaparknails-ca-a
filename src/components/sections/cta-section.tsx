import { businessInfo } from "@/data";
import { Button } from "@/components/ui";
import { Section } from "@/components/layouts";

export function CtaSection() {
  return (
    <Section className="bg-primary" variant="default">
      <div className="container">
        <div className="text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Experience the Victoria Park Nails difference. Book your
              appointment today and let our expert team take care of you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-md mx-auto">
            <Button size="lg" asChild variant="outline" className="w-full">
              <a
                href={businessInfo.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment Online
              </a>
            </Button>
            <Button size="lg" asChild variant="outline" className="w-full">
              <a href={`tel:${businessInfo.contact.phone}`}>
                Call Us: {businessInfo.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
