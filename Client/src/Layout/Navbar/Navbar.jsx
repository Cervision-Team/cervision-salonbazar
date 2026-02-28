import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import Logo from "../../Image/Logo.png";

const LANGUAGES = [
  { code: "Az", label: "Azərbaycan" },
  { code: "Ru", label: "Русский" },
  { code: "En", label: "English" },
];

function Navbar() {
  const [lang, setLang] = useState(LANGUAGES[0]);
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const langRef = useRef(null);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
        setLangOpen(false);
        setMenuOpen(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`navbar 
      ${visible ? "navbar--visible" : "navbar--hidden"} 
      ${menuOpen ? "navbar--menu-open" : ""}`}
    >
      <div className="navbar__container">
        {/* Logo */}
        <a href="/" className="navbar__logo">
          <img src={Logo} alt="Salon Bazarı Logo" />
        </a>

        {/* Nav Links — desktop */}
        <ul className="navbar__links">
          <li>
            <a href="/">Ana səhifə</a>
          </li>
          <li>
            <a href="/haqqimizda">Haqqımızda</a>
          </li>
          <li>
            <a href="/magazalar">Mağazalar</a>
          </li>
          <li>
            <a href="/mehsullar">Məhsullar</a>
          </li>
          <li>
            <a href="/vakansiyalar">Vakansiyalar</a>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="navbar__actions">
          <a href="/login" className="navbar__login">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Daxil ol</span>
          </a>

          <a href="/post-ad" className="navbar__post-btn">
            <span className="navbar__post-btn-plus">+</span> Elan yerləşdir
          </a>

          {/* Language Dropdown */}
          <div
            className={`navbar__lang ${langOpen ? "navbar__lang--open" : ""}`}
            ref={langRef}
            onClick={() => setLangOpen(!langOpen)}
          >
            <span>{lang.code}</span>
            <svg
              className="navbar__lang-arrow"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>

            {langOpen && (
              <ul className="navbar__lang-menu">
                {LANGUAGES.map((l) => (
                  <li
                    key={l.code}
                    className={l.code === lang.code ? "active" : ""}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLang(l);
                      setLangOpen(false);
                    }}
                  >
                    <span className="navbar__lang-label">{l.label}</span>
                    {l.code === lang.code && (
                      <svg
                        className="navbar__lang-check"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Burger — mobile */}
          <button
            className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menyu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""}`}
      >
        <ul>
          <li>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Ana səhifə
            </a>
          </li>
          <li>
            <a href="/haqqimizda" onClick={() => setMenuOpen(false)}>
              Haqqımızda
            </a>
          </li>
          <li>
            <a href="/magazalar" onClick={() => setMenuOpen(false)}>
              Mağazalar
            </a>
          </li>
          <li>
            <a href="/mehsullar" onClick={() => setMenuOpen(false)}>
              Məhsullar
            </a>
          </li>
          <li>
            <a href="/vakansiyalar" onClick={() => setMenuOpen(false)}>
              Vakansiyalar
            </a>
          </li>
        </ul>
        <a
          href="/login"
          className="navbar__mobile-login"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Daxil ol
        </a>
        <a
          href="/post-ad"
          className="navbar__post-btn navbar__post-btn--mobile"
        >
          <span className="navbar__post-btn-plus">+</span> Elan yerləşdir
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
