import React from "react";
import Rquestbutton from "./Common/Rquestbutton";
import GanOnDiamondImage from "../assets/ganonDiamonds.png";
import Ev from "../assets/EV.jpg";
import RF from "../assets/RF.png";
import Computing from "../assets/Computing.jpg";
import graph1 from "../assets/graph4.png";
import ganondiamonds from "../assets/ganonDiamonds1.png";
import RFpopup from "../assets/RFpopup.png";
import RFpopup1 from "../assets/RFpopup1.png";
import RFpopup2 from "../assets/RFpopup2.png";
import EVpopup from "../assets/EVpopup.png";
import EVpopup1 from "../assets/EVpopup1.png";
import EVpopup2 from "../assets/EVpopup2.png";
import Computingpopup1 from "../assets/Computingpopup1.png";
import Computingpopup2 from "../assets/Computingpopup2.png";
import Computingpopup3 from "../assets/Computingpopup3.png";
import PopUp from "./Common/PopUp";
import { usePopup } from "./Common/usePopup";

const GanOnDiamond: React.FC = () => {
  const { openPopup, closePopup, isPopupOpen } = usePopup();

  const popupData = {
    laser: [RFpopup2, RFpopup1, RFpopup],
    quantum: [EVpopup, EVpopup1, EVpopup2],
    space: [Computingpopup1, Computingpopup2, Computingpopup3],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
        <img
          src={GanOnDiamondImage}
          alt="GaN on Diamond Technology"
          className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
        />
      </section>

      {/* Description Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-35 py-6 sm:py-8 md:py-10">
        <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide text-center md:text-left text-justify">
          Gallium nitride (GaN) on diamond technology is setting a new benchmark
          in thermal management and energy efficiency for GPUs and AI server
          infrastructure. By combining GaN's superior electronic properties with
          diamond's thermal conductivity, this innovation ensures
          high-performance computing with reduced power losses and extended
          component lifespan.
        </p>
      </section>

      {/* Properties Section */}
     <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12">
  <h2 className="text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-left mb-6 md:mb-4 ml-1 md:ml-5">
    PROPERTIES
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-20">
    {/* Left Box */}
    <div className="bg-white p-2 sm:p-4 md:p-2 flex flex-col justify-center items-center text-center">
      <img
        src={ganondiamonds}
        alt="GaN on Diamond Chart"
        className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-lg "
      />
    </div>

    {/* Right Box */}
    <div className="bg-white p-2 sm:p-4 md:p-2 flex items-center justify-center">
      <img
        src={graph1}
        alt="Transmission Graph"
        className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-lg "
      />
    </div>
  </div>
</section>
      {/* Applications Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#C8AB6E]">
    {/* Left Side - Title */}
    <div className="lg:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-[#C8AB6E]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide leading-tight text-center font-semibold">
        APPLICATIONS OF
        <br />
        GaN ON DIAMOND
      </h2>
    </div>

    {/* Right Side - 3 Application Cards */}
    <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3">
      {/* RF Systems */}
      <div
        onClick={() => openPopup("laser")}
        className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
      >
        <div className="p-1">
          <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
            RF SYSTEMS
          </h3>
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
            <img
              src={RF}
              alt="RF Systems"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* EV Systems */}
      <div
        onClick={() => openPopup("quantum")}
        className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
      >
        <div className="p-1">
          <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
            EV SYSTEMS
          </h3>
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
            <img
              src={Ev}
              alt="EV Systems"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Computing */}
      <div
        onClick={() => openPopup("space")}
        className="relative overflow-hidden group cursor-pointer"
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
    </div>
  </div>
</section>
      <Rquestbutton />

      {/* Popups */}
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

export default GanOnDiamond;
