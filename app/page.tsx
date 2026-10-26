import Link from "next/link";
import { reasons, services, stats, steps } from "@/lib/content";

const panelRows = [
  { label: "Helpdesk & device support", meta: "Named engineer · 15-minute first response" },
  { label: "Cloud & server infrastructure", meta: "Azure, AWS and private estate" },
  { label: "Security baseline & hardening", meta: "Microsoft 365, endpoints and backups" },
  { label: "Line-of-business applications", meta: "Custom builds and integrations" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <span className="eyebrow">IT solutions & support</span>
              <h1>
                Technology that keeps your business <strong>moving</strong>.
              </h1>
              <p className="lead">
                PWK Solutions Limited designs, secures and supports the systems behind growing
                organisations — managed IT, cloud infrastructure, cybersecurity and custom
                software, delivered by engineers you actually speak to.
              </p>
              <div className="hero__actions">
                <Link href="/contact" className="btn btn--primary">
                  Book a technology review
                </Link>
                <Link href="/services" className="btn btn--ghost">
                  Explore our services
                </Link>
              </div>
              <p className="hero__note">
                Reply within one working hour · No long-term lock-in on support plans
              </p>
            </div>

            <div className="panel">
              <div className="panel__head">
                <span className="panel__title">Where we help most</span>
                <span className="panel__badge">Monitored 24/7</span>
              </div>
              <ul className="panel__list">
                {panelRows.map((row, index) => (
                  <li className="panel__row" key={row.label}>
                    <span className="panel__idx" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span>
                      <span className="panel__label">{row.label}</span>
                      <span className="panel__meta">{row.meta}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="panel__foot">
                Escalation cover for critical systems, every day of the year.
              </div>
            </div>
          </div>

          <dl className="stats">
            {stats.map((stat) => (
              <div className="stats__item" key={stat.label}>
                <dd className="stats__value">{stat.value}</dd>
                <dt className="stats__label">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What we do</span>
            <h2>One team for the systems your business runs on.</h2>
            <p>
              Most of our clients come to us with a mix of inherited systems, a supplier they
              cannot reach and a plan to grow. We take ownership of the whole estate, or the part
              of it that is keeping you awake.
            </p>
          </div>

          <div className="grid grid--3">
            {services.slice(0, 3).map((service, index) => (
              <article className="card" key={service.slug}>
                <span className="card__num">0{index + 1}</span>
                <h3 className="card__title">{service.title}</h3>
                <p className="card__body">{service.summary}</p>
                <Link href={`/services#${service.slug}`} className="card__link">
                  Read more →
                </Link>
              </article>
            ))}
          </div>

          <div className="hero__actions">
            <Link href="/services" className="btn btn--ghost">
              See all six services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Why PWK</span>
            <h2>Supported, not just serviced.</h2>
          </div>

          <div className="grid grid--3">
            {reasons.map((reason, index) => (
              <article className="card" key={reason.title}>
                <span className="card__num">0{index + 1}</span>
                <h3 className="card__title">{reason.title}</h3>
                <p className="card__body">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">How we work</span>
            <h2>A predictable route from audit to support.</h2>
            <p>
              Every engagement follows the same four stages, so you always know what happens next
              and what it costs.
            </p>
          </div>

          <div className="steps">
            {steps.map((step, index) => (
              <div className="step" key={step.title}>
                <span className="step__num">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div className="cta__copy">
              <h2>Start with a 30-minute technology review.</h2>
              <p>
                Tell us what is slowing your team down. We will come back with a short written
                assessment and the three things we would fix first — no obligation.
              </p>
            </div>
            <Link href="/contact" className="btn btn--light">
              Arrange a review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
