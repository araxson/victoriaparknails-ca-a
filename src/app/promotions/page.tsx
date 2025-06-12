import { PromotionsSection } from "@/components/sections/promotions-section";
import { ContactInfoSection } from "@/components/sections/contact-info-section";

export const metadata = {
  title: "Promotions & Offers | Victoria Park Nails & Spa",
  description: "Discover our latest promotions, special offers, and seasonal deals at Victoria Park Nails & Spa.",
};

export default function PromotionsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Special Offers & Promotions
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Take advantage of our limited-time promotions and special offers
              </p>
            </div>
          </div>
        </div>
      </section>

      <PromotionsSection showAllPromotions={true} />
      
      <ContactInfoSection />
    </main>
  );
} 