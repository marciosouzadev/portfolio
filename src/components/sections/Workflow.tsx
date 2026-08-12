import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Ideia",
    text: "Entendo o problema e o objetivo.",
  },
  {
    number: "02",
    title: "Interface",
    text: "Transformo a ideia em uma experiência simples e intuitiva.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    text: "Construo a aplicação utilizando tecnologias modernas.",
  },
  {
    number: "04",
    title: "Evolução",
    text: "Testo, corrijo e continuo melhorando o produto.",
  },
];

export function Workflow() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Processo"
          title="Como eu trabalho"
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-6 left-0 right-0 hidden h-px bg-border lg:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="relative">
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background font-mono text-sm text-accent">
                  {step.number}
                </span>
                <h3 className="mt-5 text-base font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
