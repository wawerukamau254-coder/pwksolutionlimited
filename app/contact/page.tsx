import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to PWK Solutions Limited about managed IT support, cloud infrastructure, security or a software project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Tell us what needs fixing.</h1>
          <p>
            Send us a short note and one of the engineers will reply within one working day. If it
            is urgent, call the number below and ask for the service desk.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(36px, 5vw, 60px)" }}>
        <div className="container">
          <div className="contact-grid">
            <div className="form-card">
              <ContactForm />
            </div>

            <aside className="contact-aside">
              <div className="info-card">
                <h3>Direct contact</h3>
                <dl className="info-list">
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Telephone</dt>
                    <dd>
                      <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Office</dt>
                    <dd>{contact.location}</dd>
                  </div>
                  <div>
                    <dt>Support hours</dt>
                    <dd>{contact.hours}</dd>
                  </div>
                </dl>
              </div>

              <div className="info-card">
                <h3>What happens next</h3>
                <ul className="checks" style={{ marginTop: 14 }}>
                  <li>An engineer reads your message, not a sales queue.</li>
                  <li>We reply within one working day with questions or a call slot.</li>
                  <li>No obligation until a scope and price are agreed in writing.</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
