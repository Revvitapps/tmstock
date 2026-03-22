export default function LicensingPage() {
  return (
    <section className="section split">
      <div className="panel">
        <p className="kicker">License strategy</p>
        <h1 className="section-title">Public terms should be static. Entitlements should not.</h1>
        <p className="subtle">
          Keep the legal explanation crawlable and stable, but fetch buyer-specific download rights
          from dynamic endpoints so cached public pages never leak account state.
        </p>
      </div>
      <div className="panel">
        <div className="list">
          <div className="list-item">
            <strong>Canonical public terms</strong>
            <span className="pill">ISR</span>
          </div>
          <div className="list-item">
            <strong>Per-license receipts</strong>
            <span className="pill">Dynamic</span>
          </div>
          <div className="list-item">
            <strong>Signed original downloads</strong>
            <span className="pill">Short TTL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
