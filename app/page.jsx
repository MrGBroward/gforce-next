"use client";
const FINANCE_URL = "https://www.getpressurecleaningbroward.com/finance";

const colors = {
  bg: "#0f172a",
  panel: "#f8fafc",
  border: "#e5e7eb",
  ink: "#0f172a"
};

const container = { maxWidth: 1200, margin: "0 auto", padding: "0 18px" };
const h1 = { fontSize: "2.5rem", lineHeight: 1.2, margin: "0 0 12px", color: "#fff" };
const h2 = { fontSize: "1.6rem", margin: "0 0 8px" };
const p  = { margin: "0 0 12px", color: "#334155", fontSize: 18 };
const btnSolid = { display: "inline-block", background: colors.ink, color: "#fff", padding: "12px 18px", borderRadius: 8, textDecoration: "none", border: `1px solid ${colors.ink}` };
const btnOutline = { display: "inline-block", background: "#fff", color: colors.ink, padding: "12px 18px", borderRadius: 8, textDecoration: "none", border: `1px solid ${colors.border}` };

export const dynamic = "force-dynamic"; // avoid prerender timeout

function Header() {
  <a href={FINANCE_URL} style={{ ...btnOutline, padding: "8px 14px" }}>
  Finance with Klarna
</a>
  return (
    <header style={{ background: "#fff", borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ ...container, display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 80, gap: 16 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none", color: colors.ink }}>
          <img src="/images/logo.png" alt="G-Force" style={{ height: 96, width: "auto", display: "block" }} onError={(e)=>{e.currentTarget.style.display="none"}} />
          <span style={{ fontWeight: 800, fontSize: "1.35rem" }}>G-Force Exterior Cleaning</span>
          <img src="/images/veteran-owned.png" alt="Veteran Owned" style={{ height: 72, width: "auto", display: "block" }} onError={(e)=>{e.currentTarget.style.display="none"}} />
        </a>
        <nav style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <a href="#services" style={{ color: colors.ink, textDecoration: "none" }}>Services</a>
          <a href="/finance" style={{ ...btnOutline, padding: "8px 14px" }}>Finance with Klarna</a>
          <a href="#gallery" style={{ color: colors.ink, textDecoration: "none" }}>Gallery</a>
          <a href="#contact" style={{ color: colors.ink, textDecoration: "none" }}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  <a href={FINANCE_URL} style={btnOutline}>
  Finance with Klarna
</a>
  return (
    <section style={{ background: colors.bg, color: "#fff", padding: "64px 0" }}>
      <div style={{ ...container, maxWidth: 1200 }}>
        <h1 style={h1}>Pressure Cleaning in Broward County</h1>
        <p style={{ ...p, color: "#dbeafe", marginBottom: 8 }}>
          <strong>Veteran-Owned &amp; Insured.</strong> G-Force Exterior Cleaning Services helps South Florida
          properties look their best while protecting roofs, paint, and landscaping.
        </p>
        <p style={{ ...p, color: "#cbd5e1", marginBottom: 0 }}>
          We schedule around your needs—early mornings, weekends, or off-peak hours—and we offer financing and flexible
          pricing, especially for long-term and multi-site contracts. Expect clear communication, photo documentation, and results you can see.
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" style={btnSolid}>Get a Free Quote</a>
          <a href="/finance" style={btnOutline}>Finance with Klarna</a>
          <a href="#gallery" style={btnOutline}>See Before &amp; After</a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={{ padding: "32px 0", background: "#fff" }}>
      <div style={container}>
        <h2 style={h2}>Services</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li><a href="/services/soft-wash-roof-cleaning.html">Soft-wash roof cleaning</a></li>
          <li><a href="/services/house-and-building-wash.html">House &amp; building wash</a></li>
          <li><a href="/services/pressure-cleaning-driveways-sidewalks-pavers.html">Pressure Cleaning – Driveways, sidewalks &amp; pavers (sealing optional)</a></li>
          <li><a href="/services/hoa-and-commercial-schedules.html">HOA &amp; commercial schedules</a></li>
          <li><a href="/services/heavy-equipment-and-dumpster-pads.html">Heavy equipment &amp; dumpster pads</a></li>
        </ul>
      </div>
    </section>
  );
}

function Gallery() {
  const imgStyle = { width: "100%", borderRadius: 12, border: `1px solid ${colors.border}` };
  const grid = { display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" };
  return (
    <section id="gallery" style={{ padding: "32px 0", background: colors.panel }}>
      <div style={container}>
        <h2 style={h2}>Before &amp; After</h2>
        <div style={grid}>
          <img src="/images/condo-dirty.jpg" alt="Condo exterior cleaning – before" style={imgStyle} />
          <img src="/images/before-and-after-house-2.jpg" alt="House cleaning – before & after" style={imgStyle} />
          <img src="/images/before-and-after-bulldozer-2.jpg" alt="Heavy equipment cleaning – before & after" style={imgStyle} />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const field = { display: "grid", gap: 6, marginBottom: 12 };
  const label = { fontSize: 14, color: "var(--sub)" };
  const input = { padding: "10px 12px", border: "1px solid var(--border)", borderRadius: 8, width: "100%", background: "#fff" };

  return (
    <form action="https://formspree.io/f/your-id" method="POST" style={{ maxWidth: 560 }}>
      <div style={field}>
        <label htmlFor="name" style={label}>Name</label>
        <input id="name" name="name" type="text" required style={input} />
      </div>
      <div style={field}>
        <label htmlFor="email" style={label}>Email</label>
        <input id="email" name="email" type="email" required style={input} />
      </div>
      <div style={field}>
        <label htmlFor="service" style={label}>What do you want cleaned?</label>
        <textarea id="service" name="service" rows="4" style={{ ...input, resize: "vertical" }} />
      </div>
      <button type="submit" style={{ background: colors.ink, color: "#fff", padding: "12px 18px", border: 0, borderRadius: 8, cursor: "pointer" }}>
        Send
      </button>
    </form>
  );
}

function Footer() {
  const link = { color: "#fff", textDecoration: "underline", margin: "0 10px" };
  return (
    <footer style={{ background: "#222", color: "#fff", padding: "2rem 1rem", textAlign: "center" }}>
      <p style={{ margin: "0 0 10px" }}>© {new Date().getFullYear()} G-Force Exterior Cleaning Services</p>
      <p style={{ margin: "0 0 16px" }}>
        <a href="/privacy-policy.html" style={link}>Privacy Policy</a>
        <a href="/finance" style={link}>Finance with Klarna</a>
        <a href="/blog.html" style={link}>Blog</a>
      </p>
    </footer>
  );
}

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <section id="contact" style={{ padding: "32px 0", background: "#fff" }}>
        <div style={container}>
          <h2 style={h2}>Request a Free Quote</h2>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}
