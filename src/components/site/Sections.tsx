import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Truck, Sun, HeartHandshake, MapPin, MessageSquare, Camera, Sprout, PackageCheck, LifeBuoy, Thermometer, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import frost from "@/assets/palm-frost.jpg";
import hero from "@/assets/hero-garden.jpg";
import winter from "@/assets/palm-winter.jpg";

export const BLOG_SLUG = "palma-w-polskim-ogrodzie-jaka-wybrac-jak-ja-uprawiac-i-zabezpieczyc-przed-mrozem";

export function Hero({ image, eyebrow, title, lead }: { image: string; eyebrow: string; title: ReactNode; lead: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-obsidian">
      <img src={image} alt="" width={1600} height={912} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="bg-hero-overlay absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-5 py-28 md:py-40 text-obsidian-foreground">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg opacity-90">{lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#kontakt" className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-elegant transition hover:opacity-90">Zapytaj o dostępne egzemplarze</a>
          <Link to="/palmy-mrozoodporne" className="rounded-full border border-gold/60 px-7 py-3 font-semibold text-gold transition hover:bg-gold/10">Zobacz palmy mrozoodporne</Link>
        </div>
      </div>
    </section>
  );
}

const usps = [
  { icon: Sun, t: "Bezpośredni import z Hiszpanii", d: "Zdrowe, wyselekcjonowane okazy." },
  { icon: Truck, t: "Ekspresowa dostawa i bezpieczny transport", d: "Wysyłka kurierem, własny transport Palm House lub odbiór osobisty." },
  { icon: HeartHandshake, t: "Wsparcie na każdym etapie (również po zakupie)", d: "Doradzamy w doborze stanowiska, sadzeniu i zimowaniu." },
  { icon: MapPin, t: "Lokalna obecność i zasięg", d: "Działamy od 2 lat, obsługując klientów indywidualnych (szczególnie woj. łódzkie i mazowieckie oraz całą Polskę)." },
];

export function TrustBar() {
  return (
    <section aria-label="Dlaczego Palm House" className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {usps.map(({ icon: I, t, d }) => (
          <div key={t} className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-palm text-gold"><I className="h-5 w-5" /></span>
            <div>
              <p className="font-semibold leading-snug">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { icon: MessageSquare, t: "Zapytanie o roślinę", d: "Opisujesz nam miejsce nasadzenia i efekt, jaki chcesz uzyskać." },
  { icon: Camera, t: "Zdjęcia dostępnych egzemplarzy", d: "Wysyłamy Ci aktualne zdjęcia konkretnych roślin do wyboru." },
  { icon: Sprout, t: "Dobór i instrukcja uprawy", d: "Omawiamy wymagania gatunku, glebę oraz sposób zabezpieczenia na zimę." },
  { icon: PackageCheck, t: "Szybka i bezpieczna dostawa", d: "Dostarczamy roślinę naszym transportem, kurierem lub przygotowujemy do odbioru osobistego." },
  { icon: LifeBuoy, t: "Opieka po zakupie", d: "Pozostajemy w kontakcie i odpowiadamy na pytania w kolejnych sezonach." },
];

export function Process() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-palm text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <p className="eyebrow">Krok po kroku</p>
        <h3 className="mt-3 text-3xl md:text-4xl">Jak wygląda zakup w Palm House?</h3>
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map(({ icon: I, t, d }, i) => (
            <li key={t}>
              <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`h-full w-full rounded-lg border p-5 text-left transition ${active === i ? "border-gold bg-obsidian/40" : "border-gold/20 hover:border-gold/60"}`}
              >
                <span className="font-serif text-4xl text-gold">0{i + 1}</span>
                <I className="mt-3 h-6 w-6 text-gold" />
                <p className="mt-3 font-semibold">{t}</p>
                <p className="mt-2 text-sm opacity-80">{d}</p>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const species = [
  { name: "Szorstkowiec Fortunego", latin: "Trachycarpus fortunei", temp: "-12°C", img: frost },
  { name: "Karłatka niska", latin: "Chamaerops humilis", temp: "-10°C", img: hero },
  { name: "Waszyngtonia", latin: "Washingtonia robusta", temp: "-5°C", img: winter },
];

export function Species() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <p className="eyebrow">Popularne gatunki</p>
      <h3 className="mt-3 text-3xl md:text-4xl text-palm">Palmy, o które pytacie najczęściej</h3>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {species.map((s) => (
          <article key={s.name} className="overflow-hidden rounded-lg border border-border bg-card shadow-elegant">
            <img src={s.img} alt={`${s.name} (${s.latin})`} width={1600} height={912} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-6">
              <span className="inline-flex items-center gap-1 rounded-full bg-palm px-3 py-1 text-xs font-semibold text-gold"><Thermometer className="h-3.5 w-3.5" /> do ok. {s.temp}</span>
              <h4 className="mt-3 font-serif text-2xl">{s.name}</h4>
              <p className="text-sm italic text-muted-foreground">{s.latin}</p>
              <a href="#kontakt" className="mt-4 inline-block text-sm font-semibold text-palm underline decoration-gold underline-offset-4">Poproś o aktualne zdjęcia i rozmiary →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BlogPreview() {
  return (
    <section className="bg-muted">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2">
        <img src={winter} alt="Palma zabezpieczona na zimę włókniną i słomą" width={1600} height={912} loading="lazy" className="rounded-lg object-cover shadow-elegant" />
        <div>
          <p className="eyebrow">Poradnik eksperta · Z naszego bloga</p>
          <h3 className="mt-3 text-3xl md:text-4xl text-palm">Palma w polskim ogrodzie – jaką wybrać, jak ją uprawiać i zabezpieczyć przed mrozem?</h3>
          <p className="mt-4 text-muted-foreground">Szorstkowiec, karłatka czy waszyngtonia? Stanowisko, gleba i zimowanie krok po kroku – wszystko w jednym poradniku.</p>
          <Link to="/blog/$slug" params={{ slug: BLOG_SLUG }} className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Przeczytaj poradnik</Link>
        </div>
      </div>
    </section>
  );
}

export function Inquiry() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="bg-obsidian text-obsidian-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h3 className="mt-3 text-3xl md:text-5xl">Zapytaj o dostępne egzemplarze</h3>
          <p className="mt-5 opacity-80">Opisz miejsce nasadzenia i efekt, jaki chcesz uzyskać. Odpowiemy zdjęciami konkretnych roślin, rozmiarami i cenami.</p>
          <ul className="mt-6 space-y-2 text-sm">
            {["Aktualne zdjęcia realnych okazów", "Dobór gatunku do Twojego stanowiska", "Instrukcja uprawy i zimowania"].map((x) => (
              <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" />{x}</li>
            ))}
          </ul>
        </div>
        {sent ? (
          <div className="rounded-lg border border-gold/40 p-8">
            <p className="font-serif text-3xl text-gold">Dziękujemy!</p>
            <p className="mt-3 opacity-80">Twoje zapytanie zostało przyjęte. Wkrótce odezwiemy się ze zdjęciami dostępnych roślin.</p>
          </div>
        ) : (
          <form
            className="space-y-4 rounded-lg border border-gold/25 p-6 md:p-8"
            onSubmit={(e) => { e.preventDefault(); setSent(true); toast.success("Zapytanie wysłane"); }}
          >
            <fieldset>
              <legend className="mb-2 text-sm font-semibold">Czego szukasz?</legend>
              <div className="flex flex-wrap gap-2">
                {["Palma do gruntu", "Palma na taras lub balkon", "Rośliny egzotyczne"].map((o, i) => (
                  <label key={o} className="cursor-pointer">
                    <input type="radio" name="typ" value={o} defaultChecked={i === 0} className="peer sr-only" />
                    <span className="inline-block rounded-full border border-gold/40 px-4 py-2 text-sm peer-checked:bg-primary peer-checked:text-primary-foreground">{o}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">Imię<input required name="name" className="mt-1 w-full rounded-md border border-gold/30 bg-transparent px-3 py-2" /></label>
              <label className="text-sm">E-mail lub telefon<input required name="contact" className="mt-1 w-full rounded-md border border-gold/30 bg-transparent px-3 py-2" /></label>
            </div>
            <label className="block text-sm">Region
              <select name="region" className="mt-1 w-full rounded-md border border-gold/30 bg-obsidian px-3 py-2">
                <option>łódzkie</option><option>mazowieckie</option><option>inne</option>
              </select>
            </label>
            <label className="block text-sm">Opisz miejsce w ogrodzie
              <textarea required name="msg" rows={4} placeholder="np. słoneczny taras od południa, ok. 3 m wolnej przestrzeni…" className="mt-1 w-full rounded-md border border-gold/30 bg-transparent px-3 py-2" />
            </label>
            <button type="submit" className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90">Poproś o zdjęcia i ceny</button>
          </form>
        )}
      </div>
    </section>
  );
}
