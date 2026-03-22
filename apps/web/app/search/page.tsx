import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Search and facet browsing surface for the TMStock marketplace scaffold.",
  robots: {
    index: false,
    follow: true
  }
};

const results = [
  { title: "Cinnamon Studio Portrait", tags: "portrait, warm, campaign", license: "Commercial" },
  { title: "Ochre Editorial Walk", tags: "street, fashion, motion", license: "Editorial" },
  { title: "Dusty Rose Flatlay", tags: "product, texture, still-life", license: "Commercial" }
];

export default function SearchPage() {
  return (
    <div className="route-shell">
      <div className="shell">
        <section className="section split">
          <div className="panel">
            <p className="kicker">Search contract</p>
            <h1 className="section-title">Query, facets, ranking, then indexing jobs.</h1>
            <p className="subtle">
              This route is intentionally positioned for dynamic rendering or client-driven search,
              not broad SEO indexing of query combinations.
            </p>
          </div>
          <div className="panel">
            <div className="list">
              <div className="list-item">
                <strong>Filterable fields</strong>
                <span className="pill">keyword</span>
              </div>
              <div className="list-item">
                <strong>Full-text fields</strong>
                <span className="pill">text</span>
              </div>
              <div className="list-item">
                <strong>Optional semantic field</strong>
                <span className="pill">vector</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="grid">
            {results.map((result) => (
              <div key={result.title} className="panel">
                <p className="kicker">{result.license}</p>
                <h3>{result.title}</h3>
                <p className="subtle">{result.tags}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
