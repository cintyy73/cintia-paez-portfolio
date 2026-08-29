import type { ReactNode } from "react";

/** Encabezado de sección: volanta, título y bajada opcional. */
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
    <header className="max-w-2xl lg:max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-strong">
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={id}
        className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">
          {description}
        </p>
      ) : null}
    </header>
  );
}
