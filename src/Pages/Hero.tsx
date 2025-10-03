import React, { useRef, useEffect, useState } from "react";
import Q2logo from "../assets/Q2logo.png";
import OpticsImage from "../assets/hero1.png";
import QuantumImage from "../assets/hero2.png";
import ThermalImage from "../assets/hero3.png";
import GanOnDiamondImage from "../assets/hero4.png";
import { Link } from 'react-router-dom';
import Rquestbutton from "./Common/Rquestbutton";




const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const items = ["AEROSPACE", "TELECOMMUNICATION", "BIOMEDICAL", "DEFENSE"];
 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            // Video section is in view
            videoRef.current
              .play()
              .then(() => {
                setIsVideoPlaying(true);
              })
              .catch((error) => {
                console.log("Autoplay failed:", error);
                // Fallback: show custom play button
              });
          } else if (videoRef.current) {
            // Video section is out of view
            videoRef.current.pause();
            setIsVideoPlaying(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video section is visible
        rootMargin: "0px 0px -100px 0px", // Adjust trigger point
      }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsVideoPlaying(true);
        });
      }
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen bg-black flex items-center justify-center pt-20 px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-8 md:mb-12">
            QUANTUM QUEST
          </h1>
          <div className="relative">
            <img
              src={Q2logo}
              alt="Logo"
              className="h-64 md:h-80 lg:h-96 w-auto max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      {/* <section className="min-h-screen bg-white px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {[OpticsImage, QuantumImage, ThermalImage, GanOnDiamondImage].map(
            (image, index) => (
              <div
                key={index}
                className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Grid ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )
          )}
        </div>
      </section> */}

<section className="min-h-screen bg-white px-4 md:px-8 lg:px-16 py-8 md:py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
    <Link to="/optics" className="block">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img
          src={OpticsImage}
          alt="Optics"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore Optics
          </span>
        </div> */}
      </div>
    </Link>
  <Link to="/Quantum" className="block">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img
          src={QuantumImage}
          alt="QuantumImage"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore Optics
          </span>
        </div> */}
      </div>
    </Link>


     <Link to="/Thermal" className="block">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img
          src={ThermalImage}
          alt="ThermalImage"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore Optics
          </span>
        </div> */}
      </div>
    </Link>

      <Link to="/GanOnDiamond" className="block">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img
          src={GanOnDiamondImage}
          alt="ThermalImage"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore Optics
          </span>
        </div> */}
      </div>
    </Link>
 
  </div>
</section>


      {/* Video Section with Auto-play */}
      <section
        ref={videoSectionRef}
        className="py-12 md:py-16 lg:py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16">
            <div className="flex-1 w-full">
              <div className="relative mb-8 md:mb-12 rounded-xl md:rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-purple-900 via-black to-red-900 shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                >
                  <source
                    src="/src/assets/Q2FINAL2024_2.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div
                  className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
                    isVideoPlaying
                      ? "opacity-0 hover:opacity-100"
                      : "opacity-100"
                  }`}
                  onClick={toggleVideoPlay}
                >
                  <div className="bg-black/40 backdrop-blur-sm rounded-full p-4 md:p-6 transition-all duration-300 hover:scale-110 hover:bg-black/60">
                    <svg
                      width="40"
                      height="40"
                      className="md:w-16 md:h-16 lg:w-20 lg:h-20"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      {isVideoPlaying ? (
                        <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                      ) : (
                        <path d="M8 5v14l11-7z" />
                      )}
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZyI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
              </div>

              <div className="text-gray-400 text-sm md:text-base text-center lg:text-left">
                <p>Small Satellite Conference 2025 - Event Highlights</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  {isVideoPlaying
                    ? "Video is playing"
                    : "Scroll to play video automatically"}
                </p>
              </div>
            </div>

            <div className="flex-1 w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 text-center lg:text-left">
                UPCOMING EVENTS
              </h2>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl text-blue-400 mb-2 md:mb-4 text-center lg:text-left">
                  Small Satellite Conference
                </h3>
                <p className="text-gray-300 text-base md:text-lg text-center lg:text-left">
                  Salt Palace Convention Center 100 South West
                  <br />
                  Temple Salt Lake City, Utah
                </p>
                <p className="text-gray-400 text-center lg:text-left">
                  August 11th–13th, 2025
                </p>

                <div className="flex justify-center lg:justify-start">
                  <button className="mt-4 md:mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-300 transform hover:scale-105">
                    <span>Learn More</span>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 10h10m-5-5l5 5-5 5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i} className="text-6xl font-light mx-8">
              {item} <span className="text-4xl">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Research Grants Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-2 md:mb-4">
                Collaboration
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                RESEARCH GRANTS
              </h2>
            </div>

            <div className="flex-1">
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Quantum Quest is committed to advancing and supporting research
                at the forefront of knowledge. Through our Research Grant
                Programme, we provide funding to innovative projects that align
                with our mission and values and we are committed to supporting
                projects in the following research themes:
              </p>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="text-gray-700">
                  - Quantum Sensing and Computing
                </li>
                <li className="text-gray-700">- Optoelectronics</li>
                <li className="text-gray-700">- High-Power Electronics</li>
                <li className="text-gray-700">
                  - RF Electronics/high frequency devices
                </li>
                <li className="text-gray-700">
                  - Thermal Management/Heat spreaders
                </li>
              </ul>

              <p className="text-gray-700 mb-6 md:mb-8">
                For inquiries or additional information about grants and PhD
                scholarships available, please contact us.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a
                  href="#/contact"
                  className="inline-block bg-black text-white px-6 md:px-8 py-3 md:py-4 hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 text-center"
                >
                  CHAT WITH US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-white py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:px-30">
          <h3 className="md:text-5xl font-bold tracking-wider">
            REACH US TODAY
          </h3>
          <a
            href="q2contact.html"
            className="bg-black md:text-md tracking-wider font-semibold text-white px-30 py-4 rounded-lg shadow transition"
          >
            REQUEST A CALLBACK
          </a>
        </div>
      </section> */}
      <Rquestbutton/>
    </div>
  );
};

export default HeroSection;
