import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 200, company: 160, service: 120, message: 4000 };

function text(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = text(payload.name, LIMITS.name);
  const email = text(payload.email, LIMITS.email);
  const company = text(payload.company, LIMITS.company);
  const service = text(payload.service, LIMITS.service);
  const message = text(payload.message, LIMITS.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please add your name, email address and a short message." },
      { status: 422 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "That email address does not look right." }, { status: 422 });
  }

  try {
    await pool.query(
      `INSERT INTO contact_messages (name, email, company, service, message)
       VALUES ($1, $2, $3, $4, $5)`,
      [name, email, company || null, service || null, message],
    );
  } catch (error) {
    console.error("Failed to store contact message", error);
    return NextResponse.json(
      { error: "We could not send that just now. Please email us directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
