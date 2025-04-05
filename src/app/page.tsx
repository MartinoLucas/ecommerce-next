import Hero from "@components/common/Hero";
import Footer from "@components/common/Footer";
import Navbar from "@components/common/Navbar";
import BenefitsSection from "@components/common/BenefitSection";
import AboutUsSection from "@components/common/sections/AboutUsSection";
import LocationSection from "@components/common/sections/LocationSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <BenefitsSection />
        <AboutUsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
