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
    // 81rem menos el padding lateral deja ~1200px de contenido útil en
    // pantallas grandes. Los párrafos NO usan ese ancho: cada bloque se acota
    // con su propio `max-w` en torno a 65-75 caracteres. El container ancho
    // es para que las composiciones de dos columnas respiren, no para estirar
    // el texto.
    <div
      className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:max-w-[81rem] lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
