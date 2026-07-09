import { useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";

const services = [
  { title: "Brand Identity", desc: "Naming, logo systems, guidelines, verbal & visual language.", tags: ["Strategy", "Logo", "Systems"] },
  { title: "Social Media Design", desc: "Scalable templates and content systems that stay on brand.", tags: ["Templates", "Grids", "Content"] },
  { title: "Packaging Design", desc: "Shelf-ready structural and surface design with production files.", tags: ["Product", "Print", "Retail"] },
  { title: "Advertising Design", desc: "Campaign concepts, OOH, digital and print ready to run.", tags: ["Campaigns", "OOH", "Digital"] },
  { title: "Brochure Design", desc: "Editorial layouts, annual reports, sales collateral.", tags: ["Editorial", "Print", "Layout"] },
  { title: "Presentation Design", desc: "Investor decks, keynote systems, sales enablement.", tags: ["Decks", "Keynote", "Sales"] },
  { title: "Print Design", desc: "Posters, invitations, books — with a printer's attention to craft.", tags: ["Poster", "Book", "Craft"] },
  { title: "Marketing Creatives", desc: "Ads, banners, landing visuals engineered to convert.", tags: ["Ads", "Performance", "Web"] },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
              <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">— Services</div>
            <h2 className="max-w-2xl font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              What I do, in eight quiet obsessions. <span className="italic font-serif font-normal text-muted-foreground">A full studio</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Every engagement below is treated the same way — strategy first, craft always, delivered with the discipline of a studio and the accountability of a partner.</p>
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <button key={s.title} onClick={() => setOpen(isOpen ? null : i)} className="group flex w-full flex-col text-left">
                <div className="flex items-center justify-between gap-6 py-8">
                  <div className="flex items-center gap-8">
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-[#246bfd] md:text-5xl">{s.title}</span>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.4 }}>
                    <Plus className="h-7 w-7" />
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pb-10 pl-16 md:grid-cols-3">
                    <p className="text-lg text-muted-foreground md:col-span-2">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded-full border border-black/15 px-3 py-1 text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}