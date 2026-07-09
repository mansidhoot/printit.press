import { Nav } from "./Nav";
import { Hero } from "./sections/Hero";
import { Marquee } from "./sections/Marquee";
import { Stats } from "./sections/Stats";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Process } from "./sections/Process";
import { WhyMe } from "./sections/WhyMe";
import { Testimonials } from "./sections/Testimonials";
import { Skills } from "./sections/Skills";
import { BeforeAfter } from "./sections/BeforeAfter";
import { Industries } from "./sections/Industries";
import { Instagram } from "./sections/Instagram";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Cursor } from "./Cursor";

export function PortfolioHome() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#246bfd] selection:text-white">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Services />
        <Process />
        <WhyMe />
        <Testimonials />
        <Skills />
        <BeforeAfter />
        <Industries />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}