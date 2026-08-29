"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigationSections, SECTIONS } from "@/content/navigation";
import { profile } from "@/content/profile";
import { sectionHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/**
 * Header fijo con navegación, idioma y tema.
 *
 * Es Client Component porque necesita estado para el menú mobile. Los
 * destinos salen de `content/navigation.ts` y las etiquetas del diccionario,
 * así que pasar de anclas a rutas propias no requiere tocar este archivo.
 *
 * La navegación completa aparece recién en `lg`: con seis destinos más el
 * selector de idioma y el control de tema, en tablet no entraba sin apretar
 * todo. Debajo de ese ancho, idioma y tema quedan siempre visibles —son
 * preferencias, no contenido— y los destinos van al menú.
 *
 * Recibe SÓLO los textos que usa, no el diccionario entero. Todo lo que se le
 * pasa a un Client Component viaja serializado dentro del HTML, así que con
 * el diccionario completo cada página cargaba también los case studies de los
 * ocho proyectos —incluidos los que no están publicados y sus marcadores
 * `[PENDIENTE: ...]`— en el código fuente público. Acotar las props saca ~80
 * KB de cada respuesta y deja de exponer contenido sin terminar.
 */
export function Header({
  locale,
  nav,
  a11y,
  language,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  a11y: Dictionary["a11y"];
  language: Dictionary["language"];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href={sectionHref(locale, SECTIONS.home)}
            className="flex min-w-0 items-center gap-3"
            onClick={close}
          >
            <Logo className="h-9" priority />
            <span className="truncate font-display text-sm font-semibold tracking-wide">
              {profile.name}
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <nav
              aria-label={a11y.mainNavigation}
              className="hidden lg:block"
            >
              <ul className="flex items-center gap-6">
                {navigationSections.map((sectionKey) => (
                  <li key={sectionKey}>
                    <Link
                      href={sectionHref(locale, SECTIONS[sectionKey])}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {nav[sectionKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <LocaleSwitcher
                locale={locale}
                label={a11y.languageSelector}
                language={language}
              />

              <ThemeToggle
                labelToLight={a11y.themeToLight}
                labelToDark={a11y.themeToDark}
              />

              <button
                type="button"
                onClick={() => setIsOpen((value) => !value)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="inline-flex size-9 items-center justify-center rounded-md border border-border-strong text-muted transition-colors hover:border-accent hover:text-accent-strong lg:hidden"
              >
                {isOpen ? (
                  <CloseIcon className="size-[1.125rem]" />
                ) : (
                  <MenuIcon className="size-[1.125rem]" />
                )}
                <span className="sr-only">
                  {isOpen ? a11y.closeMenu : a11y.openMenu}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Navegación mobile.
            Se renderiza siempre y se oculta con el atributo `hidden` en vez de
            desmontarse: así `aria-controls="mobile-menu"` referencia un
            elemento existente en todos los estados, que es lo que exige una
            relación ARIA válida. `hidden` lo saca del árbol de accesibilidad
            y del render visual cuando está cerrado. */}
        <nav
          id="mobile-menu"
          hidden={!isOpen}
          aria-label={a11y.mainNavigation}
          className="border-t border-border py-3 lg:hidden"
        >
          <ul className="flex flex-col">
            {navigationSections.map((sectionKey) => (
              <li key={sectionKey}>
                <Link
                  href={sectionHref(locale, SECTIONS[sectionKey])}
                  onClick={close}
                  // 44px de alto: objetivo de toque cómodo.
                  className="flex min-h-11 items-center rounded-md px-2 text-base text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {nav[sectionKey]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
