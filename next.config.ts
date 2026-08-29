import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/**
 * Turbopack infiere la raíz del proyecto buscando un lockfile hacia arriba, y
 * hay un lockfile suelto en el directorio del usuario, fuera del repositorio.
 * Fijar `root` deja la raíz explícita y limita el watching del filesystem a
 * este proyecto, sin depender de dónde aparezca un lockfile.
 */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },

  /**
   * El español no lleva prefijo de idioma.
   *
   * A nivel de rutas los dos idiomas son un segmento `[lang]`, así que el
   * español "vive" en `/es`. Pero la URL publicada es `/`, y cambiarla ahora
   * tiraría a la basura lo que ya está indexado. Este rewrite sirve el HTML
   * de `/es` cuando alguien pide `/`, sin exponer el prefijo ni redirigir.
   *
   * Va como rewrite normal (`afterFiles`): `/` no corresponde a ningún
   * archivo ni página estática, así que la petición cae acá antes de que se
   * evalúen las rutas dinámicas, y de ahí resuelve a `[lang]`.
   */
  async rewrites() {
    return [{ source: "/", destination: "/es" }];
  },

  /**
   * `/es` y `/` servirían exactamente el mismo contenido, que es contenido
   * duplicado para un buscador. La redirección deja una sola URL canónica.
   * Se aplica antes que el rewrite, así que no hay ciclo.
   */
  async redirects() {
    return [{ source: "/es", destination: "/", permanent: true }];
  },
};

export default nextConfig;
