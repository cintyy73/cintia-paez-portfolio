import type { MetadataRoute } from "next";
import { hasPublicDomain, siteUrl } from "@/lib/site";

/**
 * Robots.
 *
 * Mientras no haya un dominio real configurado (`NEXT_PUBLIC_SITE_URL`), se
 * bloquea la indexación: evita que un preview con placeholders quede indexado
 * en buscadores. Al definir la variable de entorno, se abre solo.
 */
export default function robots(): MetadataRoute.Robots {
  if (!hasPublicDomain) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
