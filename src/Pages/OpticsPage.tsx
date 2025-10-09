import Rquestbutton from "./Common/Rquestbutton";
import OpticsHero from "../assets/Optics.jpg";
import LaserSystems from "../assets/LaserSystems.png";
import QuantumOptics from "../assets/QuantumOptics.png";
import SpaceOptics from "../assets/SpaceOptics.png";
import laser from "../assets/popupoptics.png";
import laser2 from "../assets/popupoptics1.png";
import laser3 from "../assets/popupoptics2.png";
import QuantumPage from "../assets/popupoptics_2_1.png";
import QuantumPage1 from "../assets/popupoptics_2_2.png";
import QuantumPage2 from "../assets/popupoptics_2_3.png";
import space from "../assets/popupoptics_3_1.png";
import space1 from "../assets/popupoptics_3_2.png";
import space2 from "../assets/popupoptics_3_3.png";
import PopUp from "./Common/PopUp";
import { usePopup } from "./Common/usePopup";
import optic_graph from "../assets/optic_graph.png";
import optic_graph1 from "../assets/Section.png";

const OpticsLandingPage = () => {
  const { openPopup, closePopup, isPopupOpen } = usePopup();

  const popupData = {
    laser: [laser2, laser, laser3],
    quantum: [QuantumPage, QuantumPage1, QuantumPage2],
    space: [space, space1, space2],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Circular Optics Image */}
      {/* Hero Section with Circular Optics Image */}
      <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
        <div className="relative w-full">
          <img
            src={OpticsHero}
            alt="Optics Technology"
            className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[galderglynnlt] text-black font-semibold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] lg:tracking-[0.75em]">
              OPTICS
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-4 xl:px-40 py-4 md:py-6 mt-8 md:mt-10 lg:mt-12">
        <p
          className="font-galderglynn text-[#767676] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide sm:tracking-widest text-center md:text-left text-justify
"
        >
          Diamond possesses a combination of optical, thermal, and mechanical
          properties that no other optical material can match. These properties
          make QOG line of products ideal for applications that demand extreme
          power handling, wide spectral transmission, thermal stability, and
          environmental durability.
        </p>
      </section>

      {/* Properties Section */}
      <section className="px-4 sm:px-4 md:px-6 lg:px-12 xl:px-20 py-8 md:py-8">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide  text-left mb-6 md:mb-0 ml-5">
          PROPERTIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Left Box - 10X Lifespan */}
          <div className="bg-white p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center text-center">
            <img
              src={optic_graph1}
              alt="Transmission Chart"
              className="w-full h-auto rounded-lg  lg:max-w-full"
            />
          </div>

          {/* Right Box - Transmission Graph */}
          <div className="bg-white p-2 sm:p-4 md:p-6 flex items-center justify-center">
            <div className="w-full  lg:max-w-full">
              <img
                src={optic_graph}
                alt="Transmission Graph"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#CDAE64]">
          {/* Left Side - Title */}
          <div className="md:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 md:border-b-2 lg:border-b-0 md:border-r-0 lg:border-r-2 border-[#CDAE64]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide leading-tight text-center font-semibold">
              APPLICATIONS OF
              <br />
              OPTICS
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="md:col-span-6 grid grid-cols-1  md:grid-cols-3 ">
            {/* Laser Systems */}
            <div
              onClick={() => openPopup("laser")}
              className="relative overflow-hidden group cursor-pointer  border-b-2 md:border-b-0 sm:border-r-0 border-[#CDAE64] md:border-r-2"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  LASER SYSTEMS
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <img
                    src={LaserSystems}
                    alt="Laser Systems"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Quantum Optics */}
            <div
              onClick={() => openPopup("quantum")}
              className="relative overflow-hidden group cursor-pointer border-b-2 border-r-0 md:border-r-2 border-[#CDAE64] sm:border-b-2 md:border-b-0"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  QUANTUM OPTICS
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <img
                    src={QuantumOptics}
                    alt="Quantum Optics"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Space */}
            <div
              onClick={() => openPopup("space")}
              className="relative overflow-hidden group cursor-pointer "
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  SPACE
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <img
                    src={SpaceOptics}
                    alt="Space"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Rquestbutton />

      <PopUp
        isOpen={isPopupOpen("laser")}
        onClose={closePopup}
        images={popupData.laser}
      />

      <PopUp
        isOpen={isPopupOpen("quantum")}
        onClose={closePopup}
        images={popupData.quantum}
      />

      <PopUp
        isOpen={isPopupOpen("space")}
        onClose={closePopup}
        images={popupData.space}
      />
    </div>
  );
};

export default OpticsLandingPage;
