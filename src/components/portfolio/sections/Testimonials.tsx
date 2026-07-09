import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// const t = [
//   { q: "Aria didn't just redesign our brand — she reframed our whole business. Our conversion jumped 34% the quarter we launched.", name: "Elena Márquez", role: "CEO, Solace & Co.", initials: "EM" },
//   { q: "Six years and four projects later, she's still the sharpest strategic partner in our stack. No other designer even comes close.", name: "Marcus Chen", role: "CMO, Northwind Coffee", initials: "MC" },
//   { q: "A rare designer who thinks like a founder. Every deliverable felt inevitable — like it always should have existed.", name: "Priya Anand", role: "Founder, Meridian Financial", initials: "PA" },
//   { q: "The kind of craft you usually only see at Pentagram. Delivered ahead of schedule, without a single revision cycle wasted.", name: "David Ó Brien", role: "Partner, Atlas Architects", initials: "DO" },
// ];
const t = [
  {
    q: "Mansi didn’t just redesign our visuals — she gave our brand clarity. We saw stronger engagement and better client trust within weeks.",
    name: "Rohan Mehta",
    role: "Founder, UrbanNest Ahmedabad",
    initials: "RM",
  },
  {
    q: "Working with her feels like having a strategist and designer in one. Every decision had purpose, not just aesthetics.",
    name: "Neha Shah",
    role: "Marketing Head, Aaryan Retail",
    initials: "NS",
  },
  {
    q: "She understands business as much as design. The identity she created made our brand feel instantly more premium and consistent.",
    name: "Kunal Patel",
    role: "Co-founder, FinEdge Solutions",
    initials: "KP",
  },
  {
    q: "Rare to find someone this detail-oriented and fast. The entire process was smooth, and the outcome exceeded expectations.",
    name: "Aditi Desai",
    role: "Creative Director, Studio 27",
    initials: "AD",
  },
  {
    q: "I found Mansi on Instagram while searching for branding inspiration. One DM turned into a full rebrand. She completely transformed how our brand looks and communicates — our inquiries almost doubled after launch.",
    name: "Riya Patel",
    role: "Founder, The Clay Studio Ahmedabad",
    initials: "RP",
  },
  {
    q: "We discovered her work on Behance and were impressed by the clarity in her projects. From the first call, she understood our business better than most consultants. The final identity feels sharp, modern, and truly ours.",
    name: "Dhruv Shah",
    role: "Director, Shree Buildcon",
    initials: "DS",
  },
  {
    q: "A friend recommended Mansi, and honestly, it was the best decision. She guided us step by step — from confusion to a clear brand system. The process felt structured and effortless.",
    name: "Mehul Jain",
    role: "Owner, Jain Caterers",
    initials: "MJ",
  },
  {
    q: "I came across her LinkedIn posts about branding strategy and reached out. What stood out was how she connects design decisions with business goals. The results were not just visual — they impacted how clients perceive us.",
    name: "Sneha Kapoor",
    role: "Consultant, SK Advisory",
    initials: "SK",
  },
  {
    q: "We initially hired her for a logo, but she pushed us to think bigger. That mindset shift changed everything. Today, our brand feels consistent across every platform.",
    name: "Karan Verma",
    role: "Co-founder, FitFuel India",
    initials: "KV",
  },
  {
    q: "Saw her work through a mutual connection’s story and instantly loved her style. The collaboration was smooth, timelines were respected, and the output was beyond what we imagined.",
    name: "Aarav Desai",
    role: "Founder, Desai Interiors",
    initials: "AD",
  },
  {
    q: "What I appreciate most is her thinking process. She doesn’t jump into design — she asks the right questions first. That made all the difference in our final outcome.",
    name: "Nikita Mehta",
    role: "Brand Manager, LuxeKart",
    initials: "NM",
  },
  {
    q: "From the first discovery call to final delivery, everything felt premium. No unnecessary revisions, no confusion — just clear direction and strong execution.",
    name: "Yash Trivedi",
    role: "Founder, GrowthEdge Marketing",
    initials: "YT",
  },
];


export function Testimonials() {
  const [i, setI] = useState(0);
  const item = t[i];
  return (
    <section className="border-y border-black/10 bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">—Testimonials</div>
            <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Words from people
whose businesses <br></br>I changed.
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button onClick={() => setI((v) => (v - 1 + t.length) % t.length)} className="rounded-full border border-black/15 p-4 transition-all hover:bg-[#111111] hover:text-white" aria-label="Previous"><ArrowLeft className="h-4 w-4" /></button>
            <button onClick={() => setI((v) => (v + 1) % t.length)} className="rounded-full border border-black/15 p-4 transition-all hover:bg-[#111111] hover:text-white" aria-label="Next"><ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl"
            >
              <p className="font-display text-3xl font-medium leading-[1.2] tracking-tight md:text-5xl">
                <span className="text-[#246bfd]">“</span>{item.q}<span className="text-[#246bfd]">”</span>
              </p>
              <footer className="mt-12 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] font-medium text-white">{item.initials}</div>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.role}</div>
                </div>
                <div className="ml-auto font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")} / {String(t.length).padStart(2, "0")}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}