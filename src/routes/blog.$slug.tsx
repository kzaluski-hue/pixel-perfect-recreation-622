import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site/Layout";
import { Inquiry, BLOG_SLUG } from "@/components/site/Sections";
import { seo } from "@/lib/seo";
import { Thermometer, Layers, Fence, Umbrella, Ban, Wind, Zap, Leaf } from "lucide-react";
import winter from "@/assets/palm-winter.jpg";

const T = "Palma w polskim ogrodzie – wybór, uprawa i zimowanie | Palm House";
const D = "Dowiedz się, jaką palmę mrozoodporną wybrać do polskiego ogrodu (szorstkowiec, karłatka, waszyngtonia), jak ją posadzić i krok po kroku zabezpieczyć na zimę.";
const H1 = "Palma w polskim ogrodzie – jaką wybrać, jak ją uprawiać i zabezpieczyć przed mrozem?";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (params.slug !== BLOG_SLUG) throw notFound();
    return null;
  },
  head: () =>
    seo({
      title: T,
      description: D,
      path: `/blog/${BLOG_SLUG}`,
      type: "article",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: H1,
        description: D,
        inLanguage: "pl-PL",
        author: { "@type": "Organization", name: "Palm House" },
        publisher: { "@type": "Organization", name: "Palm House" },
        mainEntityOfPage: `https://palm-house.pl/blog/${BLOG_SLUG}`,
      },
    }),
  component: Article,
});

const toc = [
  "Czy palma mrozoodporna przetrwa polską zimę?",
  "Którą palmę wybrać do gruntu, a którą do donicy?",
  "Jakie stanowisko i gleba służą palmie najlepiej?",
  "Jak zabezpieczyć palmę przed mrozem krok po kroku?",
  "Jak wygląda zakup palmy u nas i co dzieje się po nim?",
];

const Temp = ({ t }: { t: string }) => (
  <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-palm px-2.5 py-0.5 text-xs font-semibold text-gold"><Thermometer className="h-3 w-3" />{t}</span>
);

const winterSteps = [
  { icon: Layers, b: "Okryj korzenie", r: " grubą warstwą ściółki z kory lub słomy." },
  { icon: Fence, b: "Zbuduj osłonę", r: " z palików owiniętych grubą włókniną i wypełnionych słomą lub liśćmi." },
  { icon: Umbrella, b: "Zwiąż liście", r: " i rozpnij nad koroną daszek, który chroni wierzchołek przed zamakaniem." },
  { icon: Ban, b: "Nie zakrywaj", r: " całej palmy folią, bo pod nią zaparzy się i zgnije." },
  { icon: Wind, b: "Wietrz okrycie", r: " w bezmroźne dni." },
  { icon: Zap, b: "Rozważ kabel grzewczy", r: " przeznaczony do roślin egzotycznych, zwłaszcza przy gatunkach mniej odpornych." },
];

function Article() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: "Palma w polskim ogrodzie" }]} />
      <article className="prose-ph mx-auto max-w-3xl px-5 py-10">
        <header>
          <p className="eyebrow">Poradnik · Zimowanie palm</p>
          <h1 className="mt-3 text-4xl text-palm md:text-5xl">{H1}</h1>
          <p className="mt-6 border-l-4 border-gold pl-5 font-serif text-xl italic leading-relaxed text-muted-foreground">
            Palma w polskim ogrodzie może rosnąć przez wiele lat, jeśli gatunek dobrano do warunków i zabezpieczono go na zimę. Spośród popularnych palm najbardziej mrozoodporny jest szorstkowiec Fortunego, a karłatka niska i waszyngtonia wymagają mocniejszej ochrony. Roślina potrzebuje słonecznego, osłoniętego od wiatru stanowiska oraz przepuszczalnej gleby, w której nie zalega woda. Zimą chronią ją ściółka na korzeniach i przewiewna osłona, a nie szczelne okrycie folią.
          </p>
          <img src={winter} alt="Palma zabezpieczona na zimę włókniną, słomą i daszkiem" width={1600} height={912} className="my-8 rounded-lg shadow-elegant" />
        </header>

        <p>
          Na początek do polskiego ogrodu najlepiej wybrać szorstkowiec Fortunego, posadzić go w słonecznym miejscu i przed zimą okryć przewiewną osłoną. Sama mrozoodporność gatunku nie wystarcza, bo o przetrwaniu decydują też gleba, wiek rośliny i sposób okrycia. Poniżej porządkujemy wybór, uprawę i zimowanie palm.
        </p>

        <section className="my-10 rounded-lg border border-gold/50 bg-palm p-7 text-secondary-foreground">
          <h2 className="!mt-0 !text-gold">W skrócie</h2>
          <ul className="!ml-0 list-none space-y-2">
            <li><strong>Gatunek:</strong> szorstkowiec Fortunego do około -12°C, karłatka niska do około -10°C, waszyngtonia do około -5°C.</li>
            <li><strong>Stanowisko:</strong> słońce lub półcień, osłona od wiatru, gleba przepuszczalna.</li>
            <li><strong>Zimowanie:</strong> ściółka, przewiewna osłona, suchy wierzchołek.</li>
          </ul>
        </section>

        <nav aria-labelledby="toc" className="rounded-lg border border-border bg-card p-7">
          <h2 id="toc" className="!mt-0 !text-2xl">Spis treści</h2>
          <ol className="list-decimal space-y-1.5 pl-5">
            {toc.map((t, i) => <li key={t}><a href={`#sekcja-${i + 1}`}>{t}</a></li>)}
          </ol>
        </nav>

        <section>
          <h2 id="sekcja-1">Czy palma mrozoodporna przetrwa polską zimę?</h2>
          <p>
            Przetrwa, ale tylko z osłoną, bo mrozoodporność oznacza wytrzymałość na ujemną temperaturę, a nie na cały sezon zimowy. Za całą zimę odpowiada zimotrwałość, czyli odporność także na wiatr, wilgoć i wahania temperatury. Dlatego przy pytaniach o <Link to="/palmy-mrozoodporne">mrozoodporne palmy</Link> omawiamy z klientami także uprawę i zimowanie wybranej rośliny.
          </p>
        </section>

        <section>
          <h2 id="sekcja-2">Którą palmę wybrać do gruntu, a którą do donicy?</h2>
          <p>
            Do gruntu najlepszy na początek jest <Link to="/palmy-mrozoodporne">szorstkowiec Fortunego</Link>, który uchodzi za najbardziej mrozoodporną z popularnych <Link to="/">palm ogrodowych</Link>. Tworzy zimozielony pióropusz wachlarzowatych liści osadzonych na włochatym pniu. Karłatka niska i waszyngtonia znoszą mniej, dlatego wymagają mocniejszej ochrony, co pokazuje zestawienie poniżej.
          </p>
          <div className="my-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-obsidian text-obsidian-foreground">
                <tr><th className="p-3">Gatunek</th><th className="p-3">Odporność na mróz</th><th className="p-3">Uwagi</th></tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                <tr><td className="p-3 font-semibold">Szorstkowiec Fortunego <em className="font-normal">(Trachycarpus fortunei)</em></td><td className="p-3"><Temp t="-12°C" /> do około -12°C</td><td className="p-3">najbardziej mrozoodporny, zimą wymaga osłony</td></tr>
                <tr><td className="p-3 font-semibold">Karłatka niska <em className="font-normal">(Chamaerops humilis)</em></td><td className="p-3"><Temp t="-10°C" /> do około -10°C, część źródeł podaje mniej</td><td className="p-3">rośnie wolno, tworzy kilka pni</td></tr>
                <tr><td className="p-3 font-semibold">Waszyngtonia <em className="font-normal">(Washingtonia robusta)</em></td><td className="p-3"><Temp t="-5°C" /> do około -5°C</td><td className="p-3">rośnie szybko, zimą wymaga mocnej ochrony</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Każdą z tych palm można uprawiać w donicy, ale rośnie wtedy wolniej. Na zimę donicę trzeba przenieść do chłodnego pomieszczenia o temperaturze około 5-10°C i zapewnić roślinie dostęp do światła. Przy braku pewności co do warunków w ogrodzie bezpieczniej uprawiać palmę w donicy przez 1-2 sezony.
          </p>
          <aside className="my-6 flex gap-4 rounded-lg bg-palm-soft p-5">
            <Leaf className="h-6 w-6 shrink-0 text-palm" />
            <p className="!mb-0 text-sm">Szukasz konkretnego egzemplarza? Zobacz nasze <Link to="/palmy-mrozoodporne">palmy mrozoodporne</Link> lub wróć na <Link to="/">stronę główną Palm House</Link> i poznaj całą ofertę palm do ogrodu.</p>
          </aside>
        </section>

        <section>
          <h2 id="sekcja-3">Jakie stanowisko i gleba służą palmie najlepiej?</h2>
          <p>
            Palma najlepiej rośnie w słońcu lub półcieniu, w miejscu osłoniętym od wiatru, na glebie przepuszczalnej i żyznej. Silny wiatr potrafi porwać liście, a ciężka, mokra ziemia pogarsza zimowanie, bo zamarza głębiej i mocniej. Na ciężkiej glebie lub przy wysokiej wodzie gruntowej lepiej posadzić palmę na lekkim wzniesieniu albo przygotować warstwę drenażu.
          </p>
        </section>

        <section>
          <h2 id="sekcja-4">Jak zabezpieczyć palmę przed mrozem krok po kroku?</h2>
          <p>
            Zabezpieczenie opiera się na ochronie korzeni, przewiewnej osłonie i suchym wierzchołku rośliny. Najwięcej uwagi wymagają młode egzemplarze, które słabiej znoszą zimno niż dorosłe. Okrycie warto przygotować jesienią, zanim temperatura spadnie.
          </p>
          <ul className="!ml-0 list-none space-y-3">
            {winterSteps.map(({ icon: I, b, r }) => (
              <li key={b} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-palm text-gold"><I className="h-4 w-4" /></span>
                <span><strong>{b}</strong>{r}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 id="sekcja-5">Jak wygląda zakup palmy u nas i co dzieje się po nim?</h2>
          <p>
            Zakup zaczyna się od zapytania o roślinę, na które odpowiadamy zdjęciami dostępnych egzemplarzy. Sprowadzamy <Link to="/rosliny-egzotyczne">rośliny egzotyczne z Hiszpanii</Link> i działamy od dwóch lat, a naszymi klientami są osoby prywatne z województw łódzkiego i mazowieckiego. Rośliny dostarczamy kurierem lub własnym transportem, a możliwy jest też odbiór osobisty. Stawiamy na ekspresową dostawę i szybki kontakt, a pomagamy także po zakupie.
          </p>
        </section>

        <section>
          <h2 id="sekcja-6">Podsumowanie</h2>
          <ul>
            <li><strong>Wybór:</strong> na początek szorstkowiec Fortunego, a przy mniej odpornych gatunkach mocniejsza ochrona.</li>
            <li><strong>Miejsce:</strong> słoneczne, osłonięte od wiatru, z drenażem.</li>
            <li><strong>Zima:</strong> okrycie założone jesienią, korzenie pod ściółką, bez folii.</li>
          </ul>
        </section>

        <aside className="mt-12 rounded-lg bg-obsidian p-8 text-obsidian-foreground">
          <p className="eyebrow">Gotowy na własną palmę?</p>
          <p className="mt-2 font-serif text-3xl">Wybierz roślinę z Hiszpanii – my pomożemy ją przezimować</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link to="/palmy-mrozoodporne" className="rounded-full bg-primary px-5 py-2.5 !text-primary-foreground !no-underline">Palmy mrozoodporne</Link>
            <Link to="/rosliny-egzotyczne" className="rounded-full border border-gold/60 px-5 py-2.5 !text-gold !no-underline">Rośliny egzotyczne</Link>
            <a href="#kontakt" className="rounded-full border border-gold/60 px-5 py-2.5 !text-gold !no-underline">Poproś o zdjęcia egzemplarzy</a>
          </div>
        </aside>
      </article>
      <Inquiry />
    </PageShell>
  );
}
