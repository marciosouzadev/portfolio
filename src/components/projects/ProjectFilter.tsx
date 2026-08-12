"use client";

import { cn } from "@/lib/utils";
import { filterOptions, type ProjectTag } from "@/data/projects";

export function ProjectFilter({
  active,
  onChange,
}: {
  active: ProjectTag | "Todos";
  onChange: (value: ProjectTag | "Todos") => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filtrar projetos por categoria"
      className="flex flex-wrap gap-2"
    >
      {filterOptions.map((option) => {
        const isActive = active === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors duration-200",
              isActive
                ? "border-accent/40 bg-accent-soft text-accent"
                : "border-border text-muted hover:border-border-strong hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
