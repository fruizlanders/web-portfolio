"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProfileSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  const t = useTranslations("profile");

  return (
    <section className={compact ? "" : "section"}>
      <div
        className={`glass text-center ${
          compact ? "p-6 space-y-4" : "p-10 space-y-6"
        }`}
      >
        <div className="relative w-28 h-28 mx-auto">
          <Image
            src="/portrait.jpg"
            alt={t("imageAlt")}
            fill
            className="rounded-full object-cover ring-2 ring-sky-400/40"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold gradient-text">{t("name")}</h1>

        <h2 className="text-base text-neutral-400">{t("role")}</h2>

        {!compact && (
          <p className="max-w-xl mx-auto text-neutral-300 leading-relaxed">
            {t("summary")}
          </p>
        )}
      </div>
    </section>
  );
}
