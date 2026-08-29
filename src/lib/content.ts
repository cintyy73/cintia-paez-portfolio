/**
 * Convención de placeholders.
 *
 * Todo dato que todavía no está confirmado se escribe como
 * `[PENDIENTE: descripción de lo que falta]`. El marcador queda en español
 * a propósito: es contenido visible, no un identificador técnico.
 *
 * Los componentes usan `isPending()` para renderizarlo con un estilo distinto
 * (borde punteado, tono atenuado) en lugar de mostrarlo como si fuera
 * contenido real. Así el placeholder nunca se confunde con un dato.
 *
 * Para encontrar todo lo que falta:  grep -rn "\[PENDIENTE:" src/
 */

export const PENDING_MARKER = "[PENDIENTE:";

/** `true` si el valor es un placeholder sin completar. */
export function isPending(value: string | null | undefined): boolean {
  return typeof value === "string" && value.trimStart().startsWith(PENDING_MARKER);
}

/**
 * Devuelve la descripción interna de un placeholder, sin el marcador.
 * `"[PENDIENTE: nombre del proyecto]"` -> `"nombre del proyecto"`.
 *
 * Permite que el marcador se muestre visualmente pero quede fuera del nombre
 * accesible cuando el placeholder vive dentro de un heading.
 */
export function pendingDescription(value: string): string {
  if (!isPending(value)) {
    return value;
  }

  const withoutMarker = value.trimStart().slice(PENDING_MARKER.length);
  const withoutClosing = withoutMarker.replace(/]\s*$/, "");
  return withoutClosing.trim();
}

/** Filtra los items de una lista que ya tienen contenido real. */
export function onlyCompleted(values: readonly string[]): string[] {
  return values.filter((value) => !isPending(value));
}
