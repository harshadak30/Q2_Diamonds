
import { Link } from "react-router-dom";
import Q2logo from "../assets/Q2logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 sm:py-10 md:py-12 lg:py-15">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        {/* Top Section - Logo and Links */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 sm:mb-8 md:mb-10">
          {/* Logo */}
          <a href="/" className="mb-10 sm:mb-10 md:mb-10">
            <img
              src={Q2logo}
              alt="Logo"
              className="h-22  lg:h-24 xl:h-26 w-auto"
            />
          </a>
          
          {/* Navigation Links */}
          <nav className="w-full md:w-auto">
            <ul className="flex justify-center md:justify-end gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 flex-wrap">
              <li>
                <Link
                  to="/about"
                  className="text-white text-sm sm:text-base md:text-lg lg:text-xl hover:text-gray-400 transition-colors duration-300 whitespace-nowrap"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white text-sm sm:text-base md:text-lg lg:text-xl hover:text-gray-400 transition-colors duration-300 whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section - Copyright */}
        <div className=" pt-6 sm:pt-10 md:pt-12 lg:pt-16">
          <p className="text-white :sm:text-center  text-left text-base md:text-base lg:text-lg xl:text-xl">
            Copyright © 2025 <span className="font-medium">Quantum Quest</span>.{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;