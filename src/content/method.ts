import type { MethodId } from "@/lib/types";

/**
 * El método de trabajo: el bloque central del portfolio.
 *
 * Acá vive sólo el ORDEN de los cuatro pasos. La redacción de cada uno es
 * contenido traducible y vive en `src/i18n/<locale>/method.ts`.
 */
export const methodSteps = [
  "analysis",
  "alternatives",
  "integration",
  "maintainability",
] as const satisfies readonly MethodId[];
