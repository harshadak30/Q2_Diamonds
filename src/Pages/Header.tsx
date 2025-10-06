


import  { useState, useEffect } from "react";
import Q2logo from "../assets/Q2logo.png"; 
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md py-3' : 'bg-black py-6'}`}>
        <div className="flex items-center justify-between w-full px-2 lg:px-2 xl:px-2 2xl:px-48 py-3">
          
          {/* Logo - Left side */}
          <div className="flex items-center">
            <div className="h-12 sm:h-14 lg:h-16 flex items-center">

               <div className="flex items-center">
           <img src={Q2logo} alt="Logo" className="h-25 sm:h-25 lg:h-25 w-auto" />
        </div>
            </div>
          </div>
          
          {/* Navigation - Right side */}
          <div className="flex gap-8 lg:gap-12">
            <a href="#about" className="text-white hover:text-gray-300 transition-colors whitespace-nowrap text-base lg:text-lg">About Us</a>
            <a href="#division" className="text-white hover:text-gray-300 transition-colors whitespace-nowrap text-base lg:text-lg">Division</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors whitespace-nowrap text-base lg:text-lg">Contact Us</a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navigation;

