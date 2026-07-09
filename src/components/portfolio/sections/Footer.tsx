export function Footer() {
  return (
    <footer className="bg-[#111111] text-white/70">
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-10">
        <div className="border-t border-white/10 pt-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#246bfd]" />
                Print It Press
              </div>
              <p className="mt-4 max-w-xs text-sm">Independent brand & graphic design studio. Building marks that mean business.</p>
            </div>
            {/* <div className="md:col-span-3">
              <div className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">Navigate</div>
              <ul className="space-y-2 text-sm">
                {["Work", "About", "Services", "Process", "Contact"].map((l) => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div> */}
            {/* <div className="md:col-span-4">
              <div className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">Elsewhere</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Instagram — @aria.vale</a></li>
                <li><a href="#" className="hover:text-white">Behance — /ariavale</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn — /in/ariavale</a></li>
                <li><a href="#" className="hover:text-white">Dribbble — /ariavale</a></li>
              </ul>
            </div> */}
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
            <div>© {new Date().getFullYear()} Print It Press. All rights reserved.</div>
            <div className="font-mono">Designed & built with intention · Indore / Remote</div>
          </div>
          <div aria-hidden className="mt-12 font-display text-[18vw] font-black leading-none tracking-tighter text-white/[0.04]">Print It Press</div>
        </div>
      </div>
    </footer>
  );
}