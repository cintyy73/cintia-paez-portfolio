import { PENDING_MARKER, isPending, pendingDescription } from "@/lib/content";

/**
 * Marca visual para contenido `[PENDIENTE: ...]`.
 *
 * Visualmente muestra el marcador completo. Para tecnología asistiva, en
 * cambio, solo expone la descripción interna: el marcador va con
 * `aria-hidden` para que, cuando este componente se use dentro de un heading,
 * el accessible name del heading no incorpore `[PENDIENTE:` ni el corchete
 * de cierre. El estado pendiente se comunica por el estilo (borde punteado,
 * itálica), no por texto inyectado.
 */
export function Pending({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded border border-dashed border-muted/50 px-2 py-0.5 text-muted/80 italic ${className}`}
    >
      <span aria-hidden="true">{PENDING_MARKER} </span>
      {pendingDescription(value)}
      <span aria-hidden="true">]</span>
    </span>
  );
}

/**
 * Renderiza `value` como texto normal, o como placeholder si está pendiente.
 * Evita repetir el condicional en cada sección.
 */
export function TextOrPending({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  if (isPending(value)) {
    return <Pending value={value} className={className} />;
  }

  return <span className={className}>{value}</span>;
}
