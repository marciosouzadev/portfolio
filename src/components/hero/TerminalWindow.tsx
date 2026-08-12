"use client";

import { motion } from "motion/react";

type Token = { text: string; className?: string };
type Line = Token[];

const kw = "text-[#c792ea]";
const fn = "text-accent-strong";
const str = "text-accent";
const com = "text-muted-2 italic";
const plain = "text-foreground/90";

const lines: Line[] = [
  [{ text: "// stack de hoje", className: com }],
  [
    { text: "const ", className: kw },
    { text: "dev", className: plain },
    { text: " = ", className: plain },
    { text: "{", className: plain },
  ],
  [
    { text: "  nome", className: plain },
    { text: ": ", className: plain },
    { text: "'Marcio Souza'", className: str },
    { text: ",", className: plain },
  ],
  [
    { text: "  stack", className: plain },
    { text: ": ", className: plain },
    { text: "['Next.js', 'TypeScript', 'React']", className: str },
    { text: ",", className: plain },
  ],
  [
    { text: "  foco", className: plain },
    { text: ": ", className: plain },
    { text: "'produtos completos'", className: str },
    { text: ",", className: plain },
  ],
  [{ text: "};", className: plain }],
  [{ text: "" }],
  [
    { text: "export ", className: kw },
    { text: "function ", className: kw },
    { text: "build", className: fn },
    { text: "(", className: plain },
    { text: "ideia", className: plain },
    { text: ") {", className: plain },
  ],
  [
    { text: "  return ", className: kw },
    { text: "ship", className: fn },
    { text: "(", className: plain },
    { text: "ideia", className: plain },
    { text: ".", className: plain },
    { text: "refinar", className: fn },
    { text: "());", className: plain },
  ],
  [{ text: "}", className: plain }],
];

export function TerminalWindow() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/[0.07] blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_70px_-25px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-2 border-b border-border bg-surface-hover px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-2/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-2/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-2/40" />
          <span className="ml-3 font-mono text-xs text-muted">developer.ts</span>
        </div>

        <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
          <code>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + i * 0.09,
                  ease: "easeOut",
                }}
                className="flex"
              >
                <span className="mr-4 w-4 shrink-0 select-none text-right text-muted-2/60">
                  {i + 1}
                </span>
                <span>
                  {line.length === 0 ? (
                    " "
                  ) : (
                    <>
                      {line.map((token, j) => (
                        <span key={j} className={token.className ?? plain}>
                          {token.text}
                        </span>
                      ))}
                      {i === lines.length - 1 && (
                        <span
                          aria-hidden
                          className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-accent align-middle"
                        />
                      )}
                    </>
                  )}
                </span>
              </motion.div>
            ))}
          </code>
        </pre>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 font-mono text-xs text-muted shadow-lg sm:flex"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        build passing
      </motion.div>
    </div>
  );
}
