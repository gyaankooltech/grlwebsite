import React from "react";
import Navbar from "./Navbar";
import blobleft from "../assets/BlobLeft.png";
import blobright from "../assets/BlobRight.png";
import wave from "../assets/wave.png";
import wave2 from "../assets/wave2.png";
// import polygon from "../assets/Polygon.png";
import course from "../assets/course.png";
import internship from "../assets/internship.png";
import career from "../assets/career.png";
import certificate from "../assets/certificate.png";
import nutrition from "../assets/nutrition.png";
import sustainable from "../assets/sustainable-agriculture.png";
import medicine from "../assets/medicine.png";
import restaurant from "../assets/restaurant.png";
import goodHeart from "../assets/good-heart.png";
import { Footer } from "./Footer";

const Solutions = () => {
  const cards = [
    {
      icon: (
        <img
          src={course}
          alt="Course"
          className="w-20 h-20 sm:w-12 sm:h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Courses that matter: Learn AI, Web Development, Business, Cybersecurity, and more.",
    },
    {
      icon: (
        <img
          src={internship}
          alt="Internship"
          className="w-20 h-20 sm:w-12 sm:h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Internships & Job Opportunities: Get access to verified internships and employer networks.",
    },
    {
      icon: (
        <img
          src={career}
          alt="Career"
          className="w-20 h-20 sm:w-12 sm:h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Career Tools: Resume builder, LinkedIn optimization, and interview preparation included.",
    },
    {
      icon: (
        <img
          src={certificate}
          alt="Certificate"
          className="w-20 h-20 sm:w-12 sm:h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Certifications: Course completion, internship, and project certificates for every learner.",
    },
  ];

  const cards1 = [
    {
      icon: (
        <img
          src={sustainable}
          alt="Sustainable"
          className="w-20 h-20 sm:w-12 sm:h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Intelligent devices monitor soil, water, and nutrient balance for maximum quality.",
    },
    {
      icon: (
        <img
          src={medicine}
          alt="Medicine"
          className="w-20 h-20 sm:w-12 sm:h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Every product is designed to solve real nutrient deficiencies naturally.",
    },
    {
      icon: (
        <img
          src={restaurant}
          alt="Restaurant"
          className="w-20 h-20 sm:w-12 sm:h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Powders, soups, energy bars, and atta blends for all age groups.",
    },
    {
      icon: (
        <img
          src={goodHeart}
          alt="Good Heart"
          className="w-20 h-20 sm:w-12 sm:h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "SmartSalt, Forti-Atta, and Green Blends for daily nutrition.",
    },
  ];

  const cards2 = [
    {
      icon: (
        <img
          src={sustainable}
          alt="Sustainable"
          className="w-12 h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Early Diagnosis: AI-powered tools to detect health issues before symptoms appear.",
    },
    {
      icon: (
        <img
          src={medicine}
          alt="Medicine"
          className="w-12 h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Predictive Analytics: Smart systems that identify patterns in medical data to prevent chronic diseases.",
    },
    {
      icon: (
        <img
          src={restaurant}
          alt="Restaurant"
          className="w-12 h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Preventive Care: AI-driven health monitoring devices and nutrition insights for proactive wellbeing.",
    },
    {
      icon: (
        <img
          src={goodHeart}
          alt="Good Heart"
          className="w-12 h-12 mx-auto mb-3 object-contain"
        />
      ),
      text: "Disease Reversal: Research-based protocols combining data science, nutrition, and lifestyle AI.",
    },
  ];
  const coreValues = [
    "Preventive Care",
    "Disease Reversal",
    "Early Diagnosis",
    "Predictive Analytics",
  ];

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
            Products
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 relative z-10">
            HOME &gt;{" "}
            <span className="text-green-600 font-semibold">PRODUCTS</span>
          </p>
        </section>

        {/* Intro */}
        <section className="text-center py-10 sm:py-12 px-6 md:px-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
            AI-POWERED INNOVATIONS BY GYAANKOOL RESEARCH LABS Pvt. Ltd.
          </h2>
          <p className="max-w-5xl mx-auto text-base sm:text-lg leading-relaxed tracking-wider px-4">
            At GyaanKool Research Labs Pvt. Ltd., we build intelligent solutions
            that bridge education, agriculture, and healthcare — three pillars
            that define human progress. Our products are designed to empower
            individuals, uplift communities, and create a sustainable,
            healthier, and more skilled India through AI, research, and
            data-driven technology.
          </p>
        </section>

        {/* GetSkilled */}
        <section className="text-center py-10 sm:py-12 px-6 md:px-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            GETSKILLED: Learn, Upskill & Grow
          </h2>
          <p className="max-w-5xl mx-auto text-base sm:text-lg leading-relaxed tracking-wider text-green-700 px-4">
            GetSkilled is our all-in-one learning and career advancement
            platform designed to make education practical, affordable, and
            career-focused. Whether you’re a student, graduate, or working
            professional, GetSkilled helps you learn in-demand skills, build
            real-world projects, and get job-ready.
          </p>
        </section>
      </div>

      <div className="w-full my-8 sm:my-10 ">
        {/* GetSkilled Highlights */}
        <div className="relative w-full h-[750px] sm:h-[450px] md:h-[500px] my-8 sm:my-10">
          {/* Mobile Wave */}
          <img
            src={wave2}
            alt="wave background mobile"
            className="block sm:hidden w-full h-full"
          />

          {/* Desktop & tablet wave image */}
          <img
            src={wave}
            alt="wave background"
            className="hidden sm:block w-full h-full"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
              What Makes Getskilled Unique?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto w-full px-4">
              {cards.map((card, i) => {
                // Hide the second card on mobile (index 1)
                const isSecondCard = i === 1;
                return (
                  <div
                    key={i}
                    className={`${
                      isSecondCard ? "hidden sm:flex" : "flex"
                    } bg-[#D9E9DF] text-gray-700 rounded-lg shadow-sm p-4 sm:p-5 flex-col items-center text-center`}
                  >
                    {card.icon}
                    <p className="text-sm sm:text-base mt-2">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Agrisol Section */}
        <section className="px-4 sm:px-6 md:px-20 py-8 sm:py-10">
          <h2 className="text-xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 ">
            Agrisol <br />
            Nutrition for every age, naturally
          </h2>
          <div className="flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col md:flex-row items-center rounded-xl">
              {/* Image */}
              {/* <div className ="flex-shrink-0 w-full md:w-auto mb-6 md:mb-0">
                <img
                  src={nutrition}
                  alt="Agrisol Nutrition"
                  className="rounded-lg w-full md:w-80 lg:w-96 h-auto md:h-80 lg:h-96 object-cover"
                />
              </div> */}
              {/* Text */}
              <div className="text-lg sm:text-xl leading-relaxed  p-4 sm:p-6">
                <p className="tracking-wider text-base sm:text-xl text-green-700 [word-spacing:0.25em]">
                  Agrisol (a product of GyaanKool Research Labs), the AgriTech
                  and Nutritional Science Product of GyaanKool Research Labs, is
                  redefining how food is grown and consumed. Our vision is to
                  make India’s agriculture more intelligent, sustainable, and
                  nutrition-focused.
                  <br />
                  <br />
                  Agrisol products are powered by nutrient-rich crops grown
                  using AI-powered farming devices developed by GyaanKool
                  Research Labs. These crops directly target India’s key
                  nutritional deficiencies, helping communities achieve better
                  health through food-based solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agrisol Unique */}
        <div className="relative w-full h-[750px] sm:h-[450px] md:h-[500px] my-8 sm:my-10">
          {/* Mobile Wave */}
          <img
            src={wave2}
            alt="wave background mobile"
            className="block sm:hidden w-full h-full"
          />

          {/* Desktop & tablet wave image */}
          <img
            src={wave}
            alt="wave background"
            className="hidden sm:block w-full h-full"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
              What Makes Agrisol Unique?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto w-full px-4">
              {cards1.map((card, i) => {
                // Hide the second card on mobile (index 1)
                const isSecondCard = i === 1;
                return (
                  <div
                    key={i}
                    className={`${
                      isSecondCard ? "hidden sm:flex" : "flex"
                    } bg-[#D9E9DF] text-gray-700 rounded-lg shadow-sm p-4 sm:p-5 flex-col items-center text-center`}
                  >
                    {card.icon}
                    <p className="text-sm sm:text-base mt-2">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Healthcare */}
        <div className=" text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <h3 className="text-green-700 font-semibold text-xl sm:text-2xl mb-4">
            Aarogyam
            <br className="sm:hidden" />
            AI for Preventive & Personalized Care
          </h3>
          <p className="text-green-700 max-w-5xl mx-auto text-sm sm:text-base md:text-lg tracking-wider leading-relaxed px-4">
            At GyaanKool (a product of GyaanKool Research Labs), our Healthcare
            division focuses on using AI for early diagnosis, preventive care,
            and disease reversal. We believe that technology should not just
            treat diseases but help prevent and reverse them — improving quality
            of life.
          </p>
        </div>
      </div>

      {/* Agrisol Unique */}
      <div className=" relative w-full h-[850px] sm:h-[450px] md:h-[500px] my-8 sm:my-10">
        {/* <img src={wave} alt="wave background" className="w-full h-full" /> */}
           {/* Mobile Wave */}
          <img
            src={wave2}
            alt="wave background mobile"
            className="block sm:hidden w-full h-full"
          />

          {/* Desktop & tablet wave image */}
          <img
            src={wave}
            alt="wave background"
            className="hidden sm:block w-full h-full"
          />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
            What Makes Aarogyam Unique?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto w-full px-4">
            {cards2.map((card, i) => (
              <div
                key={i}
                className="bg-[#D9E9DF] text-gray-700 rounded-lg shadow-sm p-4 sm:p-5 flex flex-col items-center text-center"
              >
                {card.icon}
                <p className="text-sm sm:text-base mt-2">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Healthcare */}
      <div className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <h3 className="text-green-700 font-semibold text-xl sm:text-2xl mb-4">
          Built on Research. Powered by AI. Driven by Purpose.
        </h3>
        <p className="text-green-700 max-w-5xl mx-auto text-sm sm:text-base md:text-lg tracking-wider leading-relaxed px-4">
          Every product at GyaanKool Research Labs is born from deep R&D,
          real-world validation, <br />
          and sustainable innovation. <br />
          From empowering learners with Getskilled to growing nutritious crops
          with Agrisol and advancing early healthcare with AI we’re building a
          connected ecosystem that shapes the future of education, food, and
          health.
        </p>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Solutions;
