import Popup1 from "../../assets/Thermal/semi_conductors.png";
import Popup2 from "../../assets/Thermal/BATTERY.png";
import Popup3 from "../../assets/Thermal/lED’S.png";
// import PopUp4 from "../../assets/GanDiamonds/RFpopup4.png";
import EVpopup1 from "../../assets/Thermal/Laser.png";
import EVpopup2 from "../../assets/Thermal/ir&quantum.png";
import EVpopup3 from "../../assets/Thermal/Analytical.png";
import Computingpopup1 from "../../assets/Thermal/RF.png";
import Computingpopup2 from "../../assets/Thermal/AEROSPACE.png";
import Computingpopup3 from "../../assets/Thermal/SATELLITE.png";


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

// Existing RF Modal (unchanged except mobile fixes)
export const POWERELECTRONICS: React.FC<PopupProps> = ({ onClose }) => {
  const modalData: ModalColumn[] = [
    {
      title: "SEMICONDUCTORS",
      image: Popup1,
      metrics: [
        { number: "3X", description: "Higher power density" },
        { number: "10X", description: "Lower thermal resistance than Sic/Cu" },
        {
          number: "30-50°C",
          description: "Lower Junction Temperature",
        },
      ],
    },
    {
      title: "BATTERY",
      image: Popup2,
      metrics: [
        { number: "ULTRA-FAST CHARGING",   description: "", },
        {
          number: "<1 GHz",
          description: "NV/SiV Linewidth",
        },
        {
          description:
            "Less Than 2°C Deviation Across The Rack",
          isSpecial: true,
        },
      ],
    },
    {
      title: "LED’S",
      image: Popup3,
      metrics: [
        { number: "2X", description: "Operational Hours" },
        // {
        //   image: PopUp4,
        //   description: "Frequency Capability: Ka-band and beyond",
        // },
                { number: "100X", description: "Heat Dissipation Rate Than TIMs/Ceramics" },
        { number: "25-40°C LOWER", description: "Temperature Rise At Same Power Input" },
      ],
    },
  ];

  return (
    <div
      id="rfModal"
      className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 md:p-0"
      onClick={onClose}
    >
      <div
        className="bg-white w-full md:max-w-3xl md:w-full mx-auto rounded-b-xl md:rounded-b-xl shadow-lg shadow-gray-500/50 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          {modalData.map((column, index) => (
            <div
              key={column.title}
              className={`${
                index < 2
                  ? "border-b-2 md:border-b-0 md:border-r-2 border-[#c09141]"
                  : ""
              } flex flex-col items-center`}
            >
              {/* ====== Image & Title Section ====== */}
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

              {/* ====== Metrics Section ====== */}
              {column.metrics.map((metric, metricIndex) => (
                <div
                  key={metricIndex}
                  className=" flex-1 flex flex-col justify-center p-4 mb-3"
                >
                  {/* Metric Number (Title) */}
                  {metric.number && (
                    <div
                      className={`font-[Galderglynnbd] tracking-wide leading-tight 
                        ${
                          column.title === "DEFENCE"
                            ? " text-4xl text-[#cdae64]"
                            : column.title === "5G/6G"
                            ? "text-[#cdae64] text-4xl "
                            : "text-[#cdae64] text-4xl"
                        }`}
                      style={{
                        fontWeight:
                          metricIndex === 0
                            ? "normal"
                            : metricIndex === 1
                            ? "normal"
                            : "normal",
                        textShadow:
                          column.title === "RADAR"
                            ? "1px 1px 2px rgba(0,0,0,0.0)"
                            : "none",
                      }}
                    >
                      {metric.number}
                    </div>
                  )}

                  {/* Optional Metric Image */}
                  {metric.image && (
                    <img
                      src={metric.image}
                      className="w-5/7 h-12 mx-auto mb-2 metric-image"
                      alt=""
                    />
                  )}
                  <p
                    className={`text-sm font-[Montserratmd] px-2 text-semibold${
                      metric.isSpecial
                        ? " text-black-900"
                        : column.title === "DEFENCE"
                        ? "text-black-900"
                        : column.title === "5G/6G"
                        ? "text-black-900"
                        : "text-black-900 px-5"
                    }`}
                    style={{
                      lineHeight: "1.6",
                      fontSize: "0.80rem",
                      margin: metric.description.includes(
                        "Best Balance of Mobility, Power & Heat Management"
                      )
                        ? "10px 40px"
                        : "0",
                    }}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: metric.description
                          .replace(
                            "Mobility, Power & Heat Management",
                            `<span style="color:#cdae64;  text-justify: inter-word;">Mobility, Power & Heat Management</span>`
                          )
                          .replace(
                            "Frequency Capability",
                            `<strong style=" padding:0 10px;">Frequency Capability</strong>`
                          ),
                      }}
                    />
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// EV Systems Popup - Same layout but different styling
export const PHOTONICS: React.FC<PopupProps> = ({ onClose }) => {
  const modalData: ModalColumn[] = [
    {
      title: "LASER",
      image: EVpopup1,
      metrics: [
        {
          number: "UNMATCHED",
          description: "Operation Temp Stability",
        },
        {
          number: "3X",
          description: "Laser Damage Threshold vs Znse or fused silica",
        },
        {
          number: "LOWER",
          description: "Absorption in Optical Materials",
        },
      ],
    },
    {
      title: "IR & QUANTUM",
      image: EVpopup2,
      metrics: [
        { number: "BROADEST", description: "Optical window in any solid" },
        {
          number: "<1 GHz",
          description: "NV/SiV Linewidth",
        },
        // {
        //   description: "Improved Reliability and Durability",
        //   isSpecial: true,
        // },
         {
          number: ">90% @ 8-12 µM",
          description: "improved Reliability",
        },
      ],
    },
    {
      title: "ANALYTICAL",
      image: EVpopup3,
      metrics: [
        {
          description:
            "HIGH STABILITY",
          isSpecial: true,
        },
        {
          description: "LONG COHERENCE MAINTENACE",
          hasLineBreaks: true,
        },
        { number: ">98%", description: "RELIABILITY" },
      ],
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-0 md:p-0"
      onClick={onClose}
    >
      <div
        className="bg-white w-full md:max-w-3xl md:w-full mx-auto rounded-b-xl md:rounded-b-xl shadow-lg shadow-gray-500/50 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          {modalData.map((column, index) => (
            <div
              key={column.title}
              className={`${
                index < 2
                  ? "border-b-2 md:border-b-0 md:border-r-2  border-[#c09141]"
                  : ""
              } flex flex-col items-center`}
            >
              <div className="relative w-full flex justify-center items-center">
                <img src={column.image} className="w-full" alt={column.title} />
                <p className="absolute top-2 left-1/2 -translate-x-1/2 text-black tracking-wide font-[Galderglynnbd] text-3xl px-2 py-8  rounded-lg">
                  {column.title}
                </p>
              </div>

              {column.metrics.map((metric, metricIndex) => (
                <div
                  key={metricIndex}
                  className=" flex-1 flex flex-col justify-center p-4 mb-3"
                >
                  {metric.number && (
                    <div className=" text-4xl text-[#cdae64] tracking-widest leading-wide font-[Galderglynnbd]">
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

                  <p
                    className="text-sm px-2 font-[Montserratrg] text-black leading-relaxed"
                    style={{
                      margin:
                        metric.description.includes("Faster Motor Control") ||
                        metric.description.includes("Improved Reliability")
                          ? "10px 12px"
                          : "0",
                    }}
                  >
                    {metric.hasLineBreaks ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: metric.description.replace(
                            "800V+",
                            `<span class="text-4xl text-[#cdae64] tracking-widest font-[Galderglynnbd]">800V+</span>`
                          ),
                        }}
                      />
                    ) : metric.description.includes("Faster Motor Control") ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: metric.description
                            .replace(
                              "Faster Motor Control",
                              `<strong style="color:#cdae64;">Faster Motor Control</strong>`
                            )
                            .replace(
                              "NVH",
                              `<strong style="color:#cdae64;">NVH</strong>`
                            ),
                        }}
                      />
                    ) : metric.description.includes("Reliability") ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: metric.description
                            .replace(
                              "Reliability",
                              `<strong style="color:#cdae64;">Reliability</strong>`
                            )
                            .replace(
                              "and",
                              `<strong style="color:#cdae64;">and</strong>`
                            )
                            .replace(
                              "Durability",
                              `<strong style="color:#cdae64;">Durability</strong>`
                            ),
                        }}
                      />
                    ) : (
                      metric.description
                    )}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export const AEROSPACE: React.FC<PopupProps> = ({ onClose }) => {
  const modalData: ModalColumn[] = [
    {
      title: "RF",
      image: Computingpopup1,
      metrics: [
        { number: "5X", description: "Thermal Conductivity than Gan on SiC" },
        { number: "15-20X", description: "Lower Junction Heating" },
        {
          description: "Stable Performance Without Throttling",
          isSpecial: true,
        },
      ],
    },
    {
      title: "AEROSPACE",
      image: Computingpopup2,
      metrics: [
        { number: "500°C", description: "Thermal Shock Resistance" },
        {
          number: "~1.1PPM/K",
          description: "improved Reliability",
        },
        {
          number: "3X",
          description: "Weight Reduction v/s Copper",
        },
      ],
    },
    {
      title: "AI",
      image: Computingpopup3,
      metrics: [
        { number: "5X", description: "No degradation" },
        // { number: "20-30%", description: "more AI Training Thoroughput" },
         {
          description: "HIGHLY INERT",
          isSpecial: true,
        },
        { number: "-250°C TO +500°C", description: "operational Thermal Range" },
      ],
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 md:p-0"
      onClick={onClose}
    >
      <div
        className="bg-white w-full md:max-w-3xl md:w-full mx-auto rounded-b-xl md:rounded-b-xl shadow-lg shadow-gray-500/50 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          {modalData.map((column, index) => (
            <div
              key={column.title}
              className={`${
                index < 2
                  ? "border-b-2 md:border-b-0 md:border-r-2 border-[#c09141]"
                  : ""
              } flex flex-col items-center`}
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
                  <p className="text-sm  font-[Montserratrgg] text-black leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default POWERELECTRONICS;
