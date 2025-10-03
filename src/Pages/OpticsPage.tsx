import React, { useState } from "react";
import OpticsHero from "../assets/Optics.jpg";
import TransmissionChart from "../assets/TransmissionChart.png";
import Rquestbutton from "./Common/Rquestbutton";
import LaserSystems from "../assets/LaserSystems.png";
import QuantumOptics from "../assets/QuantumOptics.png";
import SpaceOptics from "../assets/SpaceOptics.png";
import graph from "../assets/graph.png";
import laser from "../assets/laser1.png";
import laser2 from "../assets/laser2.png";
import laser3 from "../assets/laser3.png";
import QuantumPage from "../assets/QUANTUM1.png";
import QuantumPage1 from "../assets/QUANTUM2.png";
import QuantumPage2 from  "../assets/QUANTUM3.png"
import space from "../assets/Space.png";
import space1 from "../assets/Space2.png";
import space2 from "../assets/Space3.png";

interface ProductCategory {
  title: string;
  image: string;
  specs: {
    label: string;
    value: string;
    description: string;
  }[];
}

const OpticsLandingPage: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpen1, setIsPopupOpen1] = useState(false);
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);

 const categories: ProductCategory[] = [
    {
      title: 'LASER',
      image: laser,
      specs: [
        { label: 'ULTRA-LOW', value: '>100 J/CM²', description: 'Absorption Coefficient / Laser Damage Threshold' },
        { label: '225 NM-50μM', value: '', description: 'Broad Spectral Transmission' }
      ]
    },
    {
      title: 'INFRARED OPTICS',
      image: laser2,
      specs: [
        { label: 'CHEMICAL INERTNESS', value: '2.4 @ 10μM', description: 'Refractive Index' },
        { label: '10/10', value: '', description: 'Mohs Scale' }
      ]
    },
    {
      title: 'LIDAR',
      image: laser3,
      specs: [
        { label: 'BROADBAND TRANSPARENCY', value: 'NO BIREFRINGENCE', description: '' },
        { label: '1.1PPM/K', value: '', description: 'Thermal Expansion' }
      ]
    }
  ];

   const categories1: ProductCategory[] = [
    {
      title: 'QuantumPage',
      image: QuantumPage,
      specs: [
        { label: 'ULTRA-LOW', value: '>100 J/CM²', description: 'Absorption Coefficient / Laser Damage Threshold' },
        { label: '225 NM-50μM', value: '', description: 'Broad Spectral Transmission' }
      ]
    },
    {
      title: 'QuantumPage1',
      image: QuantumPage1,
      specs: [
        { label: 'CHEMICAL INERTNESS', value: '2.4 @ 10μM', description: 'Refractive Index' },
        { label: '10/10', value: '', description: 'Mohs Scale' }
      ]
    },
    {
      title: 'QuantumPage2',
      image: QuantumPage2,
      specs: [
        { label: 'BROADBAND TRANSPARENCY', value: 'NO BIREFRINGENCE', description: '' },
        { label: '1.1PPM/K', value: '', description: 'Thermal Expansion' }
      ]
    }
  ];

  const categories2: ProductCategory[] = [
    {
      title: 'space',
      image: space,
      specs: [
        { label: 'ULTRA-LOW', value: '>100 J/CM²', description: 'Absorption Coefficient / Laser Damage Threshold' },
        { label: '225 NM-50μM', value: '', description: 'Broad Spectral Transmission' }
      ]
    },
    {
      title: 'space1',
      image: space1,
      specs: [
        { label: 'CHEMICAL INERTNESS', value: '2.4 @ 10μM', description: 'Refractive Index' },
        { label: '10/10', value: '', description: 'Mohs Scale' }
      ]
    },
    {
      title: 'space2',
      image: space2,
      specs: [
        { label: 'BROADBAND TRANSPARENCY', value: 'NO BIREFRINGENCE', description: '' },
        { label: '1.1PPM/K', value: '', description: 'Thermal Expansion' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative ">
        <img
          src={OpticsHero}
          alt="Optics Technology"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className=" text-9xl text-black font-bold mb-4">OPTICS</h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className=" mx-auto px-12 py-12">
        <p className="text-gray-600 text-lg leading-relaxed">
          Diamond possesses a combination of optical, thermal, and mechanical
          properties that no other optical material can match. These properties
          make QOG line of products ideal for applications that demand extreme
          power handling, wide spectral transmission, thermal stability, and
          environmental durability.
        </p>
      </section>

      {/* Properties Section - TWO BOXES SIDE BY SIDE */}
      <section className=" mx-auto px-12 py-8">
        <h2 className="text-3xl font-normal mb-10 tracking-wide">PROPERTIES</h2>

        <div className="flex gap-6">
          {/* Left Box - Lifespan */}
          <div className="flex-1  flex flex-col justify-center items-center bg-white">
            <div className="w-full h-full flex flex-col">
              <img
                src={TransmissionChart}
                alt="Transmission Chart"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Box - Transmission Graph - Replace with your graph image */}
          <div className="flex-1  bg-white flex items-center justify-center">
            <div className="w-full h-full flex flex-col">
              <img
                src={graph}
                alt="Transmission Chart"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex">
          {/* Left Side - Title */}
          <div className="w-3/5 bg-white flex items-center border-[#C8AB6E] border-2 p-2">
            <h2 className="text-7xl font-normal tracking-wide leading-tight text-center">
              APPLICATIONS OF
              <br />
              OPTICS
            </h2>
          </div>

          {/* Laser Systems */}
          <div onClick={() => setIsPopupOpen(true)} className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
            <h3 className="text-black text-sm font-semibold tracking-widest text-center">
              LASER SYSTEMS
            </h3>
            <div className="w-full h-80 overflow-hidden">
              <img
                src={LaserSystems}
                alt="Laser Systems"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Quantum Optics */}
          <div onClick={() => setIsPopupOpen1(true)} className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
            <h3 className="text-black text-sm font-semibold tracking-widest text-center">
              QUANTUM OPTICS
            </h3>
            <div className="w-full h-80 overflow-hidden">
              <img
                src={QuantumOptics}
                alt="Quantum Optics"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Space */}
          <div onClick={() => setIsPopupOpen2(true)} className="w-1/4 relative overflow-hidden border-[#C8AB6E] border-2 p-2 group">
            <h3 className="text-black text-sm font-semibold tracking-widest text-center">
              SPACE
            </h3>
            <div className="w-full h-80 overflow-hidden">
              <img
                src={SpaceOptics}
                alt="Space"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
      <Rquestbutton />

{isPopupOpen && (
  <div 
    className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
    onClick={() => setIsPopupOpen(false)}
  >
    <div 
      className="bg-white rounded-lg max-w-3xl w-full relative shadow-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
   
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#C8AB6E]">
        {categories.map((category, idx) => (
          <div 
            key={idx} 
            className="border-[#C8AB6E] border-1 lg:border-y-2 lg:border-l-2 lg:border-r-0 lg:last:border-r-2"
          >
            <img 
              src={category.image} 
              alt={category.title || `Category ${idx + 1}`}
              className="w-full h-[75vh] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)}

{isPopupOpen1 && (
  <div 
    className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
    onClick={() => setIsPopupOpen1(false)}
  >
    <div 
      className="bg-white rounded-lg max-w-3xl w-full relative shadow-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
   
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#C8AB6E]">
        {categories1.map((category, idx) => (
          <div 
            key={idx} 
            className="border-[#C8AB6E] border-1 lg:border-y-2 lg:border-l-2 lg:border-r-0 lg:last:border-r-2"
          >
            <img 
              src={category.image} 
              alt={category.title || `Category ${idx + 1}`}
              className="w-full h-[75vh] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)}

{isPopupOpen2 && (
  <div 
    className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
    onClick={() => setIsPopupOpen2(false)}
  >
    <div 
      className="bg-white rounded-lg max-w-3xl w-full relative shadow-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
   
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#C8AB6E]">
        {categories2.map((category, idx) => (
          <div 
            key={idx} 
            className="border-[#C8AB6E] border-1 lg:border-y-2 lg:border-l-2 lg:border-r-0 lg:last:border-r-2"
          >
            <img 
              src={category.image} 
              alt={category.title || `Category ${idx + 1}`}
              className="w-full h-[75vh] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default OpticsLandingPage;
