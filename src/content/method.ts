import type { MethodStep } from "@/lib/types";

/**
 * El método de trabajo: el bloque central del portfolio.
 *
 * Describe cómo se aborda un problema, no experiencia concreta. Por eso está
 * redactado como principios verificables y no incluye clientes, proyectos ni
 * resultados: eso vive en `projects.ts`, con datos reales.
 */
export const method: MethodStep[] = [
  {
    id: "analysis",
    title: "Análisis de necesidades",
    shortTitle: "Análisis",
    description:
      "Antes de proponer una solución, entiendo el problema real. Muchas veces lo que se pide no es lo que se necesita, y detectar esa diferencia temprano evita construir algo correcto para el problema equivocado.",
    signals: [
      "Distinguir el síntoma del problema de fondo",
      "Identificar restricciones reales: tiempo, equipo, presupuesto, conocimiento disponible",
      "Definir qué significa que la solución funcione, antes de empezar",
    ],
  },
  {
    id: "alternatives",
    title: "Evaluación de alternativas",
    shortTitle: "Alternativas",
    description:
      "Casi nunca hay un solo camino. Comparo las opciones posibles y hago explícito el intercambio de cada una: qué gano, qué resigno y qué costo tiene sostenerla en el tiempo.",
    signals: [
      "Comparar opciones contra el problema, no contra la moda",
      "Explicitar los trade-offs de cada camino",
      "Elegir la solución más simple que resuelva el problema completo",
    ],
  },
  {
    id: "integration",
    title: "Integración de tecnologías",
    shortTitle: "Integración",
    description:
      "Una solución rara vez es una sola herramienta. Conecto las piezas —frontend, backend, datos, servicios externos— cuidando los límites entre ellas, que es donde aparecen los problemas difíciles.",
    signals: [
      "Definir con claridad las responsabilidades de cada capa",
      "Cuidar los contratos entre partes: tipos, errores, casos borde",
      "Sumar una dependencia solo cuando se justifica",
    ],
  },
  {
    id: "maintainability",
    title: "Soluciones mantenibles y escalables",
    shortTitle: "Mantenibilidad",
    description:
      "El código se escribe una vez y se lee muchas. Construyo pensando en quien lo va a tomar después —incluida yo dentro de seis meses— y en cómo va a crecer sin tener que rehacerse.",
    signals: [
      "Estructura clara y nombres que explican la intención",
      "Separar contenido, lógica y presentación",
      "Documentar las decisiones, no solo el resultado",
    ],
  },
];
