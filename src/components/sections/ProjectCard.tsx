import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { TextOrPending } from "@/components/ui/Pending";
import type { Project } from "@/lib/types";
import { isPending } from "@/lib/content";

/** Bloque etiquetado dentro de la card. */
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-widest text-accent">
        {label}
      </p>
      <p className="mt-2 leading-relaxed text-muted text-pretty">
        <TextOrPending value={value} isPending={isPending(value)} />
      </p>
    </div>
  );
}

/**
 * Card de proyecto para la Home.
 *
 * Muestra Problema → Decisión → Resultado en lugar de una lista de features:
 * lo que se quiere hacer visible es el razonamiento, no el catálogo.
 *
 * `href` es opcional a propósito. Hoy llega `undefined` y la card es estática;
 * cuando existan los case studies llegará `/projects/[slug]` y pasará a ser
 * navegable sin cambiar este componente.
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

  const links = [
    { label: "Repositorio", href: project.links.repository },
    { label: "Demo", href: project.links.demo },
  ].filter((link) => link.href);

  return (
    <Card href={href} className="h-full">
      <article className="flex h-full flex-col">
        <header>
          <h3 className="text-xl font-semibold tracking-tight">
            <TextOrPending
              value={project.title}
              isPending={isPending(project.title)}
            />
          </h3>
          <p className="mt-3 leading-relaxed text-pretty">
            <TextOrPending
              value={project.summary}
              isPending={isPending(project.summary)}
            />
          </p>
        </header>

        <div className="mt-6 space-y-5 border-t border-border pt-6">
          <Field label="Problema" value={project.problem} />

          {chosenAlternative ? (
            <Field label="Decisión" value={chosenAlternative.reason} />
          ) : null}

          <Field label="Resultado" value={project.outcome} />
        </div>

        <footer className="mt-6 flex flex-col gap-4 border-t border-border pt-6">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <li key={technology}>
                <Badge variant={isPending(technology) ? "pending" : "default"}>
                  {technology}
                </Badge>
              </li>
            ))}
          </ul>

          {/* Si la card ya es un enlace al case study, no se anidan enlaces
              dentro (HTML inválido): se muestra la invitación a entrar y los
              enlaces externos quedan para la página del proyecto. */}
          {href ? (
            <p className="text-sm font-medium text-accent">
              Ver caso de estudio <span aria-hidden="true">→</span>
            </p>
          ) : (
            links.length > 0 && (
              <ul className="flex flex-wrap gap-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )
          )}
        </footer>
      </article>
    </Card>
  );
}
