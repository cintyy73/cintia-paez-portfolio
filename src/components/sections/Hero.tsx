import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { DownloadIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { methodSteps } from "@/content/method";
import { SECTIONS } from "@/content/navigation";
import { profile } from "@/content/profile";
import { sectionHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/**
 * Hero.
 *
 * El h1 es el nombre (único de la página, relevante para SEO) y la propuesta
 * de valor ocupa el lugar destacado: el enfoque antes que las herramientas.
 *
 * COMPOSICIÓN. Dos columnas en desktop. Antes era una sola columna acotada a
 * la mitad del ancho disponible, con ocho bloques apilados: el bloque que más
 * tiene que pesar era el más plano de la página y dejaba media pantalla
 * vacía a la derecha.
 *
 * La columna derecha es una PIEZA DE IDENTIDAD, no un hueco esperando una
 * foto: marca y método. La escalera 01–04 pasa de ser una fila comprimida al
 * pie a ser el cuerpo del panel, con cuerpo tipográfico real.
 *
 * La ubicación se quitó del sitio y la disponibilidad vive únicamente en
 * Contacto, que es donde alguien la busca cuando ya decidió escribir.
 *
 * Sin fotografía, y deliberadamente: no hay avatar genérico ni ilustración de
 * relleno. El día que exista una foto se completa `profile.photo` y entra
 * arriba del panel, sin rehacer la composición.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const titleId = `${SECTIONS.home}-title`;
  const { hero } = dict;

  return (
    <section
      id={SECTIONS.home}
      aria-labelledby={titleId}
      className="scroll-mt-24 pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-20 lg:pb-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] xl:gap-16">
          <div>
            <h1
              id={titleId}
              // Escala fluida. El tope baja de 4.5rem a 4rem: 72px pedía
              // demasiado alto de Hero para una sola palabra y arrastraba
              // todo el ritmo de la página. A 64px sigue dominando con
              // claridad sobre los `h2`, que llegan a 36px.
              //
              // El mínimo y la pendiente no cambian, así que por debajo de
              // 753px —todo mobile— el cuerpo es exactamente el mismo que
              // antes.
              className="font-display text-[clamp(2.5rem,8.5vw,4rem)] font-semibold leading-[1.03] tracking-tight text-balance"
            >
              {profile.name}
            </h1>

            <p className="mt-5 font-display text-xl text-muted sm:text-2xl">
              {hero.roles.join(" · ")}
            </p>

            {/* Primero la experiencia real (CV), después el diferencial de
                método. Ese orden es el que pidió el posicionamiento: que no
                parezca el portfolio de alguien que solo estudió programación. */}
            <p className="mt-7 max-w-[64ch] text-lg leading-relaxed text-pretty">
              {hero.summary}
            </p>

            <p className="mt-4 max-w-[64ch] leading-relaxed text-muted text-pretty">
              {hero.valueProposition}
            </p>

            {/* Jerarquía explícita: relleno, contorno, texto. */}
            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
              <CTAButton href={sectionHref(locale, SECTIONS.projects)}>
                {hero.ctaProjects}
              </CTAButton>

              <CTAButton
                href={sectionHref(locale, SECTIONS.howIWork)}
                variant="secondary"
              >
                {hero.ctaMethod}
              </CTAButton>

              {profile.cv ? (
                <CTAButton
                  href={profile.cv}
                  variant="link"
                  download
                  icon={<DownloadIcon className="size-4" />}
                >
                  {hero.ctaCv}
                </CTAButton>
              ) : null}
            </div>
          </div>

          <aside
            aria-label={dict.a11y.identityPanel}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:self-start lg:p-6"
          >
            {/* La placa es la pieza de identidad del panel: a 48px se leía como
                una miniatura perdida en la esquina. En mobile vuelve al tamaño
                aprobado y en desktop gana un escalón, que es donde el panel
                tiene ancho de sobra. */}
            <Logo className="h-14 lg:h-20" />

            <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-strong">
              {hero.methodLabel}
            </p>

            {/* El detalle de cada paso vive en la sección "Cómo trabajo".
                Acá va el índice, que es lo que se puede leer sin scrollear. */}
            <ol className="mt-3">
              {methodSteps.map((stepId, index) => (
                <li
                  key={stepId}
                  className="flex items-baseline gap-4 border-t border-border py-3 first:border-t-0 lg:py-2.5"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-lg font-medium tabular-nums text-accent-strong"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium">
                    {dict.method.steps[stepId].shortTitle}
                  </span>
                </li>
              ))}
            </ol>

          </aside>
        </div>
      </Container>
    </section>
  );
}
