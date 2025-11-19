import home from "../assets/image1.png";
import home1 from "../assets/image2.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import agriculture from "../assets/agriculture.png";
import health from "../assets/health.png";
import education from "../assets/education.png";
import partner from "../assets/partner.png";
import wave from "../assets/wave.png";
import wave2 from "../assets/wave2.png";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";

export default function HomePage() {
  const images = [home, home2, home3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-16">
        {/* Left Content */}
        <div className="md:w-3/5 space-y-4 md:space-y-6 text-center md:text-left w-full">
          {/* Heading - Order 1 on mobile */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug order-1">
            Empowering the Future with AI <br />
            <span className="text-gray-900">
              Innovation in Education, Agriculture & Healthcare
            </span>
          </h2>

          {/* Paragraph - Order 2 on mobile */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed order-2">
            GyaanKool Research Labs Pvt. Ltd. is a multidisciplinary R&D company
            driving innovation across EdTech, AgriTech, and HealthTech, creating
            intelligent software and hardware solutions that make knowledge,
            sustainability, and wellness accessible to all.
          </p>

          {/* Image - Order 3 on mobile, hidden on desktop (shown in right column) */}
          <div className="flex justify-center my-6 md:hidden order-3">
            <img
              src={home1}
              alt="AI Agriculture Illustration"
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl object-cover"
            />
          </div>

          {/* Buttons - Order 4 on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2 order-4">
            <button className="bg-[#168A41] hover:bg-green-700 text-white font-medium px-6 py-2.5 rounded-full transition w-full sm:w-auto">
              Explore Our Innovations
            </button>
            <button className="border border-green-600 text-green-700 hover:bg-green-50 font-medium px-6 py-2.5 rounded-full transition w-full sm:w-auto">
              Partner With Us
            </button>
          </div>
        </div>

        {/* Right Image - Only visible on desktop */}
        <div className="hidden md:flex md:w-2/5 justify-center">
          <img
            src={images[currentIndex]}
            alt="AI Agriculture Illustration"
            className="w-96 h-96 rounded-full object-cover transition-all duration-500"
          />
        </div>
      </section>

      {/* Wave Section */}
      <div className="relative">
        {/* Mobile wave2 image */}
        <img
          src={wave2}
          alt="wave background mobile"
          className="block sm:hidden w-full h-[350px] "
        />

        {/* Desktop & tablet wave image */}
        <img
          src={wave}
          alt="wave background"
          className="hidden sm:block w-full h-[350px] sm:h-[450px] md:h-[500px] "
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-10">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            WHO WE ARE
          </h2>
          <p className="text-white max-w-4xl text-sm sm:text-lg md:text-xl leading-relaxed">
            At GyaanKool Research Labs, we believe that technology should serve
            humanity. Our team develops AI-powered products and platforms that
            solve real-world challenges in education, agriculture, and
            healthcare.
          </p>
        </div>
      </div>

      {/* OUR DIVISIONS Section */}
      
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-green-700 font-bold text-xl sm:text-2xl mb-6">
          OUR DIVISIONS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Education Card */}
          <div className="relative  overflow-hidden rounded-xl group cursor-pointer  ">
            <img
              src={education}
              alt="Education"
              className="w-[550px] h-[550px] object-cover transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-14 ">
              <h3 className="text-white font-bold text-2xl mb-10">Education</h3>
              <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
                We are transforming the way India learns through AI-powered
                learning platforms, affordable upskilling programs, and virtual
                tutors for K–12, college, and professionals. Our brands like
                GetSkilled,bring project-based learning, AI tutoring, and
                career-focused courses making education practical, affordable,
                and accessible to all.
              </p>
            </div>
          </div>

          {/* Healthcare Card */}
          <div className="hidden sm:block relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              src={health}
              alt="Healthcare"
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-14">
              <h3 className="text-white font-bold text-2xl mb-10">
                Aarogyam
              </h3>
              <p className="text-white text-lg leading-relaxed">
                We’re developing AI-based diagnostic systems, health monitoring
                tools. Our mission is to make healthcare diagnosis accessible
                across India and beyond. From AI anomaly detection systems to
                remote patient monitoring, we bring cutting-edge technology to
                save lives and improve healthcare delivery.
              </p>
            </div>
          </div>

          {/* Agriculture Card */}
          <div className="hidden sm:block relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              src={agriculture}
              alt="Agriculture"
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-14">
              <h3 className="text-white font-bold text-2xl mb-10">Agrisol</h3>
              <p className="text-white text-lg leading-relaxed">
                At Agrisol, a division of GyaanKool Research Labs Pvt. Ltd., we
                believe that the journey from farm to health must be
                intelligent, sustainable, and nourishing. Our mission is to
                merge AI-powered agriculture with functional nutrition —
                ensuring every Indian, from child to elder, receives natural and
                affordable nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INNOVATION AT THE CORE */}
      <section className="text-center py-10 md:py-16 px-6 md:px-24">
        <h2 className="text-green-700 font-bold text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
          INNOVATION AT THE CORE
        </h2>
        <p className="text-gray-700 max-w-5xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
          Our research labs focus on creating AI frameworks, custom models, and
          intelligent systems that serve humanity. With a team of
          interdisciplinary experts, we bridge the gap between academic research
          and real-world implementation across our focus areas.
        </p>
      </section>

      {/* PARTNER WITH US */}
      <div className="relative">
        <img
          src={wave2}
          alt="wave background mobile"
          className="block sm:hidden w-full h-[350px] "
        />

        {/* Desktop & tablet wave image */}
        <img
          src={wave}
          alt="wave background"
          className="hidden sm:block w-full h-[350px] sm:h-[450px] md:h-[500px] "
        />

        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-20 pt-10">
          <section className="text-white w-full text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              PARTNER WITH US
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3 text-base sm:text-lg md:text-xl leading-loose">
                <p>
                  We collaborate with colleges, startups, corporates, and
                  government organizations to create impactful AI-based
                  solutions.
                </p>
                <button className="bg-white text-green-700 font-medium px-6 py-2.5 rounded-full hover:bg-green-50 transition mt-4">
                  Partner With Us
                </button>
              </div>

              <div className="md:w-1/3  justify-center hidden sm:block">
                <img
                  src={partner}
                  alt="Partner With Us"
                  className="rounded-xl shadow-lg w-56 h-40 sm:w-72 sm:h-56 object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="text-left py-20 sm:py-24 md:py-[200px] px-6 md:px-20">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          Let’s Build a Smarter, Sustainable, <br className="hidden md:block" />
          and Healthier Future
        </h3>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6">
          Join us in our mission to revolutionize education, agriculture, and
          healthcare.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="hidden sm:block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2.5 rounded-full w-full sm:w-auto">
            Explore Our Innovations
          </button>
          <button className="border border-green-600 text-green-700 hover:bg-green-50 font-medium px-6 py-2.5 rounded-full w-full sm:w-auto">
            Partner With Us
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
