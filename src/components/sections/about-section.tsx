"use client";

import { businessInfo } from "@/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
} from "@/components/ui";
import { MapPinIcon, PhoneIcon, ClockIcon, CalendarIcon, Award, Smile, ThumbsUp, Clock } from "lucide-react";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function AboutSection() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - parseInt(businessInfo.founded);

  return (
    <Section variant="muted">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="About Us"
          title={`Welcome to ${businessInfo.name}`}
          description={businessInfo.tagline}
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Story Card */}
          <Card className="flex flex-col">
            <CardHeader className="flex-shrink-0">
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <p className="text-muted-foreground">
                {businessInfo.description}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center pt-4 border-t gap-4 mt-auto">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">
                    Established {businessInfo.founded}
                  </span>
                </div>
                <Badge variant="secondary">
                  {yearsInBusiness}+ Years of Excellence
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="flex flex-col">
            <CardHeader className="flex-shrink-0">
              <CardTitle>What Sets Us Apart</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="grid grid-cols-2 gap-4 h-full">
                {[
                  { value: yearsInBusiness, suffix: "+", label: "Years Experience", icon: Award },
                  { value: 1000, suffix: "+", label: "Happy Clients", icon: Smile },
                  { value: 100, suffix: "%", label: "Satisfaction", icon: ThumbsUp },
                  { value: 7, label: "Days a Week", icon: Clock },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-md border bg-card flex flex-col items-center justify-center"
                  >
                    <stat.icon className="h-6 w-6 text-primary mb-2" />
                    <div className="text-2xl font-bold text-primary mb-2">
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix={stat.suffix || ""} 
                        className="text-primary"
                      />
                    </div>
                    <div className="text-xs text-muted-foreground uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Location & Contact Card */}
          <Card className="flex flex-col">
            <CardHeader className="flex-shrink-0">
              <CardTitle className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                Visit Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <p className="font-medium">
                {businessInfo.address.fullAddress}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`tel:${businessInfo.contact.phone}`}
                    className="text-primary"
                  >
                    {businessInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Open 7 days a week
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* New Card: Our Values */}
          <Card className="flex flex-col lg:col-span-3">
            <CardHeader className="flex-shrink-0">
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { 
                    title: "Quality",
                    description: "We use only premium products and tools to ensure the best results for our clients." 
                  },
                  { 
                    title: "Cleanliness", 
                    description: "Hygiene is our top priority. We maintain rigorous sterilization standards for your safety." 
                  },
                  { 
                    title: "Creativity", 
                    description: "Our artists bring your vision to life with unique designs tailored to your style." 
                  },
                  { 
                    title: "Care", 
                    description: "We treat every client with personalized attention to ensure your complete satisfaction." 
                  }
                ].map((value, index) => (
                  <div key={index} className="p-4 rounded-md border bg-card">
                    <h3 className="font-medium text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
