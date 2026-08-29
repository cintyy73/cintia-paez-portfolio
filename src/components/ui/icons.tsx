import type { ReactNode } from "react";

/**
 * Set de iconos propio.
 *
 * Escrito a mano en vez de sumar una librería: el proyecto no tiene ninguna
 * dependencia fuera de Next y React, y este sitio necesita diez iconos, no
 * mil. Todos usan `currentColor`, así que heredan el color del contexto y
 * funcionan igual en tema claro y oscuro sin ninguna regla extra.
 *
 * Todos son DECORATIVOS: van con `aria-hidden` y `focusable="false"`. El
 * nombre accesible siempre lo aporta el texto que los acompaña —visible o en
 * `sr-only`— porque un icono no debe ser la única forma de entender un
 * control.
 *
 * Criterio para incluir uno: sólo donde acelera el escaneo o identifica un
 * destino (contacto, CV, ubicación, enlace saliente, controles del header).
 * No hay iconos decorativos junto a los títulos ni en las listas.
 */

type IconProps = {
  /** Tamaño y color se controlan desde acá. */
  className?: string;
};

/** Marco común: geometría de 24, trazo de 1.5 y color heredado. */
function Icon({
  className = "size-5",
  filled = false,
  children,
}: IconProps & { filled?: boolean; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? undefined : "currentColor"}
      strokeWidth={filled ? undefined : 1.5}
      strokeLinecap={filled ? undefined : "round"}
      strokeLinejoin={filled ? undefined : "round"}
    >
      {children}
    </svg>
  );
}

/** Marca oficial de GitHub. */
export function GithubIcon({ className }: IconProps) {
  return (
    <Icon className={className} filled>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </Icon>
  );
}

/** Marca oficial de LinkedIn. */
export function LinkedinIcon({ className }: IconProps) {
  return (
    <Icon className={className} filled>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </Icon>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.25" />
      <path d="m3.5 7.5 7.6 5.07a1.62 1.62 0 0 0 1.8 0L20.5 7.5" />
    </Icon>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 3.75v10.5" />
      <path d="m8 10.5 4 4 4-4" />
      <path d="M4.25 16.5v1.75a2.25 2.25 0 0 0 2.25 2.25h11a2.25 2.25 0 0 0 2.25-2.25V16.5" />
    </Icon>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 21.25s7-5.77 7-11.25a7 7 0 1 0-14 0c0 5.48 7 11.25 7 11.25Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M14 4.75h5.25V10" />
      <path d="M19.25 4.75 11.5 12.5" />
      <path d="M18 13.5v4.75a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4.75" />
    </Icon>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.75v2M12 19.25v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2.75 12h2M19.25 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </Icon>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M20.5 14.65A8.75 8.75 0 0 1 9.35 3.5a8.75 8.75 0 1 0 11.15 11.15Z" />
    </Icon>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
    </Icon>
  );
}
