"use client";

import ProfileSection from "./ProfileSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
// import CVSection from "./CVSection";
import MobileSection from "./MobileSection";

export default function MobileLayout() {
  return (
    <div className="md:hidden px-4 py-6 space-y-4 overflow-y-auto">
      <div className="glass p-4">
        <ProfileSection />
      </div>

      <MobileSection titleKey="Skills">
        <SkillsSection />
      </MobileSection>

      <MobileSection titleKey="Experience">
        <ExperienceSection />
      </MobileSection>

      <MobileSection titleKey="Projects">
        <ProjectsSection />
      </MobileSection>

      {/*
      <MobileSection title="CV">
        <CVSection />
      </MobileSection>
      */}
    </div>
  );
}
