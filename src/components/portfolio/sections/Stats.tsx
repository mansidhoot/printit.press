import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  // { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Brands Worked With" },
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "M+", label: "People Reached" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-12 px-6 py-20 md:grid-cols-5 md:px-10 md:py-28">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="border-l border-black/10 pl-6 md:pl-8"
          >
            <div className="font-display text-5xl font-black tracking-tight md:text-6xl lg:text-7xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}