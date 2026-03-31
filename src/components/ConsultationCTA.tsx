import { Phone, Mail, MessageCircle, Calendar, Sparkles } from "lucide-react";
import { useState } from "react";

const services = [
  "Vedic Kundli Analysis",
  "Tarot Card Reading",
  "Numerology Reading",
  "Vastu Consultation",
  "Relationship & Marriage",
  "Career & Finance",
  "Other / Not Sure",
];

const ConsultationCTA = () => {
  const [form, setForm] = useState({
    name: "", dob: "", time: "", place: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "hsl(240,35%,4%)" }}>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(270,60%,55%,0.4), transparent)" }} />

      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full -left-48 top-1/2 -translate-y-1/2"
          style={{
            background: "radial-gradient(circle, hsl(270,50%,20%,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }} />
        <div className="absolute w-[400px] h-[400px] rounded-full -right-32 top-1/4"
          style={{
            background: "radial-gradient(circle, hsl(43,74%,40%,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }} />
      </div>

      <div className="max-w-[1480px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <div>
            <div className="section-badge mb-5">✦ Begin Your Journey</div>
            <h2 className="section-title mb-4">
              Book Your{" "}
              <span className="gold-text">Consultation</span>
            </h2>
            <div className="cosmic-divider mb-8">
              <span className="text-[hsl(43,74%,60%)]">✦</span>
            </div>

            <p className="font-raleway text-[hsl(45,20%,62%)] leading-relaxed mb-10">
              Take the first step toward cosmic clarity. Share your birth details below and
              Mohini Khatiyan will personally craft your reading within 24 hours.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: "WhatsApp", value: "+91 91085 2557", color: "hsl(150,50%,45%)" },
                { icon: MessageCircle, label: "Instagram DM", value: "@healingssbymohini", color: "hsl(320,60%,60%)" },
                { icon: Calendar, label: "Online Consultation", value: "DM for Booking & Collabs", color: "hsl(270,60%,60%)" },
                { icon: Mail, label: "WhatsApp Link", value: "wa.me/919108525​57", color: "hsl(43,74%,60%)" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-sm group transition-all hover:translate-x-1"
                  style={{
                    background: "hsl(245,25%,9%,0.8)",
                    border: "1px solid hsl(270,20%,16%)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}33` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-raleway text-[11px] tracking-[0.2em] uppercase text-[hsl(45,15%,45%)]">{label}</div>
                    <div className="font-cinzel text-sm font-medium text-[hsl(45,60%,88%)] mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="mt-8 flex items-start gap-3 p-4 rounded-sm"
              style={{ background: "hsl(43,74%,60%,0.05)", border: "1px solid hsl(43,74%,60%,0.15)" }}>
              <Sparkles size={16} className="text-[hsl(43,74%,60%)] mt-0.5 shrink-0" />
              <p className="font-raleway text-xs text-[hsl(45,20%,60%)] leading-relaxed">
                All consultations are strictly confidential. Your data is never shared.
                First-time clients receive a complimentary 5-minute overview at the start of every session.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div
                className="glass-card rounded-sm p-12 text-center"
                style={{ animation: "rise-up 0.5s ease-out" }}
              >
                <div
                  className="font-cinzel text-5xl mb-4"
                  style={{ color: "hsl(43,74%,60%)", textShadow: "0 0 30px hsl(43,74%,60%,0.4)" }}
                >
                  ✦
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-[hsl(45,60%,92%)] mb-3">
                  Your Request is Received
                </h3>
                <p className="font-raleway text-sm text-[hsl(45,20%,60%)] leading-relaxed">
                  The cosmos have noted your call. Mohini Khatiyan will connect with you
                  within 24 hours. Prepare to embark on a transformative journey.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-sm p-8 space-y-5"
              >
                <h3 className="font-cinzel text-lg font-semibold text-[hsl(45,60%,92%)] tracking-wide mb-2">
                  Request a Reading
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-raleway text-[11px] tracking-[0.2em] uppercase text-[hsl(45,20%,50%)] block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-sm font-raleway text-sm text-[hsl(45,60%,88%)] placeholder-[hsl(45,15%,35%)] outline-none focus:border-[hsl(43,74%,60%,0.5)] transition-colors"
                      style={{
                        background: "hsl(240,30%,8%)",
                        border: "1px solid hsl(270,20%,20%)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="font-raleway text-[11px] tracking-[0.2em] uppercase text-[hsl(45,20%,50%)] block mb-1.5">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm font-raleway text-sm text-[hsl(45,60%,88%)] outline-none focus:border-[hsl(43,74%,60%,0.5)] transition-colors"
                      style={{
                        background: "hsl(240,30%,8%)",
                        border: "1px solid hsl(270,20%,20%)",
                        colorScheme: "dark",
                      }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-raleway text-[11px] tracking-[0.2em] uppercase text-[hsl(45,20%,50%)] block mb-1.5">
                      Birth Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm font-raleway text-sm text-[hsl(45,60%,88%)] outline-none transition-colors"
                      style={{
                        background: "hsl(240,30%,8%)",
                        border: "1px solid hsl(270,20%,20%)",
                        colorScheme: "dark",
                      }}
                    />
                  </div>
                  <div>
                    <label className="font-raleway text-[11px] tracking-[0.2em] uppercase text-[hsl(45,20%,50%)] block mb-1.5">
                      Birth Place *
                    </label>
                    <input
                      name="place"
                      value={form.place}
                      onChange={handleChange}
                      required
                      placeholder="City, Country"
                      className="w-full px-4 py-3 rounded-sm font-raleway text-sm text-[hsl(45,60%,88%)] placeholder-[hsl(45,15%,35%)] outline-none transition-colors"
                      style={{
                        background: "hsl(240,30%,8%)",
                        border: "1px solid hsl(270,20%,20%)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-raleway text-[11px] tracking-[0.2em] uppercase text-[hsl(45,20%,50%)] block mb-1.5">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-sm font-raleway text-sm text-[hsl(45,60%,88%)] outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      background: "hsl(240,30%,8%)",
                      border: "1px solid hsl(270,20%,20%)",
                      colorScheme: "dark",
                    }}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-raleway text-[11px] tracking-[0.2em] uppercase text-[hsl(45,20%,50%)] block mb-1.5">
                    Your Question / Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share what's on your mind..."
                    className="w-full px-4 py-3 rounded-sm font-raleway text-sm text-[hsl(45,60%,88%)] placeholder-[hsl(45,15%,35%)] outline-none resize-none transition-colors"
                    style={{
                      background: "hsl(240,30%,8%)",
                      border: "1px solid hsl(270,20%,20%)",
                    }}
                  />
                </div>

                <button type="submit" className="w-full mystic-btn-filled py-4 text-sm rounded-sm font-cinzel tracking-[0.2em]">
                  Submit My Request ✦
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
