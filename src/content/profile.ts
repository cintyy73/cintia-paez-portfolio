import type { ContactLinkBase } from "@/lib/types";

/**
 * Datos de perfil que NO dependen del idioma.
 *
 * FUENTE DE VERDAD: el CV profesional de Cintia Páez. No se agrega
 * experiencia, tecnología, fecha, responsabilidad ni institución que no esté
 * confirmada ahí o en el propio repositorio.
 *
 * Los textos redactados (resumen, propuesta de valor, disponibilidad) son
 * contenido traducible y viven en `src/i18n/<locale>/profile.ts`.
 */
export const profile = {
  /** Nombre propio: idéntico en todos los idiomas. */
  name: "Cintia Páez",

  /**
   * Imagen de perfil. `null` hasta tener una foto propia.
   *
   * El Hero está compuesto deliberadamente SIN fotografía: la columna derecha
   * es una pieza de identidad (marca, método, contexto), no un hueco
   * reservado. El día que exista una foto, se completa este campo y el panel
   * del Hero la incorpora sin rediseñar la composición.
   */
  photo: null as { src: string; width: number; height: number } | null,

  /** Ruta al CV dentro de /public. `null` lo oculta del Hero. */
  cv: "/CV-Cintia-Paez.pdf" as string | null,
} as const;

/**
 * Enlaces de contacto.
 *
 * `href: null` significa "no confirmado": se muestra como pendiente y NUNCA
 * como enlace. Para publicar uno, completá `value` y `href` a la vez.
 * Las etiquetas visibles viven en `src/i18n/<locale>/`.
 */
export const contactLinks: ContactLinkBase[] = [
  {
    id: "email",
    value: "paezcintia.dev@gmail.com",
    href: "mailto:paezcintia.dev@gmail.com",
  },
  {
    id: "linkedin",
    // Se muestra la forma legible y se enlaza la URL exacta provista.
    value: "linkedin.com/in/cintia-paez",
    href: "https://www.linkedin.com/in/cintia-paez/",
  },
  {
    id: "github",
    value: "github.com/cintyy73",
    href: "https://github.com/cintyy73",
  },
];
