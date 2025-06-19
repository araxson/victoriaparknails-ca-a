import { faqs } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { Section } from "@/components/layouts";
import { SectionHeader } from "@/components/layouts/section-header";

export function FAQSection() {
  const categories = [...new Set(faqs.map((faq) => faq.category))] as string[];

  return (
    <Section variant="secondary" id="faq">
      <div className="container">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services, booking, and policies."
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-center capitalize mb-4">
                  {category} Questions
                </h3>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-2"
                >
                  {faqs
                    .filter((faq) => faq.category === category)
                    .map((faq) => (
                      <AccordionItem
                        value={faq.id}
                        key={faq.id}
                        className="border rounded-lg"
                      >
                        <AccordionTrigger className="px-4 py-3 text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="px-4 pb-3">
                            <p className="text-muted-foreground">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
