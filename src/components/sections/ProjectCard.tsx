import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ExternalLinkIcon } from "@/components/ui/icons";
import type { Dictionary } from "@/i18n/types";
import { isPending } from "@/lib/content";
import type { Project } from "@/lib/types";

/** Etiqueta de bloque. Da el mismo ancla visual a Problema, Decisión,
 *  Resultado, Rol y Stack, que es lo que vuelve legible el recorrido. */
function FieldLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent-strong">
      {children}
    </p>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
        {value}
      </p>
    </div>
  );
}

/**
 * Card de proyecto.
 *
 * ORDEN DE LECTURA, de arriba abajo: título → período → resumen →
 * Problema · Decisión · Resultado → Rol → Stack → enlaces.
 *
 * SÍNTESIS. La card lee `project.card`, que son una o dos frases por bloque.
 * Los campos largos (`problem`, `alternatives`, `outcome`, `role`) siguen
 * intactos en el diccionario para el case study: no se perdió información,
 * se separó en dos niveles. Antes la card mostraba el texto completo y cada
 * proyecto era un artículo de cuatro párrafos; ahora se entiende en diez o
 * quince segundos y la profundidad queda para quien la busque.
 *
 * DENSIDAD. Sólo el proyecto principal lleva reglas internas: en las cards
 * compactas, separar cinco bloques con líneas convertía cada una en una
 * planilla. Ahí la separación la hace el espacio, y queda una sola regla,
 * antes del pie.
 *
 * REGLA DE CONTENIDO: los campos sin confirmar viven en el diccionario como
 * `[PENDIENTE: ...]` pero NO se renderizan. Un proyecto parcial muestra lo
 * que sí está confirmado y omite el resto. Completar un campo lo hace
 * aparecer solo, sin tocar este componente.
 *
 * El layout usa CONTAINER QUERIES, no breakpoints de viewport: la card se
 * adapta a su propio ancho, así el proyecto principal a ancho completo y los
 * secundarios en grilla comparten un único componente.
 *
 * `href` es opcional a propósito. Hoy llega `undefined` y la card es estática;
 * cuando existan los case studies llegará `/projects/[slug]`.
 */
export function ProjectCard({
  project,
  dict,
  href,
  featured = false,
}: {
  project: Project;
  dict: Dictionary;
  href?: string;
  /** El proyecto principal, a ancho completo y con más peso tipográfico. */
  featured?: boolean;
}) {
  const copy = dict.projects;

  /** Los tres pasos del razonamiento, ya filtrados por lo confirmado. */
  const reasoning = [
    { label: copy.labelProblem, value: project.card.problem },
    { label: copy.labelDecision, value: project.card.decision },
    { label: copy.labelOutcome, value: project.card.outcome },
  ].filter((field) => field.value && !isPending(field.value));

  const technologies = project.stack.filter(
    (technology) => !isPending(technology),
  );

  const links = [
    { label: copy.repository, href: project.links.repository },
    { label: copy.demo, href: project.links.demo },
  ].filter((link) => link.href);

  const hasSummary = !isPending(project.summary);
  const hasRole = !isPending(project.card.role);
  const hasPeriod = !isPending(project.period);

  // La regla interna sólo se dibuja en la card destacada, donde separa tres
  // columnas y por eso ayuda a leer.
  const divider = featured ? "border-t border-border pt-7" : "";

  return (
    <Card href={href} className={`h-full ${featured ? "sm:p-9 lg:p-10" : ""}`}>
      <article className="@container flex h-full flex-col">
        <header>
          {project.primary ? (
            <p className="mb-4">
              <Badge variant="accent">{copy.primaryBadge}</Badge>
            </p>
          ) : null}

          <h3
            className={`font-display font-semibold tracking-tight text-balance ${
              featured ? "text-2xl @3xl:text-[1.75rem]" : "text-lg"
            }`}
          >
            {project.title}
          </h3>

          {hasPeriod ? (
            <p className="mt-2 font-mono text-xs text-muted">
              {project.period}
            </p>
          ) : null}

          {hasSummary ? (
            <p
              className={`mt-3 leading-relaxed text-pretty ${
                featured ? "max-w-[68ch] text-base @3xl:text-lg" : "text-sm"
              }`}
            >
              {project.summary}
            </p>
          ) : null}
        </header>

        {/* Problema → Decisión → Resultado. En fila cuando la card es ancha:
            el recorrido se lee de un vistazo en vez de como bloques apilados. */}
        {reasoning.length > 0 ? (
          <div
            className={`mt-6 grid gap-5 @3xl:mt-7 @3xl:grid-cols-3 @3xl:gap-8 ${divider}`}
          >
            {reasoning.map((field) => (
              <Field key={field.label} label={field.label} value={field.value} />
            ))}
          </div>
        ) : null}

        {hasRole ? (
          <div className="mt-6">
            <Field label={copy.labelRole} value={project.card.role} />
          </div>
        ) : null}

        {/* El pie sigue al contenido. Antes iba con `mt-auto` para alinear
            el stack entre cards de una misma fila, pero como la grilla las
            estira a la misma altura, en la card más corta eso abría un hueco
            de cien o doscientos píxeles entre el Rol y el Stack: se leía como
            bloques flotando. El aire sobrante ahora queda al pie, dentro de
            la card, que es donde no molesta. */}
        {technologies.length > 0 || links.length > 0 || href ? (
          <footer className="mt-6 flex flex-col gap-4 border-t border-border pt-6 @3xl:flex-row @3xl:items-end @3xl:justify-between @3xl:gap-10">
            {technologies.length > 0 ? (
              <div className="min-w-0">
                <FieldLabel>{copy.labelStack}</FieldLabel>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {technologies.map((technology) => {
                    const isMigrating =
                      project.migrating?.includes(technology) ?? false;

                    return (
                      <li key={technology}>
                        <Badge>
                          {technology}
                          {/* La salvedad se muestra, pero traducida: el
                              nombre de la tecnología no cambia de idioma y la
                              aclaración sí. */}
                          {isMigrating ? (
                            <span className="ml-1.5 italic">
                              ({copy.migratingNote})
                            </span>
                          ) : null}
                        </Badge>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <span />
            )}

            {/* Si la card ya es un enlace al case study, no se anidan enlaces
                dentro (HTML inválido). */}
            {href ? (
              <p className="shrink-0 text-sm font-medium text-accent-strong">
                {copy.caseStudy} <span aria-hidden="true">→</span>
              </p>
            ) : (
              links.length > 0 && (
                <ul className="flex shrink-0 flex-wrap gap-x-5 gap-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong hover:underline"
                      >
                        {link.label}
                        <ExternalLinkIcon className="size-3.5" />
                        <span className="sr-only">
                          ({dict.a11y.opensInNewTab})
                        </span>
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
