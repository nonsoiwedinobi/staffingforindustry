import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Specialties from "./components/Specialties";
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
import JobDetail from "./components/JobDetail";
import FAQs from "./components/FAQs";
import ReviewsPage from "./components/ReviewsPage";
import BlogPage from "./components/BlogPage";
import BlogDetail from "./components/BlogDetail";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="overflow-x-hidden">
                <Hero />
                <Specialties />
                <Efficiency />
                <Solutions />
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
          <Route path="/job/:jobId" element={<JobDetail />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/reviews-page" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
