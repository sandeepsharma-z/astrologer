const steps = [
  {
    number: "01",
    symbol: "✦",
    title: "Choose Your Reading",
    desc: "Browse Mohini's sacred services — from Numerology corrections and Tarot sessions to Runes, Psychic readings, and Hanuman Healing.",
    detail: "Each service is uniquely tailored to your soul's current journey.",
    color: "hsl(43,74%,60%)",
    glow: "hsl(43,74%,55%)",
  },
  {
    number: "02",
    symbol: "☽",
    title: "Share Your Details",
    desc: "Fill in your birth date, name, and your most pressing question or concern. This sacred information forms the foundation of your reading.",
    detail: "All details are held in complete confidence and sacred trust.",
    color: "hsl(270,60%,65%)",
    glow: "hsl(270,60%,55%)",
  },
  {
    number: "03",
    symbol: "◎",
    title: "Receive Your Session",
    desc: "Connect with Mohini via WhatsApp or video call. She channels cosmic energy and delivers your personalised guidance with deep precision.",
    detail: "Sessions available in Hindi and English, online worldwide.",
    color: "hsl(185,60%,52%)",
    glow: "hsl(185,60%,45%)",
  },
  {
    number: "04",
    symbol: "✺",
    title: "Transform Your Life",
    desc: "Receive actionable remedies — name corrections, lucky numbers, mantras, and healing practices — and step into your highest alignment.",
    detail: "Most clients feel a shift within days of their first session.",
    color: "hsl(150,50%,50%)",
    glow: "hsl(150,50%,42%)",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden cosmic-bg">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,hsl(270,60%,55%,0.3),transparent)" }} />

      {/* Decorative vertical line connecting steps */}
      <div className="absolute left-1/2 -translate-x-1/2 top-48 bottom-48 w-px hidden lg:block"
        style={{ background: "linear-gradient(180deg,transparent,hsl(43,74%,60%,0.15),hsl(43,74%,60%,0.15),transparent)" }} />

      <div className="max-w-[1480px] mx-auto px-6 lg:px-16 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <div className="section-badge">✦ The Sacred Process</div>
          </div>
          <h2 className="section-title mb-4">
            Your Cosmic <span className="gold-text">Journey Begins</span>
          </h2>
          <div className="cosmic-divider max-w-sm mx-auto mb-6">
            <span className="text-[hsl(43,74%,60%)]">✦</span>
          </div>
          <p className="font-raleway text-[hsl(45,20%,58%)] max-w-lg mx-auto text-sm leading-relaxed">
            Four simple steps to unlock the cosmic wisdom that will illuminate
            your path and transform your reality.
          </p>
        </div>

        {/* Steps — alternating left/right on desktop */}
        <div className="space-y-8 lg:space-y-0">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                } lg:mb-16`}
              >
                {/* Content card */}
                <div className={`w-full lg:w-5/12 ${isEven ? "lg:pr-16" : "lg:pl-16"}`}>
                  <div
                    className="relative p-8 rounded-sm group overflow-hidden transition-all duration-400 hover:-translate-y-1 isolate"
                    style={{
                      background: "hsl(245,25%,9%,0.8)",
                      border: `1px solid ${step.color}22`,
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 0% 0%, ${step.glow}0d 0%, transparent 60%)` }}
                    />

                    {/* Step number watermark */}
                    <div
                      className="absolute bottom-2 right-3 font-cinzel font-bold select-none pointer-events-none leading-none -z-10"
                      style={{ fontSize: "56px", lineHeight: 1, opacity: 0.18, WebkitTextStroke: "1px hsl(43,74%,60%)", color: "transparent" }}
                    >
                      {step.number}
                    </div>

                    {/* Step badge */}
                    <div className="relative z-10 flex items-center gap-3 mb-4">
                      <div
                        className="w-8 h-8 rounded-sm flex items-center justify-center font-cinzel text-xs font-bold shrink-0"
                        style={{
                          background: `${step.color}15`,
                          border: `1px solid ${step.color}44`,
                          color: step.color,
                        }}
                      >
                        {step.number}
                      </div>
                      <div className="h-px flex-1"
                        style={{ background: `linear-gradient(90deg,${step.color}44,transparent)` }} />
                    </div>

                    <h3 className="relative z-10 font-cinzel text-lg font-semibold text-[hsl(45,60%,92%)] mb-3 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="relative z-10 font-raleway text-sm text-[hsl(45,15%,58%)] leading-relaxed mb-3">
                      {step.desc}
                    </p>
                    <p className="relative z-10 font-raleway text-xs italic"
                      style={{ color: step.color }}>
                      ✦ {step.detail}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden lg:flex w-2/12 justify-center items-center relative z-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: `${step.color}10`,
                      border: `2px solid ${step.color}55`,
                      boxShadow: `0 0 25px ${step.glow}33, 0 0 50px ${step.glow}11`,
                      fontSize: "24px",
                      color: step.color,
                      fontFamily: "serif",
                      textShadow: `0 0 15px ${step.glow}`,
                    }}
                  >
                    {step.symbol}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block w-5/12" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="#contact"
            className="mystic-btn-filled px-12 py-4 text-sm rounded-sm inline-block font-cinzel tracking-[0.2em]">
            Begin My Journey ✦
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
