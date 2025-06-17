import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
} from "@/components/ui";
import { Calendar } from "lucide-react";
import { Offer } from "@/data/types";
import { businessInfo } from "@/data/business-info";

interface OfferCardProps {
  offer: Offer;
}

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-semibold">
              {offer.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {offer.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="text-2xl font-bold text-primary">
            {offer.discount}
          </div>

          {offer.validUntil && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Valid until {offer.validUntil}</span>
            </div>
          )}
        </div>

        <Button 
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
      </CardContent>
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
            size="sm" 
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
