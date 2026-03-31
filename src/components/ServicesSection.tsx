import { Moon, Sun, Hash, Shuffle, Heart, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Hash,
    symbol: "∑",
    title: "Numerology Correction",
    desc: "Powerful Name, Mobile Number & Business Name corrections to align your personal vibration with abundance, success and positive energy.",
    color: "hsl(43, 74%, 60%)",
    glow: "hsl(43, 74%, 60%, 0.15)",
    highlight: "Most Popular",
  },
  {
    icon: Shuffle,
    symbol: "🂠",
    title: "Tarot & Dice Reading",
    desc: "Sacred tarot spreads combined with dice divination to reveal hidden truths, energies at play, and the most probable path forward.",
    color: "hsl(270, 60%, 65%)",
    glow: "hsl(270, 60%, 55%, 0.15)",
    highlight: null,
  },
  {
    icon: Moon,
    symbol: "ᚱ",
    title: "Runes Reading",
    desc: "Ancient Norse rune divination to tap into powerful cosmic forces and gain deep clarity on your life's journey and decisions.",
    color: "hsl(185, 60%, 50%)",
    glow: "hsl(185, 60%, 45%, 0.15)",
    highlight: null,
  },
  {
    icon: Zap,
    symbol: "॥",
    title: "Hanuman Healing",
    desc: "Spiritual energy healing invoking the power of Lord Hanuman — remove blocks, cleanse negativity, and restore divine balance.",
    color: "hsl(30, 80%, 55%)",
    glow: "hsl(30, 80%, 55%, 0.15)",
    highlight: null,
  },
  {
    icon: Sun,
    symbol: "☽",
    title: "Psychic Consultation",
    desc: "Intuitive psychic readings to uncover what lies beneath the surface — past karmas, present influences, and future possibilities.",
    color: "hsl(320, 55%, 60%)",
    glow: "hsl(320, 55%, 55%, 0.15)",
    highlight: null,
  },
  {
    icon: Heart,
    symbol: "✦",
    title: "Collab & DM Consultation",
    desc: "Open for consultation collaborations, brand partnerships, and healing workshops. DM @healingssbymohini to connect.",
    color: "hsl(150, 50%, 45%)",
    glow: "hsl(150, 50%, 45%, 0.15)",
    highlight: null,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "hsl(240,35%,4%)" }}>

      {/* Decorative top edge */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(43,74%,60%,0.3), transparent)" }} />

      {/* Background glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(270,60%,20%,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-[1480px] mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <div className="section-badge">✦ Sacred Services</div>
          </div>
          <h2 className="section-title mb-4">
            Cosmic <span className="gold-text">Consultations</span>
          </h2>
          <div className="cosmic-divider max-w-sm mx-auto mb-6">
            <span className="text-[hsl(43,74%,60%)]">✦</span>
          </div>
          <p className="font-raleway text-[hsl(45,20%,60%)] max-w-xl mx-auto text-base leading-relaxed">
            From birth charts to business timing, each service is conducted with sacred intent,
            deep knowledge, and compassionate guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="cosmic-card rounded-sm p-7 group cursor-pointer relative overflow-hidden"
            >
              {/* Highlight badge */}
              {svc.highlight && (
                <div
                  className="absolute top-4 right-4 text-[10px] font-raleway font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm"
                  style={{
                    background: "hsl(43,74%,60%,0.15)",
                    color: "hsl(43,74%,60%)",
                    border: "1px solid hsl(43,74%,60%,0.3)",
                  }}
                >
                  {svc.highlight}
                </div>
              )}

              {/* Hover glow bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${svc.glow} 0%, transparent 60%)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-sm flex items-center justify-center mb-5 relative"
                style={{
                  background: svc.glow,
                  border: `1px solid ${svc.color}33`,
                }}
              >
                <span
                  className="font-cinzel text-2xl font-bold"
                  style={{ color: svc.color }}
                >
                  {svc.symbol}
                </span>
              </div>

              <h3
                className="font-cinzel text-lg font-semibold mb-3 tracking-wide"
                style={{ color: "hsl(45,60%,92%)" }}
              >
                {svc.title}
              </h3>

              <p className="font-raleway text-sm text-[hsl(45,15%,58%)] leading-relaxed mb-6">
                {svc.desc}
              </p>

              <div
                className="flex items-center gap-2 text-sm font-raleway font-medium tracking-wider uppercase"
                style={{ color: svc.color }}
              >
                <span className="text-xs">Book Now</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-raleway text-sm text-[hsl(45,20%,55%)] mb-5">
            Not sure which service is right for you? Let's have a free 10-minute discovery call.
          </p>
          <a href="#contact" className="mystic-btn inline-block px-10 py-3 rounded-sm text-xs">
            <span className="font-cinzel tracking-[0.25em]">Start Your Journey</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
