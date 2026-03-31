import { Shield, Clock, Heart, Zap, Eye, Star } from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Precise & Accurate",
    desc: "Over 95% accuracy rate reported by clients. Every reading backed by deep mathematical calculations and intuitive insight.",
  },
  {
    icon: Shield,
    title: "Strictly Confidential",
    desc: "Your personal details and life situations are held with the utmost privacy and sacred trust.",
  },
  {
    icon: Clock,
    title: "Timely Guidance",
    desc: "Same-day consultations available. Emergency readings for urgent life decisions and crisis moments.",
  },
  {
    icon: Heart,
    title: "Compassionate Approach",
    desc: "We don't instil fear. Every session is empowering, positive, and solution-focused.",
  },
  {
    icon: Star,
    title: "Vedic Authenticity",
    desc: "Rooted in the original Sanskrit texts — Brihat Parashara Hora Shastra, Jataka Parijata, and more.",
  },
  {
    icon: Zap,
    title: "Actionable Remedies",
    desc: "Practical gemstone, mantra, and ritual remedies that work harmoniously with your modern lifestyle.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "hsl(240,35%,4%)" }}>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(270,60%,55%,0.3), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(43,74%,60%,0.2), transparent)" }} />

      {/* Glowing center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(270,50%,20%,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-[1480px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <div className="section-badge">✦ Why Choose Us</div>
          </div>
          <h2 className="section-title mb-4">
            Guided by <span className="gold-text">Cosmic Truth</span>
          </h2>
          <div className="cosmic-divider max-w-sm mx-auto mb-6">
            <span className="text-[hsl(43,74%,60%)]">✦</span>
          </div>
          <p className="font-raleway text-[hsl(45,20%,60%)] max-w-lg mx-auto text-sm leading-relaxed">
            Thousands trust Mohini Khatiyan because every reading is delivered
            with precision, empathy, and unwavering authenticity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative p-7 rounded-sm border border-[hsl(270,20%,18%)] hover:border-[hsl(43,74%,60%,0.3)] transition-all duration-400 overflow-hidden"
              style={{ background: "hsl(245,25%,9%,0.8)" }}
            >
              {/* Number watermark */}
              <div
                className="absolute top-3 right-4 font-cinzel text-5xl font-bold text-[hsl(270,20%,15%)] select-none pointer-events-none"
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 0% 0%, hsl(43,74%,60%,0.06) 0%, transparent 60%)",
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-5"
                style={{
                  background: "hsl(43,74%,60%,0.08)",
                  border: "1px solid hsl(43,74%,60%,0.25)",
                }}
              >
                <Icon size={20} className="text-[hsl(43,74%,60%)]" />
              </div>

              <h3 className="font-cinzel text-base font-semibold text-[hsl(45,60%,90%)] mb-2 tracking-wide">
                {title}
              </h3>
              <p className="font-raleway text-sm text-[hsl(45,15%,56%)] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Center stat banner */}
        <div
          className="mt-14 p-8 rounded-sm text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(270,30%,12%,0.8), hsl(240,30%,8%,0.8))",
            border: "1px solid hsl(43,74%,60%,0.2)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%, hsl(43,74%,60%,0.05) 0%, transparent 70%)",
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "72.4K", label: "Instagram Followers" },
              { val: "979+", label: "Posts & Reels" },
              { val: "4.9/5", label: "Average Rating" },
              { val: "5+", label: "Healing Modalities" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-cinzel text-3xl font-bold gold-shimmer-text mb-1">{s.val}</div>
                <div className="font-raleway text-xs tracking-[0.2em] uppercase text-[hsl(45,20%,50%)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
