/**
 * Configuración de idiomas.
 *
 * El español es el idioma por defecto y NO lleva prefijo: vive en `/`, que es
 * la URL que ya está publicada. El inglés vive en `/en`.
 *
 * A nivel de rutas ambos son un segmento `[lang]` (`/es` y `/en`), y
 * `next.config.ts` se encarga de que `/` sirva `es` sin exponer el prefijo y
 * de redirigir `/es` a `/` para no tener dos URLs con el mismo contenido.
 */
export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Narrowing para el segmento dinámico, que llega tipado como `string`. */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * URL pública de un idioma. El idioma por defecto no lleva prefijo.
 * `localePath("es")` -> `/`   ·   `localePath("en")` -> `/en`
 */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

/** Destino de un ancla de la Home, ya con el prefijo del idioma. */
export function sectionHref(locale: Locale, sectionId: string): string {
  return `${localePath(locale)}#${sectionId}`;
}

/** Prefijo para construir rutas propias (por ejemplo los case studies). */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** El otro idioma. Con dos locales alcanza; si se suma un tercero, esto pasa
 *  a ser una lista y el selector renderiza uno por idioma. */
export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

/** Valor del atributo `lang` del documento. */
export const htmlLang: Record<Locale, string> = {
  es: "es",
  en: "en",
};

/** Locale en el formato que espera Open Graph. */
export const openGraphLocale: Record<Locale, string> = {
  es: "es_AR",
  en: "en_US",
};

/** Etiqueta corta del selector de idioma. Sin banderas: una bandera es un
 *  país, no un idioma. */
export const localeShortLabel: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};
