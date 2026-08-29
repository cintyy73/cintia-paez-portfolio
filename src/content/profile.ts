import type { ContactLink } from "@/lib/types";

/**
 * Datos de perfil.
 *
 * FUENTE DE VERDAD: el CV profesional de Cintia Páez. No se agrega
 * experiencia, tecnología, fecha, responsabilidad ni institución que no esté
 * confirmada ahí o en el propio repositorio.
 *
 * Lo no confirmado queda como `[PENDIENTE: ...]` y los componentes lo
 * renderizan como placeholder. No se publica ningún dato de contacto sin
 * confirmación explícita.
 */
export const profile = {
  name: "Cintia Páez",

  /** Orden intencional: el eje principal es el desarrollo; la docencia es el
   *  segundo eje diferencial. */
  roles: ["Desarrolladora de Software", "Docente de Tecnología"],

  /** Perfil profesional, tomado del CV. Establece experiencia real antes que
   *  cualquier declaración de método. */
  professionalSummary:
    "Desarrolladora de Software enfocada en la creación de soluciones digitales para plataformas educativas y de voluntariado. Trabajo sobre el ciclo de vida completo del software: análisis, desarrollo, implementación, mantenimiento, testing y soporte.",

  /** Segundo párrafo del perfil: docencia, motivación y valores de equipo.
   *  Va cerca del contacto, no en el Hero: es lo que importa cuando alguien
   *  ya decidió que puede resolver el problema y evalúa si quiere trabajar
   *  con ella. */
  motivation:
    "Cuento con experiencia como docente de tecnología, orientada a la enseñanza de desarrollo frontend y habilidades digitales. Me apasionan la enseñanza, la inclusión tecnológica y participar en proyectos con impacto social, en equipos que valoran la mejora continua, la colaboración y la innovación.",

  /** Propuesta de valor: el enfoque, no la lista de herramientas. */
  valueProposition:
    "Trabajo sobre el problema antes que sobre la herramienta: analizo la necesidad real, evalúo alternativas, integro las tecnologías que corresponden y construyo soluciones útiles, mantenibles y escalables.",

  /** Párrafo de apoyo de la sección "Cómo trabajo". */
  introduction:
    "Escribir código es la última parte del trabajo. Antes viene entender qué se necesita, qué restricciones existen y qué caminos son posibles. Enseñar tecnología me obliga a hacer explícito ese razonamiento, y eso mejora las decisiones que tomo cuando construyo.",

  location: "Don Torcuato, Tigre, Buenos Aires",
  availability: "Disponible para nuevas oportunidades profesionales",

  /** Imagen de perfil. `null` hasta tener una foto propia. */
  photo: null,

  /** Ruta al CV dentro de /public. `null` lo oculta del Hero. */
  cv: "/CV-Cintia-Paez.pdf" as string | null,
} as const;

/**
 * Enlaces de contacto.
 *
 * `href: null` significa "no confirmado": se muestra como pendiente y NUNCA
 * como enlace. Para publicar uno, completá `value` y `href` a la vez.
 */
export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: "paezcintia.dev@gmail.com",
    href: "mailto:paezcintia.dev@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    // Se muestra la forma legible y se enlaza la URL exacta provista.
    value: "linkedin.com/in/cintia-paez",
    href: "https://www.linkedin.com/in/cintia-paez/",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/cintyy73",
    href: "https://github.com/cintyy73",
  },
];
