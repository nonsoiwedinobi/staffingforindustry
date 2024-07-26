import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants/";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    document.body.style.overflow = mobileDrawerOpen ? "auto" : "hidden";
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
      className={`fixed left-0 right-0 top-0 z-50 py-3 border-neutral-700/80 overflow-x-hidden transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div
        className="container px-4 mx-auto relative lg:text-sm"
        style={{ maxWidth: "100%", overflow: "visible" }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a
              href="/"
              className="text-2xl lg:text-3xl tracking-tight text-white"
            >
              Staffing4Industry
            </a>
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
          <div className="hidden lg:flex justify-center space-x-2 items-center relative">
            <a
              href="/submit-resume"
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
