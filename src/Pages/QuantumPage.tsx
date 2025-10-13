// import Rquestbutton from "./Common/Rquestbutton";
// import Ev from "../assets/EV.jpg";
// import RF from "../assets/RF.png";
// import Computing from "../assets/Computing.jpg";
// import Quantum1 from "../assets/Quantum.png";
// interface QuantumPropertyProps {
//   children: React.ReactNode;
//   className?: string;
// }

// const QuantumProperty: React.FC<QuantumPropertyProps> = ({
//   children,
//   className = "",
// }) => {
//   return (
//     <p className={`pt-7 text-black flex-1 pl-6 ${className}`}>{children}</p>
//   );
// };
// const Quantum: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative flex items-center justify-center pt-16 md:pt-10 lg:pt-0">
//         <img
//           src={Quantum1}
//           alt="Quantum Technology"
//           className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
//         />
//       </section>

//       {/* Description Section */}
//       <section className="px-4 py-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 sm:py-4 md:py-6">
//         <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed lg:tracking-[2.5px] md:tracking-[1.5px] tracking-[0.70px] font-[Montserratrg]  md:text-left text-justify">
//           Diamonds with engineered defects play a revolutionary role in quantum
//           technologies. QQG’s unique ability to host quantum-grade colour
//           centers like NV (Nitrogen-Vacancy) enables powerful applications. At
//           the core is diamond’s stable carbon lattice, which provides an
//           exceptionally noise-free environment for maintaining quantum coherence
//           at room temperature, something most quantum systems cannot do.
//         </p>
//       </section>

//       <section className="py-8 bg-white">
//         <div className="px-4 pb-10 mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-amber-800">
//           <h2 className="text-[#333333] font-[Galderglynnlt] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal tracking-wider lg:text-left md:text-center text-center mb-6 md:mb-8 ml-1 md:ml-2">
//             PROPERTIES
//           </h2>

//           <div className="flex flex-col gap-6 lg:flex-row sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
//             {/* Left Box */}
//             <div className="w-full lg:w-1/2">
//               <div className="border-2 border-[#c5a867] bg-white py-6 sm:py-8 md:py-10 lg:py-8 flex flex-col items-center justify-center min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[480px] 2xl:min-h-[530px]">
//                 {/* 100X Text */}
//                 <div className="mb-6 text-center sm:mb-8 md:mb-10 lg:mb-12">
//                   <h1 className="text-[100px] sm:text-[120px] md:text-[140px] lg:text-[160px] xl:text-[200px] 2xl:text-[220px] text-[#c5a867] leading-none tracking-tight">
//                     100X
//                   </h1>
//                 </div>

//                 {/* Title */}
//                 <div className="space-y-1 text-center sm:space-y-2">
//                   <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-normal tracking-wide font-[Montserratmd] leading-snug text-black">
//                     Magnetic Sensitivity
//                   </h2>
//                   <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-normal tracking-wide font-[Montserratmd] leading-snug text-black">
//                     V/S
//                   </h2>
//                   <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-normal tracking-wide font-[Montserratmd] leading-snug text-black">
//                     Silicon Spin Qubits
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             {/* Right Box - 2x2 grid */}
//             <div className="w-full lg:w-1/2 bg-amber-400">
//               <div className="text-black ">
//                 {/* First Row */}
//                 <div className="grid grid-cols-2">
//                   <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border-r border-b border-[#c5a867] flex flex-col justify-center">
//                     <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl font-semibold font-[Montserratmd] text-[#c5a867] leading-snug mb-2 sm:mb-3">
//                       Excellent
//                       <br />
//                       Integration
//                     </span>
//                     <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-normal font-[Montserratmd] text-black">
//                       with Photonics System
//                     </span>
//                   </div>

//                   <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border-b border-[#c5a867] flex flex-col justify-center min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[225px] xl:min-h-[250px] 2xl:min-h-[290px]">
//                     <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-normal font-[Montserratmd] text-black mb-2">
//                       Operates At
//                     </span>
//                     <span className="block text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold font-[Montserratmd] text-[#c5a867] leading-snug">
//                       Room
//                       <br />
//                       Temperature
//                     </span>
//                   </div>
//                 </div>

//                 {/* Second Row */}
//                 <div className="grid grid-cols-2">
//                   <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border-r border-[#c5a867] flex flex-col justify-center min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[225px] xl:min-h-[250px] 2xl:min-h-[290px]">
//                     <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold font-[Montserratmd] text-[#c5a867] mb-2">
//                       2ms
//                     </span>
//                     <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-normal font-[Montserratmd] text-black">
//                       Spin Coherence
//                       <br />
//                       Time (T<sub>2</sub>)
//                     </span>
//                   </div>

//                   <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col justify-center min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[225px] xl:min-h-[250px] 2xl:min-h-[290px]">
//                     <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-normal font-[Montserratmd] text-black mb-2">
//                       Unmatched
//                     </span>
//                     <span className="block text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold font-[Montserratmd] text-[#c5a867] leading-snug">
//                       Quantum
//                       <br />
//                       Efficiency
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-t-2 border-[#C8AB6E]">
//           {/* Left Side - Title */}
//           <div className="lg:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-6 lg:p-12 border-b-2 lg:border-b-0 border-[#C8AB6E]">
//             <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[Galderglynnlt] leading-snug tracking-wider text-center font-normal">
//               APPLICATIONS OF
//               <br />
//               GaN ON DIAMONDS
//             </h2>
//           </div>

//           {/* Right Side - 3 Application Cards */}
//           <div className="grid grid-cols-1 lg:col-span-6 md:grid-cols-3">
//             {/* RF Systems */}
//             <div className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-l-2 md:border-r-2  border-[#C8AB6E]">
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
//                   RF
//                 </h3>
//                 <div className="w-full overflow-hidden md:h-40 lg:h-44 xl:h-55">
//                   <img
//                     src={RF}
//                     alt="RF Systems"
//                     className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* EV Systems */}
//             <div className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]">
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
//                   EV
//                 </h3>
//                 <div className="w-full overflow-hidden md:h-40 lg:h-44 xl:h-55">
//                   <img
//                     src={Ev}
//                     alt="EV Systems"
//                     className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Computing */}
//             <div className="relative overflow-hidden group cursor-pointer md:border-b-0  border-[#C8AB6E]">
//               <div className="p-1">
//                 <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center mb-3 sm:mb-4 font-[Galderglynnlt]">
//                   COMPUTING
//                 </h3>
//                 <div className="w-full overflow-hidden md:h-40 lg:h-44 xl:h-55">
//                   <img
//                     src={Computing}
//                     alt="Computing"
//                     className="object-fill w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Rquestbutton />

//       {/* Popups */}
//     </div>
//   );
// };

// export default Quantum;


import Rquestbutton from "./Common/Rquestbutton";

import Quantum1 from "../assets/Quantum.png";
import Comput from "../assets/COMPUTING.png";
import sensing from "../assets/SENSING.png";
import Communication from "../assets/COMMUNICATION.png";

const Quantum: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-16 md:pt-10 lg:pt-0">
        <img
          src={Quantum1}
          alt="Quantum Technology"
          className="w-full h-auto max-h-[70vh] md:max-h-none object-cover opacity-100"
        />
      </section>

      {/* Description Section */}
      <section className="px-4 py-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 sm:py-4 md:py-6">
        <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed lg:tracking-[2.5px] md:tracking-[1.5px] tracking-[0.70px] font-[Montserratrg] md:text-left text-justify">
          Diamonds with engineered defects play a revolutionary role in quantum
          technologies. QQG's unique ability to host quantum-grade colour
          centers like NV (Nitrogen-Vacancy) enables powerful applications. At
          the core is diamond's stable carbon lattice, which provides an
          exceptionally noise-free environment for maintaining quantum coherence
          at room temperature, something most quantum systems cannot do.
        </p>
      </section>

      {/* Properties Section - Exact Figma Match */}
      <section className="py-8 bg-white sm:px-2">
        <div className="px-4 mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-14">
          <div className="flex items-start">
            <h2 className="text-black font-[Galderglynnlt] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal tracking-wider text-center mb-8 md:mb-12">
              PROPERTIES
            </h2>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
            {/* Left Box - Magnetic Sensitivity with Border */}
            <div className="w-full lg:w-1/2">
              <div className="border border-[#c5a867] bg-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center min-h-[400px]">
                {/* 100X Text */}
                <div className="mb-4 text-center sm:mb-6">
                  <h1 className="text-[70px] sm:text-[140px] md:text-[160px] lg:text-[180px] xl:text-[200px] font-galderglynn text-[#c5a867] leading-none tracking-wider">
                    100X
                  </h1>
                </div>

                {/* Title */}
                <div className="space-y-1 text-center">
                  <h2 className="text-[16px] sm:text-2xl md:text-3xl font-normal tracking-wide font-[Montserratmd] leading-snug text-black">
                    Magnetic Sensitivity
                  </h2>
                  <h2 className="text-[16px] sm:text-2xl md:text-3xl font-normal tracking-wide font-[Montserratmd] leading-snug text-black">
                    V/S
                  </h2>
                  <h2 className="text-[16px] sm:text-2xl md:text-3xl font-normal tracking-wide font-[Montserratmd] leading-snug text-black">
                    Silicon Spin Qubits
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Box - 2x2 grid with full height vertical line */}
            <div className="relative w-full lg:w-1/2">
              {/* Grid without outer border */}
              <div className="relative h-full text-black">
                {/* Vertical line that spans full height of grid */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#c5a867] transform -translate-x-1/2 z-10"></div>

                {/* First Row */}
                <div className="grid grid-cols-2 border-b border-[#c5a867]">
                  {/* Excellent Integration */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[180px] bg-white">
                    <h3 className="text-2xl sm:text-3xl md:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] leading-tight mb-2 lg:mr-4">
                      Excellent
                      <br />
                      Integration
                    </h3>
                    <p className="text-base sm:text-lg md:text-2xl font-normal font-[Montserratmd] text-black">
                      with Photonics System
                    </p>
                  </div>

                  {/* Room Temperature */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[180px] bg-white">
                    <p className="text-base sm:text-lg font-normal md:text-2xl font-[Montserratmd] text-black mb-2">
                      Operates At
                    </p>
                    <h3 className="text-2xl sm:text-3xl  md:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] leading-tight">
                      Room
                      <br />
                      Temperature
                    </h3>
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-2">
                  {/* 2ms Spin Coherence */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[180px] bg-white">
                    <h3 className="text-2xl sm:text-3xl  md:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] mb-2">
                      2ms
                    </h3>
                    <p className="text-base sm:text-lg font-normal md:text-2xl font-[Montserratmd] text-black">
                      Spin Coherence
                      <br />
                      Time (T<sub>2</sub>)
                    </p>
                  </div>

                  {/* Quantum Efficiency */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[180px] bg-white">
                    <p className="text-base sm:text-lg font-normal md:text-2xl font-[Montserratmd] text-black mb-2">
                      Unmatched
                    </p>
                    <h3 className="text-2xl sm:text-3xl  md:text-[33px] font-semibold font-[Montserratmd] text-[#c5a867] leading-tight">
                      Quantum
                      <br />
                      Efficiency
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section - Fixed */}
      <section className=" border-[#C8AB6E]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-t-1 border-[#C8AB6E]">
          {/* Left Side - Title */}
          <div className="lg:col-span-6 bg-white flex items-center justify-center p-6 sm:p-8 md:p-6 lg:p-12 border-b-2 lg:border-b-0 border-[#C8AB6E]">
            <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[Galderglynnlt] leading-snug tracking-wider text-center font-normal">
              APPLICATIONS IN THE QUANTUM FIELD
            </h2>
          </div>

          {/* Right Side - 3 Application Cards */}
          <div className="grid grid-cols-1 lg:col-span-6 md:grid-cols-3">
            {/* Computing */}
            <div className="relative overflow-hidden group cursor-pointer border-b-3 md:border-b-0 md:border-l-2 md:border-r-2 border-[#C8AB6E]">
              <div className="flex flex-col h-full p-1">
                <div className="flex items-center justify-center">
                  <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center   font-[Galderglynnlt]">
                    Computing
                  </h3>
                </div>

                <div className="w-full h-full overflow-hidden flex-1 min-h-[150px]">
                  <img
                    src={Comput}
                    alt="computing"
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Sensing */}
            <div className="relative overflow-hidden group cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-[#C8AB6E]">
              <div className="flex flex-col h-full p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center   font-[Galderglynnlt]">
                  SENSING
                </h3>
                <div className="w-full h-full overflow-hidden flex-1 min-h-[150px]">
                  <img
                    src={sensing}
                    alt="sensing"
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Communication */}
            <div className="relative overflow-hidden group cursor-pointer md:border-b-0 border-[#C8AB6E]">
              <div className="flex flex-col h-full p-1">
                <h3 className="text-black text-sm lg:text-lg font-semibold tracking-wide text-center  font-[Galderglynnlt]">
                  COMMUNICATION
                </h3>
                <div className="w-full h-full overflow-hidden flex-1 min-h-[150px]">
                  <img
                    src={Communication}
                    alt="Communication"
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
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

export default Quantum;