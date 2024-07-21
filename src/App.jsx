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

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
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
      </div>
    </>
  );
};

export default App;
