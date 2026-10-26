import Link from "next/link";
import { contact, services } from "@/lib/content";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" className="footer__brand">
              <span className="brand__mark" aria-hidden="true">
                PWK
              </span>
              <span>
                <span className="footer__brand-name">PWK Solutions</span>
                <span className="footer__brand-tag">Limited</span>
              </span>
            </Link>
            <p className="footer__blurb">
              Managed IT, cloud, security and software for organisations that depend on their
              technology to trade.
            </p>
          </div>

          <div>
            <h3>Services</h3>
            <ul className="footer__list">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`}>{service.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/services">All services</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul className="footer__list">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/about#approach">How we work</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Get in touch</h3>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
              </li>
              <li>{contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} PWK Solutions Limited. All rights reserved.</span>
          <span>Registered in England &amp; Wales.</span>
        </div>
      </div>
    </footer>
  );
}
