import { features } from "../data/content";
import Reveal from "../components/Reveal";
export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gradient-to-b from-void via-navy/50 to-void px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, text, icon: Icon }, i) => (
          <Reveal key={title} delay={i * 100} className="bg-void">
            <div className="group h-full p-8 transition duration-500 hover:bg-navy">
              <Icon size={30} className="text-gold transition duration-500 group-hover:-translate-y-1 group-hover:text-ember" aria-hidden />
              <h3 className="h-display mt-6 text-lg tracking-widest">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p>
            </div>
          </Reveal>))}
      </div>
    </section>
  );
}
