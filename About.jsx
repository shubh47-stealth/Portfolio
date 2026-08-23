"use client";

import Link from "next/link";
import "./styles.css";

/* =========================================================
   Shubham Saha — Portfolio About Page
   Single JSX file. All markup lives here; all styling lives
   in styles.css (shared with the Home page). No inline
   styles, no styled-jsx.
   ========================================================= */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", active: true },
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

function SectionLabel({ children }) {
  return <p className="section__label">{children}</p>;
}

function AboutIntro() {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="page-intro__label">About Me</p>
        <h1 className="page-intro__heading">A little about who I am.</h1>
        <p className="page-intro__copy">
          I&apos;m Shubham Saha, a 2nd-year B.E. Computer Science and
          Engineering student at BMS College of Engineering. I enjoy learning
          by building things and continuously improving my understanding of
          software development.
        </p>
      </div>
    </section>
  );
}

function WhoIAm() {
  return (
    <section className="section">
      <div className="container section__grid">
        <h2 className="section__heading">Who I Am</h2>
        <div className="section__body">
          <p>
            I&apos;m currently pursuing a B.E. in Computer Science and
            Engineering at BMS College of Engineering. As a student
            developer, I enjoy turning ideas into working applications and
            learning through hands-on development. I&apos;ve worked on small
            solo projects that have helped me strengthen my understanding of
            web development and programming.
          </p>
          <p>
            At this stage of my journey, I&apos;m focused on building a
            strong technical foundation, improving the way I approach
            problems, and gaining experience through practical work.
          </p>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section">
      <div className="container section__grid">
        <SectionLabel>Education</SectionLabel>
        <div>
          <h2 className="education__title">
            B.E. Computer Science and Engineering
          </h2>
          <p className="education__institution">
            BMS College of Engineering (BMSCE)
          </p>
          <p className="education__status">Currently in 2nd Year</p>
        </div>
      </div>
    </section>
  );
}

function CurrentDirection() {
  return (
    <section className="section">
      <div className="container section__grid">
        <SectionLabel>Current Direction</SectionLabel>
        <div>
          <h2 className="current-direction__heading">Learning by building.</h2>
          <div className="section__body">
            <p>
              I&apos;m currently developing my skills through hands-on
              projects and practical experimentation. Building small
              applications helps me understand how ideas translate into real
              working software and gives me a better foundation for taking on
              larger challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const INTERESTS = ["Watching movies", "Playing games"];

function OutsideOfDevelopment() {
  return (
    <section className="section section--quiet">
      <div className="container section__grid">
        <SectionLabel>Outside of Development</SectionLabel>
        <div>
          <h2 className="section__heading">A few things I enjoy.</h2>
          <ul className="interests__list">
            {INTERESTS.map((interest) => (
              <li key={interest} className="interests__item">
                {interest}
              </li>
            ))}
          </ul>
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

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutIntro />
        <WhoIAm />
        <Education />
        <CurrentDirection />
        <OutsideOfDevelopment />
      </main>
      <Footer />
    </>
  );
}
