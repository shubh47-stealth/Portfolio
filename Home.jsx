"use client";

import Link from "next/link";
import "./styles.css";

/* =========================================================
   Shubham Saha — Portfolio Home Page
   Single JSX file. All markup lives here; all styling lives
   in styles.css. No inline styles, no styled-jsx.
   ========================================================= */

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <span className="wordmark">Shubham Saha</span>

        <nav className="primary-nav" aria-label="Primary">
          <ul className="primary-nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={
                    link.active
                      ? "primary-nav__link is-active"
                      : "primary-nav__link"
                  }
                  aria-current={link.active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className="btn btn--primary btn--compact header-cta">
          Get in Touch
        </Link>

        <button className="header-mobile-toggle" type="button" aria-label="Open menu">
          <span className="header-mobile-toggle__bar"></span>
        </button>
      </div>
    </header>
  );
}

function ProfileImage() {
  return (
    <div className="hero__image-frame">
      {/* Replace this placeholder with an <img> of Shubham's portrait */}
      <div className="hero__image-placeholder">
        <span className="hero__image-placeholder-icon" aria-hidden="true"></span>
        <span className="hero__image-placeholder-text">Portrait placeholder</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__label">Hello, I&apos;m</p>

          <h1 className="hero__heading">
            <span className="hero__heading-lead">I&apos;m Shubham Saha.</span>
            Building digital experiences that feel simple, useful, and human.
          </h1>

          <p className="hero__copy">
            A computer science student who enjoys creating thoughtful digital
            experiences and turning ideas into working products.
          </p>

          <div className="hero__actions">
            <Link href="/projects" className="btn btn--primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn btn--secondary">
              Contact
            </Link>
          </div>
        </div>

        <div className="hero__media">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span className="site-footer__brand">Shubham Saha</span>
        <p className="site-footer__copy">
          © 2026 Shubham Saha. All Rights Reserved.
        </p>
        <div className="site-footer__links">
          <a
            href="https://www.linkedin.com/in/watashi-shubhamsaha"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shubh47-stealth"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
