"use client";

import { useCVModal } from "@/app/[locale]/components/useCVModal";
import { useLocale } from "next-intl";

export default function CVButton() {
  const { open } = useCVModal();
  const locale = useLocale();

  return (
    <button
      onClick={open}
      className="rounded-lg border border-neutral-700 px-4 py-2 hover:bg-neutral-800 transition"
    >
      {locale === "es" ? "Ver CV" : "View CV"}
    </button>
  );
}
