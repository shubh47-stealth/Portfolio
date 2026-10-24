"use client";

import Link from "next/link";
import "./styles.css";

/* =========================================================
   Shubham Saha — Portfolio Projects Page
   Single JSX file. All markup lives here; all styling lives
   in styles.css (shared with Home, About, Skills). No inline
   styles, no styled-jsx.
   ========================================================= */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects", active: true },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

/* Project data kept separate from presentation so more
   projects can be added later without touching markup. */
const PROJECTS = [
  {
    number: "01",
    title: "ProbeAI",
    description:
      "An adaptive AI technical interviewer that parses a resume, job description, and GitHub codebase to run multi-turn interviews and generate a diagnostic feedback report, using a hybrid retrieval pipeline to ground its questions.",
    technologies: "React · FastAPI · LangGraph · ChromaDB · Hybrid RAG",
    image: null, // replace with a screenshot path when available
    imageAlt: "ProbeAI preview",
    demoUrl: null,
    sourceUrl: "https://github.com/shubh47-stealth/Probe-AI-Interviewer",
    reverse: false,
  },
  {
    number: "02",
    title: "Blog Website",
    description:
      "A full-stack blog platform where users can sign up, log in, and create, edit, and delete posts, with authentication and post storage handled through Appwrite and global state managed with Redux.",
    technologies: "React · Redux · Tailwind CSS · Appwrite",
    image: null,
    imageAlt: "Blog Website preview",
    demoUrl: "https://blog-post-seven-flax.vercel.app/",
    sourceUrl: "https://github.com/shubh47-stealth/BlogPost",
    reverse: true,
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

function ProjectsIntro() {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="page-intro__label">Projects</p>
        <h1 className="page-intro__heading">Things I&apos;ve built.</h1>
        <p className="page-intro__copy">
          A collection of small projects I&apos;ve created while learning,
          experimenting, and strengthening my development skills.
        </p>
      </div>
    </section>
  );
}

function ProjectImage({ image, imageAlt }) {
  return (
    <div className="project-image-frame">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={imageAlt} />
      ) : (
        <div className="project-image-placeholder">
          <span className="project-image-placeholder-icon" aria-hidden="true"></span>
          <span className="project-image-placeholder-text">{imageAlt}</span>
        </div>
      )}
    </div>
  );
}

function ProjectLink({ href, children }) {
  return (
    <a
      className="project-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} <span className="project-link__arrow">→</span>
    </a>
  );
}

function ProjectItem({
  number,
  title,
  description,
  technologies,
  image,
  imageAlt,
  demoUrl,
  sourceUrl,
  reverse,
}) {
  return (
    <article className={reverse ? "project-item project-item--reverse" : "project-item"}>
      <span className="project-item__number">{number}</span>
      <div className="project-item__grid">
        <div className="project-item__media">
          <ProjectImage image={image} imageAlt={imageAlt} />
        </div>
        <div className="project-item__content">
          <h2 className="project-item__title">{title}</h2>
          <p className="project-item__description">{description}</p>
          <p className="project-item__tech">{technologies}</p>
          <div className="project-item__links">
            {demoUrl && <ProjectLink href={demoUrl}>View Project</ProjectLink>}
            {sourceUrl && <ProjectLink href={sourceUrl}>Source Code</ProjectLink>}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectList() {
  return (
    <section>
      <div className="container">
        <div className="projects-list">
          {PROJECTS.map((project) => (
            <ProjectItem key={project.number} {...project} />
          ))}
        </div>

        <div className="projects-more">
          <p className="projects-more__text">More projects coming soon.</p>
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

export default function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsIntro />
        <ProjectList />
      </main>
      <Footer />
    </>
  );
}