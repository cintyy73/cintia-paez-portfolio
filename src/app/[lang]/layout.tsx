import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { profile } from "@/content/profile";
import {
  defaultLocale,
  htmlLang,
  isLocale,
  localePath,
  locales,
  openGraphLocale,
  otherLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { siteUrl } from "@/lib/site";
import "../globals.css";

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

/**
 * Aplica el tema guardado ANTES del primer pintado.
 *
 * Corre de forma síncrona mientras el navegador parsea el HTML, así que el
 * atributo ya está puesto cuando se pinta el primer fotograma: no hay
 * destello de tema claro para quien eligió oscuro. Sin esto el cambio
 * ocurriría recién al hidratar, que es tarde.
 *
 * Si no hay nada guardado no toca nada, y manda `prefers-color-scheme` por
 * CSS. El `try/catch` cubre los casos en que `localStorage` no está
 * disponible (modo privado, cookies bloqueadas).
 */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})()`;

/** Un HTML por idioma, ambos prerenderizados. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/** Cualquier segmento que no sea un idioma conocido es un 404 estático. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  const alternate = otherLocale(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.metadata.title,
      template: `%s — ${profile.name}`,
    },
    description: dict.metadata.description,
    authors: [{ name: profile.name }],
    creator: profile.name,
    // El idioma por defecto vive en `/` y el otro en `/en`. Declarar ambos
    // como alternativas evita que se lean como contenido duplicado y le dice
    // al buscador cuál servir según el idioma de quien busca.
    alternates: {
      canonical: localePath(locale),
      languages: {
        es: localePath("es"),
        en: localePath("en"),
        "x-default": localePath(defaultLocale),
      },
    },
    openGraph: {
      type: "website",
      locale: openGraphLocale[locale],
      alternateLocale: openGraphLocale[alternate],
      url: localePath(locale),
      siteName: profile.name,
      title: dict.metadata.title,
      description: dict.metadata.description,
      // Sin `images` a propósito: la tarjeta la genera
      // `opengraph-image.tsx`, y Next agrega sus etiquetas solo. Declararlas
      // acá las pisaría y volveríamos al PNG de 357x271.
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={htmlLang[locale]}
      // El script de tema cambia `data-theme` antes de que React hidrate.
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        {/* Salto al contenido para navegación por teclado. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-contrast"
        >
          {dict.a11y.skipToContent}
        </a>

        <Header
          locale={locale}
          nav={dict.nav}
          a11y={dict.a11y}
          language={dict.language}
        />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
