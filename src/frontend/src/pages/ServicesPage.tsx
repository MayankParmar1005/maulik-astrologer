import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const services = [
  {
    icon: "♈",
    title: "Janam Kundli Analysis",
    desc: "A comprehensive analysis of your birth chart (Janam Kundli) revealing your personality, strengths, karmic lessons, and life's major turning points. Includes planetary positions, dashas, and transits.",
  },
  {
    icon: "♋",
    title: "Marriage Compatibility",
    desc: "Detailed Kundali Milan using Ashtakoota matching system. Evaluates 36 gunas to assess mental, physical, and spiritual compatibility between prospective partners. Includes remedies if needed.",
  },
  {
    icon: "♃",
    title: "Career Guidance",
    desc: "Identify the most favorable career paths and timing for professional growth based on your 10th house, Saturn, and dasha periods. Know when to switch jobs, start a business, or pursue further education.",
  },
  {
    icon: "♑",
    title: "Business Consultation",
    desc: "Astrological timing for business launches, partnerships, investments, and expansions. Identify your muhurta (auspicious timing), favorable directions, and planetary periods for maximum success.",
  },
  {
    icon: "☿",
    title: "Health Astrology",
    desc: "Understand your constitutional nature (Prakriti) and planetary influences on health. Identify vulnerable periods and receive preventive lifestyle guidance aligned with your chart.",
  },
  {
    icon: "💎",
    title: "Gemstone Suggestions",
    desc: "Personalized gemstone recommendations based on your birth chart to strengthen beneficial planets and mitigate challenging ones. Includes which stone, weight, metal, and when to wear it.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="py-24 px-6 text-center relative"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.02 240) 0%, oklch(0.11 0.022 240) 100%)",
          borderBottom: "1px solid oklch(0.73 0.13 85 / 0.15)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["♎", "♓", "♊", "♏", "♑", "♌"].map((sym, i) => (
            <span
              key={sym}
              className="absolute text-3xl select-none"
              style={{
                color: "oklch(0.73 0.13 85 / 0.05)",
                left: `${i * 17}%`,
                top: `${15 + i * 12}%`,
              }}
            >
              {sym}
            </span>
          ))}
        </div>
        <div className="relative z-10">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
            style={{ color: "var(--gold)" }}
          >
            ✦ What I Offer ✦
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold tracking-wide uppercase"
            style={{ color: "oklch(0.93 0.01 240)" }}
          >
            Astrology Services
          </h1>
          <p
            className="mt-4 max-w-xl mx-auto text-base"
            style={{ color: "oklch(0.62 0.03 240)" }}
          >
            Each service is crafted to provide deep, actionable insights
            grounded in authentic Vedic tradition.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section
        className="py-24 px-6 zodiac-bg"
        style={{ background: "oklch(0.09 0.02 240)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="card-gold rounded-xl p-8 flex flex-col gap-5 relative z-10"
                data-ocid={`services.item.${i + 1}`}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: "oklch(0.73 0.13 85 / 0.08)",
                    border: "1px solid oklch(0.73 0.13 85 / 0.3)",
                    color: "var(--gold)",
                  }}
                >
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className="font-display font-bold text-xl mb-3 tracking-wide"
                    style={{ color: "oklch(0.93 0.01 240)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.62 0.03 240)" }}
                  >
                    {s.desc}
                  </p>
                </div>
                <Link
                  to="/book"
                  data-ocid={`services.book.button.${i + 1}`}
                  className="mt-auto inline-block text-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all hover:bg-gold-subtle"
                  style={{
                    borderColor: "oklch(0.73 0.13 85 / 0.4)",
                    color: "oklch(0.73 0.13 85)",
                  }}
                >
                  Book This Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background: "oklch(0.11 0.022 240)",
          borderTop: "1px solid oklch(0.73 0.13 85 / 0.2)",
        }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
          style={{ color: "var(--gold)" }}
        >
          ✦ Not Sure Which Service? ✦
        </p>
        <h2
          className="font-display text-3xl font-bold tracking-wide mb-4"
          style={{ color: "oklch(0.93 0.01 240)" }}
        >
          Let's Talk First
        </h2>
        <p
          className="mb-8 text-base max-w-md mx-auto"
          style={{ color: "oklch(0.62 0.03 240)" }}
        >
          Contact Maulik via WhatsApp for a brief chat before booking a full
          consultation.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/919876543210?text=Hello%20Maulik%2C%20I%20want%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="services.whatsapp.button"
            className="px-8 py-3 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-opacity hover:opacity-90"
            style={{ background: "#25D366", color: "white" }}
          >
            <span>💬</span> WhatsApp Maulik
          </a>
          <Link
            to="/book"
            data-ocid="services.book.primary_button"
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-gold"
            style={{
              background: "oklch(0.73 0.13 85)",
              color: "oklch(0.1 0.02 240)",
            }}
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
