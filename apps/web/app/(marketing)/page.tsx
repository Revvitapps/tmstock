import Link from "next/link";
import { catalogAssets } from "@/lib/catalog";

export default function HomePage() {
  const featuredAssets = catalogAssets.slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="card hero-copy">
          <div className="eyebrow">Production-ready route scaffold</div>
          <h1 className="display">A warmer stock marketplace, shaped like an editorial title.</h1>
          <p className="lede">
            This starter turns the readiness audit into a concrete Next.js App Router baseline:
            public SEO surfaces, protected portals, and room for payments, uploads, workers, and
            search without collapsing everything into route handlers.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/search">
              Browse assets
            </Link>
            <Link className="button secondary" href="/contributors">
              Contributor flow
            </Link>
          </div>
        </div>
        <div className="card hero-visual" aria-hidden="true" />
      </section>

      <section className="section">
        <div className="meta">
          <h2 className="section-title">Featured drop</h2>
          <span className="pill">Warm palette + editorial typography</span>
        </div>
        <div className="grid">
          {featuredAssets.map((asset) => (
            <Link key={asset.id} href={`/assets/${asset.slug}`} className="card asset-card">
              <div className="asset-media" style={{ backgroundImage: `url(${asset.image})` }} />
              <div className="asset-copy">
                <div className="meta">
                  <span>{asset.category}</span>
                  <span>{asset.price}</span>
                </div>
                <h3>{asset.title}</h3>
                <div className="subtle">{asset.license} license</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section split">
        <div className="panel">
          <p className="kicker">Route readiness</p>
          <div className="list">
            <div className="list-item">
              <div>
                <strong>Public marketing and SEO</strong>
                <div className="subtle">Home, pricing, licensing, contributor landing pages</div>
              </div>
              <span className="pill">ISR-friendly</span>
            </div>
            <div className="list-item">
              <div>
                <strong>Protected portals</strong>
                <div className="subtle">Buyer account, contributor tools, strict admin areas</div>
              </div>
              <span className="pill">Dynamic</span>
            </div>
            <div className="list-item">
              <div>
                <strong>Catalog detail surfaces</strong>
                <div className="subtle">Asset pages ready for metadata, JSON-LD, and entitlement UI</div>
              </div>
              <span className="pill">Hybrid</span>
            </div>
          </div>
        </div>
        <div className="panel">
          <p className="kicker">Production gaps carried into the scaffold</p>
          <div className="list">
            <div className="list-item">
              <div>
                <strong>Payments and licensing</strong>
                <div className="subtle">Catalog is now populated with uploaded sale assets; checkout is next</div>
              </div>
              <span className="metric">P0</span>
            </div>
            <div className="list-item">
              <div>
                <strong>Direct uploads and processing</strong>
                <div className="subtle">Presigned flows, derivatives, moderation, indexing</div>
              </div>
              <span className="metric">P0</span>
            </div>
            <div className="list-item">
              <div>
                <strong>Infra and observability</strong>
                <div className="subtle">IaC, CI, secrets, auditability, abuse controls</div>
              </div>
              <span className="metric">P1</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
