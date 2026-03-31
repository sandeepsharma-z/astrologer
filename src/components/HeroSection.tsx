import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const TYPES = ["star-twinkle", "star-blink", "star-glow"] as const;

const STARS = Array.from({ length: 160 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  // glow stars bigger, blink stars tiny, twinkle medium
  size: Math.random() * 2.2 + 0.5,
  duration: (Math.random() * 3 + 1.5).toFixed(2),
  delay: (Math.random() * 6).toFixed(2),
  type: TYPES[i % 3],
  // gold-tinted stars occasionally
  golden: i % 11 === 0,
}));

// 12 zodiac signs with unicode symbols and names
const ZODIAC = [
  { sym: "♈", name: "Aries" },
  { sym: "♉", name: "Taurus" },
  { sym: "♊", name: "Gemini" },
  { sym: "♋", name: "Cancer" },
  { sym: "♌", name: "Leo" },
  { sym: "♍", name: "Virgo" },
  { sym: "♎", name: "Libra" },
  { sym: "♏", name: "Scorpio" },
  { sym: "♐", name: "Sagittarius" },
  { sym: "♑", name: "Capricorn" },
  { sym: "♒", name: "Aquarius" },
  { sym: "♓", name: "Pisces" },
];

const ORBIT_RADIUS = 148; // px — half of 320px ring minus icon size

const HeroSection = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      wrapperRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-cosmic-bg pt-28"
    >
      {/* Animated Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full ${star.type}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: star.golden ? "hsl(43,80%,80%)" : "white",
              "--dur": `${star.duration}s`,
              "--delay": `${star.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Nebula blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270,60%,40%) 0%, transparent 70%)",
            top: "10%", left: "5%",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(220,60%,40%) 0%, transparent 70%)",
            bottom: "10%", right: "5%",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* ── Zodiac Orbit Ring ── */}
      <div
        className="absolute right-10 top-[58%] -translate-y-1/2 hidden xl:block"
        style={{ perspective: "800px" }}
      >
        <div
          ref={wrapperRef}
          style={{ transition: "transform 0.15s ease-out", width: "320px", height: "320px", position: "relative" }}
        >
          {/* Outer ring border (static visual) */}
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: "1px solid hsl(43,74%,60%,0.28)" }}
          />

          {/* Orbiting container — this spins, carrying all icons with it */}
          <div
            className="absolute inset-0"
            style={{ animation: "spin-slow 40s linear infinite" }}
          >
            {ZODIAC.map((z, i) => {
              const angleDeg = (i / 12) * 360;
              return (
                <div
                  key={z.name}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "28px",
                    height: "28px",
                    marginTop: "-14px",
                    marginLeft: "-14px",
                    transform: `rotate(${angleDeg}deg) translateX(${ORBIT_RADIUS}px)`,
                  }}
                >
                  {/* Counter-rotate so glyph stays upright as it orbits */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      animation: "spin-slow 40s linear infinite reverse",
                      /* Circular gold border */
                      borderRadius: "50%",
                      border: "1px solid hsl(43,74%,60%,0.55)",
                      background: "hsl(43,74%,60%,0.07)",
                      boxShadow: "0 0 8px hsl(43,74%,60%,0.15)",
                      /* Force text (non-emoji) rendering */
                      fontFamily: "'Noto Sans Symbols 2', serif",
                      fontVariantEmoji: "text" as React.CSSProperties["fontVariantEmoji"],
                      fontSize: "15px",
                      color: "hsl(43,74%,74%)",
                      lineHeight: 1,
                      textShadow: "0 0 8px hsl(43,74%,60%,0.6)",
                    } as React.CSSProperties}
                    title={z.name}
                  >
                    {z.sym}{"\uFE0E"}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Middle ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: "40px",
              border: "1px solid hsl(270,60%,55%,0.16)",
              animation: "spin-slow 30s linear infinite reverse",
            }}
          />

          {/* Inner ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: "80px",
              border: "1px solid hsl(43,74%,60%,0.14)",
              animation: "spin-slow 20s linear infinite",
            }}
          />

          {/* Centre glow */}
          <div
            className="absolute rounded-full"
            style={{
              inset: "110px",
              background: "radial-gradient(circle, hsl(43,74%,60%,0.18) 0%, transparent 70%)",
              animation: "pulse-glow 4s ease-in-out infinite",
            }}
          />

          {/* Center icon — Astrological Sun symbol SVG */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "hsl(43,74%,60%,0.07)",
                border: "1px solid hsl(43,74%,60%,0.45)",
                boxShadow: "0 0 30px hsl(43,74%,60%,0.25), inset 0 0 20px hsl(43,74%,60%,0.06)",
              }}
            >
              {/* Classic astrological sun: circle with dot — ☀ as SVG for full color control */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer circle */}
                <circle cx="16" cy="16" r="10" stroke="hsl(43,74%,68%)" strokeWidth="1.5" fill="none" />
                {/* Center dot */}
                <circle cx="16" cy="16" r="2.5" fill="hsl(43,74%,68%)" />
                {/* 8 rays */}
                {[0,45,90,135,180,225,270,315].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const x1 = 16 + 12 * Math.cos(rad);
                  const y1 = 16 + 12 * Math.sin(rad);
                  const x2 = 16 + 15 * Math.cos(rad);
                  const y2 = 16 + 15 * Math.sin(rad);
                  return (
                    <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="hsl(43,74%,68%)" strokeWidth="1.5" strokeLinecap="round" />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="section-badge">
            <span>✦</span>
            <span>Certified Numerologist • Tarot & Dice Reader • Runes</span>
            <span>✦</span>
          </div>
        </div>

        <p
          className="font-raleway text-sm md:text-base tracking-[0.4em] uppercase text-[hsl(43,74%,60%)] mb-4"
          style={{ textShadow: "0 0 20px hsl(43,74%,60%,0.5)" }}
        >
          Astrologist & Psychic · Hanuman Healer
        </p>

        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[hsl(45,60%,92%)] leading-tight mb-4 tracking-wide">
          Unlock the{" "}
          <span className="gold-shimmer-text">Secrets</span>
          <br />
          of the{" "}
          <span className="gold-shimmer-text">Cosmos</span>
        </h1>

        <div className="cosmic-divider my-6 max-w-xs mx-auto">
          <span className="text-[hsl(43,74%,60%)] text-lg">✦</span>
        </div>

        <p className="font-raleway text-base md:text-lg text-[hsl(45,30%,70%)] max-w-2xl mx-auto leading-relaxed mb-10">
          Numerology, Tarot, Runes & Psychic healing — Mohini Khatiyan channels cosmic
          energy to guide your Name, Mobile & Business corrections and transform your life
          with divine clarity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#contact" className="mystic-btn-filled px-10 py-4 text-sm rounded-sm font-cinzel tracking-widest">
            Book Your Reading
          </a>
          <a href="#services" className="mystic-btn px-10 py-4 text-sm rounded-sm font-cinzel tracking-widest">
            <span>Explore Services</span>
          </a>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-8 md:gap-16 pt-8 border-t border-[hsl(270,20%,18%)]">
          {[
            { value: "72.4K", label: "Instagram Followers" },
            { value: "979+", label: "Posts & Reels" },
            { value: "4.9★", label: "Client Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cinzel text-2xl md:text-3xl font-bold gold-text">{stat.value}</div>
              <div className="font-raleway text-xs tracking-[0.2em] uppercase text-[hsl(45,20%,55%)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator — below stats, not overlapping */}
      <a
        href="#about"
        className="relative z-10 flex flex-col items-center gap-1 text-[hsl(43,74%,60%)] opacity-50 hover:opacity-90 transition-opacity mt-10 mb-6"
        style={{ animation: "float-slow 3s ease-in-out infinite" }}
      >
        <span className="font-raleway text-[9px] tracking-[0.35em] uppercase">Scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
};

export default HeroSection;
