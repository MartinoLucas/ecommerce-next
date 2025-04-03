import { LOCATION_INFO } from "@shared/constants";
import WaveDivider from "../WaveDivider";

const LocationSection = () => (
  <section className="bg-secondary text-primary px-6 md:px-12 pt-16 pb-32 relative shadow-high-bottom">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">{LOCATION_INFO.title}</h2>
      <p className="text-base md:text-lg text-primary-light mb-6">{LOCATION_INFO.description}</p>
      <div className="rounded-2xl overflow-hidden shadow-high-bottom">
        <iframe
          src={LOCATION_INFO.mapEmbedUrl}
          loading="lazy"
          className="w-full h-[300px] md:h-[400px] border-0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <WaveDivider/>
  </section>
);

export default LocationSection;
