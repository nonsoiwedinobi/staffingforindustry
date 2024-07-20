import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants/";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
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
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 py-3 border-neutral-700/80 overflow-x-hidden transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-2xl lg:text-3xl tracking-tight text-white">
              Staffing4Industry
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-lg lg:text-xl text-white hover:text-amber-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-2 items-center">
            <div className="relative">
              <button
                className="bg-transparent py-2 px-4 border-none cursor-pointer flex items-center text-lg lg:text-xl text-white"
                id="lang-btn"
              >
                English
                <span id="arrow-icon" className="ml-1 text-xs">
                  &#9660;
                </span>
              </button>
              <ul
                className="hidden absolute top-full left-0 bg-white border border-gray-300 shadow-md list-none mt-2 w-full z-10 rounded-lg"
                id="language-dropdown"
              >
                <li
                  className="py-2 px-3 flex cursor-pointer text-black hover:bg-gray-200"
                  data-lang="en"
                >
                  English
                </li>
                <li
                  className="py-2 px-3 flex cursor-pointer text-black hover:bg-gray-200"
                  data-lang="fr"
                >
                  French
                </li>
                <li
                  className="py-2 px-3 flex cursor-pointer text-black hover:bg-gray-200"
                  data-lang="nl"
                >
                  Dutch
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="bg-amber-400 py-2 px-3 rounded-lg whitespace-nowrap"
            >
              Submit Resume
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 text-lg lg:text-xl text-white hover:text-amber-400"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <div className="relative">
                <button
                  className="bg-transparent py-2 px-4 border-none cursor-pointer flex items-center text-lg lg:text-xl text-white"
                  id="lang-btn"
                >
                  English
                  <span id="arrow-icon" className="ml-1 text-xs">
                    &#9660;
                  </span>
                </button>
                <ul
                  className="hidden absolute top-full left-0 bg-white border border-gray-300 shadow-md list-none mt-2 w-full z-10 rounded-lg"
                  id="language-dropdown"
                >
                  <li
                    className="py-2 px-3 flex cursor-pointer text-black hover:bg-gray-200"
                    data-lang="en"
                  >
                    English
                  </li>
                  <li
                    className="py-2 px-3 flex cursor-pointer text-black hover:bg-gray-200"
                    data-lang="fr"
                  >
                    French
                  </li>
                  <li
                    className="py-2 px-3 flex cursor-pointer text-black hover:bg-gray-200"
                    data-lang="nl"
                  >
                    Dutch
                  </li>
                </ul>
              </div>
              <a href="#" className="py-2 px-3 bg-amber-400 rounded-lg">
                Submit Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
