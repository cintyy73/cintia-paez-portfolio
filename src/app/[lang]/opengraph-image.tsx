import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { methodSteps } from "@/content/method";
import { profile } from "@/content/profile";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Tarjeta para compartir en redes.
 *
 * Antes se publicaba `public/card.png`: un render de 357x271 px. Las redes
 * piden 1200x630 y recortan o escalan lo que no lo cumpla, así que el lockup
 * llegaba chico y borroso. Esta se genera en el build, con las medidas
 * correctas y una por idioma.
 *
 * La identidad la dan los mismos tokens que el sitio —fondo, cobre de marca,
 * gris de texto— y el monograma. Va sobre el fondo oscuro porque el cobre del
 * logo es luminoso y ahí es donde rinde; en el timeline de LinkedIn o de X,
 * que son claros, la pieza oscura además recorta contra el fondo.
 *
 * El logo es un render con el fondo horneado, sin canal alfa, así que se
 * presenta como PLACA con esquinas redondeadas, igual que en el header. No se
 * intenta recortarlo.
 *
 * Sin fuente embebida a propósito: `ImageResponse` tiene un tope de 500 KB
 * para todo el bundle y el monograma ya ocupa buena parte. La jerarquía la
 * dan tamaño, color y composición, no la tipografía de marca.
 */

const BACKGROUND = "#0e0e11";
const FOREGROUND = "#ededf2";
const MUTED = "#9d9daa";
const ACCENT = "#d97736";
const BORDER = "#2a2a33";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Se lee una sola vez, en el build. */
const logoDataUri = `data:image/png;base64,${readFileSync(
  path.join(process.cwd(), "public", "logo.png"),
).toString("base64")}`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/**
 * Una imagen por idioma, cada una con su propio texto alternativo. Sin esto
 * el `alt` sería un único string estático y quedaría en español también en la
 * tarjeta en inglés.
 */
export function generateImageMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const locale: Locale = isLocale(params.lang) ? params.lang : defaultLocale;

  return [
    {
      id: locale,
      size,
      contentType,
      alt: getDictionary(locale).metadata.ogImageAlt,
    },
  ];
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  // Los cuatro pasos del método, que es el diferencial del perfil, como una
  // sola línea al pie. Es contenido real y ya traducido.
  const method = methodSteps
    .map(
      (stepId, index) =>
        `${String(index + 1).padStart(2, "0")} ${dict.method.steps[stepId].shortTitle}`,
    )
    .join("   ·   ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 72,
          padding: "72px 80px",
          backgroundColor: BACKGROUND,
          // Halo cobre detrás del monograma: relaciona el fondo con la marca
          // sin llegar a ser un degradado protagonista.
          backgroundImage:
            "radial-gradient(circle at 80% 38%, rgba(217,119,54,0.22), rgba(217,119,54,0) 58%)",
          color: FOREGROUND,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>

          <div
            style={{
              marginTop: 18,
              // 28px entra en un renglón con la línea de roles más larga de
              // los dos idiomas, que es la española. A 32 se partía en dos y
              // desbalanceaba la composición.
              fontSize: 28,
              lineHeight: 1.3,
              color: MUTED,
            }}
          >
            {dict.hero.roles.join(" · ")}
          </div>

          <div
            style={{
              marginTop: 38,
              width: 112,
              height: 5,
              borderRadius: 3,
              backgroundColor: ACCENT,
            }}
          />

          <div
            style={{
              marginTop: 34,
              fontSize: 20,
              letterSpacing: 1,
              color: MUTED,
            }}
          >
            {method}
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse
            renderiza con Satori, que no conoce `next/image`. */}
        <img
          src={logoDataUri}
          alt=""
          width={260}
          height={260}
          style={{
            borderRadius: 40,
            border: `1px solid ${BORDER}`,
          }}
        />
      </div>
    ),
    size,
  );
}
