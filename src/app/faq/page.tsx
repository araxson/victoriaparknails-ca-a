import { FAQSection } from "@/components/sections/faq-section";
import { ContactInfoSection } from "@/components/sections/contact-info-section";

export const metadata = {
  title: "FAQ | Victoria Park Nails & Spa",
  description: "Find answers to frequently asked questions about our nail and spa services.",
};

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about our services, booking, and policies
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      
      <ContactInfoSection />
    </main>
  );
} 