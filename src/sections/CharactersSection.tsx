import { characters } from "../data/content";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
export default function CharactersSection() {
  return (
    <section id="characters" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[.35em] text-arcane">The heroes</p>
          <h2 className="h-display mt-4 text-[clamp(2rem,5vw,3.8rem)]">Characters</h2>
        </Reveal>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((c, i) => (
            <li key={c.name}><Reveal delay={i * 100}>
              <article className="group relative aspect-[3/4] overflow-hidden border border-white/10 transition duration-500 hover:-translate-y-2 hover:border-[var(--g)] hover:shadow-[0_20px_70px_-15px_var(--g)]" style={{ ["--g" as string]: c.glow }}>
                <SmartImage src={c.image} alt={c.name} glow={c.glow} className="h-full w-full transition duration-700 group-hover:scale-110" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="h-display text-xl tracking-widest">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{c.text}</p>
                </div>
              </article>
            </Reveal></li>))}
        </ul>
      </div>
    </section>
  );
}
