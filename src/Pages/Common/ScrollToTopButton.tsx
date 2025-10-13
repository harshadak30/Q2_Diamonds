


// import React, { useState, useEffect } from 'react';
// import { ArrowUp } from 'lucide-react';

// const ScrollToTopButton: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   // Show button and update progress when page is scrolled
//   useEffect(() => {
//     const toggleVisibility = () => {
//       const scrolled = document.documentElement.scrollTop;
//       const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
//       // Calculate scroll progress percentage
//       const progress = (scrolled / scrollHeight) * 100;
//       setScrollProgress(progress);
      
//       // Show button when scrolled down 300px
//       if (scrolled > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   // Calculate circumference for the outer progress circle with larger radius
//   const outerRadius = 26; // radius + 8 (18 + 8 = 26)
//   const outerCircumference = 2 * Math.PI * outerRadius;

//   // Calculate stroke dashoffset for smooth animation
//   const strokeDashoffset = outerCircumference - (scrollProgress / 100) * outerCircumference;

//   return (
//     <>
//       {isVisible && (
//         <div className="fixed z-50 cursor-pointer bottom-6 right-6 sm:bottom-8 sm:right-8">
//           {/* Outer Progress Circle Container - positioned outside */}
//           <div className="absolute -inset-[8px]">
//             <svg
//               width="64"
//               height="64"
//               className="w-full h-full transform -rotate-90"
//               viewBox="0 0 64 64"
//             >
//               {/* Blur progress circle - outside the black border */}
//               <circle
//                 cx="32"
//                 cy="32"
//                 r={outerRadius}
//                 fill="none"
//                 stroke="#3b82f6"
//                 strokeWidth="2"
//                 strokeDasharray={outerCircumference}
//                 strokeDashoffset={strokeDashoffset}
//                 strokeLinecap="round"
//                 className="transition-all duration-300 ease-out"
//                 style={{
//                   filter: '',
//                   opacity: 1
//                 }}
//               />
//             </svg>
//           </div>

//           {/* Black Border Container */}
//           <div className="absolute -inset-[5px]">
//             <svg
//               width="56"
//               height="56"
//               className="w-full h-full"
//               viewBox="0 0 56 56"
//             >
//               {/* Black border circle */}
//               <circle
//                 cx="28"
//                 cy="28"
//                 r={18}
//                 fill="none"
//                 stroke="#000000"
//                 strokeWidth="2"
//               />
//             </svg>
//           </div>

//           {/* Button Container */}
//           <div className='flex items-center justify-center bg-black rounded-full h-17 w-17'>
//             <button
//               onClick={scrollToTop}
//               className="relative flex items-center justify-center text-black transition-all duration-300 transform bg-white rounded-full shadow-lg cursor-pointer h-9 w-9 sm:w-12 sm:h-12 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 group"
//               aria-label="Scroll to top"
//             >
//               {/* Arrow Container */}
//               <div className="relative w-5 h-5 overflow-hidden cursor-pointer sm:w-6 sm:h-6">
//                 {/* Main Arrow - moves up on hover */}
//                 <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
//                   <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
//                 </div>
                
//                 {/* Second Arrow - slides up from bottom on hover */}
//                 <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
//                   <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ScrollToTopButton;




import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button and update progress when page is scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate scroll progress percentage
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
      
      // Show button when scrolled down 300px
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate circumference for the outer progress circle with larger radius
  const outerRadius = 24; // radius + 8 (18 + 8 = 26)
  const outerCircumference = 2 * Math.PI * outerRadius;

  // Calculate stroke dashoffset for smooth animation
  const strokeDashoffset = outerCircumference - (scrollProgress / 100) * outerCircumference;

  return (
    <>
      {isVisible && (
        <div className="fixed z-50 cursor-pointer bottom-6 right-6 sm:bottom-8 sm:right-8">
          {/* Outer Progress Circle Container - positioned outside */}
          <div className="absolute -inset-[8px]">
            <svg
              width="64"
              height="64"
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 64 64"
            >
              {/* Blur progress circle - outside the black border */}
              <circle
                cx="32"
                cy="32"
                r={outerRadius}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray={outerCircumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
                style={{
                  filter: '',
                  opacity: 1
                }}
              />
            </svg>
          </div>

          {/* Black Border Container */}
          <div className="absolute -inset-[5px]">
            <svg
              width="57"
              height="57"
              className="w-full h-full"
              viewBox="0 0 56 56"
            >
              {/* Black border circle */}
              <circle
                cx="29"
                cy="29"
                r={19}
                fill="none"
                stroke="#000000"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Button Container */}
          <div className='flex items-center justify-center bg-black rounded-full h-11 w-11'>
            <button
              onClick={scrollToTop}
              className="relative flex items-center justify-center text-black transition-all duration-300 transform bg-white rounded-full shadow-lg cursor-pointer h-8 w-8 sm:w-8 sm:h-8 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 group"
              aria-label="Scroll to top"
            >
              {/* Arrow Container */}
              <div className="relative w-5 h-5 overflow-hidden cursor-pointer sm:w-6 sm:h-6">
                {/* Main Arrow - moves up on hover */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
                  <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                </div>
                
                {/* Second Arrow - slides up from bottom on hover */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                  <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;