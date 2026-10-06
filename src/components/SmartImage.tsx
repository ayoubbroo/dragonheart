import { useState } from "react";
type Props = { src: string; alt: string; className?: string; glow?: string };
/** Image that falls back to an atmospheric gradient if the file is missing or src is empty. */
export default function SmartImage({ src, alt, className = "", glow = "#b3122a" }: Props) {
  const [failed, setFailed] = useState(!src);
  if (failed)
    return <div role="img" aria-label={alt} className={className}
      style={{ background: `radial-gradient(60% 60% at 70% 40%, ${glow}66, transparent 70%), linear-gradient(135deg,#0b1220,#06070b)` }} />;
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}
