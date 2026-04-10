import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const expertise = [
  { label: "Janam Kundli Analysis", pct: 98 },
  { label: "Marriage Compatibility", pct: 95 },
  { label: "Career Astrology", pct: 92 },
  { label: "Gemstone & Remedies", pct: 90 },
];

const milestones = [
  {
    year: "2005",
    title: "Began Formal Training",
    desc: "Started Vedic astrology studies under Guru Pt. Shiva Prasad in Varanasi.",
  },
  {
    year: "2008",
    title: "First Practice",
    desc: "Opened practice in Ahmedabad and began serving local community.",
  },
  {
    year: "2012",
    title: "1000 Clients Milestone",
    desc: "Reached 1000 satisfied clients across Gujarat and Maharashtra.",
  },
  {
    year: "2018",
    title: "Online Consultations",
    desc: "Expanded globally with virtual consultations, reaching clients worldwide.",
  },
  {
    year: "2024",
    title: "5000+ Lives Guided",
    desc: "Continues to guide thousands annually with compassion and precision.",
  },
];

const statBadges = [
  { value: "15+", label: "Years" },
  { value: "5000+", label: "Clients" },
  { value: "98%", label: "Satisfaction" },
];

export default function AboutPage() {
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
          {["♈", "♌", "♐", "♓", "☿", "♃"].map((sym, i) => (
            <span
              key={sym}
              className="absolute text-3xl select-none"
              style={{
                color: "oklch(0.73 0.13 85 / 0.05)",
                left: `${i * 16}%`,
                top: `${20 + i * 10}%`,
                animation: "twinkle 4s ease-in-out infinite",
                animationDelay: `${i * 0.6}s`,
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
            ✦ About ✦
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-bold tracking-wide uppercase"
            style={{ color: "oklch(0.93 0.01 240)" }}
          >
            Meet Maulik
          </h1>
        </div>
      </section>

      {/* Bio Section — centered column */}
      <section
        className="py-24 px-6"
        style={{ background: "oklch(0.09 0.02 240)" }}
      >
        <div className="max-w-[860px] mx-auto flex flex-col items-center gap-8">
          {/* Round profile photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-5"
          >
            <div
              className="w-44 h-44 rounded-full flex flex-col items-center justify-center gap-2"
              style={{
                border: "3px solid oklch(0.73 0.13 85)",
                background: "oklch(0.13 0.025 240)",
                boxShadow:
                  "0 0 0 6px oklch(0.73 0.13 85 / 0.15), 0 0 40px oklch(0.73 0.13 85 / 0.2)",
              }}
            >
              <span
                className="font-display text-6xl font-bold leading-none"
                style={{ color: "oklch(0.73 0.13 85 / 0.7)" }}
              >
                M
              </span>
              <span className="text-2xl leading-none">☽</span>
            </div>

            {/* Name & title */}
            <div className="text-center">
              <div
                className="font-display font-bold text-2xl tracking-wide"
                style={{ color: "var(--gold)" }}
              >
                Pandit Maulik
              </div>
              <div
                className="text-xs tracking-[0.3em] uppercase mt-1.5"
                style={{ color: "oklch(0.55 0.03 240)" }}
              >
                Vedic Astrologer
              </div>
            </div>

            {/* Stat badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {statBadges.map((b) => (
                <div
                  key={b.label}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5"
                  style={{
                    border: "1px solid oklch(0.73 0.13 85 / 0.5)",
                    background: "oklch(0.13 0.025 240 / 0.7)",
                    color: "var(--gold)",
                  }}
                >
                  <span className="font-display font-bold text-sm">
                    {b.value}
                  </span>
                  <span style={{ color: "oklch(0.62 0.03 240)" }}>
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full"
          >
            <h2
              className="font-display text-2xl font-bold tracking-wide uppercase mb-6 text-center"
              style={{ color: "oklch(0.93 0.01 240)" }}
            >
              15+ Years of Vedic Wisdom
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "oklch(0.68 0.025 240)" }}
            >
              <p>
                Pandit Maulik is one of Gujarat's most sought-after Vedic
                astrologers, with over 15 years of dedicated practice rooted in
                classical Jyotish traditions. He pursued formal training under
                the revered Guru Pt. Shiva Prasad in Varanasi — one of India's
                most prestigious centers of Vedic learning.
              </p>
              <p>
                His practice is built on the principle that astrology is not
                merely a tool for prediction, but a profound map of the soul's
                journey. Every consultation with Maulik is a deeply personal
                experience, tailored to your unique birth chart, life
                circumstances, and spiritual path.
              </p>
              <p>
                Over the years, Maulik has helped more than 5,000 individuals
                across India and internationally — guiding them through career
                crossroads, relationship decisions, health challenges, and
                business ventures. His clients range from students and
                professionals to entrepreneurs and spiritual seekers.
              </p>
              <p>
                He specializes in Janam Kundli analysis, Sade Sati readings,
                marriage compatibility (Kundali Milan), career timing, and
                gemstone recommendations. All remedies suggested are practical,
                affordable, and rooted in authentic Vedic tradition.
              </p>
            </div>

            {/* Expertise bars */}
            <div className="mt-10 space-y-4">
              <h3
                className="font-display font-bold tracking-wide uppercase text-sm mb-5"
                style={{ color: "var(--gold)" }}
              >
                Areas of Expertise
              </h3>
              {expertise.map((e) => (
                <div key={e.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: "oklch(0.78 0.03 240)" }}>
                      {e.label}
                    </span>
                    <span style={{ color: "var(--gold)" }}>{e.pct}%</span>
                  </div>
                  <div
                    className="h-1.5 rounded-full"
                    style={{ background: "oklch(0.2 0.025 240)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.73 0.13 85), oklch(0.62 0.1 85))",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${e.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="gold-divider" />

      {/* Philosophy */}
      <section
        className="py-20 px-6"
        style={{ background: "oklch(0.11 0.022 240)" }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
            style={{ color: "var(--gold)" }}
          >
            ✦ My Philosophy ✦
          </p>
          <h2
            className="font-display text-3xl font-bold tracking-wide uppercase mb-8"
            style={{ color: "oklch(0.93 0.01 240)" }}
          >
            Astrology as a Sacred Guide
          </h2>
          <blockquote
            className="font-display italic text-xl leading-relaxed mb-8"
            style={{
              color: "oklch(0.78 0.03 240)",
              borderLeft: "3px solid oklch(0.73 0.13 85 / 0.5)",
              paddingLeft: "1.5rem",
              textAlign: "left",
            }}
          >
            &ldquo;The stars do not compel — they incline. My role is to help
            you understand the cosmic energies at work in your life, so that you
            can make empowered choices, aligned with your dharma and highest
            good.&rdquo;
          </blockquote>
          <p
            className="text-base leading-relaxed"
            style={{ color: "oklch(0.62 0.03 240)" }}
          >
            Maulik believes that every person's birth chart is a unique cosmic
            fingerprint — a divine blueprint that holds the keys to
            understanding your strengths, challenges, karmic patterns, and soul
            purpose. His consultations are not about fatalism, but about
            awakening your awareness and agency.
          </p>
        </div>
      </section>

      <hr className="gold-divider" />

      {/* Timeline */}
      <section
        className="py-24 px-6"
        style={{ background: "oklch(0.09 0.02 240)" }}
      >
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
              style={{ color: "var(--gold)" }}
            >
              ✦ Journey ✦
            </p>
            <h2
              className="font-display text-3xl font-bold tracking-wide uppercase"
              style={{ color: "oklch(0.93 0.01 240)" }}
            >
              Milestones
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-16 top-0 bottom-0 w-px"
              style={{ background: "oklch(0.73 0.13 85 / 0.2)" }}
            />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  <div
                    className="w-16 flex-shrink-0 font-display font-bold text-sm text-right"
                    style={{ color: "var(--gold)" }}
                  >
                    {m.year}
                  </div>
                  <div
                    className="w-3 h-3 rounded-full mt-1 flex-shrink-0 relative"
                    style={{
                      background: "var(--gold)",
                      boxShadow: "0 0 8px oklch(0.73 0.13 85 / 0.5)",
                    }}
                  />
                  <div>
                    <div
                      className="font-semibold text-sm mb-1"
                      style={{ color: "oklch(0.88 0.02 240)" }}
                    >
                      {m.title}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "oklch(0.58 0.03 240)" }}
                    >
                      {m.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
          ✦ Start Your Journey ✦
        </p>
        <h2
          className="font-display text-3xl font-bold tracking-wide mb-5"
          style={{ color: "oklch(0.93 0.01 240)" }}
        >
          Ready to Consult with Maulik?
        </h2>
        <Link
          to="/book"
          data-ocid="about.book.primary_button"
          className="btn-gold-premium inline-block"
        >
          Book a Consultation
        </Link>
      </section>
    </div>
  );
}
