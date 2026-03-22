import type { Metadata } from "next";
import Link from "next/link";
import { catalogAssets } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Search",
  description: "Search and facet browsing surface for the TMStock marketplace scaffold.",
  robots: {
    index: false,
    follow: true
  }
};

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
            {catalogAssets.map((asset) => (
              <Link key={asset.id} href={`/assets/${asset.slug}`} className="panel">
                <p className="kicker">{asset.license}</p>
                <div
                  className="asset-media"
                  style={{ aspectRatio: "4 / 3", backgroundImage: `url(${asset.image})` }}
                />
                <h3>{asset.title}</h3>
                <p className="subtle">{asset.tags.join(", ")}</p>
                <div className="meta">
                  <span>{asset.category}</span>
                  <span>{asset.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
