import type { ContactId } from "@/lib/types";

/** Contacto en español. */
export const contact = {
  eyebrow: "Contacto",
  title: "Hablemos",

  /** Docencia, motivación y valores de equipo. Va cerca del contacto y no en
   *  el Hero: es lo que importa cuando alguien ya decidió que puede resolver
   *  el problema y evalúa si quiere trabajar con ella. */
  description:
    "Cuento con experiencia como docente de tecnología, orientada a la enseñanza de desarrollo frontend y habilidades digitales. Me apasionan la enseñanza, la inclusión tecnológica y participar en proyectos con impacto social, en equipos que valoran la mejora continua, la colaboración y la innovación.",

  lead: "Si tenés un problema para resolver o un equipo al que sumar alguien, escribime.",
  availability: "Disponible para nuevas oportunidades profesionales",

  links: {
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  } satisfies Record<ContactId, string>,
};
