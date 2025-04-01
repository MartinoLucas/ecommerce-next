import WaveDivider from "./WaveDivider";

const Hero = () => {
    return (
        <section className="
            relative
            overflow-hidden

            w-full
            lg:min-h-[90vh]
            md:min-h-[85vh]
            min-h-[80vh]
            flex
            items-center
            justify-center
            bg-secondary
            px-8
            pb-8
            lg:px-16
            lg:pb-12
            
            
        ">
        
            <div className="hidden lg:block w-1/2 h-full mr-4">
                <img
                    src="vinos_exclusivos.png"
                    alt="Vinos exclusivos"
                    className="w-full h-full object-cover rounded-[26px] shadow-medium-bottom"
                />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-start">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Descubre Vinos Diferentes
                </h1>
                <p className="text-base md:text-lg text-foreground mb-6">
                    Explora nuestra selección boutique, ediciones limitadas y experiencias únicas.
                </p>
                
                <button className="
                    bg-primary
                    text-secondary
                    hover:bg-primary-dark
                    font-semibold
                    py-3 px-6
                    rounded-md
                    shadow-sm
                    transition
                    duration-200
                    focus:outline-none
                ">
                    Ver Tienda
                </button>
            </div>

            <WaveDivider />
        </section>
    );
};

export default Hero;