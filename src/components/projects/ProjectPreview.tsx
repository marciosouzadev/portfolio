import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

type Variant = "dashboard" | "grid" | "table" | "card" | "article";

function getVariant(project: Project): Variant {
  if (project.tags.includes("SaaS")) return "dashboard";
  if (project.tags.includes("E-commerce")) return "grid";
  if (project.tags.includes("Sistemas")) return "table";
  if (project.category.toLowerCase().includes("content")) return "article";
  return "card";
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

function Dashboard() {
  return (
    <div className="flex h-full gap-3 p-4">
      <div className="flex w-1/4 flex-col gap-2">
        <div className="h-2 w-3/4 rounded-full bg-white/10" />
        <div className="mt-3 h-2 w-full rounded-full bg-accent/40" />
        <div className="h-2 w-full rounded-full bg-white/[0.06]" />
        <div className="h-2 w-2/3 rounded-full bg-white/[0.06]" />
      </div>
      <div className="flex flex-1 flex-col gap-2.5">
        <div className="grid grid-cols-3 gap-2.5">
          <div className="h-10 rounded-lg border border-border/80 bg-white/[0.02]" />
          <div className="h-10 rounded-lg border border-border/80 bg-white/[0.02]" />
          <div className="h-10 rounded-lg border border-border/80 bg-white/[0.02]" />
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-border/80 bg-white/[0.02] p-3">
          {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-accent/50"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="grid h-full grid-cols-3 gap-2.5 p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 rounded-lg border border-border/80 bg-white/[0.02] p-2.5"
        >
          <div className="aspect-square w-full rounded-md bg-white/[0.06]" />
          <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
          <div className="h-1.5 w-1/2 rounded-full bg-accent/40" />
        </div>
      ))}
    </div>
  );
}

function Table() {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="mb-1 flex gap-2.5">
        <div className="h-9 flex-1 rounded-lg border border-border/80 bg-white/[0.02]" />
        <div className="h-9 flex-1 rounded-lg border border-border/80 bg-white/[0.02]" />
        <div className="h-9 flex-1 rounded-lg border border-accent/30 bg-accent/[0.08]" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border border-border/80 bg-white/[0.02] px-3 py-2.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
          <div className="h-1.5 w-1/3 rounded-full bg-white/10" />
          <div className="ml-auto h-1.5 w-10 rounded-full bg-white/[0.06]" />
        </div>
      ))}
    </div>
  );
}

function Card() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="flex w-full max-w-[70%] flex-col items-center gap-3 rounded-xl border border-border/80 bg-white/[0.02] p-6 text-center">
        <div className="h-8 w-8 rounded-full bg-accent/40" />
        <div className="h-2 w-2/3 rounded-full bg-white/10" />
        <div className="h-2 w-1/2 rounded-full bg-white/[0.06]" />
        <div className="mt-2 h-6 w-1/3 rounded-full bg-accent/30" />
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="h-16 w-full rounded-lg bg-white/[0.05]" />
      <div className="h-2 w-2/3 rounded-full bg-white/10" />
      <div className="h-2 w-1/2 rounded-full bg-white/[0.06]" />
      <div className="mt-2 grid grid-cols-2 gap-2.5">
        <div className="h-14 rounded-lg border border-border/80 bg-white/[0.02]" />
        <div className="h-14 rounded-lg border border-border/80 bg-white/[0.02]" />
      </div>
    </div>
  );
}

const variantMap: Record<Variant, () => React.ReactElement> = {
  dashboard: Dashboard,
  grid: Grid,
  table: Table,
  card: Card,
  article: Article,
};

export function ProjectPreview({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const Variant = variantMap[getVariant(project)];

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
      <Chrome />
      <div className="relative flex-1">
        <Variant />
      </div>
    </div>
  );
}
