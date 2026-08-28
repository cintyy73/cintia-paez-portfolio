import type { NavigationItem } from "@/lib/types";

/**
 * Navegación centralizada.
 *
 * Hoy la Home es one-page y todos los destinos son anclas. Cuando existan
 * páginas propias (por ejemplo `/projects`), se cambia el `href` acá y el
 * Header, el Footer y los CTAs quedan actualizados sin tocar componentes.
 */

/** Ids de las secciones de la Home. Fuente única para anclas y scroll. */
export const SECTIONS = {
  home: "home",
  howIWork: "how-i-work",
  projects: "projects",
  teaching: "teaching",
  stack: "stack",
  contact: "contact",
} as const;

export const navigation: NavigationItem[] = [
  { label: "Cómo trabajo", href: `#${SECTIONS.howIWork}` },
  { label: "Proyectos", href: `#${SECTIONS.projects}` },
  { label: "Docencia", href: `#${SECTIONS.teaching}` },
  { label: "Stack", href: `#${SECTIONS.stack}` },
  { label: "Contacto", href: `#${SECTIONS.contact}` },
];
