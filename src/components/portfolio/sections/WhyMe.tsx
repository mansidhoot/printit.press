import { motion } from "motion/react";
import { Brain, Target, Ruler, TrendingUp, Sparkles, MessageSquare, Truck } from "lucide-react";

const items = [
  { icon: Brain, title: "Strategic Thinking", desc: "Every mark defends a business decision." },
  { icon: Target, title: "Purposeful Design", desc: "Nothing decorative. Everything intentional." },
  { icon: Ruler, title: "Attention to Detail", desc: "Craft measured in kerning, not compliments." },
  { icon: TrendingUp, title: "Business-Focused", desc: "I optimize for outcomes, not applause." },
  { icon: Sparkles, title: "Timeless Identity", desc: "Systems built to age well, not just trend." },
  { icon: MessageSquare, title: "Fast Communication", desc: "Slack-fast responses, studio-grade rigor." },
  { icon: Truck, title: "Reliable Delivery", desc: "97% of projects shipped on or ahead of schedule." },
];

export function WhyMe() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40">
        <div className="mb-16 max-w-3xl">
           <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">—Why work with me</div>
          <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
            Design partners are rare. <span className="italic font-serif font-normal text-muted-foreground">You just found one.</span>
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl bg-black/10 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden bg-white p-8 transition-colors hover:bg-[#111111] hover:text-white"
            >
              <it.icon className="h-8 w-8 text-[#246bfd]" strokeWidth={1.5} />
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-white/60">{it.desc}</p>
              <span className="absolute right-6 top-6 font-mono text-[10px] text-muted-foreground group-hover:text-white/40">0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}