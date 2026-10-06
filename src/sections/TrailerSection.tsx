import { useState } from "react";
import { Play } from "lucide-react";
import { siteConfig } from "../config/site";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import VideoFrame from "../components/VideoFrame";
export default function TrailerSection() {
  const [playing, setPlaying] = useState(false);
  const has = Boolean(siteConfig.trailerUrl);
  return (
    <section id="trailer" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="h-display mb-12 text-center text-[clamp(1.8rem,5vw,3.5rem)]">Official trailer</h2></Reveal>
        <Reveal delay={150}>
          <div className="relative aspect-video overflow-hidden border border-white/10">
            {playing && has ? <VideoFrame url={siteConfig.trailerUrl} title="DRAGONHEART official trailer" /> : (<>
              <SmartImage src={siteConfig.heroImage} alt="Trailer thumbnail" glow="#b3122a" className="h-full w-full" />
              <div aria-hidden className="absolute inset-0 bg-void/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
                <button onClick={() => setPlaying(true)} aria-label="Play trailer"
                  className="grid h-20 w-20 place-items-center rounded-full border border-gold/60 bg-void/60 backdrop-blur transition duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(240,138,36,.7)]">
                  <Play fill="currentColor" className="ml-1 text-gold" /></button>
                {playing && !has && <p className="glass px-4 py-2 text-sm text-white/80">Trailer coming soon. Set <code className="text-arcane">trailerUrl</code> in site.ts.</p>}
              </div></>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
