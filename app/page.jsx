{/* ===== FOOTER (with contact form) ===== */}
<footer style={{ background: "#0f172a", color: "#fff", padding: "36px 0" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
    {/* Contact heading + phone */}
    <h2 style={{ fontSize: 28, lineHeight: 1.25, margin: "0 0 8px", textAlign: "center" }}>
      Contact G-Force
    </h2>
    <p style={{ textAlign: "center", margin: "0 0 8px" }}>
      <a
        href="tel:+17547527570"
        aria-label="Call G-Force at (754) 752-7570"
        style={{
          fontSize: 22,
          color: "#fff",
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        📞 (754) 752-7570
      </a>
    </p>
    <p style={{ textAlign: "center", margin: "0 0 24px", color: "#cbd5e1" }}>
      Tell us what you’d like cleaned and we’ll confirm pricing &amp; scheduling.
    </p>

    {/* Contact form */}
    <form
      name="contact"
      method="POST"
      action="/api/contact"
      style={{
        display: "grid",
        gap: 12,
        maxWidth: 520,
        margin: "0 auto 28px",
        background: "#0b1324",
        padding: 20,
        borderRadius: 12,
        border: "1px solid #1f2a44",
      }}
    >
      {/* Honeypot field for bots */}
      <input
        type="text"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px" }}
      />

      <label style={{ display: "grid", gap: 6, fontSize: 14, color: "#e2e8f0" }}>
        Name
        <input
          type="text"
          name="name"
          required
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid #334155",
            background: "#ffffff",
            color: "#0f172a",
          }}
        />
      </label>

      <label style={{ display: "grid", gap: 6, fontSize: 14, color: "#e2e8f0" }}>
        Email
        <input
          type="email"
          name="email"
          required
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid #334155",
            background: "#ffffff",
            color: "#0f172a",
          }}
        />
      </label>

      <label style={{ display: "grid", gap: 6, fontSize: 14, color: "#e2e8f0" }}>
        What would you like cleaned?
        <textarea
          name="message"
          rows={5}
          required
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid #334155",
            background: "#ffffff",
            color: "#0f172a",
            resize: "vertical",
          }}
        />
      </label>

      <button
        type="submit"
        style={{
          marginTop: 4,
          background: "#0074de",
          color: "#fff",
          padding: "12px 18px",
          border: "none",
          borderRadius: 10,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Send Message
      </button>
    </form>

    {/* Footer links row */}
    <div style={{ textAlign: "center", fontSize: 14, marginBottom: 10 }}>
      <a href="/privacy-policy.html" style={{ color: "#fff", textDecoration: "underline" }}>
        Privacy Policy
      </a>
      <span style={{ opacity: 0.6 }}> &nbsp;•&nbsp; </span>
      <a href="/terms-and-conditions.html" style={{ color: "#fff", textDecoration: "underline" }}>
        Terms &amp; Conditions
      </a>
      <span style={{ opacity: 0.6 }}> &nbsp;•&nbsp; </span>
      <a href="/gallery.html" style={{ color: "#fff", textDecoration: "underline" }}>
        Gallery
      </a>
      <span style={{ opacity: 0.6 }}> &nbsp;•&nbsp; </span>
      <a href="/finance#checkout" style={{ color: "#fff", textDecoration: "underline" }}>
        Finance with Klarna
      </a>
      <span style={{ opacity: 0.6 }}> &nbsp;•&nbsp; </span>
      <a
        href="https://www.gforceclean.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fff", textDecoration: "underline" }}
      >
        Dumpster Pad Cleaning
      </a>
    </div>

    {/* Copyright */}
    <div style={{ textAlign: "center", opacity: 0.7 }}>
      © {new Date().getFullYear()} G-Force Exterior Cleaning Services — Broward County, FL
    </div>
  </div>
</footer>

{/* ===== FLOATING CALL NOW BUTTON ===== */}
<a
  href="tel:+17547527570"
  aria-label="Call G-Force at (754) 752-7570"
  style={{
    position: "fixed",
    bottom: 20,
    right: 20,
    background: "#0074de",
    color: "#fff",
    padding: "14px 20px",
    borderRadius: 50,
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    zIndex: 1000,
  }}
>
  📞 Call Now
</a>
