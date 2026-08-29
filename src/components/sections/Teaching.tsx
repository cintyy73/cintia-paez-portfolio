import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { teaching } from "@/content/teaching";

/**
 * Docencia.
 *
 * Reencuadra la docencia como capacidad técnica —comunicar, documentar,
 * simplificar, acompañar— en lugar de presentarla como una actividad aparte.
 * Los puestos docentes concretos viven en la sección Experiencia, para no
 * mostrar la misma información dos veces.
 */
export function Teaching() {
  const titleId = `${teaching.id}-title`;

  return (
    <Section id={teaching.id} labelledBy={titleId} variant="surface">
      <SectionTitle
        id={titleId}
        eyebrow="Docencia"
        title={teaching.title}
        description={teaching.introduction}
      />

      {/* Cuatro columnas en desktop: los pilares son breves y así el bloque
          se lee ligero, en contraste con las cards densas del método. */}
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {teaching.pillars.map((pillar) => (
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
