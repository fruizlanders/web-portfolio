"use client";

import { useTranslations } from "next-intl";
import ProfileSection from "./ProfileSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import type { Section } from "./types";

export default function DesktopLayout({
  active,
  setActive,
}: {
  active: Section;
  setActive: (s: Section) => void;
}) {
  const t = useTranslations("navigation");

  return (
    <div className="hidden md:grid grid-cols-5 h-full">
      {/* LEFT */}
      <aside className="col-span-2 border-r border-neutral-800 flex flex-col justify-start">
        <div className="px-6 pt-6">
          <ProfileSection compact />
        </div>

        <nav className="mt-4 px-6 space-y-2">
          {(["skills", "experience", "projects"] as Section[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`block w-full text-left text-sm tracking-wide transition ${
                active === key
                  ? "text-sky-400"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {t(key)}
            </button>
          ))}
        </nav>
      </aside>

      {/* RIGHT */}
      <section className="col-span-3 flex items-center justify-center px-10">
        {active === "skills" && <SkillsSection />}
        {active === "experience" && <ExperienceSection />}
        {active === "projects" && <ProjectsSection />}
      </section>
    </div>
  );
}
