import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Malhotra",
    role: "Entrepreneur, Mumbai",
    rating: 5,
    text: "Mohini Ji predicted the exact timing of my business expansion — six months before it happened! Her Numerology reading changed my entire perspective on life. The clarity and peace of mind I received is beyond words.",
    sign: "♌ Leo",
  },
  {
    name: "Rajesh Kumar",
    role: "Software Engineer, Bengaluru",
    rating: 5,
    text: "I was skeptical at first, but the accuracy of Mohini Ji's Tarot reading about my career shift was uncanny. Every detail was spot on. Her psychic insight is truly remarkable — I now consult her every year without fail.",
    sign: "♐ Sagittarius",
  },
  {
    name: "Anita Sharma",
    role: "Teacher, Delhi",
    rating: 5,
    text: "After years of uncertainty, Mohini Ji gave me the clarity I needed. Her Runes reading for my daughter's future was incredibly accurate. The remedies she suggested worked beautifully within weeks.",
    sign: "♋ Cancer",
  },
  {
    name: "Vikram Singh",
    role: "Doctor, Jaipur",
    rating: 5,
    text: "Mohini Ji's Hanuman Healing session transformed my family completely. Within weeks of her remedies, positivity returned to our home. Her spiritual energy and psychic guidance is unlike anything I have experienced before.",
    sign: "♏ Scorpio",
  },
  {
    name: "Meera Patel",
    role: "Fashion Designer, Ahmedabad",
    rating: 5,
    text: "I've followed @healingssbymohini for years and finally booked a session. Her Tarot & Dice reading was mind-blowing — she described my exact situation without me saying a word. Truly a gifted psychic.",
    sign: "♎ Libra",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = (dir: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const visible = [
    (current - 1 + testimonials.length) % testimonials.length,
    current,
    (current + 1) % testimonials.length,
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 cosmic-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(43,74%,60%,0.3), transparent)" }} />

      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(270,50%,20%,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-[1480px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <div className="section-badge">✦ Voices of Transformation</div>
          </div>
          <h2 className="section-title mb-4">
            What Our <span className="gold-text">Seekers Say</span>
          </h2>
          <div className="cosmic-divider max-w-sm mx-auto">
            <span className="text-[hsl(43,74%,60%)]">✦</span>
          </div>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {visible.map((idx, pos) => {
              const t = testimonials[idx];
              const isCenter = pos === 1;
              return (
                <div
                  key={idx}
                  className={`cosmic-card rounded-sm p-7 transition-all duration-500 relative ${
                    isCenter
                      ? "scale-105 border-[hsl(43,74%,60%,0.35)] shadow-[0_0_40px_hsl(43,74%,60%,0.1)]"
                      : "opacity-60"
                  }`}
                  style={{
                    opacity: isAnimating ? 0.7 : isCenter ? 1 : 0.6,
                  }}
                >
                  {/* Quote icon */}
                  <Quote
                    size={28}
                    className="text-[hsl(43,74%,60%)] opacity-30 mb-4"
                    style={{ transform: "rotate(180deg)" }}
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} size={12} className="text-[hsl(43,74%,60%)] fill-current" />
                    ))}
                  </div>

                  <p className="font-raleway text-sm text-[hsl(45,20%,65%)] leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[hsl(270,20%,18%)]">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-cinzel text-base"
                      style={{
                        background: "hsl(43,74%,60%,0.1)",
                        border: "1px solid hsl(43,74%,60%,0.3)",
                        color: "hsl(43,74%,60%)",
                      }}
                    >
                      {t.sign.split(" ")[0]}
                    </div>
                    <div>
                      <div className="font-cinzel text-xs font-semibold text-[hsl(45,60%,88%)]">{t.name}</div>
                      <div className="font-raleway text-[11px] text-[hsl(45,15%,50%)]">{t.role}</div>
                    </div>
                    <div className="ml-auto font-raleway text-[11px] text-[hsl(43,74%,60%)]">{t.sign}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <div className="cosmic-card rounded-sm p-7">
              <Quote
                size={28}
                className="text-[hsl(43,74%,60%)] opacity-30 mb-4"
                style={{ transform: "rotate(180deg)" }}
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={12} className="text-[hsl(43,74%,60%)] fill-current" />
                ))}
              </div>
              <p className="font-raleway text-sm text-[hsl(45,20%,65%)] leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[hsl(270,20%,18%)]">
                <div className="font-cinzel text-xs font-semibold text-[hsl(45,60%,88%)]">
                  {testimonials[current].name}
                </div>
                <div className="ml-auto font-raleway text-[11px] text-[hsl(43,74%,60%)]">
                  {testimonials[current].sign}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-[hsl(43,74%,60%,0.3)] text-[hsl(43,74%,60%)] flex items-center justify-center hover:border-[hsl(43,74%,60%)] hover:bg-[hsl(43,74%,60%,0.08)] transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-6 h-1.5 bg-[hsl(43,74%,60%)]"
                      : "w-1.5 h-1.5 bg-[hsl(270,20%,30%)] hover:bg-[hsl(43,74%,60%,0.5)]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-[hsl(43,74%,60%,0.3)] text-[hsl(43,74%,60%)] flex items-center justify-center hover:border-[hsl(43,74%,60%)] hover:bg-[hsl(43,74%,60%,0.08)] transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
