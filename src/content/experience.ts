import type { EducationEntry, ExperienceEntry } from "@/lib/types";

/**
 * Trayectoria profesional y formación.
 *
 * FUENTE DE VERDAD: el CV. No se agrega puesto, período, responsabilidad ni
 * institución que no esté confirmada ahí.
 *
 * Desarrollo y docencia van en la misma lista a propósito: son una sola línea
 * de tiempo laboral, y partirla obligaría a leer la experiencia en dos
 * lugares. El puesto vigente va primero.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "fonselp",
    organization: "Fonselp.org",
    role: "Desarrolladora de Software",
    period: "Agosto 2023 – Actualidad",
    current: true,
    highlights: [
      "Desarrollo y mantenimiento de plataformas educativas y de voluntariado sobre PHP/Laravel y React.",
      "Desarrollo y mantenimiento de APIs internas, y participación en una migración progresiva hacia JavaScript/TypeScript que convive con la implementación existente.",
      "Roles, permisos y reglas de acceso.",
      "Testing manual, QA funcional y resolución de errores.",
      "Automatización e integraciones con Pipedream, Zapier, Zoom y Salesforce.",
      "Propuesta de mejoras continuas y participación en decisiones de arquitectura técnica.",
    ],
  },
  {
    id: "ada-itw",
    organization: "ADA ITW",
    role: "Docente de Desarrollo Frontend",
    period: "2023 – 2025",
    current: false,
    highlights: [
      "Clases teóricas y prácticas de desarrollo web y React.",
      "Acompañamiento personalizado a estudiantes.",
      "Actividades prácticas y correcciones.",
      "Mantenimiento y mejoras del sitio institucional en React.",
    ],
  },
  {
    id: "plug-it",
    organization: "Plug-it",
    role: "Docente de Habilidades Digitales",
    period: "2024 – 2025",
    current: false,
    highlights: [
      "Informática básica y Google Workspace.",
      "Empleabilidad digital.",
      "Formación para personas adultas.",
      "Espacios de aprendizaje inclusivos.",
    ],
  },
];

/**
 * Formación académica: titulaciones y carreras.
 *
 * La Técnica Mecánica forma parte de la trayectoria técnica y no se omite:
 * explica de dónde viene la formación en resolución de problemas.
 */
export const education: EducationEntry[] = [
  {
    id: "uces",
    title: "Tecnicatura en Programación de Sistemas",
    institution: "UCES",
    period: "En curso",
    inProgress: true,
  },
  {
    id: "ada-frontend",
    title: "Desarrolladora Frontend",
    institution: "ADA ITW",
    period: "Mayo 2022 – Mayo 2023",
    inProgress: false,
  },
  {
    id: "eet-4",
    title: "Técnica Mecánica",
    institution: "E.E.T. N.º 4",
    period: "2001",
    inProgress: false,
  },
];

/**
 * Formación complementaria. Se muestra de forma secundaria.
 * `period: null` donde la fecha no está confirmada: no se inventa.
 */
export const complementaryEducation: EducationEntry[] = [
  {
    id: "coursera-pm",
    title: "Project Management",
    institution: "Coursera",
    period: "Agosto 2023 – Abril 2024",
    inProgress: false,
  },
  {
    id: "utn-java",
    title: "Java",
    institution: "UTN Regional Pacheco",
    period: null,
    inProgress: false,
  },
  {
    id: "ada-qa",
    title: "Testing / QA",
    institution: "ADA ITW",
    period: null,
    inProgress: false,
  },
];

/**
 * Trayectoria previa a la reconversión tecnológica.
 *
 * Va como una línea breve al pie de la sección: aporta contexto sobre
 * responsabilidad, organización y trato con personas, sin competir con la
 * experiencia en software ni convertirse en una segunda carrera.
 */
export const previousBackground =
  "Antes de la reconversión tecnológica, más de 10 años de experiencia en atención al cliente, gestión de equipos y emprendimiento independiente, sobre una base técnica de formación mecánica.";
