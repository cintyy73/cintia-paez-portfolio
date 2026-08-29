import type { StackCategoryCopy, StackCategoryId } from "@/lib/types";

/**
 * Stack en español.
 *
 * Las tecnologías viven en `src/content/stack.ts` porque no se traducen. Acá
 * van los títulos de cada capa y qué rol cumple en una solución.
 *
 * Los conocimientos académicos sí viven acá: algunos son conceptos y no
 * nombres propios ("Programación orientada a objetos"), y esos se traducen.
 */
export const stack = {
  eyebrow: "Stack",
  title: "Herramientas, por lo que resuelven",
  description:
    "Las tecnologías se eligen según el problema. Están agrupadas por el rol que cumplen dentro de una solución, no por preferencia.",

  categories: {
    frontend: {
      title: "Frontend",
      description: "La capa donde el problema se vuelve usable.",
    },
    backend: {
      title: "Backend",
      description: "Lógica, contratos e integración con servicios.",
    },
    data: {
      title: "Datos",
      description: "Cómo se modela, se guarda y se consulta la información.",
    },
    integration: {
      title: "Integración y automatización",
      description: "Conectar sistemas que no fueron pensados para hablarse.",
    },
    tooling: {
      title: "Herramientas y entornos",
      description: "Lo que sostiene el trabajo en el tiempo.",
    },
  } satisfies Record<StackCategoryId, StackCategoryCopy>,

  /** La etiqueta dice sola de dónde viene el conocimiento, así que no hace
   *  falta una frase aclaratoria abajo: se lee en una línea y no compite con
   *  el stack profesional. */
  academicTitle: "Conocimientos en formación",
  academicItems: [
    "Python",
    "Java",
    "Programación orientada a objetos",
    "Diseño orientado a objetos",
    "SQL Server",
    "SQLite",
    "Firebase",
  ],
};
