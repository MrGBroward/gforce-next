"use client";
import Script from "next/script";

export default function BuyButton() {
  // Use env var if set; otherwise fallback to your live publishable key (publishable is safe)
  const pk =
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "pk_live_51RvHeBLp6vu4avRkWpQl0vOMhJZFqlhfl9VuSM0MTaoIvGvyXqbniYho2FH25RB7ycqJIXxxbVG3TfgJarbVO9Px00YLHy77wc";

  return (
    <>
      <Script async src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />
      <stripe-buy-button
        buy-button-id="buy_btn_1RzGR5Lp6vu4avRk8vL51iVp"
        publishable-key={pk}
      ></stripe-buy-button>
    </>
  );
}
