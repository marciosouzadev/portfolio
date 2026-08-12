import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const url = `${site.url}/projetos/${project.slug}`;

  return {
    title: project.title,
    description: project.description,
    keywords: [project.title, project.category, ...project.technologies],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url,
      siteName: site.name,
      title: `${project.title} — ${site.name}`,
      description: project.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${site.name}`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const hasGithub = project.github && project.github !== "#";
  const hasDemo = project.demo && project.demo !== "#";
  const { problem, solution, contribution, features } = project.caseStudy;

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${site.url}/projetos/${project.slug}`,
    creator: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    ...(project.technologies.length > 0 && {
      keywords: project.technologies.join(", "),
    }),
  };

  return (
    <article className="pb-24 pt-32 sm:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} />
            Voltar aos projetos
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {project.category}
          </span>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            {hasGithub ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                <GithubIcon size={16} />
                Ver código
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-foreground opacity-40"
              >
                <GithubIcon size={16} />
                Repositório privado
              </span>
            )}
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#171310] transition-colors hover:bg-accent-strong"
              >
                Ver projeto
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ProjectPreview project={project} className="aspect-[16/10] w-full" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
              Problema
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{problem}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
              Solução
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{solution}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
              Minha contribuição
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{contribution}</p>
          </Reveal>
        </div>

        {features.length > 0 && (
          <Reveal className="mt-14">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
              Principais funcionalidades
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {project.technologies.length > 0 && (
          <Reveal className="mt-14">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
              Tecnologias
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {otherProjects.length > 0 && (
          <Reveal className="mt-20 border-t border-border pt-10">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
              Outros projetos
            </h2>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projetos/${p.slug}`}
                  className="group flex flex-1 items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-border-strong"
                >
                  <span>
                    <span className="block text-sm font-medium text-foreground">
                      {p.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">
                      {p.category}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </article>
  );
}
