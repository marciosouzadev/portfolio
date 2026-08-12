"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { TerminalWindow } from "@/components/hero/TerminalWindow";

const focusAreas = ["Frontend", "Full Stack", "UI", "Produtos Digitais"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div>
          <motion.div {...fadeUp(0)} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                {site.available && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {site.available
                ? "Disponível para novos projetos"
                : "Sem disponibilidade no momento"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
              <MapPin size={12} strokeWidth={1.75} />
              {site.location}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            Desenvolvedor Web &amp; Criador de{" "}
            <span className="text-accent">Produtos Digitais</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted"
          >
            Transformo ideias em aplicações web modernas, funcionais e bem
            construídas.
          </motion.p>

          <motion.p
            {...fadeUp(0.28)}
            className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-2"
          >
            {focusAreas.join("  •  ")}
          </motion.p>

          <motion.div {...fadeUp(0.36)} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#171310] transition-colors hover:bg-accent-strong"
            >
              Ver meus projetos
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </Link>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              GitHub
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        <TerminalWindow />
      </div>
    </section>
  );
}
