import type { StackCategory } from "@/lib/types";

/**
 * Stack, en DOS NIVELES separados por estructura, no por una marca dentro de
 * cada item:
 *
 *   `professionalStack` -> tecnologías defendibles desde experiencia laboral
 *                          real, confirmadas en el CV.
 *   `academicKnowledge` -> estudiadas en formación. Se muestran de forma
 *                          secundaria, sin protagonismo visual.
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
 */
export const professionalStack: StackCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "La capa donde el problema se vuelve usable.",
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
  {
    id: "backend",
    title: "Backend",
    description: "Lógica, contratos e integración con servicios.",
    items: ["PHP", "Laravel", "Nest.js"],
  },
  {
    id: "data",
    title: "Datos",
    description: "Cómo se modela, se guarda y se consulta la información.",
    items: ["MySQL", "MongoDB", "DBeaver"],
  },
  {
    id: "integration",
    title: "Integración y automatización",
    description: "Conectar sistemas que no fueron pensados para hablarse.",
    items: ["Zapier", "Pipedream", "Salesforce", "Zoom", "Postman"],
  },
  {
    id: "tooling",
    title: "Herramientas y entornos",
    description: "Lo que sostiene el trabajo en el tiempo.",
    items: ["Git", "GitHub", "GitLab", "Laragon", "WordPress"],
  },
];

/**
 * Conocimientos de formación. Se declaran como tales: no hay experiencia
 * laboral detrás y el sitio no los presenta como si la hubiera.
 */
export const academicKnowledge: string[] = [
  "Python",
  "Java",
  "Programación orientada a objetos",
  "Diseño orientado a objetos",
  "SQL Server",
  "SQLite",
  "Firebase",
];
