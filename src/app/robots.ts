import { MetadataRoute } from "next";
import { businessInfo } from "@/data";

// Force static generation for robots.txt
export const dynamic = 'force-static';
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1,
      },
    ],
    sitemap: `${businessInfo.contact.website}/sitemap.xml`,
    host: businessInfo.contact.website,
  };
}
