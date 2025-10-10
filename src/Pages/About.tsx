import React, { useState } from "react";
import bg1 from "../assets/IMG.png";
import whowearebg from "../assets/Whoweare1.png";
import whowearebg1 from "../assets/Whoweare2.png";
import Requestbutton from "./Common/Rquestbutton";

const About: React.FC = () => {
  const [isHouseExpanded, setIsHouseExpanded] = useState(false);
  const [isSustainabilityExpanded, setIsSustainabilityExpanded] =
    useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="bg-black text-white h-[50vh] md:h-[60vh] flex items-end  pb-32 justify-center">
        <h1
          className="text-3xl  lg:pb-10 md:text-4xl lg:text-7xl  tracking-[0.3em] text-center text-[#CDAE64] justify-center font-[galderglynnlt]"
          style={{
    letterSpacing: window.innerWidth < 768 ? "0.20em" : "0.40em",
  }}
        >
          WHO WE ARE
        </h1>
      </section>

      {/* Introduction Section */}
      <section className="py-6 mx-4">
        <p className="text-gray-500  sm:text-lg px-10 py-6  font-[montserratmd] sm:tracking-widest text-justify">
          <span className="text-[#CDAE64] font-bold">
            Welcome to Q<sup>2</sup> Diamonds,
          </span>
          {""} where the frontiers of innovation converge with boundless
          ambition. At the forefront of technological advancement, our venture
          is on a quest for quantum supremacy, setting out to revolutionize
          multiple industries through the deployment of groundbreaking and
          non-traditional materials.
        </p>
      </section>

      {/* Laboratory Image Section */}
      <section className="mx-auto">
        <div className="w-full h-[130px] sm:h-[350px] bg-gray-300 overflow-hidden">
          <img
            src={bg1}
            alt="Q2 Diamonds Laboratory"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-6 mx-4 ">
        <p className="text-gray-500 text-justify leading-relaxed sm:text-lg  px-10 py-6 font-[montserratmd] sm:tracking-widest">
          Our expertise is in crafting precision-engineered CVD diamonds
          designed to challenge and transform conventional industrial
          methodologies. Our products offer unparalleled alternatives for a
          range of applications including semiconductor manufacturing,
          aerospace, tooling, optics, power electronics, acoustics, AI,
          optoelectronics, EVs, wastewater treatment and quantum computing, all
          thanks to the extraordinary capabilities of our intricately crafted
          diamond solutions.{" "}
        </p>
      </section>

      {/* House of Maitri Section */}

      <section className="mx-auto hidden sm:block lg:px-18 md:px-1 border-2 border-[#CDAE64] w-[100%]">
        <div className="grid sm:grid-cols-2 w-[100%]">
          {/* Left side */}
          <div className="border-r-2 w-[93%] border-[#CDAE64] px-6 py-6 flex items-center">
            <h2 className="font-[galderglynnlt] text-2xl md:text-3xl lg:text-5xl leading-tight">
              THRIVING IN
              <br />
              INNOVATION UNDER
              <br />
              <span className="text-[#CDAE64] font-[galderglynnrg] block">
                HOUSE OF MAITRI
              </span>
            </h2>
          </div>

          {/* Right side */}
          <div className="flex items-center py-10 ">
            <p className="text-gray-500 md:pr-2  sm:text-lg text-justify leading-relaxed font-[montserratmd]">
              Q² Diamonds is more than an independent entity as it thrives under
              the umbrella of the House of Maitri. As a vital component of this
              vibrant conglomerate, we collaborate closely with other
              leading-edge Organizations, Doctorates and Researchers within and
              beyond the House of Maitri sphere. Our extensive
              {!isHouseExpanded && <span>...</span>}
              {isHouseExpanded && (
                <span className="text-gray-500 lg:text-xl leading-relaxed mt-4 font-[montserratmd]">
                  {" "}
                  team and collaborators consist of distinguished academicians,
                  industry leaders, scientific frontiers and innovators who work
                  in synergy allowing us to push our innovative boundaries
                  continuously.
                  <br />
                  <br />
                  The House of Maitri, spanning sectors such as AI, consultancy,
                  lab-grown diamonds, and philanthropy is synonymous with a
                  relentless pursuit of excellence, pioneering innovation, and
                  generating a positive footprint in the world. Join us as we
                  pave the path toward a future defined by innovation and a
                  commitment to making a difference.
                </span>
              )}
              <button
                onClick={() => setIsHouseExpanded(!isHouseExpanded)}
                className="text-[#CDAE64] font-medium cursor-pointer hover:underline focus:outline-none ml-1"
              >
                {isHouseExpanded ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Laboratory Images Section */}
      <section className="py-8 mx-auto border-t-4 border-b-4 border-[#CDAE64] sm:border-none">
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          <div className="w-full overflow-hidden bg-gray-300">
            <img
              src={whowearebg}
              alt="Q2 Diamonds Lab Equipment"
              className="object-cover w-full h-[180px] sm:h-[450px]"
            />
          </div>
          <div className="w-full overflow-hidden bg-gray-300">
            <img
              src={whowearebg1}
              alt="Q2 Diamonds Facility"
              className="object-cover w-full h-[180px]  sm:h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Sustainability Section */}

      <section className="mx-auto hidden sm:block lg:px-18 md:px-1 border-2 border-[#CDAE64] w-[100%]">
        <div className="grid sm:grid-cols-2 w-[100%] ">
          {/* Left side */}
          <div className=" border-r-2 w-[93%] border-[#CDAE64] px-6 py-6 flex items-center">
            <h2 className="font-[galderglynnlt] text-2xl md:text-3xl lg:text-5xl ">
              LEADING THE
              <br />
              CHARGE TOWARDS
              <br />
              <span className="text-[#CDAE64] font-[galderglynnrg]">
                {" "}
                SUSTAINABLE
                <br />
                EXCELLENCE
              </span>
            </h2>
          </div>

          {/* Right side */}
          <div className="flex items-center py-10 ">
            <p className="text-gray-500  sm:text-lg text-justify leading-relaxed md:pr-2 font-[montserratmd]">
              At Q2 , the heart of our mission lies an unbreakable dedication to
              ESG principles. To us, sustainability transcends mere trendiness
              as it is an intrinsic part of our DNA guiding every decision and
              action we undertake. We are aware that the choices we make today
              will shape the world of tomorrow, and we are committed to forging
              {!isSustainabilityExpanded && <span>...</span>}
              {isSustainabilityExpanded && (
                <span className="text-gray-500 lg:text-xl leading-relaxed mt-4 font-[montserratmd]">
                  {" "}
                  team and a brighter future.
                  <br />
                  <br />
                  Our ambition is to achieve net-zero emissions by 2030, a
                  milestone that marks our dedication to environmental
                  stewardship. We extend an open invitation for you to join us
                  on this transformative journey. Together, we have the power to
                  effect meaningful change, setting new standards for ethical
                  and eco-conscious practices across the globe.
                </span>
              )}
              <button
                onClick={() =>
                  setIsSustainabilityExpanded(!isSustainabilityExpanded)
                }
                className=" text-[#CDAE64] font-medium cursor-pointer hover:underline focus:outline-none"
              >
                {isSustainabilityExpanded ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
        </div>
      </section>

      <Requestbutton />
    </div>
  );
};

export default About;
