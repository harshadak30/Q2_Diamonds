

// import React, { useState } from "react";
// import Rquestbutton from "./Common/Rquestbutton";
// import GanOnDiamondImage from "../assets/ganonDiamonds.png";
// import Ev from "../assets/EV.jpg";
// import RF from "../assets/RF.png";
// import Computing from "../assets/Computing.jpg";
// import graph1 from "../assets/graph4.png";
// import ganondiamonds from "../assets/ganonDiamonds1.png";
// import RFpopup from "../assets/RFpopup.png";
// import RFpopup1 from "../assets/RFpopup1.png";
// import RFpopup2 from "../assets/RFpopup2.png";
// import EVpopup from "../assets/EVpopup.png";
// import EVpopup1 from "../assets/EVpopup1.png";
// import EVpopup2 from "../assets/EVpopup2.png";
// import Computingpopup1 from "../assets/Computingpopup1.png";
// import Computingpopup2 from "../assets/Computingpopup2.png";
// import Computingpopup3 from "../assets/Computingpopup3.png";
// import PopUp from "./Common/PopUp";
// import { usePopup } from "./Common/usePopup";
// import ApplicationsPopup from "./Common/a";

// const GanOnDiamond: React.FC = () => {
//   const { openPopup, closePopup, isPopupOpen } = usePopup();
//   const [isPopupOpens, setIsPopupOpens] = useState(false);

//   const popupData = {
//     laser: [RFpopup2, RFpopup1, RFpopup],
//     quantum: [EVpopup, EVpopup1, EVpopup2],
//     space: [Computingpopup1, Computingpopup2, Computingpopup3],
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
//         <img
//           src={GanOnDiamondImage}
//           alt="GaN on Diamond Technology"
//           className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
//         />
//       </section>

//       {/* Description Section */}
//       <section className=" sm:px-8 md:px-10 lg:px-12  xl:px-14 py-4 sm:py-4 md:py-6">
//         <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed tracking-[2.5px] font-[Montserratrg]  md:text-left text-justify">
//           Gallium nitride (GaN) on diamond technology is setting a new benchmark
//           in thermal management and energy efficiency for GPUs and AI server
//           infrastructure. By combining GaN's superior electronic properties with
//           diamond's thermal conductivity, this innovation ensures
//           high-performance computing with reduced power losses and extended
//           component lifespan.
//         </p>
//       </section>

//       {/* Properties Section */}
//       <section className="sm:px-8 md:px-10 lg:px-12  xl:px-14 py-4 sm:py-4 md:py-6 lg:py-10 mb-4  ">
//         <h2 className=" text-[#333333] font-[Galderglynnlt] text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-wider text-left mb-6 md:mb-4 ml-1 md:ml-2">
//           PROPERTIES
//         </h2>

//         <div className=" bg-white p-2 flex items-center justify-center ">
//           <div className=" w-full">
//             {/* Main Container with two boxes side by side */}
//             <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
//               {/* Left Card */}
//               <div className="w-full lg:w-1/2">
//                 <div className="border-2 border-[#b8985f] bg-white p-8 sm:p-10 md:p-12 lg:p-10 h-[450px] sm:h-[500px] md:h-[550px] flex flex-col justify-center">
//                   {/* 5X Text */}
//                   <div className="text-center mb-8 md:mb-12">
//                     <h1 className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[300px] font-[Galderglynnbd] font-extrabold text-[#b8985f] leading-none tracking-tight">
//                       5X
//                     </h1>
//                   </div>

//                   {/* Title */}
//                   <div className="text-center space-y-1">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                       Thermal Dissipation
//                     </h2>
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                       V/S
//                     </h2>
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                       GaN On SiC
//                     </h2>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Card */}
//               <div className="w-full lg:w-1/2">
//                 <div className="border-2 border-[#b8985f] bg-white p-6 sm:p-8 md:p-10 lg:p-12 h-[450px] sm:h-[500px] md:h-[550px] relative">
//                   {/* Legend */}
//                   <div className="absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 space-y-2 text-right z-10">
//                     <div className="flex items-start justify-end gap-2 md:gap-3">
//                       <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black"></div>

//                       <span className="text-xs sm:text-base font-medium tracking-wider font-[Montserratmd]">
//                         GAN ON DIAMOND
//                       </span>
//                     </div>
//                     <div className="flex items-start justify-start gap-2 md:gap-3">
//                       <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#b8985f] bg-white"></div>

//                       <span className="text-xs sm:text-base font-medium tracking-wider font-[Montserratmd]">
//                         GAN ON SIC
//                       </span>
//                     </div>
//                   </div>

//                   {/* Charts Container */}
//                   <div className="flex items-end justify-center gap-10 sm:gap-16 md:gap-20 lg:gap-32 h-[350px] sm:h-[400px] md:h-[450px] mt-12 sm:mt-16 md:mt-12">
//                     {/* Thermal Resistance */}
//                     <div className="flex items-end gap-2 sm:gap-3 md:gap-4">
//                       <div
//                         className="w-13 sm:w-13 md:w-14 lg:w-16 rounded-t-lg bg-black flex items-center justify-center"
//                         style={{ height: "240px" }}
//                       >
//                         <span className="text-white text-[10px] sm:text-xs md:text-base lg:text-lg font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
//                           40% LESS
//                         </span>
//                       </div>
//                       <div
//                         className="w-13 sm:w-13 md:w-14 lg:w-16  rounded-t-lg border-2 border-[#b8985f] bg-white"
//                         style={{ height: "280px" }}
//                       ></div>
//                     </div>

//                     {/* Power Density */}
//                     <div className="flex items-end gap-2 sm:gap-3 md:gap-4">
//                       <div
//                         className="w-13 sm:w-13 md:w-14 lg:w-16 rounded-t-lg bg-black flex items-center justify-center"
//                         style={{ height: "260px" }}
//                       >
//                         <span className="text-white text-[10px] sm:text-xs md:text-base lg:text-lg font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
//                           {'>'}30W/MM
//                         </span>
//                       </div>
//                       <div
//                         className="w-13 sm:w-13 md:w-14 lg:w-16 border-2 border-[#b8985f] bg-white rounded-t-lg"
//                         style={{ height: "160px" }}
//                       ></div>
//                     </div>

//                     {/* Longetivity */}
//                     <div className="flex items-end gap-2 sm:gap-3 md:gap-4">
//                       <div
//                         className="w-13 sm:w-13 md:w-14 lg:w-16 rounded-t-lg bg-black flex items-center justify-center"
//                         style={{ height: "210px" }}
//                       >
//                         <span className="text-white text-[10px]sm:text-xs md:text-base lg:text-lg font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
//                           2–3X
//                         </span>
//                       </div>
//                       <div
//                         className="w-13 sm:w-13 md:w-14 lg:w-16 border-2 border-[#b8985f] bg-white rounded-t-lg"
//                         style={{ height: "130px" }}
//                       ></div>
//                     </div>
//                   </div>

//                   {/* Scroll button */}
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Section - Text and Labels */}
//             <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-4 md:mt-6">
//               {/* Left Bottom Text */}
//               <div className="w-full lg:w-1/2">
//                 <p className="text-gray-600 text-sm sm:text-lg leading-relaxed tracking-wider text-center font-[Montserratmd] lg:px-18 md:px-14 sm:px-8">
//                   Breakdown voltage 10x higher than silicon and 4–5x higher than
//                   Gallium Nitride (GaN)
//                 </p>
//               </div>

//               {/* Right Bottom Labels */}
//               <div className="w-full lg:w-1/2 flex items-center justify-between gap-6 sm:gap-10 md:gap-14 lg:gap-1 px-4 sm:px-6 md:px-10 lg:px-18">
//                 <p className=" text-gray-600 font-[Montserratmd] text-center text-sm sm:text-lg leading-relaxed tracking-wider font-normal  w-12 sm:w-16 md:w-20 lg:w-24">
//                   Thermal
//                   <br />
//                   Resistance
//                 </p>
//                 <p className="text-gray-600 font-[Montserratmd] text-center text-sm sm:text-lg leading-relaxed tracking-wider not-last:font-normal w-12 sm:w-16 md:w-20 lg:w-24">
//                   Power
//                   <br />
//                   Density
//                 </p>
//                 <p className="text-gray-600  font-[Montserratmd] text-center text-sm sm:text-lg leading-relaxed tracking-wider font-normal w-12 sm:w-16 md:w-20 lg:w-24">
//                   Longetivity
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Applications Section */}
//       <section className="">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#C8AB6E]">
//           {/* Left Side - Title */}
//           <div className="lg:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-[#C8AB6E]">
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[Montserratrg] leading-snug tracking-wider text-center font-semibold">
//               APPLICATIONS OF
//               <br />
//               GaN ON DIAMONDS
//             </h2>
//           </div>

//           {/* Right Side - 3 Application Cards */}
//           <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3">
//             {/* RF Systems */}
//             <div
//               // onClick={() => openPopup("laser")}
//               onClick={() => setIsPopupOpens(true)}
//               className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
//                   RF 
//                 </h3>
//                 <div className="w-full h-40 sm:h-45 md:h-50 lg:h-52 xl:h-55 overflow-hidden">
//                   <img
//                     src={RF}
//                     alt="RF Systems"
//                     className="w-full h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* EV Systems */}
//             <div
//               onClick={() => openPopup("quantum")}
//               className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
//                   EV 
//                 </h3>
//                 <div className="w-full h-40 sm:h-45 md:h-50 lg:h-52 xl:h-55 overflow-hidden">
//                   <img
//                     src={Ev}
//                     alt="EV Systems"
//                     className="w-full h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Computing */}
//             <div
//               onClick={() => openPopup("space")}
//               className="relative overflow-hidden group cursor-pointer"
//             >
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
//                   COMPUTING
//                 </h3>
//                 <div className="w-full h-40 sm:h-45 md:h-50 lg:h-52 xl:h-55 overflow-hidden">
//                   <img
//                     src={Computing}
//                     alt="Computing"
//                     className="w-full h-full object-fill transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Rquestbutton />
//   <ApplicationsPopup 
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

// export default GanOnDiamond;



import React, { useState } from "react";
import Rquestbutton from "./Common/Rquestbutton";
import GanOnDiamondImage from "../assets/gandiamonds-hero.png";
import Ev from "../assets/EV.jpg";
import RF from "../assets/RF.png";
import Computing from "../assets/Computing.jpg";
import RFpopup from "../assets/RFpopup.png";
import RFpopup1 from "../assets/RFpopup1.png";
import RFpopup2 from "../assets/RFpopup2.png";
import EVpopup from "../assets/EVpopup.png";
import EVpopup1 from "../assets/EVpopup1.png";
import EVpopup2 from "../assets/EVpopup2.png";
import Computingpopup1 from "../assets/Computingpopup1.png";
import Computingpopup2 from "../assets/Computingpopup2.png";
import Computingpopup3 from "../assets/Computingpopup3.png";
import PopUp from "./Common/PopUp";
import { usePopup } from "./Common/usePopup";
import ApplicationsPopup from "./Common/a";

const GanOnDiamond: React.FC = () => {
  const { openPopup, closePopup, isPopupOpen } = usePopup();
  const [isPopupOpens, setIsPopupOpens] = useState(false);

  const popupData = {
    laser: [RFpopup2, RFpopup1, RFpopup],
    quantum: [EVpopup, EVpopup1, EVpopup2],
    space: [Computingpopup1, Computingpopup2, Computingpopup3],
  };

  return (
    <div className="min-h-screen bg-white">
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

      {/* Properties Section */}
      <section className="px-4 sm:px-8 md:px-10 lg:px-12  xl:px-14 py-4 sm:py-4 md:py-6 lg:py-10 mb-4  ">
        <h2 className=" text-[#333333] font-[Galderglynnlt] text-3xl lg:text-4xl xl:text-6xl font-semibold tracking-wider lg:text-left md:text-center  text-center mb-6 md:mb-4 ml-1 md:ml-2">
          PROPERTIES
        </h2>

        <div className=" bg-white p-2 flex items-center justify-center ">
          <div className=" w-full">
            {/* Main Container with two boxes side by side */}
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24">
              {/* Left Card */}
              <div className="w-full lg:w-1/2">
                <div className="border-2 border-[#c5a867] bg-white p-6 sm:p-8 md:p-10 lg:p-10 xl:p-12 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] flex flex-col justify-center">
                  {/* 5X Text */}
                  <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <h1 className="text-[150px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[300px] font-[Galderglynnbd] font-extrabold text-[#c5a867] leading-none tracking-tight">
                      5X
                    </h1>
                  </div>

                  {/* Title */}
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
              </div>

              {/* Right Card */}
              <div className="w-full lg:w-1/2">
                <div className="border-2 border-[#c5a867] bg-white  sm:p-2 md:p-2 lg:p-10 xl:p-12 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] relative">
                  {/* Legend */}
                  <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 right-4 sm:right-6 md:right-8 lg:right-10 space-y-1.5 sm:space-y-2 text-right z-10">
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

                  {/* Charts Container */}
                  <div className="flex items-end justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-18 2xl:gap-24 h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] xl:h-[450px] mt-19 sm:mt-19 md:mt-22 lg:mt-14 xl:mt-12 2xl:mt-12">
                    {/* Thermal Resistance */}
                      <div className="flex items-end gap-2 sm:gap-3 md:gap-4">
                      <div
                        className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17  rounded-t-lg bg-black flex items-center justify-center "
                        style={{ height: "240px" }}
                      >
                        <span className="text-white text-[10px] sm:text-xs md:text-base lg:text-lg font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
                          40% LESS
                        </span>
                      </div>
                      <div
                        className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17   rounded-t-lg border-t-2 border-r-2 border-l-2 border-[#c5a867] bg-white"
                        style={{ height: "280px" }}
                      ></div>
                    </div>

                     <div className="flex items-end gap-2 sm:gap-3 md:gap-4">
                      <div
                        className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17  rounded-t-lg bg-black flex items-center justify-center"
                        style={{ height: "260px" }}
                      >
                        <span className="text-white text-[10px] sm:text-xs md:text-base lg:text-lg font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
                          {'>'}30W/MM
                        </span>
                      </div>
                      <div
                        className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17  border-t-2 border-r-2 border-l-2 border-[#c5a867] bg-white rounded-t-lg"
                        style={{ height: "160px" }}
                      ></div>
                    </div>

                    {/* Longetivity */}
                    <div className="flex items-end gap-2 sm:gap-3 md:gap-4">
                      <div
                        className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17  rounded-t-lg bg-black flex items-center justify-center"
                        style={{ height: "210px" }}
                      >
                        <span className="text-white text-[10px]sm:text-xs md:text-base lg:text-lg font-bold transform -rotate-90 whitespace-nowrap font-[Montserratmd] tracking-wide">
                          2–3X
                        </span>
                      </div>
                      <div
                        className="w-8 sm:w-13 md:w-14 lg:w-10 xl:w-14 2xl:w-17  border-t-2 border-r-2 border-l-2 border-[#c5a867] bg-white rounded-t-lg"
                        style={{ height: "130px" }}
                      ></div>
                  
                  </div>
                  </div>

                  {/* Scroll button */}
                </div>
              </div>
            </div>

            {/* Bottom Section - Text and Labels */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-4 mt-4 md:mt-6">
              {/* Left Bottom Text */}
              <div className="w-full lg:w-1/2 flex items-end">
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-18">
                  Breakdown voltage 10x higher than silicon and 4–5x higher than
                  Gallium Nitride (GaN)
                </p>
              </div>

              {/* Right Bottom Labels */}
              <div className="w-full lg:w-1/2 flex items-center justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-1 px-2 sm:px-4 md:px-6 lg:px-10 xl:px-18">
                <p className="text-gray-600 font-[Montserratmd] text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wider font-normal flex-1">
                  Thermal
                  <br />
                  Resistance
                </p>
                <p className="text-gray-600 font-[Montserratmd] text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wider not-last:font-normal flex-1">
                  Power
                  <br />
                  Density
                </p>
                <p className="text-gray-600 font-[Montserratmd] text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wider font-normal flex-1">
                  Longetivity
                </p>
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
        GaN ON DIAMONDS
      </h2>
    </div>

    {/* Right Side - 3 Application Cards */}
    <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3">
      {/* RF Systems */}
      <div
        onClick={() => setIsPopupOpens(true)}
        className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-l-2 md:border-r-2  border-[#C8AB6E]"
      >
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
      <div
        onClick={() => openPopup("quantum")}
        className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]"
      >
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
      <div
        onClick={() => openPopup("space")}
        className="relative overflow-hidden group cursor-pointer md:border-b-0  border-[#C8AB6E]"
      >
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
  <ApplicationsPopup 
        isOpen={isPopupOpens} 
        onClose={() => setIsPopupOpens(false)} 
      />
      {/* Popups */}
      <PopUp
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
      />
    </div>
  );
};

export default GanOnDiamond;