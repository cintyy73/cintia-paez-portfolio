import type { ContactLink } from "@/lib/types";

/**
 * Datos de perfil.
 *
 * Regla: acá solo va información confirmada. Todo lo demás queda como
 * `[PENDIENTE: ...]` y los componentes lo renderizan como placeholder.
 * No se publica ningún dato de contacto sin confirmación explícita.
 */
export const profile = {
  name: "Cintia Paez",

  roles: ["Desarrolladora de Software Full Stack", "Docente de Tecnología"],

  /** Propuesta de valor: el enfoque, no la lista de herramientas. */
  valueProposition:
    "Trabajo sobre el problema antes que sobre la herramienta: analizo la necesidad real, evalúo alternativas, integro las tecnologías que corresponden y construyo soluciones útiles, mantenibles y escalables.",

  /** Párrafo de apoyo del hero. */
  introduction:
    "Escribir código es la última parte del trabajo. Antes viene entender qué se necesita, qué restricciones existen y qué caminos son posibles. Enseñar tecnología me obliga a hacer explícito ese razonamiento, y eso mejora las decisiones que tomo cuando construyo.",

  location: "[PENDIENTE: ciudad, país]",
  availability: "[PENDIENTE: disponibilidad laboral — ej. abierta a propuestas]",

  /** Imagen de perfil. `null` hasta tener una foto propia. */
  photo: null,

  /** Ruta al CV dentro de /public. `null` hasta subirlo. */
  cv: null as string | null,
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
    value: "[PENDIENTE: email de contacto público]",
    href: null,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "[PENDIENTE: URL del perfil de LinkedIn]",
    href: null,
  },
  {
    id: "github",
    label: "GitHub",
    value: "[PENDIENTE: URL del perfil de GitHub]",
    href: null,
  },
];
