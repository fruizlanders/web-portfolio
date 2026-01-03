"use client";

import { useTranslations } from "next-intl";

const SkillsSection = () => {
  const t = useTranslations("skills");

  const groups = ["languages", "backend", "cloud"];

  return (
    <section className="section">
      <h3 className="text-2xl font-semibold mb-6">{t("title")}</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((key) => (
          <div key={key} className="glass p-6">
            <h4 className="font-medium text-sky-400 mb-3">
              {t(`${key}.title`)}
            </h4>

            <ul className="space-y-1 text-neutral-300 text-sm">
              {(t.raw(`${key}.items`) as string[]).map((item) => (
                <li key={item}>▸ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
