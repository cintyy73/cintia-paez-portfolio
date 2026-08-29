import { notFound } from "next/navigation";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Teaching } from "@/components/sections/Teaching";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Home.
 *
 * Se lee como un índice de la página. El orden es intencional:
 * quién soy → cómo pienso → dónde lo aplico → qué construí →
 * qué aporta la docencia → con qué herramientas → cómo seguir la conversación.
 *
 * El diccionario se resuelve acá y baja por props. Es explícito y no depende
 * de contexto: cada sección declara que necesita traducciones y el typecheck
 * lo verifica.
 */
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);

  return (
    <>
      <Hero locale={lang} dict={dict} />
      <HowIWork dict={dict} />
      <Experience dict={dict} />
      <Projects locale={lang} dict={dict} />
      <Teaching dict={dict} />
      <Stack dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
