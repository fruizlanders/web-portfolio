"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const ProfileSection = () => {
  const t = useTranslations("profile");

  return (
    <section className="section">
      <div className="glass p-10 text-center space-y-6">
        <div className="relative w-36 h-36 mx-auto">
          <Image
            src="/portrait.jpg"
            alt={t("imageAlt")}
            fill
            className="rounded-full object-cover ring-2 ring-sky-400/40"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold gradient-text">{t("name")}</h1>

        <h2 className="text-xl text-neutral-400">{t("role")}</h2>
        <h3 className="text-xl text-neutral-400">{t("email")}</h3>

        <p className="max-w-xl mx-auto text-neutral-300 leading-relaxed">
          {t("summary")}
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
