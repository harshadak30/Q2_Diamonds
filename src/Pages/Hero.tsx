import React, { useRef, useEffect, useState } from "react";
import Q2logo from "../assets/Q2logo.png";
import OpticsImage from "../assets/Optics.png";
import QuantumImage from "../assets/Link.png";
import ThermalImage from "../assets/Thermal.png";
import GanOnDiamondImage from "../assets/GANONDIAMONDS@2x.png";
import { Link } from "react-router-dom";
import Rquestbutton from "./Common/Rquestbutton";
import AnimatedButton from "./Common/AnimatedButton";
import "../fonts/fonts.css";

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
            videoRef.current
              .play()
              .then(() => {
                setIsVideoPlaying(true);
              })
              .catch((error) => {
                console.log("Autoplay failed:", error);
              });
          } else if (videoRef.current) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
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
    <div className="w-full overflow-x-hidden bg-black">
      {/* Hero Section */}

      <section className="min-h-screen bg-black flex items-center justify-center lg:pt-30 px-4 lg:pb-10">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-2">
          <h1
            className="text-[#c0bfc5] font-bold font-raleway
                   text-4xl mt-10
                   sm:text-5xl sm:mt-24
                   md:text-6xl md:mt-32
                   lg:text-8xl lg:mt-60
                   xl:text-9xl tracking-wide"
          >
            QUANTUM QUEST
          </h1>
          <div className="relative mb-8">
            <img
              src={Q2logo}
              alt="Q2 Diamonds Logo"
              className="w-auto max-w-full
                   h-75
                   sm:h-96
                   md:h-120
                   lg:h-[500px]
                   xl:h-[680px]"
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:pt-12">
        <p className="text-gray-400 font-[galderglynnlt] text-xl sm:text-base md:text-2xl lg:text-4xl font-semibold leading-relaxed text-center mb-6 sm:mb-8 tracking-[0.15em] sm:tracking-[0.25em] ">
          <span className="text-black ">POWERED BY</span>{" "}
          <br className="md:hidden" />
          <span className="text-[#CDAE64] ">HOUSE OF MAITRI</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 font-[galderglynnlt] gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-8xl mx-auto md:pt-4">
          <Link to="/optics" className="block">
            <div className="relative overflow-hidden group transition-shadow duration-300 cursor-pointer">
              <img
                src={OpticsImage}
                alt="Optics"
                className="w-full h-auto transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white group-hover:text-[#CDAE64] text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl transition-colors duration-300 tracking-wide sm:tracking-wider lg:tracking-[0.25em]">
                  OPTICS
                </span>
              </div>
            </div>
          </Link>

          <Link to="/Quantum" className="block">
            <div className="relative overflow-hidden group transition-shadow duration-300 cursor-pointer">
              <img
                src={QuantumImage}
                alt="QuantumImage"
                className="w-full h-auto transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-black group-hover:text-[#CDAE64] text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl transition-colors duration-300 tracking-wide sm:tracking-wider lg:tracking-[0.25em]">
                  QUANTUM
                </span>
              </div>
            </div>
          </Link>

          <Link to="/Thermal" className="block">
            <div className="relative overflow-hidden group transition-shadow duration-300 cursor-pointer">
              <img
                src={ThermalImage}
                alt="ThermalImage"
                className="w-full h-auto transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-black group-hover:text-[#CDAE64] text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl transition-colors duration-300 tracking-wide sm:tracking-wider lg:tracking-[0.25em]">
                  THERMAL
                </span>
              </div>
            </div>
          </Link>

          <Link to="/GanOnDiamond" className="block">
            <div className="relative overflow-hidden group transition-shadow duration-300 cursor-pointer">
              <img
                src={GanOnDiamondImage}
                alt="GanOnDiamondImage"
                className="w-full h-auto transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-black group-hover:text-[#CDAE64] text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl transition-colors duration-300 tracking-wide sm:tracking-wider lg:tracking-[0.25em] text-center px-2">
                  G<span className="font-[montserratmd]">a</span>N ON DIAMOND
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section
        ref={videoSectionRef}
        className="py-12 md:py-18 lg:py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16">
            {/* Video Section - Left */}
            <div className="lg:flex-[1.5] w-full">
              <div className="relative mb-8 md:mb-12 rounded-xl md:rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-purple-900 via-black to-red-900 shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  controls={isVideoPlaying}
                  controlsList=""
                >
                  <source src="/video/Q2FINAL2024_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Play/Pause Button */}
                <div
                  className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    isVideoPlaying
                      ? "opacity-0 hover:opacity-100"
                      : "opacity-100"
                  } ${
                    isVideoPlaying
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  }`}
                  onClick={toggleVideoPlay}
                >
                  <div className="bg-black/60 backdrop-blur-sm rounded-full p-4 md:p-6 lg:p-8 transition-all duration-300 hover:scale-110 hover:bg-black/80 border-2 border-white/30">
                    <svg
                      width="40"
                      height="40"
                      className="md:w-16 md:h-16 lg:w-20 lg:h-20 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      {isVideoPlaying ? (
                        <>
                          <rect
                            x="6"
                            y="4"
                            width="4"
                            height="16"
                            fill="currentColor"
                          />
                          <rect
                            x="14"
                            y="4"
                            width="4"
                            height="16"
                            fill="currentColor"
                          />
                        </>
                      ) : (
                        <path d="M8 5v14l11-7z" fill="currentColor" />
                      )}
                    </svg>
                  </div>
                </div>

                {!isVideoPlaying && (
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    Click to play
                  </div>
                )}

                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZyI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="flex-1 w-full">
              <div className="space-y-6 md:space-y-8">
                {/* UPCOMING EVENTS Title */}
                <div>
                  <h2 className="text-xl md:text-4xl lg:text-4xl font-bold text-white mb-12 md:mb-14lg:mb-18 text-left lg:text-left leading-relaxed tracking-wide">
                    UPCOMING EVENTS
                  </h2>
                </div>

                {/* Small Satellite Conference with Arrow Button */}
                <div className="text-left lg:text-left">
                  {/* Title */}
                  <div className="mb-3">
                    <h3 className="text-xl md:text-2xl lg:text-2xl font-normal text-blue-400 font-[Montserratmd]">
                      Small Satellite Conference
                    </h3>
                  </div>

                  {/* Address and Date */}
                  <div className="space-y-4">
                    {/* Address with Arrow Button for Desktop */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-4">
                      <div className="space-y-1">
                        <p className="text-gray-300 text-base md:text-base lg:text-base font-[Montserratrgg]">
                          Salt Palace Convention Center 100 South West Temple
                          Salt Lake City, Utah
                        </p>
                      </div>

                      {/* Blue Arrow Button - Desktop only */}
                      <a
                        href="https://smallsat.org/conference/registration/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:flex bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full items-center justify-center transition-all duration-300 transform shadow-lg flex-shrink-0"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <svg
                          width="28"
                          height="26"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="transform rotate-330"
                        >
                          <path d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                      </a>
                    </div>

                    {/* Date */}
                    <p className="text-gray-400  md:text-base text-base">
                      August 11th–13th, 2025
                    </p>

                    {/* Blue Arrow Button - Mobile only (below date) */}
                    <a
                      href="https://smallsat.org/conference/registration/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lg:hidden bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full inline-flex items-center justify-center transition-all duration-300 transform shadow-lg"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <svg
                        width="30"
                        height="29"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        className="transform rotate-330"
                      >
                        <path d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marquee Section */}
      <div className="bg-white py-12 overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "marquee 20s linear infinite",
          }}
        >
          {[...items, ...items].map(
            (
              item,
              i // Use 2 sets for smooth loop
            ) => (
              <span
                key={i}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mx-12 text-black tracking-widest "
              >
                {item}{" "}
                <span className="text-4xl md:text-5xl text-black-400">•</span>
              </span>
            )
          )}
        </div>

        <style>
          {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
    `}
        </style>
      </div>
      {/* Research Grants Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row md:gap-16 lg:gap-20">
            <div className="flex-1">
              <p className="text-base md:text-xl text-gray-600  tracking-wider mb-4 md:mb-8  ">
                Collaboration
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-8 tracking-wider">
                RESEARCH GRANTS
              </h2>
            </div>

            <div className="flex-1">
              <p className="text-lg md:text-xl  mb-8 leading-relaxed ">
                Quantum Quest is committed to advancing and supporting research
                at the forefront of knowledge. Through our Research Grant
                Programme, we provide funding to innovative projects that align
                with our mission and values and we are committed to supporting
                projects in the following research themes:
              </p>

              <ul className="space-y-3 mb-8 ">
                <li className="flex items-start text-lg md:text-xl">
                  <span className="mr-3">-</span>
                  <span>Quantum Sensing and Computing</span>
                </li>
                <li className="flex items-start text-lg md:text-xl ">
                  <span className="mr-3">-</span>
                  <span>Optoelectronics</span>
                </li>
                <li className="flex items-start text-lg md:text-xl ">
                  <span className="mr-3">-</span>
                  <span>High-Power Electronics</span>
                </li>
                <li className="flex items-start text-lg md:text-xl ">
                  <span className="mr-3">-</span>
                  <span>RF Electronics/high frequency devices</span>
                </li>
                <li className="flex items-start text-lg md:text-xl ">
                  <span className="mr-3">-</span>
                  <span>Thermal Management/Heat spreaders</span>
                </li>
              </ul>

              <p className=" mb-8 text-lg md:text-xl ">
                For inquiries or additional information about grants and PhD
                scholarships available, please contact us.
              </p>

              <div className="flex justify-start">
                <AnimatedButton
                  variant="gradient"
                  onClick={() => (window.location.href = "/contact")}
                  className="tracking-wider px-10 py-4"
                >
                  CHAT WITH US
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Rquestbutton />
    </div>
  );
};

export default HeroSection;
