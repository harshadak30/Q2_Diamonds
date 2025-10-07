// import React from "react";
// import Rquestbutton from "./Common/Rquestbutton";
// import Frame from "../assets/Frame.png";
// import Quantum from "../assets/Quantum.png";
// import Sensing from "../assets/SENSING.png";
// import Computing from "../assets/COMPUTING.png";
// import Communication from "../assets/COMMUNICATION.png";
// import PopUp from "./Common/PopUp";
// import { usePopup } from "./Common/usePopup";

// // Import your popup images
// import laser from "../assets/laser1.png";
// import laser2 from "../assets/laser2.png";
// import laser3 from "../assets/laser3.png";
// import QuantumPage from "../assets/QUANTUM1.png";
// import QuantumPage1 from "../assets/QUANTUM2.png";
// import QuantumPage2 from "../assets/QUANTUM3.png";
// import space from "../assets/Space.png";
// import space1 from "../assets/Space2.png";
// import space2 from "../assets/Space3.png";

// const QuantumLandingPage: React.FC = () => {
//   const { openPopup, closePopup, isPopupOpen } = usePopup();

//   // Define popup data for all three categories
//   const popupData = {
//      laser: [laser, laser2, laser3],
//     quantum: [QuantumPage, QuantumPage1, QuantumPage2],
//     space: [space, space1, space2]
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <section className="relative">
//         <img
//           src={Quantum}
//           alt="Quantum Technology"
//           className="w-full h-full object-cover opacity-100"
//         />
//         <div className="absolute inset-0 flex items-center justify-center"></div>
//       </section>

//       {/* Description Section */}
//       <section className="mx-auto px-12 py-12">
//         <p className="text-gray-600 text-lg leading-relaxed">
//           Diamond possesses a combination of optical, thermal, and mechanical
//           properties that no other optical material can match. These properties
//           make QOG line of products ideal for applications that demand extreme
//           power handling, wide spectral transmission, thermal stability, and
//           environmental durability.
//         </p>
//       </section>

//       <section className="mx-auto px-12 py-8">
//         <h2 className="text-4xl font-semibold mb-10 tracking-wide">
//           PROPERTIES
//         </h2>

//         <div className="flex gap-6">
//           {/* Left Box - Magnetic Sensitivity */}
//           <div className="flex-1 bg-white rounded-lg overflow-hidden">
//             <div className="w-full h-full flex flex-col items-center justify-center">
//               <img
//                 src={Frame}
//                 alt="Magnetic Sensitivity Chart"
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//           </div>

//           {/* Right Box - 2x2 Grid */}
//           <div className="flex-1 bg-white rounded-lg overflow-hidden">
//             <div className="grid grid-cols-2 grid-rows-2 h-full p-8">
//               {/* Top Left */}
//               <div className="flex items-start justify-start border-r border-b border-gray-300 p-8">
//                 <div className="text-left">
//                   <h3
//                     className="text-5xl font-semibold mb-2"
//                     style={{ color: "#C4A55A" }}
//                   >
//                     Excellent
//                   </h3>
//                   <h3
//                     className="text-5xl font-semibold mb-3"
//                     style={{ color: "#C4A55A" }}
//                   >
//                     Integration
//                   </h3>
//                   <p className="text-2xl font-semibold text-black">
//                     with Photonics System
//                   </p>
//                 </div>
//               </div>

//               {/* Top Right */}
//               <div className="flex items-start justify-start border-b border-gray-300 p-8">
//                 <div className="text-left">
//                   <p className="text-2xl font-semibold text-black mb-2">
//                     Operates At
//                   </p>
//                   <h3
//                     className="text-5xl font-semibold mb-1"
//                     style={{ color: "#C4A55A" }}
//                   >
//                     Room
//                   </h3>
//                   <h3
//                     className="text-5xl font-semibold"
//                     style={{ color: "#C4A55A" }}
//                   >
//                     Temperature
//                   </h3>
//                 </div>
//               </div>

//               {/* Bottom Left */}
//               <div className="flex items-start justify-start border-r border-gray-300 p-8">
//                 <div className="text-left">
//                   <h3
//                     className="text-5xl font-semibold mb-3"
//                     style={{ color: "#C4A55A" }}
//                   >
//                     2ms
//                   </h3>
//                   <p className="text-2xl font-semibold text-black">
//                     Spin Coherence
//                   </p>
//                   <p className="text-2xl font-semibold text-black">Time (T₂)</p>
//                 </div>
//               </div>

//               {/* Bottom Right */}
//               <div className="flex items-start justify-start p-8">
//                 <div className="text-left">
//                   <p className="text-2xl font-semibold text-black mb-2">
//                     Unmatched
//                   </p>
//                   <h3
//                     className="text-5xl font-semibold mb-1"
//                     style={{ color: "#C4A55A" }}
//                   >
//                     Quantum
//                   </h3>
//                   <h3
//                     className="text-5xl font-semibold"
//                     style={{ color: "#C4A55A" }}
//                   >
//                     Efficiency
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mt-16">
//         <div className="flex">
//           <div className="w-3/5 bg-white flex items-center border-[#C8AB6E] border-2 p-2">
//             <h2 className="text-7xl font-normal tracking-wide leading-tight text-center">
//               APPLICATIONS IN THE
//               <br />
//               QUANTUM FIELD
//             </h2>
//           </div>

//           {/* Computing */}
//           <div 
//             onClick={() => openPopup('laser')}
//             className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group cursor-pointer"
//           >
//             <h3 className="text-black text-sm font-semibold tracking-widest text-center">
//               COMPUTING
//             </h3>
//             <div className="w-full h-80 overflow-hidden">
//               <img
//                 src={Computing}
//                 alt="Computing"
//                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
//           </div>

//           {/* Sensing */}
//           <div 
//             onClick={() => openPopup('quantum')}
//             className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group cursor-pointer"
//           >
//             <h3 className="text-black text-sm font-semibold tracking-widest text-center">
//               SENSING
//             </h3>
//             <div className="w-full h-80 overflow-hidden">
//               <img
//                 src={Sensing}
//                 alt="Sensing"
//                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
//           </div>

//           {/* Communication */}
//           <div 
//             onClick={() => openPopup('space')}
//             className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group cursor-pointer"
//           >
//             <h3 className="text-black text-sm font-semibold tracking-widest text-center">
//               COMMUNICATION
//             </h3>
//             <div className="w-full h-80 overflow-hidden">
//               <img
//                 src={Communication}
//                 alt="Communication"
//                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
//           </div>
//         </div>
//       </section>
      
//       <Rquestbutton />

//       {/* Popups */}
//       {/* <PopUp 
//         isOpen={isPopupOpen('laser')}
//         onClose={closePopup}
//         images={popupData.laser}
//       />
      
//       <PopUp 
//         isOpen={isPopupOpen('quantum')}
//         onClose={closePopup}
//         images={popupData.quantum}
//       />
      
//       <PopUp 
//         isOpen={isPopupOpen('space')}
//         onClose={closePopup}
//         images={popupData.space}
//       /> */}
//     </div>
//   );
// };

// export default QuantumLandingPage;




import React from "react";
import Rquestbutton from "./Common/Rquestbutton";
import Frame from "../assets/Frame.png";
import Quantum from "../assets/Quantum.png";
import Sensing from "../assets/SENSING.png";
import Computing from "../assets/COMPUTING.png";
import Communication from "../assets/COMMUNICATION.png";

// Import your popup images


const QuantumLandingPage: React.FC = () => {



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
        <img
          src={Quantum}
          alt="Quantum Technology"
          className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </section>

      {/* Description Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-4 xl:px-25 py-4 md:py-6 mt-8 md:mt-10 lg:mt-12 ">
        <p
          className="font-galderglynn text-[#767676] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide sm:tracking-widest text-center md:text-left text-justify
"
        >
          Diamonds with engineered defects play a revolutionary role in quantum
          technologies. QQG’s unique ability to host quantum-grade colour
          centers like NV (Nitrogen-Vacancy) enables powerful applications. At
          the core is diamond’s stable carbon lattice, which provides an
          exceptionally noise-free environment for maintaining quantum coherence
          at room temperature, something most quantum systems cannot do.
        </p>
      </section>

      {/* Properties Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-center md:text-center lg:text-left mb-6 md:mb-8">
          PROPERTIES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Left Box - Magnetic Sensitivity */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 md:p-6">
              <img
                src={Frame}
                alt="Magnetic Sensitivity Chart"
                className="w-full h-auto rounded-lg max-w-md lg:max-w-full"
              />
            </div>
          </div>

          {/* Right Box - 2x2 Grid */}
        <div className="bg-white rounded-lg overflow-hidden border border-gray-300">
  <div className="grid grid-cols-2 h-full">
    {/* Top Left */}
    <div className="flex items-start justify-start border-b border-r border-gray-300 p-4 sm:p-6 md:p-8">
      <div className="text-left">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 sm:mb-2 text-[#C4A55A]">
          Excellent
        </h3>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-3 text-[#C4A55A]">
          Integration
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-black">
          with Photonics System
        </p>
      </div>
    </div>

    {/* Top Right */}
    <div className="flex items-start justify-start border-b border-gray-300 p-4 sm:p-6 md:p-8">
      <div className="text-left">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-black mb-1 sm:mb-2">
          Operates At
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 text-[#C4A55A]">
          Room
        </h3>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#C4A55A]">
          Temperature
        </h3>
      </div>
    </div>

    {/* Bottom Left */}
    <div className="flex items-start justify-start border-r border-gray-300 p-4 sm:p-6 md:p-8">
      <div className="text-left">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-3 text-[#C4A55A]">
          2ms
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-black">
          Spin Coherence
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-black">
          Time (T₂)
        </p>
      </div>
    </div>

    {/* Bottom Right */}
    <div className="flex items-start justify-start p-4 sm:p-6 md:p-8">
      <div className="text-left">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-black mb-1 sm:mb-2">
          Unmatched
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 text-[#C4A55A]">
          Quantum
        </h3>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#C4A55A]">
          Efficiency
        </h3>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-[#C8AB6E]">
          {/* Left Side - Title */}
          <div className="md:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide leading-tight text-center font-semibold">
              APPLICATIONS IN THE
              <br />
              QUANTUM FIELD
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Computing */}
            <div
              onClick={() => openPopup("laser")}
              className="relative overflow-hidden group cursor-pointer border-b sm:border-b-0 sm:border-r-2 border-[#C8AB6E]"
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-black text-lg sm:text-xl font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  COMPUTING
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <img
                    src={Computing}
                    alt="Computing"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Sensing */}
            <div
              onClick={() => openPopup("quantum")}
              className="relative overflow-hidden group cursor-pointer border-b md:border-b-0 border-r-0 md:border-r-2 border-[#C8AB6E]"
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-black text-lg sm:text-xl font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  SENSING
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <img
                    src={Sensing}
                    alt="Sensing"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Communication */}
            <div
              onClick={() => openPopup("space")}
              className="relative overflow-hidden group cursor-pointer"
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-black text-lg sm:text-xl font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  COMMUNICATION
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <img
                    src={Communication}
                    alt="Communication"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
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

export default QuantumLandingPage;
