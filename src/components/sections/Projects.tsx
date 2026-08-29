import { ProjectCard } from "@/components/sections/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/content/navigation";
import { featuredProjects, projectHref } from "@/content/projects";
import { isPending } from "@/lib/content";

/**
 * Proyectos destacados.
 *
 * Cada card aplica el método de la sección anterior a un caso concreto:
 * Problema → Decisión → Resultado. El destino de la card sale de
 * `projectHref()`, hoy `undefined` y mañana `/projects/[slug]`.
 */
export function Projects() {
  const hasProjects = featuredProjects.length > 0;

  const allPending =
    hasProjects &&
    featuredProjects.every((project) => isPending(project.title));

  const titleId = `${SECTIONS.projects}-title`;

  return (
    <Section id={SECTIONS.projects} labelledBy={titleId}>
      <SectionTitle
        id={titleId}
        eyebrow="Proyectos"
        title="El método aplicado"
        description="Cada proyecto está contado por su razonamiento: qué problema había, qué alternativas se evaluaron y qué se decidió. La lista de tecnologías es la consecuencia, no el punto de partida."
      />

      {/* Aviso honesto mientras el contenido real no esté cargado. Se apaga
          solo en cuanto los proyectos dejan de ser placeholders. */}
      {allPending ? (
        <p className="mt-8 rounded-lg border border-dashed border-muted/50 bg-surface p-4 text-sm text-muted">
          <strong className="font-medium">Sección en preparación.</strong>{" "}
          Las tarjetas de abajo muestran la estructura con contenido de ejemplo
          sin completar. Ver <code className="font-mono">CONTENIDO-PENDIENTE.md</code>.
        </p>
      ) : null}

      {hasProjects ? (
        <ul
          className={`mt-12 grid gap-6 lg:mt-16 ${
            featuredProjects.length > 1 ? "lg:grid-cols-2" : ""
          }`}
        >
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} href={projectHref(project)} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 text-muted">
          No hay proyectos publicados todavía.
        </p>
      )}
    </Section>
  );
}
