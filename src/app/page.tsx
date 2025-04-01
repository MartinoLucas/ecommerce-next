import Hero from "@components/common/Hero";
import Footer from "@components/common/Footer";
import Navbar from "@components/common/Navbar";

export default function Home() {
  return (
    <div className="mt-4">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
