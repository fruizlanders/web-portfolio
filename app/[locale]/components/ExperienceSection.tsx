"use client";

import { useTranslations } from "next-intl";

const ExperienceSection = () => {
  const t = useTranslations("experience");

  return (
    <section className="section">
      <div className="glass p-8">
        <h3 className="text-2xl font-semibold mb-4">{t("title")}</h3>
        <p className="text-neutral-300 leading-relaxed">{t("description")}</p>
      </div>
    </section>
  );
};

export default ExperienceSection;
