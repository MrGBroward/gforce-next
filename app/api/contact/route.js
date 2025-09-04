import { NextResponse } from "next/server";

export async function POST(req) {
  // Parse standard HTML form posts (works for urlencoded & multipart)
  let form;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form payload" }, { status: 400 });
  }

  const name = form.get("name")?.toString().trim();
  const email = form.get("email")?.toString().trim();
  const message = form.get("message")?.toString().trim();
  const website = form.get("website")?.toString().trim(); // honeypot

  // Honeypot: if bots fill this, pretend success
  if (website) {
    return NextResponse.redirect(new URL("/thanks.html", req.url), { status: 303 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // ---- OPTIONAL: send email via Resend (uncomment & configure) ----
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // try {
  //   await resend.emails.send({
  //     from: process.env.FROM_EMAIL, // e.g. "G-Force <hello@gforceclean.com>"
  //     to: process.env.TO_EMAIL,     // where you receive leads
  //     subject: `New Contact — ${name}`,
  //     html: `
  //       <h2>New Lead from G-Force Website</h2>
  //       <p><strong>Name:</strong> ${name}</p>
  //       <p><strong>Email:</strong> ${email}</p>
  //       <p><strong>Message:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
  //     `,
  //   });
  // } catch (err) {
  //   console.error("Email send failed:", err);
  //   // Still redirect to thanks page so users get a good UX
  // }

  // Success → redirect to thank-you page
  return NextResponse.redirect(new URL("/thanks.html", req.url), { status: 303 });
}

  
