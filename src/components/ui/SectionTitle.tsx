import type { ReactNode } from "react";

/**
 * Encabezado de sección: volanta, título y bajada opcional.
 *
 * El h2 llega hasta `text-4xl` y no más. Antes escalaba a `text-5xl`, casi el
 * mismo cuerpo que el h1, y la jerarquía entre "quién es" y "qué sección es"
 * quedaba plana. Bajarle un escalón al h2 es lo que le da presencia al h1 sin
 * tener que agrandar nada.
 */
export function SectionTitle({
  id,
  eyebrow,
  title,
  description,
}: {
  /** Se aplica al h2 para que la sección pueda referenciarlo con
   *  `aria-labelledby` sin agregar texto visible nuevo. */
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <header className="max-w-[52ch]">
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-strong">
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={id}
        className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
