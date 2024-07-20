import Specialties from "./components/Specialties";
import Latestjobs from "./components/Latestjobs";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Efficiency from "./components/Efficiency";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";
import Callback from "./components/Callback";
import Footer from "./components/Footer";
import EnvTest from "./EnvTest";

const App = () => {
  return (
    <>
      <div className="bg-hero-image min-h-screen">
        <Navbar />
        <Hero />
        <Specialties />
        <Latestjobs />
        <Solutions />
        <Efficiency />
        <Reviews />
        <Blog />
        <Callback />
        <Footer />
        <EnvTest />
      </div>
    </>
  );
};

export default App;
