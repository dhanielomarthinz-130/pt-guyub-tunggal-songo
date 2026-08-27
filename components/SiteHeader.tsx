"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight, MessageCircle } from "lucide-react";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes or when window resizes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/#tentang" },
    { label: "Layanan", href: "/#layanan" },
    { label: "Solusi", href: "/#solusi" },
    { label: "Karir", href: "/karir" },
    { label: "Berita", href: "/berita" },
    { label: "Kontak", href: "/kontak" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && !href.startsWith("/#") && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-relative-container">
        <div className="nav-container">
          {/* Logo & Brand */}
          <Link href="/" className="brand" aria-label="PT Guyub Tunggal Songo">
            <div className="logo-badge">G</div>
            <div className="brand-text">
              <span className="brand-name">PT GUYUB TUNGGAL SONGO</span>
              <span className="brand-tagline">Logistics & Fulfillment Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={label}
                  href={href}
                  className={`nav-link ${active ? "active" : ""}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="nav-actions">
            {/* Desktop Full CTA Button */}
            <Link href="/kontak" className="btn btn-primary btn-sm nav-desktop-cta">
              <Phone size={15} />
              Hubungi Kami
            </Link>

            {/* Mobile Quick Call Icon Button */}
            <Link
              href="/kontak"
              className="nav-mobile-call-btn"
              aria-label="Hubungi Kami"
            >
              <Phone size={18} />
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-links">
              {navLinks.map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={label}
                    href={href}
                    className={`mobile-nav-link ${active ? "active" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{label}</span>
                    <ArrowRight size={15} opacity={0.6} />
                  </Link>
                );
              })}
            </div>

            <div className="mobile-drawer-footer">
              <Link
                href="/kontak"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setIsOpen(false)}
              >
                <Phone size={16} /> Hubungi Kami Sekarang
              </Link>
              <a
                href="https://wa.me/6281234567890?text=Halo%20PT%20Guyub%20Tunggal%20Songo%2C%20saya%20ingin%20konsultasi%20layanan%20logistik."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <MessageCircle size={16} color="#005840" /> Chat via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
