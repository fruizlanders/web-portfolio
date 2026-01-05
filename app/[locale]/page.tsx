"use client";

import { useState } from "react";
import DesktopLayout from "./components/DesktopLayout";
import MobileLayout from "./components/MobileLayout";
import type { Section } from "./components/types";

export default function MinimalistPortfolio() {
  const [active, setActive] = useState<Section>("skills");

  return (
    <main className="min-h-screen md:h-screen bg-neutral-950">
      <DesktopLayout active={active} setActive={setActive} />
      <MobileLayout />
    </main>
  );
}
