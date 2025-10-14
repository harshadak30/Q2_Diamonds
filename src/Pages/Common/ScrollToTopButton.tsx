import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);

      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const outerRadius = 24;
  const outerCircumference = 2 * Math.PI * outerRadius;

  const strokeDashoffset =
    outerCircumference - (scrollProgress / 100) * outerCircumference;

  return (
    <>
      {isVisible && (
        <div className="fixed z-50 cursor-pointer bottom-6 right-6 sm:bottom-8 sm:right-8">
          <div className="absolute -inset-[8px]">
            <svg
              width="64"
              height="64"
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 64 64"
            >
              <circle
                cx="32"
                cy="32"
                r={outerRadius}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray={outerCircumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
                style={{
                  filter: "",
                  opacity: 1,
                }}
              />
            </svg>
          </div>

          <div className="absolute -inset-[5px]">
            <svg
              width="57"
              height="57"
              className="w-full h-full"
              viewBox="0 0 56 56"
            >
              <circle
                cx="29"
                cy="29"
                r={19}
                fill="none"
                stroke="#000000"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="flex items-center justify-center bg-black rounded-full h-11 w-11">
            <button
              onClick={scrollToTop}
              className="relative flex items-center justify-center text-black transition-all duration-300 transform bg-white rounded-full shadow-lg cursor-pointer h-8 w-8 sm:w-8 sm:h-8 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 group"
              aria-label="Scroll to top"
            >
              <div className="relative w-5 h-5 overflow-hidden cursor-pointer sm:w-6 sm:h-6">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
                  <ArrowUp
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    strokeWidth={2.5}
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                  <ArrowUp
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    strokeWidth={2.5}
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
