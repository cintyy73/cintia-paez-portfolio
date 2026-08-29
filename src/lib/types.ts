/**
 * Tipos del portfolio.
 *
 * `Project` está pensado para alimentar DOS vistas desde una sola fuente
 * (`content/projects.ts`):
 *   - la Home, que usa solo el subconjunto de resumen;
 *   - el futuro case study en `/projects/[slug]`, que usa el objeto completo.
 * Por eso los campos del caso de estudio ya existen aunque hoy no se rendericen:
 * habilitar los case studies no requiere migrar datos.
 */

/** Una alternativa considerada y qué se decidió con ella. */
export type Alternative = {
  option: string;
  decision: "chosen" | "discarded";
  reason: string;
};

export type ProjectLinks = {
  /** `null` mientras el enlace no esté confirmado: no se renderiza. */
  repository: string | null;
  demo: string | null;
};

/** No se llama `Image` para no colisionar con el tipo global del DOM. */
export type ImageAsset = {
  src: string;
  alt: string;
};

export type Project = {
  /** Identificador estable de URL. Existe desde el día uno para que
   *  `/projects/[slug]` no obligue a renombrar ni migrar nada. */
  slug: string;
  title: string;
  /** Una línea. Es lo que se lee en la card de la Home. */
  summary: string;
  /** Contexto y necesidad detectada. */
  problem: string;
  /** Caminos evaluados y el porqué de la decisión. */
  alternatives: Alternative[];
  /** Qué se construyó y cómo se integró. */
  solution: string;
  /** Efecto concreto y verificable. Sin métricas inventadas. */
  outcome: string;
  learnings: string[];
  stack: string[];
  role: string;
  period: string;
  image: ImageAsset | null;
  links: ProjectLinks;
  /** Aparece en la Home. */
  featured: boolean;
  /** Marca el case study más fuerte: se destaca en la Home. */
  primary?: boolean;
  /** `false` lo oculta del sitio sin borrarlo. */
  published: boolean;
};

export type MethodStep = {
  id: string;
  title: string;
  /** Una palabra, para la escalera compacta del Hero. */
  shortTitle: string;
  description: string;
  /** Cómo se ve ese paso en la práctica. */
  signals: string[];
};

/**
 * Un puesto en la trayectoria profesional.
 *
 * Cubre tanto desarrollo como docencia: son la misma línea de tiempo laboral
 * y separarlas obligaría a leer la experiencia en dos lugares distintos.
 */
export type ExperienceEntry = {
  id: string;
  organization: string;
  role: string;
  period: string;
  /** `true` marca el puesto vigente. */
  current: boolean;
  /** Qué se hizo ahí. Cada línea, una responsabilidad concreta. */
  highlights: string[];
};

/** Un título o programa de formación. */
export type EducationEntry = {
  id: string;
  title: string;
  institution: string;
  /** `null` cuando la fecha no está confirmada: no se inventa ni se muestra. */
  period: string | null;
  /** `true` mientras esté en curso. */
  inProgress: boolean;
};

/**
 * Una capa del stack profesional.
 *
 * La distinción entre experiencia laboral y formación no vive acá sino en la
 * estructura: `professionalStack` y `academicKnowledge` son listas separadas.
 * Mezclarlas afirmaría experiencia que no existe.
 */
export type StackCategory = {
  id: string;
  title: string;
  /** Qué rol cumple esta categoría en una solución. */
  description: string;
  items: string[];
};

export type ContactLink = {
  id: string;
  label: string;
  /** Texto visible. Puede ser un placeholder. */
  value: string;
  /** `null` mientras el dato no esté confirmado: se muestra como pendiente,
   *  nunca como un enlace roto ni como un dato personal publicado. */
  href: string | null;
};

export type NavigationItem = {
  label: string;
  /** Hoy un ancla (`#section`). Mañana puede ser una ruta (`/projects`)
   *  sin tocar el Header. */
  href: string;
};
