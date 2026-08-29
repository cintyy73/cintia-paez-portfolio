import type { MetadataRoute } from "next";
import { CASE_STUDIES_ENABLED, publishedProjectSlugs } from "@/content/projects";
import { defaultLocale, localePath, locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

/**
 * Sitemap.
 *
 * Una entrada por idioma, cada una declarando la otra como alternativa
 * `hreflang`. Las páginas de proyecto se agregan solas en cuanto
 * `CASE_STUDIES_ENABLED` pase a `true`, sin tocar este archivo.
 */
function absolute(path: string): string {
  return new URL(path, siteUrl).toString();
}

/** Mapa de alternativas de idioma, igual para todas las URLs equivalentes. */
function languagesFor(path: (locale: (typeof locales)[number]) => string) {
  return Object.fromEntries(
    locales.map((locale) => [locale, absolute(path(locale))]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: absolute(localePath(locale)),
    lastModified,
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: {
      languages: languagesFor((item) => localePath(item)),
    },
  }));

  if (!CASE_STUDIES_ENABLED) {
    return home;
  }

  const projectPath = (
    locale: (typeof locales)[number],
    slug: string,
  ): string => {
    const prefix = locale === defaultLocale ? "" : `/${locale}`;
    return `${prefix}/projects/${slug}`;
  };

  return [
    ...home,
    ...publishedProjectSlugs.flatMap((slug) =>
      locales.map((locale) => ({
        url: absolute(projectPath(locale, slug)),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: languagesFor((item) => projectPath(item, slug)),
        },
      })),
    ),
  ];
}
