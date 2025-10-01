
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Q2logo from "../assets/Q2logo.png"; 


const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
      {/* Simple flex with large padding */}
      <div className="flex items-center justify-between w-full px-8 lg:px-20 xl:px-32 2xl:px-48">
        
        {/* Logo - Left side */}
        <div className="flex items-center">
          <img src={Q2logo} alt="Logo" className="h-12 sm:h-14 lg:h-16 w-auto" />
        </div>
        
        {/* Navigation - Right side */}
        <div className="flex gap-8 lg:gap-12">
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors whitespace-nowrap text-base lg:text-lg">About Us</Link>
          <Link to="/division" className="text-white hover:text-gray-300 transition-colors whitespace-nowrap text-base lg:text-lg">Division</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition-colors whitespace-nowrap text-base lg:text-lg">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};
 export default Navigation;