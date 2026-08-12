"use client";

import { useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#brands", label: "Brands" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#">Karthikeya</a>
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a className="nav-cta" href="resume.pdf" download>Download Résumé</a>
          <button
            className={`nav-burger${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
      {open && (
        <div className="nav-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="nav-menu-cta" href="resume.pdf" download onClick={() => setOpen(false)}>
            Download Résumé
          </a>
        </div>
      )}
    </header>
  );
}
