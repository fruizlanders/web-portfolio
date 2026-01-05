import { useLocale, useTranslations } from "next-intl";

export default function CVSection() {
  const locale = useLocale();
  const t = useTranslations("cv");

  const cvUrl =
    locale === "es" ? "/cv/Franco-Ruiz-CV-ES.pdf" : "/cv/Franco-Ruiz-CV-EN.pdf";

  return (
    <section className="text-center space-y-6">
      <h2 className="text-3xl font-semibold">{t("title")}</h2>

      <p className="text-neutral-400 max-w-xl mx-auto">{t("description")}</p>

      <a
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg border border-neutral-700 px-6 py-3 hover:bg-neutral-800 transition"
      >
        {t("download")}
      </a>
    </section>
  );
}
