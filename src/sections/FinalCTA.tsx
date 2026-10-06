import Reveal from "../components/Reveal";
import Particles from "../components/Particles";
export default function FinalCTA() {
  return (
    <section className="grain relative overflow-hidden px-5 py-32 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(179,18,42,.55),rgba(240,138,36,.12)_40%,transparent_70%)]" />
      <Particles count={14} />
      <Reveal className="relative">
        <h2 className="h-display text-[clamp(2.2rem,7vw,5.5rem)] leading-none">Ready for the adventure?</h2>
        <p className="mt-6 text-lg text-white/70">Enter the world of DRAGONHEART.</p>
        <a href="#watch" className="btn btn-primary mt-10 !px-12 !py-5 sm:!w-auto">Watch now →</a>
      </Reveal>
    </section>
  );
}
