/**
 * Estructura de navegación.
 *
 * Acá vive sólo lo TÉCNICO: los ids de sección y el orden del menú. Las
 * etiquetas visibles son contenido traducible y viven en `src/i18n/`.
 *
 * Hoy la Home es one-page y todos los destinos son anclas. Cuando existan
 * páginas propias (por ejemplo `/projects`), se cambia el destino acá y el
 * Header, el Footer y los CTAs quedan actualizados sin tocar componentes.
 */

/** Ids de las secciones de la Home. Fuente única para anclas y scroll. */
export const SECTIONS = {
  home: "home",
  howIWork: "how-i-work",
  experience: "experience",
  projects: "projects",
  teaching: "teaching",
  stack: "stack",
  contact: "contact",
} as const;

export type SectionKey = keyof typeof SECTIONS;
export type SectionId = (typeof SECTIONS)[SectionKey];

/** Orden del menú. `home` queda fuera: su destino es el logo. */
export const navigationSections = [
  "howIWork",
  "experience",
  "projects",
  "teaching",
  "stack",
  "contact",
] as const satisfies readonly SectionKey[];

export type NavigationSectionKey = (typeof navigationSections)[number];
