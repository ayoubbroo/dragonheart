import { useEffect, useState } from "react";
import { Menu, X, Play, Globe } from "lucide-react";
import { navLinks } from "../data/content";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${scrolled || open ? "bg-void/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="h-display text-lg tracking-[.3em]">Dragon<span className="text-ember">heart</span></a>
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map(l => <li key={l.href}><a href={l.href} className="text-xs font-semibold uppercase tracking-[.2em] text-white/70 transition hover:text-gold">{l.label}</a></li>)}
        </ul>
        <div className="hidden items-center gap-6 md:flex">
          <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60"><Globe size={14} aria-hidden />Language: EN</span>
          <a href="#watch" className="btn btn-primary !py-2.5 !px-5 !text-xs"><Play size={14} aria-hidden />Watch now</a>
        </div>
        <button className="md:hidden p-2" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div id="mobile-menu" className={`md:hidden grid transition-[grid-template-rows] duration-500 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-5 pb-6">
            {navLinks.map(l => <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[.2em]" tabIndex={open ? 0 : -1}>{l.label}</a></li>)}
            <li className="pt-5"><a href="#watch" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn btn-primary"><Play size={14} aria-hidden />Watch now</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
