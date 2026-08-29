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
 * English dictionary.
 *
 * The `: Dictionary` annotation is what makes the typecheck fail if a key is
 * missing or if one is present that the contract does not declare.
 */
export const en: Dictionary = {
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
