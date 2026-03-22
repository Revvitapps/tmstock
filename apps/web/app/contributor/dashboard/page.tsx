export default function ContributorDashboardPage() {
  return (
    <div className="route-shell">
      <div className="shell">
        <section className="section grid">
          <div className="panel">
            <p className="kicker">Uploads</p>
            <div className="metric">12</div>
            <p className="subtle">Drafts waiting for derivative generation or review.</p>
          </div>
          <div className="panel">
            <p className="kicker">Review queue</p>
            <div className="metric">4</div>
            <p className="subtle">Assets pending moderation decisions and release validation.</p>
          </div>
          <div className="panel">
            <p className="kicker">Earnings</p>
            <div className="metric">$2.4k</div>
            <p className="subtle">Display-only placeholder until payout ledger and webhooks exist.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
