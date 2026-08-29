import { Badge } from "@/components/ui/Badge";
import { Section, SectionSplit } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/content/navigation";
import { professionalStack } from "@/content/stack";
import type { Dictionary } from "@/i18n/types";

/**
 * Stack en dos niveles.
 *
 * Arriba, lo defendible desde experiencia laboral, agrupado por el rol que
 * cumple cada pieza en una solución. Abajo y con menor jerarquía, lo
 * estudiado en formación, declarado como tal.
 *
 * La separación es estructural y no un matiz de color: mezclar ambos niveles
 * afirmaría experiencia que no existe.
 *
 * FILAS DE DEFINICIÓN en vez de grilla. Con cinco categorías, una grilla de
 * tres dejaba una última fila con dos elementos y un hueco. En filas, cada
 * capa ocupa su renglón —qué es y qué resuelve a la izquierda, tecnologías a
 * la derecha— y no queda espacio muerto a ningún ancho.
 */
export function Stack({ dict }: { dict: Dictionary }) {
  const titleId = `${SECTIONS.stack}-title`;
  const copy = dict.stack;

  return (
    <Section id={SECTIONS.stack} labelledBy={titleId}>
      <SectionSplit
        heading={
          <SectionTitle
            id={titleId}
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
        }
      >
        <dl>
          {professionalStack.map((category) => {
            const categoryCopy = copy.categories[category.id];

            return (
              <div
                key={category.id}
                className="grid gap-4 border-t border-border py-7 first:border-t-0 first:pt-0 lg:py-6 xl:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] xl:gap-10"
              >
                <div>
                  <dt className="font-display text-lg font-semibold tracking-tight">
                    {categoryCopy.title}
                  </dt>
                  <p className="mt-1 text-sm text-muted text-pretty">
                    {categoryCopy.description}
                  </p>
                </div>

                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li key={item}>
                        <Badge>{item}</Badge>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            );
          })}
        </dl>

        {/* Formación: mismo dato, mucha menos jerarquía.
            Una sola línea de texto corrido, sin badges y sin frase de apoyo.
            Con badges parecía un segundo stack profesional, que es justo lo
            que no es: acá no hay experiencia laboral detrás y el sitio no
            puede sugerir que la hay. La etiqueta ya dice de dónde viene. */}
        <div className="mt-10 border-t border-border pt-7">
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {copy.academicTitle}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
            {copy.academicItems.join(" · ")}
          </p>
        </div>
      </SectionSplit>
    </Section>
  );
}
