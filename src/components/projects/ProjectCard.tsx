import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "@/components/projects/ProjectPreview";

export function ProjectCard({
  project,
  size = "md",
}: {
  project: Project;
  size?: "lg" | "md";
}) {
  const href = `/projetos/${project.slug}`;
  const hasGithub = project.github && project.github !== "#";
  const hasDemo = project.demo && project.demo !== "#";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong",
      )}
    >
      <Link href={href} className="flex flex-1 flex-col">
        <div
          className={cn(
            "p-3 pb-0",
            size === "lg" ? "aspect-[16/11] sm:aspect-[16/10]" : "aspect-[16/12]",
          )}
        >
          <div className="h-full w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.015]">
            <ProjectPreview project={project} className="h-full" />
          </div>
        </div>

        <div className={cn("flex flex-1 flex-col", size === "lg" ? "p-6" : "p-5")}>
          <div className="flex items-start justify-between gap-3">
            <h3
              className={cn(
                "font-semibold tracking-tight text-foreground",
                size === "lg" ? "text-xl" : "text-lg",
              )}
            >
              {project.title}
            </h3>
            <span className="shrink-0 rounded-full border border-border-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted">
              {project.category}
            </span>
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          {project.technologies.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>

      <div className="mt-auto flex items-center gap-5 border-t border-border px-5 py-4">
        {hasGithub ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            title="Ver código no GitHub"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon size={15} />
            Código
          </a>
        ) : (
          <span
            aria-disabled="true"
            title="Repositório privado"
            className="inline-flex cursor-not-allowed items-center gap-1.5 text-sm text-muted opacity-40"
          >
            <GithubIcon size={15} />
            Código
          </span>
        )}
        {hasDemo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowUpRight size={15} strokeWidth={1.75} />
            Ver projeto
          </a>
        )}
        <Link
          href={href}
          className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
        >
          Detalhes
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
