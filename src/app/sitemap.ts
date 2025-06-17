import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://victoriaparknails.ca";
  const lastModified = new Date();

  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly" as const, // Update more frequently since services may change
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      changeFrequency: "weekly" as const, // Gallery updates often with new work
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/team`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8, // Higher priority for contact information
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/offers`,
      lastModified,
      changeFrequency: "weekly" as const, // Offers change frequently
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9, // High priority for booking page
    },
  ];

  // Service-specific pages can be generated dynamically based on services data
  // This is a placeholder for demonstration
  const servicePages = [
    "manicures",
    "pedicures",
    "nail-art",
    "gel-nails",
    "acrylics",
    "spa-treatments",
    "waxing",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...servicePages];
}
