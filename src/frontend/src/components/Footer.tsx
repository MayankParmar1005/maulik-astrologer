import { Link } from "@tanstack/react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        background: "oklch(0.07 0.015 240)",
        borderColor: "oklch(0.73 0.13 85 / 0.2)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
                  className="text-[9px] tracking-[0.35em] uppercase"
                  style={{ color: "oklch(0.5 0.03 240)" }}
                >
                  ASTROLOGY
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.55 0.03 240)" }}
            >
              Vedic astrology guidance rooted in ancient wisdom, delivered with
              modern clarity.
            </p>
            <div className="mt-4 flex gap-3">
              {["♈", "♉", "♊", "♋"].map((s) => (
                <span
                  key={s}
                  className="text-lg"
                  style={{ color: "oklch(0.73 0.13 85 / 0.4)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Maulik", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Book Appointment", to: "/book" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors hover:text-foreground"
                    style={{ color: "oklch(0.55 0.03 240)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Contact
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "oklch(0.55 0.03 240)" }}
            >
              <li>📞 +91 98765 43210</li>
              <li>✉️ maulik@astrology.com</li>
              <li>📍 Ahmedabad, Gujarat</li>
            </ul>
            <a
              href="https://wa.me/919876543210?text=Hello%20Maulik%2C%20I%20want%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-opacity hover:opacity-90"
              style={{ background: "#25D366", color: "white" }}
            >
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center text-xs"
          style={{
            borderColor: "oklch(0.73 0.13 85 / 0.15)",
            color: "oklch(0.45 0.03 240)",
          }}
        >
          © {year} Maulik Astrology. All rights reserved. &nbsp;|&nbsp; Built
          with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            style={{ color: "var(--gold)" }}
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
