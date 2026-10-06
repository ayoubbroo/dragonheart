import { useEffect, useRef } from "react";
import { Play, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/site";
import SmartImage from "../components/SmartImage";
import Particles from "../components/Particles";
export default function Hero() {
  const bg = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      if (bg.current) bg.current.style.transform = `translate3d(0,${Math.min(window.scrollY, 900) * 0.18}px,0) scale(1.08)`; }); };
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section id="home" className="grain relative flex min-h-[100svh] items-center overflow-hidden">
      <div ref={bg} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.08)" }}>
        <SmartImage src={siteConfig.heroImage} alt="A colossal dragon above a burning kingdom" glow="#f08a24" className="h-full w-full object-[70%_center]" />
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/10 md:via-void/60" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/70" />
      <div aria-hidden className="absolute -bottom-24 -left-1/4 h-72 w-[150%] animate-drift rounded-full bg-arcane/10 blur-3xl" />
      <Particles />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[.35em] text-gold">An epic fantasy adventure</p>
          <h1 className="h-display mt-5 animate-rise text-[clamp(3rem,11vw,8.5rem)] leading-[.9] [animation-delay:.15s]"
            style={{ textShadow: "0 0 60px rgba(240,138,36,.35)" }}>Dragonheart</h1>
          <p className="h-display mt-4 animate-rise text-[clamp(1rem,2.6vw,1.9rem)] tracking-[.3em] text-ember [animation-delay:.3s]">The adventure begins</p>
          <p className="mt-7 max-w-lg animate-rise text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-white/75 [animation-delay:.45s]">
            A young hero, a legendary dragon and a kingdom on the edge of destruction. An epic journey of courage, friendship and destiny awaits.</p>
          <div className="mt-9 flex animate-rise flex-col gap-4 sm:flex-row [animation-delay:.6s]">
            <a href="#watch" className="btn btn-primary"><Play size={16} fill="currentColor" aria-hidden />Watch now</a>
            <a href="#story" className="btn btn-ghost">Explore the world</a>
          </div>
          <p className="mt-8 flex animate-rise items-center gap-2 text-xs uppercase tracking-[.2em] text-white/50 [animation-delay:.75s]">
            <ShieldCheck size={14} className="text-arcane" aria-hidden />Official cinematic experience</p>
        </div>
      </div>
    </section>
  );
}
