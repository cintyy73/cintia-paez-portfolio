import { Pending } from "@/components/ui/Pending";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/content/navigation";
import { contactLinks } from "@/content/profile";

/**
 * Contacto.
 *
 * Un enlace se publica solo si tiene `href` confirmado en `profile.ts`.
 * Mientras no lo tenga se muestra como pendiente: nunca se publica un dato de
 * contacto sin confirmación, ni se deja un enlace roto.
 */
export function Contact() {
  return (
    <Section id={SECTIONS.contact} variant="surface">
      <SectionTitle
        eyebrow="Contacto"
        title="Hablemos"
        description="Si tenés un problema para resolver o un equipo al que sumar alguien, escribime."
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-3">
        {contactLinks.map((link) => (
          <li key={link.id}>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              {link.label}
            </p>

            <div className="mt-2 break-words">
              {link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-accent hover:underline"
                >
                  {link.value}
                </a>
              ) : (
                <Pending className="text-sm">{link.value}</Pending>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
