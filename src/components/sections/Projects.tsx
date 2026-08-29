import { ProjectCard } from "@/components/sections/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/content/navigation";
import { getFeaturedProjects, projectHref } from "@/content/projects";
import { localePrefix, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { isPending } from "@/lib/content";

/**
 * Proyectos destacados.
 *
 * Cada card aplica el método de la sección anterior a un caso concreto:
 * Problema → Decisión → Resultado.
 *
 * JERARQUÍA. El proyecto principal ocupa el ancho completo y el resto va en
 * grilla debajo. Antes los cuatro estaban en una 2x2 pareja y el principal se
 * distinguía sólo por una etiqueta chica: la jerarquía estaba declarada en el
 * texto pero no en la composición. A ancho completo, además, el recorrido
 * Problema · Decisión · Resultado entra en tres columnas y se lee de un
 * vistazo.
 *
 * Sin imágenes: no hay capturas reales publicables de plataformas internas, y
 * una imagen de stock o un mockup inventado diría menos que el texto. La
 * distinción es tipográfica y estructural.
 */
export function Projects({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const titleId = `${SECTIONS.projects}-title`;
  const copy = dict.projects;
  const prefix = localePrefix(locale);

  const featuredProjects = getFeaturedProjects(copy.items);
  const primaryProject = featuredProjects.find((project) => project.primary);
  const otherProjects = featuredProjects.filter(
    (project) => project !== primaryProject,
  );

  const allPending =
    featuredProjects.length > 0 &&
    featuredProjects.every((project) => isPending(project.title));

  return (
    <Section id={SECTIONS.projects} labelledBy={titleId} size="prominent">
      <SectionTitle
        id={titleId}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      {/* Aviso honesto mientras el contenido real no esté cargado. Se apaga
          solo en cuanto los proyectos dejan de ser placeholders. */}
      {allPending ? (
        <p className="mt-8 max-w-[70ch] rounded-lg border border-dashed border-muted/50 p-4 text-sm text-muted">
          <strong className="font-medium">{copy.inPreparationTitle}</strong>{" "}
          {copy.inPreparationBody}
        </p>
      ) : null}

      {featuredProjects.length === 0 ? (
        <p className="mt-12 text-muted">{copy.empty}</p>
      ) : (
        <div className="mt-12 space-y-5 lg:mt-14">
          {primaryProject ? (
            <ProjectCard
              project={primaryProject}
              dict={dict}
              href={projectHref(primaryProject, prefix)}
              featured
            />
          ) : null}

          {otherProjects.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2">
              {otherProjects.map((project, index) => {
                // Dos columnas en todos los anchos. Con tres se llegaba a
                // cards de 321px de ancho por 993 de alto: columnas de texto
                // angostas que además pesaban casi el doble que el proyecto
                // principal, invirtiendo la jerarquía de la sección.
                //
                // Con número impar de cards, la última ocupa la fila entera
                // en vez de dejar un hueco al lado.
                const fillsRow =
                  otherProjects.length % 2 === 1 &&
                  index === otherProjects.length - 1;

                return (
                  <li
                    key={project.slug}
                    className={fillsRow ? "sm:col-span-2" : ""}
                  >
                    <ProjectCard
                      project={project}
                      dict={dict}
                      href={projectHref(project, prefix)}
                    />
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      )}
    </Section>
  );
}
