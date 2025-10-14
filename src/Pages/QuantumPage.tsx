


import Rquestbutton from "./Common/Rquestbutton";

import Quantum1 from "../assets/Quantum.png";
import Comput from "../assets/COMPUTING.png";
import sensing from "../assets/SENSING.png";
import Communication from "../assets/COMMUNICATION.png";

const Quantum: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-45 bg-black"></div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-16 md:pt-10 lg:pt-0">
        <img
          src={Quantum1}
          alt="Quantum Technology"
          className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
        />
      </section>

      {/* Description Section */}
      <section className="px-4 py-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 sm:py-4 md:py-6">
        <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed lg:tracking-[2.5px] md:tracking-[1.5px] tracking-[0.70px] font-[Montserratrg] md:text-left text-justify">
          Diamonds with engineered defects play a revolutionary role in quantum
          technologies. QQG's unique ability to host quantum-grade colour
          centers like NV (Nitrogen-Vacancy) enables powerful applications. At
          the core is diamond's stable carbon lattice, which provides an
          exceptionally noise-free environment for maintaining quantum coherence
          at room temperature, something most quantum systems cannot do.
        </p>
      </section>

      {/* Properties Section - Exact Figma Match */}
      <section className="py-8 bg-white sm:px-2">
        <div className="px-4 mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-14">
          <div className="flex items-start">
            <h2 className="text-black font-[Galderglynnlt] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal tracking-wider text-center mb-8 md:mb-12">
              PROPERTIES
            </h2>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
            <div className="w-full lg:w-1/2">
              <div className="border border-[#c5a867] bg-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center min-h-[230px]">
                <div className="mb-4 text-center sm:mb-6">
                  <h1 className="text-[70px] sm:text-[140px] md:text-[160px] lg:text-[180px] xl:text-[200px] font-galderglynn text-[#c5a867] leading-none tracking-wider">
                    100X
                  </h1>
                </div>

                {/* Title */}
                <div className="space-y-1 text-center">
                  <h2 className="text-[16px] sm:text-2xl md:text-3xl font-normal tracking-wide font-[Montserratmd] leading-snug text-black">
                    Magnetic Sensitivity
                  </h2>
                  <h2 className="text-[16px] sm:text-2xl md:text-3xl font-normal tracking-wide font-[Montserratmd] leading-snug text-black">
                    V/S
                  </h2>
                  <h2 className="text-[16px] sm:text-2xl md:text-3xl font-normal tracking-wide font-[Montserratmd] leading-snug text-black">
                    Silicon Spin Qubits
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Box - 2x2 grid with full height vertical line */}
            {/* <div className="relative w-full lg:w-1/2">
              <div className="relative h-full text-black">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#c5a867] transform -translate-x-1/2 z-10"></div>

                <div className="grid grid-cols-2 border-b border-[#c5a867]">
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[180px] bg-white">
                    <h3 className="text-2xl sm:text-3xl md:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] leading-tight mb-2 lg:mr-4">
                      Excellent
                      <br />
                      Integration
                    </h3>
                    <p className="text-base sm:text-lg md:text-2xl font-normal font-[Montserratmd] text-black">
                      with Photonics System
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[180px] bg-white">
                    <p className="text-base sm:text-lg font-normal md:text-2xl font-[Montserratmd] text-black mb-2">
                      Operates At
                    </p>
                    <h3 className="text-2xl sm:text-3xl  md:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] leading-tight">
                      Room
                      <br />
                      Temperature
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[180px] bg-white">
                    <h3 className="text-2xl sm:text-3xl  md:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] mb-2">
                      2ms
                    </h3>
                    <p className="text-base sm:text-lg font-normal md:text-2xl font-[Montserratmd] text-black">
                      Spin Coherence
                      <br />
                      Time (T<sub>2</sub>)
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[180px] bg-white">
                    <p className="text-base sm:text-lg font-normal md:text-2xl font-[Montserratmd] text-black mb-2">
                      Unmatched
                    </p>
                    <h3 className="text-2xl sm:text-3xl  md:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] leading-tight">
                      Quantum
                      <br />
                      Efficiency
                    </h3>
                  </div>
                </div>
              </div>
            </div> */}

              <div className="relative w-full lg:w-1/2">
              {/* Grid without outer border */}
              <div className="relative h-full text-black">
                {/* Vertical line that spans full height of grid */}
                <div className="absolute left-1/2 top-[10%] bottom-[10%] lg:top-0 lg:bottom-0 w-px bg-[#c5a867] transform -translate-x-1/2 z-10"></div>

                {/* First Row */}
                <div className="grid grid-cols-2 border-b border-[#c5a867]">
                  {/* Excellent Integration */}
                  <div className="p-2 sm:p-6 md:p-4 lg:p-6 xl:p-10 flex flex-col justify-center min-h-[180px] bg-white">
                    <h3 className="text-xl sm:text-[20px] md:text-[28px] lg:text-[25px] xl:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] leading-tight mb-2 lg:mr-4">
                      Excellent
                      <br />
                      Integration
                    </h3>
                    <p className="text-[12px] sm:text-lg md:text-lg font-normal font-[Montserratmd] text-black">
                      with Photonics System
                    </p>
                  </div>

                  {/* Room Temperature */}
                  <div className="pl-2 sm:p-6 md:p-4 lg:p-6 xl:p-10  flex flex-col justify-center min-h-[180px] bg-white">
                    <p className="text-[12px] sm:text-lg font-normal md:text-lg font-[Montserratmd] text-black mb-2">
                      Operates At
                    </p>
                    <h3 className="text-xl sm:text-[20px]  md:text-[28px] lg:text-[25px] xl:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] leading-tight">
                      Room
                      <br />
                      Temperature
                    </h3>
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-2">
                  {/* 2ms Spin Coherence */}
                  <div className="p-2 sm:p-6 md:p-4 lg:p-6 xl:p-10  flex flex-col justify-center min-h-[180px] bg-white">
                    <h3 className="text-xl sm:text-[20px]  md:text-[28px] lg:text-[25px] xl:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] mb-2">
                      2ms
                    </h3>
                    <p className="text-[12px] sm:text-md font-normal md:text-lg font-[Montserratmd] text-black">
                      Spin Coherence
                      <br />
                      Time (T<sub>2</sub>)
                    </p>
                  </div>

                  {/* Quantum Efficiency */}
                  <div className="pl-2 sm:p-6 md:p-4 lg:p-6 xl:p-10  flex flex-col justify-center min-h-[180px] bg-white">
                    <p className="text-[12px] sm:text-lg font-normal md:text-lg font-[Montserratmd] text-black mb-2">
                      Unmatched
                    </p>
                    <h3 className="text-xl sm:text-[20px] md:text-[28px] lg:text-[25px] xl:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] leading-tight">
                      Quantum
                      <br />
                      Efficiency
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section - Fixed */}
      <section className=" border-[#C8AB6E]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-t-1 border-[#C8AB6E]">
          {/* Left Side - Title */}
          <div className="lg:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-8 lg:p-12 border-b-2 lg:border-b-0 border-[#C8AB6E]">
            <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[Galderglynnlt] leading-snug tracking-wider text-center font-normal">
              APPLICATIONS IN THE QUANTUM FIELD
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="grid grid-cols-1 lg:col-span-6 md:grid-cols-3">
            {/* Computing */}
            <div className="relative overflow-hidden group cursor-pointer border-b-3 md:border-b-0 md:border-l-2 md:border-r-2 border-[#C8AB6E]">
              <div className="flex flex-col h-full p-1">
                <div className="flex items-center justify-center">
                  <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center   font-[Galderglynnlt]">
                    Computing
                  </h3>
                </div>

                <div className="w-full h-full overflow-hidden flex-1 min-h-[150px]">
                  <img
                    src={Comput}
                    alt="computing"
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Sensing */}
            <div className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]">
              <div className="flex flex-col h-full p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center   font-[Galderglynnlt]">
                  SENSING
                </h3>
                <div className="w-full h-full overflow-hidden flex-1 min-h-[150px]">
                  <img
                    src={sensing}
                    alt="sensing"
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Communication */}
            <div className="relative overflow-hidden group cursor-pointer md:border-b-0 border-[#C8AB6E]">
              <div className="flex flex-col h-full p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center  font-[Galderglynnlt]">
                  COMMUNICATION
                </h3>
                <div className="w-full h-full overflow-hidden flex-1 min-h-[150px]">
                  <img
                    src={Communication}
                    alt="Communication"
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Rquestbutton />
    </div>
  );
};

export default Quantum;