// import React from "react";
// import Rquestbutton from "./Common/Rquestbutton";
// import Frame from "../assets/Frame.png";
// import Quantum from "../assets/Quantum.png";
// import Sensing from "../assets/SENSING.png";
// import Computing from "../assets/COMPUTING.png";
// import Communication from "../assets/COMMUNICATION.png";

// // Import your popup images
// import { usePopup } from "./Common/usePopup";

// const QuantumLandingPage: React.FC = () => {
//   const { openPopup } = usePopup();

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
//         <img
//           src={Quantum}
//           alt="Quantum Technology"
//           className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
//         />
//         <div className="absolute inset-0 flex items-center justify-center"></div>
//       </section>

//       {/* Description Section */}
//       <section className="px-4 sm:px-6 md:px-8 lg:px-4 xl:px-35 py-4 md:py-6 mt-8 md:mt-10 lg:mt-12 ">
//         <p
//           className="font-galderglynn text-[#767676] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide sm:tracking-widest text-center md:text-left
// "
//         >
//           Diamonds with engineered defects play a revolutionary role in quantum
//           technologies. QQG’s unique ability to host quantum-grade colour
//           centers like NV (Nitrogen-Vacancy) enables powerful applications. At
//           the core is diamond’s stable carbon lattice, which provides an
//           exceptionally noise-free environment for maintaining quantum coherence
//           at room temperature, something most quantum systems cannot do.
//         </p>
//       </section>

//       {/* Properties Section */}
//    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-25 py-8 md:py-12 mb-10">
//   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-left mb-6 md:mb-8">
//     PROPERTIES
//   </h2>

//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
//     {/* Left Box - Magnetic Sensitivity */}
//     <div className="bg-white overflow-hidden  ">
//       <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
//         <img
//           src={Frame}
//           alt="Magnetic Sensitivity Chart"
//           className="w-full h-auto max-h-[280px] sm:max-h-[350px] md:max-h-[420px] lg:max-h-[500px] object-contain"
//         />
//       </div>
//     </div>

//     {/* Right Box - 2x2 Grid */}
//     <div className="bg-white overflow-hidden ">
//       <div className="grid grid-cols-2 h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px]">
//         {/* Top Left */}
//         <div className="flex items-center justify-center border-b border-r border-[#C4A55A] p-3 sm:p-4 md:p-6 lg:p-8">
//           <div className="text-center">
//             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] leading-tight">
//               Excellent<br />Integration
//             </h3>
//             <p className="text-sm sm:text-base md:text-lg font-semibold text-black mt-2">
//               with Photonics System
//             </p>
//           </div>
//         </div>

//         {/* Top Right */}
//         <div className="flex items-center justify-center border-b border-[#C4A55A] p-3 sm:p-4 md:p-6 lg:p-8">
//           <div className="text-center">
//             <p className="text-sm sm:text-base md:text-lg font-semibold text-black mb-1">
//               Operates At
//             </p>
//             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] leading-tight">
//               Room<br />Temperature
//             </h3>
//           </div>
//         </div>

//         {/* Bottom Left */}
//         <div className="flex items-center justify-center border-r border-[#C4A55A] p-3 sm:p-4 md:p-6 lg:p-8">
//           <div className="text-center">
//             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] mb-2">
//               2ms
//             </h3>
//             <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
//               Spin Coherence<br />Time (T₂)
//             </p>
//           </div>
//         </div>

//         {/* Bottom Right */}
//         <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
//           <div className="text-center">
//             <p className="text-sm sm:text-base md:text-lg font-semibold text-black mb-1">
//               Unmatched
//             </p>
//             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] leading-tight">
//               Quantum<br />Efficiency
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* Applications Section */}
//       <section className="">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#C8AB6E]">
//           {/* Left Side - Title */}
//           <div className="md:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 md:border-b-2 lg:border-b-0 md:border-r-0 lg:border-r-2 border-[#C8AB6E]">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide leading-tight text-center font-semibold">
//               APPLICATIONS IN THE
//               <br />
//               QUANTUM FIELD
//             </h2>
//           </div>

//           {/* Right Side - 3 Application Cards */}
//           <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-3">
//             {/* Computing */}
//             <div
//               onClick={() => openPopup("computing")}
//               className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 sm:border-r-0 border-[#C8AB6E] md:border-r-2"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
//                   COMPUTING
//                 </h3>
//                 <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
//                   <img
//                     src={Computing}
//                     alt="Computing"
//                     className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Sensing */}
//             <div
//               onClick={() => openPopup("quantum")}
//               className="relative overflow-hidden group cursor-pointer border-b-2  border-r-0 md:border-r-2 border-[#C8AB6E] sm:border-b-2 md:border-b-0"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
//                   SENSING
//                 </h3>
//                 <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
//                   <img
//                     src={Sensing}
//                     alt="Sensing"
//                     className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Communication */}
//             <div
//               onClick={() => openPopup("space")}
//               className="relative overflow-hidden group cursor-pointer"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
//                   COMMUNICATION
//                 </h3>
//                 <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
//                   <img
//                     src={Communication}
//                     alt="Communication"
//                     className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Rquestbutton />

//     </div>
//   );
// };

// export default QuantumLandingPage;

import Rquestbutton from "./Common/Rquestbutton";
import Ev from "../assets/EV.jpg";
import RF from "../assets/RF.png";
import Computing from "../assets/Computing.jpg";
import Quantum1 from "../assets/Quantum.png";
interface QuantumPropertyProps {
  children: React.ReactNode;
  className?: string;
}

const QuantumProperty: React.FC<QuantumPropertyProps> = ({ children, className = '' }) => {
  return (
    <p className={`pt-7 text-black flex-1 pl-6 ${className}`}>
      {children}
    </p>
  );
};
const Quantum: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
        <img
          src={Quantum1}
          alt="Quantum Technology"
          className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
        />
      </section>

      {/* Description Section */}
      <section className="px-4 sm:px-8 md:px-10 lg:px-12  xl:px-14 py-4 sm:py-4 md:py-6">
        <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed lg:tracking-[2.5px] md:tracking-[1.5px] tracking-[0.70px] font-[Montserratrg]  md:text-left text-justify">
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
        <h2 className=" text-black font-[Galderglynnlt] text-3xl lg:text-4xl xl:text-6xl font-normal tracking-wider lg:text-left md:text-center  text-center mb-6 md:mb-4 ml-1 md:ml-2">
          PROPERTIES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Box - Magnetic Sensitivity */}
          <div className=" bg-white  flex items-center justify-center border-1 border-[#c5a867] ">
            <div className=" bg-white flex flex-col justify-center">
              {/* 5X Text */}
              <div className="text-center mb-4 sm:mb-4 md:mb-6 lg:mb-8">
                <h1 className="text-[150px] sm:text-[120px] md:text-[160px] lg:text-[180px] xl:text-[200px] font-[Galderglynnlt]  text-[#c5a867] leading-none tracking-tight">
                  100X
                </h1>
              </div>

              {/* Title */}
              <div className="text-center space-y-1">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-light tracking-wider font-[Montserratmd] leading-snug">
                  Magnetic Sensitivity
                </h2>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-light tracking-wider font-[Montserratmd] leading-snug">
                  V/S
                </h2>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl x font-light tracking-wider font-[Montserratmd] leading-snug">
                  Silicon Spin Qubits
                </h2>
              </div>
            </div>
          </div>

          {/* Right Box - 2x2 Grid */}
          <div className="bg-white overflow-hidden p-8">
            <div className="grid grid-cols-2 h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px]">
              {/* Top Left */}
              <div className="flex items-center justify-center border-b border-r border-[#C4A55A] p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] leading-tight">
                    Excellent
                    <br />
                    Integration
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-black mt-2">
                    with Photonics System
                  </p>
                </div>
              </div>

              {/* Top Right */}
              <div className="flex items-center justify-center border-b border-[#C4A55A] p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="text-center">
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-black mb-1">
                    Operates At
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] leading-tight">
                    Room
                    <br />
                    Temperature
                  </h3>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="flex items-center justify-center border-r border-[#C4A55A] p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] mb-2">
                    2ms
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                    Spin Coherence
                    <br />
                    Time (T₂)
                  </p>
                </div>
              </div>

              {/* Bottom Right */}
              <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="text-center">
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-black mb-1">
                    Unmatched
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] leading-tight">
                    Quantum
                    <br />
                    Efficiency
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="px-4 sm:px-8 md:px-10 lg:px-12  xl:px-14 py-4 sm:py-4 md:py-6 lg:py-10 mb-4  ">
        <h2 className=" text-black font-[Galderglynnlt] text-3xl lg:text-4xl xl:text-6xl font-normal tracking-wider lg:text-left md:text-center  text-center mb-6 md:mb-4 ml-1 md:ml-2">
          PROPERTIES
        </h2>

        <div className=" bg-white p-2 flex items-center justify-center ">
          <div className=" w-full">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-18">
              <div className="w-full lg:w-1/2">
                <div className="border-1 border-[#c5a867] bg-white  h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] flex flex-col justify-center">
                  <div className="text-center mb-4  ">
                    <h1 className="text-[150px] sm:text-[120px] md:text-[160px] lg:text-[180px] xl:text-[220px] font-[Galderglynnlt]  text-[#c5a867] leading-none tracking-tight">
                      100X
                    </h1>
                  </div>

                  <div className="text-center space-y-1">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-light tracking-wider font-[Montserratmd] leading-snug">
                      Magnetic Sensitivity
                    </h2>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-light tracking-wider font-[Montserratmd] leading-snug">
                      V/S
                    </h2>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl x font-light tracking-wider font-[Montserratmd] leading-snug">
                      Silicon Spin Qubits
                    </h2>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className=" bg-white   h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] relative">

                  <div className="bg-white overflow-hidden ">
                    <div className="grid grid-cols-2 h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px]">
                      <div className="flex items-start justify-start border-b border-r border-[#C4A55A] ">
                        <div className="text-left pt-8 pl-3">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] leading-tight font-[Montserratmd]">
                            Excellent
                            <br />
                            Integration
                          </h3>
                          <p className="text-sm sm:text-base md:text-2xl  text-black mt-2 font-[Montserratmd]">
                            with Photonics System
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start justify-start border-b border-[#C4A55A]">
                        <div className="text-left pt-8 pl-3">
                          <p className="text-sm sm:text-base md:text-2xl  text-black mb-1 font-[Montserratmd]">
                            Operates At
                          </p>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] leading-tight font-[Montserratmd]">
                            Room
                            <br />
                            Temperature
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-start justify-start border-r border-[#C4A55A] ">
                        <div className="text-left pt-8 pl-3">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] mb-2 font-[Montserratmd]">
                            2ms
                          </h3>
                          <p className="text-sm sm:text-base md:text-2xl  text-black font-[Montserratmd]">
                            Spin Coherence
                            <br />
                            Time (T₂)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start justify-start">
                        <div className="text-left pt-8 pl-3">
                          <p className="text-sm sm:text-base md:text-2xl  text-black mb-1 font-[Montserratmd]">
                            Unmatched
                          </p>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#C4A55A] leading-tight font-[Montserratmd]">
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
            </div>
          </div>
        </div>
      </section> */}



 <section className="bg-white py-8">
      <div className="bg-white pb-10  mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">PROPERTIES</h1>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Box */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="text-black text-center">
              <h1 className="text-6xl md:text-7xl font-bold mb-2">100X</h1>
              <p className="text-lg md:text-xl">
                Magnetic Sensitivity<br />
                V/S<br />
                Silicon Spin Qubits
              </p>
            </div>
          </div>

          {/* Right Box - Maintains 2x2 grid on all screens */}
          <div className="w-full lg:w-1/2">
            <div className="text-black h-full">
              {/* First Row */}
              <div className="grid grid-cols-2 sm:grid-cols-2 w-full">
                <div className="p-6 border-r sm:border-r border-b border-[#c5a867] ">
                  <span className="font-bold text-xl md:text-2xl block">
                    Excellent <br />
                    Integration <br />
                  </span>
                  <br />
                  with Photonics System
                </div>
                
                <div className="p-6 border-b border-[#c5a867] ">
                  Operates At <br />
                  <span className="font-bold text-xl md:text-2xl block">
                    Room <br />
                    Temperature
                  </span>
                </div>
              </div>
              
              {/* Second Row */}
              <div className="grid grid-cols-2 sm:grid-cols-2 w-full">
                <div className="p-6 border-r sm:border-r  border-[#c5a867]">
                  <span className="font-bold text-xl md:text-2xl">2ms </span> <br />
                  Spin Coherence <br />
                  Time (T<sub>2</sub>)
                </div>
                
                <div className="p-6  border-[#c5a867]">
                  Unmatched <br />
                  <span className="font-bold text-xl md:text-2xl block">
                    Quantum <br />
                    Efficiency
                  </span>
                </div>
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
              GaN ON DIAMONDS
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3">
            {/* RF Systems */}
            <div className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-l-2 md:border-r-2  border-[#C8AB6E]">
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
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
            <div className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]">
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
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
            <div className="relative overflow-hidden group cursor-pointer md:border-b-0  border-[#C8AB6E]">
              <div className="p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
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

      {/* Popups */}
    </div>
  );
};

export default Quantum;
