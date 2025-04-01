import Hero from "@components/common/Hero";
import Footer from "@components/common/Footer";
import Navbar from "@components/common/Navbar";
import BenefitsSection from "@components/common/BenefitSection";

export default function Home() {
  return (
    <div className="mt-4">
      <Navbar />
      <Hero />
      <BenefitsSection />
      <Footer />
    </div>
  );
}
