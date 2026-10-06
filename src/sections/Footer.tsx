const links = ["Privacy Policy", "Terms of Use", "Disclaimer", "Contact"];
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="h-display tracking-[.3em]">Dragonheart</p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/60">
          {links.map(l => <li key={l}><a href="#home" className="transition hover:text-gold">{l}</a></li>)}
        </ul>
        <p className="text-xs text-white/40">© 2026 DRAGONHEART</p>
      </div>
    </footer>
  );
}
