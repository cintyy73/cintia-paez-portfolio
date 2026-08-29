import type {
  ComplementaryEducationId,
  EducationBase,
  EducationId,
  ExperienceBase,
} from "@/lib/types";

/**
 * Trayectoria profesional y formación: la parte estructural.
 *
 * FUENTE DE VERDAD: el CV. No se agrega puesto, período, responsabilidad ni
 * institución que no esté confirmada ahí.
 *
 * Desarrollo y docencia van en la misma lista a propósito: son una sola línea
 * de tiempo laboral, y partirla obligaría a leer la experiencia en dos
 * lugares. El puesto vigente va primero.
 *
 * Los nombres de organización e institución son nombres propios y no se
 * traducen. Rol, período y responsabilidades sí: viven en
 * `src/i18n/<locale>/experience.ts`.
 */
export const experience: ExperienceBase[] = [
  { id: "fonselp", organization: "Fonselp.org", current: true },
  { id: "ada-itw", organization: "ADA ITW", current: false },
  { id: "plug-it", organization: "Plug-it", current: false },
];

/**
 * Formación académica: titulaciones y carreras.
 *
 * La Técnica Mecánica forma parte de la trayectoria técnica y no se omite:
 * explica de dónde viene la formación en resolución de problemas.
 */
export const education: EducationBase<EducationId>[] = [
  { id: "uces", institution: "UCES", inProgress: true },
  { id: "ada-frontend", institution: "ADA ITW", inProgress: false },
  { id: "eet-4", institution: "E.E.T. N.º 4", inProgress: false },
];

/** Formación complementaria. Se muestra de forma secundaria. */
export const complementaryEducation: EducationBase<ComplementaryEducationId>[] =
  [
    { id: "coursera-pm", institution: "Coursera", inProgress: false },
    { id: "utn-java", institution: "UTN Regional Pacheco", inProgress: false },
    { id: "ada-qa", institution: "ADA ITW", inProgress: false },
  ];
