

// // import Popup1 from "../../assets/GanDiamonds/RFpopup1.png";
// // import Popup2 from "../../assets/GanDiamonds/RFpopup2.png";
// // import Popup3 from "../../assets/GanDiamonds/RFpopup3.png";
// // import PopUp4 from "../../assets/GanDiamonds/RFpopup4.png";
// // import EVpopup1 from "../../assets/GanDiamonds/EV_popup1.png";
// // import EVpopup2 from "../../assets/GanDiamonds/EV_popup2.png";
// // import EVpopup3 from "../../assets/GanDiamonds/EV_popup3.png";
// // import Computingpopup1 from "../../assets/GanDiamonds/Computing_popup_1.png";
// // import Computingpopup2 from "../../assets/GanDiamonds/Computing_popup_2.png";
// // import Computingpopup3 from "../../assets/GanDiamonds/Computing_popup_3.png";

// // // import "./RFModal.css";

// // interface MetricSection {
// //   number?: string;
// //   description: string;
// //   image?: string;
// //   isSpecial?: boolean;
// //   hasLineBreaks?: boolean;
// //   isVoltage?: boolean;
// // }

// // interface ModalColumn {
// //   title: string;
// //   image: string;
// //   metrics: MetricSection[];
// // }

// // interface PopupProps {
// //   onClose: () => void;
// // }

// // // Existing RF Modal (unchanged except mobile fixes)
// // export const RFModal: React.FC<PopupProps> = ({ onClose }) => {
// //   const modalData: ModalColumn[] = [
// //     {
// //       title: "DEFENCE",
// //       image: Popup1,
// //       metrics: [
// //         { number: "3X", description: "Higher power density" },
// //         { number: "~80%", description: "Smaller devices" },
// //         {
// //           number: "10/10",
// //           description: "MOHS Scale Highly Durable under Rigorous Condition",
// //         },
// //       ],
// //     },
// //     {
// //       title: "5G/6G",
// //       image: Popup2,
// //       metrics: [
// //         { number: "HIGHEST", description: "Linearity ensures signal fidelity" },
// //         {
// //           number: "100%",
// //           description: "Lower Junction Temperature 100% v/s GaN on SiC",
// //         },
// //         {
// //           description:
// //             "Best Balance of Mobility, Power & Heat Management for 5G/6G Infrastructure",
// //           isSpecial: true,
// //         },
// //       ],
// //     },
// //     {
// //       title: "RADAR",
// //       image: Popup3,
// //       metrics: [
// //         { number: "5X", description: "Thermal Conductivity than GaN on SiC" },
// //         {
// //           image: PopUp4,
// //           description: "Frequency Capability: Ka-band and beyond",
// //         },
// //         { number: "80%", description: "Efficiency (Pout / PDC)" },
// //       ],
// //     },
// //   ];

// //   return (
// //     <div
// //       id="rfModal"
// //       className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 md:p-0"
// //       onClick={onClose}
// //     >
// //       <div
// //         className="bg-white max-w-3xl w-full mx-4 md:mx-0 overflow-hidden rounded-b-xl shadow-lg shadow-gray-500/50"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <div className="grid grid-cols-1 md:grid-cols-3 text-center overflow-x-auto md:overflow-x-visible">
// //           {modalData.map((column, index) => (
// //             <div
// //               key={column.title}
// //               className={`${
// //                 index < 2 ? "border-r-2 border-[#c09141]" : ""
// //               } flex flex-col items-center min-w-[280px] md:min-w-0`}
// //             >
// //               {/* ====== Image & Title Section ====== */}
// //               <div className="relative w-full flex justify-center items-center">
// //                 <img
// //                   src={column.image}
// //                   className="w-full h-100 object-cover font-[Galderglynnlt]"
// //                   alt={column.title}
// //                 />
// //                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black  font-[Galderglynnrg] text-3xl px-2 py-10 ">
// //                   {column.title}
// //                 </p>
// //               </div>

// //               {/* ====== Metrics Section ====== */}
// //               {column.metrics.map((metric, metricIndex) => (
// //                 <div
// //                   key={metricIndex}
// //                   className="mt-2 flex-1 flex flex-col justify-center p-4 mb-3"
// //                 >
// //                   {/* Metric Number (Title) */}
// //                   {metric.number && (
// //                     <div
// //                       className={`font-[Galderglynnlt] tracking-wider leading-tight 
// //                         ${
// //                           column.title === "DEFENCE"
// //                             ? " text-4xl text-[#cdae64]"
// //                             : column.title === "5G/6G"
// //                             ? "text-[#cdae64] text-4xl "
// //                             : "text-[#cdae64] text-4xl"
// //                         }`}
// //                       style={{
// //                         fontWeight:
// //                           metricIndex === 0
// //                             ? "normal"
// //                             : metricIndex === 1
// //                             ? "normal"
// //                             : "normal",
// //                         textShadow:
// //                           column.title === "RADAR"
// //                             ? "1px 1px 2px rgba(0,0,0,0.0)"
// //                             : "none",
// //                       }}
// //                     >
// //                       {metric.number}
// //                     </div>
// //                   )}

// //                   {/* Optional Metric Image */}
// //                   {metric.image && (
// //                     <img
// //                       src={metric.image}
// //                       className="w-5/7 h-12 mx-auto mb-2 metric-image"
// //                       alt=""
// //                     />
// //                   )}

// //                   <p
// //                     className={`text-sm font-[Montserratmd] px-2 text-semibold${
// //                       metric.isSpecial
// //                         ? " text-black-900"
// //                         : column.title === "DEFENCE"
// //                         ? "text-black-900"
// //                         : column.title === "5G/6G"
// //                         ? "text-black-900"
// //                         : "text-black-900 px-5"
// //                     }`}
// //                     style={{
// //                       lineHeight: "1.6",
// //                       fontSize: "0.80rem",
// //                     }}
// //                   >
// //                     <span
// //                       dangerouslySetInnerHTML={{
// //                         __html: metric.description
// //                           .replace(
// //                             "Mobility, Power & Heat Management",
// //                             `<span style="color:#cdae64; padding:0 6px; text-justify: inter-word;">Mobility, Power & Heat Management</span>`
// //                           )
// //                           .replace(
// //                             "Frequency Capability",
// //                             `<strong style=" padding:0 5px;">Frequency Capability</strong>`
// //                           ),
// //                       }}
// //                     />
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // EV Systems Popup - Same layout but different styling
// // export const EVModal: React.FC<PopupProps> = ({ onClose }) => {
// //   const modalData: ModalColumn[] = [
// //     {
// //       title: "CHARGER",
// //       image: EVpopup1,
// //       metrics: [
// //         {
// //           number: "10X",
// //           description: "Faster switching frequency than silicon",
// //         },
// //         {
// //           number: "3X",
// //           description: "Power Density enabling ultrafast charging",
// //         },
// //         {
// //           number: "40-60%",
// //           description: "Smaller and Lighter",
// //         },
// //       ],
// //     },
// //     {
// //       title: "INVERTER",
// //       image: EVpopup2,
// //       metrics: [
// //         { number: "HIGHEST", description: "Efficiency v/s GaN on SiC & Si" },
// //         {
// //           number: "50%",
// //           description: "Size Reduction in Inverters",
// //         },
// //         {
// //           description: "Improved Reliability and Durability",
// //           isSpecial: true,
// //         },
// //       ],
// //     },
// //     {
// //       title: "EV",
// //       image: EVpopup3,
// //       metrics: [
// //         {
// //           description: "Faster Motor Control & Better NVH (Noise, Vibration, Harshness)",
// //           isSpecial: true,
// //         },
// //         { 
// //           description: "Supports<br/>800V+<br/>Architecture",
// //           hasLineBreaks: true
// //         },
// //         { number: "5X", description: "Thermal Conductivity than Gan on SiC" },
// //       ],
// //     },
// //   ];

// //   return (
// //     <div
// //       className="fixed inset-0 bg-black-100 backdrop-blur-xs flex items-center justify-center z-50 p-4 md:p-0"
// //       onClick={onClose}
// //     >
// //       <div
// //         className="bg-white max-w-3xl w-full mx-4 md:mx-0 overflow-hidden rounded-lg shadow-lg shadow-black-500/30"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <div className="grid grid-cols-1 md:grid-cols-3 text-center overflow-x-auto md:overflow-x-visible">
// //           {modalData.map((column, index) => (
// //             <div
// //               key={column.title}
// //               className={`${
// //                 index < 2 ? "border-r-2  border-[#c09141]" : ""
// //               } flex flex-col items-center min-w-[280px] md:min-w-0`}
// //             >
// //               <div className="relative w-full flex justify-center items-center">
// //                 <img src={column.image} className="w-full" alt={column.title} />
// //                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black font-bold text-3xl px-2 py-8  rounded-lg">
// //                   {column.title}
// //                 </p>
// //               </div>

// //               {column.metrics.map((metric, metricIndex) => (
// //                 <div
// //                   key={metricIndex}
// //                   className="mt-2 flex-1 flex flex-col justify-center p-4 mb-3"
// //                 >
// //                   {metric.number && (
// //                     <div className="font-semibold text-4xl text-[#cdae64] -tracking-wide leading-wide font-[Galderglynnrg]">
// //                       {metric.number}
// //                     </div>
// //                   )}
// //                   {metric.image && (
// //                     <img
// //                       src={metric.image}
// //                       className="w-5/7 h-12 mx-auto mb-2"
// //                       alt=""
// //                     />
// //                   )}
// //                   <p className="text-sm px-2 font-[Montserratrg] text-black leading-relaxed">
// //                     {metric.hasLineBreaks ? (
// //                       <span
// //                         dangerouslySetInnerHTML={{
// //                           __html: metric.description
// //                         }}
// //                       />
// //                     ) : metric.description.includes("Faster Motor Control") ? (
// //                       <span
// //                         dangerouslySetInnerHTML={{
// //                           __html: metric.description
// //                             .replace(
// //                               "Faster Motor Control",
// //                               `<strong style="color:#cdae64;">Faster Motor Control</strong>`
// //                             )
// //                             .replace(
// //                               "NVH",
// //                               `<strong style="color:#cdae64;">NVH</strong>`
// //                             )
// //                         }}
// //                       />
// //                     ) : metric.description.includes("Reliability") ? (
// //                       <span
// //                         dangerouslySetInnerHTML={{
// //                           __html: metric.description
// //                             .replace(
// //                               "Reliability",
// //                               `<strong style="color:#cdae64;">Reliability</strong>`
// //                             )
// //                             .replace(
// //                               "and",
// //                               `<strong style="color:#cdae64;">and</strong>`
// //                             )
// //                             .replace(
// //                               "Durability",
// //                               `<strong style="color:#cdae64;">Durability</strong>`
// //                             ),
// //                         }}
// //                       />
// //                     ) : (
// //                       metric.description
// //                     )}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Computing Popup - Same layout but different styling
// // export const ComputingModal: React.FC<PopupProps> = ({ onClose }) => {
// //   const modalData: ModalColumn[] = [
// //     {
// //       title: "GPU",
// //       image: Computingpopup1,
// //       metrics: [
// //         { number: "5X", description: "Thermal Conductivity than Gan on SiC" },
// //         { number: "10-20X", description: "Lower Junction Heating" },
// //         {
// //           description: "Stable Performance Without Throttling",
// //           isSpecial: true,
// //         },
// //       ],
// //     },
// //     {
// //       title: "DATA SERVER",
// //       image: Computingpopup2,
// //       metrics: [
// //         { number: "DOUBLES", description: "Components Lifetime (MTBF)" },
// //         {
// //           number: "50%",
// //           description: "Less Cooling Requirement",
// //         },
// //         {
// //           number: "2-4X",
// //           description: "Power per unit area",
// //         },
// //       ],
// //     },
// //     {
// //       title: "AI",
// //       image: Computingpopup3,
// //       metrics: [
// //         { number: "10-15%", description: "Lower Latency" },
// //         { number: "20-30%", description: "more AI Training Thoroughput" },
// //         { number: "5X", description: "rack compute density (in Flops)" },
// //       ],
// //     },
// //   ];

// //   return (
// //     <div
// //       className="fixed inset-0 bg-black-100 backdrop-blur-lg flex items-center justify-center z-50 p-4 md:p-0"
// //       onClick={onClose}
// //     >
// //       <div
// //         className="bg-white max-w-3xl w-full mx-4 md:mx-0 overflow-hidden rounded-xl shadow-lg shadow-black-500/20"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <div className="grid grid-cols-1 md:grid-cols-3 text-center overflow-x-auto md:overflow-x-visible">
// //           {modalData.map((column, index) => (
// //             <div
// //               key={column.title}
// //               className={`${
// //                 index < 2 ? "border-r-2 border-[#c09141]" : ""
// //               } flex flex-col items-center min-w-[280px] md:min-w-0`}
// //             >
// //               <div className="relative w-full flex justify-center items-center">
// //                 <img
// //                   src={column.image}
// //                   className="w-full opacity-90"
// //                   alt={column.title}
// //                 />
// //                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black font-bold text-3xl px-2 py-8  rounded-lg ">
// //                   {column.title}
// //                 </p>
// //               </div>

// //               {column.metrics.map((metric, metricIndex) => (
// //                 <div
// //                   key={metricIndex}
// //                   className="mt-2 flex-1 flex flex-col justify-center p-4 mb-3"
// //                 >
// //                   {metric.number && (
// //                     <div className="font-medium text-4xl text-[#cdae64] -tracking-wide leading-wide font-[Galderglynnrg]">
// //                       {metric.number}
// //                     </div>
// //                   )}
// //                   {metric.image && (
// //                     <img
// //                       src={metric.image}
// //                       className="w-5/7 h-12 mx-auto mb-2 filter brightness-125"
// //                       alt=""
// //                     />
// //                   )}
// //                   <p className="text-sm  font-[Montserratmd] text-black leading-relaxed">
// //                     {metric.description}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Default export for backward compatibility
// // export default RFModal;


// import Popup1 from "../../assets/GanDiamonds/RFpopup1.png";
// import Popup2 from "../../assets/GanDiamonds/RFpopup2.png";
// import Popup3 from "../../assets/GanDiamonds/RFpopup3.png";
// import PopUp4 from "../../assets/GanDiamonds/RFpopup4.png";
// import EVpopup1 from "../../assets/GanDiamonds/EV_popup1.png";
// import EVpopup2 from "../../assets/GanDiamonds/EV_popup2.png";
// import EVpopup3 from "../../assets/GanDiamonds/EV_popup3.png";
// import Computingpopup1 from "../../assets/GanDiamonds/Computing_popup_1.png";
// import Computingpopup2 from "../../assets/GanDiamonds/Computing_popup_2.png";
// import Computingpopup3 from "../../assets/GanDiamonds/Computing_popup_3.png";

// import "./RFModal.css";

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
// export const RFModal: React.FC<PopupProps> = ({ onClose }) => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "DEFENCE",
//       image: Popup1,
//       metrics: [
//         { number: "3X", description: "Higher power density" },
//         { number: "~80%", description: "Smaller devices" },
//         {
//           number: "10/10",
//           description: "MOHS Scale Highly Durable under Rigorous Condition",
//         },
//       ],
//     },
//     {
//       title: "5G/6G",
//       image: Popup2,
//       metrics: [
//         { number: "HIGHEST", description: "Linearity ensures signal fidelity" },
//         {
//           number: "100%",
//           description: "Lower Junction Temperature 100% v/s GaN on SiC",
//         },
//         {
//           description:
//             "Best Balance of Mobility, Power & Heat Management for 5G/6G Infrastructure",
//           isSpecial: true,
//         },
//       ],
//     },
//     {
//       title: "RADAR",
//       image: Popup3,
//       metrics: [
//         { number: "5X", description: "Thermal Conductivity than GaN on SiC" },
//         {
//           image: PopUp4,
//           description: "Frequency Capability: Ka-band and beyond",
//         },
//         { number: "80%", description: "Efficiency (Pout / PDC)" },
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
//         className="bg-white max-w-3xl w-full mx-4 md:mx-0 overflow-hidden rounded-b-xl shadow-lg shadow-gray-500/50 max-h-[85vh] md:max-h-none"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none">
//           {modalData.map((column, index) => (
//             <div
//               key={column.title}
//               className={`${
//                 index < 2 ? "border-r-2 border-[#c09141]" : ""
//               } flex flex-col items-center w-[50vw] md:w-auto snap-start md:snap-align-none`}
//             >
//               {/* ====== Image & Title Section ====== */}
//               <div className="relative w-full flex justify-center items-center">
//                 <img
//                   src={column.image}
//                   className="w-full h-100 object-cover font-[Galderglynnlt]"
//                   alt={column.title}
//                 />
//                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black  font-[Galderglynnrg] text-3xl px-2 py-10 ">
//                   {column.title}
//                 </p>
//               </div>

//               {/* ====== Metrics Section ====== */}
//               {column.metrics.map((metric, metricIndex) => (
//                 <div
//                   key={metricIndex}
//                   className="mt-2 flex-1 flex flex-col justify-center p-4 mb-3"
//                 >
//                   {/* Metric Number (Title) */}
//                   {metric.number && (
//                     <div
//                       className={`font-[Galderglynnlt] tracking-wider leading-tight 
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
//                     }}
//                   >
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: metric.description
//                           .replace(
//                             "Mobility, Power & Heat Management",
//                             `<span style="color:#cdae64; padding:0 6px; text-justify: inter-word;">Mobility, Power & Heat Management</span>`
//                           )
//                           .replace(
//                             "Frequency Capability",
//                             `<strong style=" padding:0 5px;">Frequency Capability</strong>`
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
// export const EVModal: React.FC<PopupProps> = ({ onClose }) => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "CHARGER",
//       image: EVpopup1,
//       metrics: [
//         {
//           number: "10X",
//           description: "Faster switching frequency than silicon",
//         },
//         {
//           number: "3X",
//           description: "Power Density enabling ultrafast charging",
//         },
//         {
//           number: "40-60%",
//           description: "Smaller and Lighter",
//         },
//       ],
//     },
//     {
//       title: "INVERTER",
//       image: EVpopup2,
//       metrics: [
//         { number: "HIGHEST", description: "Efficiency v/s GaN on SiC & Si" },
//         {
//           number: "50%",
//           description: "Size Reduction in Inverters",
//         },
//         {
//           description: "Improved Reliability and Durability",
//           isSpecial: true,
//         },
//       ],
//     },
//     {
//       title: "EV",
//       image: EVpopup3,
//       metrics: [
//         {
//           description: "Faster Motor Control & Better NVH (Noise, Vibration, Harshness)",
//           isSpecial: true,
//         },
//         { 
//           description: "Supports<br/>800V+<br/>Architecture",
//           hasLineBreaks: true
//         },
//         { number: "5X", description: "Thermal Conductivity than Gan on SiC" },
//       ],
//     },
//   ];

//   return (
//     <div
//       className="fixed inset-0 bg-black-100 backdrop-blur-xs flex items-center justify-center z-50 p-4 md:p-0"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white max-w-3xl w-full mx-4 md:mx-0 overflow-hidden rounded-lg shadow-lg shadow-black-500/30 max-h-[85vh] md:max-h-none"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none">
//           {modalData.map((column, index) => (
//             <div
//               key={column.title}
//               className={`${
//                 index < 2 ? "border-r-2  border-[#c09141]" : ""
//               } flex flex-col items-center w-[50vw] md:w-auto snap-start md:snap-align-none`}
//             >
//               <div className="relative w-full flex justify-center items-center">
//                 <img src={column.image} className="w-full" alt={column.title} />
//                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black font-bold text-3xl px-2 py-8  rounded-lg">
//                   {column.title}
//                 </p>
//               </div>

//               {column.metrics.map((metric, metricIndex) => (
//                 <div
//                   key={metricIndex}
//                   className="mt-2 flex-1 flex flex-col justify-center p-4 mb-3"
//                 >
//                   {metric.number && (
//                     <div className="font-semibold text-4xl text-[#cdae64] -tracking-wide leading-wide font-[Galderglynnrg]">
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
//                   <p className="text-sm px-2 font-[Montserratrg] text-black leading-relaxed">
//                     {metric.hasLineBreaks ? (
//                       <span
//                         dangerouslySetInnerHTML={{
//                           __html: metric.description
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
//                             )
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

// // Computing Popup - Same layout but different styling
// export const ComputingModal: React.FC<PopupProps> = ({ onClose }) => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "GPU",
//       image: Computingpopup1,
//       metrics: [
//         { number: "5X", description: "Thermal Conductivity than Gan on SiC" },
//         { number: "10-20X", description: "Lower Junction Heating" },
//         {
//           description: "Stable Performance Without Throttling",
//           isSpecial: true,
//         },
//       ],
//     },
//     {
//       title: "DATA SERVER",
//       image: Computingpopup2,
//       metrics: [
//         { number: "DOUBLES", description: "Components Lifetime (MTBF)" },
//         {
//           number: "50%",
//           description: "Less Cooling Requirement",
//         },
//         {
//           number: "2-4X",
//           description: "Power per unit area",
//         },
//       ],
//     },
//     {
//       title: "AI",
//       image: Computingpopup3,
//       metrics: [
//         { number: "10-15%", description: "Lower Latency" },
//         { number: "20-30%", description: "more AI Training Thoroughput" },
//         { number: "5X", description: "rack compute density (in Flops)" },
//       ],
//     },
//   ];

//   return (
//     <div
//       className="fixed inset-0 bg-black-100 backdrop-blur-lg flex items-center justify-center z-50 p-4 md:p-0"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white max-w-3xl w-full mx-4 md:mx-0 overflow-hidden rounded-xl shadow-lg shadow-black-500/20 max-h-[85vh] md:max-h-none"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none">
//           {modalData.map((column, index) => (
//             <div
//               key={column.title}
//               className={`${
//                 index < 2 ? "border-r-2 border-[#c09141]" : ""
//               } flex flex-col items-center w-[50vw] md:w-auto snap-start md:snap-align-none`}
//             >
//               <div className="relative w-full flex justify-center items-center">
//                 <img
//                   src={column.image}
//                   className="w-full opacity-90"
//                   alt={column.title}
//                 />
//                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black font-bold text-3xl px-2 py-8  rounded-lg ">
//                   {column.title}
//                 </p>
//               </div>

//               {column.metrics.map((metric, metricIndex) => (
//                 <div
//                   key={metricIndex}
//                   className="mt-2 flex-1 flex flex-col justify-center p-4 mb-3"
//                 >
//                   {metric.number && (
//                     <div className="font-medium text-4xl text-[#cdae64] -tracking-wide leading-wide font-[Galderglynnrg]">
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
//                   <p className="text-sm  font-[Montserratmd] text-black leading-relaxed">
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

// // Default export for backward compatibility
// export default RFModal;








// import Popup1 from "../../assets/GanDiamonds/RFpopup1.png";
// import Popup2 from "../../assets/GanDiamonds/RFpopup2.png";
// import Popup3 from "../../assets/GanDiamonds/RFpopup3.png";
// import PopUp4 from "../../assets/GanDiamonds/RFpopup4.png";
// import EVpopup1 from "../../assets/GanDiamonds/EV_popup1.png";
// import EVpopup2 from "../../assets/GanDiamonds/EV_popup2.png";
// import EVpopup3 from "../../assets/GanDiamonds/EV_popup3.png";
// import Computingpopup1 from "../../assets/GanDiamonds/Computing_popup_1.png";
// import Computingpopup2 from "../../assets/GanDiamonds/Computing_popup_2.png";
// import Computingpopup3 from "../../assets/GanDiamonds/Computing_popup_3.png";

// import "./RFModal.css";

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
// export const RFModal: React.FC<PopupProps> = ({ onClose }) => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "DEFENCE",
//       image: Popup1,
//       metrics: [
//         { number: "3X", description: "Higher power density" },
//         { number: "~80%", description: "Smaller devices" },
//         {
//           number: "10/10",
//           description: "MOHS Scale Highly Durable under Rigorous Condition",
//         },
//       ],
//     },
//     {
//       title: "5G/6G",
//       image: Popup2,
//       metrics: [
//         { number: "HIGHEST", description: "Linearity ensures signal fidelity" },
//         {
//           number: "100%",
//           description: "Lower Junction Temperature 100% v/s GaN on SiC",
//         },
//         {
//           description:
//             "Best Balance of Mobility, Power & Heat Management for 5G/6G Infrastructure",
//           isSpecial: true,
//         },
//       ],
//     },
//     {
//       title: "RADAR",
//       image: Popup3,
//       metrics: [
//         { number: "5X", description: "Thermal Conductivity than GaN on SiC" },
//         {
//           image: PopUp4,
//           description: "Frequency Capability: Ka-band and beyond",
//         },
//         { number: "80%", description: "Efficiency (Pout / PDC)" },
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
//         className="bg-white sm:min-w-sm  max-w-3xl w-full mx-4 md:mx-0 overflow-hidden md:rounded-b-xl  lg:rounded-b-xl shadow-lg shadow-gray-500/50 max-h-[100vh] md:max-h-none"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none">
//           {modalData.map((column, index) => (
//             <div
//               key={column.title}
//               className={`${
//                 index < 2 ? "border-r-2 border-[#c09141]" : ""
//               } flex flex-col items-center w-[65vw] md:w-auto snap-start md:snap-align-none`}
//             >
//               {/* ====== Image & Title Section ====== */}
//               <div className="relative w-full flex justify-center items-center">
//                 <img
//                   src={column.image}
//                   className="w-full object-cover font-[Galderglynnlt] md:h-auto h-32"
//                   alt={column.title}
//                 />
//                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black  font-[Galderglynnrg] text-2xl md:text-3xl px-2 py-6 md:py-10 ">
//                   {column.title}
//                 </p>
//               </div>

//               {/* ====== Metrics Section ====== */}
//               {column.metrics.map((metric, metricIndex) => (
//                 <div
//                   key={metricIndex}
//                   className="mt-2 flex-1 flex flex-col justify-center p-2 md:p-4 mb-2 md:mb-3"
//                 >
//                   {/* Metric Number (Title) */}
//                   {metric.number && (
//                     <div
//                       className={`font-[Galderglynnlt] tracking-wider leading-tight text-3xl md:text-4xl
//                         ${
//                           column.title === "DEFENCE"
//                             ? " text-[#cdae64]"
//                             : column.title === "5G/6G"
//                             ? "text-[#cdae64]"
//                             : "text-[#cdae64]"
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
//                     }}
//                   >
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: metric.description
//                           .replace(
//                             "Mobility, Power & Heat Management",
//                             `<span style="color:#cdae64; padding:0 6px; text-justify: inter-word;">Mobility, Power & Heat Management</span>`
//                           )
//                           .replace(
//                             "Frequency Capability",
//                             `<strong style=" padding:0 5px;">Frequency Capability</strong>`
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
// export const EVModal: React.FC<PopupProps> = ({ onClose }) => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "CHARGER",
//       image: EVpopup1,
//       metrics: [
//         {
//           number: "10X",
//           description: "Faster switching frequency than silicon",
//         },
//         {
//           number: "3X",
//           description: "Power Density enabling ultrafast charging",
//         },
//         {
//           number: "40-60%",
//           description: "Smaller and Lighter",
//         },
//       ],
//     },
//     {
//       title: "INVERTER",
//       image: EVpopup2,
//       metrics: [
//         { number: "HIGHEST", description: "Efficiency v/s GaN on SiC & Si" },
//         {
//           number: "50%",
//           description: "Size Reduction in Inverters",
//         },
//         {
//           description: "Improved Reliability and Durability",
//           isSpecial: true,
//         },
//       ],
//     },
//     {
//       title: "EV",
//       image: EVpopup3,
//       metrics: [
//         {
//           description: "Faster Motor Control & Better NVH (Noise, Vibration, Harshness)",
//           isSpecial: true,
//         },
//         { 
//           description: "Supports<br/>800V+<br/>Architecture",
//           hasLineBreaks: true
//         },
//         { number: "5X", description: "Thermal Conductivity than Gan on SiC" },
//       ],
//     },
//   ];

//   return (
//     <div
//       className="fixed inset-0 bg-black-100 backdrop-blur-xs flex items-center justify-center z-50 p-4 md:p-0"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white max-w-3xl w-full mx-4 md:mx-0 overflow-hidden rounded-lg shadow-lg shadow-black-500/30 max-h-[70vh] md:max-h-none"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none">
//           {modalData.map((column, index) => (
//             <div
//               key={column.title}
//               className={`${
//                 index < 2 ? "border-r-2  border-[#c09141]" : ""
//               } flex flex-col items-center w-[65vw] md:w-auto snap-start md:snap-align-none`}
//             >
//               <div className="relative w-full flex justify-center items-center">
//                 <img src={column.image} className="w-full md:h-auto h-32" alt={column.title} />
//                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black font-bold text-2xl md:text-3xl px-2 py-6 md:py-8  rounded-lg">
//                   {column.title}
//                 </p>
//               </div>

//               {column.metrics.map((metric, metricIndex) => (
//                 <div
//                   key={metricIndex}
//                   className="mt-2 flex-1 flex flex-col justify-center p-2 md:p-4 mb-2 md:mb-3"
//                 >
//                   {metric.number && (
//                     <div className="font-semibold text-4xl text-[#cdae64] -tracking-wide leading-wide font-[Galderglynnrg]">
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
//                   <p className="text-sm px-2 font-[Montserratrg] text-black leading-relaxed">
//                     {metric.hasLineBreaks ? (
//                       <span
//                         dangerouslySetInnerHTML={{
//                           __html: metric.description
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
//                             )
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

// // Computing Popup - Same layout but different styling
// export const ComputingModal: React.FC<PopupProps> = ({ onClose }) => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "GPU",
//       image: Computingpopup1,
//       metrics: [
//         { number: "5X", description: "Thermal Conductivity than Gan on SiC" },
//         { number: "10-20X", description: "Lower Junction Heating" },
//         {
//           description: "Stable Performance Without Throttling",
//           isSpecial: true,
//         },
//       ],
//     },
//     {
//       title: "DATA SERVER",
//       image: Computingpopup2,
//       metrics: [
//         { number: "DOUBLES", description: "Components Lifetime (MTBF)" },
//         {
//           number: "50%",
//           description: "Less Cooling Requirement",
//         },
//         {
//           number: "2-4X",
//           description: "Power per unit area",
//         },
//       ],
//     },
//     {
//       title: "AI",
//       image: Computingpopup3,
//       metrics: [
//         { number: "10-15%", description: "Lower Latency" },
//         { number: "20-30%", description: "more AI Training Thoroughput" },
//         { number: "5X", description: "rack compute density (in Flops)" },
//       ],
//     },
//   ];

//   return (
//     <div
//       className="fixed inset-0 bg-black-100 backdrop-blur-lg flex items-center justify-center z-50 p-4 md:p-0"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white max-w-3xl w-full mx-4 md:mx-0 overflow-hidden rounded-xl shadow-lg shadow-black-500/20 max-h-[85vh] md:max-h-none"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 text-center overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none">
//           {modalData.map((column, index) => (
//             <div
//               key={column.title}
//               className={`${
//                 index < 2 ? "border-r-2 border-[#c09141]" : ""
//               } flex flex-col items-center w-[50vw] md:w-auto snap-start md:snap-align-none`}
//             >
//               <div className="relative w-full flex justify-center items-center">
//                 <img
//                   src={column.image}
//                   className="w-full opacity-90"
//                   alt={column.title}
//                 />
//                 <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black font-bold text-3xl px-2 py-8  rounded-lg ">
//                   {column.title}
//                 </p>
//               </div>

//               {column.metrics.map((metric, metricIndex) => (
//                 <div
//                   key={metricIndex}
//                   className="mt-2 flex-1 flex flex-col justify-center p-4 mb-3"
//                 >
//                   {metric.number && (
//                     <div className="font-medium text-4xl text-[#cdae64] -tracking-wide leading-wide font-[Galderglynnrg]">
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
//                   <p className="text-sm  font-[Montserratmd] text-black leading-relaxed">
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

// // Default export for backward compatibility
// export default RFModal;