import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CasesSection from "@/components/CasesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <HowWeWorkSection />
      <CasesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
