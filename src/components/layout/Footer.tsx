import Link from "next/link";
import type { ComponentType } from "react";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { navigationSections, SECTIONS } from "@/content/navigation";
import { contactLinks, profile } from "@/content/profile";
import { sectionHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import type { ContactId } from "@/lib/types";

const channelIcons: Record<ContactId, ComponentType<{ className?: string }>> = {
  email: MailIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

/** Rótulo de columna. Misma familia visual que las volantas de sección, para
 *  que el pie se lea como parte del sistema y no como un anexo. */
function ColumnLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
      {children}
    </p>
  );
}

/**
 * Footer.
 *
 * Tres columnas rotuladas —marca, navegación, contacto— y una línea legal al
 * pie. Antes era una fila con la marca a un lado y los enlaces al otro, más
 * los canales sueltos debajo: se leía como un cajón de sobras. Con las
 * columnas etiquetadas queda claro qué es cada grupo, que es lo que hace que
 * un pie se lea profesional y no improvisado.
 *
 * Los rótulos son `p`, no encabezados: el pie no debe inyectar niveles nuevos
 * en la jerarquía de headings de la página. La navegación se nombra con
 * `aria-label`, que es lo que la expone como región.
 *
 * Solo renderiza enlaces de contacto con `href` confirmado. Los pendientes se
 * omiten acá a propósito: el lugar donde se hacen visibles como "falta
 * completar" es la sección de contacto, no el pie de todas las páginas.
 */
export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();
  const publishableLinks = contactLinks.filter((link) => link.href);

  return (
    <footer className="border-t border-border bg-surface py-14 lg:py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <Logo className="h-12" />
              <div>
                <p className="font-display font-semibold tracking-wide">
                  {profile.name}
                </p>
                <p className="mt-1 text-sm text-muted text-pretty">
                  {dict.footer.roles}
                </p>
              </div>
            </div>
          </div>

          <nav aria-label={dict.a11y.footerNavigation}>
            <ColumnLabel>{dict.footer.navTitle}</ColumnLabel>

            <ul className="mt-4 grid gap-y-2.5">
              {navigationSections.map((sectionKey) => (
                <li key={sectionKey}>
                  <Link
                    href={sectionHref(locale, SECTIONS[sectionKey])}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {dict.nav[sectionKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {publishableLinks.length > 0 ? (
            <div>
              <ColumnLabel>{dict.footer.contactTitle}</ColumnLabel>

              <ul className="mt-4 grid gap-y-2.5">
                {publishableLinks.map((link) => {
                  const ChannelIcon = channelIcons[link.id];
                  const isExternal = link.href?.startsWith("http") ?? false;

                  return (
                    <li key={link.id}>
                      <a
                        href={link.href as string}
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        <ChannelIcon className="size-4 shrink-0" />
                        {dict.contact.links[link.id]}
                        {isExternal ? (
                          <span className="sr-only">
                            ({dict.a11y.opensInNewTab})
                          </span>
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-sm text-muted">
          © {year} {profile.name}. {dict.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
