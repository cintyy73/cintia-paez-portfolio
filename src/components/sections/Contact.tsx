import { Pending } from "@/components/ui/Pending";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/content/navigation";
import { contactLinks, profile } from "@/content/profile";

/**
 * Contacto.
 *
 * Un enlace se publica solo si tiene `href` confirmado en `profile.ts`.
 * Mientras no lo tenga se muestra como pendiente: nunca se publica un dato de
 * contacto sin confirmación, ni se deja un enlace roto.
 */
export function Contact() {
  const titleId = `${SECTIONS.contact}-title`;

  return (
    <Section id={SECTIONS.contact} labelledBy={titleId} variant="surface">
      <SectionTitle
        id={titleId}
        eyebrow="Contacto"
        title="Hablemos"
        description={profile.motivation}
      />

      <p className="mt-6 max-w-2xl text-lg text-pretty lg:max-w-3xl">
        Si tenés un problema para resolver o un equipo al que sumar alguien,
        escribime.
      </p>

      {/* Tres columnas recien en md: a 640px cada enlace queda en ~190px y
          las direcciones se parten. */}
      <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
        {contactLinks.map((link) => (
          <li key={link.id}>
            <p className="text-sm font-medium uppercase tracking-widest text-accent-strong">
              {link.label}
            </p>

            <div className="mt-2 break-words">
              {link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-accent-strong hover:underline"
                >
                  {link.value}
                </a>
              ) : (
                <Pending value={link.value} className="text-sm" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
