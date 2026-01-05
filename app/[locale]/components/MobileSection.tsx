"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function MobileSection({
  titleKey,
  children,
}: {
  titleKey: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navigation");

  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left"
      >
        <span className="font-medium">{titleKey}</span>
        <span className="text-neutral-400 text-xl leading-none">
          {open ? "–" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 pt-2 text-neutral-300">{children}</div>
      )}
    </div>
  );
}
