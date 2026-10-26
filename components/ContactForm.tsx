"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { services } from "@/lib/content";

type Status =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form));

    setStatus({ type: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.error ?? "Something went wrong sending that. Please try again.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          "Thank you — your message is with us. One of the team will reply within one working day.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "We could not reach the server. Please email us directly instead.",
      });
    }
  }

  const sending = status.type === "sending";

  return (
    <form className="form" onSubmit={handleSubmit} noValidate={false}>
      {status.type === "success" && (
        <p className="alert alert--success" role="status">
          {status.message}
        </p>
      )}
      {status.type === "error" && (
        <p className="alert alert--error" role="alert">
          {status.message}
        </p>
      )}

      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="company">Organisation</label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="service">What do you need help with?</label>
          <select id="service" name="service" defaultValue="">
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="A sentence or two about your setup and what is not working."
        />
        <span className="field__hint">We never share your details. No marketing lists.</span>
      </div>

      <button type="submit" className="btn btn--primary btn--block" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
