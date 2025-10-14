// import Popup1 from "../../assets/Optics/High Power laser system 1.jpg";
// import Popup2 from "../../assets/Optics/High Power laser system 2.jpg";
// import Popup3 from "../../assets/Optics/High Power laser system 3.jpg";
// // import PopUp4 from "../../assets/GanDiamonds/RFpopup4.png";
// import EVpopup1 from "../../assets/Optics/Quantum optics 1.jpg";
// import EVpopup2 from "../../assets/Optics/Quantum optics 2.jpg";
// import EVpopup3 from "../../assets/Optics/Quantum optics 3.jpg";
// import Computingpopup1 from "../../assets/Optics/Aerospace1.jpg";
// import Computingpopup2 from "../../assets/Optics/Aerospace2.jpg";
// import Computingpopup3 from "../../assets/Optics/Aerospace3.jpg";


// interface MetricSection {
//   number?: string;
//   description: string;
//   image?: string;
//   isSpecial?: boolean;
//   hasLineBreaks?: boolean;
//   isVoltage?: boolean;
// }

// interface ModalColumn {
//   title: string;
//   image: string;
//   metrics: MetricSection[];
// }

// interface PopupProps {
//   onClose: () => void;
// }

// // Existing RF Modal (unchanged except mobile fixes)
// export const LASERSYSTEMS: React.FC<PopupProps> = ({ onClose }) => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "LASER",
//       image: Popup1,
//       metrics: [
//         { number: "ULTRA-LOW", description: "Absorption Coefficient" },
//         { number: ">100 J/CM2", description: "Laser Damage Threshol" },
//         {
//           number: "225 NM-50+µM",
//           description: "Broad Spectral Transmission",
//         },
//       ],
//     },
//     {
//       title: "INFRARED OPTICS",
//       image: Popup2,
//       metrics: [
//          {
//           description:
//             "CHEMICAL INERTNESS",
//           isSpecial: true,
//         },
//         { number: "2.4 @ 10µM",   description: "Refractive index", },
//         {
//           number: "10/10",
//           description: "Mohs Scale",
//         },
      
//       ],
//     },
//     {
//       title: "LIDAR",
//       image: Popup3,
//       metrics: [
//         {
//           description:
//             "BROADBAND TRANSPARENCY",
//           isSpecial: true,
//         },
//          {
//           description:
//             "NO BIREFRINGENCE",
//           isSpecial: true,
//         },
//         { number: "1.1PPM/K", description: "Thermal Expansion" },
//       ],
//     },
//   ];

//   return (
//     <div
//       id="rfModal"
//       className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 md:p-0"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white w-full md:max-w-3xl md:w-full mx-auto rounded-b-xl md:rounded-b-xl shadow-lg shadow-gray-500/50 max-h-[85vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center">
//           {modalData.map((column, index) => (
//             <div
//               key={column.title}
//               className={`${
//                 index < 2
//                   ? "border-b-2 md:border-b-0 md:border-r-2 border-[#c09141]"
//                   : ""
//               } flex flex-col items-center`}
//             >
//               {/* ====== Image & Title Section ====== */}
//               <div className="relative w-full flex justify-center items-center">
//                 <img
//                   src={column.image}
//                   className="w-full h-90 object-fill font-[Galderglynnbd]"
//                   alt={column.title}
//                 />
//                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[Galderglynnbd] text-3xl px-2 py-10 ">
//                   {column.title}
//                 </p>
//               </div>

//               {/* ====== Metrics Section ====== */}
//               {column.metrics.map((metric, metricIndex) => (
//                 <div
//                   key={metricIndex}
//                   className=" flex-1 flex flex-col justify-center p-4 mb-3"
//                 >
//                   {/* Metric Number (Title) */}
//                   {metric.number && (
//                     <div
//                       className={`font-[Galderglynnbd] tracking-wide leading-tight 
//                         ${
//                           column.title === "DEFENCE"
//                             ? " text-4xl text-[#cdae64]"
//                             : column.title === "5G/6G"
//                             ? "text-[#cdae64] text-4xl "
//                             : "text-[#cdae64] text-4xl"
//                         }`}
//                       style={{
//                         fontWeight:
//                           metricIndex === 0
//                             ? "normal"
//                             : metricIndex === 1
//                             ? "normal"
//                             : "normal",
//                         textShadow:
//                           column.title === "RADAR"
//                             ? "1px 1px 2px rgba(0,0,0,0.0)"
//                             : "none",
//                       }}
//                     >
//                       {metric.number}
//                     </div>
//                   )}

//                   {/* Optional Metric Image */}
//                   {metric.image && (
//                     <img
//                       src={metric.image}
//                       className="w-5/7 h-12 mx-auto mb-2 metric-image"
//                       alt=""
//                     />
//                   )}
//                   <p
//                     className={`text-sm font-[Montserratmd] px-2 text-semibold${
//                       metric.isSpecial
//                         ? " text-black-900"
//                         : column.title === "DEFENCE"
//                         ? "text-black-900"
//                         : column.title === "5G/6G"
//                         ? "text-black-900"
//                         : "text-black-900 px-5"
//                     }`}
//                     style={{
//                       lineHeight: "1.6",
//                       fontSize: "0.80rem",
//                       margin: metric.description.includes(
//                         "Best Balance of Mobility, Power & Heat Management"
//                       )
//                         ? "10px 40px"
//                         : "0",
//                     }}
//                   >
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: metric.description
//                           .replace(
//                             "Mobility, Power & Heat Management",
//                             `<span style="color:#cdae64;  text-justify: inter-word;">Mobility, Power & Heat Management</span>`
//                           )
//                           .replace(
//                             "Frequency Capability",
//                             `<strong style=" padding:0 10px;">Frequency Capability</strong>`
//                           ),
//                       }}
//                     />
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // EV Systems Popup - Same layout but different styling
// export const QUANTUMOPTICS: React.FC<PopupProps> = ({ onClose }) => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "EMITTERS",
//       image: EVpopup1,
//       metrics: [
//         {
//           number: "Coherence",
//           description: "at Room Temp",
//         },
//         {
//           number: "5.5 EV",
//           description: "Wide bandgap",
//         },
//          {
//           description: "High purity for single-photon detection",
//           isSpecial: true,
//         },
//       ],
//     },
//     {
//       title: "X-RAY",
//       image: EVpopup2,
//       metrics: [
//         {
//           description: "RADIATION DURABILITY",
//           isSpecial: true,
//         },
//         // { number: "BROADEST", description: "Optical window in any solid" },
//         {
//           number: "<λ/10",
//           description: "Optical Flatness",
//         },
//         {
//           description: "Exceptional Thermal Conductivity",
//           isSpecial: true,
//         },
        
//       ],
//     },
//     {
//       title: "CRRYOGENIC INSTRUMENTS",
//       image: EVpopup3,
//       metrics: [
//       {
//           number: "<0.5 µM",
//           description: "Thermal Conductivity than Gan on Sic",
//         },{
//           number: "1.1PPM/K",
//           description: "CTE",
//         },{
//           number: "4K TO 1000°C",
//           description: "Operating",
//         }
       
//       ],
//     },
//   ];

//   return (
//     <div
//       className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-0 md:p-0"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white w-full md:max-w-3xl md:w-full mx-auto rounded-b-xl md:rounded-b-xl shadow-lg shadow-gray-500/50 max-h-[85vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center">
//           {modalData.map((column, index) => (
//             <div
//               key={column.title}
//               className={`${
//                 index < 2
//                   ? "border-b-2 md:border-b-0 md:border-r-2  border-[#c09141]"
//                   : ""
//               } flex flex-col items-center`}
//             >
//               <div className="relative w-full flex justify-center items-center">
//                 <img src={column.image} className="w-full" alt={column.title} />
//                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[Galderglynnbd] text-3xl px-2 py-8  rounded-lg">
//                   {column.title}
//                 </p>
//               </div>

//               {column.metrics.map((metric, metricIndex) => (
//                 <div
//                   key={metricIndex}
//                   className=" flex-1 flex flex-col justify-center p-4 mb-3"
//                 >
//                   {metric.number && (
//                     <div className=" text-4xl text-[#cdae64] tracking-widest leading-wide font-[Galderglynnbd]">
//                       {metric.number}
//                     </div>
//                   )}
//                   {metric.image && (
//                     <img
//                       src={metric.image}
//                       className="w-5/7 h-12 mx-auto mb-2"
//                       alt=""
//                     />
//                   )}

//                   <p
//                     className="text-sm px-2 font-[Montserratrg] text-black leading-relaxed"
//                     style={{
//                       margin:
//                         metric.description.includes("Faster Motor Control") ||
//                         metric.description.includes("Improved Reliability")
//                           ? "10px 12px"
//                           : "0",
//                     }}
//                   >
//                     {metric.hasLineBreaks ? (
//                       <span
//                         dangerouslySetInnerHTML={{
//                           __html: metric.description.replace(
//                             "800V+",
//                             `<span class="text-4xl text-[#cdae64] tracking-widest font-[Galderglynnbd]">800V+</span>`
//                           ),
//                         }}
//                       />
//                     ) : metric.description.includes("Faster Motor Control") ? (
//                       <span
//                         dangerouslySetInnerHTML={{
//                           __html: metric.description
//                             .replace(
//                               "Faster Motor Control",
//                               `<strong style="color:#cdae64;">Faster Motor Control</strong>`
//                             )
//                             .replace(
//                               "NVH",
//                               `<strong style="color:#cdae64;">NVH</strong>`
//                             ),
//                         }}
//                       />
//                     ) : metric.description.includes("Reliability") ? (
//                       <span
//                         dangerouslySetInnerHTML={{
//                           __html: metric.description
//                             .replace(
//                               "Reliability",
//                               `<strong style="color:#cdae64;">Reliability</strong>`
//                             )
//                             .replace(
//                               "and",
//                               `<strong style="color:#cdae64;">and</strong>`
//                             )
//                             .replace(
//                               "Durability",
//                               `<strong style="color:#cdae64;">Durability</strong>`
//                             ),
//                         }}
//                       />
//                     ) : (
//                       metric.description
//                     )}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// export const SPACE: React.FC<PopupProps> = ({ onClose }) => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "MISSILE",
//       image: Computingpopup1,
//       metrics: [
//         { number: "<1µM @ 1KM/S", description: "Abrasion Loss" },
//         { number: "3-5µ & 8-5µM", description: "IR Transparency" },
//    {
//           description: "Survives March 5 Erosion",
//           isSpecial: true,
//         },
//       ],
//     },
//     {
//       title: "AEROSPACE",
//       image: Computingpopup2,
//       metrics: [
//          {
//           description: "RADIATION DURABILITY",
//           isSpecial: true,
//         },  {
//           description: "NO OUTGASSING IN VACUUM",
//           isSpecial: true,
//         },
//         {
//           number: ">106RADS",
//           description: "Radiation Resistance",
//         },
//       ],
//     },
//     {
//       title: "SATELLITE",
//       image: Computingpopup3,
//       metrics: [
//         { number: ">106 RADS", description: "Stable Transmission" },
//         // { number: "20-30%", description: "more AI Training Thoroughput" },
//          {
//           description: "NO OPTICAL DEGRADATION",
//           isSpecial: true,
//         },
//         { number: "<0.1%", description: "Thermal Distortion" },
//       ],
//     },
//   ];

//   return (
//     <div
//       className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 md:p-0"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white w-full md:max-w-3xl md:w-full mx-auto rounded-b-xl md:rounded-b-xl shadow-lg shadow-gray-500/50 max-h-[85vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center">
//           {modalData.map((column, index) => (
//             <div
//               key={column.title}
//               className={`${
//                 index < 2
//                   ? "border-b-2 md:border-b-0 md:border-r-2 border-[#c09141]"
//                   : ""
//               } flex flex-col items-center`}
//             >
//               <div className="relative w-full flex justify-center items-center">
//                 <img
//                   src={column.image}
//                   className="w-full h-90 object-fill font-[Galderglynnbd]"
//                   alt={column.title}
//                 />
//                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[Galderglynnbd] text-3xl px-2 py-10">
//                   {column.title}
//                 </p>
//               </div>

//               {column.metrics.map((metric, metricIndex) => (
//                 <div
//                   key={metricIndex}
//                   className="mt-2 flex-1 flex flex-col justify-center p-4 mb-3"
//                 >
//                   {metric.number && (
//                     <div className="font-medium text-4xl text-[#cdae64] tracking-normal leading-tight font-[Galderglynnbd]">
//                       {metric.number}
//                     </div>
//                   )}
//                   {metric.image && (
//                     <img
//                       src={metric.image}
//                       className="w-5/7 h-12 mx-auto mb-2 filter brightness-125"
//                       alt=""
//                     />
//                   )}
//                   <p className="text-sm  font-[Montserratrgg] text-black leading-relaxed">
//                     {metric.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LASERSYSTEMS;


import Popup1 from "../../assets/Optics/High Power laser system 1.jpg";
import Popup2 from "../../assets/Optics/High Power laser system 2.jpg";
import Popup3 from "../../assets/Optics/High Power laser system 3.jpg";
import EVpopup1 from "../../assets/Optics/Quantum optics 1.jpg";
import EVpopup2 from "../../assets/Optics/Quantum optics 2.jpg";
import EVpopup3 from "../../assets/Optics/Quantum optics 3.jpg";
import Computingpopup1 from "../../assets/Optics/Aerospace1.jpg";
import Computingpopup2 from "../../assets/Optics/Aerospace2.jpg";
import Computingpopup3 from "../../assets/Optics/Aerospace3.jpg";
import { useEffect } from "react";


interface MetricSection {
  number?: string;
  description: string;
  image?: string;
  isSpecial?: boolean;
  hasLineBreaks?: boolean;
  isVoltage?: boolean;
}


interface ModalColumn {
  title: string;
  image: string;
  metrics: MetricSection[];
}


interface PopupProps {
  onClose: () => void;
}


// Helper hook to manage body scroll
const useDisableBodyScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('popup-open');
      document.documentElement.classList.add('modal-open-body');
    } else {
      document.body.classList.remove('popup-open');
      document.documentElement.classList.remove('modal-open-body');
    }


    return () => {
      document.body.classList.remove('popup-open');
      document.documentElement.classList.remove('modal-open-body');
    };
  }, [isOpen]);
};


// Base Modal Component - NO internal scrolling, uses window scroll
const BaseModal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({
  onClose,
  children
}) => {
  useDisableBodyScroll(true);


  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);


  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-start justify-center z-50 p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[85vw] md:max-w-3xl rounded-xl shadow-lg shadow-gray-500/50 my-8 md:my-16 mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};


export const LASERSYSTEMS: React.FC<PopupProps> = ({ onClose }) => {
  const modalData: ModalColumn[] = [
    {
      title: "LASER",
      image: Popup1,
      metrics: [
        { number: "ULTRA-LOW", description: "Absorption Coefficient" },
        { number: ">100 J/CM2", description: "Laser Damage Threshol" },
        {
          number: "225 NM-50+µM",
          description: "Broad Spectral Transmission",
        },
      ],
    },
    {
      title: "INFRARED OPTICS",
      image: Popup2,
      metrics: [
         {
          description: "CHEMICAL INERTNESS",
          isSpecial: true,
        },
        { number: "2.4 @ 10µM", description: "Refractive index" },
        {
          number: "10/10",
          description: "Mohs Scale",
        },
      ],
    },
    {
      title: "LIDAR",
      image: Popup3,
      metrics: [
        {
          description: "BROADBAND TRANSPARENCY",
          isSpecial: true,
        },
         {
          description: "NO BIREFRINGENCE",
          isSpecial: true,
        },
        { number: "1.1PPM/K", description: "Thermal Expansion" },
      ],
    },
  ];


  return (
    <BaseModal onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center">
        {modalData.map((column, index) => (
          <div
            key={column.title}
            className={`${
              index < 2
                ? "border-b-2 md:border-b-0 md:border-r-2 border-[#c09141]"
                : ""
            } flex flex-col items-center min-h-[500px]`}
          >
            <div className="relative w-full flex justify-center items-center">
              <img
                src={column.image}
                className="w-full h-90 object-fill font-[Galderglynnbd]"
                alt={column.title}
              />
              <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[Galderglynnbd] text-3xl px-2 py-10 ">
                {column.title}
              </p>
            </div>


            {column.metrics.map((metric, metricIndex) => (
              <div
                key={metricIndex}
                className="flex-1 flex flex-col justify-center p-4 mb-3"
              >
                {metric.number && (
                  <div className="font-[Galderglynnbd] text-4xl text-[#cdae64] tracking-wide leading-tight">
                    {metric.number}
                  </div>
                )}


                {metric.image && (
                  <img
                    src={metric.image}
                    className="w-5/7 h-12 mx-auto mb-2 metric-image"
                    alt=""
                  />
                )}
                <p
                  className={`text-sm font-[Montserratmd] px-2 text-semibold ${
                    metric.isSpecial ? "text-black-900" : "text-black-900"
                  }`}
                  style={{
                    lineHeight: "1.6",
                    fontSize: "0.80rem",
                  }}
                >
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </BaseModal>
  );
};


export const QUANTUMOPTICS: React.FC<PopupProps> = ({ onClose }) => {
  const modalData: ModalColumn[] = [
    {
      title: "EMITTERS",
      image: EVpopup1,
      metrics: [
        {
          number: "Coherence",
          description: "at Room Temp",
        },
        {
          number: "5.5 EV",
          description: "Wide bandgap",
        },
         {
          description: "High purity for single-photon detection",
          isSpecial: true,
        },
      ],
    },
    {
      title: "X-RAY",
      image: EVpopup2,
      metrics: [
        {
          description: "RADIATION DURABILITY",
          isSpecial: true,
        },
        {
          number: "<λ/10",
          description: "Optical Flatness",
        },
        {
          description: "Exceptional Thermal Conductivity",
          isSpecial: true,
        },
      ],
    },
    {
      title: "CRYOGENIC INSTRUMENTS",
      image: EVpopup3,
      metrics: [
        {
          number: "<0.5 µM",
          description: "Thermal Conductivity",
        },
        {
          number: "1.1PPM/K",
          description: "CTE",
        },
        {
          number: "4K TO 1000°C",
          description: "Operating",
        }
      ],
    },
  ];


  return (
    <BaseModal onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center">
        {modalData.map((column, index) => (
          <div
            key={column.title}
            className={`${
              index < 2
                ? "border-b-2 md:border-b-0 md:border-r-2 border-[#c09141]"
                : ""
            } flex flex-col items-center min-h-[500px]`}
          >
            <div className="relative w-full flex justify-center items-center">
              <img src={column.image} className="w-full" alt={column.title} />
              <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[Galderglynnbd] text-3xl px-2 py-8 rounded-lg">
                {column.title}
              </p>
            </div>


            {column.metrics.map((metric, metricIndex) => (
              <div
                key={metricIndex}
                className="flex-1 flex flex-col justify-center p-4 mb-3"
              >
                {metric.number && (
                  <div className="text-4xl text-[#cdae64] tracking-widest leading-wide font-[Galderglynnbd]">
                    {metric.number}
                  </div>
                )}
                {metric.image && (
                  <img
                    src={metric.image}
                    className="w-5/7 h-12 mx-auto mb-2"
                    alt=""
                  />
                )}


                <p className="text-sm px-2 font-[Montserratrg] text-black leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </BaseModal>
  );
};


export const SPACE: React.FC<PopupProps> = ({ onClose }) => {
  const modalData: ModalColumn[] = [
    {
      title: "MISSILE",
      image: Computingpopup1,
      metrics: [
        { number: "<1µM @ 1KM/S", description: "Abrasion Loss" },
        { number: "3-5µ & 8-5µM", description: "IR Transparency" },
        {
          description: "Survives March 5 Erosion",
          isSpecial: true,
        },
      ],
    },
    {
      title: "AEROSPACE",
      image: Computingpopup2,
      metrics: [
        {
          description: "RADIATION DURABILITY",
          isSpecial: true,
        },
        {
          description: "NO OUTGASSING IN VACUUM",
          isSpecial: true,
        },
        {
          number: ">106RADS",
          description: "Radiation Resistance",
        },
      ],
    },
    {
      title: "SATELLITE",
      image: Computingpopup3,
      metrics: [
        { number: ">106 RADS", description: "Stable Transmission" },
        {
          description: "NO OPTICAL DEGRADATION",
          isSpecial: true,
        },
        { number: "<0.1%", description: "Thermal Distortion" },
      ],
    },
  ];


  return (
    <BaseModal onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center">
        {modalData.map((column, index) => (
          <div
            key={column.title}
            className={`${
              index < 2
                ? "border-b-2 md:border-b-0 md:border-r-2 border-[#c09141]"
                : ""
            } flex flex-col items-center min-h-[500px]`}
          >
            <div className="relative w-full flex justify-center items-center">
              <img
                src={column.image}
                className="w-full h-90 object-fill font-[Galderglynnbd]"
                alt={column.title}
              />
              <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[Galderglynnbd] text-3xl px-2 py-10">
                {column.title}
              </p>
            </div>


            {column.metrics.map((metric, metricIndex) => (
              <div
                key={metricIndex}
                className="mt-2 flex-1 flex flex-col justify-center p-4 mb-3"
              >
                {metric.number && (
                  <div className="font-medium text-4xl text-[#cdae64] tracking-normal leading-tight font-[Galderglynnbd]">
                    {metric.number}
                  </div>
                )}
                {metric.image && (
                  <img
                    src={metric.image}
                    className="w-5/7 h-12 mx-auto mb-2 filter brightness-125"
                    alt=""
                  />
                )}
                <p className="text-sm font-[Montserratrgg] text-black leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </BaseModal>
  );
};


export default LASERSYSTEMS;

