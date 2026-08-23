"use client";

import Link from "next/link";
import "./styles.css";

/* =========================================================
   Shubham Saha — Portfolio Services Page
   Single JSX file. All markup lives here; all styling lives
   in styles.css (shared with Home, About, Skills, Projects).
   No inline styles, no styled-jsx.
   ========================================================= */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services", active: true },
  { label: "Contact", href: "/contact" },
];

/* Service items kept as data, separate from presentation,
   so more can be added later without touching markup. */
const SERVICE_ITEMS = [
  {
    number: "01",
    name: "Responsive Interfaces",
    description:
      "Creating layouts that adapt naturally across desktop, tablet, and mobile screen sizes.",
  },
  {
    number: "02",
    name: "Interactive Experiences",
    description:
      "Adding client-side interactions and dynamic behavior to make interfaces feel responsive and intuitive.",
  },
  {
    number: "03",
    name: "Clean Web Structure",
    description:
      "Building well-organized frontend markup and styling with attention to readability and maintainability.",
  },
  {
    number: "04",
    name: "Browser Functionality",
    description:
      "Working with browser-side features such as local storage and other frontend functionality when required.",
  },
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

function SectionLabel({ children }) {
  return <p className="section__label">{children}</p>;
}

function ServicesIntro() {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="page-intro__label">Services</p>
        <h1 className="page-intro__heading">What I can help build.</h1>
        <p className="page-intro__copy">
          I currently focus on frontend development, creating clean,
          responsive, and interactive web experiences with a strong emphasis
          on structure, usability, and visual clarity.
        </p>
      </div>
    </section>
  );
}

function MainService() {
  return (
    <section className="section">
      <div className="container section__grid">
        <SectionLabel>01</SectionLabel>
        <div>
          <h2 className="section__heading">Frontend Development</h2>
          <div className="section__body">
            <p>
              Building responsive and interactive web interfaces that are
              structured clearly, work across screen sizes, and provide a
              smooth user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ number, name, description }) {
  return (
    <article className="skill-row">
      <span className="skill-row__number">{number}</span>
      <div className="skill-row__main">
        <h3 className="skill-row__name">{name}</h3>
        <p className="skill-row__description">{description}</p>
      </div>
    </article>
  );
}

function WhatThatIncludes() {
  return (
    <section className="section">
      <div className="container">
        <SectionLabel>What That Includes</SectionLabel>
        <div className="skill-list">
          {SERVICE_ITEMS.map((item) => (
            <ServiceRow key={item.number} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowIWork() {
  return (
    <section className="section">
      <div className="container section__grid">
        <SectionLabel>How I Work</SectionLabel>
        <div>
          <h2 className="current-direction__heading">Learn. Build. Improve.</h2>
          <div className="section__body">
            <p>
              I approach development by learning through practical projects,
              building a working solution, reviewing what can be improved,
              and using each project to strengthen my understanding of
              frontend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CurrentFocus() {
  return (
    <section className="section section--quiet">
      <div className="container section__grid">
        <SectionLabel>Current Focus</SectionLabel>
        <div className="section__body">
          <p>
            My current service offering is centered around frontend
            development. I&apos;m continuously improving my skills while
            building practical projects and looking for opportunities to
            apply what I learn to real-world work.
          </p>
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

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesIntro />
        <MainService />
        <WhatThatIncludes />
        <HowIWork />
        <CurrentFocus />
      </main>
      <Footer />
    </>
  );
}
