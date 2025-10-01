import Q2logo from "../assets/Q2logo.png"; 


const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto md:px-30 flex flex-col md:flex-row items-center justify-between">
        <a href="">
          <img src={Q2logo} alt="Logo" className="h-12 sm:h-14 lg:h-16 w-auto" />
        </a>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li>
            <a href="about us" className="text-white md:text-lg">
              About Us
            </a>
          </li>
          <li>
            <a href="q2contact" className="text-white md:text-lg">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-6 ml-20 text-center md:text-lg text-white">
         <div className="text-left">
            <p className="text-lg font-bold">
              Copyright © 2025 Quantum Quest. All Rights Reserved
            </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
