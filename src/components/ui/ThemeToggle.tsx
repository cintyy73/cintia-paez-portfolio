"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

/** Clave en `localStorage`. La comparte el script de `layout.tsx` que aplica
 *  el tema antes del primer pintado. */
export const THEME_STORAGE_KEY = "theme";

type Theme = "light" | "dark";

/**
 * Tema efectivo en este momento.
 *
 * Si hay una elección explícita guardada, manda esa. Si no, manda el sistema.
 * Nunca se lee de estado de React: la fuente de verdad es el DOM, que es lo
 * que el script inline ya dejó correcto antes de que cargara nada.
 */
function currentTheme(): Theme {
  const explicit = document.documentElement.getAttribute("data-theme");

  if (explicit === "light" || explicit === "dark") {
    return explicit;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Control de tema claro / oscuro.
 *
 * NO tiene estado de React a propósito. El icono y el texto accesible los
 * decide CSS a partir del atributo `data-theme` del documento (ver
 * `globals.css`). Eso resuelve tres cosas de una vez:
 *
 *   - no hay desajuste de hidratación: el servidor no sabe qué tema tiene
 *     esta persona y no necesita saberlo;
 *   - el botón muestra lo correcto desde el primer pintado, incluso antes de
 *     que cargue el JavaScript;
 *   - el nombre accesible cambia con el tema, porque el texto que no
 *     corresponde está en `display: none` y no llega al lector de pantalla.
 *
 * Es un `button` real, así que responde a Enter y Espacio y entra en el orden
 * de tabulación sin nada extra.
 */
export function ThemeToggle({
  labelToLight,
  labelToDark,
}: {
  labelToLight: string;
  labelToDark: string;
}) {
  useEffect(() => {
    // En desarrollo, el remontaje de Strict Mode deja `<html>` sólo con los
    // atributos que React maneja desde el JSX y borra el que puso el script
    // inline. Esto lo repone. En producción no hace nada.
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);

      if (stored === "light" || stored === "dark") {
        document.documentElement.setAttribute("data-theme", stored);
      }
    } catch {
      // `localStorage` puede no estar disponible (modo privado, cookies
      // bloqueadas). El sitio sigue funcionando con la preferencia del
      // sistema: no hay nada que reponer.
    }
  }, []);

  function toggle() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Si no se puede persistir, el cambio vale para esta sesión igual.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-9 items-center justify-center rounded-md border border-border-strong text-muted transition-colors hover:border-accent hover:text-accent-strong"
    >
      {/* En tema claro se ofrece pasar a oscuro, y al revés. Icono y texto
          los alterna CSS según `data-theme`. */}
      <span className="theme-when-light">
        <MoonIcon className="size-[1.125rem]" />
      </span>
      <span className="theme-when-dark">
        <SunIcon className="size-[1.125rem]" />
      </span>

      <span className="sr-only theme-when-light">{labelToDark}</span>
      <span className="sr-only theme-when-dark">{labelToLight}</span>
    </button>
  );
}
