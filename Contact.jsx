"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import "./styles.css";

/* =========================================================
   Shubham Saha — Portfolio Contact Page
   Single JSX file. All markup lives here; all styling lives
   in styles.css (shared with Home, About, Skills, Projects,
   Services). No inline styles, no styled-jsx.
   ========================================================= */

const EMAILJS_SERVICE_ID = "service_sd0pbhh";
const EMAILJS_TEMPLATE_ID = "template_jgkpsln";
const EMAILJS_PUBLIC_KEY = "OoWsJuN_BL4sL2scc";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact", active: true },
];

const CONTACT_ROWS = [
  {
    label: "Email",
    value: "luckysaha9907@gmail.com",
    href: "mailto:luckysaha9907@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/watashi-shubhamsaha",
    href: "https://www.linkedin.com/in/watashi-shubhamsaha",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/shubh47-stealth",
    href: "https://github.com/shubh47-stealth",
    external: true,
  },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

function ContactIntro() {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="page-intro__label">Contact</p>
        <h1 className="page-intro__heading">Let&apos;s talk.</h1>
        <p className="page-intro__copy">
          Have a question, an opportunity, or just want to connect? Feel
          free to reach out.
        </p>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div>
      <p className="section__label">Get in Touch</p>
      <h2 className="contact-info__heading">Reach me directly.</h2>

      <div className="contact-rows">
        {CONTACT_ROWS.map((row) => (
          <div className="contact-row" key={row.label}>
            <p className="contact-row__label">{row.label}</p>
            <a
              className="contact-row__value"
              href={row.href}
              target={row.external ? "_blank" : undefined}
              rel={row.external ? "noopener noreferrer" : undefined}
            >
              {row.value}
            </a>
          </div>
        ))}
      </div>

      <div className="contact-social">
        <a
          className="contact-social-link"
          href="https://www.linkedin.com/in/watashi-shubhamsaha"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <span className="contact-social-link__arrow">↗</span>
        </a>
        <a
          className="contact-social-link"
          href="https://github.com/shubh47-stealth"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <span className="contact-social-link__arrow">↗</span>
        </a>
      </div>
    </div>
  );
}

const INITIAL_FORM = { name: "", email: "", message: "" };
const INITIAL_ERRORS = { name: "", email: "", message: "" };

function ContactForm() {
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendError, setSendError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function validate(values) {
    return {
      name: values.name.trim().length > 0 ? "" : "Please enter your name.",
      email: EMAIL_PATTERN.test(values.email.trim())
        ? ""
        : "Please enter a valid email address.",
      message:
        values.message.trim().length > 0 ? "" : "Please enter a message.",
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate(formValues);
    setErrors(nextErrors);
    setSendError("");

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formValues.name,
          from_email: formValues.email,
          message: formValues.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setIsSubmitted(true);
      setFormValues(INITIAL_FORM);
    } catch (error) {
      setSendError(
        "Something went wrong sending your message. Please try again or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <p className="section__label">Send a Message</p>
      <h2 className="contact-form-heading">Tell me a bit about it.</h2>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label className="form-field__label" htmlFor="name">
            Name
          </label>
          <input
            className="form-field__input"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            value={formValues.name}
            onChange={handleChange}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p className="form-field__error" id="name-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="form-field">
          <label className="form-field__label" htmlFor="email">
            Email
          </label>
          <input
            className="form-field__input"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p className="form-field__error" id="email-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className="form-field">
          <label className="form-field__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-field__textarea"
            id="message"
            name="message"
            placeholder="Tell me a little about what you'd like to discuss."
            value={formValues.message}
            onChange={handleChange}
            aria-invalid={errors.message ? "true" : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p className="form-field__error" id="message-error" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button
          className="btn btn--primary contact-form__submit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Send Message →"}
        </button>

        {sendError && (
          <p className="form-field__error" role="alert">
            {sendError}
          </p>
        )}

        {isSubmitted && (
          <p className="contact-form__success" role="status">
            Thanks — your message has been received.
          </p>
        )}
      </form>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="section">
      <div className="container contact-grid">
        <ContactInfo />
        <ContactForm />
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

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactIntro />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
