import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const timeline = [
  {
    label: "De onde vim",
    text: "Formado em Nutrição e Educação Física, sempre com interesse em entender como as coisas funcionam por dentro.",
  },
  {
    label: "Mudança de rota",
    text: "Migrei para tecnologia e comecei a construir aplicações do zero, aprendendo na prática.",
  },
  {
    label: "Hoje",
    text: "Curso Análise e Desenvolvimento de Sistemas e construo produtos reais, unindo as duas bagagens.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Sobre"
            title="Aprender, construir, testar, melhorar."
            className="max-w-md"
          />

          <div className="flex flex-col gap-12">
            <Reveal delay={0.05}>
              <p className="text-balance text-lg leading-relaxed text-muted">
                Vim da Nutrição e da Educação Física antes de migrar para
                tecnologia. Essa vivência com pessoas e problemas reais
                continua presente hoje — atualmente curso Análise e
                Desenvolvimento de Sistemas e uso essa bagagem para construir
                produtos que resolvem problemas de verdade, não só telas
                bonitas.
              </p>
              <p className="mt-5 text-balance text-lg leading-relaxed text-muted">
                Gosto do ciclo completo: aprender algo novo, construir, testar
                com uso real e melhorar a partir disso. Ao longo do caminho,
                passei por interfaces, lógica de back-end e a parte de decidir
                como um produto deveria se comportar, não só como ele deveria
                parecer. Uso IA como parte do processo de desenvolvimento —
                para acelerar etapas e explorar soluções mais rápido, sem
                abrir mão de entender cada decisão que entra no produto.
              </p>
            </Reveal>

            <ol className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {timeline.map((item, i) => (
                <Reveal key={item.label} delay={0.1 + i * 0.06}>
                  <li>
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 text-sm font-medium text-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
