import type { ProjectCopy, ProjectSlug } from "@/lib/types";

/**
 * Project copy in English.
 *
 * The structure (slug, technologies, links, flags) lives in
 * `src/content/projects.ts`. Only translated wording goes here.
 *
 * Proper names are kept as they are: Fonselp, Enlatados, CercaPro,
 * Luis González — Servicio Técnico. Only the plainly descriptive titles are
 * translated.
 */
export const projects = {
  eyebrow: "Projects",
  title: "The method applied",
  description:
    "Every project is told through its reasoning: what the problem was, which alternatives were weighed and what was decided. The list of technologies is the consequence, not the starting point.",

  primaryBadge: "Main project",
  labelProblem: "Problem",
  labelDecision: "Decision",
  labelOutcome: "Outcome",
  labelRole: "Role",
  labelStack: "Stack",
  migratingNote: "in migration",
  repository: "Repository",
  demo: "Demo",
  caseStudy: "View case study",
  empty: "No published projects yet.",
  inPreparationTitle: "Section in progress.",
  inPreparationBody:
    "The cards below show the structure with unfinished sample content.",

  items: {
    "plataforma-fonselp": {
      title: "Fonselp management platform",
      card: {
        problem:
          "A platform years into production had to take on new needs without interrupting the operations of the organisations using it every day.",
        decision:
          "Evolve the existing system and add a new frontend alongside it, instead of rewriting it.",
        outcome:
          "New capabilities landed without cutting operations, and the original application and the new frontend layer now coexist.",
        role:
          "Development and maintenance across backend and frontend: domain, permissions, notifications, reports and internationalisation.",
      },
      summary:
        "The platform where organisations manage volunteering, training, offers and impact measurement. It has been in production for years and keeps evolving.",
      problem:
        "It is a living system: inherited data, business rules accumulated over years and organisations using it every day. Every new need has to land without breaking what already works or interrupting operations. I did not design it: I joined to work on it and to make it grow.",
      alternatives: [
        {
          option:
            "Evolving the existing system and adding a new frontend alongside it, instead of rewriting it",
          decision: "chosen",
          reason:
            "The Laravel application stays in production while a React frontend that consumes the ecosystem's shared API is built. Both layers coexist. It is slower than starting from scratch, but it does not leave the organisations without a platform in the meantime. The evolution is ongoing.",
        },
      ],
      solution:
        "A Laravel application with modules by domain —volunteers, entities, offers, surveys, communications, administration—, with scheduled tasks, notifications, report exporters to Excel and PDF and multi-language views. Alongside it, a React frontend with TypeScript that consumes the shared API, with authentication guards, role-based permissions and end-to-end tests.",
      outcome:
        "The platform took on new capabilities —reports with configurable column order, a daily email summary for organisations, impact indicators derived from direct and indirect impact— without interrupting operations, and gained a frontend layer that coexists with the existing one.",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "Development and maintenance across the backend and frontend of a system I did not design. Controllers for activities, offers, delivery notes and reports; domain models and queries; notifications; commands and scheduled tasks; exporters; roles, permissions and visibility rules; internationalisation of the new frontend; and fixing production errors by attacking the cause rather than the symptom. I also documented the frontend architecture.",
      period: "March 2024 – Present",
    },
    "fonselp-api-rest": {
      title: "Fonselp API REST",
      card: {
        problem:
          "Several applications in the ecosystem needed the same information, and each was working out on its own how to fetch it.",
        decision:
          "Migrate progressively to TypeScript while keeping the PHP/Laravel implementation in production, rather than replacing it at once.",
        outcome:
          "Every application reads from a single source with the same access rules, and the migration advances without cutting the service.",
        role:
          "Role-based permissions and access rules, integrations with other applications in the ecosystem, functional QA and technical decisions.",
      },
      summary:
        "The ecosystem's shared API: it centralises the data and services consumed by the different applications, Enlatados among them.",
      problem:
        "Several applications in the ecosystem need the same information. Without a central point, each one would have to work out on its own how to fetch it, expose it and keep it up to date. The API exists so that all of them read from a single source, with the same access rules.",
      alternatives: [
        {
          option:
            "A progressive migration towards JavaScript, keeping the PHP/Laravel implementation in production while the new one is built",
          decision: "chosen",
          reason:
            "Several applications depend on this API, so the new implementation is built in parallel instead of replacing everything at once. Both coexist and are kept aligned. The migration is ongoing, not finished.",
        },
      ],
      solution:
        "The current implementation, in PHP/Laravel over MySQL, exposes the ecosystem's data over REST with token authentication and role-based access rules. In parallel, a new implementation is being built in TypeScript on Fastify, with Drizzle as the data access layer, a schema documented in OpenAPI, GraphQL and queues for asynchronous work. The domain is organised into modules —activities, users, entities, training, reports, communications, among others— and the permission rules define what each role can see and do.",
      outcome:
        "The applications in the ecosystem, Enlatados included, consume the same data source instead of each maintaining its own. The migration moves forward without cutting the service: both implementations coexist and changes in one are reflected in the other so that consumers see no difference.",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "Development and maintenance on the API in production and on the new implementation. Role-based permissions and access rules, integrations with other applications in the ecosystem, manual testing and functional QA, bug fixing and participation in technical decisions.",
      period: "September 2024 – Present",
    },
    enlatados: {
      title: "Enlatados",
      card: {
        problem:
          "Each organisation needed its own training platform, with its configuration, its language and its own set of features.",
        decision:
          "A single multi-tenant codebase, with each organisation's configuration held as data instead of forking the code.",
        outcome:
          "Different organisations work on the same code, each with its configuration and language, with no separate versions.",
        role:
          "Feature flags per entity and configuration overrides, magic-link authentication, registration forms and talent filters.",
      },
      summary:
        "A multi-tenant volunteering and training management platform, used by participants from different organisations from a single codebase.",
      problem:
        "Each organisation needs its own training and participation platform: its configuration, its rules, its language and its active features. Maintaining a separate build per organisation means replicating every improvement as many times as there are clients.",
      alternatives: [
        {
          option:
            "A single multi-tenant codebase, with each organisation's configuration held as data",
          decision: "chosen",
          reason:
            "The differences between organisations are resolved with feature flags and configuration overrides instead of forking the code. An improvement is made once and reaches all of them; the cost is that every feature has to account for being active or not.",
        },
      ],
      solution:
        "A React application with TypeScript where each organisation has its own configuration: which features it sees, with which visual identity and in which language. It covers activities, training, hour logging, profile, community, classroom, chat, directory and talent, with six languages available. The data is provided by the ecosystem's shared API.",
      outcome:
        "Different organisations work on the same code, each with its own configuration and language, without maintaining separate versions. It is a platform in continuous use and evolving since 2020.",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "One of the repository's main contributors. Feature flags per entity and configuration overrides, authentication with magic-link handoff, registration forms and talent filters.",
      period: "October 2023 – Present",
    },
    "luis-gonzalez-servicio-tecnico": {
      title: "Luis González — Servicio Técnico",
      card: {
        problem:
          "An independent repair service had no channel of its own: what it covered, where it worked and how to reach it were all unclear.",
        decision:
          "Keep the content in data files separate from the components, so it can be updated without touching the interface.",
        outcome:
          "The service now has its own published web presence, with a direct channel for enquiries and ready for search engines.",
        role:
          "An end-to-end project: analysis, design, development, content, contact form, SEO and deployment on its own domain.",
      },
      summary:
        "A website for an independent repair service: presenting the services, covering the service area and opening a direct channel for enquiries.",
      problem:
        "An independent repair service had no channel of its own online. Anyone looking for a repair could not tell clearly which services were covered, which area was served or how to get in touch, and enquiries depended on intermediaries.",
      alternatives: [
        {
          option:
            "Content in data files separate from the components, instead of written inside the markup",
          decision: "chosen",
          reason:
            "The services, coverage areas, frequently asked questions and gallery change often; the design does not. Separating them makes it possible to update the content without touching a line of interface. The cost is a layer of indirection that is only justified because the content does in fact change.",
        },
      ],
      solution:
        "A React application with TypeScript, with the content in data files and the site organised into sections: services, coverage areas with an interactive map, a gallery of work, frequently asked questions, testimonials and contact. The form validates before submitting. It includes complete metadata for search engines and social networks, structured data and light and dark mode. It is deployed on its own domain.",
      outcome:
        "The service now has its own published web presence, with a direct channel for enquiries and the site ready for search engines and for sharing on social networks.",
      learnings: [
        "[PENDIENTE: qué harías igual]",
        "[PENDIENTE: qué harías distinto]",
      ],
      role: "A project built end to end: needs analysis, design, development, content organisation, contact form, SEO and deployment on its own domain.",
      period: "May – July 2026",
    },
    "portfolio-cintia-paez": {
      title: "Personal portfolio",
      card: {
        problem:
          "A portfolio that lists technologies answers which tools I know, but not how I reason about a problem.",
        decision:
          "A one-page site with anchor navigation, but with the data already prepared for dedicated case studies.",
        outcome:
          "A static, accessible, two-language site built without adding a single dependency on top of what Next.js ships.",
        role:
          "Solution design, architecture decisions and content.",
      },
      summary:
        "A site that shows how I reason about a problem, instead of listing the technologies I use.",
      problem:
        "The typical development portfolio shows a stack and screenshots. That answers which tools someone knows, but not how they think: which problem they spotted, which paths they weighed and why they chose one. I needed my own portfolio to make that reasoning visible, which is what actually sets me apart, without turning into another catalogue of logos.",
      alternatives: [
        {
          option:
            "A multi-page hub from the start, with dedicated routes for projects, profile and contact",
          decision: "discarded",
          reason:
            "It gave more surface for SEO and more room per section, but it demanded a lot of content in order not to look empty. With the content still being built, it would have multiplied half-filled pages instead of one solid page.",
        },
        {
          option:
            "A one-page site with anchor navigation, but with the architecture already prepared for case studies",
          decision: "chosen",
          reason:
            "It reaches a presentable site sooner and concentrates the content where it is read. The cost was being locked into a single page, so I avoided that from the data design: the projects already have a slug and every case study field, so adding /projects/[slug] does not force any migration.",
        },
      ],
      solution:
        "Next.js with the App Router and server components by default. The editable content lives separately from the presentation in src/content/, so updating the site does not require opening a component. The projects come from a single source that feeds the home page today and the case studies tomorrow. The design rests on semantic colour tokens defined in CSS, so changing the palette does not force touching any component.",
      outcome:
        "The site builds and prerenders statically. All the text meets WCAG AA contrast, with the six sections exposed as accessible regions and full keyboard navigation. It was built without adding a single dependency on top of what Next.js ships, and the history is split into commits by responsibility.",
      learnings: [
        "Separating the content from the components from day one was the decision that saved the most time later: every text change is one line in a data file.",
        "I would start by defining the colour tokens and checking contrast before writing components. Adjusting the palette afterwards meant reviewing every use of the accent colour.",
      ],
      role: "Solution design, architecture decisions and content",
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
