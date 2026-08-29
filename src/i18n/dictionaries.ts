import { en } from "@/i18n/en";
import { es } from "@/i18n/es";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/**
 * Acceso al diccionario del idioma activo.
 *
 * Los diccionarios se importan de forma estática y no dinámica: todo el sitio
 * se prerenderiza y se resuelve en servidor, así que no hay bundle de cliente
 * que ahorrar, y a cambio el mapa queda verificado en tiempo de compilación.
 *
 * `Record<Locale, Dictionary>` obliga a que exista un diccionario completo por
 * cada idioma declarado en `config.ts`: agregar un locale sin traducirlo no
 * compila.
 */
const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
