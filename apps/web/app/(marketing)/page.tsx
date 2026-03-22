import Link from "next/link";

const featuredAssets = [
  {
    id: "amber-editorial-01",
    title: "Amber Light Portrait",
    type: "Editorial portrait",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "terracotta-studio-02",
    title: "Terracotta Studio Set",
    type: "Campaign backdrop",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "golden-motion-03",
    title: "Golden Motion Frame",
    type: "Fashion movement",
    price: "$32",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function HomePage() {
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
            <Link key={asset.id} href={`/assets/${asset.id}`} className="card asset-card">
              <div className="asset-media" style={{ backgroundImage: `url(${asset.image})` }} />
              <div className="asset-copy">
                <div className="meta">
                  <span>{asset.type}</span>
                  <span>{asset.price}</span>
                </div>
                <h3>{asset.title}</h3>
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
                <div className="subtle">Leave Stripe Checkout and webhooks in API and worker layers</div>
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
