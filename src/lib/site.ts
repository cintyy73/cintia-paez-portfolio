/**
 * Configuración del sitio.
 *
 * `NEXT_PUBLIC_SITE_URL` se define recién al desplegar (por ejemplo
 * `https://cintiapaez.dev`). Hasta entonces cae en localhost, que es lo
 * correcto en desarrollo y evita publicar un dominio inventado.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** `true` cuando existe un dominio real configurado. */
export const hasPublicDomain = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
