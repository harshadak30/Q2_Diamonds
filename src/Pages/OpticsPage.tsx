// import React, { useState } from "react";
// import Rquestbutton from "./Common/Rquestbutton";
// import PopUp from "./Common/PopUp";
// import { usePopup } from "./Common/usePopup";
// import ApplicationsPopup from "./Common/a";
// import OpticsHero from "../assets/Optics.jpg";
// import LaserSystems from "../assets/LaserSystems.png";
// import QuantumOptics from "../assets/QuantumOptics.png";
// import SpaceOptics from "../assets/SpaceOptics.png";
// import laser from "../assets/popupoptics.png";
// import laser2 from "../assets/popupoptics1.png";
// import laser3 from "../assets/popupoptics2.png";
// import QuantumPage from "../assets/popupoptics_2_1.png";
// import QuantumPage1 from "../assets/popupoptics_2_2.png";
// import QuantumPage2 from "../assets/popupoptics_2_3.png";
// import space from "../assets/popupoptics_3_1.png";
// import space1 from "../assets/popupoptics_3_2.png";
// import space2 from "../assets/popupoptics_3_3.png";
// import graph from "../assets/optic_graph.png";

// const Optics: React.FC = () => {
//   const { openPopup, closePopup, isPopupOpen } = usePopup();
//   const [isPopupOpens, setIsPopupOpens] = useState(false);

//   const popupData = {
//     laser: [laser2, laser, laser3],
//     quantum: [QuantumPage, QuantumPage1, QuantumPage2],
//     space: [space, space1, space2],
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}

//       <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
//         <div className="relative w-full">
//           <img
//             src={OpticsHero}
//             alt="Optics Technology"
//             className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[galderglynnlt] text-black font-normal tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] lg:tracking-[0.60em]">
//               OPTICS
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* Description Section */}
//       <section className="px-4 sm:px-8 md:px-10 lg:px-12  xl:px-14 py-6 sm:py-6 md:py-8">
//         <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed lg:tracking-[2.5px] md:tracking-[1.5px] tracking-[0.70px] font-[Montserratrg]  md:text-left text-justify">
//           Diamond possesses a combination of optical, thermal, and mechanical
//           properties that no other optical material can match. These properties
//           make QOG line of products ideal for applications that demand extreme
//           power handling, wide spectral transmission, thermal stability, and
//           environmental durability.
//         </p>
//       </section>

//       {/* Properties Section */}
//       <section className="px-4 sm:px-8 md:px-10 lg:px-12  xl:px-14 py-4 sm:py-4 md:py-6 lg:py-10 mb-4  ">
//         <h2 className=" text-[#333333] font-[Galderglynnlt] text-3xl lg:text-4xl xl:text-5xl  tracking-wider lg:text-left md:text-center  text-center mb-6 md:mb-4 ml-1 md:ml-2">
//           PROPERTIES
//         </h2>

//         <div className=" bg-white p-2 flex items-center justify-center ">
//           <div className=" w-full">
//             {/* <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24">
//               <div className="w-full lg:w-1/2">
//                 <div className="border-2 border-[#c5a867] bg-white p-6 sm:p-8 md:p-10 lg:p-10 xl:p-12 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[650px] flex flex-col justify-center">
//                   <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
//                     <h1 className="text-[150px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[300px] font-[Galderglynnbd] font-extrabold text-[#c5a867] leading-none tracking-tight">
//                       10X
//                     </h1>
//                   </div>

//                   <div className="text-center space-y-1">
//                     <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                       Lifespan
//                     </h2>
//                     <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                       V/S
//                     </h2>
//                     <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                       Glass Or Sapphire
//                     </h2>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full lg:w-1/2">
//                 <div className="border-2 border-[#c5a867] bg-white  sm:p-2 md:p-2 lg:p-10 xl:p-12 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[650px] relative">
//                   <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 right-4 sm:right-6 md:right-8 lg:right-10 space-y-1.5 sm:space-y-2 text-right z-10">
//                     <div className="flex items-start justify-end gap-1.5 sm:gap-2 md:gap-3">
//                       <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-black"></div>

//                       <span className="text-[9px] sm:text-xs md:text-sm lg:text-base font-medium tracking-wider font-[Montserratmd]">
//                         GAN ON DIAMOND
//                       </span>
//                     </div>
//                     <div className="flex items-start justify-start gap-1.5 sm:gap-2 md:gap-3">
//                       <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-2 border-[#c5a867] bg-white"></div>

//                       <span className="text-[9px] sm:text-xs md:text-sm lg:text-base font-medium tracking-wider font-[Montserratmd]">
//                         GAN ON SIC
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-end justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-18 2xl:gap-24 h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] xl:h-[450px] mt-19 sm:mt-19 md:mt-22 lg:mt-14 xl:mt-12 2xl:mt-12">
//                       <div className="flex items-end gap-2 sm:gap-3 md:gap-4">
//                       <div
//                         className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17  rounded-t-lg bg-black flex items-center justify-center "
//                         style={{ height: "240px" }}
//                       >
//                         <span className="text-white text-[10px] sm:text-xs md:text-base lg:text-lg font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
//                           40% LESS
//                         </span>
//                       </div>
//                       <div
//                         className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17   rounded-t-lg border-t-2 border-r-2 border-l-2 border-[#c5a867] bg-white"
//                         style={{ height: "280px" }}
//                       ></div>
//                     </div>

//                      <div className="flex items-end gap-2 sm:gap-3 md:gap-4">
//                       <div
//                         className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17  rounded-t-lg bg-black flex items-center justify-center"
//                         style={{ height: "260px" }}
//                       >
//                         <span className="text-white text-[10px] sm:text-xs md:text-base lg:text-lg font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
//                           {'>'}30W/MM
//                         </span>
//                       </div>
//                       <div
//                         className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17  border-t-2 border-r-2 border-l-2 border-[#c5a867] bg-white rounded-t-lg"
//                         style={{ height: "160px" }}
//                       ></div>
//                     </div>

//                     <div className="flex items-end gap-2 sm:gap-3 md:gap-4">
//                       <div
//                         className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17  rounded-t-lg bg-black flex items-center justify-center"
//                         style={{ height: "210px" }}
//                       >
//                         <span className="text-white text-[10px]sm:text-xs md:text-base lg:text-lg font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
//                           2–3X
//                         </span>
//                       </div>
//                       <div
//                         className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17  border-t-2 border-r-2 border-l-2 border-[#c5a867] bg-white rounded-t-lg"
//                         style={{ height: "130px" }}
//                       ></div>
                  
//                   </div>
//                   </div>

//                 </div>
//               </div>
//             </div> */}

//             <div className="bg-white p-2 flex items-center justify-center">
//               <div className="w-full">
//                 {/* Main Container with two boxes side by side */}
//                 <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24">
//                   {/* Left Card - UNCHANGED */}
//                   <div className="w-full lg:w-1/2">
//                     <div className="border-2 border-[#c5a867] bg-white p-6 sm:p-8 md:p-10 lg:p-10 xl:p-12 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[650px] flex flex-col justify-center">
//                       {/* 5X Text */}
//                       <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
//                         <h1 className="text-[150px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[300px] font-[Galderglynnbd] font-extrabold text-[#c5a867] leading-none tracking-tight">
//                           10X
//                         </h1>
//                       </div>

//                       {/* Title */}
//                       <div className="text-center space-y-1">
//                         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                           Lifespan
//                         </h2>
//                         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                           V/S
//                         </h2>
//                         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                           Glass Or Sapphire
//                         </h2>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right Card - REPLACED WITH IMAGE */}
//                   <div className="w-full lg:w-1/2">
//                     <div className=" bg-white h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[650px] flex items-center justify-center overflow-hidden">
//                       {/* Image placeholder - replace src with your actual image path */}
//                       <img
//                         src={graph}
//                         alt="Comparison chart"
//                         className="w-full h-full object-fill"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Bottom Section - Text and Labels */}
//                 <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-4 mt-4 md:mt-6">
//                   {/* Left Bottom Text */}
//                   <div className="w-full lg:w-1/2 flex items-end">
//                     <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-18">
//                       Operates at 5 – 10X higher power density
//                     </p>
//                   </div>

//                   {/* Right Bottom Labels - Empty space to maintain layout */}
//                   <div className="w-full lg:w-1/2"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Section - Text and Labels */}
//             {/* <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-4 mt-4 md:mt-6">
//               <div className="w-full lg:w-1/2 flex items-end">
//                 <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-18">
//                  Operates at 5 – 10X higher power density
//                 </p>
//               </div>

// =              <div className="w-full lg:w-1/2 flex items-center justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-1 px-2 sm:px-4 md:px-6 lg:px-10 xl:px-18">
//                 <p className="text-gray-600 font-[Montserratmd] text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wider font-normal flex-1">
//                   Thermal
//                   <br />
//                   Resistance
//                 </p>
//                 <p className="text-gray-600 font-[Montserratmd] text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wider not-last:font-normal flex-1">
//                   Power
//                   <br />
//                   Density
//                 </p>
//                 <p className="text-gray-600 font-[Montserratmd] text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wider font-normal flex-1">
//                   Longetivity
//                 </p>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </section>
//       {/* Applications Section */}

//       <section className="">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-t-2 border-[#C8AB6E]">
//           {/* Left Side - Title */}
//           <div className="lg:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-6 lg:p-12 border-b-2 lg:border-b-0 border-[#C8AB6E]">
//             <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[Galderglynnlt] leading-snug tracking-wider text-center font-normal">
//               APPLICATIONS OF
//               <br />
//               OPTICS
//             </h2>
//           </div>

//           {/* Right Side - 3 Application Cards */}
//           <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3">
//             {/* Laser Systems Systems */}
//             <div
//               onClick={() => setIsPopupOpens(true)}
//               className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-l-2 md:border-r-2  border-[#C8AB6E]"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
//                   Laser Systems
//                 </h3>
//                 <div className="w-full md:h-40 lg:h-48 xl:h-68 overflow-hidden">
//                   <img
//                     src={LaserSystems}
//                     alt="Laser Systems"
//                     className="w-full h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/*  QUANTUM OPTICS */}
//             <div
//               onClick={() => openPopup("quantum")}
//               className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
//                   QUANTUM OPTICS
//                 </h3>
//                 <div className="w-full md:h-40 lg:h-48 xl:h-68 overflow-hidden">
//                   <img
//                     src={QuantumOptics}
//                     alt=" QUANTUM OPTICS"
//                     className="w-full h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* SpaceOptics */}
//             <div
//               onClick={() => openPopup("space")}
//               className="relative overflow-hidden group cursor-pointer md:border-b-0  border-[#C8AB6E]"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
//                   Space
//                 </h3>
//                 <div className="w-full md:h-40 lg:h-48 xl:h-68 overflow-hidden">
//                   <img
//                     src={SpaceOptics}
//                     alt="SpaceOptics"
//                     className="w-full h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Rquestbutton />
//       <ApplicationsPopup
//         isOpen={isPopupOpens}
//         onClose={() => setIsPopupOpens(false)}
//       />
//       {/* Popups */}
//       <PopUp
//         isOpen={isPopupOpen("laser")}
//         onClose={closePopup}
//         images={popupData.laser}
//       />

//       <PopUp
//         isOpen={isPopupOpen("quantum")}
//         onClose={closePopup}
//         images={popupData.quantum}
//       />

//       <PopUp
//         isOpen={isPopupOpen("space")}
//         onClose={closePopup}
//         images={popupData.space}
//       />
//     </div>
//   );
// };

// export default Optics;



import React, { useState } from "react";
import Rquestbutton from "./Common/Rquestbutton";
// import PopUp from "./Common/PopUp";
import { usePopup } from "./Common/usePopup";
// import ApplicationsPopup from "./Common/RFModal";
import OpticsHero from "../assets/Optics.jpg";
import LaserSystems from "../assets/LaserSystems.png";
import QuantumOptics from "../assets/QuantumOptics.png";
import SpaceOptics from "../assets/SpaceOptics.png";
// import laser from "../assets/popupoptics.png";
// import laser2 from "../assets/popupoptics1.png";
// import laser3 from "../assets/popupoptics2.png";
// import QuantumPage from "../assets/popupoptics_2_1.png";
// import QuantumPage1 from "../assets/popupoptics_2_2.png";
// import QuantumPage2 from "../assets/popupoptics_2_3.png";
// import space from "../assets/popupoptics_3_1.png";
// import space1 from "../assets/popupoptics_3_2.png";
// import space2 from "../assets/popupoptics_3_3.png";
import graph from "../assets/GanDiamonds/optic_graph.png";
import LASERSYSTEMS, { QUANTUMOPTICS, SPACE } from "./Common/OpticsPopup";

const Optics: React.FC = () => {
  const { openPopup, closePopup, isPopupOpen } = usePopup();
  const [isPopupOpens, setIsPopupOpens] = useState(false);
  const [activePopup, setActivePopup] = useState<'LASERSYSTEMS' | 'QUANTUMOPTICS' | 'SPACE' | null>(null);

  // const popupData = {
  //   laser: [laser2, laser, laser3],
  //   quantum: [QuantumPage, QuantumPage1, QuantumPage2],
  //   space: [space, space1, space2],
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="relative flex items-center justify-center pt-16 md:pt-10 lg:pt-0">
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

      {/* Description Section */}
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
              {/* Left Card */}
              <div className="flex flex-col justify-between w-full gap-8 just lg:w-1/2 ">
                {/* Border Box */}
                <div className="border-2 border-[#c5a867] bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 flex flex-col justify-center min-h-[320px] md:min-h-[320px] lg:min-h-[480px] xl:min-h-[500px] 2xl:min-h-[720px]">
                  {/* 10X Text */}
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
              onClick={() => setActivePopup('LASERSYSTEMS')}
              className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-l-2 md:border-r-2  border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black text-sm  font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
                  Laser Systems
                </h3>
                <div className="w-full overflow-hidden md:h-40 lg:h-40 xl:h-68">
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
            onClick={() => setActivePopup('QUANTUMOPTICS')}
              className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black  sm:text-sm  font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
                  QUANTUM OPTICS
                </h3>
                <div className="w-full overflow-hidden md:h-40 lg:h-40 xl:h-68">
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
              onClick={() => setActivePopup('SPACE')}
              className="relative overflow-hidden group cursor-pointer md:border-b-0  border-[#C8AB6E]"
            >
              <div className="p-1">
                <h3 className="text-black text-sm  font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
                  Space
                </h3>
                <div className="w-full overflow-hidden md:h-40 lg:h-40 xl:h-68">
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

 {activePopup === 'LASERSYSTEMS' && <LASERSYSTEMS onClose={() => setActivePopup(null)} />}
      {activePopup === 'QUANTUMOPTICS' && <QUANTUMOPTICS onClose={() => setActivePopup(null)} />}
      {activePopup === 'SPACE' && <SPACE onClose={() => setActivePopup(null)} />}
 


      {/* <ApplicationsPopup
        isOpen={isPopupOpens}
        onClose={() => setIsPopupOpens(false)}
      />
      {/* Popups */}
      {/* <PopUp
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
      /> */} 
    </div>
  );
};

export default Optics;



// import React, { useState } from "react";
// import Rquestbutton from "./Common/Rquestbutton";
// import PopUp from "./Common/PopUp";
// import { usePopup } from "./Common/usePopup";
// import ApplicationsPopup from "./Common/a";
// import OpticsHero from "../assets/Optics.jpg";
// import LaserSystems from "../assets/LaserSystems.png";
// import QuantumOptics from "../assets/QuantumOptics.png";
// import SpaceOptics from "../assets/SpaceOptics.png";
// import laser from "../assets/popupoptics.png";
// import laser2 from "../assets/popupoptics1.png";
// import laser3 from "../assets/popupoptics2.png";
// import QuantumPage from "../assets/popupoptics_2_1.png";
// import QuantumPage1 from "../assets/popupoptics_2_2.png";
// import QuantumPage2 from "../assets/popupoptics_2_3.png";
// import space from "../assets/popupoptics_3_1.png";
// import space1 from "../assets/popupoptics_3_2.png";
// import space2 from "../assets/popupoptics_3_3.png";
// import graph from "../assets/GanDiamonds/optic_graph.png";

// const Optics: React.FC = () => {
//   const { openPopup, closePopup, isPopupOpen } = usePopup();
//   const [isPopupOpens, setIsPopupOpens] = useState(false);

//   const popupData = {
//     laser: [laser2, laser, laser3],
//     quantum: [QuantumPage, QuantumPage1, QuantumPage2],
//     space: [space, space1, space2],
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}

//       <section className="relative flex items-center justify-center pt-16 md:pt-10 lg:pt-0">
//         <div className="relative w-full">
//           <img
//             src={OpticsHero}
//             alt="Optics Technology"
//             className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[galderglynnlt] text-black font-normal tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] lg:tracking-[0.60em]">
//               OPTICS
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* Description Section */}
//       <section className="px-4 py-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 sm:py-6 md:py-8">
//         <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed lg:tracking-[2.5px] md:tracking-[1.5px] tracking-[0.70px] font-[Montserratrg]  md:text-left text-justify">
//           Diamond possesses a combination of optical, thermal, and mechanical
//           properties that no other optical material can match. These properties
//           make QOG line of products ideal for applications that demand extreme
//           power handling, wide spectral transmission, thermal stability, and
//           environmental durability.
//         </p>
//       </section>

//       {/* Properties Section */}
//       <section className="px-4 py-4 mb-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 sm:py-4 md:py-6 lg:py-10 ">
//         <h2 className=" text-[#333333] font-[Galderglynnlt] text-4xl xl:text-5xl  tracking-wider text-left   mb-6 md:mb-4 ml-1 md:ml-2">
//           PROPERTIES
//         </h2>

//         <div className="flex items-center justify-center p-2 bg-white">
//           <div className="w-full mx-auto ">
//             {/* Main Container with two boxes side by side */}
//             <div className="flex flex-col gap-6 lg:flex-row sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
//               {/* Left Card */}
//               <div className="flex flex-col justify-between w-full gap-8 just lg:w-1/2 ">
//                 {/* Border Box */}
//                 <div className="border-2 border-[#c5a867] bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 flex flex-col justify-center min-h-[380px] md:min-h-[320px] lg:min-h-[480px] xl:min-h-[610px] 2xl:min-h-[720px]">
//                   {/* 10X Text */}
//                   <div className="mb-4 text-center sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
//                     <h1 className="text-[140px] lg:text-[160px] xl:text-[200px] 2xl:text-[280px] font-[Galderglynnbd] font-extrabold text-[#c5a867] leading-none tracking-tight">
//                       10X
//                     </h1>
//                   </div>

//                   {/* Title */}
//                   <div className="space-y-1 text-center sm:space-y-2">
//                     <h2 className="text-xl xl:text-2xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                       Lifespan
//                     </h2>
//                     <h2 className="text-xl xl:text-2xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                       V/S
//                     </h2>
//                     <h2 className="text-xl xl:text-2xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                       Glass Or Sapphire
//                     </h2>
//                   </div>
//                 </div>

//                 {/* Left Bottom Text - Fixed Height */}
//                 <div className="flex items-center justify-center w-full ">
//                   <p className="text-gray-600  text-lg lg:text-base xl:text-xl 2xl:text-3xl leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4">
//                     Operates at 5 – 10X higher power density
//                   </p>
//                 </div>
//               </div>

//               {/* Right Card - Image */}
//               <div className="flex flex-col w-full lg:w-1/2 ">
//                 {/* Image Container - Matches left card structure */}
//                 <div className="flex items-center justify-center overflow-hidden bg-white ">
//                   <img
//                     src={graph}
//                     alt="Comparison chart"
//                     className="w-full min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:h-[540px] xl:min-h-[700px] 2xl:min-h-[802px]"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Applications Section */}

//       <section className="">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-t-2 border-[#C8AB6E]">
//           {/* Left Side - Title */}
//           <div className="lg:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-6 lg:p-12 border-b-2 lg:border-b-0 border-[#C8AB6E]">
//             <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[Galderglynnlt] leading-snug tracking-wider text-center font-normal">
//               APPLICATIONS OF
//               <br />
//               OPTICS
//             </h2>
//           </div>

//           {/* Right Side - 3 Application Cards */}
//           <div className="grid grid-cols-1 lg:col-span-6 md:grid-cols-3">
//             {/* Laser Systems Systems */}
//             <div
//               onClick={() => setIsPopupOpens(true)}
//               className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-l-2 md:border-r-2  border-[#C8AB6E]"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm  font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
//                   Laser Systems
//                 </h3>
//                 <div className="w-full overflow-hidden md:h-40 lg:h-40 xl:h-68">
//                   <img
//                     src={LaserSystems}
//                     alt="Laser Systems"
//                     className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/*  QUANTUM OPTICS */}
//             <div
//               onClick={() => openPopup("quantum")}
//               className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
//             >
//               <div className="p-1">
//                 <h3 className="text-black  sm:text-sm  font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
//                   QUANTUM OPTICS
//                 </h3>
//                 <div className="w-full overflow-hidden md:h-40 lg:h-40 xl:h-68">
//                   <img
//                     src={QuantumOptics}
//                     alt=" QUANTUM OPTICS"
//                     className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* SpaceOptics */}
//             <div
//               onClick={() => openPopup("space")}
//               className="relative overflow-hidden group cursor-pointer md:border-b-0  border-[#C8AB6E]"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm  font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
//                   Space
//                 </h3>
//                 <div className="w-full overflow-hidden md:h-40 lg:h-40 xl:h-68">
//                   <img
//                     src={SpaceOptics}
//                     alt="SpaceOptics"
//                     className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Rquestbutton />
//       {/* <ApplicationsPopup
//         isOpen={isPopupOpens}
//         onClose={() => setIsPopupOpens(false)}
//       /> */}
//       {/* Popups */}
//       {/* <PopUp
//         isOpen={isPopupOpen("laser")}
//         onClose={closePopup}
//         images={popupData.laser}
//       />

//       <PopUp
//         isOpen={isPopupOpen("quantum")}
//         onClose={closePopup}
//         images={popupData.quantum}
//       />

//       <PopUp
//         isOpen={isPopupOpen("space")}
//         onClose={closePopup}
//         images={popupData.space}
//       /> */}
//     </div>
//   );
// };

// export default Optics;
