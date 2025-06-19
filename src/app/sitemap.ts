import { MetadataRoute } from "next";
import { businessInfo } from "@/data";

// Force static generation for sitemap
export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessInfo.contact.website;
  
  // Define all static routes with priorities and change frequencies optimized for SEO
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0, // Highest priority for homepage
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // High priority for services page
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8, // Gallery is important for visual content
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Contact info is important but stable
    },
    {
      url: `${baseUrl}/offers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7, // Offers change regularly but are secondary
    },
  ];

  return routes;
}
