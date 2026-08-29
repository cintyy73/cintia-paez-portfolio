import type {
  ComplementaryEducationId,
  EducationCopy,
  EducationId,
  ExperienceCopy,
  ExperienceId,
} from "@/lib/types";

/**
 * Professional track record and education, in English.
 *
 * SOURCE OF TRUTH: the CV. No role, period, responsibility or institution is
 * added that is not confirmed there. Organisation names live in
 * `src/content/experience.ts` because they are not translated.
 */
export const experience = {
  eyebrow: "Experience",
  title: "Where I put it into practice",
  description:
    "Development in production and teaching in technology. One track record, two ways of solving problems.",
  currentBadge: "Present",

  entries: {
    fonselp: {
      role: "Software Developer",
      period: "August 2023 – Present",
      highlights: [
        "Development and maintenance of education and volunteering platforms on PHP/Laravel and React.",
        "Development and maintenance of internal APIs, and participation in a progressive migration towards JavaScript/TypeScript that coexists with the existing implementation.",
        "Roles, permissions and access rules.",
        "Manual testing, functional QA and bug fixing.",
        "Automation and integrations with Pipedream, Zapier, Zoom and Salesforce.",
        "Proposing continuous improvements and taking part in technical architecture decisions.",
      ],
    },
    "ada-itw": {
      role: "Frontend Development Teacher",
      period: "2023 – 2025",
      highlights: [
        "Theory and practical classes on web development and React.",
        "One-to-one support for students.",
        "Practical activities and marking.",
        "Maintenance and improvements to the institutional website in React.",
      ],
    },
    "plug-it": {
      role: "Digital Skills Teacher",
      period: "2024 – 2025",
      highlights: [
        "Basic computing and Google Workspace.",
        "Digital employability.",
        "Training for adult learners.",
        "Inclusive learning spaces.",
      ],
    },
  } satisfies Record<ExperienceId, ExperienceCopy>,

  educationTitle: "Education",

  education: {
    uces: {
      title: "Technical Degree in Systems Programming",
      period: "In progress",
    },
    "ada-frontend": {
      title: "Frontend Developer",
      period: "May 2022 – May 2023",
    },
    "eet-4": {
      title: "Mechanical Technician",
      period: "2001",
    },
  } satisfies Record<EducationId, EducationCopy>,

  complementaryTitle: "Additional training",

  complementary: {
    "coursera-pm": {
      title: "Project Management",
      period: "August 2023 – April 2024",
    },
    "utn-java": {
      title: "Java",
      period: null,
    },
    "ada-qa": {
      title: "Testing / QA",
      period: null,
    },
  } satisfies Record<ComplementaryEducationId, EducationCopy>,

  previousBackgroundTitle: "Earlier career",

  /** Adds context about responsibility, organisation and working with people,
   *  without competing with the software experience. */
  previousBackground:
    "Before moving into technology, more than 10 years of experience in customer service, team management and independent entrepreneurship, on a technical foundation in mechanics.",
};
