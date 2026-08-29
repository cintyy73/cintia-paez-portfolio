import type {
  ComplementaryEducationId,
  EducationCopy,
  EducationId,
  ExperienceCopy,
  ExperienceId,
} from "@/lib/types";

/**
 * Trayectoria profesional y formación, en español.
 *
 * FUENTE DE VERDAD: el CV. No se agrega puesto, período, responsabilidad ni
 * institución que no esté confirmada ahí. Los nombres de organización viven
 * en `src/content/experience.ts` porque no se traducen.
 */
export const experience = {
  eyebrow: "Experiencia",
  title: "Dónde lo pongo en práctica",
  description:
    "Desarrollo en producción y docencia en tecnología. La misma trayectoria, dos formas de resolver problemas.",
  currentBadge: "Actualidad",

  entries: {
    fonselp: {
      role: "Desarrolladora de Software",
      period: "Agosto 2023 – Actualidad",
      highlights: [
        "Desarrollo y mantenimiento de plataformas educativas y de voluntariado sobre PHP/Laravel y React.",
        "Desarrollo y mantenimiento de APIs internas, y participación en una migración progresiva hacia JavaScript/TypeScript que convive con la implementación existente.",
        "Roles, permisos y reglas de acceso.",
        "Testing manual, QA funcional y resolución de errores.",
        "Automatización e integraciones con Pipedream, Zapier, Zoom y Salesforce.",
        "Propuesta de mejoras continuas y participación en decisiones de arquitectura técnica.",
      ],
    },
    "ada-itw": {
      role: "Docente de Desarrollo Frontend",
      period: "2023 – 2025",
      highlights: [
        "Clases teóricas y prácticas de desarrollo web y React.",
        "Acompañamiento personalizado a estudiantes.",
        "Actividades prácticas y correcciones.",
        "Mantenimiento y mejoras del sitio institucional en React.",
      ],
    },
    "plug-it": {
      role: "Docente de Habilidades Digitales",
      period: "2024 – 2025",
      highlights: [
        "Informática básica y Google Workspace.",
        "Empleabilidad digital.",
        "Formación para personas adultas.",
        "Espacios de aprendizaje inclusivos.",
      ],
    },
  } satisfies Record<ExperienceId, ExperienceCopy>,

  educationTitle: "Formación",

  education: {
    uces: {
      title: "Tecnicatura en Programación de Sistemas",
      period: "En curso",
    },
    "ada-frontend": {
      title: "Desarrolladora Frontend",
      period: "Mayo 2022 – Mayo 2023",
    },
    "eet-4": {
      title: "Técnica Mecánica",
      period: "2001",
    },
  } satisfies Record<EducationId, EducationCopy>,

  complementaryTitle: "Formación complementaria",

  complementary: {
    "coursera-pm": {
      title: "Project Management",
      period: "Agosto 2023 – Abril 2024",
    },
    "utn-java": {
      title: "Java",
      period: null,
    },
    "ada-qa": {
      title: "Testing / QA",
      period: null,
    },
  } satisfies Record<ComplementaryEducationId, EducationCopy>,

  previousBackgroundTitle: "Trayectoria previa",

  /** Aporta contexto sobre responsabilidad, organización y trato con
   *  personas, sin competir con la experiencia en software. */
  previousBackground:
    "Antes de la reconversión tecnológica, más de 10 años de experiencia en atención al cliente, gestión de equipos y emprendimiento independiente, sobre una base técnica de formación mecánica.",
};
