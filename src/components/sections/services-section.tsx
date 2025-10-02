import { serviceCategories, getServicesByCategory } from "@/data";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from "@/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  return (
    <Section variant="default" id="services">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="Our Services"
          title="Explore Our Offerings"
          description="Discover a curated selection of professional nail and spa services tailored to elevate your self-care routine."
        />

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => {
            const services = getServicesByCategory(category.id);
            return (              <Card key={category.id} className="flex flex-col h-full border">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {services.length} services
                  </Badge>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {category.description ||
                      `We offer ${services.length} specialised services under the ${category.name.toLowerCase()} category.`}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link href={`/services#${category.id}`} className="flex items-center justify-center">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
