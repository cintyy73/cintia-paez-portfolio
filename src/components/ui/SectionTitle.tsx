import type { ReactNode } from "react";

/** Encabezado de sección: volanta, título y bajada opcional. */
export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <header className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
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
