
// import Rquestbutton from "./Common/Rquestbutton";
// import Powerelectronic from "../assets/power electronics.png";
// import photonics from "../assets/photonics.png";
// import AREOSPACE from "../assets/Aerospace.png";
// import Power from "../assets/POWERELECTRONICS_popup.png";
// import Power1 from "../assets/POWERELECTRONICS_popup_1.png";
// import Power2 from "../assets/POWERELECTRONICS_popup_3.png";
// import photonics1 from "../assets/Photonics_popup.png"
// import photonics2 from "../assets/Photonics_popup_1.png"
// import photonics3 from "../assets/Photonics_popup_3.png"
// import space from "../assets/Aerospace3.png";
// import space1 from "../assets/Aerospace1.png";
// import space2 from "../assets/Aerospace2.png";
// import PopUp from "./Common/PopUp";
// import { usePopup } from "./Common/usePopup";
// import optic_graph from "../assets/Thermal_graph.png";
// import optic_graph1 from "../assets/thermalbanner.png";
// import Frame4 from "../assets/Thermalhero.jpg";
// const Thermal = () => {
//   const { openPopup, closePopup, isPopupOpen } = usePopup();

//   const popupData = {
//     Power: [Power, Power1, Power2],
//     photonics: [photonics2, photonics3 , photonics1],
//     space: [space, space1, space2],
//   };


//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative pt-16 md:pt-10 lg:pt-0 flex items-center justify-center">
//         <img
//           src={Frame4}
//           alt="Optics Technology"
//           className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center text-white w-full px-4">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-galderglynn text-black font-semibold mb-4 tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] lg:tracking-[0.75em] transform translate-y-0">
//               THERMAL
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* Description Section */}
//       <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-25 py-6 sm:py-8 md:py-10">
//         <p className="font-galderglynn text-[#767676] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide sm:tracking-widest text-center md:text-left ">
//           Diamond is the highest thermally conductive solid material known to
//           man, outperforming copper, aluminum nitride, and even SiC by an order
//           of magnitude. With QTG line of products, this property becomes
//           scalable for advanced industrial and electronic use.
//         </p>
//       </section>

//       {/* Properties Section */}
//       <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12">
//   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-left mb-6 md:mb-4 ml-1 md:ml-5">
//     PROPERTIES
//   </h2>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-2">
//     {/* Left Box */}
//     <div className="bg-white p-2 sm:p-4 md:p-2 flex flex-col justify-center items-center text-center">
//       <img
//         src={optic_graph1}
//         alt="Transmission Chart"
//         className="w-full h-[400px] sm:h-[450px] md:h-[400px] lg:h-[550px] xl:h-[600px] rounded-lg"
//       />
//     </div>

//     {/* Right Box */}
//     <div className="bg-white p-2 sm:p-4 md:p-2 flex items-center justify-center">
//       <img
//         src={optic_graph}
//         alt="Transmission Graph"
//         className="w-full h-[400px] sm:h-[450px] md:h-[400px] lg:h-[550px] xl:h-[600px] rounded-lg"
//       />
//     </div>
//   </div>
// </section>

//       {/* Applications Section */}
//       <section className="">
//   <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#CDAE64]">
//     {/* Left Side - Title */}
//     <div className="md:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 md:border-b-2 lg:border-b-0 md:border-r-0 lg:border-r-2 border-[#CDAE64]">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide leading-tight text-center font-semibold">
//         APPLICATIONS OF
//         <br />
//         THERMAL
//       </h2>
//     </div>

//     {/* Right Side - 3 Application Cards */}
//     <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-3">
//       {/* Power Electronics */}
//       <div
//         onClick={() => openPopup("Power")}
//         className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 sm:border-r-0 border-[#CDAE64] md:border-r-2"
//       >
//         <div className="p-1">
//           <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
//             POWER ELECTRONICS
//           </h3>
//           <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
//             <img
//               src={Powerelectronic}
//               alt="Power Electronics"
//               className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Photonics */}
//       <div
//         onClick={() => openPopup("photonics")}
//         className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 border-r-0 md:border-r-2 border-[#CDAE64] sm:border-b-2 "
//       >
//         <div className="p-1">
//           <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
//             PHOTONICS
//           </h3>
//           <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
//             <img
//               src={photonics}
//               alt="Photonics"
//               className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Aerospace */}
//       <div
//         onClick={() => openPopup("space")}
//         className="relative overflow-hidden group cursor-pointer"
//       >
//         <div className="p-1">
//           <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4">
//             AEROSPACE
//           </h3>
//           <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
//             <img
//               src={AREOSPACE}
//               alt="Aerospace"
//               className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       <Rquestbutton />

//       <PopUp
//         isOpen={isPopupOpen("Power")}
//         onClose={closePopup}
//         images={popupData.Power}
//       />

//       <PopUp
//         isOpen={isPopupOpen("photonics")}
//         onClose={closePopup}
//         images={popupData.photonics}
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
import Powerelectronic from "../assets/power electronics.png";
import photonics from "../assets/photonics.png";
import AREOSPACE from "../assets/Aerospace.png";
import Power from "../assets/POWERELECTRONICS_popup.png";
import Power1 from "../assets/POWERELECTRONICS_popup_1.png";
import Power2 from "../assets/POWERELECTRONICS_popup_3.png";
import photonics1 from "../assets/Photonics_popup.png"
import photonics2 from "../assets/Photonics_popup_1.png"
import photonics3 from "../assets/Photonics_popup_3.png"
import space from "../assets/Aerospace3.png";
import space1 from "../assets/Aerospace1.png";
import space2 from "../assets/Aerospace2.png";
import PopUp from "./Common/PopUp";
import { usePopup } from "./Common/usePopup";
import optic_graph from "../assets/GanDiamonds/Thermal_graph.png";

import Frame4 from "../assets/Thermalhero.jpg";
const Thermal = () => {
  const { openPopup, closePopup, isPopupOpen } = usePopup();

  const popupData = {
    Power: [Power, Power1, Power2],
    photonics: [photonics2, photonics3 , photonics1],
    space: [space, space1, space2],
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-16 md:pt-10 lg:pt-0">
        <img
          src={Frame4}
          alt="Optics Technology"
          className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-galderglynn text-black font-semibold mb-4 tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] lg:tracking-[0.75em] transform translate-y-0">
              THERMAL
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-25 sm:py-8 md:py-10">
        <p className="font-galderglynn text-[#767676] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide sm:tracking-widest text-center md:text-left ">
          Diamond is the highest thermally conductive solid material known to
          man, outperforming copper, aluminum nitride, and even SiC by an order
          of magnitude. With QTG line of products, this property becomes
          scalable for advanced industrial and electronic use.
        </p>
      </section>

      {/* Properties Section */}
      {/* <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-20 md:py-12">
  <h2 className="mb-6 ml-1 text-3xl font-semibold tracking-wide text-left sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl md:mb-4 md:ml-5">
    PROPERTIES
  </h2>

  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6 md:gap-2">
   
    <div className="flex flex-col items-center justify-center p-2 text-center bg-white sm:p-4 md:p-2">
      <img
        src={optic_graph1}
        alt="Transmission Chart"
        className="w-full h-[400px] sm:h-[450px] md:h-[400px] lg:h-[550px] xl:h-[510px] rounded-lg"
      />
    </div>

   
    <div className="flex items-center justify-center p-2 bg-white sm:p-4 md:p-2">
      <img
        src={optic_graph}
        alt="Transmission Graph"
        className="w-full h-[400px] sm:h-[450px] md:h-[400px] lg:h-[550px] xl:h-[510px] rounded-lg"
      />
    </div>
  </div>
</section> */}


<section className="px-5 py-4 mb-4 2xl:px-23 sm:py-4">
  <h2 className="text-[#333333] font-[Galderglynnlt] text-3xl sm:text-5xl md:text-5xl xl:text-5xl tracking-wider text-center md:text-left mb-6 md:mb-8 ml-1 md:ml-2">
    PROPERTIES
  </h2>

  <div className="flex items-center justify-center p-2 bg-white">
    <div className="w-full mx-auto ">
      {/* Main Container with two boxes side by side */}
      <div className="flex flex-col gap-1 lg:flex-row lg:gap-10 xl:gap-16">
        {/* Left Card */}
        <div className="flex flex-col w-full lg:w-1/2">
          {/* Border Box */}
          <div className="border-2 border-[#c5a867] sm:p-5   xl:p-14 2xl:p-20 flex flex-col justify-center h-[330px] lg:h-[350px] xl:h-[470px] ">
            {/* 5X Text */}
            <div className=" mt-5 mb-4 text-center">
              <h1 className="text-[180px] xl:text-[270px] 2xl:text-[300px] font-[Galderglynnbd] font-extrabold text-[#c5a867] leading-none tracking-tight">
                5X
              </h1>
            </div>

            {/* Title */}
            <div className="space-y-1 text-center mb-8">
              <h2 className="text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                Thermal Dissipation
              </h2>
              <h2 className="text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                V/S
              </h2>
              <h2 className="text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
                GaN On SiC
              </h2>
            </div>
          </div>

          {/* Left Bottom Text - Fixed Height */}
          <div className="flex items-center justify-center w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px] 2xl:h-[55px]">
            <p className="text-gray-600 text-[15px] lg:text-base xl:text-lg 2xl:text-xl leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4">
              Breakdown Operates at 5 – 10X higher power density
            </p>
          </div>
        </div>

       {/* Right Card - Image */}
        <div className="flex flex-col w-full lg:w-1/2">
          {/* Border Box - Matches left card */}
          <div className=" overflow-hidden flex items-center justify-center h-[330px] lg:h-[350px] xl:h-[500px]">
            <img
              src={optic_graph}
              alt="Comparison chart"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Right Bottom Text - Fixed Height to match left */}
          <div className="flex items-center justify-center w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px] 2xl:h-[80px]">
            <p className="text-gray-600 text-[15px] lg:text-base xl:text-lg 2xl:text-xl leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4">
             
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Applications Section */}
      <section className="">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#CDAE64]">
    {/* Left Side - Title */}
    <div className="md:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 md:border-b-2 lg:border-b-0 md:border-r-0 lg:border-r-2 border-[#CDAE64]">
      <h2 className="text-2xl font-semibold leading-tight tracking-wide text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        APPLICATIONS OF
        <br />
        THERMAL
      </h2>
    </div>

    {/* Right Side - 3 Application Cards */}
    <div className="grid grid-cols-1 md:col-span-6 md:grid-cols-3">
      {/* Power Electronics */}
      <div
        onClick={() => openPopup("Power")}
        className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 sm:border-r-0 border-[#CDAE64] md:border-r-2"
      >
        <div className="p-1">
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-center text-black lg:text-lg sm:mb-4">
            POWER ELECTRONICS
          </h3>
          <div className="w-full h-48 overflow-hidden sm:h-56 md:h-64 lg:h-72 xl:h-80">
            <img
              src={Powerelectronic}
              alt="Power Electronics"
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Photonics */}
      <div
        onClick={() => openPopup("photonics")}
        className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 border-r-0 md:border-r-2 border-[#CDAE64] sm:border-b-2 "
      >
        <div className="p-1">
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-center text-black lg:text-lg sm:mb-4">
            PHOTONICS
          </h3>
          <div className="w-full h-48 overflow-hidden sm:h-56 md:h-64 lg:h-72 xl:h-80">
            <img
              src={photonics}
              alt="Photonics"
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Aerospace */}
      <div
        onClick={() => openPopup("space")}
        className="relative overflow-hidden cursor-pointer group"
      >
        <div className="p-1">
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-center text-black lg:text-lg sm:mb-4">
            AEROSPACE
          </h3>
          <div className="w-full h-48 overflow-hidden sm:h-56 md:h-64 lg:h-72 xl:h-80">
            <img
              src={AREOSPACE}
              alt="Aerospace"
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Rquestbutton />

      <PopUp
        isOpen={isPopupOpen("Power")}
        onClose={closePopup}
        images={popupData.Power}
      />

      <PopUp
        isOpen={isPopupOpen("photonics")}
        onClose={closePopup}
        images={popupData.photonics}
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



// import Rquestbutton from "./Common/Rquestbutton";
// import Powerelectronic from "../assets/power electronics.png";
// import photonics from "../assets/photonics.png";
// import AREOSPACE from "../assets/Aerospace.png";
// import Power from "../assets/POWERELECTRONICS_popup.png";
// import Power1 from "../assets/POWERELECTRONICS_popup_1.png";
// import Power2 from "../assets/POWERELECTRONICS_popup_3.png";
// import photonics1 from "../assets/Photonics_popup.png"
// import photonics2 from "../assets/Photonics_popup_1.png"
// import photonics3 from "../assets/Photonics_popup_3.png"
// import space from "../assets/Aerospace3.png";
// import space1 from "../assets/Aerospace1.png";
// import space2 from "../assets/Aerospace2.png";
// import PopUp from "./Common/PopUp";
// import { usePopup } from "./Common/usePopup";
// import optic_graph from "../assets/GanDiamonds/Thermal_graph.png";

// import Frame4 from "../assets/Thermalhero.jpg";
// const Thermal = () => {
//   const { openPopup, closePopup, isPopupOpen } = usePopup();

//   const popupData = {
//     Power: [Power, Power1, Power2],
//     photonics: [photonics2, photonics3 , photonics1],
//     space: [space, space1, space2],
//   };


//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative flex items-center justify-center pt-16 md:pt-10 lg:pt-0">
//         <img
//           src={Frame4}
//           alt="Optics Technology"
//           className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-full px-4 text-center text-white">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-galderglynn text-black font-semibold mb-4 tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] lg:tracking-[0.75em] transform translate-y-0">
//               THERMAL
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* Description Section */}
//       <section className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-25 sm:py-8 md:py-10">
//         <p className="font-galderglynn text-[#767676] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide sm:tracking-widest text-center md:text-left ">
//           Diamond is the highest thermally conductive solid material known to
//           man, outperforming copper, aluminum nitride, and even SiC by an order
//           of magnitude. With QTG line of products, this property becomes
//           scalable for advanced industrial and electronic use.
//         </p>
//       </section>

//       {/* Properties Section */}
//       {/* <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-20 md:py-12">
//   <h2 className="mb-6 ml-1 text-3xl font-semibold tracking-wide text-left sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl md:mb-4 md:ml-5">
//     PROPERTIES
//   </h2>

//   <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6 md:gap-2">
   
//     <div className="flex flex-col items-center justify-center p-2 text-center bg-white sm:p-4 md:p-2">
//       <img
//         src={optic_graph1}
//         alt="Transmission Chart"
//         className="w-full h-[400px] sm:h-[450px] md:h-[400px] lg:h-[550px] xl:h-[510px] rounded-lg"
//       />
//     </div>

   
//     <div className="flex items-center justify-center p-2 bg-white sm:p-4 md:p-2">
//       <img
//         src={optic_graph}
//         alt="Transmission Graph"
//         className="w-full h-[400px] sm:h-[450px] md:h-[400px] lg:h-[550px] xl:h-[510px] rounded-lg"
//       />
//     </div>
//   </div>
// </section> */}


// <section className="px-5 py-4 mb-4 2xl:px-23 sm:py-4 md:py-6 lg:py-10">
//   <h2 className="text-[#333333] font-[Galderglynnlt] text-3xl sm:text-5xl md:text-5xl xl:text-5xl tracking-wider text-center md:text-left mb-6 md:mb-8 ml-1 md:ml-2">
//     PROPERTIES
//   </h2>

//   <div className="flex items-center justify-center p-2 bg-white">
//     <div className="w-full mx-auto ">
//       {/* Main Container with two boxes side by side */}
//       <div className="flex flex-col gap-1 lg:flex-row lg:gap-10 xl:gap-16">
//         {/* Left Card */}
//         <div className="flex flex-col w-full lg:w-1/2">
//           {/* Border Box */}
//           <div className="border-2 border-[#c5a867] sm:p-5   xl:p-14 2xl:p-20 flex flex-col justify-center h-[330px] lg:h-[350px] xl:h-[500px] ">
//             {/* 5X Text */}
//             <div className="mb-4 text-center sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
//               <h1 className="text-[180px] xl:text-[270px] 2xl:text-[280px] font-[Galderglynnbd] font-extrabold text-[#c5a867] leading-none tracking-tight">
//                 5X
//               </h1>
//             </div>

//             {/* Title */}
//             <div className="space-y-1 text-center sm:space-y-2">
//               <h2 className="text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                 Thermal Dissipation
//               </h2>
//               <h2 className="text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                 V/S
//               </h2>
//               <h2 className="text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-light tracking-wider font-[Montserratmd] leading-snug">
//                 GaN On SiC
//               </h2>
//             </div>
//           </div>

//           {/* Left Bottom Text - Fixed Height */}
//           <div className="flex items-center justify-center w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px] 2xl:h-[80px]">
//             <p className="text-gray-600 text-[15px] lg:text-base xl:text-lg 2xl:text-xl leading-relaxed tracking-wider text-center font-[Montserratmd] px-2 sm:px-4">
//               Breakdown Operates at 5 – 10X higher power density
//             </p>
//           </div>
//         </div>

//         {/* Right Card - Image */}
//         <div className="flex items-center justify-center w-full lg:w-1/2 ">
//           {/* Image Container - Matches left card structure */}
//           <div className=" overflow-hidden w-full bg-white h-[200px] sm:h-[360px] md:h-[400px]  xl:h-[500px]">
//             <img
//               src={optic_graph}
//               alt="Comparison chart"
//               className="object-contain w-full h-full"
//             />
//           </div>

          
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* Applications Section */}
//       <section className="">
//   <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#CDAE64]">
//     {/* Left Side - Title */}
//     <div className="md:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 border-b-2 md:border-b-2 lg:border-b-0 md:border-r-0 lg:border-r-2 border-[#CDAE64]">
//       <h2 className="text-2xl font-semibold leading-tight tracking-wide text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
//         APPLICATIONS OF
//         <br />
//         THERMAL
//       </h2>
//     </div>

//     {/* Right Side - 3 Application Cards */}
//     <div className="grid grid-cols-1 md:col-span-6 md:grid-cols-3">
//       {/* Power Electronics */}
//       <div
//         onClick={() => openPopup("Power")}
//         className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 sm:border-r-0 border-[#CDAE64] md:border-r-2"
//       >
//         <div className="p-1">
//           <h3 className="mb-3 text-sm font-semibold tracking-wide text-center text-black lg:text-lg sm:mb-4">
//             POWER ELECTRONICS
//           </h3>
//           <div className="w-full h-48 overflow-hidden sm:h-56 md:h-64 lg:h-72 xl:h-80">
//             <img
//               src={Powerelectronic}
//               alt="Power Electronics"
//               className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Photonics */}
//       <div
//         onClick={() => openPopup("photonics")}
//         className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 border-r-0 md:border-r-2 border-[#CDAE64] sm:border-b-2 "
//       >
//         <div className="p-1">
//           <h3 className="mb-3 text-sm font-semibold tracking-wide text-center text-black lg:text-lg sm:mb-4">
//             PHOTONICS
//           </h3>
//           <div className="w-full h-48 overflow-hidden sm:h-56 md:h-64 lg:h-72 xl:h-80">
//             <img
//               src={photonics}
//               alt="Photonics"
//               className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Aerospace */}
//       <div
//         onClick={() => openPopup("space")}
//         className="relative overflow-hidden cursor-pointer group"
//       >
//         <div className="p-1">
//           <h3 className="mb-3 text-sm font-semibold tracking-wide text-center text-black lg:text-lg sm:mb-4">
//             AEROSPACE
//           </h3>
//           <div className="w-full h-48 overflow-hidden sm:h-56 md:h-64 lg:h-72 xl:h-80">
//             <img
//               src={AREOSPACE}
//               alt="Aerospace"
//               className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       <Rquestbutton />

//       <PopUp
//         isOpen={isPopupOpen("Power")}
//         onClose={closePopup}
//         images={popupData.Power}
//       />

//       <PopUp
//         isOpen={isPopupOpen("photonics")}
//         onClose={closePopup}
//         images={popupData.photonics}
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