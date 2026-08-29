import type { ReactNode } from "react";

/** Etiqueta breve. La variante `pending` marca contenido sin confirmar. */
export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "pending";
}) {
  const styles = {
    default: "border-border bg-surface-strong text-muted",
    accent: "border-accent/30 bg-accent-soft text-accent-strong",
    pending: "border-dashed border-muted/50 bg-transparent text-muted/80 italic",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
