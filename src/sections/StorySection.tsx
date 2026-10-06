import { siteConfig } from "../config/site";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
export default function StorySection() {
  return (
    <section id="story" className="relative overflow-hidden bg-gradient-to-b from-void via-navy/40 to-void px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[.35em] text-arcane">The story</p>
          <h2 className="h-display mt-4 text-[clamp(2rem,5vw,3.8rem)] leading-tight">A new world awaits</h2>
          <div className="my-7 h-px w-24 bg-gradient-to-r from-ember to-transparent" />
          <p className="max-w-md text-lg leading-relaxed text-white/70">A mysterious world opens before the heroes. Powerful enemies, unknown forces and dangerous battles await those who dare to enter.</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(240,138,36,.4)]">
            <SmartImage src={siteConfig.storyImage} alt="A mysterious fantasy realm" glow="#5fd3e6" className="h-full w-full" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-void/60 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
