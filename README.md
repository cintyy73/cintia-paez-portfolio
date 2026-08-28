# Portfolio — Cintia Paez

Portfolio personal de **Cintia Paez**, Desarrolladora de Software Full Stack y
Docente de Tecnología.

Construido con Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS v4.

## Desarrollo

El proyecto usa **Yarn** como package manager (declarado en `packageManager`).
No mezclar con npm: generaría un `package-lock.json` en conflicto con
`yarn.lock`.

```bash
yarn install    # instalar dependencias
yarn dev        # http://localhost:3000
yarn build      # build de producción
yarn lint       # ESLint
```

## Estructura

```
src/
├── app/            # rutas y convenciones de Next (layout, page, sitemap, robots)
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # secciones de la Home
│   └── ui/         # piezas reutilizables (Section, Card, Badge, CTAButton...)
├── content/        # TODO EL CONTENIDO EDITABLE
└── lib/            # tipos y utilidades
```

### Editar el contenido

El contenido está separado de la presentación: para actualizar el sitio
alcanza con editar `src/content/`, sin tocar componentes.

| Archivo | Qué contiene |
|---|---|
| `profile.ts` | Nombre, roles, propuesta de valor, enlaces de contacto |
| `method.ts` | Los cuatro pasos de "Cómo trabajo" |
| `projects.ts` | **Fuente única** de proyectos (Home y futuros case studies) |
| `teaching.ts` | Sección de docencia |
| `stack.ts` | Tecnologías agrupadas por rol |
| `navigation.ts` | Secciones y navegación |

### Placeholders

Lo que todavía no está confirmado se escribe como `[PENDIENTE: ...]` y se
renderiza con un estilo distinto, para que nunca se confunda con un dato real.

```bash
grep -rn "\[PENDIENTE:" src/
```

La lista completa de lo que falta está en
[CONTENIDO-PENDIENTE.md](./CONTENIDO-PENDIENTE.md).

## Diseño

Los tokens de color y tipografía se definen en `src/app/globals.css`.
Tailwind v4 se configura desde CSS: **no hay `tailwind.config.js`**.
El modo oscuro sigue la preferencia del sistema (`prefers-color-scheme`).

## Despliegue

Definir la variable de entorno `NEXT_PUBLIC_SITE_URL` con el dominio real.
Mientras no exista, `robots.ts` bloquea la indexación a propósito para que un
preview con placeholders no llegue a los buscadores.
