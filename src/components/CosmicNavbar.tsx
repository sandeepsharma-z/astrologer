import { useState, useEffect } from "react";
import { Menu, X, Star, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Zodiac", href: "#zodiac" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const CosmicNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(240,30%,5%)/0.95] backdrop-blur-xl border-b border-[hsl(43,74%,60%,0.15)] shadow-[0_4px_30px_hsl(270,60%,10%,0.5)]"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "hsla(240,30%,5%,0.95)" : "transparent",
      }}
    >
      <div className="max-w-[1480px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[hsl(43,74%,60%,0.5)] animate-pulse-glow" />
              <Star
                size={20}
                className="text-[hsl(43,74%,60%)] fill-current relative z-10"
              />
            </div>
            <div>
              <div className="font-cinzel text-base font-bold tracking-[0.15em] text-[hsl(45,60%,92%)] leading-none">
                MOHINI KHATIYAN
              </div>
              <div className="font-raleway text-[10px] tracking-[0.3em] uppercase text-[hsl(43,74%,60%)] mt-0.5">
                Astrologist & Psychic
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919108525​57"
              className="flex items-center gap-2 text-sm font-raleway text-[hsl(43,74%,60%)] hover:text-[hsl(45,80%,72%)] transition-colors"
            >
              <Phone size={15} />
              <span className="tracking-wider">+91 91085 2557</span>
            </a>
            <a href="#contact" className="mystic-btn-filled px-6 py-2.5 text-xs rounded-sm">
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[hsl(43,74%,60%)] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "hsla(240,30%,5%,0.98)" }}
      >
        <div className="px-6 py-6 space-y-4 border-t border-[hsl(270,20%,18%)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block nav-link py-2 text-base"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center mystic-btn-filled px-6 py-3 mt-4 text-xs rounded-sm"
            onClick={() => setMobileOpen(false)}
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default CosmicNavbar;
