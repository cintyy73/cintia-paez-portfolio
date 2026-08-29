import type { StackCategoryBase } from "@/lib/types";

/**
 * Stack, en DOS NIVELES separados por estructura, no por una marca dentro de
 * cada item:
 *
 *   `professionalStack` -> tecnologías defendibles desde experiencia laboral
 *                          real, confirmadas en el CV.
 *   conocimientos académicos -> estudiados en formación. Viven en
 *                          `src/i18n/<locale>/stack.ts` porque algunos son
 *                          conceptos y no nombres propios ("Programación
 *                          orientada a objetos"), y esos sí se traducen.
 *
 * El nivel profesional se agrupa por ROL en la solución, no como muro de
 * logos: la idea es mostrar criterio de arquitectura, qué problema resuelve
 * cada capa. Por eso Bootstrap, Chakra UI y Bulma están en Frontend, aunque
 * el CV las liste entre herramientas.
 *
 * Nest.js se sostiene por el CV. La auditoría no lo encontró en los
 * repositorios accesibles, pero eso no prueba ausencia de experiencia: solo
 * significa que no pudo verificarse por esa vía.
 *
 * Nota deliberada: Next.js y Tailwind CSS NO figuran acá aunque este sitio
 * los use. Aparecen únicamente en el campo `stack` del proyecto Portfolio,
 * que es donde corresponde. Estar en `package.json` no vuelve profesional a
 * una tecnología.
 *
 * Los títulos y descripciones de cada categoría se traducen y viven en
 * `src/i18n/<locale>/stack.ts`. Los nombres de tecnología, no.
 */
export const professionalStack: StackCategoryBase[] = [
  {
    id: "frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "Bootstrap",
      "Chakra UI",
      "Bulma",
    ],
  },
  { id: "backend", items: ["PHP", "Laravel", "Nest.js"] },
  { id: "data", items: ["MySQL", "MongoDB", "DBeaver"] },
  {
    id: "integration",
    items: ["Zapier", "Pipedream", "Salesforce", "Zoom", "Postman"],
  },
  {
    id: "tooling",
    items: ["Git", "GitHub", "GitLab", "Laragon", "WordPress"],
  },
];
