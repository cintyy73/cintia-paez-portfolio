<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Convenciones del proyecto

Reglas permanentes de este portfolio. Aplican a cualquier persona o agente que
trabaje en el repositorio.

## Naming

Todo el código se escribe en **inglés**:

- variables
- constantes
- funciones
- componentes
- props
- tipos e interfaces
- nombres de archivos
- nombres de carpetas
- rutas
- IDs técnicos
- nombres semánticos de clases CSS

El **contenido visible para la persona usuaria** va en español: textos de la
interfaz, copy de las secciones y los valores dentro de `src/content/`.

La separación es entre *cómo se llama algo* (inglés) y *qué dice* (español).

## Package manager

- Usar **Yarn**.
- No usar npm.
- No generar ni mantener `package-lock.json`.
- El lockfile del proyecto es `yarn.lock` y se versiona.

## Git

- Usar **Conventional Commits**: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`.
- **Nunca** agregar `Co-authored-by` ni ningún otro co-author.
- **No commitear automáticamente.**
- **No hacer push automáticamente.**
- Commitear o pushear solo cuando se solicite explícitamente.

## Contenido

- No inventar información profesional, proyectos, clientes, métricas,
  resultados, experiencia, links ni datos personales.
- Lo que no esté confirmado se marca como `[PENDIENTE: descripción]`.
- Mantener el contenido separado de los componentes cuando corresponda: el
  texto editable vive en `src/content/`, no dentro del JSX.
