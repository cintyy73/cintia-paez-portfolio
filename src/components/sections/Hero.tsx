import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { method } from "@/content/method";
import { SECTIONS } from "@/content/navigation";
import { profile } from "@/content/profile";
import { isPending } from "@/lib/content";

/**
 * Hero.
 *
 * El h1 es el nombre (único de la página, relevante para SEO) y la propuesta
 * de valor ocupa el lugar destacado: el enfoque antes que las herramientas.
 */
export function Hero() {
  const titleId = `${SECTIONS.home}-title`;

  // El primer viewport no muestra placeholders: un dato pendiente acá
  // comunica "sin terminar" antes que cualquier otra cosa. Estos detalles
  // aparecen solos en cuanto se confirmen en content/profile.ts.
  const contextDetails = [profile.location, profile.availability].filter(
    (detail) => !isPending(detail),
  );

  return (
    <section
      id={SECTIONS.home}
      aria-labelledby={titleId}
      // El Hero pesa mas que las demas secciones: es lo que crea el ritmo.
      className="py-20 sm:py-28 lg:py-40"
    >
      <Container>
        <div className="max-w-3xl lg:max-w-4xl">
          <h1
            id={titleId}
            className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl xl:text-7xl"
          >
            {profile.name}
          </h1>

          <p className="mt-4 text-xl text-muted sm:text-2xl">
            {profile.roles.join(" · ")}
          </p>

          {/* Primero la experiencia real (CV), después el diferencial de
              método. Ese orden es el que pidió el posicionamiento: que no
              parezca el portfolio de alguien que solo estudió programación. */}
          <p className="mt-8 text-lg leading-relaxed text-pretty sm:text-xl">
            {profile.professionalSummary}
          </p>

          <p className="mt-4 leading-relaxed text-muted text-pretty">
            {profile.valueProposition}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton href={`#${SECTIONS.projects}`}>
              Ver proyectos
            </CTAButton>
            <CTAButton href={`#${SECTIONS.howIWork}`} variant="secondary">
              Cómo trabajo
            </CTAButton>
            {profile.cv ? (
              <CTAButton href={profile.cv} variant="secondary" download>
                Descargar CV
              </CTAButton>
            ) : null}
          </div>

          {/* La escalera del método, en el primer viewport.
              Convierte el diferencial de una afirmación en una estructura
              visible sin obligar a scrollear. El detalle de cada paso vive
              en la sección "Cómo trabajo". */}
          <ol className="mt-12 grid gap-x-8 gap-y-4 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {method.map((step, index) => (
              <li key={step.id} className="flex items-baseline gap-2">
                <span
                  aria-hidden="true"
                  className="font-mono text-xs text-accent-strong"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium">{step.shortTitle}</span>
              </li>
            ))}
          </ol>

          {contextDetails.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              {contextDetails.map((detail) => (
                <span key={detail} className="text-muted">
                  {detail}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
