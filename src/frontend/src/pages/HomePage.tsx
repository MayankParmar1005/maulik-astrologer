import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const services = [
  {
    icon: "♈",
    title: "Kundli Reading",
    desc: "Deep analysis of your birth chart to reveal life's path and purpose.",
  },
  {
    icon: "♃",
    title: "Career Guidance",
    desc: "Unlock planetary influences on your professional journey.",
  },
  {
    icon: "♋",
    title: "Marriage Compatibility",
    desc: "Vedic matching for harmony, love, and lasting companionship.",
  },
  {
    icon: "♑",
    title: "Business Advice",
    desc: "Auspicious timing and planetary alignment for business success.",
  },
];

const testimonials = [
  {
    quote:
      "Maulik ji's guidance transformed my career path. His reading was shockingly accurate.",
    name: "Priya S.",
    city: "Mumbai",
    stars: 5,
  },
  {
    quote:
      "Accurate predictions and genuine advice. I consult him before every major decision.",
    name: "Rahul M.",
    city: "Delhi",
    stars: 5,
  },
  {
    quote:
      "Found my life partner with his compatibility reading. Forever grateful!",
    name: "Anjali K.",
    city: "Ahmedabad",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6 star-field"
        style={{ background: "oklch(0.07 0.02 240)" }}
      >
        {/* Decorative zodiac ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div
            className="text-[28rem] font-display opacity-[0.025] select-none"
            style={{ color: "var(--gold)", lineHeight: 1 }}
          >
            ☽
          </div>
        </div>

        {/* Scattered zodiac symbols with twinkle */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            "♈",
            "♉",
            "♊",
            "♋",
            "♌",
            "♍",
            "♎",
            "♏",
            "♐",
            "♑",
            "♒",
            "♓",
          ].map((sym, i) => (
            <span
              key={sym}
              className="absolute text-2xl select-none"
              style={{
                color: "oklch(0.73 0.13 85 / 0.1)",
                left: `${(i * 8.3) % 95}%`,
                top: `${(i * 13 + 10) % 80}%`,
                animationDelay: `${i * 0.4}s`,
                animation: "twinkle 4s ease-in-out infinite",
              }}
            >
              {sym}
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-6 font-semibold"
              style={{ color: "var(--gold)" }}
            >
              ✦ Vedic Astrology ✦
            </p>
            <h1
              className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ color: "oklch(0.93 0.01 240)" }}
            >
              Get Accurate Astrology Guidance Based on Your{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.76 0.14 85), oklch(0.62 0.1 85))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Janam Kundli
              </span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ color: "oklch(0.68 0.025 240)" }}
            >
              Maulik is a trusted Vedic astrologer with 15+ years of experience
              helping thousands find clarity, purpose, and direction in life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/book"
                data-ocid="home.book_consultation.primary_button"
                className="btn-gold-premium inline-block"
              >
                Book Consultation
              </Link>
              <Link
                to="/services"
                data-ocid="home.services.secondary_button"
                className="px-8 py-3 rounded-full font-semibold text-sm tracking-[0.1em] border transition-all duration-200 hover:border-gold inline-block"
                style={{
                  borderColor: "oklch(0.73 0.13 85 / 0.4)",
                  color: "oklch(0.73 0.13 85)",
                }}
              >
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-10"
          >
            {[
              { num: "15+", label: "Years Experience" },
              { num: "5000+", label: "Clients Guided" },
              { num: "98%", label: "Satisfaction Rate" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="font-display text-3xl font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  {s.num}
                </div>
                <div
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "oklch(0.55 0.03 240)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gold divider */}
      <hr className="gold-divider" />

      {/* Services Highlights */}
      <section
        className="py-24 px-6 zodiac-bg"
        style={{ background: "oklch(0.09 0.02 240)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
              style={{ color: "var(--gold)" }}
            >
              ✦ What I Offer ✦
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold tracking-wide uppercase"
              style={{ color: "oklch(0.93 0.01 240)" }}
            >
              Astrology{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.76 0.14 85), oklch(0.62 0.1 85))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Services
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-gold rounded-lg p-7 text-center relative z-10"
                data-ocid={`home.services.item.${i + 1}`}
              >
                <div className="text-4xl mb-4" style={{ color: "var(--gold)" }}>
                  {s.icon}
                </div>
                <h3
                  className="font-display font-bold text-lg mb-3 tracking-wide"
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
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              data-ocid="home.all_services.button"
              className="px-8 py-3 rounded-full text-sm font-semibold border transition-all duration-200 hover:border-gold inline-block"
              style={{
                borderColor: "oklch(0.73 0.13 85 / 0.4)",
                color: "oklch(0.73 0.13 85)",
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <hr className="gold-divider" />

      {/* About Intro */}
      <section
        className="py-24 px-6"
        style={{ background: "oklch(0.11 0.022 240)" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div
              className="w-52 h-52 rounded-full flex items-center justify-center font-display text-6xl font-bold"
              style={{
                border: "3px solid oklch(0.73 0.13 85)",
                background: "oklch(0.14 0.025 240)",
                color: "oklch(0.73 0.13 85 / 0.6)",
                boxShadow:
                  "0 0 0 6px oklch(0.73 0.13 85 / 0.1), 0 0 32px oklch(0.73 0.13 85 / 0.15)",
              }}
            >
              M
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
              style={{ color: "var(--gold)" }}
            >
              ✦ Meet Your Astrologer ✦
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold tracking-wide uppercase mb-5"
              style={{ color: "oklch(0.93 0.01 240)" }}
            >
              Pandit Maulik
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "oklch(0.68 0.025 240)" }}
            >
              With over 15 years of dedicated practice in Vedic astrology,
              Maulik has guided thousands of individuals through life's pivotal
              moments. Trained in the ancient traditions of Varanasi, he
              combines classical Jyotish principles with a modern, empathetic
              approach.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.68 0.025 240)" }}
            >
              His specialties include Janam Kundli analysis, marriage
              compatibility, career astrology, and gemstone recommendations —
              all grounded in authentic Vedic wisdom.
            </p>
            <Link
              to="/about"
              data-ocid="home.learn_more.button"
              className="btn-gold-premium inline-block"
            >
              Learn More About Maulik
            </Link>
          </motion.div>
        </div>
      </section>

      <hr className="gold-divider" />

      {/* Testimonials */}
      <section
        className="py-24 px-6"
        style={{ background: "oklch(0.09 0.02 240)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
              style={{ color: "var(--gold)" }}
            >
              ✦ Client Stories ✦
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold tracking-wide uppercase"
              style={{ color: "oklch(0.93 0.01 240)" }}
            >
              What Clients Say
            </h2>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="home.testimonials.list"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-gold rounded-lg p-7"
                data-ocid={`home.testimonials.item.${i + 1}`}
              >
                <div className="flex gap-1 mb-4">
                  <span style={{ color: "var(--gold)", letterSpacing: "2px" }}>
                    {"★".repeat(t.stars)}
                  </span>
                </div>
                <p
                  className="font-display italic text-base leading-relaxed mb-5"
                  style={{ color: "oklch(0.85 0.02 240)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "var(--gold)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "oklch(0.55 0.03 240)" }}
                  >
                    {t.city}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.14 0.025 240), oklch(0.10 0.02 240))",
          borderTop: "1px solid oklch(0.73 0.13 85 / 0.2)",
          borderBottom: "1px solid oklch(0.73 0.13 85 / 0.2)",
        }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
          style={{ color: "var(--gold)" }}
        >
          ✦ Begin Your Journey ✦
        </p>
        <h2
          className="font-display text-3xl md:text-4xl font-bold tracking-wide mb-5"
          style={{ color: "oklch(0.93 0.01 240)" }}
        >
          Ready for Clarity and Direction?
        </h2>
        <p
          className="text-base mb-8 max-w-md mx-auto"
          style={{ color: "oklch(0.62 0.03 240)" }}
        >
          Book your personal consultation with Maulik and discover what the
          stars have in store for you.
        </p>
        <Link
          to="/book"
          data-ocid="home.cta.primary_button"
          className="btn-gold-premium inline-block"
        >
          Book Appointment Now
        </Link>
      </section>
    </div>
  );
}
