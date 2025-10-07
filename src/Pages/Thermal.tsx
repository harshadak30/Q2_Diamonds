


//  import Frame4 from "../assets/Thermalhero.jpg";

// import Rquestbutton from "./Common/Rquestbutton";
// import Power from "../assets/POWERELECTRONICS_popup.png";
// import Power1 from "../assets/POWERELECTRONICS_popup_1.png";
// import Power2 from "../assets/POWERELECTRONICS_popup_3.png";
// import QuantumPage from "../assets/Photonics_popup.png";
// import QuantumPage1 from "../assets/Photonics_popup_1.png";
// import QuantumPage2 from "../assets/Photonics_popup_3.png";
// import space from "../assets/Aerospace3.png";
// import space1 from "../assets/Aerospace1.png";
// import space2 from "../assets/Aerospace2.png";
// import PopUp from "./Common/PopUp";
// import { usePopup } from "./Common/usePopup";
// import optic_graph from "../assets/Thermal_graph.png";
// import optic_graph1 from "../assets/thermalbanner.png";
// import AREOSPACE from "../assets/Aerospace.png";
// import photonics from "../assets/photonics.png";
// import powerelectonics from "../assets/power electronics.png";
// const Thermal = () => {
//   const { openPopup, closePopup, isPopupOpen } = usePopup();

//   const popupData = {
//     laser: [Power, Power1, Power2],
//     quantum: [QuantumPage1,QuantumPage2, QuantumPage],
//     space: [space, space1, space2],
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with Circular Optics Image */}
//       <section className="relative">
//         <img
//           src={Frame4}
//           alt="Optics Technology"
//           className="w-full h-full object-cover opacity-100"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center text-white">
//             <h1 className="text-8xl font-galderglynn text-black font-semibold mb-4 tracking-[0.50em]">
//               THERMAL
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* Description Section */}
//       <section className=" mx-6 md:px-12 py-10">
//         <p className=" font-galderglynn text-[#767676] text-xl md:text-xl leading-relaxed tracking-widest text-center md:text-left">
//           Diamond is the highest thermally conductive solid material known to man, outperforming copper,
//            aluminum nitride, and even SiC by an order of magnitude. 
//           With QTG line of products, this property becomes scalable for advanced industrial and electronic use.
//         </p>
//       </section>

//       {/* Properties Section */}
//       <section className=" mx-auto px-6 md:px-12 py-8">
//         <h2 className="text-4xl md:text-6xl font-semibold  tracking-wide">
//           PROPERTIES
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//           {/* Left Box - 10X Lifespan */}
//           <div className="bg-white   p-4 md:p-6 flex flex-col justify-center items-center text-center">
//             <img
//               src={optic_graph1}
//               alt="Transmission Chart"
//               className="w-full h-auto"
//             />
//           </div>

//           {/* Right Box - Transmission Graph */}
//           <div className="bg-white  p-4 md:p-6 flex items-center justify-center">
//             <div className="w-full">
//               <img
//                 src={optic_graph}
//                 alt="Transmission Graph"
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Applications Section */}
//       <section className=" mx-auto ">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-[#CDAE64]">
//           {/* Left Side - Title */}
//           <div className="md:col-span-6 bg-white flex items-center justify-center p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-[#CDAE64]">
//             <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight text-center font-semibold">
//               APPLICATIONS OF
//               <br />
//               THERMAL
//             </h2>
//           </div>

//           {/* Right Side - 3 Application Cards */}
//           <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-3">
//             {/* POWER ELECTRONICS */}
//             <div
//               onClick={() => openPopup("laser")}
//               className="relative overflow-hidden group cursor-pointer border-b md:border-b-0 md:border-r-2 border-[#CDAE64] last:border-r-0"
//             >
//               <div className="p-0.75">
//                 <h3 className="text-black text-xl font-semibold tracking-wide text-center mb-3">
//                   POWER ELECTRONICS
//                 </h3>
//                 <div className="w-full h-64 md:h-80 overflow-hidden">
//                   <img
//                     src={powerelectonics}
//                     alt=" POWER ELECTRONICS"
//                     className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* PHOTONICS */}
//             <div
//               onClick={() => openPopup("quantum")}
//               className="relative overflow-hidden group cursor-pointer border-b md:border-b-0 md:border-r-2 border-[#CDAE64] last:border-r-0"
//             >
//               <div className="p-0.75">
//                 <h3 className="text-black text-xl font-semibold tracking-wide text-center mb-3">
//                   PHOTONICS
//                 </h3>
//                 <div className="w-full h-64 md:h-80 overflow-hidden">
//                   <img
//                     src={photonics}
//                     alt="PHOTONICS"
//                     className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Space */}
//             <div
//               onClick={() => openPopup("space")}
//               className="relative overflow-hidden group cursor-pointer"
//             >
//               <div className="p-0.75">
//                 <h3 className="text-black text-xl font-semibold tracking-wide text-center mb-3">
//                   AREOSPACE
//                 </h3>
//                 <div className="w-full h-64 md:h-80 overflow-hidden">
//                   <img
//                     src={AREOSPACE}
//                     alt="AREOSPACE"
//                     className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Rquestbutton />

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

// export default Thermal;

import Rquestbutton from "./Common/Rquestbutton";
import LaserSystems from "../assets/LaserSystems.png";
import QuantumOptics from "../assets/QuantumOptics.png";
import SpaceOptics from "../assets/SpaceOptics.png";
import Power from "../assets/POWERELECTRONICS_popup.png";
import Power1 from "../assets/POWERELECTRONICS_popup_1.png";
import Power2 from "../assets/POWERELECTRONICS_popup_3.png";
import QuantumPage from "../assets/Photonics_popup.png";
import QuantumPage1 from "../assets/Photonics_popup_1.png";
import QuantumPage2 from "../assets/Photonics_popup_3.png";
import space from "../assets/Aerospace3.png";
import space1 from "../assets/Aerospace1.png";
import space2 from "../assets/Aerospace2.png";
import PopUp from "./Common/PopUp";
import { usePopup } from "./Common/usePopup";
import optic_graph from "../assets/Thermal_graph.png";
import optic_graph1 from "../assets/thermalbanner.png";
import Frame4 from "../assets/Thermalhero.jpg";
const Thermal = () => {
  const { openPopup, closePopup, isPopupOpen } = usePopup();

  const popupData = {
    laser: [Power, Power1, Power2],
    quantum: [QuantumPage1,QuantumPage2, QuantumPage],
    space: [space, space1, space2],
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
        <img
          src={Frame4}
          alt="Optics Technology"
          className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white w-full px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-galderglynn text-black font-semibold mb-4 tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] lg:tracking-[0.75em] transform translate-y-0">
              THERMAL
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-25 py-6 sm:py-8 md:py-10">
        <p className="font-galderglynn text-[#767676] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide sm:tracking-widest text-center md:text-left text-justify">
          Diamond is the highest thermally conductive solid material known to
          man, outperforming copper, aluminum nitride, and even SiC by an order
          of magnitude. With QTG line of products, this property becomes
          scalable for advanced industrial and electronic use.
        </p>
      </section>

      {/* Properties Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-center md:text-center lg:text-left mb-6 md:mb-8">
          PROPERTIES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Left Box */}
          <div className="bg-white p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center text-center">
            <img
              src={optic_graph1}
              alt="Transmission Chart"
              className="w-full h-auto rounded-lg max-w-md lg:max-w-full"
            />
          </div>

          {/* Right Box */}
          <div className="bg-white p-2 sm:p-4 md:p-6 flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-full">
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
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-[#CDAE64]">
          {/* Left Side - Title */}
          <div className="md:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 md:border-b-0 md:border-r-2 border-[#CDAE64]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide leading-tight text-center font-semibold">
              APPLICATIONS OF
              <br />
              THERMAL
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Laser Systems */}
            <div
              onClick={() => openPopup("laser")}
              className="relative overflow-hidden group cursor-pointer border-b sm:border-b-0 sm:border-r-2 border-[#CDAE64] last:border-r-0"
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-black text-lg sm:text-xl font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  LASER SYSTEMS
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
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
              className="relative overflow-hidden group cursor-pointer border-b md:border-b-0 border-r-0 md:border-r-2 border-[#CDAE64] sm:border-b-2 md:border-b-0"
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-black text-lg sm:text-xl font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  QUANTUM OPTICS
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
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
              className="relative overflow-hidden group cursor-pointer "
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-black text-lg sm:text-xl font-semibold tracking-wide text-center mb-3 sm:mb-4">
                  SPACE
                </h3>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
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