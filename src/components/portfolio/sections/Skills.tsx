import { motion } from "motion/react";

const skills = [
  { label: "Brand Identity", v: 98 },
  { label: "Typography", v: 95 },
  { label: "Packaging", v: 92 },
  { label: "Illustration", v: 78 },
  { label: "Adobe Photoshop", v: 96 },
  { label: "Illustrator", v: 98 },
  { label: "InDesign", v: 94 },
  { label: "Figma", v: 97 },
  { label: "After Effects", v: 82 },
  { label: "Motion Graphics", v: 80 },
];

export function Skills() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-32 md:grid-cols-12 md:px-10 md:py-40">
        <div className="md:col-span-5">
     <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">—Skills</div>
          <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
            The tools are quiet. <span className="italic font-serif font-normal text-muted-foreground">The craft is loud.</span>
          </h2>
          <p className="mt-8 max-w-md text-muted-foreground">A decade of daily practice across identity, editorial and motion — wi0th a strategic mind that ties it all together.
            Ten disciplines I use every week. Not every project needs all of them — but they’re all one keystroke away.
          </p>
        </div>
        <div className="md:col-span-7 md:pl-12">
          <div className="space-y-5">
            {skills.map((s, i) => (
              <div key={s.label}>
                <div className="mb-2 flex items-baseline justify-between font-medium">
                  <span>{s.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">{s.v}</span>
                </div>
                <div className="h-[3px] w-full overflow-hidden bg-black/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.v}%` }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: i * 0.05, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-[#246bfd]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}