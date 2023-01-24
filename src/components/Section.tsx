import React from "react";
import { PageLevelContext } from "../lib/LevelContext";
import { usePageLevel } from "../hooks/use-page-level";

interface SectionProps {
  isFancy: boolean;
  children: React.ReactNode;
}
export default function Section({ children, isFancy = false }: SectionProps) {
  const { level } = usePageLevel();

  return (
    <section className={"section " + (isFancy ? "fancy" : "")}>
      <PageLevelContext.Provider value={level + 1}>
        {children}
      </PageLevelContext.Provider>
    </section>
  );
}
