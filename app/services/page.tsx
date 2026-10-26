import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Managed IT support, cloud and infrastructure, cybersecurity, software development, data and IT strategy from PWK Solutions Limited.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Practical technology services, delivered by engineers.</h1>
          <p>
            Whether you need a full IT department or help with one difficult project, the work is
            scoped in writing, delivered in visible milestones and supported afterwards.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(36px, 5vw, 60px)" }}>
        <div className="container">
          {services.map((service, index) => (
            <article className="service" id={service.slug} key={service.slug}>
              <div>
                <p className="service__meta">Service 0{index + 1}</p>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
              </div>
              <div>
                <p>{service.detail}</p>
                <ul className="checks" style={{ marginTop: 16 }}>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <div className="cta" style={{ marginTop: 48 }}>
            <div className="cta__copy">
              <h2>Not sure which of these you need?</h2>
              <p>
                Most engagements start with a short conversation about what is not working. We
                will tell you honestly if the answer is something simpler than a project.
              </p>
            </div>
            <Link href="/contact" className="btn btn--light">
              Talk to an engineer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
