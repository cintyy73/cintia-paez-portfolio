import { SECTIONS } from "@/content/navigation";

/**
 * Docencia presentada como activo técnico.
 *
 * Los `pillars` describen capacidades derivadas de enseñar y son afirmaciones
 * sobre el enfoque, no sobre instituciones ni trayectoria. Todo dato concreto
 * (dónde, qué, desde cuándo) queda como placeholder hasta confirmarse.
 */
export const teaching = {
  id: SECTIONS.teaching,

  title: "La docencia como activo técnico",

  introduction:
    "Enseñar tecnología no es una actividad paralela al desarrollo: es lo que sostiene la forma en que trabajo. Para explicar una decisión hay que haberla entendido de verdad, y eso deja marcas en el código que escribo.",

  pillars: [
    {
      title: "Comunicar decisiones técnicas",
      description:
        "Traducir un problema técnico a un lenguaje que entienda quien tiene que decidir. Es la diferencia entre una propuesta que se aprueba y una que se posterga.",
    },
    {
      title: "Documentar para que otros continúen",
      description:
        "Enseñar entrena para anticipar dónde se traba quien viene después. Esa misma anticipación es la que hace que un proyecto se pueda dejar y retomar.",
    },
    {
      title: "Simplificar sin perder precisión",
      description:
        "Explicar algo complejo con claridad obliga a encontrar su estructura esencial. Esa búsqueda es, en la práctica, diseño de software.",
    },
    {
      title: "Acompañar procesos de aprendizaje",
      description:
        "Dar devoluciones útiles, detectar el punto exacto donde alguien se traba y sostener el proceso. Lo mismo que requiere revisar código en equipo.",
    },
  ],

  /** Datos concretos de trayectoria docente: completar antes de publicar. */
  background: {
    institution: "[PENDIENTE: institución o instituciones donde enseñás]",
    subjects: "[PENDIENTE: materias o cursos que dictás]",
    level: "[PENDIENTE: nivel educativo — ej. secundario, terciario, formación profesional]",
    since: "[PENDIENTE: año de inicio en la docencia]",
  },
} as const;
