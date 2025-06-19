import { MetadataRoute } from "next";
import { businessInfo } from "@/data";

// Force static generation for robots.txt
export const dynamic = 'force-static';
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${businessInfo.contact.website}/sitemap.xml`,
  };
}
