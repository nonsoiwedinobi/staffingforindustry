import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants/";
import logo from "../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LanguageSelector from "./LanguageSelector"; // Import the LanguageSelector component

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    document.body.style.overflow = mobileDrawerOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; // Reset overflow when component unmounts
    };
  }, [mobileDrawerOpen]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 shadow-md ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md text-black"
          : "bg-white text-black"
      }`}
    >
      <div
        className="container px-6 mx-auto relative lg:text-sm"
        style={{ maxWidth: "100%", overflow: "visible" }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="tracking-tight">
              <img
                src={logo}
                alt="Staffing4Industry Logo"
                className="h-20 lg:h-20 w-auto max-w-full py-2"
              />
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-lg lg:text-xl hover:text-amber-400 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-4 items-center relative">
            {/* Language Selector added here */}
            <LanguageSelector />

            <a
              href="https://staffing4industry.app.loxo.co/staffing4industry"
              className="bg-amber-400 hover:bg-yellow-500 transition duration-700 text-black py-2 px-3 rounded-lg whitespace-nowrap"
            >
              Apply Now
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className={isScrolled ? "text-white" : "text-black"} />
              ) : (
                <Menu className={isScrolled ? "text-white" : "text-black"} />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-20 bg-neutral-900 p-12 flex flex-col justify-center items-center lg:hidden overflow-hidden">
            <button
              onClick={toggleNavbar}
              className="absolute top-4 right-4 text-white"
            >
              <X />
            </button>
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 text-lg lg:text-xl text-white hover:text-amber-400"
                >
                  <a href={item.href} onClick={toggleNavbar}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://staffing4industry.app.loxo.co/staffing4industry"
                className="py-2 px-3 bg-amber-400 rounded-lg"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
