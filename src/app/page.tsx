import Hero from "@components/common/Hero";
import Footer from "@components/common/Footer";
import Navbar from "@components/common/Navbar";
import BenefitsSection from "@components/common/BenefitSection";
import AboutUsSection from "@components/common/sections/AboutUsSection";
import FourClubSection from "@components/common/sections/FourClubSection";
import LocationSection from "@components/common/sections/LocationSection";
import FeaturedWines from "@components/common/sections/FeaturedWines";
import BenefitsSectionCopy from "@components/common/sections/BenefitSectionCopy";

export default function Home() {
  return (
    <div className="mt-4">
      <Navbar />
      <Hero />
      <BenefitsSection />
      <AboutUsSection />
      <FourClubSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
