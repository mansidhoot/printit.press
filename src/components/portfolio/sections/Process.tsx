import { motion } from "motion/react";

const steps = [
  { n: "01", title: "Discovery", desc: "Interviews, audits, market immersion — before a single sketch." },
  { n: "02", title: "Strategy", desc: "Positioning, personality, and a north star the whole team can quote." },
  { n: "03", title: "Concept Development", desc: "Three distinct directions rooted in strategy — no visual noise." },
  { n: "04", title: "Design Exploration", desc: "Systems designed to scale across every touchpoint and team." },
  { n: "05", title: "Refinement", desc: "Craft at the pixel level. Tokens, ratios, kerning, spacing." },
  { n: "06", title: "Delivery", desc: "Production files, guidelines, and a handoff your team will actually use." },
];

export function Process() {
  return (
    <section id="process" className="border-y border-white/10 bg-[#111111] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
             <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">— Process</div>
            <h2 className="max-w-2xl font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Six stages.
Zero compromise.
            </h2>
          </div>
          <p className="max-w-sm text-white/60">A repeatable framework refined across 150+ projects — flexible in output, disciplined in method.</p>
        </div>
        <div className="-mx-6 overflow-x-auto pb-2 md:mx-0">
          <div className="flex min-w-max gap-6 px-6 md:px-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="w-[300px] shrink-0 border-t border-white/20 pt-6 md:w-[320px]"
              >
                <div className="mb-8 flex items-center gap-3">
                  <span className="font-mono text-xs text-white/40">{s.n}</span>
                  <span className="h-2 w-2 rounded-full bg-[#246bfd]" />
                </div>
                <h3 className="font-display text-3xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}