export type ProjectTag =
  | "Frontend"
  | "Full Stack"
  | "SaaS"
  | "E-commerce"
  | "Sistemas"
  | "Experimentos";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: ProjectTag[];
  technologies: string[];
  /** Caminho em /public. Deixe undefined para usar o preview gerado. */
  image?: string;
  /** TODO: preencher com o link real do repositório quando existir/for público. */
  github?: string;
  /** TODO: preencher com a URL real do projeto em produção. */
  demo?: string;
  featured: boolean;
  caseStudy: {
    problem: string;
    solution: string;
    contribution: string;
    /** TODO: adicionar principais funcionalidades confirmadas. */
    features: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "nivo-hub",
    title: "Nivo Hub",
    description:
      "Loja de smartphones novos e seminovos com iPhones revisados e garantia, em Curitiba.",
    category: "E-commerce",
    tags: ["Frontend", "E-commerce"],
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/nivo-hub.webp",
    // TODO: repositório ainda não confirmado/público
    github: "#",
    demo: "https://nivohub.vercel.app/",
    featured: true,
    caseStudy: {
      problem:
        "Uma loja de smartphones precisava de uma presença online que transmitisse confiança: procedência, revisão e garantia dos aparelhos.",
      solution:
        "Um site apresentando o catálogo por categoria (smartphones, áudio, acessórios, smartwatches) e o processo de avaliação de cada aparelho, com contato direto via Instagram e WhatsApp.",
      contribution: "Desenvolvimento do site.",
      features: [],
    },
  },
  {
    slug: "nutriclin",
    title: "NutriClin",
    description:
      "Plataforma web voltada para apoio à decisão clínica em suplementação para nutricionistas.",
    category: "SaaS / Health Tech",
    tags: ["Full Stack", "SaaS"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/nutriclin.webp",
    github: "#",
    demo: "https://www.nutriclinsup.com.br/",
    featured: true,
    caseStudy: {
      problem:
        "Nutricionistas precisam de apoio estruturado para tomar decisões de suplementação com critérios clínicos, de forma rápida e confiável.",
      solution:
        "Uma plataforma web que centraliza esse apoio à decisão clínica em um fluxo pensado para a rotina do profissional de nutrição.",
      contribution:
        "Concepção, desenvolvimento e implementação da plataforma, do frontend à estrutura da aplicação.",
      features: [],
    },
  },
  {
    slug: "matematica-em-60s",
    title: "Matemática em 60s",
    description:
      "Jogo web educacional para praticar matemática contra o tempo, criado com orientação técnica para alunas do 9º ano.",
    category: "Educação / Jogo Web",
    tags: ["Frontend", "Experimentos"],
    technologies: ["HTML", "CSS", "JavaScript", "IA"],
    image: "/projects/matematica.webp",
    github: "https://github.com/marciosouzadev/matematica-game60s",
    demo: "https://marciosouzadev.github.io/matematica-game60s/",
    featured: false,
    caseStudy: {
      problem:
        "Alunas do 9º ano precisavam de uma forma mais envolvente de praticar matemática sob pressão de tempo.",
      solution:
        "Um jogo web em que o jogador resolve 10 problemas matemáticos com 60 segundos por questão, 3 vidas, pontos, combos e um ranking para comparar resultados.",
      contribution:
        "Orientação técnica do projeto, apoiando quatro alunas do 9º ano da EEB Prof. Elvira Faria Passos (São João do Itaperiú, SC) na construção da aplicação.",
      features: [
        "10 problemas matemáticos sequenciais com 60s por questão",
        "Sistema de vidas (3 vidas)",
        "Pontuação com multiplicador de combo",
        "Estatísticas finais de desempenho e precisão",
        "Ranking para comparar resultados entre jogadores",
      ],
    },
  },
  {
    slug: "estrategia-lowfodmap",
    title: "Jornada Low FODMAP",
    description:
      "Portal educacional sobre a estratégia Low FODMAP para pacientes com SII, SIBO e outras condições digestivas.",
    category: "Educação / Health Tech",
    tags: ["Frontend", "Experimentos"],
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/lowfodmap.webp",
    github: "https://github.com/marciosouzadev/estrategia-lowfodmap",
    demo: "https://marciosouzadev.github.io/estrategia-lowfodmap/",
    featured: false,
    caseStudy: {
      problem:
        "Pacientes com SII, SIBO e condições digestivas semelhantes precisam de um guia estruturado para seguir a estratégia Low FODMAP com segurança, sem abrir mão do acompanhamento profissional.",
      solution:
        "Um portal educacional com banco de alimentos por nível de FODMAP e um guia estruturado em três fases (restrição, reintrodução e personalização), sempre reforçando a importância do acompanhamento clínico.",
      contribution:
        "Desenvolvimento do portal, com colaboração clínica do Dr. Frederico (nutrólogo).",
      features: [
        "Banco de alimentos classificados por nível de FODMAP",
        "Guia estruturado em três fases: restrição, reintrodução e personalização",
        "Listas de compras, guia de restaurantes e receitas",
        "Seção de perguntas frequentes",
      ],
    },
  },
  {
    slug: "rosa-branca-saboaria",
    title: "Rosa Branca Saboaria",
    description:
      "Site institucional para uma marca de sabonetes artesanais, com catálogo de produtos e pedidos via WhatsApp.",
    category: "Site Institucional",
    tags: ["Frontend", "Experimentos"],
    technologies: ["HTML", "CSS"],
    image: "/projects/rosa-branca.webp",
    github: "https://github.com/marciosouzadev/rosabranca-saboaria",
    demo: "https://marciosouzadev.github.io/rosabranca-saboaria/",
    featured: false,
    caseStudy: {
      problem:
        "Uma marca de sabonetes artesanais precisava de uma presença online para apresentar seus produtos e receber pedidos.",
      solution:
        "Um site institucional com catálogo dos sabonetes, tamanhos e preços, e integração direta com WhatsApp para pedidos.",
      contribution: "Desenvolvimento do site institucional.",
      features: [],
    },
  },
  {
    slug: "jph-engenharia",
    title: "JPH Engenharia",
    description:
      "Landing page institucional para empresa de engenharia civil, com apresentação de serviços em projetos estruturais e soluções em construção.",
    category: "Site Institucional",
    tags: ["Frontend", "Experimentos"],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/projects/jph-engenharia.webp",
    github: "https://github.com/marciosouzadev/jph-engenharia",
    demo: "https://marciosouzadev.github.io/jph-engenharia/",
    featured: false,
    caseStudy: {
      problem:
        "Uma empresa de engenharia civil precisava de uma presença online profissional para apresentar seus serviços e transmitir credibilidade técnica.",
      solution:
        "Uma landing page institucional com seções de serviços, projetos de engenharia e planejamento técnico, com animações sutis e layout responsivo.",
      contribution: "Desenvolvimento completo da landing page.",
      features: [
        "Apresentação de serviços em projetos estruturais e complementares",
        "Layout responsivo com animações de entrada",
        "Identidade visual alinhada ao segmento de engenharia civil",
      ],
    },
  },
  {
    slug: "contabilidade-landing",
    title: "ContaFácil",
    description:
      "Landing page para escritório de contabilidade, com apresentação de serviços, depoimentos, indicadores e formulário de contato.",
    category: "Landing Page",
    tags: ["Frontend", "Experimentos"],
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/contafacil.webp",
    github: "https://github.com/marciosouzadev/contabilidade-landing",
    demo: "https://marciosouzadev.github.io/contabilidade-landing/",
    featured: false,
    caseStudy: {
      problem:
        "Um escritório de contabilidade precisava de uma página de conversão que explicasse seus serviços de forma clara e facilitasse o primeiro contato com potenciais clientes.",
      solution:
        "Uma landing page completa com hero de conversão, grade de serviços, prova social, indicadores animados, depoimentos e formulário de contato integrado.",
      contribution: "Desenvolvimento completo da landing page.",
      features: [
        "Seção de serviços: contabilidade geral, abertura de empresas, gestão fiscal, folha de pagamento, consultoria tributária e BPO financeiro",
        "Indicadores animados e faixa de segmentos atendidos",
        "Depoimentos de clientes e chamadas para ação",
        "Formulário de contato com validação e feedback de envio",
      ],
    },
  },
];

export const filterOptions: { label: string; value: ProjectTag | "Todos" }[] = [
  { label: "Todos", value: "Todos" },
  { label: "Frontend", value: "Frontend" },
  { label: "Full Stack", value: "Full Stack" },
  { label: "SaaS", value: "SaaS" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "Sistemas", value: "Sistemas" },
  { label: "Experimentos", value: "Experimentos" },
];
