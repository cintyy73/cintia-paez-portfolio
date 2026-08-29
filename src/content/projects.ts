import type { Project, ProjectBase, ProjectCopy, ProjectSlug } from "@/lib/types";

/**
 * FUENTE ÚNICA DE VERDAD DE PROYECTOS: la parte estructural.
 *
 * Acá vive lo que NO cambia entre idiomas: el slug, las tecnologías, los
 * enlaces y los flags de publicación. La redacción (título, resumen,
 * problema, alternativas, resultado, rol y período) es contenido traducible
 * y vive en `src/i18n/<locale>/projects.ts`, tipada como
 * `Record<ProjectSlug, ProjectCopy>`: si un idioma se olvida un proyecto,
 * falla el typecheck.
 *
 * El ORDEN de este array es el orden en que aparecen en la Home: los dos
 * proyectos profesionales primero y el portfolio personal como tercero, sin
 * desplazarlos. Los que están sin publicar quedan preparados al final.
 *
 * Regla de contenido: cada campo tiene que ser verificable. Nada de métricas,
 * fechas, clientes, tecnologías ni resultados que no puedan respaldarse.
 */

/**
 * Interruptor único para habilitar los case studies.
 *
 * Cuando exista `app/[lang]/projects/[slug]/page.tsx`, poner esto en `true`:
 * las cards de la Home pasan a ser navegables. No hay que tocar componentes.
 */
export const CASE_STUDIES_ENABLED = false;

export const projectsBase: ProjectBase[] = [
  {
    slug: "plataforma-fonselp",
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "Redis",
      "React",
      "TypeScript",
      "TanStack Query",
      "i18next",
      "Playwright",
    ],
    image: null,
    // Repositorios internos: no se publican.
    links: { repository: null, demo: null },
    featured: true,
    primary: true,
    published: true,
  },
  {
    slug: "fonselp-api-rest",
    // Stack actual primero; lo de la migración va marcado para no dar por
    // terminado lo que todavía está en curso.
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "OAuth2 / JWT",
      "TypeScript",
      "Fastify",
      "Drizzle ORM",
      "GraphQL",
      "Redis",
      "Zod",
      "Swagger/OpenAPI",
      "Vitest",
    ],
    migrating: [
      "TypeScript",
      "Fastify",
      "Drizzle ORM",
      "GraphQL",
      "Redis",
      "Zod",
      "Swagger/OpenAPI",
      "Vitest",
    ],
    image: null,
    links: { repository: null, demo: null },
    featured: true,
    published: true,
  },
  {
    slug: "enlatados",
    stack: [
      "React",
      "TypeScript",
      "Chakra UI",
      "TanStack Query",
      "Zustand",
      "i18next",
      "WebSocket",
      "Vite",
      "Sentry",
    ],
    image: null,
    links: { repository: null, demo: null },
    featured: true,
    published: true,
  },
  {
    slug: "luis-gonzalez-servicio-tecnico",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Chakra UI",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Leaflet",
      "Vercel",
    ],
    image: null,
    links: {
      repository: "https://github.com/cintyy73/luis-gonzales-web",
      demo: "https://luisgonzalez.com.ar",
    },
    featured: true,
    published: true,
  },
  {
    slug: "portfolio-cintia-paez",
    stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Yarn", "Git"],
    image: null,
    links: {
      repository: "https://github.com/cintyy73/cintia-paez-portfolio",
      demo: null,
    },
    featured: false,
    published: false,
  },
  {
    slug: "cercapro",
    stack: ["[PENDIENTE: tecnologías usadas]"],
    image: null,
    links: { repository: null, demo: null },
    featured: false,
    published: false,
  },
  {
    slug: "catalogo-de-impacto",
    stack: ["[PENDIENTE: tecnologías usadas]"],
    image: null,
    links: { repository: null, demo: null },
    featured: false,
    published: false,
  },
  {
    slug: "catalogo-de-ongs",
    stack: ["[PENDIENTE: tecnologías usadas]"],
    image: null,
    links: { repository: null, demo: null },
    featured: false,
    published: false,
  },
];

/**
 * Une la estructura con la redacción del idioma pedido.
 *
 * El orden de salida es el de `projectsBase`, no el del diccionario: el orden
 * de aparición es una decisión estructural y no puede divergir entre idiomas.
 */
export function getProjects(
  copy: Record<ProjectSlug, ProjectCopy>,
): Project[] {
  return projectsBase.map((base) => ({ ...base, ...copy[base.slug] }));
}

/** Proyectos visibles en la Home, en el orden de este archivo. */
export function getFeaturedProjects(
  copy: Record<ProjectSlug, ProjectCopy>,
): Project[] {
  return getProjects(copy).filter(
    (project) => project.published && project.featured,
  );
}

/** Proyectos que tendrán URL propia cuando existan los case studies. */
export const publishedProjectSlugs = projectsBase
  .filter((project) => project.published)
  .map((project) => project.slug);

/**
 * Destino de una card de proyecto.
 *
 * Devuelve `undefined` mientras los case studies no existan, y `ProjectCard`
 * renderiza entonces una card no navegable. Único punto a cambiar el día que
 * se agregue la ruta.
 */
export function projectHref(
  project: Pick<Project, "slug">,
  localePrefix: string,
): string | undefined {
  return CASE_STUDIES_ENABLED
    ? `${localePrefix}/projects/${project.slug}`
    : undefined;
}
