import type { NavigationSectionKey } from "@/content/navigation";
import type {
  ComplementaryEducationId,
  ContactId,
  EducationCopy,
  EducationId,
  ExperienceCopy,
  ExperienceId,
  MethodCopy,
  MethodId,
  ProjectCopy,
  ProjectSlug,
  StackCategoryCopy,
  StackCategoryId,
} from "@/lib/types";

/**
 * Contrato de traducción.
 *
 * Cada idioma exporta un objeto tipado como `Dictionary`. Los conjuntos que
 * dependen de datos estructurales se declaran como `Record<Id, Copy>`: si un
 * idioma se olvida un proyecto, un puesto o una categoría del stack, el error
 * aparece en `tsc --noEmit` y el build falla. Nunca queda un texto vacío en
 * producción.
 *
 * Regla: acá NO entran nombres propios ni nombres de tecnología. Esos viven
 * en `src/content/` porque son idénticos en todos los idiomas.
 */
export type Dictionary = {
  metadata: {
    title: string;
    description: string;
    ogImageAlt: string;
  };

  /** Textos que sólo leen las tecnologías asistivas. */
  a11y: {
    skipToContent: string;
    mainNavigation: string;
    footerNavigation: string;
    languageSelector: string;
    themeToLight: string;
    themeToDark: string;
    openMenu: string;
    closeMenu: string;
    identityPanel: string;
    opensInNewTab: string;
  };

  /** Nombre de cada idioma en el selector. */
  language: Record<"es" | "en", string>;

  nav: Record<NavigationSectionKey, string>;

  hero: {
    roles: string[];
    summary: string;
    valueProposition: string;
    ctaProjects: string;
    ctaMethod: string;
    ctaCv: string;
    methodLabel: string;
  };

  method: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Record<MethodId, MethodCopy>;
  };

  experience: {
    eyebrow: string;
    title: string;
    description: string;
    currentBadge: string;
    entries: Record<ExperienceId, ExperienceCopy>;
    educationTitle: string;
    education: Record<EducationId, EducationCopy>;
    complementaryTitle: string;
    complementary: Record<ComplementaryEducationId, EducationCopy>;
    previousBackgroundTitle: string;
    previousBackground: string;
  };

  projects: {
    eyebrow: string;
    title: string;
    description: string;
    primaryBadge: string;
    labelProblem: string;
    labelDecision: string;
    labelOutcome: string;
    labelRole: string;
    labelStack: string;
    /** Aclaración para las tecnologías que todavía están en migración. */
    migratingNote: string;
    repository: string;
    demo: string;
    caseStudy: string;
    empty: string;
    inPreparationTitle: string;
    inPreparationBody: string;
    items: Record<ProjectSlug, ProjectCopy>;
  };

  teaching: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: { title: string; description: string }[];
  };

  stack: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Record<StackCategoryId, StackCategoryCopy>;
    academicTitle: string;
    academicItems: string[];
  };

  contact: {
    eyebrow: string;
    title: string;
    description: string;
    lead: string;
    availability: string;
    links: Record<ContactId, string>;
  };

  footer: {
    roles: string;
    navTitle: string;
    contactTitle: string;
    rights: string;
  };

  notFound: {
    title: string;
    description: string;
    cta: string;
  };
};
