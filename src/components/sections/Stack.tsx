import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/content/navigation";
import { stack } from "@/content/stack";

/**
 * Stack agrupado por rol en la solución.
 *
 * No es un muro de logos: cada categoría explica qué problema resuelve esa
 * capa. Las tecnologías sin confirmar se marcan como pendientes en vez de
 * afirmarse como propias.
 */
export function Stack() {
  return (
    <Section id={SECTIONS.stack}>
      <SectionTitle
        eyebrow="Stack"
        title="Herramientas, por lo que resuelven"
        description="Las tecnologías se eligen según el problema. Están agrupadas por el rol que cumplen dentro de una solución, no por preferencia."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {stack.map((category) => (
          <div key={category.id}>
            <h3 className="text-lg font-semibold tracking-tight">
              {category.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{category.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item.name}>
                  <Badge variant={item.confirmed ? "default" : "pending"}>
                    {item.name}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
