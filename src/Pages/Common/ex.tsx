// import React, { useEffect, useRef, useState } from 'react';
// import Popup1 from "../../assets/GanDiamonds/RFpopup1.png";
// import Popup2 from "../../assets/GanDiamonds/RFpopup2.png";
// import Popup3 from "../../assets/GanDiamonds/RFpopup3.png";

// interface GanDiamondsPopupProps {
//   onClose?: () => void;
// }

// const GanDiamondsPopup: React.FC<GanDiamondsPopupProps> = ({ onClose }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const popupRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   const handleClickOutside = (e: MouseEvent) => {
//     if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
//       handleClose();
//     }
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     if (onClose) onClose();
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//       document.body.style.overflow = 'hidden';
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//         document.body.style.overflow = 'unset';
//       };
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
//       <div
//         ref={popupRef}
//         className="bg-white shadow-2xl w-full max-w-3xl h-[90vh] flex flex-col"
//       >

//         {/* Scrollable Content */}
//         <div ref={contentRef} className="flex-1 overflow-y-auto">
//           <div className="">
//             {/* Images Section */}
//             <div className="grid grid-cols-1 md:grid-cols-3  mb-12">
//               {/* Defence */}
//               <div className="flex flex-col items-center">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">DEFENCE</h2>
//                 <img
//                   src={Popup1}
//                   alt="Defence"
//                   className="w-full h-56 md:h-72 object-cover"
//                 />
//               </div>

//               {/* 5G/6G */}
//               <div className="flex flex-col items-center">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5G/6G</h2>
//                 <img
//                   src={Popup2}
//                   alt="5G/6G"
//                   className="w-full h-56 md:h-72 object-cover "
//                 />
//               </div>

//               {/* Radar */}
//               <div className="flex flex-col items-center">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">RADAR</h2>
//                 <img
//                   src={Popup3}
//                   alt="Radar"
//                   className="w-full h-56 md:h-72 object-cover "
//                 />
//               </div>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
//               {/* Column 1 */}
//               <div className="text-center">
//                 <div className="mb-4">
//                   <p className="text-4xl md:text-4xl font-bold text-amber-700">3X</p>
//                 </div>
//                 <p className="text-gray-700 font-medium text-sm md:text-base">Higher power density</p>
//               </div>

//               {/* Column 2 */}
//               <div className="text-center">
//                 <div className="mb-4">
//                   <p className="text-4xl md:text-4xl font-bold text-amber-700">HIGHEST</p>
//                 </div>
//                 <p className="text-gray-700 font-medium text-sm md:text-base">Linearity ensures signal fidelity</p>
//               </div>

//               {/* Column 3 */}
//               <div className="text-center">
//                 <div className="mb-4">
//                   <p className="text-4xl md:text-4xl font-bold text-amber-700">5X</p>
//                 </div>
//                 <p className="text-gray-700 font-medium text-sm md:text-base">Thermal Conductivity than Gan on SiC</p>
//               </div>

//               {/* Column 4 */}
//               <div className="text-center">
//                 <div className="mb-4">
//                   <p className="text-4xl md:text-5xl font-bold text-amber-700">~80%</p>
//                 </div>
//                 <p className="text-gray-700 font-medium text-sm md:text-base">Smaller devices</p>
//               </div>

//               {/* Column 5 */}
//               <div className="text-center">
//                 <div className="mb-4">
//                   <p className="text-4xl md:text-5xl font-bold text-amber-700">100%</p>
//                 </div>
//                 <p className="text-gray-700 font-medium text-sm md:text-base">Linearity ensures signal fidelity</p>
//               </div>

//               {/* Column 6 */}
//               <div className="text-center">
//                 <div className="mb-4">
//                   <p className="text-gray-600 font-medium text-xs md:text-sm uppercase tracking-wider mb-3">Frequency Capability:</p>
//                   <p className="text-gray-700 font-medium text-sm md:text-base">Ka-band and beyond</p>
//                 </div>
//               </div>

//               {/* Column 7 */}
//               <div className="text-center">
//                 <div className="mb-4">
//                   <p className="text-4xl md:text-5xl font-bold text-amber-700">10/10</p>
//                 </div>
//                 <p className="text-gray-700 font-medium text-sm md:text-base">MOHS Scale Highly Durable under Rigorous Condition</p>
//               </div>

//               {/* Column 8 */}
//               <div className="text-center">
//                 <div className="mb-4">
//                   <p className="text-amber-700 font-bold text-sm md:text-base">Best Balance of</p>
//                   <p className="text-amber-700 font-bold text-sm md:text-base italic">Mobility, Power & Heat Management</p>
//                   <p className="text-gray-700 font-medium text-sm md:text-base">for 5G/6G Infrastructure</p>
//                 </div>
//               </div>

//               {/* Column 9 */}
//               <div className="text-center">
//                 <div className="mb-4">
//                   <p className="text-4xl md:text-5xl font-bold text-amber-700">80%</p>
//                 </div>
//                 <p className="text-gray-700 font-medium text-sm md:text-base">Efficiency (Pout / PDC)</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GanDiamondsPopup;

// import Popup1 from "../../assets/GanDiamonds/RFpopup1.png";
// import Popup2 from "../../assets/GanDiamonds/RFpopup2.png";
// import Popup3 from "../../assets/GanDiamonds/RFpopup3.png";
// import PopUp4 from "../../assets/GanDiamonds/RFpopup4.png";

// interface MetricSection {
//   number?: string;
//   description: string;
//   image?: string;
//   isSpecial?: boolean;
// }

// interface ModalColumn {
//   title: string;
//   image: string;
//   metrics: MetricSection[];
// }

// const RFModal: React.FC = () => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "DEFENCE",
//       image: Popup1,
//       metrics: [
//         { number: "3X", description: "Higher power density" },
//         { number: "~80%", description: "Smaller devices" },
//         { number: "10/10", description: "MOHS Scale Highly Durable under Rigorous Condition" }
//       ]
//     },
//     {
//       title: "5G/6G",
//       image: Popup2,
//       metrics: [
//         { number: "HIGHEST", description: "Linearity ensures signal fidelity" },
//         { number: "100%", description: "Lower Junction Temperature 100% v/s GaN on SiC" },
//         {
//           description: "Best Balance of Mobility, Power & Heat Management for 5G/6G Infrastructure",
//           isSpecial: true
//         }
//       ]
//     },
//     {
//       title: "RADAR",
//       image: Popup3,
//       metrics: [
//         { number: "5X", description: "Thermal Conductivity than GaN on SiC" },
//         {
//           image: PopUp4,
//           description: "Frequency Capability: Ka-band and beyond"
//         },
//         { number: "80%", description: "Efficiency (Pout / PDC)" }
//       ]
//     }
//   ];

//   return (
//     <div id="rfModal" className="fixed inset-0 bg-black-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="bg-white  max-w-3xl w-full ">
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center">
//           {modalData.map((column, index) => (
//             <div
//               key={column.title}
//               className={` ${
//                 index < 2 ? "border-r-2 border-[#cdae64]" : ""
//               }`}
//             >
//               <div className="flex flex-col items-center">
//                 {/* Image Section */}
//                 <div className="m4-6">
//                          <p className="text-black font-semibold mt-2">{column.title}</p>
//                   <img
//                     src={column.image}
//                     className="w-full mx-auto"
//                     alt={column.title}
//                   />

//                 </div>

//                 {/* Metrics Sections */}
//                 {column.metrics.map((metric, metricIndex) => (
//                   <div key={metricIndex} className="m-4">
//                     {metric.number && (
//                       <div className="text-3xl font-bold text-[#cdae64] pt-4 font-[Galderglynnbd]">
//                         {metric.number}
//                       </div>
//                     )}
//                     {metric.image && (
//                       <img
//                         src={metric.image}
//                         className="w-full h-12 mx-auto mb-2"
//                         alt=""
//                       />
//                     )}
//                     <p
//                       className={`text-sm text-black-800  font-[Montserratrg]${
//                         metric.isSpecial ? "italic" : ""
//                       }`}
//                     >
//                       {metric.description.split("\n").map((line, lineIndex) => (
//                         <span key={lineIndex}>
//                           {line}
//                           {lineIndex < metric.description.split("\n").length - 1 && <br />}
//                         </span>
//                       ))}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RFModal;

import Popup1 from "../../assets/GanDiamonds/RFpopup1.png";
import Popup2 from "../../assets/GanDiamonds/RFpopup2.png";
import Popup3 from "../../assets/GanDiamonds/RFpopup3.png";
import PopUp4 from "../../assets/GanDiamonds/RFpopup4.png";
import "./RFModal.css";

interface MetricSection {
  number?: string;
  description: string;
  image?: string;
  isSpecial?: boolean;
}

interface ModalColumn {
  title: string;
  image: string;
  metrics: MetricSection[];
}

const RFModal: React.FC = () => {
  const modalData: ModalColumn[] = [
    {
      title: "DEFENCE",
      image: Popup1,
      metrics: [
        { number: "3X", description: "Higher power density" },
        { number: "~80%", description: "Smaller devices" },
        {
          number: "10/10",
          description: "MOHS Scale Highly Durable under Rigorous Condition",
        },
      ],
    },
    {
      title: "5G/6G",
      image: Popup2,
      metrics: [
        { number: "HIGHEST", description: "Linearity ensures signal fidelity" },
        {
          number: "100%",
          description: "Lower Junction Temperature 100% v/s GaN on SiC",
        },
        {
          description:
            "Best Balance of Mobility, Power & Heat Management for 5G/6G Infrastructure",
          isSpecial: true,
        },
      ],
    },
    {
      title: "RADAR",
      image: Popup3,
      metrics: [
        { number: "5X", description: "Thermal Conductivity than GaN on SiC" },
        {
          image: PopUp4,
          description: "Frequency Capability: Ka-band and beyond",
        },
        { number: "80%", description: "Efficiency (Pout / PDC)" },
      ],
    },
  ];

  return (
    <div
      id="rfModal"
      className="fixed inset-0 bg-black-300 bg-opacity-300 shadow-black backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-white max-w-3xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          {modalData.map((column, index) => (
            <div
              key={column.title}
              className={`${index < 2 ? "border-r-2 border-[#cdae64]" : ""}`}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-full flex justify-center items-center ">
                  <img
                    src={column.image}
                    className="w-full font-[Galderglynnbd]"
                    alt={column.title}
                  />
                  <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black font-bold font-[Galderglynnbd] text-3xl  px-2  py-10 rounded">
                    {column.title}
                  </p>
                </div>

                {/* Metrics Section */}
                {column.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="m-4">
                    {metric.number && (
                      <div className="text-4xl font-medium tracking-tight leading-tight text-[#cdae64] pt-4 font-[Galderglynnbd] metric-number">
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
                      className={`text-sm text-black-800 font-[Montserratrg] metric-text ${
                        metric.isSpecial ? "italic" : ""
                      }`}
                    >
                      {metric.description.split("\n").map((line, lineIndex) => (
                        <span key={lineIndex} className="text-black text-justify mt-5">
                          {line}
                          {lineIndex <
                            metric.description.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RFModal;

// import  { useEffect, useRef, useState } from 'react';
// import Popup1 from "../../assets/GanDiamonds/RFpopup1.png";
// import Popup2 from "../../assets/GanDiamonds/RFpopup2.png";
// import Popup3 from "../../assets/GanDiamonds/RFpopup3.png";
// const GanDiamondsPopup = ({ onClose }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const popupRef = useRef(null);
//   const contentRef = useRef(null);

//   const handleClickOutside = (e: { target: any; }) => {
//     if (popupRef.current && !popupRef.current.contains(e.target)) {
//       handleClose();
//     }
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     if (onClose) onClose();
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//       document.body.style.overflow = 'hidden';
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//         document.body.style.overflow = 'unset';
//       };
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div
//         ref={popupRef}
//         className="bg-white shadow-2xl w-full max-w-3xl h-[80vh] flex flex-col"
//       >
//         {/* Scrollable Content */}
//         <div ref={contentRef} className="flex-1 overflow-y-auto ">
//           {/* Main Grid - 3 columns on desktop, 1 column on mobile */}
//           <div className="grid grid-cols-1 md:grid-cols-3 ">

//             {/* DEFENCE Column */}
//             <div className="flex flex-col">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">DEFENCE</h2>
//               <img
//                 src={Popup1}
//                 alt="Defence"
//                 className="w-full h-60 md:h-78 object-fill mb-8"
//               />

//               {/* Defence Stats */}
//               <div className="space-y-8">
//                 <div className="text-center">
//                   <p className="text-4xl font-bold text-amber-700 mb-2">3X</p>
//                   <p className="text-gray-700 font-medium text-sm">Higher power density</p>
//                 </div>

//                 <div className="text-center">
//                   <p className="text-4xl font-bold text-amber-700 mb-2">~80%</p>
//                   <p className="text-gray-700 font-medium text-sm">Smaller devices</p>
//                 </div>

//                 <div className="text-center">
//                   <p className="text-4xl font-bold text-amber-700 mb-2">10/10</p>
//                   <p className="text-gray-700 font-medium text-sm">MOHS Scale Highly Durable under Rigorous Condition</p>
//                 </div>
//               </div>
//             </div>

//             {/* 5G/6G Column */}
//             <div className="flex flex-col">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">5G/6G</h2>
//               <img
//                 src={Popup2}
//                 alt="5G/6G"
//                 className="w-full h-60 md:h-78 object-fill mb-8"
//               />

//               {/* 5G/6G Stats */}
//               <div className="space-y-8">
//                 <div className="text-center">
//                   <p className="text-4xl font-bold text-amber-700 mb-2">HIGHEST</p>
//                   <p className="text-gray-700 font-medium text-sm">Linearity ensures signal fidelity</p>
//                 </div>

//                 <div className="text-center">
//                   <p className="text-4xl font-bold text-amber-700 mb-2">100%</p>
//                   <p className="text-gray-700 font-medium text-sm">Linearity ensures signal fidelity</p>
//                 </div>

//                 <div className="text-center">
//                   <p className="text-amber-700 font-bold text-sm mb-1">Best Balance of</p>
//                   <p className="text-amber-700 font-bold text-sm italic mb-1">Mobility, Power & Heat Management</p>
//                   <p className="text-gray-700 font-medium text-sm">for 5G/6G Infrastructure</p>
//                 </div>
//               </div>
//             </div>

//             {/* RADAR Column */}
//             <div className="flex flex-col">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">RADAR</h2>
//               <img
//                 src={Popup3}
//                 alt="Radar"
//                 className="w-full h-60 md:h-78 object-fill mb-8"
//               />

//               {/* Radar Stats */}
//               <div className="space-y-8">
//                 <div className="text-center">
//                   <p className="text-4xl font-bold text-amber-700 mb-2">5X</p>
//                   <p className="text-gray-700 font-medium text-sm">Thermal Conductivity than Gan on SiC</p>
//                 </div>

//                 <div className="text-center">
//                   <p className="text-gray-600 font-medium text-xs uppercase tracking-wider mb-2">Frequency Capability:</p>
//                   <p className="text-gray-700 font-medium text-sm">Ka-band and beyond</p>
//                 </div>

//                 <div className="text-center">
//                   <p className="text-4xl font-bold text-amber-700 mb-2">80%</p>
//                   <p className="text-gray-700 font-medium text-sm">Efficiency (Pout / PDC)</p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GanDiamondsPopup;