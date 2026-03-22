import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCatalogAsset } from "@/lib/catalog";

type AssetPageProps = {
  params: Promise<{
    assetId: string;
  }>;
};

export async function generateMetadata({ params }: AssetPageProps): Promise<Metadata> {
  const { assetId } = await params;
  const asset = getCatalogAsset(assetId);

  if (!asset) {
    return {
      title: "Asset not found"
    };
  }

  return {
    title: asset.title,
    description: asset.description,
    openGraph: {
      title: asset.title,
      description: asset.description,
      images: [asset.image]
    }
  };
}

export default async function AssetPage({ params }: AssetPageProps) {
  const { assetId } = await params;
  const asset = getCatalogAsset(assetId);

  if (!asset) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: asset.title,
    description: asset.description,
    contentUrl: asset.image
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
                backgroundImage: `url(${asset.image})`
              }}
            />
          </div>
          <div className="panel">
            <p className="kicker">Canonical asset detail</p>
            <h1 className="section-title">{asset.title}</h1>
            <p className="subtle">
              {asset.description}
            </p>
            <div className="list">
              <div className="list-item">
                <strong>Category</strong>
                <span className="pill">{asset.category}</span>
              </div>
              <div className="list-item">
                <strong>License</strong>
                <span className="pill">{asset.license}</span>
              </div>
              <div className="list-item">
                <strong>Price</strong>
                <span className="pill">{asset.price}</span>
              </div>
              <div className="list-item">
                <strong>Availability</strong>
                <span className="pill">For sale</span>
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
