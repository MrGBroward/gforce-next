import { NextResponse } from "next/server";
export async function POST(req) {
  const contentType = req.headers.get("content-type") || "";
  let data = {};

  try {
    if (contentType.includes("application/x-www-form-urlencoded")) {
      // Default <form> encoding
      const text = await req.text();
      const params = new URLSearchParams(text);
      data = Object.fromEntries(params);
    } else if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      data = Object.fromEntries(form);
    } else if (contentType.includes("application/json")) {
      data = await req.json();
    }
  } catch (e) {
    return NextResponse.json({ error: "Invalid form payload" }, { status: 400 });
  }

  const { name, email, message, website } = data;

  // Honeypot (if filled, silently succeed)
  if (website) {
    return NextResponse.redirect(new URL("/thanks.html", req.url), { status: 303 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL,  // e.g. "G-Force <hello@gforceclean.com>"
      to: process.env.TO_EMAIL,      // where you receive leads
      subject: `New Contact — ${name}`,
      html: `
        <h2>New Lead from G-Force Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });
  } catch (err) {
    console.error("Email send failed:", err);
    // Still redirect to thanks page so users get a good UX
  }
  */

  // Success → redirect to thank-you page
  return NextResponse.redirect(new URL("/thanks.html", req.url), { status: 303 });
}
