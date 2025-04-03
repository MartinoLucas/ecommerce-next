import { ABOUT_US } from "@shared/constants";
import WaveDivider from "../WaveDivider";


const AboutUsSection = () => (
  <section className="bg-secondary text-primary px-6 md:px-12 pt-16 pb-48 relative shadow-high-bottom">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">{ABOUT_US.title}</h2>
      <p className="text-base md:text-lg leading-relaxed text-primary-light text-center">{ABOUT_US.description}</p>
    </div>
    <WaveDivider />
  </section>
);

export default AboutUsSection;
