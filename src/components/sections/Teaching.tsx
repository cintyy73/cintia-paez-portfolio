import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/content/navigation";
import type { Dictionary } from "@/i18n/types";

/**
 * Docencia.
 *
 * Reencuadra la docencia como capacidad técnica —comunicar, documentar,
 * simplificar, acompañar— en lugar de presentarla como una actividad aparte.
 * Los puestos docentes concretos viven en la sección Experiencia, para no
 * mostrar la misma información dos veces.
 *
 * La composición es la de `main`, conservada a pedido: cuatro cards en
 * desktop. Lo único que cambió es de dónde salen los textos, que ahora vienen
 * del diccionario del idioma activo en vez de un archivo de contenido único.
 */
export function Teaching({ dict }: { dict: Dictionary }) {
  const titleId = `${SECTIONS.teaching}-title`;
  const copy = dict.teaching;

  return (
    <Section id={SECTIONS.teaching} labelledBy={titleId} variant="surface">
      <SectionTitle
        id={titleId}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      {/* Cuatro columnas en desktop: los pilares son breves y así el bloque
          se lee ligero, en contraste con las cards densas del método. */}
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {copy.pillars.map((pillar) => (
          <li key={pillar.title}>
            <Card className="h-full">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted text-pretty">
                {pillar.description}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
