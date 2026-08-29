import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Llamado a la acción.
 *
 * Tres variantes con jerarquía explícita, en el orden en que aparecen en el
 * Hero: `primary` es la acción principal (relleno cobre), `secondary` la
 * alternativa (contorno) y `link` la terciaria (texto con icono). Que las
 * tres fueran botones del mismo peso era parte de por qué el Hero se leía
 * plano: tres llamados con el mismo tono no son una jerarquía.
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
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  /** Agrega los atributos de seguridad para enlaces salientes. */
  external?: boolean;
  /** Descarga el archivo en vez de abrirlo. */
  download?: boolean;
  /** Icono decorativo a la izquierda del texto. */
  icon?: ReactNode;
}) {
  const shared =
    "inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors";

  const styles = {
    // El aro de `accent-border` no es decorativo: en tema claro el relleno
    // cobre queda apenas por debajo del 3:1 contra el fondo, y el aro le da
    // al botón un límite discernible. En oscuro el token vale el mismo cobre,
    // así que el aro desaparece visualmente.
    primary:
      "h-11 rounded-full border border-accent-border bg-accent px-6 text-accent-contrast hover:opacity-90",
    secondary:
      "h-11 rounded-full border border-border-strong px-6 text-foreground hover:border-accent hover:text-accent-strong",
    link: "h-11 rounded-full px-2 text-accent-strong underline-offset-4 hover:underline",
  } as const;

  const externalProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      {...externalProps}
      download={download || undefined}
      className={`${shared} ${styles[variant]}`}
    >
      {icon}
      {children}
    </Link>
  );
}
