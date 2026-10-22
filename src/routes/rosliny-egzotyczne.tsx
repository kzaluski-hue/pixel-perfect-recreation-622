import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site/Layout";
import { Hero, TrustBar, Process, BlogPreview, Inquiry } from "@/components/site/Sections";
import { seo, storeLd } from "@/lib/seo";
import exotic from "@/assets/exotic-plants.jpg";

const T = "Egzotyczne rośliny do ogrodu – Mrozoodporne okazy | Palm House";
const D = "Odmień swoją przestrzeń dzięki egzotycznym roślinom do ogrodu z Hiszpanii. Mrozoodporne okazy na rabaty i tarasy z ekspresową dostawą od Palm House.";

export const Route = createFileRoute("/rosliny-egzotyczne")({
  head: () => seo({ title: T, description: D, path: "/rosliny-egzotyczne", jsonLd: storeLd(D, "/rosliny-egzotyczne") }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <Hero image={exotic} eyebrow="Mrozoodporne okazy z Hiszpanii" title="Egzotyczne rośliny do ogrodu" lead="Rośliny na rabaty, tarasy i strefy wypoczynku – z doradztwem przy wyborze i zimowaniu." />
      <Breadcrumbs items={[{ label: "Rośliny egzotyczne" }]} />
      <TrustBar />
      <article className="prose-ph mx-auto max-w-3xl px-5 py-16">
        <p>
          Chcesz, aby otoczenie Twojego domu wyróżniało się niecodzienną zielenią? Egzotyczne rośliny do ogrodu podkreślają unikalny charakter przestrzeni i wyprowadzają do niej klimat inspirowany odległymi zakątkami świata. Dekoracyjne liście, ciekawe formy i różnorodne pokroje sprawiają, że rośliny egzotyczne mrozoodporne stają się główną ozdobą rabaty, tarasu lub strefy rekreacji.
        </p>
        <p>
          Palm House zaprasza do szczegółowego zapoznania się z naszą ofertą roślin, która pomoże Ci zrealizować pomysł na egzotyczną aranżację ogrodu lub tarasu. Niezależnie od tego, czy planujesz pojedynczy akcent, czy większą kompozycję, znajdziesz u nas nasadzenia odpowiadające dostępnej przestrzeni i warunkom uprawy.
        </p>
        <section>
          <h2>Dlaczego warto wybierać egzotyczne rośliny do ogrodu?</h2>
          <p>
            <strong>Egzotyczne rośliny do ogrodu</strong> pozwalają nadać otoczeniu domu indywidualny charakter. Przyciągają uwagę dekoracyjnymi liśćmi, ciekawym pokrojem i sylwetką wyróżniającą się wśród tradycyjnych nasadzeń. Ich zaletą są również szerokie możliwości aranżacyjne. Wybierając egzotyczne rośliny do ogrodu możesz wyeksponować pojedynczą roślinę na tle trawnika albo zestawić kilka gatunków, wykorzystując różnice w wysokości, kolorystyce i kształcie liści. Egzotyczna zieleń dobrze komponuje się z drewnem, kamieniem oraz prostymi formami nowoczesnej architektury. Pozwala też odmienić wybrany fragment ogrodu bez konieczności przebudowy całej przestrzeni.
          </p>
        </section>
        <section>
          <h2>Rośliny egzotyczne mrozoodporne do Twojego ogrodu</h2>
          <p>
            <strong>Rośliny egzotyczne mrozoodporne</strong> pozwalają tworzyć niecodzienne kompozycje, które wyróżniają się dekoracyjnymi liśćmi i ciekawym pokrojem. To propozycja dla osób, które chcą nadać otoczeniu domu egzotyczny charakter, uzupełnić istniejące rabaty lub zaaranżować strefę wypoczynku inspirowaną wakacyjnym krajobrazem. Odpowiednio dobrane rośliny dobrze komponują się z naturalnym kamieniem, drewnem oraz nowoczesną architekturą.
          </p>
          <p>
            Wśród nasadzeń do takich aranżacji warto rozważyć <Link to="/palmy-mrozoodporne">palmy mrozoodporne</Link>. Ich charakterystyczna sylwetka sprawia, że mogą pełnić funkcję głównego akcentu na tle trawnika albo stanowić część większej kompozycji przy tarasie. Przy wyborze liczy się zarówno wygląd egzemplarza, jak i docelowa wielkość rośliny. Pozostawienie odpowiedniej przestrzeni pozwoli wyeksponować liście i ułatwi późniejszą pielęgnację.
          </p>
          <p>
            Zakup roślin egzotycznych warto poprzedzić poznaniem ich wymagań. Tolerancja na mróz różni się między gatunkami, a na zimowanie wpływają również wilgotność podłoża, wiatr i długość utrzymywania się niskich temperatur. Mrozoodporność nie wyklucza potrzeby stosowania zabezpieczeń. Właściwe stanowisko i ochrona dopasowana do konkretnej rośliny mają znaczenie dla jej uprawy przez kolejne sezony.
          </p>
        </section>
        <section>
          <h2>Egzotyczne rośliny do ogrodu w Palm House</h2>
          <p>
            Twój pomysł na ogród może zacząć się od jednej wyjątkowej rośliny. Napisz do <Link to="/">Palm House</Link> i opowiedz, jaką przestrzeń chcesz odmienić – rabatę przed domem, otoczenie tarasu czy zaciszny kącik do odpoczynku. Z przyjemnością odpowiemy na wszystkie Twoje pytania i pomożemy w wyborze odpowiedniego nasadzenia.
          </p>
        </section>
      </article>
      <Process />
      <BlogPreview />
      <Inquiry />
    </PageShell>
  );
}
