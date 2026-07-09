const items = [
  "Brand Identity",
  "Packaging",
  "Editorial",
  "Advertising",
  "Motion",
  "Art Direction",
  "Social Systems",
  "Print",
  "Type Design",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="border-y border-black/10 bg-[#111111] py-6 text-white overflow-hidden">
      <div className="flex whitespace-nowrap marquee">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-8 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            <span>{t}</span>
            <span className="text-[#246bfd]">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}