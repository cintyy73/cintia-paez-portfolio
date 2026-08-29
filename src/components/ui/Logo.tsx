import Image from "next/image";

/**
 * Monograma de marca.
 *
 * El asset (`public/logo.png`) es un render con el fondo horneado: no tiene
 * canal alfa, así que no puede apoyarse directamente sobre el fondo de la
 * página sin dejar un rectángulo visible.
 *
 * La solución es presentarlo como PLACA: la imagen ocupa todo el contenedor y
 * las esquinas redondeadas la recortan. Así la placa es su propia superficie y
 * se ve igual de intencional en tema claro y en oscuro, sin tener que igualar
 * el degradado del render con un color plano.
 *
 * Cuando exista una versión con fondo transparente, se reemplaza el interior
 * de este componente y ningún consumidor cambia.
 */
export function Logo({
  className = "h-9",
  priority = false,
}: {
  /** Controla la altura de la placa. El ancho se deriva de la proporción. */
  className?: string;
  /** `true` para el logo del Header, que está sobre el pliegue. */
  priority?: boolean;
}) {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-lg border border-border ${className}`}
    >
      {/* Decorativo: el nombre en texto que lo acompaña ya aporta el nombre
          accesible del enlace. Un alt aquí lo duplicaría. */}
      <Image
        src="/logo.png"
        alt=""
        width={319}
        height={284}
        priority={priority}
        className="h-full w-auto"
      />
    </span>
  );
}
