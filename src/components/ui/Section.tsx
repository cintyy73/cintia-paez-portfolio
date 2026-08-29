import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Sección de la Home.
 *
 * El `id` es el destino de las anclas de `content/navigation.ts`.
 * `scroll-mt-24` compensa la altura del header fijo para que el título no
 * quede tapado al navegar por ancla.
 *
 * Ya NO lleva `border-t`. Antes cada sección se separaba con una línea, y con
 * siete secciones el resultado era una pila de reglas horizontales que hacía
 * leer la página como un wireframe. La separación ahora la dan el ritmo
 * vertical y la alternancia de superficie, que es lo que hace el trabajo sin
 * dibujar nada.
 *
 * RITMO. No todas las secciones respiran igual: `prominent` (Experiencia y
 * Proyectos, donde se decide una contratación) lleva un escalón más de aire
 * que el resto. Un mismo valor repetido siete veces es lo que hace que una
 * página se lea como landing espaciosa en vez de como pieza editorial.
 *
 * Los valores de mobile quedan intactos. El apretón es sólo de `sm` para
 * arriba, que es donde estaba el problema.
 */
export function Section({
  id,
  labelledBy,
  children,
  variant = "plain",
  size = "default",
  className = "",
}: {
  id?: string;
  /**
   * Id del heading que nombra la sección. Sin nombre accesible, un `section`
   * no se expone como región navegable para lectores de pantalla.
   */
  labelledBy?: string;
  children: ReactNode;
  /** `surface` diferencia visualmente secciones contiguas. */
  variant?: "plain" | "surface";
  /** `prominent` reserva más aire para las secciones que más pesan. */
  size?: "default" | "prominent";
  className?: string;
}) {
  const background = variant === "surface" ? "bg-surface" : "bg-background";

  // Mobile 80px en ambos casos —aprobado, no se toca—. Desktop: 96px las
  // secciones normales y 112px las principales.
  const rhythm =
    size === "prominent" ? "py-20 sm:py-28" : "py-20 sm:py-24";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-24 ${rhythm} ${background} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Composición de dos columnas: títulos a la izquierda, contenido a la derecha.
 *
 * Es lo que rompe la monotonía de "encabezado arriba, grilla abajo" repetida
 * siete veces. En desktop el encabezado queda fijo mientras se recorre el
 * contenido, así el lector no pierde de qué sección está leyendo. Debajo de
 * `lg` colapsa a una sola columna y se lee en el orden natural.
 *
 * No se usa en todas las secciones a propósito: Proyectos y Docencia siguen
 * con el encabezado a ancho completo porque su contenido necesita el ancho.
 */
export function SectionSplit({
  heading,
  children,
}: {
  heading: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] xl:gap-20">
      <div className="lg:sticky lg:top-24 lg:self-start">{heading}</div>
      <div className="mt-12 lg:mt-0">{children}</div>
    </div>
  );
}
