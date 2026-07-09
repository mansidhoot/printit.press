import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, MessageCircle, Linkedin, Instagram, Home } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-[#111111] text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#246bfd] opacity-40 blur-[180px]" />
      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-6 py-32 md:grid-cols-12 md:px-10 md:py-40">
        <div className="md:col-span-6">
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">— Contact</div>
          <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Let's build something<br /><span className="italic font-serif font-normal text-white/70">worth remembering.</span>
          </h2>
          <p className="mt-8 max-w-md text-white/60">Currently accepting three projects for Q3. Tell me about yours — response within 24 hours.</p>
          <div className="mt-16 space-y-6">
            {[
              { icon: Mail, label: "Email", value: "press.printit@gmail.com" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91 6354535789" },
              { icon: Home, label: "Place In ", value: "Indore (MP)" },
              { icon: Instagram, label: "Instagram", value: "https://www.instagram.com/press.printit/" },
            ].map((c) => (
              <a key={c.label} href="#" className="group flex items-center gap-5 border-b border-white/10 pb-6">
                <c.icon className="h-5 w-5 text-[#246bfd]" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">{c.label}</div>
                  <div className="mt-1 text-lg transition-colors group-hover:text-[#246bfd]">{c.value}</div>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-6 md:pl-8"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:p-10">
            <div className="space-y-6">
              {[
                { label: "Name", type: "text", ph: "Naam to likhdo nahe to me contact kaise karu" },
                { label: "Email", type: "email", ph: "free incoming to hai mere pass to phone number to dedo " },
                { label: "Company", type: "text", ph: "Jaldi Se apna kaam to batado muze " },
              ].map((f) => (
                <label key={f.label} className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">{f.label}</span>
                  <input type={f.type} placeholder={f.ph} required className="mt-2 w-full border-b border-white/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-white/25 focus:border-[#246bfd]" />
                </label>
              ))}
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">Tell me about the project</span>
                <textarea rows={4} placeholder="A rebrand, a launch, a system that needs to scale…" required className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-white/25 focus:border-[#246bfd]" />
              </label>
            </div>
            <button type="submit" className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#246bfd] px-7 py-4 text-sm font-medium text-white transition-all hover:bg-white hover:text-[#111111]">
              {sent ? "Thanks — I'll be in touch" : "Send inquiry"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}