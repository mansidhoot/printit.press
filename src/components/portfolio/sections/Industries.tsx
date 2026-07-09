const industries = [
  "Healthcare", "Education", "Hospitality", "Luxury", "Real Estate",
  "Fashion", "Food & Bewrages", "Architecture", "Interior Design", "Manufacturing", "Reatil","FMCG Sector"
];

export function Industries() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#246bfd]">— Industries</div>
            <h2 className="max-w-2xl font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">Range, sharpened by strategy.</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 border-t border-black/10 md:grid-cols-4">
          {industries.map((i, k) => (
            <a
              key={i}
              href=""
              className="group relative flex items-center justify-between border-b border-r border-black/10 p-8 transition-colors hover:bg-[#111111] hover:text-white md:p-10"
              data-cursor="hover"
            >
              <span className="font-display text-2xl font-bold tracking-tight md:text-3xl">{i}</span>
              <span className="font-mono text-xs opacity-40 group-hover:text-[#246bfd] group-hover:opacity-100">{String(k + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}