import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site/Layout";
import { Inquiry, BLOG_SLUG } from "@/components/site/Sections";
import { seo } from "@/lib/seo";
import winter from "@/assets/palm-winter.jpg";

const T = "Blog o palmach i roślinach egzotycznych w Polsce | Palm House";
const D = "Praktyczne poradniki o wyborze, uprawie i zabezpieczaniu palm mrozoodpornych oraz roślin egzotycznych w polskim ogrodzie. Sprawdź wiedzę ekspertów Palm House.";

export const Route = createFileRoute("/blog/")({
  head: () => seo({ title: T, description: D, path: "/blog" }),
  component: Page,
});

const cats = ["Palmy mrozoodporne", "Zimowanie", "Uprawa i stanowisko", "Rośliny egzotyczne"];

function Page() {
  return (
    <PageShell>
      <section className="bg-obsidian text-obsidian-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="eyebrow">Poradniki Palm House</p>
          <h1 className="mt-4 max-w-4xl text-4xl md:text-6xl">Blog Palm House – Praktyczna wiedza o palmach i roślinach egzotycznych</h1>
          <p className="mt-6 max-w-2xl opacity-85">Jak wybrać palmę do polskiego ogrodu, gdzie ją posadzić i jak przeprowadzić ją przez zimę – dzielimy się doświadczeniem z importu i uprawy roślin z Hiszpanii.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {cats.map((c) => <span key={c} className="rounded-full border border-gold/40 px-4 py-1.5 text-sm text-gold">{c}</span>)}
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="mx-auto max-w-7xl px-5 py-14">
        <Link to="/blog/$slug" params={{ slug: BLOG_SLUG }} className="group grid overflow-hidden rounded-lg border border-border bg-card shadow-elegant md:grid-cols-2">
          <img src={winter} alt="Palma zabezpieczona na zimę" width={1600} height={912} className="h-full w-full object-cover" />
          <article className="p-8 md:p-10">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-palm px-3 py-1 text-xs font-semibold text-gold">Poradnik</span>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Zimowanie</span>
            </div>
            <h2 className="mt-4 text-3xl text-palm group-hover:underline decoration-gold">Palma w polskim ogrodzie – jaką wybrać, jak ją uprawiać i zabezpieczyć przed mrozem?</h2>
            <p className="mt-4 text-muted-foreground">Spośród popularnych palm najbardziej mrozoodporny jest szorstkowiec Fortunego, a karłatka niska i waszyngtonia wymagają mocniejszej ochrony. Sprawdź, jak dobrać stanowisko i zabezpieczyć palmę krok po kroku.</p>
            <span className="mt-6 inline-block font-semibold text-palm">Czytaj poradnik →</span>
          </article>
        </Link>
      </section>
      <Inquiry />
    </PageShell>
  );
}
