import {
  Atom,
  Boxes,
  FileCode2,
  Braces,
  FileType2,
  Palette,
  Server,
  Flame,
  Database,
  Layers,
  GitBranch,
  FolderGit2,
  AppWindow,
  Cloud,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { technologies } from "@/data/technologies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  React: Atom,
  "Next.js": Boxes,
  TypeScript: FileType2,
  JavaScript: Braces,
  HTML: FileCode2,
  CSS: Palette,
  "Tailwind CSS": Palette,
  "Node.js": Server,
  Firebase: Flame,
  Firestore: Database,
  Prisma: Layers,
  Git: GitBranch,
  GitHub: FolderGit2,
  "VS Code": AppWindow,
  Vercel: Cloud,
  IA: Sparkles,
};

export function Stack() {
  return (
    <section id="stack" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Stack"
          title="Tecnologias que uso para construir"
          description="Sem lista gigante — só o que realmente uso no dia a dia."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {technologies.map((group, gi) => (
            <div key={group.label}>
              <Reveal delay={gi * 0.05}>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
                  {group.label}
                </h3>
              </Reveal>
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.items.map((item, i) => {
                  const Icon = iconMap[item] ?? FileCode2;
                  return (
                    <Reveal key={item} delay={gi * 0.05 + i * 0.04}>
                      <li className="group flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover">
                        <Icon
                          size={16}
                          strokeWidth={1.75}
                          className="text-muted transition-colors group-hover:text-accent"
                        />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
