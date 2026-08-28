import type { ReactNode } from "react";

/**
 * Marca visual para contenido `[PENDIENTE: ...]`.
 *
 * Deja explícito que es un placeholder y no un dato real, tanto visualmente
 * (borde punteado, itálica) como para lectores de pantalla.
 */
export function Pending({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded border border-dashed border-muted/50 px-2 py-0.5 text-muted/80 italic ${className}`}
    >
      <span className="sr-only">Contenido pendiente de completar: </span>
      {children}
    </span>
  );
}

/**
 * Renderiza `value` como texto normal, o como placeholder si está pendiente.
 * Evita repetir el condicional en cada sección.
 */
export function TextOrPending({
  value,
  isPending: pending,
  className = "",
}: {
  value: string;
  isPending: boolean;
  className?: string;
}) {
  if (pending) {
    return <Pending className={className}>{value}</Pending>;
  }

  return <span className={className}>{value}</span>;
}
