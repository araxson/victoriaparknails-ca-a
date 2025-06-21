import { businessInfo } from "./business-info";
import { Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Behnaz Fathi",
    rating: 5,
    review:
      "I had such amazing experiences with Sami! She's incredibly talented and pays so much attention to detail every nail was perfect.",
    date: "2025-05-04",
    service: "Nail Art",
    verified: true,
  },
  {
    id: "testimonial-2",
    name: "Helena Ly",
    rating: 5,
    review: "Samie is amazing. Always feeling happy about her service!",
    date: "2025-04-27",
    service: "Manicure",
    verified: true,
  },
  {
    id: "testimonial-3",
    name: "Tavous Jalilian",
    rating: 5,
    review:
      "I had an amazing experience with Sami! Her application was flawless, long-lasting, and beautifully glossy. Sami's skill left my nails looking salon-perfect. Highly recommend!",
    date: "2024-10-20",
    service: "Gel Manicure",
    verified: true,
  },
  {
    id: "testimonial-4",
    name: "Mikaela Jasmine",
    rating: 5,
    review:
      "I love this Spa. Yvonne does an incredible job! She's meticulous, and fast! I am now a loyal customer to her.",
    date: "2024-08-25",
    service: "Spa Pedicure",
    verified: true,
  },
  {
    id: "testimonial-5",
    name: "Emma O'Connell",
    rating: 5,
    review:
      "Today I had a fabulous manicure from Evon, and Rita did an excellent pedicure. The salon is very clean, and the ladies were polite and friendly. Will be back soon.",
    date: "2024-04-28",
    service: "Manicure & Pedicure",
    verified: true,
  },
  {
    id: "testimonial-6",
    name: "Penny N",
    rating: 5,
    review:
      "Julie is awesome at everything I've had her do and the whole place is upscale looking, super bright and clean...even next to no nail salon smell.",
    date: "2024-04-28",
    service: "Full Service",
    verified: true,
  },
  {
    id: "testimonial-7",
    name: "Fern Jeffery",
    rating: 5,
    review:
      `I had a day out with my mum and we decided to go to ${businessInfo.name}. What an amazing job the ladies have done! Professional service and great atmosphere.`,
    date: "2024-04-06",
    service: "Manicure & Pedicure",
    verified: true,
  },
  {
    id: "testimonial-8",
    name: "Caitlin Malone",
    rating: 5,
    review:
      "I had a great experience today at the spa getting a manicure and pedicure. Prices are as advertised on the website and the service was excellent.",
    date: "2024-03-29",
    service: "Manicure & Pedicure",
    verified: true,
  },
  {
    id: "testimonial-9",
    name: "Tish Babes",
    rating: 5,
    review:
      "Wonderful nails with Ann today. I felt so welcome and comfortable. She took her time and really made the shape great. Lovely nail art too!",
    date: "2024-03-01",
    service: "Nail Art",
    verified: true,
  },
  {
    id: "testimonial-10",
    name: "Kelsey Popiel",
    rating: 5,
    review:
      "I love getting my nails done by Rita, she always keeps prices the same, is always friendly and makes my nails exactly how I want them. Highly recommend her!",
    date: "2024-01-13",
    service: "Manicure",
    verified: true,
  },
];

export function getRecentTestimonials(limit: number = 6): Testimonial[] {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getTestimonialsByRating(rating: number): Testimonial[] {
  return testimonials.filter((testimonial) => testimonial.rating === rating);
}

export function getVerifiedTestimonials(): Testimonial[] {
  return testimonials.filter((testimonial) => testimonial.verified);
}
