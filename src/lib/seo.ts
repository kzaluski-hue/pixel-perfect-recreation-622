export function seo(o: { title: string; description: string; path: string; type?: string; jsonLd?: object }) {
  return {
    meta: [
      { title: o.title },
      { name: "description", content: o.description },
      { property: "og:title", content: o.title },
      { property: "og:description", content: o.description },
      { property: "og:type", content: o.type ?? "website" },
      { property: "og:url", content: o.path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: o.title },
      { name: "twitter:description", content: o.description },
    ],
    links: [{ rel: "canonical", href: o.path }],
    scripts: o.jsonLd ? [{ type: "application/ld+json", children: JSON.stringify(o.jsonLd) }] : [],
  };
}

export const storeLd = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": ["GardenStore", "LocalBusiness"],
  name: "Palm House",
  description: name,
  url: `https://palm-house.pl${path}`,
  areaServed: ["województwo łódzkie", "województwo mazowieckie", "Polska"],
  priceRange: "$$",
});
