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

      <section className="bg-black text-white h-[60vh] flex items-end pb-20 justify-center">
        <h1 className="text-2xl lg:pb-10 md:text-6xl lg:text-7xl font-semibold tracking-[0.3em] text-center text-[#CDAE64] justify-center"
          style={{ letterSpacing: '0.50em' }}>
          WHO WE ARE
        </h1>
      </section>

      {/* Introduction Section */}
      <section className=" mx-auto px-6 py-6">
        <p className="text-gray-500 lg:text-2xl px-18 py-6 leading-relaxed">
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
        <div className="w-full h-96 md:h-[500px] lg:h-[600px] bg-gray-300 overflow-hidden">
          <img
            src={bg1}
            alt="Q2 Diamonds Laboratory"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Expertise Section */}
      <section className=" mx-auto px-6 py-6">
        <p className="text-gray-500 text-justify leading-relaxed lg:text-2xl px-18 py-6">
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

      <section className="mx-auto px-18 border-2 border-[#CDAE64]">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div className="border-r-2 border-[#CDAE64] px-6 py-6 flex items-center">
            <h2 className="text-2xl md:text-5xl font-semibold">
              THRIVING IN
              <br />
              INNOVATION UNDER
              <br />
              THE{" "}
              <span className="text-[#CDAE64] font-semibold">
                HOUSE OF MAITRI
              </span>
            </h2>
          </div>

          {/* Right side */}
          <div className="px-6 py-6 flex items-center">
            <p className="text-gray-500 lg:text-2xl text-justify leading-relaxed">
              Q² Diamonds is more than an independent entity as it thrives under
              the umbrella of the House of Maitri. As a vital component of this
              vibrant conglomerate, we collaborate closely with other
              leading-edge Organizations, Doctorates and Researchers within and
              beyond the House of Maitri sphere. Our extensive
              {!isExpanded && <span>...</span>}

              {isExpanded && (
                <span className="text-gray-500 lg:text-2xl leading-relaxed mt-4">
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
      <section className=" mx-auto px-18 border-2 border-[#CDAE64]">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="w-full h-120 bg-gray-300  overflow-hidden">
            <img
              src={whowearebg}
              alt="Q2 Diamonds Lab Equipment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-120 bg-gray-300  overflow-hidden">
            <img
              src={whowearebg1}
              alt="Q2 Diamonds Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sustainability Section */}

      <section className=" mx-auto px-6 py-16 border  border-amber-600">
        <div className="grid md:grid-cols-2 gap-12  items-center">
          {/* Left side */}
          <div className=" border-r border-amber-600">
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              LEADING THE
              <br />
              CHARGE TOWARDS
              <br />
              <span className="text-amber-600 font-medium">
                {" "}
                SUSTAINABLE EXCELLENCE
              </span>
            </h2>
          </div>

          {/* Right side */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              At Q2 , the heart of our mission lies an unbreakable dedication to
              ESG principles. To us, sustainability transcends mere trendiness
              as it is an intrinsic part of our DNA guiding every decision and
              action we undertake. We are aware that the choices we make today
              will shape the world of tomorrow, and we are committed to forging
              ...
            </p>

            {isExpanded && (
              <p className="text-gray-700 leading-relaxed mt-4">
                At Q2 , the heart of our mission lies an unbreakable dedication
                to ESG principles. To us, sustainability transcends mere
                trendiness as it is an intrinsic part of our DNA guiding every
                decision and action we undertake. We are aware that the choices
                we make today will shape the world of tomorrow, and we are
                committed to forging team and a brighter future. Our ambition is
                to achieve net-zero emissions by 2030, a milestone that marks
                our dedication to environmental stewardship. We extend an open
                invitation for you to join us on this transformative journey.
                Together, we have the power to effect meaningful change, setting
                new standards for ethical and eco-conscious practices across the
                globe.
              </p>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-amber-600 font-medium cursor-pointer hover:underline focus:outline-none"
            >
              {isExpanded ? "Read Less" : "Read More..."}
            </button>
          </div>
        </div>
      </section>

      <Requestbutton />
    </div>
  );
};

export default About;
