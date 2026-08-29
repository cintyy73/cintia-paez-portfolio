import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Llamado a la acción.
 *
 * Usa `next/link` también para las anclas: el día que un destino pase de
 * `#projects` a `/projects`, no hay que cambiar el componente.
 */
export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  /** Agrega los atributos de seguridad para enlaces salientes. */
  external?: boolean;
  /** Descarga el archivo en vez de abrirlo. */
  download?: boolean;
}) {
  const styles = {
    primary:
      "bg-accent text-accent-contrast hover:opacity-90 border border-transparent",
    secondary:
      "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent-strong",
  } as const;

  const externalProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      {...externalProps}
      download={download || undefined}
      className={`inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
