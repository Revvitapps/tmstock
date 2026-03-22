import Link from "next/link";

export default function ContributorsPage() {
  return (
    <section className="section split">
      <div className="panel">
        <p className="kicker">Contributor portal</p>
        <h1 className="section-title">Upload directly to storage. Review in layers.</h1>
        <p className="subtle">
          The frontend is scaffolded for presigned upload sessions, metadata editing, submission,
          review feedback, and payout visibility. Heavy processing belongs in workers.
        </p>
        <div className="stack">
          <Link href="/contributor/dashboard" className="button primary">
            Open dashboard
          </Link>
        </div>
      </div>
      <div className="panel">
        <div className="list">
          <div className="list-item">
            <div>
              <strong>Onboarding</strong>
              <div className="subtle">Stripe Connect Express account links</div>
            </div>
            <span className="pill">P1</span>
          </div>
          <div className="list-item">
            <div>
              <strong>Uploads</strong>
              <div className="subtle">Presigned and multipart-friendly flow</div>
            </div>
            <span className="pill">P0</span>
          </div>
          <div className="list-item">
            <div>
              <strong>Payouts</strong>
              <div className="subtle">Ledger, statements, and reconciliation still required</div>
            </div>
            <span className="pill">P1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
