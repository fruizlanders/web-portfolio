"use client";

import { useTranslations } from "next-intl";
import { projects } from "./projects";

export default function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section className="section space-y-6">
      {/* TITLE */}
      <h2 className="text-2xl font-semibold gradient-text">{t("title")}</h2>

      {/* PROJECTS */}
      <div className="grid gap-4">
        {projects.map(({ key, tech, link }) => (
          <a
            key={key}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass p-5 transition hover:border-sky-400"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-medium text-neutral-100 group-hover:text-sky-400 transition">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {t(`${key}.description`)}
                </p>
              </div>

              <span className="text-neutral-500 group-hover:text-sky-400 transition">
                ↗
              </span>
            </div>

            {/* TECH */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="text-xs rounded-full border border-neutral-700 px-3 py-1 text-neutral-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
