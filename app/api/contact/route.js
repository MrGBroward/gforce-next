import { NextResponse } from "next/server";

export async function POST(req) {
  let form;
  try {
    form = await req.formData(); // handles urlencoded & multipart
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
