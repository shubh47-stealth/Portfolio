"use client";

import Link from "next/link";
import "./styles.css";

/* =========================================================
   Shubham Saha — Portfolio Skills Page
   Single JSX file. All markup lives here; all styling lives
   in styles.css (shared with Home and About). No inline
   styles, no styled-jsx.
   ========================================================= */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills", active: true },
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

function SkillsIntro() {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="page-intro__label">Skills</p>
        <h1 className="page-intro__heading">What I work with.</h1>
        <p className="page-intro__copy">
          My current technical foundation is centered around frontend
          development, with a focus on building clean, responsive, and
          interactive web experiences.
        </p>
      </div>
    </section>
  );
}

function PrimaryFocus() {
  return (
    <section className="section">
      <div className="container section__grid">
        <SectionLabel>Primary Focus</SectionLabel>
        <div>
          <h2 className="section__heading">Frontend Development</h2>
          <div className="section__body">
            <p>
              Frontend development is currently my main area of focus, where
              I work on creating responsive interfaces, interactive
              experiences, and practical web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const CORE_SKILLS = [
  {
    number: "01",
    name: "JavaScript",
    description:
      "Used to build interactive, dynamic behavior across web applications, from UI logic to working with APIs.",
  },
  {
    number: "02",
    name: "React",
    description:
      "Used to build component-based user interfaces and manage structure and state in single-page applications.",
  },
  {
    number: "03",
    name: "Java",
    description:
      "Used to strengthen programming fundamentals, problem-solving, and understanding of object-oriented programming.",
  },
  {
    number: "04",
    name: "Python",
    description:
      "Used for backend logic, scripting, and working with AI-oriented tools and APIs.",
  },
];

function SkillRow({ number, name, description }) {
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

function CoreTechnologies() {
  return (
    <section className="section">
      <div className="container">
        <SectionLabel>Core Technologies</SectionLabel>
        <div className="skill-list">
          {CORE_SKILLS.map((skill) => (
            <SkillRow key={skill.number} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaOfExpertise() {
  return (
    <section className="section">
      <div className="container section__grid">
        <SectionLabel>Area of Expertise</SectionLabel>
        <div>
          <h2 className="section__heading">Frontend Development</h2>
          <div className="section__body">
            <p>
              My current strength is building web applications with React,
              Redux, and Tailwind CSS, while continuing to strengthen my
              programming fundamentals through Java and Python and improving
              my understanding of how modern web applications are structured
              and built.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function NextStep() {
  return (
    <section className="section section--quiet">
      <div className="container section__grid">
        <SectionLabel>Next Step</SectionLabel>
        <div>
          <h2 className="current-direction__heading">
            Growing toward full stack development.
          </h2>
          <div className="section__body">
            <p>
              I&apos;m gradually expanding beyond frontend development,
              picking up backend and AI-oriented tools like FastAPI and
              Appwrite through hands-on projects, with the goal of becoming
              a capable full stack developer.
            </p>
          </div>
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

export default function Skills() {
  return (
    <>
      <Navbar />
      <main>
        <SkillsIntro />
        <PrimaryFocus />
        <CoreTechnologies />
        <AreaOfExpertise />
        <NextStep />
      </main>
      <Footer />
    </>
  );
}