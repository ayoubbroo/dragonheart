import { useMemo } from "react";
/** Lightweight CSS-only embers (no canvas) to stay smooth on low-end phones. */
export default function Particles({ count = 22 }: { count?: number }) {
  const items = useMemo(() => Array.from({ length: count }, (_, i) => ({
    left: Math.random() * 100, size: 2 + Math.random() * 3, dur: 9 + Math.random() * 10,
    delay: -Math.random() * 14, color: i % 5 === 0 ? "#5fd3e6" : "#f08a24" })), [count]);
  return <div aria-hidden className="particles pointer-events-none absolute inset-0 overflow-hidden">
    {items.map((p, i) => <span key={i} className="absolute bottom-0 rounded-full"
      style={{ left: `${p.left}%`, width: p.size, height: p.size, background: p.color, boxShadow: `0 0 8px ${p.color}`,
        animation: `float ${p.dur}s linear ${p.delay}s infinite`, willChange: "transform" }} />)}
  </div>;
}
