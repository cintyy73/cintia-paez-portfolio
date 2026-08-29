import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/lib/types";
import { isPending } from "@/lib/content";

/** Un bloque etiquetado dentro de la card. */
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-widest text-accent-strong">
        {label}
      </p>
      <p className="mt-2 leading-relaxed text-muted text-pretty">{value}</p>
    </div>
  );
}

/**
 * Card de proyecto para la Home.
 *
 * Muestra Problema → Decisión → Resultado en lugar de una lista de features:
 * lo que se quiere hacer visible es el razonamiento, no el catálogo.
 *
 * REGLA DE CONTENIDO: los campos sin confirmar viven en `projects.ts` como
 * `[PENDIENTE: ...]` pero NO se renderizan. Un proyecto parcial muestra lo
 * que sí está confirmado y omite el resto, en vez de exhibir marcadores que
 * se leen como contenido a medio hacer. Completar un campo lo hace aparecer
 * solo, sin tocar este componente.
 *
 * El layout usa CONTAINER QUERIES, no breakpoints de viewport: la card se
 * adapta a su propio ancho, así funciona igual a ancho completo o en grilla.
 *
 * `href` es opcional a propósito. Hoy llega `undefined` y la card es estática;
 * cuando existan los case studies llegará `/projects/[slug]`.
 */
export function ProjectCard({
  project,
  href,
}: {
  project: Project;
  href?: string;
}) {
  const chosenAlternative = project.alternatives.find(
    (alternative) => alternative.decision === "chosen",
  );

  /** Los tres pasos del razonamiento, ya filtrados por lo confirmado. */
  const reasoning = [
    { label: "Problema", value: project.problem },
    { label: "Decisión", value: chosenAlternative?.reason ?? "" },
    { label: "Resultado", value: project.outcome },
  ].filter((field) => field.value && !isPending(field.value));

  const technologies = project.stack.filter(
    (technology) => !isPending(technology),
  );

  const links = [
    { label: "Repositorio", href: project.links.repository },
    { label: "Demo", href: project.links.demo },
  ].filter((link) => link.href);

  const hasSummary = !isPending(project.summary);
  const hasRole = !isPending(project.role);
  const hasPeriod = !isPending(project.period);
  const hasFooter = technologies.length > 0 || links.length > 0 || Boolean(href);

  return (
    <Card href={href} className="h-full">
      <article className="@container flex h-full flex-col">
        <header>
          {project.primary ? (
            <p className="mb-3">
              <Badge variant="accent">Proyecto principal</Badge>
            </p>
          ) : null}

          <h3 className="font-display text-xl font-semibold tracking-tight @3xl:text-2xl">
            {project.title}
          </h3>

          {hasPeriod ? (
            <p className="mt-2 font-mono text-xs text-muted">{project.period}</p>
          ) : null}

          {hasSummary ? (
            <p className="mt-3 leading-relaxed text-pretty @3xl:max-w-3xl @3xl:text-lg">
              {project.summary}
            </p>
          ) : null}
        </header>

        {hasRole ? (
          <div className="mt-6 border-t border-border pt-6">
            <Field label="Rol" value={project.role} />
          </div>
        ) : null}

        {/* Problema → Decisión → Resultado. En fila cuando la card es ancha:
            el recorrido se lee de un vistazo en vez de como bloques apilados. */}
        {reasoning.length > 0 ? (
          <div className="mt-6 grid gap-5 border-t border-border pt-6 @3xl:mt-8 @3xl:grid-cols-3 @3xl:gap-10 @3xl:pt-8">
            {reasoning.map((field) => (
              <Field key={field.label} label={field.label} value={field.value} />
            ))}
          </div>
        ) : null}

        {hasFooter ? (
          <footer className="mt-6 flex flex-col gap-4 border-t border-border pt-6 @3xl:mt-8 @3xl:flex-row @3xl:items-center @3xl:justify-between @3xl:pt-8">
            {technologies.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <li key={technology}>
                    <Badge>{technology}</Badge>
                  </li>
                ))}
              </ul>
            ) : (
              <span />
            )}

            {/* Si la card ya es un enlace al case study, no se anidan enlaces
                dentro (HTML inválido). */}
            {href ? (
              <p className="text-sm font-medium text-accent-strong">
                Ver caso de estudio <span aria-hidden="true">→</span>
              </p>
            ) : (
              links.length > 0 && (
                <ul className="flex shrink-0 flex-wrap gap-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent-strong hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )
            )}
          </footer>
        ) : null}
      </article>
    </Card>
  );
}
