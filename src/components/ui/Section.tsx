import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Sección de la Home.
 *
 * El `id` es el destino de las anclas de `content/navigation.ts`.
 * `scroll-mt-24` compensa la altura del header fijo para que el título no
 * quede tapado al navegar por ancla.
 */
export function Section({
  id,
  children,
  variant = "plain",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  /** `surface` diferencia visualmente secciones contiguas. */
  variant?: "plain" | "surface";
  className?: string;
}) {
  const background = variant === "surface" ? "bg-surface" : "bg-background";

  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-border py-20 sm:py-28 ${background} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
