# Contenido pendiente

Lista de todo lo que falta completar antes de publicar el portfolio.
Nada de esto está inventado: donde no había información confirmada se dejó un
placeholder con el formato `[PENDIENTE: ...]`.

Para ver el estado real en cualquier momento:

```bash
grep -rn "\[PENDIENTE:" src/
```

---

## Antes de desplegar (bloqueantes)

- [ ] **Proyectos reales** — `src/content/projects.ts`
      Los dos proyectos actuales son plantillas vacías. Completarlos o poner
      `published: false` en cada uno.
- [ ] **Datos de contacto** — `src/content/profile.ts` → `contactLinks`
      Ninguno está publicado. Completar `value` **y** `href` juntos.
- [ ] **Stack profesional** — `src/content/stack.ts`
      Ninguna tecnología está confirmada todavía.
- [ ] **Dominio** — variable de entorno `NEXT_PUBLIC_SITE_URL`
      Sin ella, `robots.ts` bloquea la indexación a propósito.

---

## Por archivo

### `src/content/profile.ts`

| Campo | Qué falta |
|---|---|
| `location` | Ciudad y país |
| `availability` | Estado laboral (ej. "abierta a propuestas") |
| `photo` | Ruta a la foto en `/public`. Hoy `null` (no se renderiza) |
| `cv` | Ruta al PDF en `/public`. Hoy `null` |
| `contactLinks[email]` | Email de contacto **público** |
| `contactLinks[linkedin]` | URL del perfil |
| `contactLinks[github]` | URL del perfil |

> El email institucional `cintia.paez@fonselp.org` **no se usó**. Definí cuál
> querés publicar antes de completar este campo.

### `src/content/projects.ts`

Por cada proyecto: `title`, `summary`, `problem`, `alternatives` (la
descartada y la elegida, con su `reason`), `solution`, `outcome`, `learnings`,
`stack`, `role`, `period`, `image`, `links`.

- `slug`: cambiarlo por uno real (define la futura URL del case study).
- `outcome`: sin métricas que no puedas respaldar.
- `links`: dejar en `null` lo que no exista; no se renderizan enlaces vacíos.

### `src/content/stack.ts`

**Ninguna tecnología está confirmada todavía** (`confirmed: false` en todas).

`package.json` no es criterio para esta lista: que una tecnología esté
instalada en este portfolio no la vuelve parte de la experiencia profesional, y
puede haber tecnologías de la experiencia que no estén en este proyecto.

Los nombres que ya aparecen (TypeScript, React, Next.js, Tailwind CSS, Git)
están a la espera de confirmación, no afirmados. Falta definir:

- Frontend: cuáles confirmar y cuáles sumar
- Backend: lenguajes, frameworks, APIs
- Datos: bases de datos, ORM
- Herramientas: testing, despliegue / CI

Al confirmar cada item, poner `confirmed: true`. Al descartarlo, borrarlo.

### `src/content/teaching.ts` → `background`

Institución, materias, nivel educativo y año de inicio.

### `src/app/layout.tsx`

- `openGraph.locale`: completar al confirmar el país (`es_AR`, `es_ES`, ...).
  Se omitió para no suponer una ubicación.

---

## Assets faltantes en `/public`

- [ ] Foto de perfil
- [ ] CV en PDF
- [ ] Capturas o imágenes de proyectos
- [ ] `favicon` propio — hoy sigue el de `create-next-app`
      (`src/app/favicon.ico`)

---

## Mejoras fuera del alcance de esta primera versión

- `opengraph-image.tsx` — imagen para compartir en redes (se puede generar con
  `next/og`, sin dependencias nuevas)
- `app/projects/[slug]/page.tsx` — case studies.
  Para habilitarlos: crear la ruta y poner `CASE_STUDIES_ENABLED = true`
  en `src/content/projects.ts`. Las cards de la Home pasan a ser navegables
  solas.
- Sección de formación / experiencia, si querés sumarla
