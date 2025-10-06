


// import  { useState, useEffect } from "react";
// import Q2logo from "../assets/Q2logo.png"; 
// const Navigation = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md py-3' : 'bg-black py-6'}`}>
//         <div className="flex items-center justify-between w-full px-2 lg:px-2 xl:px-2 2xl:px-48 py-3">
          
//           {/* Logo - Left side */}
//           <div className="flex items-center">
//             <div className="h-12 sm:h-14 lg:h-16 flex items-center">

//                <div className="flex items-center">
//            <img src={Q2logo} alt="Logo" className="h-25 sm:h-25 lg:h-25 w-auto" />
//         </div>
//             </div>
//           </div>
          
//           {/* Navigation - Right side */}
//           <div className="flex gap-8 lg:gap-12">
//             <a href="#about" className="text-white hover:text-gray-300 transition-colors whitespace-nowrap text-base lg:text-lg">About Us</a>
//             <a href="#division" className="text-white hover:text-gray-300 transition-colors whitespace-nowrap text-base lg:text-lg">Division</a>
//             <a href="#contact" className="text-white hover:text-gray-300 transition-colors whitespace-nowrap text-base lg:text-lg">Contact Us</a>
//           </div>
//         </div>
//       </nav>

//     </>
//   );
// };

// export default Navigation;

import { useState, useEffect } from "react";
import Q2logo from "../assets/Q2logo.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let scrollTimeout: number | undefined;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 1) {
        setScrolled(true);
        
        // Only hide navbar on first scroll
        if (!hasScrolled) {
          setHidden(true);
          
          // Clear any existing timeout
          clearTimeout(scrollTimeout);
          
          // Show navbar after half second
          scrollTimeout = setTimeout(() => {
            setHidden(false);
            setHasScrolled(true); // Mark that we've already done the hide/show animation
          }, 500);
        }
      } else {
        setScrolled(false);
        setHidden(false);
        // Reset hasScrolled when back at top
        if (currentScrollY === 0) {
          setHasScrolled(false);
        }
        clearTimeout(scrollTimeout);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [hasScrolled]); // Add hasScrolled as dependency

  return (
    <>
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/50 py-3' : 'bg-transparent py-2'
        } ${
          hidden ? '-top-32' : 'top-0'
        }`}
      >
        <div className="flex items-center justify-between w-full px-2 lg:px-2 xl:px-2 2xl:px-48 py-2">
          
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