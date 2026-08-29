import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * 404.
 *
 * `not-found` no recibe `params`, así que no puede saber en qué idioma
 * estaba la persona. Se sirve en el idioma por defecto y el botón vuelve a
 * `/`: es la única opción honesta, porque la ruta que falló no dice nada
 * sobre el idioma esperado.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <Container className="py-28 sm:py-36">
      <p className="font-mono text-sm text-accent-strong">404</p>

      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {dict.notFound.title}
      </h1>

      <p className="mt-4 max-w-[60ch] text-lg text-muted text-pretty">
        {dict.notFound.description}
      </p>

      <div className="mt-8">
        <CTAButton href={localePath(defaultLocale)}>
          {dict.notFound.cta}
        </CTAButton>
      </div>
    </Container>
  );
}
