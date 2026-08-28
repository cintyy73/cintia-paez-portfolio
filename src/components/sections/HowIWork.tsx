import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { method } from "@/content/method";
import { SECTIONS } from "@/content/navigation";
import { profile } from "@/content/profile";

/**
 * Método de trabajo.
 *
 * Va segunda, inmediatamente después del hero: es el diferencial del perfil.
 * Los proyectos que siguen son la aplicación concreta de estos cuatro pasos,
 * y esa correspondencia es la que hace creíble al portfolio.
 */
export function HowIWork() {
  return (
    <Section id={SECTIONS.howIWork} variant="surface">
      <SectionTitle
        eyebrow="Método"
        title="Cómo trabajo"
        description={profile.introduction}
      />

      <ol className="mt-12 grid gap-6 sm:grid-cols-2">
        {method.map((step, index) => (
          <li key={step.id}>
            <Card className="h-full">
              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
              </div>

              <p className="mt-4 leading-relaxed text-muted text-pretty">
                {step.description}
              </p>

              <ul className="mt-6 space-y-2 border-t border-border pt-6">
                {step.signals.map((signal) => (
                  <li key={signal} className="flex gap-3 text-sm text-muted">
                    <span aria-hidden="true" className="text-accent">
                      →
                    </span>
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
