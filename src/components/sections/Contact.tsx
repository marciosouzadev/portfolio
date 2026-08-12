import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons/SocialIcons";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponível para novos projetos
          </span>

          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tem uma ideia? Vamos construir.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-muted">
            Se você quer conversar sobre desenvolvimento, tecnologia ou algum
            projeto, entre em contato.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#171310] transition-colors hover:bg-accent-strong"
            >
              <Mail size={16} />
              Enviar mensagem
            </a>
            <a
              href={site.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <WhatsappIcon size={16} />
              WhatsApp
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>

          <p className="mt-6 font-mono text-sm text-muted-2">{site.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
