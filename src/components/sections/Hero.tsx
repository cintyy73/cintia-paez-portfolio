import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { Pending } from "@/components/ui/Pending";
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
  const contextDetails = [profile.location, profile.availability];

  return (
    <section id={SECTIONS.home} className="py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl text-muted sm:text-2xl">
            {profile.roles.join(" · ")}
          </p>

          <p className="mt-8 text-lg leading-relaxed text-pretty sm:text-xl">
            {profile.valueProposition}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton href={`#${SECTIONS.projects}`}>
              Ver proyectos
            </CTAButton>
            <CTAButton href={`#${SECTIONS.howIWork}`} variant="secondary">
              Cómo trabajo
            </CTAButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            {contextDetails.map((detail) =>
              isPending(detail) ? (
                <Pending key={detail}>{detail}</Pending>
              ) : (
                <span key={detail} className="text-muted">
                  {detail}
                </span>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
