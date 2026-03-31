import { useState } from "react";

const zodiacSigns = [
  { sym: "♈", name: "Aries",       dates: "Mar 21 – Apr 19", element: "Fire",  planet: "Mars",    trait: "Bold & Pioneering" },
  { sym: "♉", name: "Taurus",      dates: "Apr 20 – May 20", element: "Earth", planet: "Venus",   trait: "Stable & Sensual" },
  { sym: "♊", name: "Gemini",      dates: "May 21 – Jun 20", element: "Air",   planet: "Mercury", trait: "Curious & Adaptable" },
  { sym: "♋", name: "Cancer",      dates: "Jun 21 – Jul 22", element: "Water", planet: "Moon",    trait: "Intuitive & Nurturing" },
  { sym: "♌", name: "Leo",         dates: "Jul 23 – Aug 22", element: "Fire",  planet: "Sun",     trait: "Radiant & Generous" },
  { sym: "♍", name: "Virgo",       dates: "Aug 23 – Sep 22", element: "Earth", planet: "Mercury", trait: "Precise & Devoted" },
  { sym: "♎", name: "Libra",       dates: "Sep 23 – Oct 22", element: "Air",   planet: "Venus",   trait: "Harmonious & Just" },
  { sym: "♏", name: "Scorpio",     dates: "Oct 23 – Nov 21", element: "Water", planet: "Mars",    trait: "Intense & Transforming" },
  { sym: "♐", name: "Sagittarius", dates: "Nov 22 – Dec 21", element: "Fire",  planet: "Jupiter", trait: "Free & Philosophical" },
  { sym: "♑", name: "Capricorn",   dates: "Dec 22 – Jan 19", element: "Earth", planet: "Saturn",  trait: "Disciplined & Ambitious" },
  { sym: "♒", name: "Aquarius",    dates: "Jan 20 – Feb 18", element: "Air",   planet: "Saturn",  trait: "Visionary & Humanitarian" },
  { sym: "♓", name: "Pisces",      dates: "Feb 19 – Mar 20", element: "Water", planet: "Jupiter", trait: "Dreamy & Compassionate" },
];

const elementColors: Record<string, { text: string; glow: string }> = {
  Fire:  { text: "hsl(15,80%,62%)",  glow: "hsl(15,80%,55%,0.25)" },
  Earth: { text: "hsl(100,40%,52%)", glow: "hsl(100,40%,45%,0.25)" },
  Air:   { text: "hsl(200,70%,62%)", glow: "hsl(200,70%,55%,0.25)" },
  Water: { text: "hsl(220,65%,62%)", glow: "hsl(220,65%,55%,0.25)" },
};

const SYMBOL_STYLE: React.CSSProperties = {
  fontFamily: "'Noto Sans Symbols 2', serif",
  fontVariantEmoji: "text" as React.CSSProperties["fontVariantEmoji"],
};

const ZodiacSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="zodiac" className="py-24 md:py-32 cosmic-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(270,40%,12%,0.4) 0%, transparent 70%)" }} />

      <div className="max-w-[1480px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <div className="section-badge">✦ The Twelve Houses</div>
          </div>
          <h2 className="section-title mb-4">
            Your <span className="gold-text">Zodiac Sign</span>
          </h2>
          <div className="cosmic-divider max-w-sm mx-auto mb-6">
            <span className="text-[hsl(43,74%,60%)]">✦</span>
          </div>
          <p className="font-raleway text-[hsl(45,20%,60%)] max-w-xl mx-auto text-sm leading-relaxed">
            Each of the twelve signs carries unique cosmic energy. Click your sign to reveal
            its secrets and book a personalised reading.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {zodiacSigns.map((sign, i) => {
            const isActive = active === i;
            const elColor = elementColors[sign.element];
            return (
              <button
                key={sign.name}
                onClick={() => setActive(isActive ? null : i)}
                className="group relative flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-sm text-center transition-all duration-300"
                style={{
                  background: isActive
                    ? "hsl(245,25%,13%,0.95)"
                    : "hsl(245,25%,10%,0.6)",
                  border: isActive
                    ? "1px solid hsl(43,74%,60%,0.55)"
                    : "1px solid hsl(270,20%,18%)",
                  boxShadow: isActive
                    ? `0 0 20px hsl(43,74%,60%,0.12)`
                    : "none",
                }}
              >
                {/* Symbol */}
                <div
                  className="w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: `1px solid ${isActive ? "hsl(43,74%,60%,0.6)" : "hsl(43,74%,60%,0.2)"}`,
                    background: isActive ? "hsl(43,74%,60%,0.1)" : "hsl(43,74%,60%,0.05)",
                    boxShadow: isActive ? `0 0 14px hsl(43,74%,60%,0.2)` : "none",
                  }}
                >
                  <span
                    style={{
                      ...SYMBOL_STYLE,
                      fontSize: "26px",
                      color: isActive ? "hsl(43,74%,72%)" : "hsl(43,60%,58%)",
                      textShadow: isActive ? "0 0 12px hsl(43,74%,60%,0.7)" : "none",
                      lineHeight: 1,
                    }}
                  >
                    {sign.sym}{"\uFE0E"}
                  </span>
                </div>

                {/* Name */}
                <div>
                  <div
                    className="font-cinzel text-sm sm:text-xs font-semibold tracking-wide transition-colors duration-300"
                    style={{ color: isActive ? "hsl(43,74%,75%)" : "hsl(45,50%,80%)" }}
                  >
                    {sign.name}
                  </div>
                  <div className="font-raleway text-[11px] sm:text-[10px] text-[hsl(45,15%,45%)] mt-0.5">
                    {sign.dates}
                  </div>
                </div>

                {/* Element dot */}
                <div
                  className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full"
                  style={{ background: elColor.text }}
                />
              </button>
            );
          })}
        </div>

        {/* Expanded Detail */}
        {active !== null && (
          <div
            className="mt-8 glass-card rounded-sm p-8 max-w-2xl mx-auto text-center"
            style={{ animation: "rise-up 0.35s ease-out" }}
          >
            {/* Big symbol */}
            <div
              style={{
                ...SYMBOL_STYLE,
                fontSize: "64px",
                lineHeight: 1,
                color: "hsl(43,74%,65%)",
                textShadow: "0 0 30px hsl(43,74%,60%,0.5)",
                marginBottom: "12px",
              }}
            >
              {zodiacSigns[active].sym}{"\uFE0E"}
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-[hsl(45,60%,92%)] mb-1">
              {zodiacSigns[active].name}
            </h3>
            <p className="font-raleway text-sm text-[hsl(43,74%,60%)] tracking-wider mb-5">
              {zodiacSigns[active].dates}
            </p>

            <div className="flex items-center justify-center gap-8 mb-7">
              {[
                { label: "Element", value: zodiacSigns[active].element, color: elementColors[zodiacSigns[active].element].text },
                { label: "Planet",  value: zodiacSigns[active].planet,  color: "hsl(43,74%,65%)" },
                { label: "Nature",  value: zodiacSigns[active].trait,   color: "hsl(45,60%,88%)" },
              ].map((item, idx, arr) => (
                <div key={item.label} className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="font-raleway text-[10px] tracking-[0.22em] uppercase text-[hsl(45,20%,45%)] mb-1">
                      {item.label}
                    </div>
                    <div className="font-cinzel text-sm font-semibold" style={{ color: item.color }}>
                      {item.value}
                    </div>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="w-px h-8 bg-[hsl(270,20%,22%)]" />
                  )}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mystic-btn-filled px-8 py-2.5 text-xs rounded-sm inline-block font-cinzel tracking-widest"
            >
              Get {zodiacSigns[active].name} Reading
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ZodiacSection;
