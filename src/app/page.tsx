import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Teaching } from "@/components/sections/Teaching";

/**
 * Home.
 *
 * Se lee como un índice de la página. El orden es intencional:
 * quién soy → cómo pienso → dónde lo aplico → qué construí →
 * qué aporta la docencia → con qué herramientas → cómo seguir la conversación.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <HowIWork />
      <Experience />
      <Projects />
      <Teaching />
      <Stack />
      <Contact />
    </>
  );
}
