export type TechGroup = {
  label: string;
  items: string[];
};

export const technologies: TechGroup[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend & Dados",
    items: ["Node.js", "Firebase", "Firestore", "Prisma"],
  },
  {
    label: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "Vercel", "IA"],
  },
];
