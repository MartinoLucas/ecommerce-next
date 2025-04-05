import { FEATURED_WINES_TEXTS } from "@shared/constants";

const wines = [
  { name: "Utopía", grape: "Malbec Roble", price: 10000, img: "/wines/utopia.jpg" },
  { name: "Guayna", grape: "Merlot", price: 9000, img: "/wines/guayna-merlot.jpg" },
  { name: "Pimba", grape: "Blend Petit Verdot y Cab Franc", price: 14000, img: "/wines/pimba-blend.jpg" },
];

const FeaturedWines = () => (
  <section className="bg-secondary text-primary px-6 md:px-12 py-16">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        {FEATURED_WINES_TEXTS.title}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {wines.map((wine, idx) => (
          <div key={idx} className="bg-surface p-4 rounded-2xl shadow-medium-bottom text-center">
            <img src={wine.img} alt={wine.name} className="w-full h-60 md:h-64 object-cover rounded-xl mb-4" />
            <h3 className="text-lg md:text-xl font-semibold">{wine.name}</h3>
            <p className="text-text-muted">{wine.grape}</p>
            <p className="text-lg font-bold mt-2">${wine.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWines;
