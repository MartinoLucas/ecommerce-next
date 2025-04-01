import { BRAND_BENEFITS, BRAND_NAME } from "@shared/constants";
import WaveDivider from "./WaveDivider";

const BenefitsSection = () => {
    return (
        <section className="
            relative
            overflow-hidden

            w-full
            lg:min-h-[75vh]
            md:min-h-[75vh]
            min-h-[85vh]
            flex
            items-center
            justify-center
            bg-secondary
            px-8
            pb-32
            lg:px-16
            
            
        ">
            <section className="max-w-[66rem] mx-2 lg:mx-auto mt-12 rounded-[26px] glass-secondary shadow-medium-bottom p-8">
                <h2 className="text-3xl font-bold text-primary text-center mb-6">
                ¿Por qué elegir {BRAND_NAME}?
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    { BRAND_BENEFITS.map((benefit, index) => (
                            <div key={index} className="flex flex-col items-center text-center hover:scale-105 transition">
                                <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 mb-2" />
                                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                                <p className="text-sm text-foreground">{benefit.description}</p>
                            </div>
                        ))
                    }   
                </div>
            </section>
            <WaveDivider />
        </section>
    );
  };
  
  export default BenefitsSection;
  