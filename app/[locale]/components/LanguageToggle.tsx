"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale: "en" | "es") => {
    const segments = pathname.split("/");

    if (segments[1] !== "en" && segments[1] !== "es") {
      router.replace(`/${locale}`);
      return;
    }

    segments[1] = locale;
    router.replace(segments.join("/"));
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLocale("en")}>EN</button>
      <button onClick={() => changeLocale("es")}>ES</button>
    </div>
  );
}
