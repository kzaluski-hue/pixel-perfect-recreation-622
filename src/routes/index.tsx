import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";
import { Hero, TrustBar, Process, Species, BlogPreview, Inquiry } from "@/components/site/Sections";
import { seo, storeLd } from "@/lib/seo";
import hero from "@/assets/hero-garden.jpg";
import exotic from "@/assets/exotic-plants.jpg";

const T = "Palma do ogrodu – Palmy i rośliny egzotyczne z Hiszpanii | Palm House";
const D = "Szukasz palmy do ogrodu lub na taras? W Palm House oferujemy mrozoodporne palmy i rośliny egzotyczne z Hiszpanii. Szybka dostawa i doradztwo. Sprawdź!";

export const Route = createFileRoute("/")({
  head: () => seo({ title: T, description: D, path: "/", jsonLd: storeLd(D, "/") }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero
        image={hero}
        eyebrow="Palmy i rośliny egzotyczne z Hiszpanii"
        title="Palma do ogrodu – egzotyczny akcent w Twojej przestrzeni"
        lead="Mrozoodporne palmy i egzotyczne rośliny sprowadzane bezpośrednio z Hiszpanii – z doradztwem przy wyborze, sadzeniu i zimowaniu."
      />
      <TrustBar />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_340px]">
        <article className="prose-ph max-w-3xl">
          <p>
            Szukasz rośliny, która odmieni wygląd Twojego ogrodu? W Palm House oferujemy palmy do ogrodu, dzięki którym stworzysz przestrzeń inspirowaną egzotycznym krajobrazem. Dekoracyjne liście i charakterystyczny pokrój sprawiają, że palma przyciąga wzrok i staje się ważnym elementem aranżacji. Może podkreślać wejście do domu, zdobić otoczenie tarasu lub stanowić główny akcent w strefie wypoczynku.
          </p>
          <p>
            Dobrze dobrana palma do ogrodu nadaje posesji indywidualny charakter. Jeśli planujesz nowe nasadzenia albo chcesz uzupełnić istniejącą kompozycję, zapoznaj się z propozycjami Palm House i wybierz roślinę egzotyczną, która odpowiada Twojej wizji ogrodu.
          </p>

          <section>
            <h2>Palmy do ogrodu – efektowna ozdoba tarasu i posesji</h2>
            <p>
              Palmy pasują do nowoczesnej architektury, naturalnych materiałów i aranżacji w śródziemnomorskim stylu. Pojedynczy okaz może wyróżniać się na tle trawnika, a kilka roślin tworzyć dekoracyjną kompozycję w wybranym miejscu. Palmy w ogrodzie dobrze prezentują się także jako uzupełnienie innych nasadzeń o zróżnicowanych kształtach i fakturach liści. To propozycja dla osób, które chcą wprowadzić do otoczenia domu wakacyjny klimat i cieszyć się niecodziennym widokiem podczas odpoczynku na świeżym powietrzu.
            </p>
            <p>Przed zakupem warto określić, jaki efekt chcesz uzyskać:</p>
            <ul>
              <li>subtelny egzotyczny akcent?</li>
              <li>wyrazistą roślinę dominującą w otoczeniu?</li>
            </ul>
            <p>
              Uwzględnij przy tym docelowe rozmiary palmy i przestrzeń, którą możesz dla niej przeznaczyć. Oferowane przez Palm House <Link to="/palmy-mrozoodporne">palmy mrozoodporne</Link> i <Link to="/rosliny-egzotyczne">rośliny egzotyczne mrozoodporne</Link> są przeznaczone zarówno do uprawy w gruncie lub w pojemniku.
            </p>
          </section>

          <section>
            <h2>Dlaczego warto mieć palmy w ogrodzie?</h2>
            <p>
              Palmy w ogrodzie przyciągają uwagę dekoracyjnymi liśćmi i nadają otoczeniu domu egzotyczny charakter. Pozwalają stworzyć przestrzeń kojarzącą się z wakacjami – idealną do odpoczynku na tarasie, spotkań z bliskimi czy spokojnych poranków na świeżym powietrzu. Już jedna odpowiednio wyeksponowana palma może stać się główną ozdobą aranżacji i wyróżnić ją na tle tradycyjnych nasadzeń. Jej charakterystyczna sylwetka przepięknie podkreśla wybrane miejsce w ogrodzie.
            </p>
          </section>

          <section>
            <h2>Palma na ogród – poznaj ofertę Palm House</h2>
            <p>
              Wybierasz palmę do nowej aranżacji? Szukasz wyjątkowej ozdoby przydomowego tarasu? Zapoznaj się z ofertą Palm House i uzyskaj informacje potrzebne do podjęcia decyzji. Opisz miejsce planowanego nasadzenia i powiedz, na jakim efekcie Ci zależy. Dzięki temu łatwiej określisz, która palma na ogród będzie najlepiej odpowiadać Twoim oczekiwaniom.
            </p>
          </section>
        </article>
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <Link to="/palmy-mrozoodporne" className="block overflow-hidden rounded-lg border border-border bg-card shadow-elegant">
            <div className="p-5">
              <p className="eyebrow">Oferta</p>
              <p className="mt-1 font-serif text-2xl text-palm">Palmy mrozoodporne →</p>
            </div>
          </Link>
          <Link to="/rosliny-egzotyczne" className="block overflow-hidden rounded-lg border border-border bg-card shadow-elegant">
            <img src={exotic} alt="Egzotyczne rośliny do ogrodu" width={1600} height={912} loading="lazy" className="aspect-video w-full object-cover" />
            <div className="p-5">
              <p className="eyebrow">Oferta</p>
              <p className="mt-1 font-serif text-2xl text-palm">Egzotyczne rośliny do ogrodu →</p>
            </div>
          </Link>
        </aside>
      </div>
      <Species />
      <Process />
      <BlogPreview />
      <Inquiry />
    </PageShell>
  );
}
