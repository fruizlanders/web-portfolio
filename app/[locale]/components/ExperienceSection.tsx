"use client";

import { useTranslations } from "next-intl";
import { useCVModal } from "@/app/[locale]/components/useCVModal";

const ExperienceSection = () => {
  const t = useTranslations("experience");
  const { open } = useCVModal();

  return (
    <section className="section">
      <div className="glass p-8 space-y-6">
        <h3 className="text-2xl font-semibold">{t("title")}</h3>

        <p className="text-neutral-300 leading-relaxed">{t("description")}</p>

        {/* CTA CV */}
        <div>
          <button
            onClick={open}
            className="
              rounded-lg
              bg-sky-500
              px-6
              py-3
              font-medium
              text-neutral-900
              transition
              hover:bg-sky-400
            "
          >
            {t("cta")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
