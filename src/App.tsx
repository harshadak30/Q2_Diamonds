


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
import ScrollToTopButton from "./Pages/Common/ScrollToTopButton.tsx";
import ScrollToTop from "./Pages/Common/ScrollToTop.tsx";
import './fonts/fonts.css';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <CustomCursor /> 
      <CustomScrollBar/>
      <ScrollToTopButton />
      <ScrollToTop /> 
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

