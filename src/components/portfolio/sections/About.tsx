import { motion } from "motion/react";

const steps = [
  {
    title: "Research",
    desc: "Immerse in the brand, its market, its people.",
  },
  {
    title: "Strategy",
    desc: "Define the story worth telling and the audience worth reaching.",
  },
  {
    title: "Concept",
    desc: "Translate strategy into visual ideas that carry meaning.",
  },
  {
    title: "Execution",
    desc: "Craft every detail — typography, colour, form, motion.",
  },
  {
    title: "Impact",
    desc: "Measure how design changed the business, not just the look..",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-[#f7f7f7]">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-32 md:grid-cols-12 md:px-10 md:py-40">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">— About</div>
            {/* <div className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">— About</div> */}
            <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              More than a<br />Graphic Designer.
            </h2>
            <p className="mt-8 font-serif text-3xl italic leading-tight text-muted-foreground md:text-4xl">
          I solve communication problems through design. Every project starts with a business question — and ends with visual work that earns its place on your balance sheet, not just your wall.
            </p>

            <div className="mt-10 flex items-center gap-4">
  {/* Avatar */}
  <div className="h-12 w-12 rounded-full bg-[#246bfd] flex items-center justify-center text-white font-semibold">
    MD
  </div>

  {/* Name + Title */}
  <div>
    <div className="text-base font-semibold text-foreground">
      Mansi Dhoot
    </div>
    <div className="text-sm text-muted-foreground">
      Graphic & Brand Designer · 7+ yrs
    </div>
  </div>
</div>
          </div>
        </div>
        <div className="md:col-span-7 md:pl-12">
          <p className="max-w-lg text-lg leading-relaxed text-foreground/80">
            For seven years I've helped founders, marketing teams and cultural
            institutions turn ambition into identity — building systems that hold
            up in a boardroom, a billboard and a phone screen alike.
          </p>
          <p className="max-w-lg text-lg leading-relaxed text-foreground/80">
The philosophy — five acts

          </p>

<div className="mt-16 space-y-10">
  {steps.map((step, i) => (
    <motion.div
      key={step.title}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col gap-2"
    >
      {/* Title Row */}
<div className="grid grid-cols-[auto_1fr] gap-6">
    <span className="w-12 font-mono text-xs text-[#246bfd]">
    0{i + 1}
  </span>

  <div className="flex-1">
    <h3 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
      {step.title}
    </h3>

<p className="mt-2 pr-10 text-base text-muted-foreground leading-relaxed">
  {step.desc}
</p>

    {/* ONLY ONE LINE HERE */}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
      className="mt-4 h-px bg-black/10"
    />
  </div>
</div>

      {/* Line */}
  <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: "100%" }}
  transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
  className="h-px bg-black/10"
/>
    </motion.div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}