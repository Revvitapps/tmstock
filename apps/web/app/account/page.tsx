export default function AccountPage() {
  return (
    <div className="route-shell">
      <div className="shell">
        <section className="section">
          <div className="panel">
            <p className="kicker">Buyer account</p>
            <h1 className="section-title">Downloads, receipts, and license history.</h1>
            <p className="subtle">
              This route should remain fully dynamic and session-aware. Keep receipt issuance and
              signed download generation behind authenticated API calls.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
