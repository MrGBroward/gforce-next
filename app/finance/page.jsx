export const metadata = {
  title: "Finance with Klarna | G-Force Exterior Cleaning",
  description:
    "Split your exterior cleaning project into manageable payments with Klarna via Stripe. Fast approvals and clear terms.",
  alternates: {
    canonical: "https://getpressurecleaningbroward.com/finance",
  },
};

const container = { maxWidth: 960, margin: "0 auto", padding: "0 16px" };
const h1 = { fontSize: 32, lineHeight: 1.2, margin: 0 };
const p = { fontSize: 18, lineHeight: 1.7, margin: "12px 0 0", color: "#475569" };
const btn = {
  display: "inline-block",
  background: "#2563eb",
  color: "#fff",
  padding: "12px 18px",
  borderRadius: 8,
  fontWeight: 700,
  textDecoration: "none",
};

export default function FinancePage() {
  return (
    <main>
      {/* HERO */}
      <section style={{ padding: "28px 0" }}>
        <div style={{ ...container, textAlign: "center" }}>
          <h1 style={h1}>Finance Your Project with Klarna</h1>
          <p style={p}>
            Split payments with Klarna via Stripe. You’ll see options like <em>Pay in 4</em> or
            monthly plans during checkout (subject to eligibility).
          </p>

          {/* Single, working CTA — goes straight to your Stripe Checkout */}
          <div style={{ marginTop: 16 }}>
            <a
              href="https://buy.stripe.com/28EbJ2ero0ul0gdc6w5J600"
              target="_blank"
              rel="noopener"
              style={btn}
            >
              Get started with Klarna
            </a>
          </div>

          <p style={{ ...p, marginTop: 12 }}>
            Prefer to pay on this page? Use the secure Stripe button below.
          </p>
        </div>
      </section>

      {/* EMBEDDED STRIPE BUY BUTTON */}
      <section id="checkout" style={{ padding: "8px 0 40px" }}>
        <div style={{ ...container, display: "flex", justifyContent: "center" }}>
          <script async src="https://js.stripe.com/v3/buy-button.js"></script>
          <stripe-buy-button
            buy-button-id="buy_btn_1RzGR5Lp6vu4avRk8vL51iVp"
            publishable-key="pk_live_51RvHeBLp6vu4avRkWpQl0vOMhJZFqlhfl9VuSM0MTaoIvGvyXqbniYho2FH25RB7ycqJIXxxbVG3TfgJarbVO9Px00YLHy77wc"
          >
          </stripe-buy-button>
        </div>
      </section>
    </main>
  );
}


 
