import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

function getInitials(title: string) {
  const significant = title.trim().split(/\s+/).filter((w) => w.length > 2);
  const source = significant.length > 1 ? significant : title.trim().split(/\s+/);

  if (source.length > 1) {
    return (source[0][0] + source[1][0]).toUpperCase();
  }

  const capitals = title.match(/[A-Z]/g);
  if (capitals && capitals.length >= 2) {
    return (capitals[0] + capitals[1]).toUpperCase();
  }

  return title.slice(0, 2).toUpperCase();
}

function Chrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-border/80 px-3.5 py-2.5">
      <span className="h-2 w-2 rounded-full bg-white/10" />
      <span className="h-2 w-2 rounded-full bg-white/10" />
      <span className="h-2 w-2 rounded-full bg-white/10" />
    </div>
  );
}

export function ProjectPreview({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,var(--color-accent-soft),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <Chrome />
      <div className="relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden p-8 text-center">
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-8 -right-4 select-none font-mono text-[8rem] font-bold leading-none tracking-tighter text-white/[0.04] sm:text-[10rem]"
        >
          {getInitials(project.title)}
        </span>
        <span className="relative font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.category}
        </span>
        <span className="relative text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {project.title}
        </span>
        <span aria-hidden className="relative h-px w-10 bg-accent/50" />
      </div>
    </div>
  );
}
