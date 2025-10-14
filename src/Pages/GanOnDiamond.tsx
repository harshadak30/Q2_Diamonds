import React, { useState } from "react";
import Rquestbutton from "./Common/Rquestbutton";
import GanOnDiamondImage from "../assets/gandiamonds-hero.png";
import Ev from "../assets/EV.jpg";
import RF from "../assets/RF.png";
import Computing from "../assets/Computing.jpg";
import RFModal, { EVModal, ComputingModal } from "./Common/RFModal";

const GanOnDiamond: React.FC = () => {
  const [activePopup, setActivePopup] = useState<
    "rf" | "ev" | "computing" | null
  >(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-45 bg-black"></div>
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
        <img
          src={GanOnDiamondImage}
          alt="GaN on Diamond Technology"
          className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
        />
      </section>

      {/* Description Section */}
      <section className="px-4 sm:px-8 md:px-10 lg:px-12  xl:px-14 py-4 sm:py-4 md:py-6">
        <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed lg:tracking-[2.5px] md:tracking-[1.5px] tracking-[0.70px] font-[Montserratrg]  md:text-left text-justify">
          Gallium nitride (GaN) on diamond technology is setting a new benchmark
          in thermal management and energy efficiency for GPUs and AI server
          infrastructure. By combining GaN's superior electronic properties with
          diamond's thermal conductivity, this innovation ensures
          high-performance computing with reduced power losses and extended
          component lifespan.
        </p>
      </section>

      <section className="sm:px-2 md:px-2 lg:px-10 xl:px-14 py-4 sm:py-4 md:py-6 lg:py-10 mb-4">
        <h2 className="text-[#333333]  font-[Galderglynnlt] text-3xl lg:text-4xl xl:text-6xl font-semibold tracking-wider lg:text-left md:text-center text-center mb-6 md:mb-4 ml-1 md:ml-2">
          PROPERTIES
        </h2>

        <div className="bg-white p-2 flex items-center justify-center">
          <div className="w-full lg:flex-1">
            {/* Main Container with two boxes side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-12 md:gap-4 lg:gap-14 xl:gap-24">
              <div>
                <div className="border-2 border-[#c5a867] bg-white p-6 sm:p-8 md:p-10 lg:p-10 xl:p-12 h-[310px] sm:h-[550px] flex flex-col justify-center">
                  <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <h1 className="text-[150px] sm:text-[120px] md:text-[200px] lg:text-[200px] xl:text-[300px] font-[Galderglynnbd] font-extrabold text-[#c5a867] leading-none tracking-tight">
                      5X
                    </h1>
                  </div>

                  <div className="text-center space-y-1">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                      Thermal Dissipation
                    </h2>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                      V/S
                    </h2>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                      GaN On SiC
                    </h2>
                  </div>
                </div>
                <p className="text-gray-500 pt-3 text-xs sm:text-sm md:text-base lg:text-[18px] leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4 md:px-8 lg:px-1 xl:px-18">
                  Breakdown voltage 10x higher than silicon and 4–5x higher than{" "}
                  <br />
                  Gallium Nitride (GaN)
                </p>
              </div>

              {/* Right Card */}
              <div>
                <div className="border-2 border-[#c5a867]  p-2 sm:p-2 md:p-2 lg:p-4 xl:p-6  h-[310px] sm:h-[550px] relative">
                  <div className="absolute top-4  sm:top-6 md:top-8 lg:top-10 right-4 sm:right-6 md:right-8 lg:right-10 space-y-1.5 sm:space-y-2 text-right z-10">
                    <div className="flex items-start justify-end gap-1.5 sm:gap-2 md:gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-black"></div>
                      <span className="text-[9px] sm:text-xs md:text-sm lg:text-base font-medium tracking-wider font-[Montserratmd]">
                        GAN ON DIAMOND
                      </span>
                    </div>
                    <div className="flex items-start justify-start gap-1.5 sm:gap-2 md:gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-2 border-[#c5a867] bg-white"></div>
                      <span className="text-[9px] sm:text-xs md:text-sm lg:text-base font-medium tracking-wider font-[Montserratmd]">
                        GAN ON SIC
                      </span>
                    </div>
                  </div>

                  {/* Charts Container - Aligned to bottom border with responsive heights */}
                  <div className="flex items-end justify-around absolute bottom-0 left-0 right-0 px-2 sm:px-4 md:px-6 lg:px-4 xl:px-6">
                    <div className="flex items-end gap-1">
                      <div className="w-10 md:w-12 lg:w-12 xl:w-14 rounded-t-lg bg-black flex items-center justify-center h-[180px] lg:h-[200px] xl:h-[220px]">
                        <span className="text-white text-[8px] sm:text-[10px] md:text-sm lg:text-base font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
                          40% LESS
                        </span>
                      </div>
                      <div className="w-10 md:w-12 lg:w-12 xl:w-14 rounded-t-lg border-t-2 border-r-2 border-l-2 border-[#c5a867] bg-white h-[240px] lg:h-[260px] xl:h-[280px]"></div>
                    </div>

                    {/* Chart 2 */}
                    <div className="flex items-end gap-1">
                      <div className="w-10 md:w-12 lg:w-12 xl:w-14 rounded-t-lg bg-black flex items-center justify-center h-[200px] lg:h-[220px] xl:h-[240px]">
                        <span className="text-white text-[8px] sm:text-[10px] md:text-sm lg:text-base font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
                          &gt;30W/MM
                        </span>
                      </div>
                      <div className="w-10 md:w-12 lg:w-12 xl:w-14 border-t-2 border-r-2 border-l-2 border-[#c5a867] bg-white rounded-t-lg h-[160px] xl:h-[160px]"></div>
                    </div>

                    <div className="flex items-end gap-1">
                      <div className="w-10 md:w-12 lg:w-12 xl:w-14 rounded-t-lg bg-black flex items-center justify-center h-[170px] lg:h-[190px] xl:h-[210px]">
                        <span className="text-white text-[8px] sm:text-[10px] md:text-sm lg:text-base font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
                          2–3X
                        </span>
                      </div>
                      <div className="w-10 md:w-12 lg:w-12 xl:w-14 border-t-2 border-r-2 border-l-2 border-[#c5a867] bg-white rounded-t-lg h-[120px] lg:h-[120px] xl:h-[130px]"></div>
                    </div>
                  </div>
                </div>

                <div className="w-full pt-3 flex items-center justify-around gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-1 px-2 sm:px-4 md:px-6 lg:px-10 xl:px-0">
                  <p className="text-gray-600 font-[Montserratmd] text-center text-xs sm:text-sm md:text-sm lg:text-[14px] xl:text-lg leading-relaxed tracking-wider font-normal flex-1">
                    Thermal Resistance
                  </p>
                  <p className="text-gray-600 font-[Montserratmd] text-center text-xs sm:text-sm md:text-sm lg:text-[14px] xl:text-lg leading-relaxed tracking-wider font-normal flex-1">
                    Power Density
                  </p>
                  <p className="text-gray-600 font-[Montserratmd] text-center text-xs sm:text-sm md:text-sm lg:text-[14px] xl:text-lg leading-relaxed tracking-wider font-normal flex-1">
                    Longetivity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}

      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-t-2 border-[#C8AB6E]">
          <div className="lg:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-6 lg:p-12 border-b-2 lg:border-b-0 border-[#C8AB6E]">
            <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[Galderglynnlt] leading-snug tracking-wider text-center font-normal">
              APPLICATIONS OF
              <br />
              GaN ON DIAMONDS
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3">
            <div
              onClick={() => setActivePopup("rf")}
              className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-l-2 md:border-r-2  border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center py-1 font-[Galderglynnlt]">
                  RF
                </h3>
                <div className="w-full md:h-40 lg:h-44 xl:h-55 overflow-hidden">
                  <img
                    src={RF}
                    alt="RF Systems"
                    className="w-full h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* EV Systems */}
            <div
              onClick={() => setActivePopup("ev")}
              className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center py-1 font-[Galderglynnlt]">
                  EV
                </h3>
                <div className="w-full md:h-40 lg:h-44 xl:h-55 overflow-hidden">
                  <img
                    src={Ev}
                    alt="EV Systems"
                    className="w-full h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Computing */}
            <div
              onClick={() => setActivePopup("computing")}
              className="relative overflow-hidden group cursor-pointer md:border-b-0  border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center py-1 font-[Galderglynnlt]">
                  COMPUTING
                </h3>
                <div className="w-full md:h-40 lg:h-44 xl:h-55 overflow-hidden">
                  <img
                    src={Computing}
                    alt="Computing"
                    className="w-full h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Rquestbutton />
      {activePopup === "rf" && <RFModal onClose={() => setActivePopup(null)} />}
      {activePopup === "ev" && <EVModal onClose={() => setActivePopup(null)} />}
      {activePopup === "computing" && (
        <ComputingModal onClose={() => setActivePopup(null)} />
      )}
    </div>
  );
};

export default GanOnDiamond;
