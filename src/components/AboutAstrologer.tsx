import { Award, Hash, Shuffle, Star, Users, Zap } from "lucide-react";

const credentials = [
  { icon: Award, label: "Certified Numerologist", sub: "Name · Mobile · Business Correction" },
  { icon: Shuffle, label: "Tarot & Dice Reader", sub: "Deep Past, Present & Future Insights" },
  { icon: Star, label: "Runes Practitioner", sub: "Ancient Norse Divination" },
  { icon: Zap, label: "Hanuman Healer", sub: "Spiritual Healing & Energy Work" },
  { icon: Hash, label: "Psychic Consultant", sub: "Intuitive Guidance & Clarity" },
  { icon: Users, label: "72.4K+ Community", sub: "@healingssbymohini" },
];

const AboutAstrologer = () => {
  return (
    <section id="about" className="py-24 md:py-32 cosmic-bg relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(270,60%,25%,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-[1480px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image / Visual */}
          <div className="relative flex justify-center">
            {/* Decorative rings */}
            <div className="absolute w-[560px] h-[560px] rounded-full border border-[hsl(43,74%,60%,0.12)]"
              style={{ animation: "spin-slow 35s linear infinite" }} />
            <div className="absolute w-[480px] h-[480px] rounded-full border border-[hsl(270,60%,55%,0.1)]"
              style={{ animation: "spin-slow 25s linear infinite reverse" }} />

            {/* Portrait — Real Image */}
            <div className="relative w-[380px] h-[520px] rounded-sm overflow-hidden"
              style={{ border: "1px solid hsl(43,74%,60%,0.35)", boxShadow: "0 0 60px hsl(270,60%,20%,0.5)" }}>
              <img
                src="/mohini.jpg"
                alt="Mohini Khatiyan"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle gradient overlay at bottom for name */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{
                  background: "linear-gradient(to top, hsl(240,35%,5%,0.92) 0%, transparent 100%)",
                }}
              >
                <p className="font-cinzel text-base font-semibold text-[hsl(43,74%,65%)]">Mohini Khatiyan</p>
                <p className="font-raleway text-[10px] tracking-widest uppercase text-[hsl(45,30%,60%)]">
                  Astrologist & Psychic
                </p>
              </div>
              {/* Gold border overlay */}
              <div className="absolute inset-0 border border-[hsl(43,74%,60%,0.3)] pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 glass-card rounded-sm px-5 py-3"
              style={{ animation: "float-slow 5s ease-in-out infinite" }}
            >
              <div className="font-cinzel text-2xl font-bold gold-text">72.4K</div>
              <div className="font-raleway text-[10px] tracking-widest uppercase text-[hsl(45,30%,55%)]">
                Followers
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <div className="section-badge mb-5">✦ About Mohini</div>
            <h2 className="section-title mb-6">
              Healing Souls,{" "}
              <span className="gold-text">Guiding Lives</span>
            </h2>
            <div className="cosmic-divider mb-8">
              <span className="text-[hsl(43,74%,60%)]">✦</span>
            </div>

            <div className="space-y-4 font-raleway text-[hsl(45,20%,65%)] leading-relaxed text-base">
              <p>
                Mohini Khatiyan is a gifted Astrologist, Psychic, and Healer with a deeply devoted
                following of over 72,000 souls on Instagram. Known as <span className="text-[hsl(43,74%,65%)]">@healingssbymohini</span>, she
                channels divine energy to bring clarity, healing, and transformation into people's lives.
              </p>
              <p>
                As a Certified Numerologist, she specialises in powerful Name, Mobile Number &
                Business Name corrections that shift energy and attract abundance. Her Tarot & Dice
                readings and Rune consultations unlock deep insights into your past, present, and future.
              </p>
              <p>
                A devoted Hanuman Healer, Mohini combines spiritual healing with psychic intuition
                to help you break through blocks, find your true path, and step into your highest self.
                DM her for consultation and collabs.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10">
              {credentials.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2.5 p-4 cosmic-card rounded-sm group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "hsl(43,74%,60%,0.1)",
                      border: "1px solid hsl(43,74%,60%,0.3)",
                    }}
                  >
                    <Icon size={16} className="text-[hsl(43,74%,60%)]" />
                  </div>
                  <div>
                    <div className="font-cinzel text-[11px] font-semibold text-[hsl(45,60%,88%)] leading-snug">
                      {label}
                    </div>
                    <div className="font-raleway text-[10px] text-[hsl(45,20%,55%)] mt-0.5 leading-relaxed">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAstrologer;
