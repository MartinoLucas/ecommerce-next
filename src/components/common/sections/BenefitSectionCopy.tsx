import { BRAND_BENEFITS, BENEFITS_TEXT } from "@shared/constants";

const BenefitsSectionCopy = () => (
  <section className="bg-surface px-6 md:px-12 py-20 text-primary">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">{BENEFITS_TEXT.title}</h2>
      <div className="grid gap-10 md:grid-cols-3 text-center">
        {BRAND_BENEFITS.map((benefit, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4">
            <img src={benefit.icon} alt={benefit.title} className="w-12 h-12" />
            <h3 className="text-lg md:text-xl font-semibold">{benefit.title}</h3>
            <p className="text-text-muted text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSectionCopy;
