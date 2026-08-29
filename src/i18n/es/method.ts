import type { MethodCopy, MethodId } from "@/lib/types";

/**
 * El método de trabajo en español.
 *
 * Describe cómo se aborda un problema, no experiencia concreta. Por eso está
 * redactado como principios verificables y no incluye clientes, proyectos ni
 * resultados: eso vive en los proyectos, con datos reales.
 */
export const method = {
  eyebrow: "Método",
  title: "Cómo trabajo",
  description:
    "Escribir código es la última parte del trabajo. Antes viene entender qué se necesita, qué restricciones existen y qué caminos son posibles. Enseñar tecnología me obliga a hacer explícito ese razonamiento, y eso mejora las decisiones que tomo cuando construyo.",

  steps: {
    analysis: {
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
    alternatives: {
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
    integration: {
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
    maintainability: {
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
  } satisfies Record<MethodId, MethodCopy>,
};
