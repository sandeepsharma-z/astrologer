import { useState } from "react";

const tarotCards = [
  {
    name: "The Star",
    number: "XVII",
    symbol: "✦",
    meaning: "Hope, renewal, serenity, inspiration, and divine guidance are flowing into your life.",
    advice: "Trust the universe. A period of healing and bright new beginnings awaits you.",
    energy: "hsl(200,70%,60%)",
    glow: "hsl(200,70%,55%)",
    back: "hsl(220,50%,12%)",
  },
  {
    name: "The Moon",
    number: "XVIII",
    symbol: "☽",
    meaning: "Your intuition is heightened. Hidden truths are surfacing from the subconscious.",
    advice: "Face your fears with courage. What lurks in the shadow holds your greatest power.",
    energy: "hsl(240,60%,70%)",
    glow: "hsl(240,60%,60%)",
    back: "hsl(250,40%,10%)",
  },
  {
    name: "The Sun",
    number: "XIX",
    symbol: "☀",
    meaning: "Radiant success, joy, vitality and abundance are pouring into every area of your life.",
    advice: "Step into your power. This is your moment to shine without hesitation.",
    energy: "hsl(43,80%,62%)",
    glow: "hsl(43,80%,55%)",
    back: "hsl(35,40%,10%)",
  },
  {
    name: "The Wheel",
    number: "X",
    symbol: "⊕",
    meaning: "The great cosmic wheel turns in your favour. Destiny is aligning to your highest good.",
    advice: "Embrace change. Every ending is a sacred doorway to a better beginning.",
    energy: "hsl(270,60%,68%)",
    glow: "hsl(270,60%,55%)",
    back: "hsl(270,35%,10%)",
  },
  {
    name: "The High Priestess",
    number: "II",
    symbol: "☽",
    meaning: "Sacred feminine wisdom speaks. The answers you seek live within your own soul.",
    advice: "Go inward. Silence the outer world and listen deeply to your inner knowing.",
    energy: "hsl(300,50%,65%)",
    glow: "hsl(300,50%,55%)",
    back: "hsl(290,35%,10%)",
  },
  {
    name: "The World",
    number: "XXI",
    symbol: "◎",
    meaning: "Completion, wholeness, and a magnificent new cycle are dawning for you.",
    advice: "Celebrate how far you have come. You are ready for the next great chapter.",
    energy: "hsl(150,55%,55%)",
    glow: "hsl(150,55%,45%)",
    back: "hsl(150,35%,9%)",
  },
];

const TarotReveal = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [shuffling, setShuffling] = useState(false);
  const [revealed, setRevealed] = useState<boolean[]>(Array(6).fill(false));

  const shuffle = () => {
    setShuffling(true);
    setRevealed(Array(6).fill(false));
    setFlipped(null);
    setTimeout(() => setShuffling(false), 700);
  };

  const flipCard = (i: number) => {
    if (shuffling) return;
    const next = [...revealed];
    next[i] = !next[i];
    setRevealed(next);
    setFlipped(next[i] ? i : null);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "hsl(245,30%,5%)" }}>

      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,hsl(43,74%,60%,0.35),transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,hsl(270,60%,55%,0.25),transparent)" }} />

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full -left-40 top-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle,hsl(270,50%,18%,0.2) 0%,transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full -right-32 top-1/3"
          style={{ background: "radial-gradient(circle,hsl(43,74%,40%,0.08) 0%,transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div className="max-w-[1480px] mx-auto px-6 lg:px-16 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <div className="section-badge">✦ Sacred Tarot</div>
          </div>
          <h2 className="section-title mb-4">
            Draw Your <span className="gold-text">Card of the Day</span>
          </h2>
          <div className="cosmic-divider max-w-sm mx-auto mb-6">
            <span className="text-[hsl(43,74%,60%)]">✦</span>
          </div>
          <p className="font-raleway text-[hsl(45,20%,58%)] max-w-lg mx-auto text-sm leading-relaxed mb-8">
            Clear your mind, take a deep breath, and click any card to receive your cosmic message.
          </p>
          <button
            onClick={shuffle}
            className="mystic-btn inline-block px-8 py-2.5 text-xs rounded-sm font-cinzel tracking-[0.2em]"
          >
            <span>✦ Shuffle the Deck ✦</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tarotCards.map((card, i) => (
            <div
              key={card.name}
              onClick={() => flipCard(i)}
              className="cursor-pointer"
              style={{ perspective: "800px" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "165%",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.65s cubic-bezier(0.4,0.2,0.2,1)",
                  transform: revealed[i] ? "rotateY(180deg)" : shuffling ? `rotateY(${(i % 2 === 0 ? 1 : -1) * 360}deg)` : "rotateY(0deg)",
                }}
              >
                {/* Card Back */}
                <div
                  style={{
                    position: "absolute", inset: 0,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    borderRadius: "8px",
                    border: "1px solid hsl(43,74%,60%,0.25)",
                    background: "linear-gradient(160deg,hsl(260,30%,12%) 0%,hsl(240,35%,8%) 100%)",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: "10px",
                    overflow: "hidden",
                  }}
                >
                  {/* Decorative mandala pattern on back */}
                  <div style={{
                    width: "60%", paddingBottom: "60%", position: "relative",
                    border: "1px solid hsl(43,74%,60%,0.3)", borderRadius: "50%",
                  }}>
                    <div style={{
                      position: "absolute", inset: "15%",
                      border: "1px solid hsl(270,60%,55%,0.25)", borderRadius: "50%",
                    }} />
                    <div style={{
                      position: "absolute", inset: "30%",
                      border: "1px solid hsl(43,74%,60%,0.2)", borderRadius: "50%",
                    }} />
                    <div style={{
                      position: "absolute", inset: 0, display: "flex",
                      alignItems: "center", justifyContent: "center",
                      fontSize: "22px", color: "hsl(43,74%,55%)",
                      fontFamily: "serif",
                    }}>✦</div>
                  </div>
                  <span className="font-raleway text-[10px] tracking-[0.25em] uppercase text-[hsl(43,60%,50%)]">
                    Tap to Reveal
                  </span>
                </div>

                {/* Card Front */}
                <div
                  style={{
                    position: "absolute", inset: 0,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: "8px",
                    border: `1px solid ${card.energy}44`,
                    background: `linear-gradient(160deg, ${card.back} 0%, hsl(240,35%,6%) 100%)`,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "space-between",
                    padding: "16px 12px",
                    boxShadow: `0 0 30px ${card.glow}22, inset 0 0 30px ${card.glow}08`,
                    overflow: "hidden",
                  }}
                >
                  {/* Top number */}
                  <div className="font-cinzel text-[10px] tracking-[0.3em]"
                    style={{ color: `${card.energy}` }}>
                    {card.number}
                  </div>

                  {/* Symbol */}
                  <div style={{
                    fontSize: "38px",
                    color: card.energy,
                    textShadow: `0 0 20px ${card.glow}`,
                    fontFamily: "serif",
                    lineHeight: 1,
                  }}>
                    {card.symbol}
                  </div>

                  {/* Name */}
                  <div className="text-center">
                    <div className="font-cinzel text-xs font-semibold tracking-wide mb-1"
                      style={{ color: "hsl(45,60%,90%)" }}>
                      {card.name}
                    </div>
                    {/* Divider */}
                    <div className="w-8 h-px mx-auto mb-2"
                      style={{ background: `linear-gradient(90deg,transparent,${card.energy},transparent)` }} />
                    <p className="font-raleway text-[9px] leading-relaxed text-[hsl(45,15%,55%)] line-clamp-3">
                      {card.meaning}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded message when card flipped */}
        {flipped !== null && revealed[flipped] && (
          <div
            className="mt-10 glass-card rounded-sm p-8 max-w-2xl mx-auto text-center"
            style={{ animation: "rise-up 0.4s ease-out", border: `1px solid ${tarotCards[flipped].energy}33` }}
          >
            <div style={{
              fontSize: "48px", color: tarotCards[flipped].energy,
              textShadow: `0 0 25px ${tarotCards[flipped].glow}`,
              fontFamily: "serif", lineHeight: 1, marginBottom: "12px",
            }}>
              {tarotCards[flipped].symbol}
            </div>
            <div className="font-cinzel text-[10px] tracking-[0.35em] uppercase mb-1"
              style={{ color: tarotCards[flipped].energy }}>
              {tarotCards[flipped].number}
            </div>
            <h3 className="font-cinzel text-xl font-bold text-[hsl(45,60%,92%)] mb-4">
              {tarotCards[flipped].name}
            </h3>
            <p className="font-raleway text-sm text-[hsl(45,20%,65%)] leading-relaxed mb-3">
              {tarotCards[flipped].meaning}
            </p>
            <div className="flex items-center gap-3 justify-center mb-5">
              <div className="h-px flex-1"
                style={{ background: `linear-gradient(90deg,transparent,${tarotCards[flipped].energy}44)` }} />
              <span className="font-raleway text-[10px] tracking-[0.25em] uppercase"
                style={{ color: tarotCards[flipped].energy }}>
                Mohini's Guidance
              </span>
              <div className="h-px flex-1"
                style={{ background: `linear-gradient(90deg,${tarotCards[flipped].energy}44,transparent)` }} />
            </div>
            <p className="font-raleway text-sm italic text-[hsl(45,30%,72%)] leading-relaxed mb-6">
              "{tarotCards[flipped].advice}"
            </p>
            <a href="#contact"
              className="mystic-btn-filled px-8 py-2.5 text-xs rounded-sm inline-block font-cinzel tracking-widest">
              Book a Full Tarot Reading
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TarotReveal;
