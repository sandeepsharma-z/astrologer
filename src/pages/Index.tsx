import CosmicNavbar from "@/components/CosmicNavbar";
import HeroSection from "@/components/HeroSection";
import AboutAstrologer from "@/components/AboutAstrologer";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import ZodiacSection from "@/components/ZodiacSection";
import TarotReveal from "@/components/TarotReveal";
import PricingSection from "@/components/PricingSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationCTA from "@/components/ConsultationCTA";
import CosmicFooter from "@/components/CosmicFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CosmicNavbar />
      <HeroSection />
      <AboutAstrologer />
      <ServicesSection />
      <HowItWorks />
      <ZodiacSection />
      <TarotReveal />
      <PricingSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ConsultationCTA />
      <CosmicFooter />
    </div>
  );
};

export default Index;
