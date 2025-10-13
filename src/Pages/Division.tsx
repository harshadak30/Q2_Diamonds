import React from "react";
import { Link } from "react-router-dom";
import GanOnDiamond from "../assets/Gan on Diamond - H copy.jpg";
import QuantumH from "../assets/Quantum - H copy.jpg";
import OpticsH from "../assets/Optics - H copy 2.jpg";
import ThermalH from "../assets/Thermal - H copy 2.jpg";
import Requestbutton from "./Common/Rquestbutton";

const Division: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
  
      <div className="relative py-40 text-center bg-black md:py-60 lg:py-72 xl:py-62">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[160%] md:translate-y-[210%] lg:translate-y-[310%] xl:translate-y-[20%]  text-[#CDAE64] font-[montserrat] font-bold text-4xl md:text-5xl tracking-[0.30em]">
          DIVISION
        </h2>
      </div>

      {/* ==== Main Content ==== */}
      <main className="flex-1">
        {/* Circular Menu Section */}
        <section className="">
          <div className="px-8 py-12 space-y-8 border-gray-200 md:p-14 lg:p-12 xl:px-14 lg:px-15 border-b-1">
            {/* Image 1 */}
            <div className="relative group">
              <Link to="/GanOnDiamond">
                <img
                  src={GanOnDiamond}
                  alt="GaN on Diamond"
                  className="w-full rounded shadow-sm"
                />
                <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-10 lg:pr-30 xl:pr-64 ">
                  <h2 className="text-[#000000] lg:text-4xl md:text-2xl text-[11px] xl:font-semibold md:tracking-[0.25em] tracking-[0.30em] transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
                    GaN ON DIAMOND
                  </h2>
                </div>
              </Link>
            </div>

            {/* Image 2 */}
            <div className="relative group">
              <Link to="/Quantum">
                <img
                  src={QuantumH}
                  alt="Quantum"
                  className="w-full rounded shadow-sm"
                />
                <div className="absolute inset-0 flex items-center justify-start pl-6 xl:pl-64 lg:pl-28 md:pl-10">
                  <h2 className="text-black lg:text-4xl md:text-2xl text-[11px] xl:font-semibold lg:tracking-[0.25em] tracking-[0.30em] transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
                    QUANTUM
                  </h2>
                </div>
              </Link>
            </div>

            {/* Image 3 */}
            <div className="relative group">
              <Link to="/optics">
                <img
                  src={OpticsH}
                  alt="Optics"
                  className="w-full rounded shadow-sm"
                />
                <div className="absolute inset-0 flex items-center justify-end pr-10 md:pr-10 lg:pr-60 xl:pr-64">
                  <h2 className="text-black lg:text-4xl md:text-2xl text-[11px] xl:font-semibold md:tracking-[0.25em] tracking-[0.30em]  transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
                    OPTICS
                  </h2>
                </div>
              </Link>
            </div>

            {/* Image 4 */}
            <div className="relative group">
              <Link to="/Thermal">
                <img
                  src={ThermalH}
                  alt="Thermal"
                  className="w-full mb-6 rounded shadow-sm"
                />
                <div className="absolute inset-0 flex items-center justify-start pl-6 xl:pl-64 lg:pl-28 md:pl-10">
                  <h2 className="text-black lg:text-4xl md:text-2xl text-[11px] xl:font-semibold lg:tracking-[0.25em] tracking-[0.30em] transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
                    THERMAL
                  </h2>
                </div>
              </Link>
            </div>
          </div>
          <Requestbutton />
        </section>
      </main>

      {/* Scroll to Top */}
      {/* <button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#CDAE64] text-white flex items-center justify-center shadow-lg hover:bg-[#b69957] transition"
        aria-label="scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button> */}
    </div>
  );
};

export default Division;
