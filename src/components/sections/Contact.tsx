import type { ComponentType } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ExternalLinkIcon,
} from "@/components/ui/icons";
import { Pending } from "@/components/ui/Pending";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/content/navigation";
import { contactLinks } from "@/content/profile";
import type { Dictionary } from "@/i18n/types";
import type { ContactId } from "@/lib/types";

/** Un icono por canal. Es de los pocos lugares donde el icono aporta: se
 *  reconoce el destino antes de leer la dirección. */
const channelIcons: Record<ContactId, ComponentType<{ className?: string }>> = {
  email: MailIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

/**
 * Contacto.
 *
 * Es el cierre del sitio, así que tiene que pesar como un cierre. Antes era
 * una lista de tres columnas de texto plano: la última cosa que se veía era
 * lo más liviano de la página. Ahora los tres canales son bloques
 * accionables, con icono, dirección y área de toque cómoda.
 *
 * Un enlace se publica solo si tiene `href` confirmado en `profile.ts`.
 * Mientras no lo tenga se muestra como pendiente: nunca se publica un dato de
 * contacto sin confirmación, ni se deja un enlace roto.
 */
export function Contact({ dict }: { dict: Dictionary }) {
  const titleId = `${SECTIONS.contact}-title`;
  const copy = dict.contact;

  return (
    <Section id={SECTIONS.contact} labelledBy={titleId} variant="surface">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-16">
        <div>
          <SectionTitle
            id={titleId}
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />

          <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-pretty">
            {copy.lead}
          </p>

          {/* La disponibilidad ya no está en el Hero: este es su único lugar,
              así que se presenta como chip de estado y no como una línea
              suelta al pie del bloque. El punto acompaña al texto, no lo
              reemplaza: se entiende sin percibir el color. */}
          <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-border-strong px-4 py-2 text-sm">
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full bg-accent"
            />
            <span>{copy.availability}</span>
          </p>
        </div>

        <ul className="space-y-3 lg:mt-4">
          {contactLinks.map((link) => {
            const ChannelIcon = channelIcons[link.id];
            const label = copy.links[link.id];
            const isExternal = link.href?.startsWith("http") ?? false;

            return (
              <li key={link.id}>
                {link.href ? (
                  <a
                    href={link.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-border-strong"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
                      <ChannelIcon className="size-5" />
                    </span>

                    <span className="min-w-0">
                      <span className="block font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted">
                        {label}
                      </span>
                      <span className="mt-1 block break-words font-medium group-hover:text-accent-strong">
                        {link.value}
                      </span>
                    </span>

                    {isExternal ? (
                      <>
                        <ExternalLinkIcon className="ml-auto size-4 shrink-0 text-muted" />
                        <span className="sr-only">
                          ({dict.a11y.opensInNewTab})
                        </span>
                      </>
                    ) : null}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-xl border border-dashed border-border px-5 py-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-muted">
                      <ChannelIcon className="size-5" />
                    </span>

                    <span className="min-w-0">
                      <span className="block font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted">
                        {label}
                      </span>
                      <Pending value={link.value} className="mt-1 text-sm" />
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
