import { BusinessInfo } from "./types";
import { BUSINESS_CONSTANTS } from "@/lib/constants";

export const businessInfo: BusinessInfo = {
  name: BUSINESS_CONSTANTS.name.full,
  tagline: "Experience Tranquility. Unveil Your Radiance.",
  description:
    "Calgary's premier nail salon and spa offering exceptional manicures, pedicures, custom nail art, and luxury spa treatments since 2015.",
  founded: "2015",
  address: {
    street: "1411 1st Street SE",
    city: "Calgary",
    province: "AB",
    postalCode: "T2G 2J3",
    fullAddress: "1411 1st Street SE, Calgary, AB T2G 2J3",
  },
  contact: {
    phone: "(403) 719-3600",
    email: "calgaryvpark@gmail.com",
    website: "https://victoriaparknails.ca",
    bookingUrl: "https://victoriaparknailsspa.setmore.com/",
  },
  hours: {
    monday: "10:00 AM - 7:00 PM",
    tuesday: "10:00 AM - 7:00 PM",
    wednesday: "10:00 AM - 7:00 PM",
    thursday: "10:00 AM - 7:00 PM",
    friday: "10:00 AM - 7:00 PM",
    saturday: "10:00 AM - 5:30 PM",
    sunday: "10:00 AM - 5:30 PM",
  },
  holidayHours: {
    hours: "10:00 AM - 5:30 PM",
    note: "Holiday hours apply on statutory holidays",
  },
  socialMedia: {
    facebook: "https://www.facebook.com/victoriaparknails",
    instagram: "https://www.instagram.com/victoriaparknails",
    tiktok: "https://www.tiktok.com/@victoriaparknails",
  },
};
