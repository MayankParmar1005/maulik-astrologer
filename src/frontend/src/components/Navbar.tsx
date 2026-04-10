import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "SERVICES", to: "/services" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "oklch(0.09 0.02 240 / 0.95)",
        borderColor: "oklch(0.73 0.13 85 / 0.2)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <span className="text-2xl" style={{ color: "var(--gold)" }}>
            ☽
          </span>
          <div className="leading-none">
            <div
              className="font-display font-bold text-lg tracking-[0.15em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              MAULIK
            </div>
            <div
              className="text-[9px] tracking-[0.35em] uppercase font-body"
              style={{ color: "oklch(0.62 0.03 240)" }}
            >
              ASTROLOGY
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" data-ocid="nav.link">
          {navLinks.map((link) => {
            const isActive = currentPath === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200 pb-1${
                  isActive ? " nav-link-active" : ""
                }`}
                style={{
                  color: isActive ? "var(--gold)" : "oklch(0.78 0.03 240)",
                }}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/book"
            data-ocid="nav.book_consultation.button"
            className="btn-gold-premium"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.7rem" }}
          >
            BOOK A CONSULTATION
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "var(--gold)" }}
          aria-label="Toggle menu"
          data-ocid="nav.menu.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
            style={{
              background: "oklch(0.09 0.02 240 / 0.98)",
              borderColor: "oklch(0.73 0.13 85 / 0.2)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold tracking-[0.1em] uppercase py-2"
                style={{
                  color:
                    currentPath === link.to
                      ? "var(--gold)"
                      : "oklch(0.78 0.03 240)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setMenuOpen(false)}
              data-ocid="nav.book_mobile.button"
              className="btn-gold-premium text-center"
              style={{ padding: "0.75rem 1.25rem" }}
            >
              BOOK A CONSULTATION
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
