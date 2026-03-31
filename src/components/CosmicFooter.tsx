import { Star, Phone, Mail, MapPin, Instagram, Youtube, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  Services: ["Numerology Correction", "Tarot & Dice Reading", "Runes Reading", "Hanuman Healing", "Psychic Consultation", "Collab & DM"],
  Quick: ["About Mohini Ji", "Zodiac Signs", "Testimonials", "FAQs", "Blog", "Contact"],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/healingssbymohini/" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
];

const CosmicFooter = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "hsl(240,40%,3%)" }}
    >
      {/* Top border */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, hsl(43,74%,60%,0.4), hsl(270,60%,55%,0.3), transparent)" }}
      />

      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(270,50%,15%,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-[1480px] mx-auto px-6 lg:px-16 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ border: "1px solid hsl(43,74%,60%,0.4)", background: "hsl(43,74%,60%,0.08)" }}
              >
                <Star size={18} className="text-[hsl(43,74%,60%)] fill-current" />
              </div>
              <div>
                <div className="font-cinzel text-sm font-bold tracking-[0.15em] text-[hsl(45,60%,92%)]">
                  MOHINI KHATIYAN
                </div>
                <div className="font-raleway text-[9px] tracking-[0.3em] uppercase text-[hsl(43,74%,60%)]">
                  Vedic Astrologer
                </div>
              </div>
            </div>

            <p className="font-raleway text-xs text-[hsl(45,15%,50%)] leading-relaxed mb-6">
              Certified Numerologist, Tarot & Dice Reader, Runes Practitioner & Hanuman Healer.
              72.4K+ souls guided on their cosmic journey.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-8 h-8 rounded-sm flex items-center justify-center text-[hsl(45,20%,50%)] hover:text-[hsl(43,74%,60%)] hover:border-[hsl(43,74%,60%,0.4)] transition-all"
                  style={{ border: "1px solid hsl(270,20%,18%)", background: "hsl(245,25%,9%,0.5)" }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-cinzel text-xs font-semibold tracking-[0.25em] uppercase text-[hsl(43,74%,60%)] mb-5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-raleway text-xs text-[hsl(45,15%,50%)] hover:text-[hsl(43,74%,60%)] transition-colors flex items-center gap-2 group"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-[hsl(270,20%,25%)] group-hover:bg-[hsl(43,74%,60%)] transition-colors"
                      />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-xs font-semibold tracking-[0.25em] uppercase text-[hsl(43,74%,60%)] mb-5">
              Get in Touch
            </h4>
            <div className="space-y-3">
              {[
                { icon: Phone, text: "+91 91085 2557" },
                { icon: Mail, text: "@healingssbymohini\n(Instagram)" },
                { icon: MapPin, text: "India\n(Online consultations worldwide)" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={13} className="text-[hsl(43,74%,60%)] mt-0.5 shrink-0" />
                  <span className="font-raleway text-xs text-[hsl(45,15%,50%)] leading-relaxed whitespace-pre-line">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div
              className="mt-5 p-3 rounded-sm"
              style={{ background: "hsl(43,74%,60%,0.05)", border: "1px solid hsl(43,74%,60%,0.12)" }}
            >
              <div className="font-cinzel text-[10px] tracking-widest uppercase text-[hsl(43,74%,60%)] mb-1">
                Consultation Hours
              </div>
              <div className="font-raleway text-[11px] text-[hsl(45,15%,55%)]">
                Mon – Sat: 9:00 AM – 8:00 PM IST
              </div>
              <div className="font-raleway text-[11px] text-[hsl(45,15%,55%)]">
                Sunday: 10:00 AM – 4:00 PM IST
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{ background: "linear-gradient(90deg, transparent, hsl(270,20%,18%), transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-raleway text-[11px] text-[hsl(45,15%,40%)]">
            © 2025 Mohini Khatiyan — Astrologist & Psychic. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-raleway text-[11px] text-[hsl(45,15%,40%)] hover:text-[hsl(43,74%,60%)] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CosmicFooter;
