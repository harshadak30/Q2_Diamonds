import React from "react";
import Rquestbutton from "./Common/Rquestbutton";

import Frame4 from "../assets/Frame4.png";
import Tharmal from "../assets/Tharmal.png";
import Gragh1 from "../assets/gragh1.jpg";
import aeroplane from "../assets/Aerospace.png";
import photonics from "../assets/photonics.png";
import powerelectonics from "../assets/power electronics.png";

const Thermal: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative ">
        <img
          src={Frame4}
          alt="Optics Technology"
          className="w-full h-full object-cover opacity-100"
        />
      </section>

      {/* Description Section */}
      <section className=" mx-auto px-12 py-12">
        <p className="text-gray-600 text-lg leading-relaxed">
          Diamond possesses a combination of optical, thermal, and mechanical
          properties that no other optical material can match. These properties
          make QOG line of products ideal for applications that demand extreme
          power handling, wide spectral transmission, thermal stability, and
          environmental durability.
        </p>
      </section>

      {/* Properties Section - TWO BOXES SIDE BY SIDE */}
      <section className=" mx-auto px-12 py-8">
        <h2 className="text-3xl font-normal mb-10 tracking-wide">PROPERTIES</h2>

        <div className="flex gap-6">
          {/* Left Box - Lifespan */}
          <div className="flex-1  flex flex-col justify-center items-center bg-white">
            <div className="w-full h-full flex flex-col">
              <img
                src={Tharmal}
                alt="Transmission Chart"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Box - Transmission Graph - Replace with your graph image */}
          <div className="flex-1  bg-white flex items-center justify-center">
            <div className="w-full h-full flex flex-col">
              <img
                src={Gragh1}
                alt="Transmission Chart"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section - TITLE + 3 IMAGES IN ONE ROW */}

      <section className="mt-16">
        <div className="flex">
          {/* Left Side - Title */}
          <div className="w-3/5 bg-white flex items-center border-[#C8AB6E] border-2 p-2">
            <h2 className="text-7xl font-normal tracking-wide leading-tight text-center">
              APPLICATIONS OF
              <br />
              THERMAL
            </h2>
          </div>

          {/* Laser Systems */}
          <div className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
            <h3 className="text-black text-sm font-semibold tracking-widest text-center">
              LASER SYSTEMS
            </h3>
            <div className="w-full h-80 overflow-hidden">
              <img
                src={powerelectonics}
                alt="Laser Systems"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Quantum Optics */}
          <div className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
            <h3 className="text-black text-sm font-semibold tracking-widest text-center">
              QUANTUM OPTICS
            </h3>
            <div className="w-full h-80 overflow-hidden">
              <img
                src={photonics}
                alt="Quantum Optics"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Space */}
          <div className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
            <h3 className="text-black text-sm font-semibold tracking-widest text-center">
              SPACE
            </h3>
            <div className="w-full h-80 overflow-hidden">
              <img
                src={aeroplane}
                alt="Space"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
      <Rquestbutton />
    </div>
  );
};

export default Thermal;
