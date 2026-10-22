import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site/Layout";
import { Hero, TrustBar, Process, Species, BlogPreview, Inquiry } from "@/components/site/Sections";
import { seo, storeLd } from "@/lib/seo";
import frost from "@/assets/palm-frost.jpg";

const T = "Palmy mrozoodporne do ogrodu i na taras – Całoroczne | Palm House";
const D = "Oferujemy mrozoodporne palmy ogrodowe i całoroczne z Hiszpanii. Wybierz palmę na taras, balkon lub do gruntu ze wsparciem w uprawie i zimowaniu.";

export const Route = createFileRoute("/palmy-mrozoodporne")({
  head: () => seo({ title: T, description: D, path: "/palmy-mrozoodporne", jsonLd: storeLd(D, "/palmy-mrozoodporne") }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <Hero image={frost} eyebrow="Palmy całoroczne z Hiszpanii" title="Palmy mrozoodporne – egzotyczna ozdoba Twojego ogrodu" lead="Do gruntu, na taras i balkon – dobieramy gatunek do Twoich warunków i pomagamy w zimowaniu." />
      <Breadcrumbs items={[{ label: "Palmy mrozoodporne" }]} />
      <TrustBar />
      <article className="prose-ph mx-auto max-w-3xl px-5 py-16">
        <p>
          W Palm House oferujemy <strong>mrozoodporne palmy</strong>, które pozwalają stworzyć wyjątkową aranżację wokół domu. Dekoracyjne liście, charakterystyczny pokrój i egzotyczny wygląd sprawiają, że palmy ogrodowe mrozoodporne przyciągają uwagę i podkreślają wyjątkowy charakter otoczenia. Palmy pasują do ogrodów nowoczesnych, kompozycji śródziemnomorskich oraz stref wypoczynku przy tarasie.
        </p>
        <p>
          Szukasz pojedynczej rośliny do wyeksponowania przy wejściu? Planujesz większe nasadzenia? Poznaj <Link to="/">ofertę Palm House</Link> i zapytaj o dostępne egzemplarze. Palmy całoroczne do ogrodu warto dobierać do warunków uprawy, dostępnej przestrzeni oraz możliwości zabezpieczenia zimą.
        </p>
        <section>
          <h2>Palma mrozoodporna do ogrodu – wybierz roślinę do swojej aranżacji</h2>
          <p>
            Palma mrozoodporna do ogrodu może stać się centralnym punktem rabaty lub efektownym uzupełnieniem zieleni przy domu. Dobrze prezentuje się na tle trawnika, w otoczeniu kamienia i drewna oraz w zestawieniu z trawami ozdobnymi. Jej liście wprowadzają do kompozycji odmienny kształt i fakturę, dzięki czemu nawet niewielkie nasadzenie zyskuje wyrazisty charakter.
          </p>
          <p>
            Odpowiednio dobrana palma ogrodowa mrozoodporna pozwala uzyskać wakacyjny klimat bez przebudowy całego ogrodu. Przed zakupem porównaj wielkość dostępnych egzemplarzy, docelowe rozmiary gatunku oraz jego wymagania. Wybierając palmy ogrodowe mrozoodporne, możesz zaplanować zarówno pojedynczy dekoracyjny akcent, jak i kompozycję z kilku roślin.
          </p>
        </section>
        <section>
          <h2>Palma całoroczna do ogrodu – zakup z myślą o kolejnych sezonach</h2>
          <p>
            Palma całoroczna do ogrodu to wybór dla osób, które chcą stworzyć trwałą aranżację z egzotycznym akcentem. Odpowiednio dobrany gatunek może pozostawać w gruncie przez kolejne sezony, pod warunkiem zapewnienia właściwego stanowiska i ochrony zimowej. Przy zakupie warto uwzględnić docelową wysokość rośliny, rozpiętość jej liści oraz miejsce, w którym będzie najlepiej wyeksponowana. Dzięki temu palma stanie się przemyślanym elementem zagospodarowania posesji.
          </p>
          <p>
            Wybierając palmy całoroczne do ogrodu, zwróć uwagę na wymagania konkretnego gatunku. Mrozoodporność nie oznacza jednakowej odporności wszystkich roślin ani możliwości pozostawienia ich bez zabezpieczenia podczas każdej zimy. Znaczenie mają również kondycja egzemplarza, stopień ukorzenienia, długość okresu mrozu i wilgotność podłoża. Osłonięte stanowisko oraz przepuszczalna gleba sprzyjają uprawie, natomiast sposób ochrony liści, korzeni i stożka wzrostu należy dopasować do rośliny oraz lokalnych warunków.
          </p>
        </section>
        <section>
          <h2>Palma mrozoodporna na balkon i taras</h2>
          <p>
            Chcesz urządzić egzotyczny zakątek w miejskiej przestrzeni? Palma mrozoodporna na balkon może być dekoracyjnym akcentem przy zestawie wypoczynkowym lub ozdobą tarasu. Przy wyborze uwzględnij rozmiary rośliny, nasłonecznienie i ekspozycję na wiatr.
          </p>
          <p>
            Interesują Cię <Link to="/rosliny-egzotyczne"><strong>egzotyczne rośliny do ogrodu</strong></Link>, na balkon lub do oranżerii? Skontaktuj się z Palm House i zapytaj o dostępne palmy, ich wielkości, ceny oraz warunki zakupu. Poznaj ofertę i wybierz roślinę do swojej wymarzonej aranżacji.
          </p>
        </section>
      </article>
      <Species />
      <Process />
      <BlogPreview />
      <Inquiry />
    </PageShell>
  );
}
