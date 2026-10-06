import { useState } from "react";
import { Lock, Play } from "lucide-react";
import { siteConfig } from "../config/site";
import Reveal from "../components/Reveal";
import VideoFrame from "../components/VideoFrame";
export default function WatchSection() {
  const [unlocked, setUnlocked] = useState(false);
  const has = Boolean(siteConfig.videoUrl);
  return (
    <section id="watch" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal><h2 className="h-display text-center text-[clamp(1.8rem,5vw,3.5rem)]">Watch the adventure</h2></Reveal>
        <Reveal delay={150} className="mt-12">
          <div className="relative aspect-video overflow-hidden border border-gold/30 bg-navy shadow-[0_30px_120px_-30px_rgba(179,18,42,.6)]">
            {unlocked && has ? <VideoFrame url={siteConfig.videoUrl} title="DRAGONHEART feature video" /> : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_center,#0b1220,#06070b)] p-6 text-center">
                {unlocked ? (<><Play className="text-gold" aria-hidden /><p className="h-display text-lg">Video coming soon</p>
                  <p className="max-w-sm text-sm text-white/60">Set <code className="text-arcane">videoUrl</code> in <code className="text-arcane">src/config/site.ts</code>.</p></>) : (<>
                  <Lock className="text-gold" size={30} aria-hidden />
                  <p className="h-display text-[clamp(1.1rem,3vw,1.8rem)] tracking-[.25em]">Content locked</p>
                  <p className="text-sm text-white/65">Complete the required step to unlock access.</p>
                  <button onClick={() => setUnlocked(true)} className="btn btn-primary mt-2">Unlock &amp; watch →</button></>)}
              </div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
