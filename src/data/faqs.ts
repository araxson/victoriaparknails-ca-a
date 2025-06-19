import { FAQ } from "./types";
import { businessInfo } from "./business-info";

export const faqs: FAQ[] = [
  // General Questions
  {
    id: "hours-location",
    question: "What are your hours and location?",
    answer:
      `We're located at ${businessInfo.address.fullAddress} with free parking available. We're open Monday-Friday ${businessInfo.hours.monday}, Saturday-Sunday ${businessInfo.hours.saturday}${businessInfo.holidayHours ? `, and Holidays ${businessInfo.holidayHours.hours}` : ''}.`,
    category: "general",
  },
  {
    id: "appointment-booking",
    question: "Do I need an appointment?",
    answer:
      "While we accept walk-ins when possible, we highly recommend booking an appointment to ensure availability and avoid waiting. You can book online, call us, or visit the salon.",
    category: "general",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit cards (Visa, MasterCard, American Express), debit cards, and contactless payments including Apple Pay and Google Pay.",
    category: "general",
  },
  {
    id: "parking-available",
    question: "Is parking available?",
    answer:
      "Yes, we have free parking available in front of the salon and in the adjacent parking lot. Street parking is also available.",
    category: "general",
  },
  {
    id: "walk-ins-welcome",
    question: "Do you accept walk-ins?",
    answer:
      "Yes, we welcome walk-ins! However, appointments are recommended to ensure availability and minimize wait times, especially during busy periods and weekends.",
    category: "general",
  },

  // Service Questions
  {
    id: "gel-vs-regular",
    question: "What's the difference between gel and regular polish?",
    answer:
      "Gel polish lasts 2-3 weeks without chipping and has a high-gloss finish, but requires UV light curing. Regular polish is less expensive, easier to remove at home, but typically lasts 5-7 days.",
    category: "services",
  },
  {
    id: "french-manicure-options",
    question: "Do you offer French manicures?",
    answer:
      "Yes! We offer classic French manicures with natural pink base and white tips. Available in both regular and gel polish options. French tips are an add-on for $10 to any manicure service.",
    category: "services",
  },
  {
    id: "nail-art-pricing",
    question: "How much does nail art cost?",
    answer:
      "Custom nail design starts at $5 per nail and can vary based on complexity. We offer everything from simple accent nails to intricate custom artwork. Pricing will be discussed during your consultation based on your desired design.",
    category: "services",
  },
  {
    id: "extension-duration",
    question: "How long do nail extensions last?",
    answer:
      "Both acrylic and gel extensions typically last 2-3 weeks before needing a fill. Full sets can last 6-8 weeks with proper care and regular fills every 2-3 weeks.",
    category: "services",
  },
  {
    id: "service-duration",
    question: "How long do appointments take?",
    answer:
      "Regular manicures take 30 minutes, shellac manicures 1 hour, basic pedicures 45 minutes, spa pedicures 45 minutes to 1 hour, acrylic new sets 1 hour 15 minutes, and UV gel new sets 1 hour 15 minutes. We'll confirm timing when booking.",
    category: "services",
  },
  {
    id: "pricing-range",
    question: "What are your service prices?",
    answer:
      "Regular manicures start at $30, shellac manicures $40, basic pedicures $45-$50, spa pedicures $50-$60, acrylic new sets $60, and UV gel new sets $65. Massage services range from $120-$240. Contact us for a complete price list.",
    category: "pricing",
  },

  // Health & Safety
  {
    id: "sanitation-practices",
    question: "What sanitation practices do you follow?",
    answer:
      "We follow strict Health Canada guidelines. All tools are sterilized in hospital-grade autoclaves, disposable items are used when possible, and stations are disinfected between clients.",
    category: "health-safety",
  },
  {
    id: "bring-own-tools",
    question: "Can I bring my own tools?",
    answer:
      "Absolutely! You're welcome to bring your own nail tools if you prefer. We completely understand and respect personal hygiene preferences.",
    category: "health-safety",
  },
  {
    id: "allergic-reactions",
    question: "What if I have allergies or sensitivities?",
    answer:
      "Please inform us of any allergies or sensitivities before your service. We offer hypoallergenic products and can perform patch tests if needed. Your safety is our priority.",
    category: "health-safety",
  },
  {
    id: "pregnancy-safe",
    question: "Are your services safe during pregnancy?",
    answer:
      "Yes, our nail services are generally safe during pregnancy. We use well-ventilated areas and pregnancy-safe products. Please inform us if you're pregnant so we can take extra precautions.",
    category: "health-safety",
  },

  // Aftercare
  {
    id: "gel-removal",
    question: "How do I remove gel polish at home?",
    answer:
      "We recommend professional removal to avoid nail damage. If removing at home, soak nails in acetone for 10-15 minutes, gently push off softened gel, and moisturize thoroughly.",
    category: "aftercare",
  },
  {
    id: "nail-care-tips",
    question: "How can I make my manicure last longer?",
    answer:
      "Use cuticle oil daily, wear gloves when cleaning, avoid using nails as tools, apply hand cream regularly, and book touch-ups as needed. Proper care can extend your manicure's life significantly.",
    category: "aftercare",
  },
  {
    id: "chipped-nail-fix",
    question: "What should I do if a nail chips?",
    answer:
      "For small chips, contact us within 48 hours for a complimentary touch-up. For larger damage, we offer repair services. Don't try to fix it yourself as this may cause more damage.",
    category: "aftercare",
  },
  {
    id: "maintenance-schedule",
    question: "How often should I get my nails done?",
    answer:
      "Regular manicures every 2-3 weeks, gel manicures every 3-4 weeks, and nail extensions need fills every 2-3 weeks. We'll recommend a schedule based on your nail growth and lifestyle.",
    category: "aftercare",
  },

  // Pricing & Policies
  {
    id: "group-discounts",
    question: "Do you offer group discounts?",
    answer:
      "Yes! We offer special rates for groups of 4 or more, bridal parties, and special events. Contact us to discuss group packages and pricing. Advanced booking required.",
    category: "pricing",
  },
  {
    id: "cancellation-policy",
    question: "What's your cancellation policy?",
    answer:
      "We require 24-hour notice for cancellations or rescheduling. Same-day cancellations may incur a fee. No-shows will be charged 50% of the service cost.",
    category: "pricing",
  },
  {
    id: "tipping-guidelines",
    question: "What's the standard tip amount?",
    answer:
      "Tipping is appreciated but not required. Standard rates are 15-20% for good service. Tips can be given in cash or added to your card payment.",
    category: "pricing",
  },
  {
    id: "loyalty-program",
    question: "Do you have a loyalty program?",
    answer:
      "Yes! Ask about our loyalty program where you can earn points with each visit and redeem them for discounts on future services. It's our way of thanking our regular clients.",
    category: "pricing",
  },
];
