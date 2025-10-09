import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import type { ContactFormData } from "./Common/useContactUs";
import useContactUs from "./Common/useContactUs";

gsap.registerPlugin(ScrollTrigger);

const ContactUs: React.FC = () => {
  const {
    handleContactSubmit,
    loading,
    error,
    success,
    fieldErrors,
    resetSuccess,
  } = useContactUs();

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const emailRef = useRef<HTMLDivElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const locationRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState<{
    email?: string;
    phone_number?: string;
  }>({});

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        resetSuccess();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, resetSuccess]);

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
        .map(
          (char) =>
            `<span class="char inline-block opacity-0">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
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

    const contactRefs = [
      emailRef.current,
      phoneRef.current,
      locationRef.current,
    ].filter(Boolean);

    if (contactRefs.length > 0) {
      gsap.fromTo(
        contactRefs,
        { y: 60, opacity: 0 },
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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length === 10;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone_number") {
      const digitsOnly = value.replace(/\D/g, "");
      setFormData((prev: any) => ({
        ...prev,
        [name]: digitsOnly,
      }));
    } else if (name === "name") {
      const lettersOnly = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData((prev: any) => ({
        ...prev,
        [name]: lettersOnly,
      }));
    } else {
      setFormData((prev: any) => ({
        ...prev,
        [name]: value,
      }));
    }

    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email" && value) {
      if (!validateEmail(value)) {
        setValidationErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
      }
    }

    if (name === "phone_number" && value) {
      if (!validatePhone(value)) {
        setValidationErrors((prev) => ({
          ...prev,
          phone_number: "Please enter exactly 10 digits",
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: typeof validationErrors = {};

    if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!validatePhone(formData.phone_number)) {
      errors.phone_number = "Please enter exactly 10 digits";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      await handleContactSubmit(formData);
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        message: "",
      });
      setValidationErrors({});
    } catch (err) {
      // Error is already handled in the hook
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 md:pt-40 lg:pt-50 pb-12 sm:pb-16 md:pb-20">
        <div className="w-full max-w-2xl p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
          <h1
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-10 md:mb-12 text-white title-animation leading-tight max-w-full md:max-w-[95%]"
          >
            PLEASE CONTACT US FOR ANY QUERIES
          </h1>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-3 sm:p-4 bg-green-600 text-white rounded-md transition-opacity duration-500 text-sm sm:text-base">
              ✓ Thank you! Your form has been submitted.
            </div>
          )}

          {/* General Error Message */}
          {error && !Object.keys(fieldErrors).length && (
            <div className="mb-6 p-3 sm:p-4 bg-red-600 text-white rounded-md animate-fade-in text-sm sm:text-base">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                pattern="[a-zA-Z\s]*"
                className={`w-full px-3 sm:px-4 py-4 sm:py-5 border ${
                  fieldErrors.name ? "border-red-500" : "border-gray-600"
                } bg-black text-gray-400 rounded-md focus:outline-none text-base sm:text-lg md:text-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
                required
                disabled={loading}
              />
              {fieldErrors.name && (
                <p className="mt-2 text-xs sm:text-sm text-red-500">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3 sm:px-4 py-4 sm:py-5 border ${
                  validationErrors.email || fieldErrors.email
                    ? "border-red-500"
                    : "border-gray-600"
                } bg-black text-gray-400 rounded-md focus:outline-none text-base sm:text-lg md:text-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
                required
                disabled={loading}
              />
              {(validationErrors.email || fieldErrors.email) && (
                <p className="mt-2 text-xs sm:text-sm text-red-500">
                  {validationErrors.email || fieldErrors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number (10 digits)"
                value={formData.phone_number}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={10}
                pattern="[0-9]*"
                inputMode="numeric"
                className={`w-full px-3 sm:px-4 py-4 sm:py-5 border ${
                  validationErrors.phone_number || fieldErrors.phone_number
                    ? "border-red-500"
                    : "border-gray-600"
                } bg-black text-gray-400 rounded-md focus:outline-none text-base sm:text-lg md:text-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
                required
                disabled={loading}
              />
              {(validationErrors.phone_number || fieldErrors.phone_number) && (
                <p className="mt-2 text-xs sm:text-sm text-red-500">
                  ✗ {validationErrors.phone_number || fieldErrors.phone_number}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="Type A Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-3 sm:px-4 py-4 sm:py-5 border ${
                  fieldErrors.message ? "border-red-500" : "border-gray-600"
                } bg-black text-gray-400 rounded-md focus:outline-none text-base sm:text-lg md:text-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors resize-none`}
                required
                disabled={loading}
              />
              {fieldErrors.message && (
                <p className="mt-2 text-xs sm:text-sm text-red-500">
                  ✗ {fieldErrors.message}
                </p>
              )}
            </div>

            <div className="flex justify-center py-4 sm:py-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-white text-black font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-gray-200 cursor-pointer hover:text-black focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black text-sm sm:text-base md:text-lg"
              >
                {loading ? "SUBMITTING..." : "SUBMIT NOW"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-black rounded-lg shadow-md px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-72">
        <div
          className="flex flex-col sm:flex-row justify-between items-center sm:items-start
 space-y-8 sm:space-y-0 sm:space-x-6 md:space-x-8 lg:space-x-12 w-full pl-6"
        >
          <div
            ref={emailRef}
            style={{ opacity: 0 }}
            className="w-full sm:w-1/3"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4">
              Email
            </h2>
            <a
              href="mailto:contact@gzdiamonds.com"
              className="text-white hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base md:text-lg break-all"
            >
              contact@gzdiamonds.com
            </a>
          </div>

          <div
            ref={phoneRef}
            style={{ opacity: 0 }}
            className="w-full sm:w-1/3"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4">
              Phone
            </h2>
            <a
              href="tel:+16803220714"
              className="text-white hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base md:text-lg"
            >
              +1 (680) 322-0714
            </a>
          </div>

          <div
            ref={locationRef}
            style={{ opacity: 0 }}
            className="w-full sm:w-1/3"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4">
              Location
            </h2>
            <Link
              to=""
              className="text-white hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base md:text-lg"
            >
              USA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
