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
};

export default nextConfig;
