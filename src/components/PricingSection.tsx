import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Seeker",
    subtitle: "First Step into the Cosmos",
    price: "₹499",
    duration: "30 min session",
    color: "hsl(185,60%,52%)",
    glow: "hsl(185,60%,45%)",
    border: "hsl(185,60%,52%,0.3)",
    bg: "hsl(185,40%,8%,0.5)",
    popular: false,
    features: [
      "One service of your choice",
      "30-minute WhatsApp / Voice call",
      "Name or Mobile number check",
      "Basic numerology insight",
      "Written summary on WhatsApp",
    ],
    cta: "Get Started",
  },
  {
    name: "Cosmic",
    subtitle: "Most Chosen by Seekers",
    price: "₹999",
    duration: "60 min session",
    color: "hsl(43,74%,60%)",
    glow: "hsl(43,74%,55%)",
    border: "hsl(43,74%,60%,0.55)",
    bg: "hsl(35,30%,8%,0.7)",
    popular: true,
    features: [
      "Any 2 services combined",
      "60-minute video consultation",
      "Full Tarot OR Runes reading",
      "Name + Mobile correction",
      "Lucky number & colour guide",
      "Follow-up on WhatsApp (7 days)",
    ],
    cta: "Book Cosmic Session",
  },
  {
    name: "Divine",
    subtitle: "Complete Transformation",
    price: "₹1999",
    duration: "90 min + follow-up",
    color: "hsl(270,60%,65%)",
    glow: "hsl(270,60%,55%)",
    border: "hsl(270,60%,65%,0.35)",
    bg: "hsl(270,30%,8%,0.5)",
    popular: false,
    features: [
      "All services included",
      "90-minute deep-dive session",
      "Tarot + Runes + Numerology",
      "Hanuman Healing ritual",
      "Business name correction",
      "Personalised mantra & remedy",
      "30-day WhatsApp support",
    ],
    cta: "Transform My Life",
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "hsl(240,35%,4%)" }}>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,hsl(43,74%,60%,0.3),transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,hsl(270,60%,55%,0.2),transparent)" }} />

      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle,hsl(270,40%,15%,0.12) 0%,transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="max-w-[1480px] mx-auto px-6 lg:px-16 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <div className="section-badge">✦ Sacred Offerings</div>
          </div>
          <h2 className="section-title mb-4">
            Choose Your <span className="gold-text">Sacred Package</span>
          </h2>
          <div className="cosmic-divider max-w-sm mx-auto mb-6">
            <span className="text-[hsl(43,74%,60%)]">✦</span>
          </div>
          <p className="font-raleway text-[hsl(45,20%,58%)] max-w-lg mx-auto text-sm leading-relaxed">
            Every soul deserves clarity. Choose the package that resonates with
            your journey and let the cosmos guide you home.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-sm overflow-hidden transition-all duration-400 hover:-translate-y-2 group"
              style={{
                background: plan.popular
                  ? `linear-gradient(160deg, hsl(35,30%,10%) 0%, hsl(240,35%,7%) 100%)`
                  : `linear-gradient(160deg, hsl(245,25%,9%) 0%, hsl(240,35%,6%) 100%)`,
                border: `1px solid ${plan.border}`,
                boxShadow: plan.popular
                  ? `0 0 40px ${plan.glow}20, 0 0 80px ${plan.glow}08`
                  : "none",
                marginTop: plan.popular ? "0" : "16px",
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 py-1.5 text-center font-raleway text-[10px] tracking-[0.25em] uppercase font-semibold flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(90deg, ${plan.color}22, ${plan.color}44, ${plan.color}22)`,
                    color: plan.color,
                    borderBottom: `1px solid ${plan.border}`,
                  }}
                >
                  <Sparkles size={10} />
                  Most Popular
                  <Sparkles size={10} />
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "pt-12" : ""}`}>
                {/* Plan name */}
                <div className="mb-6">
                  <div
                    className="font-raleway text-[10px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: plan.color }}
                  >
                    {plan.subtitle}
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-[hsl(45,60%,92%)] tracking-wide">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-end gap-1">
                    <span
                      className="font-cinzel text-5xl font-bold"
                      style={{ color: plan.color, textShadow: `0 0 20px ${plan.glow}44` }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <div className="font-raleway text-xs text-[hsl(45,15%,45%)] mt-1 tracking-wider">
                    {plan.duration}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px"
                  style={{ background: `linear-gradient(90deg,${plan.color}33,transparent)` }} />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${plan.color}18`, border: `1px solid ${plan.color}44` }}
                      >
                        <Check size={9} style={{ color: plan.color }} />
                      </div>
                      <span className="font-raleway text-xs text-[hsl(45,15%,60%)] leading-relaxed">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-3.5 rounded-sm font-cinzel text-xs tracking-[0.2em] transition-all duration-300 ${
                    plan.popular ? "mystic-btn-filled" : "mystic-btn"
                  }`}
                  style={
                    !plan.popular
                      ? { borderColor: `${plan.color}55`, color: plan.color }
                      : {}
                  }
                >
                  {plan.popular ? (
                    plan.cta
                  ) : (
                    <span>{plan.cta}</span>
                  )}
                </a>
              </div>

              {/* Bottom glow bar */}
              <div
                className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `linear-gradient(90deg,transparent,${plan.color},transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center font-raleway text-xs text-[hsl(45,15%,40%)] mt-10">
          ✦ All prices are indicative. Final pricing discussed during consultation. Custom packages available on request. ✦
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
