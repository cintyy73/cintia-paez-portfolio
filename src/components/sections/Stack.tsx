import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/content/navigation";
import { academicKnowledge, professionalStack } from "@/content/stack";

/**
 * Stack en dos niveles.
 *
 * Arriba, lo defendible desde experiencia laboral, agrupado por el rol que
 * cumple cada pieza en una solución. Abajo y con menor jerarquía, lo
 * estudiado en formación, declarado como tal.
 *
 * La separación es estructural y no un matiz de color: mezclar ambos niveles
 * afirmaría experiencia que no existe.
 */
export function Stack() {
  const titleId = `${SECTIONS.stack}-title`;

  return (
    <Section id={SECTIONS.stack} labelledBy={titleId}>
      <SectionTitle
        id={titleId}
        eyebrow="Stack"
        title="Herramientas, por lo que resuelven"
        description="Las tecnologías se eligen según el problema. Están agrupadas por el rol que cumplen dentro de una solución, no por preferencia."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {professionalStack.map((category) => (
          <div key={category.id}>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              {category.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{category.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Formación: mismo dato, menor jerarquía. Sin badges, para que no
          compita visualmente con el stack profesional. */}
      <p className="mt-12 border-t border-border pt-8 text-sm text-muted lg:mt-16">
        <span className="font-medium text-foreground">
          Estudiado en formación:{" "}
        </span>
        {academicKnowledge.join(" · ")}
      </p>
    </Section>
  );
}
