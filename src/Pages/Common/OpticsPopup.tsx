// import Popup1 from "../../assets/Optics/High Power laser system 1.jpg";
// import Popup2 from "../../assets/Optics/High Power laser system 2.jpg";
// import Popup3 from "../../assets/Optics/High Power laser system 3.jpg";
// import EVpopup1 from "../../assets/Optics/Quantum optics 1.jpg";
// import EVpopup2 from "../../assets/Optics/Quantum optics 2.jpg";
// import EVpopup3 from "../../assets/Optics/Quantum optics 3.jpg";
// import Computingpopup1 from "../../assets/Optics/Aerospace1.jpg";
// import Computingpopup2 from "../../assets/Optics/Aerospace2.jpg";
// import Computingpopup3 from "../../assets/Optics/Aerospace3.jpg";
// import popup_text from "../../assets/Optics/popup_text_1.png";

// import { useEffect } from "react";

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

// const useDisableBodyScroll = (isOpen: boolean) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("popup-open");
//       document.documentElement.classList.add("modal-open-body");
//     } else {
//       document.body.classList.remove("popup-open");
//       document.documentElement.classList.remove("modal-open-body");
//     }

//     return () => {
//       document.body.classList.remove("popup-open");
//       document.documentElement.classList.remove("modal-open-body");
//     };
//   }, [isOpen]);
// };

// // Base Modal Component - NO internal scrolling, uses window scroll
// const BaseModal: React.FC<{
//   onClose: () => void;
//   children: React.ReactNode;
// }> = ({ onClose, children }) => {
//   useDisableBodyScroll(true);

//   // Close on escape key
//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     document.addEventListener("keydown", handleEscape);
//     return () => document.removeEventListener("keydown", handleEscape);
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-start justify-center z-50 p-4 md:p-8 overflow-y-auto"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white w-full max-w-[78vw] sm:max-w-[50vw] md:max-w-3xl  shadow-lg shadow-gray-500/50 my-8 md:my-20 mx-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

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
//         { number: "CHEMICAL INERTNESS", description: "" },
//         { number: "2.4 @ 10µM", description: "Refractive index" },
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
//         { number: "BROADBAND TRANSPARENCY", description: "" },
//         { number: "NO BIREFRINGENCE", description: "" },

//         { number: "1.1PPM/K", description: "Thermal Expansion" },
//       ],
//     },
//   ];

//   return (
//     <BaseModal onClose={onClose}>
//       <div className="grid grid-cols-1 md:grid-cols-3 text-center">
//         {modalData.map((column, index) => (
//           <div
//             key={column.title}
//             className={`${
//               index < 2
//                 ? "border-b-2 md:border-b-0 md:border-r-2 border-[#c09141]"
//                 : ""
//             } flex flex-col items-center min-h-[500px]`}
//           >
//             <div className="relative w-full flex justify-center items-center">
//               <img
//                 src={column.image}
//                 className="w-full h-90 object-fill font-[AkuKamu]"
//                 alt={column.title}
//               />
//               <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[AkuKamu] text-3xl px-2 py-10 ">
//                 {column.title}
//               </p>
//             </div>

//             {column.metrics.map((metric, metricIndex) => (
//               <div
//                 key={metricIndex}
//                 className="flex-1 flex flex-col justify-center p-4 mb-3"
//               >
//                 {metric.number && (
//                   <div className="font-[AkuKamu] text-3xl text-[#cdae64] tracking-widest leading-tight">
//                     {metric.number}
//                   </div>
//                 )}

//                 {metric.image && (
//                   <img
//                     src={metric.image}
//                     className="w-5/7 h-12 mx-auto mb-2 metric-image"
//                     alt=""
//                   />
//                 )}
//                 <p
//                   className={`text-sm font-[Montserratmd] px-2 text-semibold ${
//                     metric.isSpecial ? "text-black-900" : "text-black-900"
//                   }`}
//                   style={{
//                     lineHeight: "1.6",
//                     fontSize: "0.80rem",
//                   }}
//                 >
//                   {metric.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </BaseModal>
//   );
// };

// export const QUANTUMOPTICS: React.FC<PopupProps> = ({ onClose }) => {
//   const modalData: ModalColumn[] = [
//     {
//       title: "EMITTERS",
//       image: EVpopup1,
//       metrics: [
//         // {
//         //   number: "Coherence",
//         //   description: "at Room Temp",
//         // },
//         {
//           number: "Coherence",
//           description: "at Room Temp",
//           isSpecial: true,
//         },
//         {
//           number: "5.5 EV",
//           description: "Wide bandgap",
//         },
//         {
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
//           number: "RADIATION DURABILITY",
//           description: "",
//         },
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
//       title: "CRYOGENIC INSTRUMENTS",
//       image: EVpopup3,
//       metrics: [
//         {
//           image: popup_text,
//           description: "Thermal Conductivity than Gan on Sic",
//         },
//         {
//           number: "1.1PPM/K",
//           description: "CTE",
//         },
//         {
//           number: "4K TO 1000°C",
//           description: "Operating",
//         },
//       ],
//     },
//   ];

//   return (
//     <BaseModal onClose={onClose}>
//       <div className="grid grid-cols-1 md:grid-cols-3 text-center">
//         {modalData.map((column, index) => (
//           <div
//             key={column.title}
//             className={`${
//               index < 2
//                 ? "border-b-2 md:border-b-0 md:border-r-2 border-[#c09141]"
//                 : ""
//             } flex flex-col items-center min-h-[500px]`}
//           >
//             <div className="relative w-full flex justify-center items-center">
//               <img src={column.image} className="w-full" alt={column.title} />
//               <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[AkuKamu] text-3xl px-2 py-8 rounded-lg">
//                 {column.title}
//               </p>
//             </div>

//             {column.metrics.map((metric, metricIndex) => (
//               <div
//                 key={metricIndex}
//                 className="flex-1 flex flex-col justify-center p-4 mb-3"
//               >
//                 {metric.number && (
//                   <div
//                     className="text-3xl text-[#cdae64] tracking-widest leading-wide font-[AkuKamu]"
//                     style={{
//                       fontStyle:
//                         metric.number === "Coherence" ? "italic" : "normal",
//                         fontWeight:
//                           metric.number === "Coherence"
//                             ? "semibold"
//                             : metricIndex === 0
//                             ? "bold"
//                             : metricIndex === 1
//                             ? "normal"
//                             : "normal",
//                       fontFamily:
//                         metric.number === "Coherence"
//                           ? "Montserratrg"
//                           : "AkuKamu",
//                     }}
//                   >
//                     {metric.number}
//                   </div>
//                 )}
//                 {/* {metric.number && (
//                   <div className="text-3xl text-[#cdae64] tracking-widest leading-wide font-[AkuKamu]">
//                     {metric.number}
//                   </div>
//                 )} */}
//                 {metric.image && (
//                   <img
//                     src={metric.image}
//                     className="w-6/7 h-14 mx-auto mb-2"
//                     alt=""
//                   />
//                 )}

//                 <p className="text-sm px-2 font-[Montserratrg] text-black leading-relaxed">
//                   {metric.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </BaseModal>
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
//         {
//           description: "Survives March 5 Erosion",
//           isSpecial: true,
//         },
//       ],
//     },
//     {
//       title: "AEROSPACE",
//       image: Computingpopup2,
//       metrics: [
//         {
//           description: "RADIATION DURABILITY",
//           isSpecial: true,
//         },
//         {
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
//         {
//           description: "NO OPTICAL DEGRADATION",
//           isSpecial: true,
//         },
//         { number: "<0.1%", description: "Thermal Distortion" },
//       ],
//     },
//   ];

//   return (
//     <BaseModal onClose={onClose}>
//       <div className="grid grid-cols-1 md:grid-cols-3 text-center">
//         {modalData.map((column, index) => (
//           <div
//             key={column.title}
//             className={`${
//               index < 2
//                 ? "border-b-2 md:border-b-0 md:border-r-2 border-[#c09141]"
//                 : ""
//             } flex flex-col items-center min-h-[500px]`}
//           >
//             <div className="relative w-full flex justify-center items-center">
//               <img
//                 src={column.image}
//                 className="w-full h-90 object-fill font-[AkuKamu]"
//                 alt={column.title}
//               />
//               <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[AkuKamu] text-3xl px-2 py-10">
//                 {column.title}
//               </p>
//             </div>

//             {column.metrics.map((metric, metricIndex) => (
//               <div
//                 key={metricIndex}
//                 className="mt-2 flex-1 flex flex-col justify-center p-4 mb-3"
//                 style={{
//     margin: metric.description === "High purity for single-photon detection" ? '0 50px' : '0',
//   }}
//               >
//                 {metric.number && (
//                   <div className="font-medium text-4xl text-[#cdae64] tracking-normal leading-tight font-[AkuKamu]">
//                     {metric.number}
//                   </div>
//                 )}
//                 {metric.image && (
//                   <img
//                     src={metric.image}
//                     className="w-5/7 h-12 mx-auto mb-2 filter brightness-125"
//                     alt=""
//                   />
//                 )}
//                 <p className="text-sm font-[Montserratrgg] text-black leading-relaxed">
//                   {metric.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </BaseModal>
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
  number?: React.ReactNode;
  description: React.ReactNode;
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
      document.body.classList.add("popup-open");
      document.documentElement.classList.add("modal-open-body");
    } else {
      document.body.classList.remove("popup-open");
      document.documentElement.classList.remove("modal-open-body");
    }

    return () => {
      document.body.classList.remove("popup-open");
      document.documentElement.classList.remove("modal-open-body");
    };
  }, [isOpen]);
};

// Base Modal Component - NO internal scrolling, uses window scroll
const BaseModal: React.FC<{
  onClose: () => void;
  children: React.ReactNode;
}> = ({ onClose, children }) => {
  useDisableBodyScroll(true);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-start justify-center z-50 p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[85vw] md:max-w-3xl  shadow-lg shadow-gray-500/50 my-8 md:my-16 mx-auto"
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
          number: "CHEMICAL INERTNESS",
          isSpecial: true,
          description: "",
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
          number: "BROADBAND TRANSPARENCY",
          isSpecial: true,
          description: "",
        },
        {
          number: "NO BIREFRINGENCE",
          isSpecial: true,
          description: "",
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
                className="w-full h-90 object-fill font-[AkuKamu]"
                alt={column.title}
              />
              <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[AkuKamu] text-3xl px-2 py-10 ">
                {column.title}
              </p>
            </div>

            {column.metrics.map((metric, metricIndex) => (
              <div
                key={metricIndex}
                className="flex-1 flex flex-col justify-center p-4 mb-8"
              >
                {metric.number && (
                  <div className="font-[AkuKamu] text-3xl text-[#cdae64] tracking-wide leading-tight">
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
          number: "RADIATION DURABILITY",
          isSpecial: true,
          description: "",
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
          number: (
            <>
              &lt;
              <span className="inline-flex flex-col leading-none font-bold align-middle mx-0.5">
                <span className="text-[30px]">+</span>
                <span className="text-[30px] -mt-3">-</span>
              </span>
              0.5 µM
            </>
          ),
          description: "Thermal Conductivity than Gan on Sic",
        },
        {
          number: "1.1PPM/K",
          description: "CTE",
        },
        {
          number: "4K TO 1000°C",
          description: "Operating",
        },
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
              <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[AkuKamu] text-3xl px-2 py-8 rounded-lg">
                {column.title}
              </p>
            </div>

            {column.metrics.map((metric, metricIndex) => (
              <div
                key={metricIndex}
                className="flex-1 flex flex-col justify-center p-5 mb-4 "
              >
                {metric.number && (
                  <div
                    className={`text-[#cdae64] tracking-wide leading-wide  ${
                      typeof metric.number === "string"
                        ? metric.number.toLowerCase() === "coherence"
                          ? "normal-case text-[35px] font-semibold italic"
                          : metric.number.includes("λ")
                          ? " text-3xl font-bold"
                          : "font-[AkuKamu] text-3xl"
                        : "font-[AkuKamu] text-3xl"
                    }`}
                  >
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

                <p className="text-[13px] px-5 py-1 font-[Montserratrg] text-gray-800 font-semibold leading-relaxed">
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
          description: (
            <>
              Survives <br></br>
              <span className="text-[#cdae64]">March 5 Erosion</span>
            </>
          ),
          isSpecial: true,
        },
      ],
    },
    {
      title: "AEROSPACE",
      image: Computingpopup2,
      metrics: [
        {
          number: "RADIATION DURABILITY",
          isSpecial: true,
          description: "",
        },
        {
          number: "NO OUTGASSING IN VACUUM",
          isSpecial: true,
          description: "",
        },
        {
          number: (
            <>
              &gt;10<sup>6</sup> RADS
            </>
          ),
          description: "Radiation Resistance",
        },
      ],
    },
    {
      title: "SATELLITE",
      image: Computingpopup3,
      metrics: [
        {
          number: (
            <>
              &gt;10<sup>6</sup> RADS
            </>
          ),
          description: "Stable Transmission",
        },
        {
          number: "NO OPTICAL DEGRADATION",
          isSpecial: true,
          description: "",
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
                className="w-full h-90 object-fill font-[AkuKamu]"
                alt={column.title}
              />
              <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[AkuKamu] text-3xl px-2 py-10">
                {column.title}
              </p>
            </div>

            {column.metrics.map((metric, metricIndex) => (
              <div
                key={metricIndex}
                className="mt-2 flex-1 flex flex-col justify-center p-4 mb-8"
              >
                {metric.number && (
                  <div className="font-medium text-3xl text-[#cdae64] tracking-wider leading-tight font-[AkuKamu]">
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
                <p className="text-[13px] font-[Montserratrgg] text-gray-800 leading-relaxed font-semibold ">
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
