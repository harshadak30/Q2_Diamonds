// import AnimatedButton from "./AnimatedButton";

// const Rquestbutton = () => {
//   return (
//     <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
//         {/* Text Section */}
//         <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-wide sm:tracking-wider text-center md:text-left w-full md:w-auto">
//           REACH US TODAY
//         </h3>
        
//         {/* Button Section */}
//         <div className="w-full md:w-auto flex justify-center md:justify-end">
//           <AnimatedButton
//             variant="gradient"
//             onClick={() => (window.location.href = "/contact")}
//             className=" sm:tracking-wider text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-5 tracking-wider sm:py-4 md:py-4 font-medium w-full sm:w-auto text-center"
//           >
//             REQUEST A CALLBACK
//           </AnimatedButton>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Rquestbutton;



import AnimatedButton from "./AnimatedButton";

const Rquestbutton = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Text Section */}
        <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-semibold tracking-wide sm:tracking-wider text-center md:text-left w-full md:w-auto font-[Montserratmd]">
          REACH US TODAY
        </h3>
        
        {/* Button Section */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <AnimatedButton
            variant="gradient"
            onClick={() => (window.location.href = "/contact")}
            className=" sm:tracking-wider text-base sm:text-sm md:text-base px-8 sm:px-8 md:px-14 lg:px-26 py-3 tracking-wider sm:py-2 md:py-4 font-medium w-full sm:w-auto text-center"
          >
            REQUEST A CALLBACK
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Rquestbutton;
