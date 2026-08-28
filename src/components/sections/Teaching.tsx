import { Card } from "@/components/ui/Card";
import { Pending } from "@/components/ui/Pending";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { teaching } from "@/content/teaching";
import { isPending } from "@/lib/content";

/**
 * Docencia.
 *
 * Reencuadra la docencia como capacidad técnica —comunicar, documentar,
 * simplificar, acompañar— en lugar de presentarla como una actividad aparte.
 * Los datos de trayectoria concretos van en un bloque separado porque son los
 * únicos que dependen de información todavía sin confirmar.
 */
export function Teaching() {
  const background = [
    { label: "Dónde", value: teaching.background.institution },
    { label: "Qué", value: teaching.background.subjects },
    { label: "Nivel", value: teaching.background.level },
    { label: "Desde", value: teaching.background.since },
  ];

  return (
    <Section id={teaching.id} variant="surface">
      <SectionTitle
        eyebrow="Docencia"
        title={teaching.title}
        description={teaching.introduction}
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {teaching.pillars.map((pillar) => (
          <li key={pillar.title}>
            <Card className="h-full">
              <h3 className="text-lg font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted text-pretty">
                {pillar.description}
              </p>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <h3 className="text-sm font-medium uppercase tracking-widest text-accent">
          Trayectoria
        </h3>
        <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {background.map((detail) => (
            <div key={detail.label}>
              <dt className="text-sm text-muted">{detail.label}</dt>
              <dd className="mt-1">
                {isPending(detail.value) ? (
                  <Pending>{detail.value}</Pending>
                ) : (
                  detail.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
