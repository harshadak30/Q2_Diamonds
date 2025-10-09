import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
// import { motion } from "framer-motion";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: React.FC = () => {

   const titleRef = useRef<HTMLHeadingElement | null>(null); 
    const emailRef = useRef<HTMLDivElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const locationRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, 
      easing: (t) => 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      touchMultiplier: 1.5, 
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    document.documentElement.style.scrollBehavior = "auto";

    
    if (titleRef.current) {
      const titleElement = titleRef.current;
      const text = titleElement.textContent || "";
      const chars = text.split("");

      titleElement.innerHTML = chars
        .map((char) => `<span class="char inline-block opacity-0">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      const spans = titleElement.querySelectorAll(".char");
      

      gsap.fromTo(
        spans,
        { x: 70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleElement,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );
    }

     // Contact info staggered animation
    const contactRefs = [emailRef.current, phoneRef.current, locationRef.current].filter(Boolean);
    
    if (contactRefs.length > 0) {
      gsap.fromTo(
        contactRefs,
        { 
          y: 60, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: emailRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      {/* <header className="bg-black py-4">
        <div className="flex justify-around md:space-x-70 items-center">
          <div>
            <img src="images/Q2 logoWhite.png" alt="Logo" className="w-25 h-25 object-contain" />
          </div>
          <div className="space-x-10 md:text-xl">
            <button>About Us</button>
            <button>Division</button>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </header> */}

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center px-4 pt-50">
        <div className="w-full max-w-2xl md:p-6 rounded-lg shadow-md">
          <h1 ref={titleRef} className="md:text-4xl md:max-w-[85%] font-semibold mb-12 text-white title-animation">
            PLEASE CONTACT US FOR ANY QUERIES
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-5 border border-gray-600 bg-black text-gray-400 rounded-md focus:outline-none md:text-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-5 border border-gray-600 bg-black text-gray-400 rounded-md focus:outline-none md:text-lg"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-5 border border-gray-600 bg-black text-gray-400 rounded-md focus:outline-none md:text-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Type A Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-5 border border-gray-600 bg-black text-gray-400 rounded-md focus:outline-none md:text-lg"
              required
            />

            <div className="flex justify-center py-4">
              <button
                type="submit"
                className="w-[32%] bg-white text-black font-semibold py-4 px-4 rounded-lg hover:bg-blue-700 hover:text-white focus:outline-none transition"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-black flex rounded-lg shadow-md md:px-20 md:py-72">
        <div className="space-y-6 flex justify-evenly w-full">
          <div  ref={emailRef} style={{ opacity: 0 }}>
            <h2 className="md:text-4xl font-semibold text-white mb-4">Email</h2>
            <a href="mailto:contact@gzdiamonds.com" className="text-white hover:text-blue-300 transition-colors duration-200">
              contact@gzdiamonds.com
            </a>
          </div>
          <div ref={phoneRef} style={{ opacity: 0 }}>
            <h2 className="md:text-4xl font-semibold text-white mb-4">Phone</h2>
            <a href="tel:+16803220714" className="text-white hover:text-blue-300 transition-colors duration-200">
              +1 (680) 322-0714
            </a>
          </div>
          <div ref={locationRef} style={{ opacity: 0 }}>
            <h2 className="md:text-4xl font-semibold text-white mb-4">Location</h2>
            <Link to="" className="text-white hover:text-blue-300">USA</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-black text-gray-300 py-8">
        <div className="container mx-auto md:px-30 flex flex-col md:flex-row items-center justify-between">
          <Link to="">
            <img src="images/Q2 logoWhite.png" alt="Logo" className="w-20" />
          </Link>
          <ul className="flex gap-6 mt-4 md:mt-0">
            <li><Link to="/contact" className="text-white md:text-lg">About Us</Link></li>
            <li><Link to="/contact" className="text-white md:text-lg">Contact Us</Link></li>
          </ul>
        </div>
        <div className="mt-6 lg:pl-75 md:py-20 md:text-lg text-white">
          <p>
            Copyright © {currentYear}{" "}
            <Link to="" className="text-[#CDAE64] hover:underline">Quantum Quest</Link>. All Rights Reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default ContactUs;
