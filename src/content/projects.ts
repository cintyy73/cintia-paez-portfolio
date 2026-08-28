import type { Project } from "@/lib/types";

/**
 * FUENTE ÚNICA DE VERDAD DE PROYECTOS.
 *
 * La Home consume el subconjunto de resumen (`title`, `summary`, `problem`,
 * `stack`). El futuro case study en `/projects/[slug]` consume el objeto
 * completo. Un solo lugar para editar, dos vistas alimentadas.
 *
 * ─── IMPORTANTE ──────────────────────────────────────────────────────────
 * Los proyectos de abajo son PLANTILLAS VACÍAS, no proyectos reales.
 * Existen para que la estructura y el diseño sean visibles mientras se carga
 * el contenido. Antes de desplegar el sitio: completarlos o poner
 * `published: false`.
 * ─────────────────────────────────────────────────────────────────────────
 */

/**
 * Interruptor único para habilitar los case studies.
 *
 * Cuando exista `app/projects/[slug]/page.tsx`, poner esto en `true`: las
 * cards de la Home pasan a ser navegables. No hay que tocar componentes.
 */
export const CASE_STUDIES_ENABLED = false;

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "[PENDIENTE: nombre del proyecto]",
    summary: "[PENDIENTE: una línea que explique qué resuelve el proyecto]",
    problem:
      "[PENDIENTE: qué necesidad concreta apareció y en qué contexto. Qué pasaba antes de que existiera esta solución]",
    alternatives: [
      {
        option: "[PENDIENTE: camino que evaluaste y descartaste]",
        decision: "discarded",
        reason: "[PENDIENTE: por qué no era el camino adecuado en este caso]",
      },
      {
        option: "[PENDIENTE: camino que elegiste]",
        decision: "chosen",
        reason: "[PENDIENTE: qué ganabas con esta opción y qué resignabas]",
      },
    ],
    solution:
      "[PENDIENTE: qué construiste y cómo se integraron las piezas entre sí]",
    outcome:
      "[PENDIENTE: efecto concreto y verificable. Sin métricas que no puedas respaldar]",
    learnings: [
      "[PENDIENTE: qué harías igual la próxima vez]",
      "[PENDIENTE: qué harías distinto]",
    ],
    stack: ["[PENDIENTE: tecnologías usadas]"],
    role: "[PENDIENTE: tu rol — ej. desarrollo full stack, diseño de la solución]",
    period: "[PENDIENTE: período — ej. 2024]",
    image: null,
    links: { repository: null, demo: null },
    featured: true,
    published: true,
  },
  {
    slug: "project-two",
    title: "[PENDIENTE: nombre del proyecto]",
    summary: "[PENDIENTE: una línea que explique qué resuelve el proyecto]",
    problem:
      "[PENDIENTE: qué necesidad concreta apareció y en qué contexto. Qué pasaba antes de que existiera esta solución]",
    alternatives: [
      {
        option: "[PENDIENTE: camino que evaluaste y descartaste]",
        decision: "discarded",
        reason: "[PENDIENTE: por qué no era el camino adecuado en este caso]",
      },
      {
        option: "[PENDIENTE: camino que elegiste]",
        decision: "chosen",
        reason: "[PENDIENTE: qué ganabas con esta opción y qué resignabas]",
      },
    ],
    solution:
      "[PENDIENTE: qué construiste y cómo se integraron las piezas entre sí]",
    outcome:
      "[PENDIENTE: efecto concreto y verificable. Sin métricas que no puedas respaldar]",
    learnings: [
      "[PENDIENTE: qué harías igual la próxima vez]",
      "[PENDIENTE: qué harías distinto]",
    ],
    stack: ["[PENDIENTE: tecnologías usadas]"],
    role: "[PENDIENTE: tu rol en el proyecto]",
    period: "[PENDIENTE: período]",
    image: null,
    links: { repository: null, demo: null },
    featured: true,
    published: true,
  },
];

/** Proyectos visibles en la Home. */
export const featuredProjects = projects.filter(
  (project) => project.published && project.featured,
);

/** Proyectos que tendrán URL propia cuando existan los case studies. */
export const publishedProjects = projects.filter(
  (project) => project.published,
);

/**
 * Destino de una card de proyecto.
 *
 * Devuelve `undefined` mientras los case studies no existan, y `ProjectCard`
 * renderiza entonces una card no navegable. Único punto a cambiar el día que
 * se agregue la ruta.
 */
export function projectHref(project: Project): string | undefined {
  return CASE_STUDIES_ENABLED ? `/projects/${project.slug}` : undefined;
}
