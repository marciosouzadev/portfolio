"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons/SocialIcons";
import { site } from "@/data/site";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const withHome = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            href={withHome("#inicio")}
            className="font-mono text-sm font-medium tracking-tight text-foreground"
          >
            marciosouza<span className="text-accent">dev</span>
          </Link>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Desenvolvendo ideias para a web.
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-x-10 gap-y-6">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={withHome(link.href)}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-foreground"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={site.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-muted transition-colors hover:text-foreground"
            >
              <WhatsappIcon size={18} />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Mail size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6">
        <p className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 text-xs text-muted-2">
          <span>© {year} Marcio Souza. Todos os direitos reservados.</span>
          <span aria-hidden className="hidden sm:inline">
            ·
          </span>
          <span>{site.location}</span>
        </p>
      </div>
    </footer>
  );
}
