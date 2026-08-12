export const site = {
  name: "Marcio Souza",
  role: "Desenvolvedor Web & Criador de Produtos Digitais",
  title: "Marcio Souza — Desenvolvedor Web",
  description:
    "Portfólio de Marcio Souza. Projetos, experiências e aplicações web desenvolvidas com tecnologias modernas.",
  // Publicado via GitHub Pages. Se um domínio próprio (ex: marciosouza.dev) for
  // configurado depois, atualize aqui e remova o basePath em next.config.ts.
  url: "https://marciosouzadev.github.io/portfolio",
  // Deve bater com o basePath em next.config.ts.
  basePath: "/portfolio",
  email: "marciosouzadev06@gmail.com",
  location: "Curitiba, PR",
  available: true,
  links: {
    github: "https://github.com/marciosouzadev",
    // TODO: confirmar URL real do LinkedIn
    linkedin: "https://linkedin.com/in/marciosouzadev",
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Stack", href: "#stack" },
    { label: "Contato", href: "#contato" },
  ],
} as const;
