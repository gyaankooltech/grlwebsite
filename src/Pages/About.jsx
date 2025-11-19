import React, { useState } from "react";
import Navbar from "./Navbar";
import blobleft from "../assets/BlobLeft.png";
import blobright from "../assets/BlobRight.png";
import wave from "../assets/wave.png";
import wave2 from "../assets/wave2.png";
import polygon from "../assets/Polygon.png";
import education from "../assets/education.png";
import health from "../assets/health.png";
import agriculture from "../assets/agriculture.png";
import research from "../assets/research.png";
import lab from "../assets/lab.png";
import handshake from "../assets/handshake.png";
import global from "../assets/global.png";
import { Footer } from "./Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const About = () => {
  const coreValues = [
    "Integrity",
    "Innovation",
    "Impact",
    "Sustainability",
    "Eco-friendly",
    "Accountability",
    "Longevity",
    "Transparency",
    "Efficiency",
  ];

  const focusAreas = [
    {
      title: "Education: Getskilled",
      description:
        "Through our education vertical, we develop AI-powered learning platforms that make quality education and skill development accessible to everyone. Our flagship initiatives include: Getskilled – A unified learning platform offering tech and business courses under one subscription. AI-Powered Virtual Tutors for personalized learning and student assessment.",
      image: education,
    },
    {
      title: "Healthcare: Aarogyam",
      description:
        "We leverage AI, machine learning, and predictive analytics to enhance medical outcomes and accessibility by: Personalizing patient care – Using data-driven insights to tailor treatments and predict health risks before they escalate. Improving diagnostic accuracy – Empowering healthcare professionals with intelligent tools that detect patterns and anomalies faster and more precisely.",
      image: health,
    },
    {
      title: "Agriculture: AgriSol",
      description:
        "In the agriculture domain, we aim to empower farmers with data-driven insights and AI-based decision tools. Our focus areas include: Smart crop health monitoring and pest detection. AI-powered livestock management and yield prediction. Sustainable farming solutions through IoT and automation. Growing nutrient crop through precision farming.",
      image: agriculture,
    },
  ];

  const cards = [
    {
      icon: (
        <img
          src={research}
          alt="Research"
          className="w-12 h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Interdisciplinary R&D combining AI, IoT, Blockchain, and Data Science.",
    },
    {
      icon: (
        <img
          src={lab}
          alt="lab"
          className="w-12 h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "State-of-the-art labs for prototyping and testing AI-driven solutions.",
    },
    {
      icon: (
        <img
          src={handshake}
          alt="handshake"
          className="w-12 h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Collaborations with academia, industry, and government for impactful outcomes.",
    },
    {
      icon: (
        <img
          src={global}
          alt="global"
          className="w-12 h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Products designed and developed in India for global relevance.",
    },
  ];

  const missions = [
  "To make education affordable, skill-based, and personalized using AI and data-driven learning systems.",
  "To revolutionize agriculture through AI-powered farming, crop monitoring, and productivity optimization.",
  "To enhance healthcare outcomes with intelligent health analytics, preventive diagnostics, and digital care solutions.",
  "To foster innovation, research, and collaboration for inclusive and sustainable development.",
];

const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? missions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === missions.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <Navbar />
      <div className="">
        <section className="relative bg-[#F3F0E9] text-center py-32 sm:py-40 md:py-52 px-6 overflow-hidden">
          {/* Left blob */}
          <img
            src={blobleft}
            alt="decorative blob left"
            className="absolute left-0 top-0 w-40 sm:w-52 md:w-60 opacity-90 pointer-events-none select-none"
          />
          {/* Right blob */}
          <img
            src={blobright}
            alt="decorative blob right"
            className="absolute right-0 top-0 w-40 sm:w-60 md:w-96 opacity-90 pointer-events-none select-none"
          />
          {/* Main text */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold mb-2 relative z-10">
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 relative z-10">
            HOME &gt;{" "}
            <span className="text-green-600 font-semibold">ABOUT</span>
          </p>
        </section>

        {/* Who We Are */}
        <section className="text-center py-10 sm:py-12 px-6 md:px-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
            WHO WE ARE
          </h2>
          <p className="max-w-5xl mx-auto text-base sm:text-lg leading-relaxed tracking-wider px-4">
            GyaanKool Research Labs (GkRL) is an AI-based education and research
            company building accessible and sustainable AI-powered solutions for
            learners, professionals, and communities. We integrate AI and
            data-driven insights to solve real-world problems across education,
            agriculture, and healthcare.
          </p>
        </section>
      </div>

      {/* Vision */}
      <section className="py-10 sm:py-12 px-6 md:px-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
          OUR VISION
        </h2>
        <p className="max-w-5xl mx-auto text-base sm:text-lg leading-relaxed text-green-600 tracking-wider px-4">
          To become a global leader in applied AI-based education research,
          driving transformative access across education, agriculture, and
          healthcare through collaboration, innovation, and sustainable growth.
        </p>
      </section>

     {/* Wave Section - Mission */}
 <div className="relative">
      <img
        src={wave2}
        alt="Wave background"
        className="w-full h-[500px] md:hidden"
      />

      {/* Desktop Wave Image */}
      <img
        src={wave}
        alt="Wave background"
        className="hidden md:block w-full h-[600px]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-white uppercase tracking-wide text-center">
          Our Mission
        </h2>

        {/* Mobile View - Carousel with Arrows */}
        <div className="flex sm:hidden justify-center items-center w-full gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="flex-shrink-0 p-2 rounded-full  bg-opacity-20 hover:bg-opacity-30 transition-all"
            aria-label="Previous mission"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Mission Polygon Card */}
          <div className="relative flex flex-col items-center text-center">
            <img src={polygon} alt="polygon" className="w-72" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg leading-snug w-56 text-black px-4">
              {missions[currentIndex]}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-all"
            aria-label="Next mission"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Mobile Indicator Dots */}
        <div className="flex sm:hidden gap-2 mt-6 justify-center">
          {missions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50 w-2'
              }`}
              aria-label={`Go to mission ${i + 1}`}
            />
          ))}
        </div>

        {/* Desktop View - All Missions */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl w-full px-4">
          {missions.map((mission, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center"
            >
              <img
                src={polygon}
                alt="polygon"
                className="w-56 md:w-56 lg:w-80"
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm md:text-base lg:text-lg leading-tight w-28 md:w-36 lg:w-40 text-black px-2">
                {mission}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Core Values & Focus Areas */}
      <div className="text-gray-800 py-8 sm:py-10 px-4 sm:px-6 md:px-16">

        <section className="text-center mb-8 sm:mb-10">
          <h2 className="text-green-700 font-semibold text-lg sm:text-xl mb-6">
            OUR CORE VALUES
          </h2>

          <style
            dangerouslySetInnerHTML={{
              __html: `
          @keyframes marquee-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-left {
            animation: marquee-left 20s linear infinite;
          }
          .animate-marquee-right {
            animation: marquee-right 20s linear infinite;
          }
        `,
            }}
          />

          {/* First Row - 4 values moving left */}
          <div className="relative mb-6 overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
            <div className="flex animate-marquee-left">
              <div className="flex gap-2 sm:gap-3 shrink-0">
                {[...coreValues.slice(0, 4), ...coreValues.slice(0, 4)].map((value, index) => (
                  <span
                    key={index}
                    className="border border-green-700 text-green-700 bg-white px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 rounded-full text-base sm:text-lg lg:text-xl font-medium whitespace-nowrap"
                  >
                    {value}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 sm:gap-3 shrink-0">
                {[...coreValues.slice(0, 4), ...coreValues.slice(0, 4)].map((value, index) => (
                  <span
                    key={`duplicate-${index}`}
                    className="border border-green-700 text-green-700 bg-white px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 rounded-full text-base sm:text-lg lg:text-xl font-medium whitespace-nowrap"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - 5 values moving left (from right) */}
          <div className="relative overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
            <div className="flex animate-marquee-left">
              <div className="flex gap-2 sm:gap-3 shrink-0">
                {[...coreValues.slice(4, 9), ...coreValues.slice(4, 9)].map((value, index) => (
                  <span
                    key={index}
                    className="border border-green-700 text-green-700 bg-white px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 rounded-full text-base sm:text-lg lg:text-xl font-medium whitespace-nowrap"
                  >
                    {value}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 sm:gap-3 shrink-0">
                {[...coreValues.slice(4, 9), ...coreValues.slice(4, 9)].map((value, index) => (
                  <span
                    key={`duplicate-${index}`}
                    className="border border-green-700 text-green-700 bg-white px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 rounded-full text-base sm:text-lg lg:text-xl font-medium whitespace-nowrap"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Focus Areas */}
        <section>
          <h2 className="text-green-700 font-semibold text-xl sm:text-2xl text-center mb-6 sm:mb-8">
            OUR FOCUS AREAS
          </h2>
          <div className="flex flex-col gap-10 sm:gap-16">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center px-4 sm:px-8 md:px-20 rounded-xl`}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full md:w-auto mb-6 md:mb-0">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="rounded-lg w-full md:w-80 lg:w-96 h-auto md:h-80 lg:h-96 object-cover"
                  />
                </div>
                {/* Text */}
                <div className="text-lg sm:text-xl leading-relaxed md:w-1/2 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4 hidden sm:block">
                    {area.title}
                  </h3>
                  <p className="tracking-wider text-lg sm:text-xl [word-spacing:0.25em]">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Why Choose */}
      <div className="w-full">
        <div className="relative w-full h-[800px] sm:h-[450px] md:h-[500px]">
          <img
            src={wave2}
            alt="wave background mobile"
            className="block  sm:hidden w-full h-full "
          />

          {/* Desktop & tablet wave image */}
          <img
            src={wave}
            alt="wave background"
            className="hidden  sm:block w-full h-full "
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
              Why Choose GyaanKool Research Labs?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto w-full px-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="bg-[#D9E9DF] text-gray-700 rounded-lg shadow-sm p-4 sm:p-5 flex flex-col items-center text-center 
             w-full max-w-[300px] sm:max-w-none mx-auto"
                >
                  {card.icon}
                  <p className="text-sm sm:text-base mt-2">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join the Innovation */}
        <div className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <h3 className="text-green-700 font-semibold text-xl sm:text-2xl mb-4">
            JOIN THE INNOVATION
          </h3>
          <p className="text-green-700 max-w-5xl mx-auto text-sm sm:text-base md:text-lg tracking-wider leading-relaxed px-4">
            At GyaanKool Research Labs, we're not just building technology —
            we're building the future of sustainable innovation.
            <br className="hidden sm:block" />
            Whether you’re a student, researcher, institution, or enterprise,
            partner with us to create solutions that educate, empower, and
            evolve the world.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default About;
