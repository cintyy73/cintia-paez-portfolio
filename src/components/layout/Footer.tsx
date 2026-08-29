import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/content/navigation";
import { contactLinks, profile } from "@/content/profile";

/**
 * Footer.
 *
 * Solo renderiza enlaces de contacto con `href` confirmado. Los pendientes se
 * omiten acá a propósito: el lugar donde se hacen visibles como "falta
 * completar" es la sección de contacto, no el pie de todas las páginas.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const publishableLinks = contactLinks.filter((link) => link.href);

  return (
    <footer className="border-t border-border bg-surface py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <Logo className="h-12" />
            <div>
              <p className="font-display font-semibold tracking-wide">
                {profile.name}
              </p>
              <p className="mt-1 text-sm text-muted">
                {profile.roles.join(" · ")}
              </p>
            </div>
          </div>

          <nav aria-label="Navegación del pie">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {publishableLinks.length > 0 ? (
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {publishableLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="mt-8 border-t border-border pt-6 text-sm text-muted">
          © {year} {profile.name}
        </p>
      </Container>
    </footer>
  );
}
