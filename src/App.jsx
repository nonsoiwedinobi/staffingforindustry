import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import SubmitResume from "./components/SubmitResume";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import About from "./components/About";
import Jobs from "./components/Jobs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="overflow-x-hidden">
              <Hero />
              <Specialties />
              <Latestjobs />
              <Solutions />
              <Efficiency />
              <Reviews />
              <Blog />
              <Callback />
            </div>
          }
        />
        <Route path="/submit-resume" element={<SubmitResume />} />{" "}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
