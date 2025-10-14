import { useState, useEffect } from "react";
import Q2logo from "../assets/Q2logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let scrollTimeout: number | undefined;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 1) {
        setScrolled(true);

        if (!hasScrolled) {
          setHidden(true);

          clearTimeout(scrollTimeout);

          scrollTimeout = setTimeout(() => {
            setHidden(false);
            setHasScrolled(true);
          }, 500);
        }
      } else {
        setScrolled(false);
        setHidden(false);
        if (currentScrollY === 0) {
          setHasScrolled(false);
        }
        clearTimeout(scrollTimeout);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [hasScrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/50" : "bg-black"
        } ${hidden ? "-top-32" : "top-0"} h-16 md:h-20 lg:h-24`}
      >
        <div className="flex items-center justify-between w-full h-full px-5 sm:px-7 md:px-9 lg:px-13 xl:px-17 2xl:px-49 py-12">
          {/* Logo - Left side */}
          <div className="flex items-center">
            <div className="h-8 sm:h-10 md:h-12 lg:h-14 flex items-center">
              <div className="flex items-center">
                <button onClick={handleLogoClick} className="cursor-pointer">
                  <img
                    src={Q2logo}
                    alt="Logo"
                    className="h-20 sm:h-22 md:h-24 w-auto"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-12">
            <Link
              to="/about"
              className="text-white font-medium  hover:text-gray-300 transition-colors whitespace-nowrap text-sm lg:text-base xl:text-lg"
            >
              About Us
            </Link>
            <Link
              to="/division"
              className="text-white font-medium  hover:text-gray-300 transition-colors whitespace-nowrap text-sm lg:text-base xl:text-lg"
            >
              Division
            </Link>
            <Link
              to="/contact"
              className="text-white font-medium  hover:text-gray-300 transition-colors whitespace-nowrap text-sm lg:text-base xl:text-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={toggleMobileMenu}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition-colors text-lg py-2"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              to="/division"
              className="text-white hover:text-gray-300 transition-colors text-lg py-2"
              onClick={closeMobileMenu}
            >
              Division
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition-colors text-lg py-2"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navigation;
