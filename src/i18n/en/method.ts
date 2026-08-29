import type { MethodCopy, MethodId } from "@/lib/types";

/**
 * The working method, in English.
 *
 * It describes how a problem is approached, not specific experience. That is
 * why it reads as verifiable principles and includes no clients, projects or
 * results: those live in the projects, with real data.
 */
export const method = {
  eyebrow: "Method",
  title: "How I work",
  description:
    "Writing code is the last part of the job. First comes understanding what is needed, which constraints exist and which paths are possible. Teaching technology forces me to make that reasoning explicit, and that improves the decisions I make when I build.",

  steps: {
    analysis: {
      title: "Needs analysis",
      shortTitle: "Analysis",
      description:
        "Before proposing a solution, I make sure I understand the real problem. What is asked for is often not what is needed, and spotting that gap early avoids building something correct for the wrong problem.",
      signals: [
        "Telling the symptom apart from the underlying problem",
        "Identifying real constraints: time, team, budget, available knowledge",
        "Defining what it means for the solution to work, before starting",
      ],
    },
    alternatives: {
      title: "Weighing alternatives",
      shortTitle: "Alternatives",
      description:
        "There is almost never a single path. I compare the possible options and make each trade-off explicit: what I gain, what I give up and what it costs to sustain over time.",
      signals: [
        "Comparing options against the problem, not against trends",
        "Making the trade-offs of each path explicit",
        "Choosing the simplest solution that solves the whole problem",
      ],
    },
    integration: {
      title: "Technology integration",
      shortTitle: "Integration",
      description:
        "A solution is rarely a single tool. I connect the pieces —frontend, backend, data, external services— looking after the boundaries between them, which is where the hard problems show up.",
      signals: [
        "Defining the responsibilities of each layer clearly",
        "Looking after the contracts between parts: types, errors, edge cases",
        "Adding a dependency only when it is justified",
      ],
    },
    maintainability: {
      title: "Maintainable and scalable solutions",
      shortTitle: "Maintainability",
      description:
        "Code is written once and read many times. I build with whoever picks it up next in mind —myself six months from now included— and with how it will grow without having to be redone.",
      signals: [
        "Clear structure and names that explain the intent",
        "Separating content, logic and presentation",
        "Documenting the decisions, not just the result",
      ],
    },
  } satisfies Record<MethodId, MethodCopy>,
};
