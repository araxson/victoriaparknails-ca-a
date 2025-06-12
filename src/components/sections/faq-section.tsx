'use client';

import { useState } from 'react';
import { faqs } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/data-display/card';
import { Badge } from '@/components/ui/shadcn/data-display/badge';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, booking, and policies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map(category => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                {category} Questions
              </h3>
              <div className="space-y-3">
                {faqs
                  .filter(faq => faq.category === category)
                  .map(faq => (
                    <Card key={faq.id} className="hover:shadow-md transition-shadow">
                      <CardHeader 
                        className="cursor-pointer pb-3"
                        onClick={() => toggleItem(faq.id)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-medium text-left">
                            {faq.question}
                          </CardTitle>
                          {openItems.includes(faq.id) ? (
                            <ChevronUpIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </CardHeader>
                      
                      {openItems.includes(faq.id) && (
                        <CardContent className="pt-0">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
