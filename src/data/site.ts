export const site = {
  name: "Marcio Souza",
  role: "Desenvolvedor Web & Criador de Produtos Digitais",
  title: "Marcio Souza — Desenvolvedor Web",
  description:
    "Portfólio de Marcio Souza. Projetos, experiências e aplicações web desenvolvidas com tecnologias modernas.",
  // TODO: confirmar URL final de produção antes do deploy
  url: "https://marciosouza.dev",
  email: "marciosouzadev06@gmail.com",
  location: "Curitiba, PR",
  available: true,
  links: {
    // TODO: confirmar usuário/URL real do GitHub
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
