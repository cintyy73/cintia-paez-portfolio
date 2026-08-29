import type { ContactId } from "@/lib/types";

/** Contact in English. */
export const contact = {
  eyebrow: "Contact",
  title: "Let's talk",

  /** Teaching, motivation and team values. It sits near the contact details
   *  rather than in the hero: it is what matters once someone has already
   *  decided she can solve the problem and is weighing whether they want to
   *  work with her. */
  description:
    "I have experience as a technology teacher, focused on teaching frontend development and digital skills. I am passionate about teaching, technological inclusion and taking part in projects with social impact, on teams that value continuous improvement, collaboration and innovation.",

  lead: "If you have a problem to solve or a team to add someone to, get in touch.",
  availability: "Open to new professional opportunities",

  links: {
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  } satisfies Record<ContactId, string>,
};
