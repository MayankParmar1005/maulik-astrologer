import { motion } from "motion/react";

const contactInfo = [
  {
    icon: "📞",
    label: "Phone",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    hint: "Mon–Sat, 9 AM – 7 PM IST",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "maulik@astrology.com",
    link: "mailto:maulik@astrology.com",
    hint: "Reply within 24 hours",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Ahmedabad, Gujarat",
    link: null,
    hint: "India — Also available online",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.02 240) 0%, oklch(0.11 0.022 240) 100%)",
          borderBottom: "1px solid oklch(0.73 0.13 85 / 0.15)",
        }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
          style={{ color: "var(--gold)" }}
        >
          ✦ Get in Touch ✦
        </p>
        <h1
          className="font-display text-4xl md:text-5xl font-bold tracking-wide uppercase"
          style={{ color: "oklch(0.93 0.01 240)" }}
        >
          Contact Maulik
        </h1>
        <p
          className="mt-4 text-base max-w-lg mx-auto"
          style={{ color: "oklch(0.62 0.03 240)" }}
        >
          Reach out for consultations, questions, or to learn more about Vedic
          astrology.
        </p>
      </section>

      {/* Contact Cards */}
      <section
        className="py-24 px-6"
        style={{ background: "oklch(0.09 0.02 240)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-gold rounded-xl p-8 text-center"
                data-ocid={`contact.${c.label.toLowerCase()}.card`}
              >
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3
                  className="font-display font-bold text-sm tracking-[0.2em] uppercase mb-3"
                  style={{ color: "var(--gold)" }}
                >
                  {c.label}
                </h3>
                {c.link ? (
                  <a
                    href={c.link}
                    className="text-base font-semibold block mb-2 hover:opacity-80 transition-opacity"
                    style={{ color: "oklch(0.88 0.02 240)" }}
                  >
                    {c.value}
                  </a>
                ) : (
                  <p
                    className="text-base font-semibold mb-2"
                    style={{ color: "oklch(0.88 0.02 240)" }}
                  >
                    {c.value}
                  </p>
                )}
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.03 240)" }}
                >
                  {c.hint}
                </p>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center rounded-2xl py-14 px-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.13 0.025 240), oklch(0.10 0.02 240))",
              border: "1px solid oklch(0.73 0.13 85 / 0.25)",
            }}
          >
            <div className="text-5xl mb-5">💬</div>
            <h2
              className="font-display text-2xl font-bold tracking-wide mb-3"
              style={{ color: "oklch(0.93 0.01 240)" }}
            >
              Prefer to Chat Instantly?
            </h2>
            <p
              className="text-base mb-8 max-w-md mx-auto"
              style={{ color: "oklch(0.62 0.03 240)" }}
            >
              Reach Maulik directly on WhatsApp for quick queries or to schedule
              your consultation.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hello%20Maulik%2C%20I%20want%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp.button"
              className="px-10 py-4 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: "#25D366", color: "white" }}
            >
              <span>💬</span> Message on WhatsApp
            </a>
          </motion.div>

          {/* Availability */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-xl p-7"
              style={{
                border: "1px solid oklch(0.73 0.13 85 / 0.2)",
                background: "oklch(0.12 0.025 240)",
              }}
            >
              <h3
                className="font-display font-bold tracking-wide uppercase text-sm mb-5"
                style={{ color: "var(--gold)" }}
              >
                ⏰ Consultation Hours
              </h3>
              <ul className="space-y-3">
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
                  { day: "Saturday", time: "10:00 AM – 5:00 PM" },
                  { day: "Sunday", time: "By Appointment Only" },
                ].map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span style={{ color: "oklch(0.72 0.03 240)" }}>
                      {h.day}
                    </span>
                    <span style={{ color: "var(--gold)" }}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl p-7"
              style={{
                border: "1px solid oklch(0.73 0.13 85 / 0.2)",
                background: "oklch(0.12 0.025 240)",
              }}
            >
              <h3
                className="font-display font-bold tracking-wide uppercase text-sm mb-5"
                style={{ color: "var(--gold)" }}
              >
                🌐 Languages Spoken
              </h3>
              <ul className="space-y-3">
                {[
                  { lang: "Gujarati", level: "Native" },
                  { lang: "Hindi", level: "Fluent" },
                  { lang: "English", level: "Conversational" },
                ].map((l) => (
                  <li key={l.lang} className="flex justify-between text-sm">
                    <span style={{ color: "oklch(0.72 0.03 240)" }}>
                      {l.lang}
                    </span>
                    <span style={{ color: "var(--gold)" }}>{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Zodiac strip */}
          <div className="mt-16 text-center">
            <div className="flex justify-center gap-6 flex-wrap">
              {"♈♉♊♋♌♍♎♏♐♑♒♓".split("").map((sym) => (
                <span
                  key={sym}
                  className="text-2xl"
                  style={{ color: "oklch(0.73 0.13 85 / 0.3)" }}
                >
                  {sym}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
