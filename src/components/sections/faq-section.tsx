import { faqs } from '@/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/shadcn/layout/accordion';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { Section } from '@/components/layouts';
import { AnimatedDetail, AnimatedList } from '@/components/ui/animated-elements';

export function FAQSection() {
  const categories = [...new Set(faqs.map(faq => faq.category))];
  return (
    <Section className="bg-muted/30">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">          <AnimatedDetail animation="fade" delay={50}>
            <Badge variant="outline" size="lg" className="mb-6 rounded-full font-medium">
              FAQ
            </Badge>
          </AnimatedDetail>
          
          <AnimatedDetail animation="slideUp" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif leading-tight max-w-4xl mx-auto">
              Frequently Asked Questions
            </h2>
          </AnimatedDetail>
          
          <AnimatedDetail animation="slideUp" delay={150}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, booking, and
              policies.
            </p>
          </AnimatedDetail>
        </div>
          <div className="max-w-4xl mx-auto">          <AnimatedList
            className="space-y-10 sm:space-y-12"
            itemDelay={120}
            itemThreshold={0.3}
          >
            {categories.map(category => (
              <div key={category}>                <AnimatedDetail animation="slideUp" delay={50}>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 sm:mb-8 capitalize font-serif text-center">
                    {category} Questions
                  </h3>
                </AnimatedDetail>
                
                <Accordion type="single" collapsible className="w-full">
                  <AnimatedList
                    className="space-y-4"
                    itemDelay={80}
                    itemThreshold={0.4}
                  >
                    {faqs
                      .filter(faq => faq.category === category)
                      .map(faq => (
                        <AccordionItem
                          value={faq.id}
                          key={faq.id}
                          className="rounded-lg bg-card fade-on-hover"
                        >
                          <AccordionTrigger className="p-4 sm:p-6 text-base sm:text-lg font-semibold text-left hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                            <div className="pt-2">
                              <p className="text-muted-foreground leading-relaxed text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </AnimatedList>
                </Accordion>
              </div>
            ))}
          </AnimatedList>
        </div>
      </div>
    </Section>
  );
}
