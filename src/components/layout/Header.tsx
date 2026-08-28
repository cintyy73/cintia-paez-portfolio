"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { navigation, SECTIONS } from "@/content/navigation";
import { profile } from "@/content/profile";

/**
 * Header fijo con navegación.
 *
 * Es el único Client Component del sitio: necesita estado para el menú mobile.
 * Los destinos salen de `content/navigation.ts`, así que pasar de anclas a
 * rutas propias no requiere tocar este archivo.
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href={`#${SECTIONS.home}`}
            className="text-sm font-semibold tracking-tight"
            onClick={close}
          >
            {profile.name}
          </Link>

          {/* Navegación desktop */}
          <nav aria-label="Navegación principal" className="hidden sm:block">
            <ul className="flex items-center gap-6">
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

          {/* Botón de menú mobile */}
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="rounded-md border border-border px-3 py-1.5 text-sm sm:hidden"
          >
            {isOpen ? "Cerrar" : "Menú"}
          </button>
        </div>

        {/* Navegación mobile */}
        {isOpen ? (
          <nav
            id="mobile-menu"
            aria-label="Navegación principal"
            className="border-t border-border py-4 sm:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block rounded-md px-2 py-2 text-base text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
