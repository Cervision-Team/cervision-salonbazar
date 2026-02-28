import React from "react";
import "./Footer.scss";
import Logo from "../../Image/Logo.png";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Ana səhifə", href: "/" },
  { label: "Salonlar", href: "/salonlar" },
  { label: "Ustalar", href: "/ustalar" },
  { label: "Xidmətlər", href: "/xidmetler" },
  { label: "Haqqımızda", href: "/haqqimizda" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Col 1 — Brand */}
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <span className="footer__logo-white">Salonbazari</span>
            <span className="footer__logo-pink">.az</span>
          </a>
          <p className="footer__desc">
            Azərbaycanın ən böyük gözəllik bazarı. Salon məhsul və
            avadanlıqlarını kəşf edin.
          </p>
          <div className="footer__socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Col 2 — Keçidlər */}
        <div className="footer__nav">
          <h4 className="footer__heading">Keçidlər</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Keçidlər (duplicate col) */}
        <div className="footer__nav">
          <h4 className="footer__heading">Keçidlər</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Əlaqə */}
        <div className="footer__contact">
          <h4 className="footer__heading">Əlaqə</h4>
          <ul>
            <li>
              <FiPhone className="footer__contact-icon" />
              <span>+994 55 802 29 32</span>
            </li>
            <li>
              <FiMapPin className="footer__contact-icon" />
              <span>Azərbaycan, Bakı</span>
            </li>
            <li>
              <FiMail className="footer__contact-icon" />
              <span>info@salonbazari.az</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Salonbazari.az. Bütün hüquqlar qorunur.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
