// src/pages/Division.tsx
import React from "react";
import { Link } from "react-router-dom";
import GanOnDiamond from "../assets/Gan on Diamond - H copy.jpg";
import QuantumH from "../assets/Quantum - H copy.jpg";
import OpticsH from "../assets/Optics - H copy 2.jpg";
import ThermalH from "../assets/Thermal - H copy 2.jpg";
import Requestbutton from "./Common/Rquestbutton";

const Division: React.FC = () => {

    return (
        <div className="bg-white min-h-screen flex flex-col overflow-hidden">
            {/* ==== Header Section ==== */}
            {/* <header className="bg-black">
                <div className="flex justify-around items-center md:space-x-100">
                    <div className="text-white">
                        <img src="images/Q2 logoWhite.png" alt="Logo" className="w-25 h-25 object-contain" />
                    </div>
                    <div className="text-white space-x-10 md:text-xl">
                        <button>About Us</button>
                        <button>Division</button>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
               
            </header> */}
             <div className="bg-black text-center py-40 md:py-55 ">
                    <h2 className="text-[#CDAE64] font-[montserratmd] text-3xl  md:text-5xl tracking-[0.25em]">
                        DIVISION
                    </h2>
                </div>

            {/* ==== Main Content ==== */}
            <main className="flex-1">
                {/* Circular Menu Section */}
                <section className="">
                    <div className="space-y-8 md:p-14 p-7 py-10 border-b-2 border-black">
                        {/* Image 1 */}
                        <div className="relative group">
                            <Link to="/GanOnDiamond">
                                <img
                                    src={GanOnDiamond}
                                    alt="GaN on Diamond"
                                    className="w-full rounded shadow-md"
                                />
                                <div className="absolute inset-0 flex items-center justify-end md:pr-10 lg:pr-64 pr-2 ">
                                    <h2 className="text-black lg:text-4xl md:text-2xl text-sm lg:font-semibold md:tracking-[0.25em] tracking-[0.20em] transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
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
                                    className="w-full rounded shadow-md"
                                />
                                <div className="absolute inset-0 flex items-center justify-start lg:pl-64 md:pl-10 pl-6">
                                    <h2 className="text-black lg:text-4xl md:text-2xl text-sm lg:font-semibold lg:tracking-[0.25em] tracking-[0.20em] transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
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
                                    className="w-full rounded shadow-md"
                                />
                               <div className="absolute inset-0 flex items-center justify-end md:pr-10 lg:pr-64 pr-10">
                                    <h2 className="text-black lg:text-4xl md:text-2xl text-sm lg:font-semibold md:tracking-[0.25em] tracking-[0.20em]  transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
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
                                    className="w-full rounded shadow-md "
                                />
                                 <div className="absolute inset-0 flex items-center justify-start lg:pl-64 md:pl-10 pl-6">
                                    <h2 className="text-black lg:text-4xl md:text-2xl text-sm lg:font-semibold lg:tracking-[0.25em] tracking-[0.20em] transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
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
            <button
                className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#CDAE64] text-white flex items-center justify-center shadow-lg hover:bg-[#b69957] transition"
                aria-label="scroll to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                ↑
            </button>
        </div>
    );
};

export default Division;
