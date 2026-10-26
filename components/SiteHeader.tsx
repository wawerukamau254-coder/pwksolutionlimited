"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="PWK Solutions Limited — home">
          <span className="brand__mark" aria-hidden="true">
            PWK
          </span>
          <span>
            <span className="brand__name">PWK Solutions</span>
            <span className="brand__tag">Limited</span>
          </span>
        </Link>

        <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav__link${isActive(link.href) ? " nav__link--active" : ""}`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn--primary nav__cta">
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <span className={open ? "is-open" : ""} />
        </button>
      </div>
    </header>
  );
}
