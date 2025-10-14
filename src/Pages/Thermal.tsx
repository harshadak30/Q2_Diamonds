import Rquestbutton from "./Common/Rquestbutton";
import Powerelectronic from "../assets/power electronics.png";
import photonics from "../assets/photonics.png";
import AREOSPACE from "../assets/Aerospace.png";
import optic_graph from "../assets/GanDiamonds/Thermal_graph.png";

import Frame4 from "../assets/Thermalhero.jpg";
import { useState } from "react";
import POWERELECTRONICS, { AEROSPACE, PHOTONICS } from "./Common/ThermalPopup";
const Thermal = () => {
  const [activePopup, setActivePopup] = useState<
    "POWERELECTRONICS" | "PHOTONICS" | "AEROSPACE" | null
  >(null);



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-16 md:pt-10 lg:pt-0">
        <img
          src={Frame4}
          alt="Optics Technology"
          className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-galderglynn text-black font-semibold mb-4 tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] lg:tracking-[0.50em] transform translate-y-0">
              THERMAL
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-25 sm:py-8 md:py-10">
        <p className="font-galderglynn text-[#767676] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide sm:tracking-widest text-center md:text-left ">
          Diamond is the highest thermally conductive solid material known to
          man, outperforming copper, aluminum nitride, and even SiC by an order
          of magnitude. With QTG line of products, this property becomes
          scalable for advanced industrial and electronic use.
        </p>
      </section>

      <section className="px-5  2xl:px-23 ">
        <h2 className="text-black font-[Galderglynnlt] text-3xl sm:text-5xl md:text-5xl xl:text-5xl tracking-wider text-center md:text-left mb-6 md:mb-8 ml-1 md:ml-2">
          PROPERTIES
        </h2>

        <div className="flex items-center justify-center  bg-white">
          <div className="w-full mx-auto ">
            {/* Main Container with two boxes side by side */}
            <div className="flex flex-col gap-1 lg:flex-row lg:gap-10 xl:gap-16">
              {/* Left Card */}
              <div className="flex flex-col w-full lg:w-1/2">
                {/* Border Box */}
                <div className="border-2 border-[#c5a867] sm:p-5   xl:p-14 2xl:p-20 flex flex-col justify-center h-[330px] lg:h-[350px] xl:h-[470px] ">
                  {/* 5X Text */}
                  <div className=" mt-5 mb-4 text-center">
                    <h1 className="text-[180px] xl:text-[270px] 2xl:text-[300px] font-[Galderglynnbd] font-extrabold text-[#c5a867] leading-none tracking-tight">
                      5X
                    </h1>
                  </div>

                  {/* Title */}
                  <div className="space-y-1 text-center mb-8">
                    <h2 className="text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                      Thermal Dissipation
                    </h2>
                    <h2 className="text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                      V/S
                    </h2>
                    <h2 className="text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                      GaN On SiC
                    </h2>
                  </div>
                </div>

                {/* Left Bottom Text - Fixed Height */}
                <div className="flex items-center justify-center w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px] 2xl:h-[55px]">
                  <p className="text-gray-600 text-[15px] lg:text-base xl:text-lg 2xl:text-xl leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4">
                    Breakdown Operates at 5 – 10X higher power density
                  </p>
                </div>
              </div>

              {/* Right Card - Image */}
              <div className="flex flex-col w-full lg:w-1/2">
                {/* Border Box - Matches left card */}
                <div className=" overflow-hidden flex items-center justify-center h-[330px] lg:h-[350px] xl:h-[500px]">
                  <img
                    src={optic_graph}
                    alt="Comparison chart"
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Right Bottom Text - Fixed Height to match left */}
                <div className="flex items-center justify-center w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px] 2xl:h-[80px]">
                  <p className="text-gray-600 text-[15px] lg:text-base xl:text-lg 2xl:text-xl leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-t-2 border-[#C8AB6E]">
          {/* Left Side - Title */}
          <div className="lg:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-6 lg:p-12 border-b-2 lg:border-b-0 border-[#C8AB6E]">
            <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[Galderglynnlt] leading-snug tracking-wider text-center font-normal">
              APPLICATIONS OF
              <br />
              THERMAL
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="grid grid-cols-1 lg:col-span-6 md:grid-cols-3">
            {/* POWER ELECTRONICS */}
            <div
              onClick={() => setActivePopup("POWERELECTRONICS")}
              className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-l-2 md:border-r-2  border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center py-1  font-[Galderglynnlt]">
                  Power Electronics
                </h3>
                <div className="w-full overflow-hidden md:h-55 lg:h-60 xl:h-70">
                  <img
                    src={Powerelectronic}
                    alt="Power Electronics"
                    className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/*  PHOTONICS */}
            <div
              onClick={() => setActivePopup("PHOTONICS")}
              className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center py-1  font-[Galderglynnlt]">
                  PHOTONICS
                </h3>
                <div className="w-full overflow-hidden md:h-55 lg:h-60 xl:h-70">
                  <img
                    src={photonics}
                    alt="photonics"
                    className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* AEROSPACE */}
            <div
              onClick={() => setActivePopup("AEROSPACE")}
              className="relative overflow-hidden group cursor-pointer md:border-b-0  border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center py-1 font-[Galderglynnlt]">
                  AREOSPACE
                </h3>
                <div className="w-full overflow-hidden md:h-55 lg:h-60 xl:h-70">
                  <img
                    src={AREOSPACE}
                    alt="AREOSPACE"
                    className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Rquestbutton />
      {activePopup === "POWERELECTRONICS" && (
        <POWERELECTRONICS onClose={() => setActivePopup(null)} />
      )}
      {activePopup === "PHOTONICS" && (
        <PHOTONICS onClose={() => setActivePopup(null)} />
      )}
      {activePopup === "AEROSPACE" && (
        <AEROSPACE onClose={() => setActivePopup(null)} />
      )}
  
    </div>
  );
};

export default Thermal;
