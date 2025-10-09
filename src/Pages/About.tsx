import React, { useState } from "react";
import bg1 from "../assets/IMG.png";
import whowearebg from "../assets/Whoweare1.png";
import whowearebg1 from "../assets/Whoweare2.png";
import Requestbutton from "./Common/Rquestbutton";

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="bg-black text-white h-[65vh] flex items-end pb-20 justify-center">
        <h1 className="text-2xl lg:pb-10 md:text-5xl lg:text-7xl  tracking-[0.3em] text-center text-[#CDAE64] justify-center font-[galderglynnlt]"
          style={{ letterSpacing: '0.50em' }}>
          WHO WE ARE
        </h1>
      </section>

      {/* Introduction Section */}
      <section className=" mx-auto px-6 py-6">
        <p className="text-gray-500 lg:text-xl text-lg lg:px-18 py-6 leading-relaxed font-[montserratmd]">
          <span className="text-[#CDAE64] font-medium">
            Welcome to Q<sup>2</sup> Diamonds
          </span>
          , where the frontiers of innovation converge with boundless ambition.
          At the forefront of technological advancement, our venture is on a
          quest for quantum supremacy, setting out to revolutionize multiple
          industries through the deployment of groundbreaking and
          non-traditional materials.
        </p>
      </section>

      {/* Laboratory Image Section */}
      <section className=" mx-auto ">
        <div className="w-full md:h-[500px] lg:h-[600px] bg-gray-300 overflow-hidden">
          <img
            src={bg1}
            alt="Q2 Diamonds Laboratory"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Expertise Section */}
      <section className=" mx-auto px-6 py-6">
        <p className="text-gray-500 lg:text-justify leading-relaxed text-lg lg:text-xl lg:px-18 py-6 font-[montserratmd]">
          Our expertise is in crafting precision-engineered CVD diamonds
          designed to challenge and transform conventional industrial
          methodologies. Our products offer unparalleled alternatives for a range of applications including semiconductor manufacturing,
          aerospace, tooling, optics, power electronics, acoustics, AI,
          optoelectronics, EVs, wastewater treatment and quantum computing, all
          thanks to the extraordinary capabilities of our intricately crafted
          diamond solutions.{" "}
        </p>
      </section>

      {/* House of Maitri Section */}

      <section className="mx-auto hidden md:block lg:px-18 md:px-1 border-2 border-[#CDAE64] w-[100%]">
        <div className="grid md:grid-cols-2 w-[100%]">
          {/* Left side */}
          <div className="border-r-2 w-[93%] border-[#CDAE64] px-6 py-6 flex items-center">
            <h2 className="font-[galderglynnlt] text-2xl md:text-3xl lg:text-5xl">
              THRIVING IN
              <br />
              INNOVATION UNDER
              <br />
              THE{" "}
              <span className="text-[#CDAE64] font-[galderglynnrg]">
                HOUSE OF MAITRI
              </span>
            </h2>
          </div>

          {/* Right side */}
          <div className=" py-10 flex items-center">
            <p className="text-gray-500 md:pr-2 lg:text-xl md:text-lg lg:text-justify leading-relaxed font-[montserratmd]">
              Q² Diamonds is more than an independent entity as it thrives under
              the umbrella of the House of Maitri. As a vital component of this
              vibrant conglomerate, we collaborate closely with other
              leading-edge Organizations, Doctorates and Researchers within and
              beyond the House of Maitri sphere. Our extensive
              {!isExpanded && <span>...</span>}

              {isExpanded && (
                <span className="text-gray-500 lg:text-xl leading-relaxed mt-4 font-[montserratmd]">
                  {" "}
                  team and
                  collaborators consist of distinguished academicians, industry
                  leaders, scientific frontiers and innovators who work in synergy
                  allowing us to push our innovative boundaries continuously.<br /><br />

                  The House of Maitri, spanning sectors such as AI, consultancy,
                  lab-grown diamonds, and philanthropy is synonymous with a
                  relentless pursuit of excellence, pioneering innovation, and
                  generating a positive footprint in the world. Join us as we pave
                  the path toward a future defined by innovation and a commitment
                  to making a difference.
                </span>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#CDAE64] font-medium cursor-pointer hover:underline focus:outline-none ml-1"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Laboratory Images Section */}
      <section className=" mx-auto py-8">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full bg-gray-300  overflow-hidden">
            <img
              src={whowearebg}
              alt="Q2 Diamonds Lab Equipment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full bg-gray-300  overflow-hidden">
            <img
              src={whowearebg1}
              alt="Q2 Diamonds Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sustainability Section */}

      <section className="mx-auto hidden md:block lg:px-18 md:px-1 border-2 border-[#CDAE64] w-[100%]">
        <div className="grid md:grid-cols-2 w-[100%] ">
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
          <div className="py-10 flex items-center ">
            <p className="text-gray-500 lg:text-xl md:text-lg lg:text-justify leading-relaxed md:pr-2 font-[montserratmd]">
              At Q2 , the heart of our mission lies an unbreakable dedication to ESG principles. To us, sustainability transcends mere trendiness as it is an intrinsic part of our DNA guiding every decision and action we undertake. We are aware that the choices we make today will shape the world of tomorrow, and we are committed to forging
              {!isExpanded && <span>...</span>}


              {isExpanded && (
                <span className="text-gray-500 lg:text-xl leading-relaxed mt-4 font-[montserratmd]">
                  {" "}
                  team and a brighter future.
                  <br/><br/>
                  Our ambition is to achieve net-zero emissions by 2030, a milestone that marks our dedication to environmental stewardship. We extend an open invitation for you to join us on this transformative journey. Together, we have the power to effect meaningful change, setting new standards for ethical and eco-conscious practices across the globe.
                </span>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className=" text-[#CDAE64] font-medium cursor-pointer hover:underline focus:outline-none"
              >
                {isExpanded ? "Read Less" : "Read More"}
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
