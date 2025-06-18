'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  Button,
} from "@/components/ui";
import { Calendar, Tag, ChevronDown, ChevronUp } from "lucide-react";
import { Offer } from "@/data/types";
import { businessInfo } from "@/data/business-info";
import { useState } from "react";
import { Badge } from "./shadcn/badge";
import { Separator } from "./shadcn/separator";

interface OfferCardProps {
  offer: Offer;
}

export function OfferCard({ offer }: OfferCardProps) {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <Badge variant="outline" className="mb-1 bg-primary text-primary-foreground">
            Limited Offer
          </Badge>
          <CardTitle className="text-xl font-semibold">
            {offer.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {offer.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between pb-3 pt-0">
        <div className="space-y-4">
          <div className="flex flex-col p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Special Price</span>
              <div className="text-2xl font-bold text-primary">
                {offer.discount.includes("$") ? offer.discount.split(" - ").pop() : offer.discount}
              </div>
            </div>
            {offer.discount.includes("$") && (
              <div className="flex items-center gap-2 mt-1">
                <Tag className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  {offer.discount.split(" - ").shift()}
                </span>
              </div>
            )}
          </div>

          {offer.validUntil && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Valid until {new Date(offer.validUntil).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>
          )}
          
          <div>
            <button 
              onClick={() => setShowTerms(!showTerms)} 
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-full"
            >
              <span className="font-medium">Terms & Conditions</span>
              {showTerms ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {showTerms && (
              <div className="mt-2 space-y-1 text-sm text-muted-foreground pl-1">
                {offer.terms.map((term, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-xs mt-1">•</span>
                    <span>{term}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="pt-4">
        <Button 
          size="lg"
          className="w-full"
          asChild
        >
          <a
            href={businessInfo.contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function CompactOfferCard({ offer }: OfferCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold text-base">{offer.title}</h3>
            <p className="text-sm text-muted-foreground">{offer.description}</p>
            <div className="text-lg font-bold text-primary">
              {offer.discount}
            </div>
          </div>
          <Button 
            size="lg" 
            asChild
          >
            <a
              href={businessInfo.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
