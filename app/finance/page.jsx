export const dynamic = "force-dynamic";
import BuyButton from "./BuyButton";

const styles = {
  wrap: { fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif", maxWidth: 900, margin: "0 auto", padding: 24, color: "#0f172a", lineHeight: 1.6 },
  h1: { textAlign: "center", marginBottom: 12 },
  pCenter: { textAlign: "center", color: "#334155" },
  h2: { marginTop: 24, marginBottom: 8 },
  list: { paddingLeft: 20 },
  divider: { margin: "24px 0", borderTop: "1px solid #e5e7eb" },
  ctaBox: { textAlign: "center", marginTop: 16 },
  cta: { background: "#0074de", color: "#fff", padding: "12px 28px", borderRadius: 6, textDecoration: "none", fontWeight: 700, display: "inline-block" },
  fallback: { textAlign: "center", marginTop: 12 }
};

export default function FinancePage() {
  return (
    <main style={styles.wrap}>
      <h1 style={styles.h1}>Finance Your Project</h1>
      <p style={styles.pCenter}>
        Pay with Klarna, Afterpay, or card through Stripe’s secure checkout. Split your investment into easy payments.
      </p>

      <section>
        <h2 style={styles.h2}>How Klarna “Pay in 4” Works</h2>
        <ul style={styles.list}>
          <li>Checkout in seconds—no hard credit pull for Pay in 4.</li>
          <li>Pay 25% today, then 3 automatic payments every two weeks.</li>
          <li>Options and limits vary by eligibility.</li>
        </ul>

        <div style={styles.ctaBox}>
          {/* Scrolls down to the embedded Buy Button on this page */}
          <a href="#checkout" style={styles.cta}>Get Started with Klarna</a>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* Embedded Buy Button target */}
      <div id="checkout" style={{ scrollMarginTop: 80 }}>
        <BuyButton />
      </div>

      {/* Fallback direct link */}
      <div style={styles.fallback}>
        <a
          href="https://buy.stripe.com/28EbJ2ero0ul0gdc6w5J600"
          target="_blank"
          rel="noopener"
          style={{ textDecoration: "underline" }}
        >
          Having trouble? Open secure checkout
        </a>
      </div>
    </main>
  );
}


