import { businessInfo } from "./business-info";
import { Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Melina Sadjadi",
    rating: 5,
    review:
      "Samie is absolutely the best nail tech ever! She's incredibly talented, detail-oriented, and always nails exactly what I want — whether it's a clean, simple look or something super creative. Her space is cozy and spotless, and she's so kind and professional. I always leave feeling amazing, and my nails get endless compliments. I honestly can't imagine going to anyone else! 💅💖",
    date: "2025-06-21",
    service: "Nail Art",
    verified: true,
  },
  {
    id: "testimonial-2",
    name: "Heather Tyminski",
    rating: 5,
    review:
      "Evon has been doing my nails for years and she's incredible!!!! She does any of incredible job every time!!",
    date: "2025-06-21",
    service: "Manicure",
    verified: true,
  },
  {
    id: "testimonial-3",
    name: "Morgan Rushfeldt",
    rating: 5,
    review:
      "Always a great experience coming to victoria park nail and spa. It took me awhile to find a nail place that i love but the second time I ever came here they had already remembered my name and that I had a vacation planned which shows great customer connection skills. Evon always does a great job and the rest of the staff is always so friendly !! Would 100% recommend booking with her",
    date: "2025-06-20",
    service: "Gel Manicure",
    verified: true,
  },
  {
    id: "testimonial-4",
    name: "Katherine Lopez Orozco",
    rating: 5,
    review:
      "I highly recommend this place, they have great prices and an amazing service. If you go there I would recommend to go ask for an appointment with Samie, she does a great job.",
    date: "2025-06-20",
    service: "Gel Manicure",
    verified: true,
  },
  {
    id: "testimonial-5",
    name: "Kaylia Vasquez",
    rating: 5,
    review:
      "Samie has always exceeded my expectations no matter how simple or hard the design is!",
    date: "2025-06-19",
    service: "Nail Art",
    verified: true,
  },
  {
    id: "testimonial-6",
    name: "Steph Clark",
    rating: 5,
    review:
      "I've been coming to see Evon for a long time! She always does a wonderful job and is so kind and sweet. Highly recommend :)",
    date: "2025-06-19",
    service: "Nail Extensions",
    verified: true,
  },
  {
    id: "testimonial-7",
    name: "Kathryn Marchildon",
    rating: 5,
    review:
      "Amazing experience very nice ladies!",
    date: "2025-06-18",
    service: "Manicure",
    verified: true,
  },
  {
    id: "testimonial-8",
    name: "Val Espinal",
    rating: 5,
    review:
      "Samie is amazing!! Thanks for the great work always :)) great location!",
    date: "2025-06-18",
    service: "Manicure",
    verified: true,
  },
  {
    id: "testimonial-9",
    name: "Behnaz Fathi",
    rating: 5,
    review:
      "I had such amazing experiences with Sami! She's incredibly talented and pays so much attention to detail every nail was shaped and polished to perfection. From the moment I walked in, she made me feel comfortable and pampered. She really listened to what I wanted and brought my vision to life beautifully. The space is clean, stylish, and so relaxing. I highly recommend her to anyone looking for flawless nails and a great overall vibe!",
    date: "2025-05-04",
    service: "Nail Art",
    verified: true,
  },
  {
    id: "testimonial-10",
    name: "Helena Ly",
    rating: 5,
    review: "Samie is amazing. Always feeling happy about her service!",
    date: "2025-04-27",
    service: "Manicure",
    verified: true,
  },
  {
    id: "testimonial-11",
    name: "Tavous Jalilian",
    rating: 5,
    review:
      "I had an amazing experience with Sami! Her application was flawless, long-lasting, and beautifully glossy. Sami's skill left my nails looking salon-perfect. Highly recommend!",
    date: "2024-10-20",
    service: "Gel Manicure",
    verified: true,
  },
  {
    id: "testimonial-12",
    name: "Mikaela Jasmine",
    rating: 5,
    review:
      "I love this Spa. Yvonne does an incredible job! She's meticulous, and fast! I am now a loyal customer to her.",
    date: "2024-08-25",
    service: "Spa Pedicure",
    verified: true,
  },
  {
    id: "testimonial-13",
    name: "Emma O'Connell",
    rating: 5,
    review:
      "Today I had a fabulous manicure from Evon, and Rita did an excellent pedicure. The salon is very clean, and the ladies were polite and friendly. Will be back soon.",
    date: "2024-04-28",
    service: "Manicure & Pedicure",
    verified: true,
  },
  {
    id: "testimonial-14",
    name: "Penny N",
    rating: 5,
    review:
      "Julie is awesome at everything I've had her do and the whole place is upscale looking, super bright and clean...even next to no nail salon smell.",
    date: "2024-04-28",
    service: "Full Service",
    verified: true,
  },
  {
    id: "testimonial-15",
    name: "Fern Jeffery",
    rating: 5,
    review:
      `I had a day out with my mum and we decided to go to ${businessInfo.name}. What an amazing job the ladies have done! Professional service and great atmosphere.`,
    date: "2024-04-06",
    service: "Manicure & Pedicure",
    verified: true,
  },
  {
    id: "testimonial-16",
    name: "Caitlin Malone",
    rating: 5,
    review:
      "I had a great experience today at the spa getting a manicure and pedicure. Prices are as advertised on the website and the service was excellent.",
    date: "2024-03-29",
    service: "Manicure & Pedicure",
    verified: true,
  },
  {
    id: "testimonial-17",
    name: "Tish Babes",
    rating: 5,
    review:
      "Wonderful nails with Ann today. I felt so welcome and comfortable. She took her time and really made the shape great. Lovely nail art too!",
    date: "2024-03-01",
    service: "Nail Art",
    verified: true,
  },
  {
    id: "testimonial-18",
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
