// // import React from 'react';
// // import Header from './Pages/shared/Header';
// // import { Contact } from 'lucide-react';
// // import Hero from './Pages/Hero';
// // import ResearchThemes from './Pages/ResearchThemes';
// // import Footer from './Pages/shared/Footer';
// // import EventsSection from './Pages/ResearchThemes';

// // const App: React.FC = () => {
// //   return (
// // <div className="font-sans antialiased">
// //       <style>{`
// //         @keyframes marquee {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-33.333%); }
// //         }
// //         .animate-marquee {
// //           animation: marquee 30s linear infinite;
// //         }
// //         @keyframes spin-slow {
// //           from { transform: rotate(0deg); }
// //           to { transform: rotate(360deg); }
// //         }
// //         .animate-spin-slow {
// //           animation: spin-slow 3s linear infinite;
// //         }
// //       `}</style>
// //       <Header />
// //       <Hero />
// //       <EventsSection/>
// //        <Footer />
// //       {/* <Hero />
// //       <ResearchThemes />
// //       <About />
// //       <Contact />
// //       <Footer /> */}
// //     </div>
// //   );
// // };

// // export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./Pages/Header.tsx";
// import Hero from "./Pages/Hero.tsx";
// import Footer from "./Pages/Footer.tsx";
// import About from "./Pages/About.tsx";
// import Contact from "./Pages/Contact.tsx";
// import Division from "./Pages/Division.tsx";
// import "./App.css";
// import OpticsPage from "./Pages/OpticsPage.tsx";
// import QuantumPage from "./Pages/QuantumPage.tsx";
// import Thermal from "./Pages/Thermal.tsx";
// import GanOnDiamond from "./Pages/GanOnDiamond.tsx";
// const App: React.FC = () => {
//   return (
//     <div className="font-sans antialiased">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/optics" element={<OpticsPage />} />
//         <Route path="/Quantum" element={<QuantumPage />} />
//         <Route path="/Thermal" element={<Thermal />} />
//         <Route path="/about" element={<About />} />
//          <Route path="/GanOnDiamond" element={<GanOnDiamond />} />

//         <Route path="/division" element={<Division />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };


// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header.tsx";
import Hero from "./Pages/Hero.tsx";
import Footer from "./Pages/Footer.tsx";
import About from "./Pages/About.tsx";
import Contact from "./Pages/Contact.tsx";
import Division from "./Pages/Division.tsx";
import "./App.css";
import OpticsPage from "./Pages/OpticsPage.tsx";
import QuantumPage from "./Pages/QuantumPage.tsx";
import Thermal from "./Pages/Thermal.tsx";
import GanOnDiamond from "./Pages/GanOnDiamond.tsx";
import CustomCursor from './Pages/Common/CustomCursor.tsx';
import CustomScrollBar from './Pages/Common/CustomScrollBar.tsx';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <CustomCursor />  {/* Add it here */}
      <CustomScrollBar/>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/optics" element={<OpticsPage />} />
        <Route path="/Quantum" element={<QuantumPage />} />
        <Route path="/Thermal" element={<Thermal />} />
        <Route path="/about" element={<About />} />
        <Route path="/GanOnDiamond" element={<GanOnDiamond />} />
        <Route path="/division" element={<Division />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
