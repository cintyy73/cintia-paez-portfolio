import type { Dictionary } from "@/i18n/types";
import { contact } from "./contact";
import { experience } from "./experience";
import { hero } from "./hero";
import { method } from "./method";
import { projects } from "./projects";
import { stack } from "./stack";
import { teaching } from "./teaching";
import { a11y, footer, language, metadata, nav, notFound } from "./ui";

/**
 * Diccionario en español: el idioma por defecto del sitio.
 *
 * La anotación `: Dictionary` es la que hace fallar el typecheck si falta
 * una clave o si sobra una que el contrato no declara.
 */
export const es: Dictionary = {
  metadata,
  a11y,
  language,
  nav,
  hero,
  method,
  experience,
  projects,
  teaching,
  stack,
  contact,
  footer,
  notFound,
};
