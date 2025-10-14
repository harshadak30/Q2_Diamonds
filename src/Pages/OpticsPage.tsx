import React, { useState } from "react";
import Rquestbutton from "./Common/Rquestbutton";
import OpticsHero from "../assets/Optics.jpg";
import LaserSystems from "../assets/LaserSystems.png";
import QuantumOptics from "../assets/QuantumOptics.png";
import SpaceOptics from "../assets/SpaceOptics.png";

import graph from "../assets/GanDiamonds/optic_graph.png";
import LASERSYSTEMS, { QUANTUMOPTICS, SPACE } from "./Common/OpticsPopup";

const Optics: React.FC = () => {
  const [activePopup, setActivePopup] = useState<
    "LASERSYSTEMS" | "QUANTUMOPTICS" | "SPACE" | null
  >(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-45 bg-black"></div>
      <section className="relative flex items-center justify-center ">
        <div className="relative w-full">
          <img
            src={OpticsHero}
            alt="Optics Technology"
            className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[galderglynnlt] text-black font-normal tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] lg:tracking-[0.60em]">
              OPTICS
            </h1>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 sm:py-6 md:py-8">
        <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed lg:tracking-[2.5px] md:tracking-[1.5px] tracking-[0.70px] font-[Montserratrg]  md:text-left text-justify">
          Diamond possesses a combination of optical, thermal, and mechanical
          properties that no other optical material can match. These properties
          make QOG line of products ideal for applications that demand extreme
          power handling, wide spectral transmission, thermal stability, and
          environmental durability.
        </p>
      </section>

      {/* Properties Section */}
      <section className="px-4 py-4 mb-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 sm:py-4 md:py-6 lg:py-10 ">
        <h2 className=" text-[#333333] font-[Galderglynnlt] text-4xl xl:text-5xl  tracking-wider text-left   mb-6 md:mb-4 ml-1 md:ml-2">
          PROPERTIES
        </h2>

        <div className="flex items-center justify-center p-2 bg-white">
          <div className="w-full mx-auto ">
            {/* Main Container with two boxes side by side */}
            <div className="flex flex-col gap-6 lg:flex-row sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-between w-full gap-8 just lg:w-1/2 ">
                <div className="border-2 border-[#c5a867] bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 flex flex-col justify-center min-h-[320px] md:min-h-[320px] lg:min-h-[480px] xl:min-h-[500px] 2xl:min-h-[720px]">
                  <div className="mb-4 text-center sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
                    <h1 className="text-[150px] lg:text-[160px] xl:text-[270px] 2xl:text-[320px] font-[Galderglynnbd] font-extrabold text-[#c5a867] leading-none tracking-tight">
                      10X
                    </h1>
                  </div>

                  {/* Title */}
                  <div className="space-y-1 text-center sm:space-y-2">
                    <h2 className="text-xl xl:text-2xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                      Lifespan
                    </h2>
                    <h2 className="text-xl xl:text-2xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                      V/S
                    </h2>
                    <h2 className="text-xl xl:text-2xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                      Glass Or Sapphire
                    </h2>
                  </div>
                </div>

                {/* Left Bottom Text - Fixed Height */}
                <div className="flex items-center justify-center w-full ">
                  <p className="text-gray-600  text-lg lg:text-base xl:text-xl 2xl:text-3xl leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4">
                    Operates at 5 – 10X higher power density
                  </p>
                </div>
              </div>

              {/* Right Card - Image */}
              <div className="flex flex-col w-full lg:w-1/2 ">
                {/* Image Container - Matches left card structure */}
                <div className="flex items-center justify-center overflow-hidden bg-white ">
                  <img
                    src={graph}
                    alt="Comparison chart"
                    className="w-full min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:h-[540px] xl:min-h-[640px] 2xl:min-h-[802px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Applications Section */}

      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-t-2 border-[#C8AB6E]">
          {/* Left Side - Title */}
          <div className="lg:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-6 lg:p-12 border-b-2 lg:border-b-0 border-[#C8AB6E]">
            <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[Galderglynnlt] leading-snug tracking-wider text-center font-normal">
              APPLICATIONS OF
              <br />
              OPTICS
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="grid grid-cols-1 lg:col-span-6 md:grid-cols-3">
            {/* Laser Systems Systems */}
            <div
              onClick={() => setActivePopup("LASERSYSTEMS")}
              className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-l-2 md:border-r-2  border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black text-sm  font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
                  Laser Systems
                </h3>
                <div className="w-full overflow-hidden md:h-48 lg:h-40 xl:h-68">
                  <img
                    src={LaserSystems}
                    alt="Laser Systems"
                    className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/*  QUANTUM OPTICS */}
            <div
              onClick={() => setActivePopup("QUANTUMOPTICS")}
              className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black  sm:text-sm  font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
                  QUANTUM OPTICS
                </h3>
                <div className="w-full overflow-hidden md:h-48 lg:h-40 xl:h-68">
                  <img
                    src={QuantumOptics}
                    alt=" QUANTUM OPTICS"
                    className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* SpaceOptics */}
            <div
              onClick={() => setActivePopup("SPACE")}
              className="relative overflow-hidden group cursor-pointer md:border-b-0  border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black text-sm  font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
                  Space
                </h3>
                <div className="w-full overflow-hidden md:h-48 lg:h-40 xl:h-68">
                  <img
                    src={SpaceOptics}
                    alt="SpaceOptics"
                    className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Rquestbutton />

      {activePopup === "LASERSYSTEMS" && (
        <LASERSYSTEMS onClose={() => setActivePopup(null)} />
      )}
      {activePopup === "QUANTUMOPTICS" && (
        <QUANTUMOPTICS onClose={() => setActivePopup(null)} />
      )}
      {activePopup === "SPACE" && (
        <SPACE onClose={() => setActivePopup(null)} />
      )}
    </div>
  );
};

export default Optics;
