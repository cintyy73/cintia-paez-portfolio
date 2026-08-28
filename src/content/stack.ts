import type { StackCategory } from "@/lib/types";

/**
 * Stack agrupado por ROL en la solución, no como muro de logos.
 * La idea es mostrar criterio de arquitectura: qué problema resuelve cada capa.
 *
 * `confirmed` indica que la tecnología fue confirmada como parte de la
 * experiencia profesional. Hoy NINGUNA lo está.
 *
 * Que una tecnología esté instalada en este repositorio no la convierte en
 * parte del stack profesional, y puede haber tecnologías de la experiencia que
 * no estén en este proyecto: `package.json` no es criterio para esta lista.
 * Las que aparecen nombradas abajo están a la espera de confirmación.
 */
export const stack: StackCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "La capa donde el problema se vuelve usable.",
    items: [
      { name: "TypeScript", confirmed: false },
      { name: "React", confirmed: false },
      { name: "Next.js", confirmed: false },
      { name: "Tailwind CSS", confirmed: false },
      { name: "[PENDIENTE: otras tecnologías de frontend]", confirmed: false },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Lógica, contratos e integración con servicios.",
    items: [
      { name: "[PENDIENTE: lenguajes de backend que usás]", confirmed: false },
      { name: "[PENDIENTE: frameworks de backend]", confirmed: false },
      { name: "[PENDIENTE: APIs / servicios que integrás]", confirmed: false },
    ],
  },
  {
    id: "data",
    title: "Datos",
    description: "Cómo se modela, se guarda y se consulta la información.",
    items: [
      { name: "[PENDIENTE: bases de datos que usás]", confirmed: false },
      { name: "[PENDIENTE: ORM o capa de acceso a datos]", confirmed: false },
    ],
  },
  {
    id: "tooling",
    title: "Herramientas y prácticas",
    description: "Lo que sostiene el trabajo en el tiempo.",
    items: [
      { name: "Git", confirmed: false },
      { name: "[PENDIENTE: testing]", confirmed: false },
      { name: "[PENDIENTE: despliegue / CI]", confirmed: false },
      { name: "[PENDIENTE: otras herramientas]", confirmed: false },
    ],
  },
];
