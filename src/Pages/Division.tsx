// src/pages/Division.tsx
import React from "react";
import { Link } from "react-router-dom";
import GanOnDiamond from "../assets/Gan on Diamond - H copy.jpg";
import QuantumH from "../assets/Quantum - H copy.jpg";
import OpticsH from "../assets/Optics - H copy.jpg";
import ThermalH from "../assets/Thermal - H copy.jpg";
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
                <div className="container mx-auto text-center py-40">
                    <h2 className="text-[#CDAE64] text-3xl md:text-6xl font-semibold tracking-widest">
                        DIVISION
                    </h2>
                </div>
            </header> */}

            {/* ==== Main Content ==== */}
            <main className="flex-1">
                {/* Circular Menu Section */}
                <section className="">
                    <div className="space-y-8 p-14">
                        {/* Image 1 */}
                        <div className="relative group">
                            <Link to="">
                                <img
                                    src={GanOnDiamond}
                                    alt="GaN on Diamond"
                                    className="w-full rounded shadow-md"
                                />
                                <div className="absolute inset-0 flex items-center justify-end md:pr-64">
                                    <h2 className="text-black md:text-4xl font-semibold tracking-widest transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
                                        GaN ON DIAMOND
                                    </h2>
                                </div>
                            </Link>
                        </div>


                        {/* Image 2 */}
                        <div className="relative group">
                            <Link to="">
                                <img
                                    src={QuantumH}
                                    alt="Quantum"
                                    className="w-full rounded shadow-md"
                                />
                                <div className="absolute inset-0 flex items-center justify-start md:pl-64">
                                    <h2 className="text-black md:text-4xl font-semibold tracking-widest transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
                                        QUANTUM
                                    </h2>
                                </div>
                            </Link>
                        </div>

                        {/* Image 3 */}
                        <div className="relative group">
                            <Link to="">
                                <img
                                    src={OpticsH}
                                    alt="Optics"
                                    className="w-full rounded shadow-md"
                                />
                               <div className="absolute inset-0 flex items-center justify-end md:pr-[450px]">
                                    <h2 className="text-black md:text-4xl font-semibold tracking-widest transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
                                        OPTICS
                                    </h2>
                                </div>
                            </Link>
                        </div>

                        {/* Image 4 */}
                        <div className="relative group">
                            <Link to="">
                                <img
                                src={ThermalH}
                                    alt="Thermal"
                                    className="w-full rounded shadow-md "
                                />
                                 <div className="absolute inset-0 flex items-center justify-start md:pl-64">
                                    <h2 className="text-black md:text-4xl font-semibold tracking-widest transition-transform duration-300 group-hover:scale-105 group-hover:text-[#CDAE64]">
                                        THERMAL
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-white py-20 px-4">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:px-30">
                        <h3 className="md:text-5xl font-bold tracking-wider">REACH US TODAY</h3>
                        <Link
                            to=""
                            className="bg-black md:text-md tracking-wider font-semibold text-white px-30 py-4 rounded-lg shadow transition"
                        >
                            REQUEST A CALLBACK
                        </Link>
                    </div>
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
