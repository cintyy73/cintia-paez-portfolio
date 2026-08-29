import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Card base.
 *
 * Si recibe `href` se renderiza como enlace navegable; si no, como contenedor
 * estático. Esto permite que las cards de proyecto pasen a ser navegables el
 * día que existan los case studies, sin cambiar su markup.
 *
 * Sin sombra: en tema oscuro una sombra no se ve, y sostener dos sistemas de
 * elevación (sombra en claro, borde en oscuro) es la clase de inconsistencia
 * que hace que el modo oscuro parezca un agregado. La elevación la da el
 * salto de superficie más el hairline, y eso funciona igual en los dos temas.
 */
export function Card({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const base = `rounded-xl border border-border bg-card p-6 sm:p-8 ${className}`;

  if (!href) {
    return <div className={base}>{children}</div>;
  }

  return (
    <Link
      href={href}
      className={`${base} block transition-colors hover:border-accent hover:bg-accent-soft`}
    >
      {children}
    </Link>
  );
}
