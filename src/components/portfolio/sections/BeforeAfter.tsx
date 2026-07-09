import { useRef, useState } from "react";

export function BeforeAfter() {
  const [x, setX] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setX(Math.max(0, Math.min(100, p)));
  };
  return (
    <section className="border-y border-black/10 bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40">
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">—Transformation</div>
          <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
            Before. <span className="italic font-serif font-normal text-muted-foreground">After.</span> The business impact.
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">Drag to reveal Northwind Coffee's 2024 rebrand — the one that unlocked national distribution and a 41% year-over-year lift in DTC revenue.</p>
        </div>
        <div
          ref={ref}
          onMouseMove={(e) => e.buttons === 1 && drag(e.clientX)}
          onTouchMove={(e) => drag(e.touches[0].clientX)}
          className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl border border-black/10"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-[#111111] text-white">
            <div className="text-center">
              <div className="mb-4 text-xs uppercase tracking-[0.4em] text-white/50">Northwind · 2024</div>
              <div className="font-display text-[9vw] font-black leading-none tracking-tighter">Northwind</div>
              <div className="mx-auto mt-6 h-1 w-24 bg-[#246bfd]" />
              <div className="mt-4 font-serif italic text-white/70">Coffee, honestly.</div>
            </div>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-200 text-amber-900"
            style={{ clipPath: `inset(0 ${100 - x}% 0 0)` }}
          >
            <div className="text-center">
              <div className="mb-4 text-xs uppercase tracking-[0.4em] opacity-60">Est. 1974</div>
              <div className="font-serif text-[7vw] italic">North~wind</div>
              <div className="mt-4 text-sm">— Coffee Company —</div>
            </div>
          </div>
          <div
            onMouseDown={(e) => drag(e.clientX)}
            className="absolute inset-y-0 w-1 cursor-ew-resize bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
            style={{ left: `calc(${x}% - 2px)` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <span className="text-lg">⇔</span>
            </div>
          </div>
          <div className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs uppercase tracking-wider">Before</div>
          <div className="absolute right-6 top-6 rounded-full bg-[#246bfd] px-3 py-1 text-xs uppercase tracking-wider text-white">After</div>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { k: "+41%", v: "DTC revenue YoY" },
            { k: "3,200", v: "New retail doors opened" },
            { k: "+18pt", v: "Aided brand awareness" },
          ].map((s) => (
            <div key={s.k} className="border-t border-black/15 pt-6">
              <div className="font-display text-4xl font-black tracking-tight md:text-5xl">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}