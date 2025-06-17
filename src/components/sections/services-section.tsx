import { serviceCategories, getServicesByCategory } from "@/data";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "@/components/ui";
import Link from "next/link";

export function ServicesSection() {
  return (
    <Section variant="default">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="Our Services"
          title="Explore Our Offerings"
          description="Discover a curated selection of professional nail and spa services tailored to elevate your self-care routine."
        />

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category) => {
            const services = getServicesByCategory(category.id);
            return (
              <Card key={category.id}>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {category.description ||
                      `We offer ${services.length} specialised services under the ${category.name.toLowerCase()} category.`}
                  </p>

                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/services#${category.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
