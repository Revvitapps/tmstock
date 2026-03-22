export default function AdminReviewPage() {
  return (
    <div className="route-shell">
      <div className="shell">
        <section className="section">
          <div className="panel">
            <p className="kicker">Admin moderation</p>
            <h1 className="section-title">Review queue, takedowns, and payout visibility.</h1>
            <div className="list">
              <div className="list-item">
                <div>
                  <strong>Approve or reject asset submissions</strong>
                  <div className="subtle">Write audit events for every state change</div>
                </div>
                <span className="pill">Required</span>
              </div>
              <div className="list-item">
                <div>
                  <strong>Process takedowns and repeat infringement rules</strong>
                  <div className="subtle">Preserve evidence and revalidate public routes immediately</div>
                </div>
                <span className="pill">Required</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
