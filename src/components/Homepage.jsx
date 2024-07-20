import Navbar from "./Navbar";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
