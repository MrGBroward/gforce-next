export const metadata = {
  title: "Privacy Policy | GetPressureCleaningBroward.com",
  description:
    "Learn how G-Force Exterior Cleaning Services collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="prose mx-auto max-w-3xl px-6 py-12">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> {/* update date */} </p>
      <p><strong>Website:</strong> https://getpressurecleaningbroward.com</p>
      <p><strong>Company:</strong> G-Force Exterior Cleaning Services, Inc.</p>

      <h2>1) Information We Collect</h2>
      <ul>
        <li><strong>You provide:</strong> name, email, phone, company/property details, message content.</li>
        <li>
          <strong>Automatic data:</strong> IP address, device/browser info, pages viewed, timestamps, referrers
          (via hosting logs and analytics such as Vercel Analytics or Google Analytics).
        </li>
        <li>
          <strong>Payments (optional):</strong> processed by third parties (e.g., Stripe); we don’t store full card numbers.
        </li>
      </ul>

      <h2>2) How We Use Information</h2>
      <ul>
        <li>Respond to quotes/inquiries; provide services.</li>
        <li>Improve performance, reliability, and security.</li>
        <li>Send updates or promotions (opt out anytime).</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>3) Sharing</h2>
      <p>We don’t sell your data. We share with service providers (hosting, analytics, email, payments) and as required by law.</p>

      <h2>4) Cookies & Tracking</h2>
      <p>We may use cookies/local storage for preferences, analytics, and reliability. You can control cookies in your browser.</p>

      <h2>5) Data Security & Retention</h2>
      <p>We use reasonable safeguards and retain data only as needed or required by law.</p>

      <h2>6) International Transfers</h2>
      <p>Providers (including Vercel) may process data in the United States and other countries.</p>

      <h2>7) Your Choices</h2>
      <ul>
        <li>Unsubscribe from marketing emails.</li>
        <li>Request access, correction, or deletion of your data.</li>
      </ul>

      <h2>8) Third-Party Links</h2>
      <p>We’re not responsible for third-party sites.</p>

      <h2>9) Children</h2>
      <p>Not directed to children under 13.</p>

      <h2>10) Contact Us</h2>
      <address>
        G-Force Exterior Cleaning Services, Inc.<br/>
        2139 N University Dr, Coral Springs, FL 33071<br/>
        <a href="mailto:bruce@gforcepressurewashing.com">bruce@gforcepressurewashing.com</a> •{" "}
        <a href="tel:+17543340220">(754) 334-0220</a>
      </address>

      <h2>11) Updates</h2>
      <p>We may update this policy; the Effective Date indicates the latest version.</p>
    </main>
  );
}
