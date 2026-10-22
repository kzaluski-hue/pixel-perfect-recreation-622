import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const nav = [
  { to: "/", label: "Strona główna" },
  { to: "/palmy-mrozoodporne", label: "Palmy mrozoodporne" },
  { to: "/rosliny-egzotyczne", label: "Rośliny egzotyczne" },
  { to: "/blog", label: "Blog" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-obsidian text-obsidian-foreground">
      <nav aria-label="Główna nawigacja" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
        <Link to="/" className="flex items-center gap-3" aria-label="Palm House – strona główna">
          <img src="/palmhouse-logo.jpg" alt="Palm House logo" width={56} height={56} className="h-14 w-14 object-cover" />
          <span className="font-serif text-xl tracking-[0.2em] text-gold">PALM HOUSE</span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {nav.map((n) => (
            <li key={n.to}>
              <Link to={n.to} activeOptions={{ exact: n.to === "/" }} activeProps={{ className: "text-gold" }} className="transition-colors hover:text-gold">
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="#kontakt" className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground transition hover:opacity-90">
              Zapytaj o palmę
            </a>
          </li>
        </ul>
        <button className="md:hidden text-gold" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="space-y-3 border-t border-gold/20 px-5 py-4 md:hidden">
          {nav.map((n) => (
            <li key={n.to}>
              <Link to={n.to} onClick={() => setOpen(false)} className="block hover:text-gold">{n.label}</Link>
            </li>
          ))}
          <li><a href="#kontakt" onClick={() => setOpen(false)} className="text-gold">Zapytaj o palmę</a></li>
        </ul>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-obsidian text-obsidian-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src="/palmhouse-logo.jpg" alt="Palm House" width={120} height={120} loading="lazy" className="h-28 w-28 object-cover" />
          <p className="mt-3 text-sm opacity-75">Palmy mrozoodporne i rośliny egzotyczne importowane bezpośrednio z Hiszpanii.</p>
        </div>
        <div>
          <h3 className="eyebrow mb-3 font-sans">Oferta</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Palma do ogrodu</Link></li>
            <li><Link to="/palmy-mrozoodporne" className="hover:text-gold">Palmy mrozoodporne</Link></li>
            <li><Link to="/rosliny-egzotyczne" className="hover:text-gold">Egzotyczne rośliny do ogrodu</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-3 font-sans">Poradniki</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog" className="hover:text-gold">Blog Palm House</Link></li>
            <li><Link to="/blog/$slug" params={{ slug: "palma-w-polskim-ogrodzie-jaka-wybrac-jak-ja-uprawiac-i-zabezpieczyc-przed-mrozem" }} className="hover:text-gold">Palma w polskim ogrodzie – poradnik</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-3 font-sans">Zasięg</h3>
          <p className="text-sm opacity-80">Województwo łódzkie i mazowieckie oraz cała Polska. Dostawa kurierem, własnym transportem lub odbiór osobisty.</p>
          <a href="#kontakt" className="mt-4 inline-block text-sm font-semibold text-gold">Zapytaj o dostępne egzemplarze →</a>
        </div>
      </div>
      <div className="border-t border-gold/15 py-5 text-center text-xs opacity-60">© {new Date().getFullYear()} Palm House · palm-house.pl</div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Ścieżka" className="mx-auto max-w-7xl px-5 pt-6 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link to="/" className="hover:text-palm">Strona główna</Link></li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" />
            {it.to ? <a href={it.to} className="hover:text-palm">{it.label}</a> : <span aria-current="page" className="text-foreground">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
