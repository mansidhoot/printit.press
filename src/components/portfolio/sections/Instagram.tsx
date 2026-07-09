import { motion } from "motion/react";
import { Instagram as Ig } from "lucide-react";

export function Instagram() {
  const tiles = Array.from({ length: 8 });
  return (
    <section className="border-y border-black/10 bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
           <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">— Instagram</div>
            <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">@printit.press</h2>
          </div>
          <a href="https://www.instagram.com/press.printit/" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm transition-colors hover:bg-[#111111] hover:text-white">
            <Ig className="h-4 w-4" /> Follow along
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {tiles.map((_, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.6 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-white"
              data-cursor="hover"
            >
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center font-display text-4xl font-black tracking-tighter text-black/70">{String(i + 1).padStart(2, "0")}</div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-xs text-white">View post →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}