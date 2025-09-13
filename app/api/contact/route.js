// app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data = {};

    if (contentType.includes("application/json")) {
      data = await req.json();
    } else {
      const form = await req.formData();
      data = {
        name: form.get("name") || "",
        email: form.get("email") || "",
        message: form.get("message") || "",
        website: form.get("website") || "" // honeypot
      };
    }

    const { name, email, message, website } = data;

    // Spam honeypot
    if (website) {
      return NextResponse.json({ ok: true, spam: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: send email / save to DB / call a webhook
    // For now just redirect to your thanks page
    return NextResponse.redirect(new URL("/thanks.html", req.url), { status: 303 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
