import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você tentou acessar não existe ou foi movida.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Erro 404
      </span>
      <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-balance text-base leading-relaxed text-muted">
        A página que você tentou acessar não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#171310] transition-colors hover:bg-accent-strong"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        Voltar para o início
      </Link>
    </section>
  );
}
