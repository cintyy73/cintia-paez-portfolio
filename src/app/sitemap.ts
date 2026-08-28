import type { MetadataRoute } from "next";
import { CASE_STUDIES_ENABLED, publishedProjects } from "@/content/projects";
import { siteUrl } from "@/lib/site";

/**
 * Sitemap.
 *
 * Hoy la Home es la única URL. Las páginas de proyecto se agregan solas en
 * cuanto `CASE_STUDIES_ENABLED` pase a `true`, sin tocar este archivo.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  if (!CASE_STUDIES_ENABLED) {
    return home;
  }

  return [
    ...home,
    ...publishedProjects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
