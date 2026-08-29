import type { ReactNode } from "react";

/**
 * Etiqueta breve.
 *
 * La variante por defecto es deliberadamente liviana: hairline y fondo
 * transparente. Antes tenía relleno sólido y borde de gris medio, y en una
 * card con nueve tecnologías el bloque de badges pesaba más que el texto del
 * proyecto. Un badge es metadato: tiene que poder leerse, no competir.
 *
 * `accent` queda para lo que sí es una marca de estado (el proyecto
 * principal, el puesto vigente) y `pending` para contenido sin confirmar.
 */
export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "pending";
}) {
  const styles = {
    default: "border-border text-muted",
    accent: "border-accent/40 bg-accent-soft text-accent-strong",
    pending: "border-dashed border-muted/50 text-muted/80 italic",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[0.8125rem] leading-5 ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
