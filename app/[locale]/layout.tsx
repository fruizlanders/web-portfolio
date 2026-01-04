import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import "../../globals.css";
import LanguageToggle from "./components/LanguageToggle";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

/* ============================
   METADATA (params ASYNC)
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

  return {
    title:
      safeLocale === "es"
        ? "Franco Ruiz — Ingeniero de Sistemas Cloud"
        : "Franco Ruiz — Cloud Systems Engineer",
    description:
      safeLocale === "es"
        ? "Ingeniero de Sistemas especializado en infraestructuras cloud escalables."
        : "Systems Engineer specialized in scalable cloud infrastructures.",
    openGraph: {
      locale: safeLocale === "es" ? "es_ES" : "en_US",
    },
  };
}

/* ============================
   LAYOUT (params ASYNC)
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
          {/* CONTENEDOR MAESTRO */}
          <div className="grid grid-rows-[auto_1fr] h-screen">
            {/* HEADER */}
            <header className="flex justify-end p-4">
              <LanguageToggle />
            </header>

            {/* MAIN */}
            <main className="flex items-center justify-center px-6">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
