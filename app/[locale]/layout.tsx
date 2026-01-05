import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import "../../globals.css";

import LanguageToggle from "./components/LanguageToggle";
import { CVModalProvider } from "@/app/[locale]/components/useCVModal";
import CVModal from "@/app/[locale]/components/CVModal";

/* ============================
   FONTS
============================ */
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

/* ============================
   METADATA
============================ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const safeLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "es";

  const isES = safeLocale === "es";

  const title = isES
    ? "Franco Ruiz | Ingeniero de Sistemas Cloud"
    : "Franco Ruiz | Cloud Systems Engineer";

  const description = isES
    ? "Ingeniero de Sistemas con experiencia en arquitecturas cloud escalables, Azure, AWS y soluciones modernas."
    : "Systems Engineer experienced in scalable cloud architectures, Azure, AWS, and modern platforms.";

  const baseUrl = "https://francoruizlanders.site";

  return {
    title,
    description,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: "/",
      languages: {
        es: "/es",
        en: "/en",
      },
    },

    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Franco Ruiz",
      locale: isES ? "es_ES" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

/* ============================
   LAYOUT
============================ */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-neutral-950
          text-neutral-100

          overflow-y-auto
          md:overflow-hidden
        `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CVModalProvider>
            {/* CONTENEDOR RAÍZ */}
            <div className="flex min-h-screen flex-col md:h-screen">
              {/* HEADER */}
              <header className="shrink-0 flex justify-end p-4">
                <LanguageToggle />
              </header>

              {/* MAIN */}
              <main
                className="
                  flex-1
                  px-6
                  md:flex
                  md:items-center
                  md:justify-center
                "
              >
                {children}
              </main>
            </div>

            {/* 🔥 MODAL (ESTO FALTABA) */}
            <CVModal />
          </CVModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
