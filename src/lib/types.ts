/**
 * Tipos del portfolio.
 *
 * La estructura separa DATOS ESTRUCTURALES de COPY TRADUCIBLE:
 *
 *   `*Base` -> lo que no cambia entre idiomas: ids, slugs, tecnologías,
 *              enlaces, nombres propios y flags de publicación.
 *              Vive en `src/content/`.
 *   `*Copy` -> lo que sí se traduce. Vive en `src/i18n/<locale>/`.
 *
 * Una entidad completa es la intersección de ambas mitades. Las copias se
 * declaran como `Record<Id, Copy>`: si un idioma se olvida una entrada, el
 * error aparece en `tsc --noEmit`, no como un hueco en producción.
 *
 * `Project` está pensado para alimentar DOS vistas desde una sola fuente:
 * la Home, que usa el subconjunto de resumen, y el futuro case study en
 * `/projects/[slug]`, que usa el objeto completo. Por eso los campos del
 * caso de estudio ya existen aunque hoy no se rendericen.
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

/** Identificador estable de URL. Existe desde el día uno para que
 *  `/projects/[slug]` no obligue a renombrar ni migrar nada. */
export type ProjectSlug =
  | "plataforma-fonselp"
  | "fonselp-api-rest"
  | "enlatados"
  | "luis-gonzalez-servicio-tecnico"
  | "portfolio-cintia-paez"
  | "cercapro"
  | "catalogo-de-impacto"
  | "catalogo-de-ongs";

/** Lo estructural de un proyecto: idéntico en todos los idiomas. */
export type ProjectBase = {
  slug: ProjectSlug;
  /** Nombres de tecnologías. No se traducen. */
  stack: string[];
  /**
   * Subconjunto de `stack` que todavía está en migración, no en producción.
   *
   * Se modela como lista aparte en vez de escribir "(migración)" dentro del
   * nombre de la tecnología: el nombre es un dato que no se traduce y la
   * aclaración sí. La card la renderiza con la etiqueta del idioma activo,
   * de modo que la salvedad no se pierde en inglés.
   */
  migrating?: string[];
  links: ProjectLinks;
  /** Hoy siempre `null`. El día que exista una imagen real, su `alt` pasa a
   *  la copia traducible; el `src` se queda acá. */
  image: ImageAsset | null;
  /** Aparece en la Home. */
  featured: boolean;
  /** Marca el case study más fuerte: se destaca en la Home. */
  primary?: boolean;
  /** `false` lo oculta del sitio sin borrarlo. */
  published: boolean;
};

/**
 * Síntesis para la card de la Home.
 *
 * Una card tiene que entenderse en diez o quince segundos, así que cada
 * bloque son una o dos frases. Los campos largos de `ProjectCopy` —`problem`,
 * `alternatives`, `outcome`, `role`— NO se acortan: son la profundidad del
 * case study y siguen intactos para cuando exista `/projects/[slug]`.
 *
 * Es la separación entre las dos vistas: la card resume, el caso desarrolla.
 */
export type ProjectCardCopy = {
  problem: string;
  decision: string;
  outcome: string;
  role: string;
};

/** Lo redactado de un proyecto: se traduce. */
export type ProjectCopy = {
  title: string;
  /** Una línea. Es lo que se lee en la card de la Home. */
  summary: string;
  /** Versión escaneable, para la Home. */
  card: ProjectCardCopy;
  /** Contexto y necesidad detectada. */
  problem: string;
  /** Caminos evaluados y el porqué de la decisión. */
  alternatives: Alternative[];
  /** Qué se construyó y cómo se integró. */
  solution: string;
  /** Efecto concreto y verificable. Sin métricas inventadas. */
  outcome: string;
  learnings: string[];
  role: string;
  period: string;
};

export type Project = ProjectBase & ProjectCopy;

export type MethodId =
  | "analysis"
  | "alternatives"
  | "integration"
  | "maintainability";

export type MethodCopy = {
  title: string;
  /** Una palabra, para la escalera compacta del Hero. */
  shortTitle: string;
  description: string;
  /** Cómo se ve ese paso en la práctica. */
  signals: string[];
};

export type MethodStep = { id: MethodId } & MethodCopy;

export type ExperienceId = "fonselp" | "ada-itw" | "plug-it";

/**
 * Un puesto en la trayectoria profesional.
 *
 * Cubre tanto desarrollo como docencia: son la misma línea de tiempo laboral
 * y separarlas obligaría a leer la experiencia en dos lugares distintos.
 */
export type ExperienceBase = {
  id: ExperienceId;
  /** Nombre propio: no se traduce. */
  organization: string;
  /** `true` marca el puesto vigente. */
  current: boolean;
};

export type ExperienceCopy = {
  role: string;
  period: string;
  /** Qué se hizo ahí. Cada línea, una responsabilidad concreta. */
  highlights: string[];
};

export type ExperienceEntry = ExperienceBase & ExperienceCopy;

export type EducationId = "uces" | "ada-frontend" | "eet-4";
export type ComplementaryEducationId = "coursera-pm" | "utn-java" | "ada-qa";

export type EducationBase<Id extends string = string> = {
  id: Id;
  /** Nombre propio: no se traduce. */
  institution: string;
  /** `true` mientras esté en curso. */
  inProgress: boolean;
};

export type EducationCopy = {
  title: string;
  /** `null` cuando la fecha no está confirmada: no se inventa ni se muestra. */
  period: string | null;
};

export type EducationEntry<Id extends string = string> = EducationBase<Id> &
  EducationCopy;

export type StackCategoryId =
  | "frontend"
  | "backend"
  | "data"
  | "integration"
  | "tooling";

/**
 * Una capa del stack profesional.
 *
 * La distinción entre experiencia laboral y formación no vive acá sino en la
 * estructura: `professionalStack` y los conocimientos académicos son listas
 * separadas. Mezclarlas afirmaría experiencia que no existe.
 */
export type StackCategoryBase = {
  id: StackCategoryId;
  /** Nombres de tecnologías. No se traducen. */
  items: string[];
};

export type StackCategoryCopy = {
  title: string;
  /** Qué rol cumple esta categoría en una solución. */
  description: string;
};

export type StackCategory = StackCategoryBase & StackCategoryCopy;

export type ContactId = "email" | "linkedin" | "github";

export type ContactLinkBase = {
  id: ContactId;
  /** Texto visible del dato. No se traduce: es una dirección. */
  value: string;
  /** `null` mientras el dato no esté confirmado: se muestra como pendiente,
   *  nunca como un enlace roto ni como un dato personal publicado. */
  href: string | null;
};

export type ContactLink = ContactLinkBase & { label: string };
