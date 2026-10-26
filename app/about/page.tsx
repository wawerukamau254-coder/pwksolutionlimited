import type { Metadata } from "next";
import Link from "next/link";
import { stats, steps, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
  description:
    "PWK Solutions Limited is an engineer-led technology partner for growing organisations, covering managed IT, cloud, security and software.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">About PWK Solutions</span>
          <h1>An engineer-led partner, not a reseller with a helpdesk.</h1>
          <p>
            PWK Solutions Limited was founded to give growing organisations the kind of technology
            ownership that used to be the preserve of large enterprises: documented systems,
            measured service and someone accountable when things go wrong.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <div>
              <h2 style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.7rem)" }}>
                Built around the work, not the vendor list.
              </h2>
              <p style={{ marginTop: 14 }}>
                Our team is made up of infrastructure engineers, security specialists and software
                developers who work on the same estates they support. That means the advice you
                get comes from people who have operated the systems, not from a product catalogue.
              </p>
              <p style={{ marginTop: 12 }}>
                We deliberately keep the client list small enough that every organisation has a
                named technical lead who knows the environment and the people in it.
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.7rem)" }}>
                Accountable, and easy to leave.
              </h2>
              <p style={{ marginTop: 14 }}>
                Documentation, credentials and runbooks belong to you. If you ever decide to move
                to an internal team or another partner, the handover is a planned piece of work
                rather than a hostage negotiation.
              </p>
              <p style={{ marginTop: 12 }}>
                Support agreements run on rolling terms with clear response targets, because we
                would rather earn the renewal than trap you in it.
              </p>
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

      <section className="section section--surface">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What we stand for</span>
            <h2>Four things we do not compromise on.</h2>
          </div>

          <div className="grid grid--2">
            {values.map((value) => (
              <article className="card" key={value.title}>
                <h3 className="card__title">{value.title}</h3>
                <p className="card__body">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">How we work</span>
            <h2>Audit, plan, deliver, support.</h2>
            <p>
              The same four stages apply whether we are replacing a firewall or building a new
              application, so you always know where a piece of work sits.
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

          <div className="cta" style={{ marginTop: 48 }}>
            <div className="cta__copy">
              <h2>Want to see how we would approach your estate?</h2>
              <p>
                Book a review and we will walk through your current setup, the risks worth
                addressing first and what a realistic improvement plan looks like.
              </p>
            </div>
            <Link href="/contact" className="btn btn--light">
              Book a review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
