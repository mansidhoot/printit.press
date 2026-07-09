import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { n: "01", client: "Solace & Co.", title: "A wellness brand that whispers, then converts.", tag: "Brand Identity · Packaging", year: "2025", accent: "#246bfd", bg: "#111111", fg: "#ffffff", name: "Solace" },
  { n: "02", client: "Northwind Coffee", title: "From a single roastery to a cult national label.", tag: "Packaging · Retail", year: "2024", accent: "#246bfd", bg: "#f7f7f7", fg: "#111111", name: "Northwind" },
  { n: "03", client: "Meridian Financial", title: "Rebuilding trust for a 40-year-old institution.", tag: "Identity · Editorial", year: "2024", accent: "#246bfd", bg: "#ffffff", fg: "#111111", name: "Meridian" },
  { n: "04", client: "Atlas Architects", title: "An identity as considered as their buildings.", tag: "Brand · Print · Web", year: "2023", accent: "#246bfd", bg: "#111111", fg: "#ffffff", name: "Atlas" },
];

export function Projects() {
  return (
    <section id="work" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-6">
          <div>

               {/* <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">— Selected Work</div> */}
        
          </div>
          
        </div>
      </div>
 
    </section>
  );
}

function MockVisual({ accent, bg, fg, idx, name }: { accent: string; bg: string; fg: string; idx: number; name: string }) {
  const alt = idx % 2 === 0;
  const canvas = fg === "#ffffff" ? "#1a1a1a" : "#ececec";
  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl md:rounded-2xl" style={{ backgroundColor: canvas }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      {alt ? (
        <>
          <div className="absolute left-8 top-8 h-16 w-16 rounded-full" style={{ backgroundColor: accent }} />
          <div className="absolute left-8 top-32 font-display text-[6rem] font-black leading-none tracking-tighter" style={{ color: fg }}>{name}</div>
          <div className="absolute bottom-8 right-8 flex gap-2">
            {[0, 1, 2, 3].map((k) => (
              <div key={k} className="h-24 w-16 rounded-md" style={{ backgroundColor: k === 1 ? accent : bg, opacity: 0.9 }} />
            ))}
          </div>
          <div className="absolute bottom-10 left-8 text-xs uppercase tracking-[0.3em]" style={{ color: fg, opacity: 0.6 }}>System · v2.0</div>
        </>
      ) : (
        <>
          <div className="absolute inset-8 grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, k) => (
              <div key={k} className="rounded" style={{ backgroundColor: k % 5 === 0 ? accent : fg, opacity: k % 3 === 0 ? 0.9 : 0.15 }} />
            ))}
          </div>
          <div className="absolute bottom-6 left-8 right-8 flex items-baseline justify-between">
            <span className="font-display text-4xl font-black tracking-tighter" style={{ color: fg }}>{name}</span>
            <span className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: fg, opacity: 0.6 }}>Est. 1974</span>
          </div>
        </>
      )}
    </div>
  );
}