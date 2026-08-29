import type { ReactNode } from "react";

/** Ancho máximo y padding horizontal consistentes en todo el sitio. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    // El ancho crece un escalon en lg: a 1024px el texto queda comodo, pero
    // en pantallas grandes deja demasiado aire lateral desaprovechado.
    <div
      className={`mx-auto w-full max-w-5xl px-6 sm:px-8 lg:max-w-6xl lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
