import type { Metadata } from "next";

type AssetPageProps = {
  params: Promise<{
    assetId: string;
  }>;
};

export async function generateMetadata({ params }: AssetPageProps): Promise<Metadata> {
  const { assetId } = await params;

  return {
    title: `Asset ${assetId}`,
    description: `Canonical asset detail page for ${assetId}, ready for JSON-LD and purchase UI.`,
    openGraph: {
      title: `TMStock asset ${assetId}`,
      description: `Canonical asset detail page for ${assetId}, ready for JSON-LD and purchase UI.`
    }
  };
}

export default async function AssetPage({ params }: AssetPageProps) {
  const { assetId } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: `TMStock asset ${assetId}`,
    description: "Marketplace asset page scaffold with structured data support."
  };

  return (
    <div className="route-shell">
      <div className="shell">
        <section className="section split">
          <div className="card asset-card">
            <div
              className="asset-media"
              style={{
                aspectRatio: "16 / 10",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80)"
              }}
            />
          </div>
          <div className="panel">
            <p className="kicker">Canonical asset detail</p>
            <h1 className="section-title">Asset {assetId}</h1>
            <p className="subtle">
              Use ISR for the public page shell, then fetch purchase availability, pack balance, and
              download entitlement dynamically so personalized data is never cached into the public
              response.
            </p>
            <div className="list">
              <div className="list-item">
                <strong>Metadata</strong>
                <span className="pill">generateMetadata</span>
              </div>
              <div className="list-item">
                <strong>Structured data</strong>
                <span className="pill">JSON-LD</span>
              </div>
              <div className="list-item">
                <strong>Entitlement widget</strong>
                <span className="pill">Dynamic</span>
              </div>
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </div>
  );
}
