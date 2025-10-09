

import React from "react";
import Rquestbutton from "./Common/Rquestbutton";
import Frame from "../assets/Frame.png";
import Quantum from "../assets/Quantum.png";
import Sensing from "../assets/SENSING.png";
import Computing from "../assets/COMPUTING.png";
import Communication from "../assets/COMMUNICATION.png";

// Import your popup images
import PopUp from "./Common/PopUp";
import { usePopup } from "./Common/usePopup";

// Import your popup images
import computing from "../assets/Computingpopup1.png";
import computing1 from "../assets/Computingpopup2.png";
import computing2 from "../assets/Computingpopup3.png";
import QuantumPage from "../assets/QUANTUM1.png";
import QuantumPage1 from "../assets/QUANTUM2.png";
import QuantumPage2 from "../assets/QUANTUM3.png";
import space from "../assets/popupoptics_3_1.png";
import space1 from "../assets/popupoptics_3_2.png";
import space2 from "../assets/popupoptics_3_3.png";

const QuantumLandingPage: React.FC = () => {
  const { openPopup, closePopup, isPopupOpen } = usePopup();

  // Define popup data for all three categories
  const popupData = {
    computing: [computing, computing1, computing2],
    quantum: [QuantumPage, QuantumPage1, QuantumPage2],
    space: [space, space1, space2],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
        <img
          src={Quantum}
          alt="Quantum Technology"
          className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </section>

      {/* Description Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-4 xl:px-35 py-4 md:py-6 mt-8 md:mt-10 lg:mt-12 ">
        <p
          className="font-galderglynn text-[#767676] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide sm:tracking-widest text-center md:text-left text-justify
"
        >
          Diamonds with engineered defects play a revolutionary role in quantum
          technologies. QQG’s unique ability to host quantum-grade colour
          centers like NV (Nitrogen-Vacancy) enables powerful applications. At
          the core is diamond’s stable carbon lattice, which provides an
          exceptionally noise-free environment for maintaining quantum coherence
          at room temperature, something most quantum systems cannot do.
        </p>
      </section>

      {/* Properties Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-25 py-8 md:py-12 mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-left mb-6 md:mb-8">
          PROPERTIES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Left Box - Magnetic Sensitivity */}
          <div className="bg-white   overflow-hidden">
            <div className="w-full h-full flex flex-col items-center justify-center ">
              <img
                src={Frame}
                alt="Magnetic Sensitivity Chart"
                className="w-full h-[500px] "
              />
            </div>
          </div>

          {/* Right Box - 2x2 Grid */}
          <div className="bg-white  overflow-hidden">
            <div className="grid grid-cols-2 h-[500px]">
              {/* Top Left */}
              <div className="flex items-start justify-start border-b border-r-1 border-[#C4A55A] p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="text-left">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-4xl  xl:text-4xl font-semibold mb-1 sm:mb-2 text-[#C4A55A] leading-tight">
                    Excellent
                  </h3>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold mb-2 sm:mb-3 text-[#C4A55A] leading-tight">
                    Integration
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold text-black">
                    with Photonics System
                  </p>
                </div>
              </div>

              {/* Top Right */}
              <div className="flex items-start justify-start border-b border-[#C4A55A] p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="text-left">
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold text-black mb-1 sm:mb-2">
                    Operates At
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold mb-1 text-[#C4A55A] leading-tight">
                    Room
                  </h3>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-[#C4A55A] leading-tight">
                    Temperature
                  </h3>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="flex items-start justify-start  sm:border-b-0 border-r-1 border-[#C4A55A] p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold mb-2 sm:mb-3 text-[#C4A55A]">
                    2ms
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold text-black">
                    Spin Coherence
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold text-black">
                    Time (T₂)
                  </p>
                </div>
              </div>

              {/* Bottom Right */}
              <div className="flex items-start justify-start p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="text-left">
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold text-black mb-1 sm:mb-2">
                    Unmatched
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold mb-1 text-[#C4A55A] leading-tight">
                    Quantum
                  </h3>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-[#C4A55A] leading-tight">
                    Efficiency
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#C8AB6E]">
          {/* Left Side - Title */}
          <div className="md:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 md:border-b-2 lg:border-b-0 md:border-r-0 lg:border-r-2 border-[#C8AB6E]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide leading-tight text-center font-semibold">
              APPLICATIONS IN THE
              <br />
              QUANTUM FIELD
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-3">
            {/* Computing */}
            <div
              onClick={() => openPopup("computing")}
              className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 sm:border-r-0 border-[#C8AB6E] md:border-r-2"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  COMPUTING
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <img
                    src={Computing}
                    alt="Computing"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Sensing */}
            <div
              onClick={() => openPopup("quantum")}
              className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 border-r-0 md:border-r-2 border-[#C8AB6E] sm:border-b-2 md:border-b-0"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  SENSING
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <img
                    src={Sensing}
                    alt="Sensing"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Communication */}
            <div
              onClick={() => openPopup("space")}
              className="relative overflow-hidden group cursor-pointer"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  COMMUNICATION
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <img
                    src={Communication}
                    alt="Communication"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Rquestbutton />
      {/* Popups */}
      <PopUp
        isOpen={isPopupOpen("computing")}
        onClose={closePopup}
        images={popupData.computing}
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

export default QuantumLandingPage;
