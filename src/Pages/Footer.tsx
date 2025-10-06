// import Q2logo from "../assets/Q2logo.png"; 


// const Footer = () => {
//   return (
//     <footer className="bg-black text-gray-300 py-8">
//       <div className="container mx-auto md:px-30 flex flex-col md:flex-row items-center justify-between">
//         <a href="">
//           <img src={Q2logo} alt="Logo" className="h-12 sm:h-14 lg:h-16 w-auto" />
//         </a>
//         <ul className="flex gap-6 mt-4 md:mt-0">
//           <li>
//             <a href="about us" className="text-white md:text-lg">
//               About Us
//             </a>
//           </li>
//           <li>
//             <a href="q2contact" className="text-white md:text-lg">
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="mt-6 ml-20 text-center md:text-lg text-white">
//          <div className="text-left">
//             <p className="text-lg font-bold">
//               Copyright © 2025 Quantum Quest. All Rights Reserved
//             </p>
//           </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Q2logo from "../assets/Q2logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 pb-15">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        {/* Top Section - Logo and Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
          <a href="/">
            <img
              src={Q2logo}
              alt="Logo"
              className="h-16 md:h-20 w-auto mb-6 md:mb-0"
            />
          </a>
          <ul className="flex gap-8 md:gap-12">
            <li>
              <a
                href="/about-us"
                className="text-white text-base md:text-lg hover:text-gray-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/q2contact"
                className="text-white text-base md:text-lg hover:text-gray-400 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Section - Copyright */}
        <div className=" pt-35">
          <p className="text-white text-lg md:text-xl lg:text-xl">
            Copyright © 2025 <span className="">Quantum Quest</span>.
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
