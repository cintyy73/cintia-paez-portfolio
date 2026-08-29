import type { StackCategoryCopy, StackCategoryId } from "@/lib/types";

/**
 * Stack in English.
 *
 * The technologies live in `src/content/stack.ts` because they are not
 * translated. What goes here is the title of each layer and the role it plays
 * in a solution.
 *
 * Academic knowledge does live here: some entries are concepts rather than
 * proper names ("Object-oriented programming"), and those are translated.
 */
export const stack = {
  eyebrow: "Stack",
  title: "Tools, by what they solve",
  description:
    "Technologies are chosen according to the problem. They are grouped by the role they play within a solution, not by preference.",

  categories: {
    frontend: {
      title: "Frontend",
      description: "The layer where the problem becomes usable.",
    },
    backend: {
      title: "Backend",
      description: "Logic, contracts and integration with services.",
    },
    data: {
      title: "Data",
      description: "How information is modelled, stored and queried.",
    },
    integration: {
      title: "Integration and automation",
      description: "Connecting systems that were never meant to talk to each other.",
    },
    tooling: {
      title: "Tooling and environments",
      description: "What keeps the work going over time.",
    },
  } satisfies Record<StackCategoryId, StackCategoryCopy>,

  /** The label says on its own where the knowledge comes from, so no
   *  clarifying sentence is needed underneath. */
  academicTitle: "Knowledge from coursework",
  academicItems: [
    "Python",
    "Java",
    "Object-oriented programming",
    "Object-oriented design",
    "SQL Server",
    "SQLite",
    "Firebase",
  ],
};
