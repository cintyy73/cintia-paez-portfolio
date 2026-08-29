import type { ProjectCopy, ProjectSlug } from "@/lib/types";

/**
 * Redacción de los proyectos en español.
 *
 * La estructura (slug, tecnologías, enlaces, flags) vive en
 * `src/content/projects.ts`. Acá sólo va lo que se traduce.
 *
 * Regla de contenido: cada campo tiene que ser verificable. Nada de métricas,
 * fechas, clientes, tecnologías ni resultados que no puedan respaldarse. Lo
 * que no esté confirmado queda como `[PENDIENTE: ...]`, redactado como una
 * pregunta concreta para que completarlo sea directo.
 */
export const projects = {
  eyebrow: "Proyectos",
  title: "El método aplicado",
  description:
    "Cada proyecto está contado por su razonamiento: qué problema había, qué alternativas se evaluaron y qué se decidió. La lista de tecnologías es la consecuencia, no el punto de partida.",

  primaryBadge: "Proyecto principal",
  labelProblem: "Problema",
  labelDecision: "Decisión",
  labelOutcome: "Resultado",
  labelRole: "Rol",
  labelStack: "Stack",
  migratingNote: "en migración",
  repository: "Repositorio",
  demo: "Demo",
  caseStudy: "Ver caso de estudio",
  empty: "No hay proyectos publicados todavía.",
  inPreparationTitle: "Sección en preparación.",
  inPreparationBody:
    "Las tarjetas de abajo muestran la estructura con contenido de ejemplo sin completar.",

  items: {
    "plataforma-fonselp": {
      title: "Plataforma de gestión Fonselp",
      card: {
        problem:
          "Una plataforma con años en producción tenía que incorporar necesidades nuevas sin interrumpir la operación de las organizaciones que la usan a diario.",
        decision:
          "Evolucionar el sistema existente y sumar un frontend nuevo en paralelo, en lugar de reescribirlo.",
        outcome:
          "Se incorporaron capacidades nuevas sin cortar la operación, y hoy conviven la aplicación original y la capa de frontend nueva.",
        role:
          "Desarrollo y mantenimiento sobre backend y frontend: dominio, permisos, notificaciones, reportes e internacionalización.",
      },
      summary:
        "La plataforma donde las organizaciones gestionan voluntariado, capacitaciones, ofrecimientos y medición de impacto. Lleva años en producción y sigue evolucionando.",
      problem:
        "Es un sistema vivo: datos heredados, reglas de negocio acumuladas durante años y organizaciones usándolo todos los días. Cada necesidad nueva tiene que entrar sin romper lo que ya funciona ni interrumpir la operación. No lo diseñé: entré a trabajar sobre él y a hacerlo crecer.",
      alternatives: [
        {
          option:
            "Evolucionar el sistema existente y sumar un frontend nuevo en paralelo, en lugar de reescribirlo",
          decision: "chosen",
          reason:
            "La aplicación Laravel sigue en producción mientras se construye un frontend React que consume la API compartida del ecosistema. Ambas capas conviven. Es más lento que empezar de cero, pero no deja a las organizaciones sin plataforma en el medio. La evolución está en curso.",
        },
      ],
      solution:
        "Aplicación Laravel con módulos por dominio —voluntarios, entidades, ofrecimientos, encuestas, comunicaciones, administración—, con tareas programadas, notificaciones, exportadores de reportes a Excel y PDF y vistas multi-idioma. En paralelo, un frontend React con TypeScript que consume la API compartida, con guards de autenticación, permisos por rol y pruebas end-to-end.",
      outcome:
        "La plataforma incorporó capacidades nuevas —reportes con orden de columnas configurable, resumen diario por correo a las organizaciones, indicadores de impacto derivados de impacto directo e indirecto— sin interrumpir la operación, y sumó una capa de frontend que convive con la existente.",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "Desarrollo y mantenimiento sobre backend y frontend de un sistema que no diseñé. Controladores de actividades, ofrecimientos, remitos y reportes; modelos y consultas de dominio; notificaciones; comandos y tareas programadas; exportadores; roles, permisos y reglas de visibilidad; internacionalización del frontend nuevo; y resolución de errores en producción atacando la causa y no el síntoma. También documenté la arquitectura del frontend.",
      period: "Marzo 2024 – Actualidad",
    },
    "fonselp-api-rest": {
      title: "Fonselp API REST",
      card: {
        problem:
          "Varias aplicaciones del ecosistema necesitaban la misma información y cada una resolvía por su cuenta cómo obtenerla.",
        decision:
          "Migrar de forma progresiva a TypeScript manteniendo en producción la implementación PHP/Laravel, en vez de reemplazarla de una vez.",
        outcome:
          "Todas las aplicaciones leen de una sola fuente con las mismas reglas de acceso, y la migración avanza sin cortar el servicio.",
        role:
          "Permisos y reglas de acceso por rol, integraciones con otras aplicaciones del ecosistema, QA funcional y decisiones técnicas.",
      },
      summary:
        "La API compartida del ecosistema: centraliza los datos y servicios que consumen las distintas aplicaciones, entre ellas Enlatados.",
      problem:
        "Varias aplicaciones del ecosistema necesitan la misma información. Sin un punto central, cada una tendría que resolver por su cuenta cómo obtenerla, exponerla y mantenerla al día. La API existe para que todas lean de una sola fuente, con las mismas reglas de acceso.",
      alternatives: [
        {
          option:
            "Migración progresiva hacia JavaScript, manteniendo en producción la implementación en PHP/Laravel mientras se construye la nueva",
          decision: "chosen",
          reason:
            "Hay varias aplicaciones dependiendo de esta API, así que la nueva implementación se construye en paralelo en lugar de reemplazar todo de una vez. Ambas conviven y se mantienen alineadas. La migración está en curso, no terminada.",
        },
      ],
      solution:
        "La implementación actual, en PHP/Laravel sobre MySQL, expone los datos del ecosistema por REST con autenticación por token y reglas de acceso por rol. En paralelo se construye una nueva implementación en TypeScript sobre Fastify, con Drizzle como capa de acceso a datos, esquema documentado en OpenAPI, GraphQL y colas para el trabajo asincrónico. El dominio está organizado por módulos —actividades, usuarios, entidades, capacitaciones, reportes, comunicaciones, entre otros— y las reglas de permisos definen qué puede ver y hacer cada rol.",
      outcome:
        "Las aplicaciones del ecosistema, Enlatados incluida, consumen la misma fuente de datos en lugar de mantener cada una la suya. La migración avanza sin cortar el servicio: las dos implementaciones conviven y los cambios de una se van reflejando en la otra para que los consumidores no vean diferencias.",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "Desarrollo y mantenimiento sobre la API en producción y sobre la nueva implementación. Permisos y reglas de acceso por rol, integraciones con otras aplicaciones del ecosistema, testing manual y QA funcional, resolución de errores y participación en decisiones técnicas.",
      period: "Septiembre 2024 – Actualidad",
    },
    enlatados: {
      title: "Enlatados",
      card: {
        problem:
          "Cada organización necesitaba su propia plataforma de capacitación, con su configuración, su idioma y sus funcionalidades.",
        decision:
          "Una sola base de código multi-tenant, con la configuración de cada organización como dato en lugar de bifurcar el código.",
        outcome:
          "Organizaciones distintas trabajan sobre el mismo código, cada una con su configuración y su idioma, sin versiones separadas.",
        role:
          "Feature flags por entidad y overrides de configuración, autenticación con magic link, formularios de registro y filtros de talentos.",
      },
      summary:
        "Plataforma multi-tenant de gestión de voluntariado y capacitaciones, usada por participantes de distintas organizaciones desde una misma base de código.",
      problem:
        "Cada organización necesita su propia plataforma de capacitación y participación: su configuración, sus reglas, su idioma y sus funcionalidades activas. Sostener un desarrollo separado por organización obliga a replicar cada mejora tantas veces como clientes haya.",
      alternatives: [
        {
          option:
            "Una sola base de código multi-tenant, con la configuración de cada organización como dato",
          decision: "chosen",
          reason:
            "Las diferencias entre organizaciones se resuelven con feature flags y overrides de configuración en lugar de bifurcar el código. Una mejora se hace una vez y llega a todas; el costo es que cada funcionalidad tiene que contemplar que puede estar activa o no.",
        },
      ],
      solution:
        "Aplicación React con TypeScript donde cada organización tiene su propia configuración: qué funcionalidades ve, con qué identidad visual y en qué idioma. Cubre actividades, capacitaciones, registro de horas, perfil, comunidad, aula, chat, directorio y talentos, con seis idiomas disponibles. Los datos los provee la API compartida del ecosistema.",
      outcome:
        "Organizaciones distintas trabajan sobre el mismo código, cada una con su configuración y su idioma, sin mantener versiones separadas. Es una plataforma en uso continuo y en evolución desde 2020.",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "Una de las principales contribuidoras del repositorio. Feature flags por entidad y overrides de configuración, autenticación con handoff mediante magic link, formularios de registro y filtros de talentos.",
      period: "Octubre 2023 – Actualidad",
    },
    "luis-gonzalez-servicio-tecnico": {
      title: "Luis González — Servicio Técnico",
      card: {
        problem:
          "Un servicio técnico independiente no tenía canal propio: no se sabía qué cubría, en qué zona trabajaba ni cómo contactarlo.",
        decision:
          "Mantener el contenido en archivos de datos separados de los componentes, para poder actualizarlo sin tocar la interfaz.",
        outcome:
          "El servicio pasó a tener presencia web propia y publicada, con un canal directo de consultas y preparada para buscadores.",
        role:
          "Proyecto de punta a punta: análisis, diseño, desarrollo, contenido, formulario de contacto, SEO y despliegue con dominio propio.",
      },
      summary:
        "Sitio web para un servicio técnico independiente: presentar los servicios, cubrir la zona de trabajo y abrir un canal directo de consultas.",
      problem:
        "Un servicio técnico independiente no tenía canal propio en internet. Quien buscaba una reparación no podía saber con claridad qué servicios cubría, en qué zona trabajaba ni cómo contactarlo, y las consultas dependían de intermediarios.",
      alternatives: [
        {
          option:
            "Contenido en archivos de datos separados de los componentes, en lugar de escrito dentro del maquetado",
          decision: "chosen",
          reason:
            "Los servicios, las zonas de cobertura, las preguntas frecuentes y la galería cambian seguido; el diseño no. Separarlos permite actualizar el contenido sin tocar una línea de interfaz. El costo es una capa de indirección que sólo se justifica porque el contenido efectivamente cambia.",
        },
      ],
      solution:
        "Aplicación React con TypeScript, con el contenido en archivos de datos y el sitio organizado en secciones: servicios, zonas de cobertura con mapa interactivo, galería de trabajos, preguntas frecuentes, testimonios y contacto. El formulario valida antes de enviar. Incluye metadatos completos para buscadores y redes, datos estructurados y modo claro y oscuro. Está desplegado con dominio propio.",
      outcome:
        "El servicio pasó a tener presencia web propia y publicada, con un canal directo de consultas y el sitio preparado para buscadores y para compartirse en redes.",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "Proyecto desarrollado de punta a punta: análisis de la necesidad, diseño, desarrollo, organización del contenido, formulario de contacto, SEO y despliegue con dominio propio.",
      period: "Mayo – Julio 2026",
    },
    "portfolio-cintia-paez": {
      title: "Portfolio personal",
      card: {
        problem:
          "Un portfolio que lista tecnologías responde qué herramientas conozco, pero no cómo razono un problema.",
        decision:
          "One-page con navegación por anclas, pero con los datos ya preparados para case studies propios.",
        outcome:
          "Un sitio estático, accesible y en dos idiomas, construido sin sumar una sola dependencia sobre las que trae Next.js.",
        role:
          "Diseño de la solución, decisiones de arquitectura y contenido.",
      },
      summary:
        "Un sitio que muestra cómo razono un problema, en lugar de listar las tecnologías que uso.",
      problem:
        "El portfolio de desarrollo típico muestra un stack y capturas de pantalla. Eso responde qué herramientas conoce alguien, pero no cómo piensa: qué problema detectó, qué caminos evaluó y por qué eligió uno. Necesitaba que mi propio portfolio hiciera visible ese razonamiento, que es lo que realmente me diferencia, sin volverse otro catálogo de logos.",
      alternatives: [
        {
          option:
            "Hub multipágina desde el inicio, con rutas propias para proyectos, perfil y contacto",
          decision: "discarded",
          reason:
            "Daba más superficie para SEO y más espacio por sección, pero exigía mucho contenido para no verse vacío. Con el contenido todavía en construcción, habría multiplicado páginas a medio llenar en vez de una sola sólida.",
        },
        {
          option:
            "One-page con navegación por anclas, pero con la arquitectura ya preparada para case studies",
          decision: "chosen",
          reason:
            "Llega antes a un sitio presentable y concentra el contenido donde se lee. El costo era quedar encerrada en una sola página, así que lo evité desde el diseño de datos: los proyectos ya tienen slug y todos los campos del caso de estudio, de modo que agregar /projects/[slug] no obliga a migrar nada.",
        },
      ],
      solution:
        "Next.js con App Router y componentes de servidor por defecto. El contenido editable vive separado de la presentación en src/content/, así que actualizar el sitio no requiere abrir un componente. Los proyectos salen de una fuente única que alimenta la Home hoy y los case studies mañana. El diseño se apoya en tokens semánticos de color definidos en CSS, de forma que cambiar la paleta no obliga a tocar ningún componente.",
      outcome:
        "El sitio compila y se prerenderiza estático. Todo el texto cumple el contraste AA de WCAG, con las seis secciones expuestas como regiones accesibles y navegación por teclado completa. Se construyó sin agregar una sola dependencia sobre las que trae Next.js, y el historial quedó en commits separados por responsabilidad.",
      learnings: [
        "Separar el contenido de los componentes desde el primer día fue la decisión que más tiempo ahorró después: cada cambio de texto es una línea en un archivo de datos.",
        "Empezaría por definir los tokens de color verificando contraste antes de escribir componentes. Ajustar la paleta después obligó a revisar cada uso del color de acento.",
      ],
      role: "Diseño de la solución, decisiones de arquitectura y contenido",
      period: "2026",
    },
    cercapro: {
      title: "CercaPro",
      card: {
        problem:
          "[PENDIENTE: el problema en una frase]",
        decision:
          "[PENDIENTE: la decisión en una frase]",
        outcome:
          "[PENDIENTE: el resultado en una frase]",
        role:
          "[PENDIENTE: tu rol en una frase]",
      },
      summary: "[PENDIENTE: una línea. Qué es y qué problema resuelve]",
      problem: "[PENDIENTE: qué necesidad apareció y en qué contexto]",
      alternatives: [
        {
          option: "[PENDIENTE: camino descartado]",
          decision: "discarded",
          reason: "[PENDIENTE: por qué]",
        },
        {
          option: "[PENDIENTE: camino elegido]",
          decision: "chosen",
          reason: "[PENDIENTE: qué se ganaba y qué se resignaba]",
        },
      ],
      solution: "[PENDIENTE: qué se construyó]",
      outcome: "[PENDIENTE: efecto concreto]",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "[PENDIENTE: tu participación real]",
      period: "[PENDIENTE: período]",
    },
    "catalogo-de-impacto": {
      title: "Catálogo de Impacto",
      card: {
        problem:
          "[PENDIENTE: el problema en una frase]",
        decision:
          "[PENDIENTE: la decisión en una frase]",
        outcome:
          "[PENDIENTE: el resultado en una frase]",
        role:
          "[PENDIENTE: tu rol en una frase]",
      },
      summary: "[PENDIENTE: una línea. Qué es y qué problema resuelve]",
      problem: "[PENDIENTE: qué necesidad apareció y en qué contexto]",
      alternatives: [
        {
          option: "[PENDIENTE: camino descartado]",
          decision: "discarded",
          reason: "[PENDIENTE: por qué]",
        },
        {
          option: "[PENDIENTE: camino elegido]",
          decision: "chosen",
          reason: "[PENDIENTE: qué se ganaba y qué se resignaba]",
        },
      ],
      solution: "[PENDIENTE: qué se construyó]",
      outcome: "[PENDIENTE: efecto concreto]",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "[PENDIENTE: tu participación real]",
      period: "[PENDIENTE: período]",
    },
    "catalogo-de-ongs": {
      title: "Catálogo de ONGs",
      card: {
        problem:
          "[PENDIENTE: el problema en una frase]",
        decision:
          "[PENDIENTE: la decisión en una frase]",
        outcome:
          "[PENDIENTE: el resultado en una frase]",
        role:
          "[PENDIENTE: tu rol en una frase]",
      },
      summary: "[PENDIENTE: una línea. Qué es y qué problema resuelve]",
      problem: "[PENDIENTE: qué necesidad apareció y en qué contexto]",
      alternatives: [
        {
          option: "[PENDIENTE: camino descartado]",
          decision: "discarded",
          reason: "[PENDIENTE: por qué]",
        },
        {
          option: "[PENDIENTE: camino elegido]",
          decision: "chosen",
          reason: "[PENDIENTE: qué se ganaba y qué se resignaba]",
        },
      ],
      solution: "[PENDIENTE: qué se construyó]",
      outcome: "[PENDIENTE: efecto concreto]",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "[PENDIENTE: tu participación real]",
      period: "[PENDIENTE: período]",
    },
  } satisfies Record<ProjectSlug, ProjectCopy>,
};
