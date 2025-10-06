// import React from "react";
// import Rquestbutton from "./Common/Rquestbutton";

// import Frame4 from "../assets/Frame4.png";
// import Tharmal from "../assets/Tharmal.png";
// import Gragh1 from "../assets/gragh1.jpg";
// import aeroplane from "../assets/Aerospace.png";
// import photonics from "../assets/photonics.png";
// import powerelectonics from "../assets/power electronics.png";

// const Thermal: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <section className="relative ">
//         <img
//           src={Frame4}
//           alt="Optics Technology"
//           className="w-full h-full object-cover opacity-100"
//         />
//       </section>

//       {/* Description Section */}
//       <section className=" mx-auto px-12 py-12">
//         <p className="text-gray-600 text-lg leading-relaxed">
//           Diamond possesses a combination of optical, thermal, and mechanical
//           properties that no other optical material can match. These properties
//           make QOG line of products ideal for applications that demand extreme
//           power handling, wide spectral transmission, thermal stability, and
//           environmental durability.
//         </p>
//       </section>

//       {/* Properties Section - TWO BOXES SIDE BY SIDE */}
//       <section className=" mx-auto px-12 py-8">
//         <h2 className="text-3xl font-normal mb-10 tracking-wide">PROPERTIES</h2>

//         <div className="flex gap-6">
//           {/* Left Box - Lifespan */}
//           <div className="flex-1  flex flex-col justify-center items-center bg-white">
//             <div className="w-full h-full flex flex-col">
//               <img
//                 src={Tharmal}
//                 alt="Transmission Chart"
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//           </div>

//           {/* Right Box - Transmission Graph - Replace with your graph image */}
//           <div className="flex-1  bg-white flex items-center justify-center">
//             <div className="w-full h-full flex flex-col">
//               <img
//                 src={Gragh1}
//                 alt="Transmission Chart"
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Applications Section - TITLE + 3 IMAGES IN ONE ROW */}

//       <section className="mt-16">
//         <div className="flex">
//           {/* Left Side - Title */}
//           <div className="w-3/5 bg-white flex items-center border-[#C8AB6E] border-2 p-2">
//             <h2 className="text-7xl font-normal tracking-wide leading-tight text-center">
//               APPLICATIONS OF
//               <br />
//               THERMAL
//             </h2>
//           </div>

//           {/* Laser Systems */}
//           <div className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
//             <h3 className="text-black text-sm font-semibold tracking-widest text-center">
//               LASER SYSTEMS
//             </h3>
//             <div className="w-full h-80 overflow-hidden">
//               <img
//                 src={powerelectonics}
//                 alt="Laser Systems"
//                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
//           </div>

//           {/* Quantum Optics */}
//           <div className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
//             <h3 className="text-black text-sm font-semibold tracking-widest text-center">
//               QUANTUM OPTICS
//             </h3>
//             <div className="w-full h-80 overflow-hidden">
//               <img
//                 src={photonics}
//                 alt="Quantum Optics"
//                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
//           </div>

//           {/* Space */}
//           <div className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
//             <h3 className="text-black text-sm font-semibold tracking-widest text-center">
//               SPACE
//             </h3>
//             <div className="w-full h-80 overflow-hidden">
//               <img
//                 src={aeroplane}
//                 alt="Space"
//                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
//           </div>
//         </div>
//       </section>
//       <Rquestbutton />
//     </div>
//   );
// };

// export default Thermal;


// import React from "react";
// import Rquestbutton from "./Common/Rquestbutton";

// import Frame4 from "../assets/Frame4.png";
// import Tharmal from "../assets/Tharmal.png";
// import Gragh1 from "../assets/gragh1.jpg";
// import aeroplane from "../assets/Aerospace.png";
// import photonics from "../assets/photonics.png";
// import powerelectonics from "../assets/power electronics.png";
// import laser from "../assets/laser1.png";
// import laser2 from "../assets/laser2.png";
// import laser3 from "../assets/laser3.png";
// import QuantumPage from "../assets/QUANTUM1.png";
// import QuantumPage1 from "../assets/QUANTUM2.png";
// import QuantumPage2 from "../assets/QUANTUM3.png";
// import space from "../assets/Space.png";
// import space1 from "../assets/Space2.png";
// import space2 from "../assets/Space3.png";
// import PopUp from "./Common/popup";
// import { usePopup } from "./Common/usePopup";

// const Thermal: React.FC = () => {
//   const { openPopup, closePopup, isPopupOpen } = usePopup();
//   const popupData = {
//     laser: [laser, laser2, laser3],
//     quantum: [QuantumPage, QuantumPage1, QuantumPage2],
//     space: [space, space1, space2]
//   };
//   return (
//     <div className="min-h-screen bg-white">
//       <section className="relative ">
//         <img
//           src={Frame4}
//           alt="Optics Technology"
//           className="w-full h-full object-cover opacity-100"
//         />
//       </section>

//       {/* Description Section */}
//       <section className=" mx-auto px-12 py-12">
//         <p className="text-gray-600 text-lg leading-relaxed">
//           Diamond possesses a combination of optical, thermal, and mechanical
//           properties that no other optical material can match. These properties
//           make QOG line of products ideal for applications that demand extreme
//           power handling, wide spectral transmission, thermal stability, and
//           environmental durability.
//         </p>
//       </section>

//       {/* Properties Section - TWO BOXES SIDE BY SIDE */}
//       <section className=" mx-auto px-12 py-8">
//         <h2 className="text-3xl font-normal mb-10 tracking-wide">PROPERTIES</h2>

//         <div className="flex gap-6">
//           {/* Left Box - Lifespan */}
//           <div className="flex-1  flex flex-col justify-center items-center bg-white">
//             <div className="w-full h-full flex flex-col">
//               <img
//                 src={Tharmal}
//                 alt="Transmission Chart"
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//           </div>

//           {/* Right Box - Transmission Graph - Replace with your graph image */}
//           <div className="flex-1  bg-white flex items-center justify-center">
//             <div className="w-full h-full flex flex-col">
//               <img
//                 src={Gragh1}
//                 alt="Transmission Chart"
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Applications Section - TITLE + 3 IMAGES IN ONE ROW */}

//       <section className="mt-16">
//         <div className="flex">
//           {/* Left Side - Title */}
//           <div className="w-3/5 bg-white flex items-center border-[#C8AB6E] border-2 p-2">
//             <h2 className="text-7xl font-normal tracking-wide leading-tight text-center">
//               APPLICATIONS OF
//               <br />
//               THERMAL
//             </h2>
//           </div>

//           {/* Laser Systems */}
//           <div 
//           onClick={() => openPopup('laser')}
//           className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
//             <h3 className="text-black text-sm font-semibold tracking-widest text-center">
//               LASER SYSTEMS
//             </h3>
//             <div className="w-full h-80 overflow-hidden">
//               <img
//                 src={powerelectonics}
//                 alt="Laser Systems"
//                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
//           </div>

//           {/* Quantum Optics */}
//           <div 
//           onClick={() => openPopup('quantum')} 
//           className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
//             <h3 className="text-black text-sm font-semibold tracking-widest text-center">
//               QUANTUM OPTICS
//             </h3>
//             <div className="w-full h-80 overflow-hidden">
//               <img
//                 src={photonics}
//                 alt="Quantum Optics"
//                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
//           </div>

//           {/* Space */}
//           <div 
//            onClick={() => openPopup('space')} 
//           className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
//             <h3 className="text-black text-sm font-semibold tracking-widest text-center">
//               SPACE
//             </h3>
//             <div className="w-full h-80 overflow-hidden">
//               <img
//                 src={aeroplane}
//                 alt="Space"
//                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
//           </div>
//         </div>
//       </section>
//       <Rquestbutton />

//       {/* Popups */}
//       <PopUp 
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
//       />
//     </div>
//   );
// };

// export default Thermal;



import Rquestbutton from "./Common/Rquestbutton";
import OpticsHero from "../assets/Optics.jpg";
import LaserSystems from "../assets/LaserSystems.png";
import QuantumOptics from "../assets/QuantumOptics.png";
import SpaceOptics from "../assets/SpaceOptics.png";
import laser from "../assets/popupoptics.png";
import laser2 from "../assets/popupoptics1.png";
import laser3 from "../assets/popupoptics2.png";
import QuantumPage from "../assets/popupoptics_2_1.png";
import QuantumPage1 from "../assets/popupoptics_2_2.png";
import QuantumPage2 from "../assets/popupoptics_2_3.png";
import space from "../assets/popupoptics_3_1.png";
import space1 from "../assets/popupoptics_3_2.png";
import space2 from "../assets/popupoptics_3_3.png";
import PopUp from "./Common/PopUp";
import { usePopup } from "./Common/usePopup";
import optic_graph from "../assets/optic_graph.png";
import optic_graph1 from "../assets/Section.png";

const Thermal = () => {
  const { openPopup, closePopup, isPopupOpen } = usePopup();

  const popupData = {
    laser: [laser2, laser, laser3],
    quantum: [QuantumPage,QuantumPage1, QuantumPage2],
    space: [space, space1, space2],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Circular Optics Image */}
      <section className="relative">
        <img
          src={OpticsHero}
          alt="Optics Technology"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-8xl font-galderglynn text-black font-semibold mb-4 tracking-[0.75em]">
              OPTICS
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className=" mx-6 md:px-12 py-10">
        <p className=" font-galderglynn text-[#767676] text-xl md:text-xl leading-relaxed tracking-widest text-center md:text-left">
          Diamond possesses a combination of optical, thermal, and mechanical
          properties that no other optical material can match. These properties
          make QOG line of products ideal for applications that demand extreme
          power handling, wide spectral transmission, thermal stability, and
          environmental durability.
        </p>
      </section>

      {/* Properties Section */}
      <section className=" mx-auto px-6 md:px-12 py-8">
        <h2 className="text-4xl md:text-6xl font-semibold  tracking-wide">
          PROPERTIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Box - 10X Lifespan */}
          <div className="bg-white   p-2 md:p-6 flex flex-col justify-center items-center text-center">
            <img
              src={optic_graph1}
              alt="Transmission Chart"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Box - Transmission Graph */}
          <div className="bg-white  p-4 md:p-6 flex items-center justify-center">
            <div className="w-full">
              <img
                src={optic_graph}
                alt="Transmission Graph"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className=" mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-[#CDAE64]">
          {/* Left Side - Title */}
          <div className="md:col-span-6 bg-white flex items-center justify-center p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-[#CDAE64]">
            <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight text-center font-semibold">
              APPLICATIONS OF
              <br />
              OPTICS
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-3">
            {/* Laser Systems */}
            <div
              onClick={() => openPopup("laser")}
              className="relative overflow-hidden group cursor-pointer border-b md:border-b-0 md:border-r-2 border-[#CDAE64] last:border-r-0"
            >
              <div className="p-0.75">
                <h3 className="text-black text-xl font-semibold tracking-wide text-center mb-3">
                  LASER SYSTEMS
                </h3>
                <div className="w-full h-64 md:h-80 overflow-hidden">
                  <img
                    src={LaserSystems}
                    alt="Laser Systems"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Quantum Optics */}
            <div
              onClick={() => openPopup("quantum")}
              className="relative overflow-hidden group cursor-pointer border-b md:border-b-0 md:border-r-2 border-[#CDAE64] last:border-r-0"
            >
              <div className="p-0.75">
                <h3 className="text-black text-xl font-semibold tracking-wide text-center mb-3">
                  QUANTUM OPTICS
                </h3>
                <div className="w-full h-64 md:h-80 overflow-hidden">
                  <img
                    src={QuantumOptics}
                    alt="Quantum Optics"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Space */}
            <div
              onClick={() => openPopup("space")}
              className="relative overflow-hidden group cursor-pointer"
            >
              <div className="p-0.75">
                <h3 className="text-black text-xl font-semibold tracking-wide text-center mb-3">
                  SPACE
                </h3>
                <div className="w-full h-64 md:h-80 overflow-hidden">
                  <img
                    src={SpaceOptics}
                    alt="Space"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Rquestbutton />

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

export default Thermal;

