import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Fuente display para titulares. Outfit es una geométrica que retoma la
 * construcción del wordmark del logo (caracteres abiertos, terminaciones
 * rectas) sin la ubicuidad de Montserrat. Solo se cargan los pesos que se
 * usan, para no pagar el resto.
 *
 * `next/font` la autoaloja y genera la fallback: no agrega dependencias ni
 * pide nada a Google en tiempo de ejecución.
 */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700"],
});

// El snippet en buscadores y al compartir el link: primero qué es y qué
// experiencia tiene, no la declaración de método. Un recruiter necesita
// identificarla como desarrolladora antes que entender cómo piensa.
const description = profile.professionalSummary;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.roles.join(" y ")}`,
    template: `%s — ${profile.name}`,
  },
  description,
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: profile.name,
    title: `${profile.name} — ${profile.roles.join(" y ")}`,
    description,
    // El lockup completo funciona bien como tarjeta social: ahí el fondo
    // horneado del render no molesta, porque la imagen ocupa su propio marco.
    images: [
      {
        url: "/card.png",
        width: 357,
        height: 271,
        alt: `Logo de ${profile.name}`,
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* Salto al contenido para navegación por teclado. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-contrast"
        >
          Saltar al contenido
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
