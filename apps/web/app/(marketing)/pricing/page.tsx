export default function PricingPage() {
  return (
    <section className="section">
      <h1 className="section-title">Pricing</h1>
      <div className="grid">
        <div className="panel">
          <p className="kicker">Single license</p>
          <div className="metric">$24</div>
          <p className="subtle">Per-asset checkout flow for editorial and commercial use cases.</p>
        </div>
        <div className="panel">
          <p className="kicker">Credit packs</p>
          <div className="metric">$149</div>
          <p className="subtle">Requires durable entitlement modeling, pack decrement rules, and refunds handling.</p>
        </div>
        <div className="panel">
          <p className="kicker">Subscription</p>
          <div className="metric">$299</div>
          <p className="subtle">Needs renewal webhooks, access revocation, and download receipt history.</p>
        </div>
      </div>
    </section>
  );
}
