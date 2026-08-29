import Link from "next/link";
import {
  locales,
  localePath,
  localeShortLabel,
  type Locale,
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/**
 * Selector de idioma.
 *
 * Son ENLACES, no un control de cliente: cada idioma tiene su propia URL
 * (`/` y `/en`), así que se puede compartir, indexar y abrir en una pestaña
 * nueva. Un botón que cambiara el idioma sin tocar la URL dejaría el sitio
 * con una sola dirección para dos contenidos.
 *
 * Sin banderas: una bandera es un país, no un idioma. El inglés no es de un
 * solo país y el español tampoco. Además los emoji de bandera no se
 * renderizan en Windows. Va la abreviatura, que se entiende en cualquier
 * plataforma.
 *
 * El idioma activo se marca con relleno y con `aria-current`, no sólo con
 * color: la distinción no puede depender de percibir el matiz.
 */
export function LocaleSwitcher({
  locale,
  label,
  language,
}: {
  locale: Locale;
  /** Nombre accesible del grupo. */
  label: string;
  /** Nombre de cada idioma, para el texto que lee el lector de pantalla. */
  language: Dictionary["language"];
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-0.5 rounded-md border border-border-strong p-0.5"
    >
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={localePath(item)}
            hrefLang={item}
            aria-current={isActive ? "true" : undefined}
            className={`rounded px-2 py-1 font-mono text-xs font-medium transition-colors ${
              isActive
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground"
            }`}
          >
            <span aria-hidden="true">{localeShortLabel[item]}</span>
            {/* El nombre completo del idioma es lo que se lee en voz alta:
                "ES" fuera de contexto no dice nada. */}
            <span className="sr-only">{language[item]}</span>
          </Link>
        );
      })}
    </div>
  );
}
