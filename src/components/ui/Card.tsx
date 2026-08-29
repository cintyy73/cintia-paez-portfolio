import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Card base.
 *
 * Si recibe `href` se renderiza como enlace navegable; si no, como contenedor
 * estático. Esto permite que las cards de proyecto pasen a ser navegables el
 * día que existan los case studies, sin cambiar su markup.
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
  // `bg-card` es la superficie mas elevada del tema, y el borde aporta el
  // limite en claro, donde card y fondo de seccion coinciden.
  const base = `rounded-xl border border-border bg-card shadow-sm p-6 sm:p-8 ${className}`;

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
