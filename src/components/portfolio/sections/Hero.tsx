import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const t1x = useTransform(smx, (v) => v * 20);
  const t1y = useTransform(smy, (v) => v * 20);
  const t2x = useTransform(smx, (v) => v * -35);
  const t2y = useTransform(smy, (v) => v * -35);
  const t3x = useTransform(smx, (v) => v * 12);
  const t3y = useTransform(smy, (v) => v * -18);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="top" ref={ref} className="relative isolate flex min-h-screen items-end overflow-hidden pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,white,transparent_70%)]" aria-hidden />

      {/* Floating design tokens */}
      <motion.div style={{ x: t1x, y: t1y }} className="pointer-events-none absolute right-[8%] top-[18%] hidden md:block">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
          <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Color Palette · 04</div>
          <div className="flex gap-1.5">
              <span className="h-8 w-8 rounded-md bg-[#00FFFF]" /> {/* Cyan */}
              <span className="h-8 w-8 rounded-md bg-[#FF00FF]" /> {/* Magenta */}
              <span className="h-8 w-8 rounded-md bg-[#FFFF00]" /> {/* Yellow */}
              <span className="h-8 w-8 rounded-md bg-[#000000]" /> {/* Black */}
          </div>
        </div>
      </motion.div>

      {/* <motion.div style={{ x: t2x, y: t2y }} className="pointer-events-none absolute left-[6%] top-[26%] hidden md:block">
        <div className="w-[220px] rounded-2xl border border-black/10 bg-white p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
          <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Type · Display</div>
          <div className="font-display text-5xl font-black leading-none tracking-tight">Aa</div>
          <div className="mt-2 text-xs text-muted-foreground">Inter Tight · 900</div>
        </div>
      </motion.div> */}

      <motion.div style={{ x: t3x, y: t3y }} className="pointer-events-none absolute right-[14%] bottom-[24%] hidden md:block">
        <div className="rounded-2xl border border-black/10 bg-[#111111] p-5 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
          <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/50">Grid · System · Craft · Impact</div>
          <div className="flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-10 w-1.5 rounded-full bg-[#246bfd]/70" style={{ opacity: (i + 3) / 15 }} />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="inline-block h-px w-10 bg-current" />
          Independent Brand Studio · Est. 2018
        </motion.div>

        <h1 className="max-w-[16ch] font-display text-[clamp(2.75rem,8vw,7.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-balance">
          {"Design that doesn't just look good.".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mr-[0.25em] inline-block"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="italic font-serif font-normal text-muted-foreground"
          >
            It builds brands people remember.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-6"
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Strategy-led graphic design that transforms businesses through branding,
            advertising, packaging, social media and visual storytelling.
          </p>
          <div className="flex flex-wrap gap-6">
<a
  href="#work"
className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#246bfd] px-7 py-4 text-sm font-medium text-white transition-transform duration-300 hover:scale-105">
  {/* DEFAULT TEXT */}
  <span className="transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
    View Portfolio →
  </span>

  {/* HOVER TEXT */}
  <span className="absolute translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
    Explore
  </span>
</a>
 <a
  href="#contact"
className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:scale-105 hover:border-[#246bfd] hover:text-[#246bfd]">
  {/* DEFAULT TEXT */}
  <span className="flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
    Let's Work Together
    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
  </span>

  {/* HOVER TEXT */}
  <span className="absolute flex items-center gap-2 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
    Say Hi 👋
  </span>
</a>
          </div>
        </motion.div>

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#246bfd]/80"
          >
            <motion.span
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block h-8 w-px bg-[#246bfd]/60"
            />
            Scroll to explore
          </motion.div>
      </div>
    </section>
  );
}