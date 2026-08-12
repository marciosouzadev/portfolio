"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { projects as allProjects, type ProjectTag } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { SectionHeading } from "@/components/ui/SectionHeading";

function EditorialGrid({ items }: { items: typeof allProjects }) {
  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border py-16 text-center text-sm text-muted">
        Nenhum projeto nessa categoria ainda.
      </p>
    );
  }

  if (items.length < 3) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} size="lg" />
        ))}
      </div>
    );
  }

  const ordered = [...items].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );
  const [main, side1, side2, ...rest] = ordered;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProjectCard project={main} size="lg" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex-1">
            <ProjectCard project={side1} size="md" />
          </div>
          <div className="flex-1">
            <ProjectCard project={side2} size="md" />
          </div>
        </div>
      </div>

      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} size="md" />
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<ProjectTag | "Todos">("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return allProjects;
    return allProjects.filter((project) => project.tags.includes(active));
  }, [active]);

  return (
    <section id="projetos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Trabalho"
            title="Projetos selecionados"
            description="Alguns dos projetos que desenvolvi, experimentando interfaces, produtos digitais, sistemas e diferentes tecnologias."
          />
        </div>

        <div className="mt-10">
          <ProjectFilter active={active} onChange={setActive} />
        </div>

        <div className="mt-10">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <EditorialGrid items={filtered} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
