import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useBookAppointment } from "../hooks/useQueries";

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const { mutateAsync, isPending } = useBookAppointment();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.dateOfBirth || !form.placeOfBirth) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutateAsync(form);
      setSuccess(true);
      setForm({
        name: "",
        dateOfBirth: "",
        timeOfBirth: "",
        placeOfBirth: "",
        message: "",
      });
    } catch {
      toast.error("Failed to book appointment. Please try again.");
    }
  };

  const inputStyle = {
    background: "oklch(0.14 0.025 240)",
    border: "1px solid oklch(0.73 0.13 85 / 0.25)",
    color: "oklch(0.93 0.01 240)",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

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
          ✦ Schedule ✦
        </p>
        <h1
          className="font-display text-4xl md:text-5xl font-bold tracking-wide uppercase"
          style={{ color: "oklch(0.93 0.01 240)" }}
        >
          Book Appointment
        </h1>
        <p
          className="mt-4 text-base max-w-lg mx-auto"
          style={{ color: "oklch(0.62 0.03 240)" }}
        >
          Fill in your details below and Maulik will confirm your consultation
          time.
        </p>
      </section>

      <section
        className="py-20 px-6"
        style={{ background: "oklch(0.09 0.02 240)" }}
      >
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 px-8 rounded-2xl"
                style={{
                  border: "1px solid oklch(0.73 0.13 85 / 0.4)",
                  background: "oklch(0.12 0.025 240)",
                }}
                data-ocid="book.success_state"
              >
                <div className="text-5xl mb-5">✨</div>
                <h2
                  className="font-display text-2xl font-bold tracking-wide mb-4"
                  style={{ color: "var(--gold)" }}
                >
                  Appointment Requested!
                </h2>
                <p
                  className="text-base mb-8"
                  style={{ color: "oklch(0.68 0.025 240)" }}
                >
                  Thank you! Maulik will review your details and contact you
                  shortly to confirm your consultation time.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="px-8 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-gold"
                  style={{
                    background: "oklch(0.73 0.13 85)",
                    color: "oklch(0.1 0.02 240)",
                  }}
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div
                  className="rounded-2xl p-8 md:p-10"
                  style={{
                    border: "1px solid oklch(0.73 0.13 85 / 0.3)",
                    background: "oklch(0.12 0.025 240)",
                    boxShadow: "0 8px 32px oklch(0 0 0 / 0.3)",
                  }}
                  data-ocid="book.form.panel"
                >
                  <h2
                    className="font-display text-xl font-bold tracking-wide uppercase mb-8"
                    style={{ color: "var(--gold)" }}
                  >
                    ☽ Consultation Request
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2"
                        style={{ color: "oklch(0.72 0.03 240)" }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        style={inputStyle}
                        data-ocid="book.name.input"
                        required
                      />
                    </div>

                    {/* DOB & TOB */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="dateOfBirth"
                          className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2"
                          style={{ color: "oklch(0.72 0.03 240)" }}
                        >
                          Date of Birth *
                        </label>
                        <input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={form.dateOfBirth}
                          onChange={handleChange}
                          style={{ ...inputStyle, colorScheme: "dark" }}
                          data-ocid="book.dob.input"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="timeOfBirth"
                          className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2"
                          style={{ color: "oklch(0.72 0.03 240)" }}
                        >
                          Time of Birth
                        </label>
                        <input
                          id="timeOfBirth"
                          name="timeOfBirth"
                          type="time"
                          value={form.timeOfBirth}
                          onChange={handleChange}
                          style={{ ...inputStyle, colorScheme: "dark" }}
                          data-ocid="book.tob.input"
                        />
                      </div>
                    </div>

                    {/* Place */}
                    <div>
                      <label
                        htmlFor="placeOfBirth"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2"
                        style={{ color: "oklch(0.72 0.03 240)" }}
                      >
                        Place of Birth *
                      </label>
                      <input
                        id="placeOfBirth"
                        name="placeOfBirth"
                        type="text"
                        value={form.placeOfBirth}
                        onChange={handleChange}
                        placeholder="City, State, Country"
                        style={inputStyle}
                        data-ocid="book.place.input"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2"
                        style={{ color: "oklch(0.72 0.03 240)" }}
                      >
                        Questions or Concerns
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What would you like guidance on?"
                        rows={4}
                        style={{ ...inputStyle, resize: "none" }}
                        data-ocid="book.message.textarea"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        data-ocid="book.submit.button"
                        className="flex-1 py-3 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all hover:shadow-gold disabled:opacity-60"
                        style={{
                          background: "oklch(0.73 0.13 85)",
                          color: "oklch(0.1 0.02 240)",
                        }}
                      >
                        {isPending && (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        )}
                        {isPending ? "Booking..." : "Submit Request"}
                      </button>
                      <a
                        href="https://wa.me/919876543210?text=Hello%20Maulik%2C%20I%20want%20to%20book%20a%20consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid="book.whatsapp.button"
                        className="flex-1 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                        style={{ background: "#25D366", color: "white" }}
                      >
                        <span>💬</span> Book via WhatsApp
                      </a>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🕐", label: "Response Time", val: "Within 24 hrs" },
              {
                icon: "📞",
                label: "Consultation Mode",
                val: "Call / Video / In-person",
              },
              { icon: "🔒", label: "Confidentiality", val: "100% Private" },
            ].map((info) => (
              <div
                key={info.label}
                className="rounded-lg p-4 text-center"
                style={{
                  border: "1px solid oklch(0.73 0.13 85 / 0.2)",
                  background: "oklch(0.12 0.025 240)",
                }}
              >
                <div className="text-2xl mb-2">{info.icon}</div>
                <div
                  className="text-xs font-semibold tracking-wider uppercase mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  {info.label}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.62 0.03 240)" }}
                >
                  {info.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
