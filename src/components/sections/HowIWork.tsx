import { Section, SectionSplit } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { methodSteps } from "@/content/method";
import { SECTIONS } from "@/content/navigation";
import type { Dictionary } from "@/i18n/types";

/**
 * Método de trabajo.
 *
 * Va segunda, inmediatamente después del hero: es el diferencial del perfil.
 * Los proyectos que siguen son la aplicación concreta de estos cuatro pasos,
 * y esa correspondencia es la que hace creíble al portfolio.
 *
 * Ya no son cuatro cards. Eran cuatro cajas iguales en una grilla 2x2, que es
 * exactamente como se ve una lista de features y no como se ve un método. Con
 * el encabezado fijo a la izquierda y los pasos numerados en columna, se lee
 * como lo que es: un recorrido con orden, de 01 a 04. Los números pasan de
 * `text-xs` al costado del título a tener cuerpo propio, y son ellos los que
 * marcan el avance.
 */
export function HowIWork({ dict }: { dict: Dictionary }) {
  const titleId = `${SECTIONS.howIWork}-title`;

  return (
    <Section id={SECTIONS.howIWork} labelledBy={titleId} variant="surface">
      <SectionSplit
        heading={
          <SectionTitle
            id={titleId}
            eyebrow={dict.method.eyebrow}
            title={dict.method.title}
            description={dict.method.description}
          />
        }
      >
        <ol>
          {methodSteps.map((stepId, index) => {
            const step = dict.method.steps[stepId];

            return (
              <li
                key={stepId}
                className="border-t border-border pt-8 pb-10 first:border-t-0 first:pt-0 last:pb-0 lg:pt-7 lg:pb-8"
              >
                <div className="flex gap-5 sm:gap-8">
                  <span
                    aria-hidden="true"
                    className="font-mono text-2xl font-medium tabular-nums leading-none text-accent-strong sm:text-3xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-[68ch] leading-relaxed text-muted text-pretty">
                      {step.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {step.signals.map((signal) => (
                        <li
                          key={signal}
                          className="flex gap-3 text-sm text-muted"
                        >
                          {/* Un guión fino en vez de una flecha de texto: la
                              señal es un ítem de lista, no una acción. */}
                          <span
                            aria-hidden="true"
                            className="mt-[0.6875rem] h-px w-3 shrink-0 bg-border-strong"
                          />
                          <span className="text-pretty">{signal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </SectionSplit>
    </Section>
  );
}
