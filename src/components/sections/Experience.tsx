import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  complementaryEducation,
  education,
  experience,
  previousBackground,
} from "@/content/experience";
import { SECTIONS } from "@/content/navigation";

/**
 * Experiencia profesional y formación.
 *
 * Se presenta como línea de tiempo editorial y no como lista de CV: cada
 * puesto separa la identidad (organización, rol, período) de lo que se hizo
 * ahí, y en desktop ambas partes conviven en dos columnas. El puesto vigente
 * va primero y se marca.
 */
export function Experience() {
  const titleId = `${SECTIONS.experience}-title`;

  return (
    <Section id={SECTIONS.experience} labelledBy={titleId}>
      <SectionTitle
        id={titleId}
        eyebrow="Experiencia"
        title="Dónde lo pongo en práctica"
        description="Desarrollo en producción y docencia en tecnología. La misma trayectoria, dos formas de resolver problemas."
      />

      <ol className="mt-12 lg:mt-16">
        {experience.map((entry) => (
          <li
            key={entry.id}
            className="border-t border-border py-8 first:border-t-0 first:pt-0 lg:grid lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-12 lg:py-10"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {entry.organization}
                </h3>
                {entry.current ? <Badge variant="accent">Actualidad</Badge> : null}
              </div>
              <p className="mt-2 text-muted">{entry.role}</p>
              <p className="mt-1 font-mono text-xs text-muted">{entry.period}</p>
            </div>

            <ul className="mt-5 space-y-3 lg:mt-0">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="text-accent-strong">
                    →
                  </span>
                  <span className="text-muted text-pretty">{highlight}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-12 border-t border-border pt-10 lg:mt-16">
        <h3 className="text-sm font-medium uppercase tracking-widest text-accent-strong">
          Formación
        </h3>

        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {education.map((item) => (
            <li key={item.id}>
              <p className="font-medium text-pretty">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
              {item.period ? (
                <p className="mt-1 font-mono text-xs text-muted">
                  {item.period}
                </p>
              ) : null}
            </li>
          ))}
        </ul>

        {/* Complementaria: mismo dato, menor jerarquía. Se lee como apoyo y
            no compite con la formación académica ni con la experiencia. */}
        <p className="mt-8 text-sm text-muted">
          <span className="font-medium text-foreground">
            Formación complementaria:{" "}
          </span>
          {complementaryEducation.map((item, index) => (
            <span key={item.id}>
              {index > 0 ? " · " : ""}
              {item.title} ({item.institution}
              {item.period ? `, ${item.period}` : ""})
            </span>
          ))}
        </p>

        {/* Trayectoria previa: una línea al pie. Aporta contexto sin competir
            con la experiencia en software. */}
        <p className="mt-6 border-t border-border pt-6 text-sm text-muted">
          {previousBackground}
        </p>
      </div>
    </Section>
  );
}
