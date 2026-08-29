import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  complementaryEducation,
  education,
  experience,
} from "@/content/experience";
import { SECTIONS } from "@/content/navigation";
import type { Dictionary } from "@/i18n/types";

/**
 * Experiencia profesional y formación.
 *
 * Se presenta como RAIL TEMPORAL: una línea vertical con un punto por puesto,
 * organización / rol / período a la izquierda y responsabilidades a la
 * derecha. Antes era una lista separada por reglas horizontales, que se leía
 * como una tabla y no dejaba ver la progresión.
 *
 * El puesto vigente —el de desarrollo— lleva más peso deliberadamente: punto
 * en color de acento, titular un escalón más grande y etiqueta de estado. Así
 * la experiencia tecnológica domina sobre la docente sin reordenar ni
 * reclasificar nada del contenido.
 *
 * La trayectoria previa se conserva al pie, en cuerpo menor: aporta contexto
 * sin competir con la experiencia en software.
 */
export function Experience({ dict }: { dict: Dictionary }) {
  const titleId = `${SECTIONS.experience}-title`;
  const copy = dict.experience;

  return (
    <Section id={SECTIONS.experience} labelledBy={titleId} size="prominent">
      <SectionTitle
        id={titleId}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <ol className="mt-12 lg:mt-14">
        {experience.map((entry) => {
          const entryCopy = copy.entries[entry.id];

          return (
            <li
              key={entry.id}
              className="relative border-l border-border pb-12 pl-7 last:pb-0 sm:pl-10 lg:grid lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-12 lg:pb-9"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-2 size-3 -translate-x-1/2 rounded-full border-2 border-background ${
                  entry.current ? "bg-accent" : "bg-border-strong"
                }`}
              />

              <div>
                <h3
                  className={`font-display font-semibold tracking-tight ${
                    entry.current ? "text-xl sm:text-2xl" : "text-lg"
                  }`}
                >
                  {entry.organization}
                </h3>

                <p className="mt-1.5 text-muted">{entryCopy.role}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {entryCopy.period}
                </p>

                {/* La marca de puesto vigente es texto, no sólo el color del
                    punto del rail. */}
                {entry.current ? (
                  <p className="mt-3">
                    <Badge variant="accent">{copy.currentBadge}</Badge>
                  </p>
                ) : null}
              </div>

              <ul className="mt-5 space-y-2.5 lg:mt-0">
                {entryCopy.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.8125rem] h-px w-3 shrink-0 bg-border-strong"
                    />
                    <span className="text-pretty">{highlight}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>

      <div className="mt-14 border-t border-border pt-10 lg:mt-16">
        <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-strong">
          {copy.educationTitle}
        </h3>

        <ul className="mt-5 grid gap-6 sm:grid-cols-3 sm:gap-10">
          {education.map((item) => {
            const itemCopy = copy.education[item.id];

            return (
              <li key={item.id}>
                <p className="font-medium text-pretty">{itemCopy.title}</p>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                {itemCopy.period ? (
                  <p className="mt-1 font-mono text-xs text-muted">
                    {itemCopy.period}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>

        {/* Complementaria: mismo dato, menor jerarquía. Pasa de párrafo
            corrido a lista, que es lo que en realidad es. */}
        <div className="mt-10">
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {copy.complementaryTitle}
          </h3>

          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            {complementaryEducation.map((item) => {
              const itemCopy = copy.complementary[item.id];

              return (
                <li key={item.id}>
                  <span className="text-foreground">{itemCopy.title}</span>{" "}
                  <span>
                    · {item.institution}
                    {itemCopy.period ? `, ${itemCopy.period}` : ""}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-10 max-w-[74ch] border-t border-border pt-7 text-sm leading-relaxed text-muted text-pretty">
          <span className="font-medium text-foreground">
            {copy.previousBackgroundTitle}.{" "}
          </span>
          {copy.previousBackground}
        </p>
      </div>
    </Section>
  );
}
