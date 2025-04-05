import { FOUR_CLUB } from "@shared/constants";
import WaveDivider from "../WaveDivider";

const FourClubSection = () => (
  <section className="bg-secondary-light px-6 md:px-12 text-primary pt-16 pb-48 relative shadow-high-bottom">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">{FOUR_CLUB.title}</h2>
      <p className="text-base md:text-lg mb-6 text-primary-light">{FOUR_CLUB.description}</p>
      <button className="bg-primary text-secondary font-semibold px-6 py-3 md:px-8 md:py-3 rounded-lg shadow-high-bottom hover:bg-primary-dark transition">
        {FOUR_CLUB.cta}
      </button>
    </div>
    <WaveDivider />
  </section>
);

export default FourClubSection;
