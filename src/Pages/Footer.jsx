import React from "react";
import wave from "../assets/wave.png";
import wave2 from "../assets/wave2.png";

export const Footer = () => {
  return (
    <div className="relative">
      
      {/* Mobile Wave */}
      <img
        src={wave2}
        alt="Wave Background"
        className="w-full h-[900px] md:hidden"
      />

      {/* Desktop Wave */}
      <img
        src={wave}
        alt="Wave Background"
        className="hidden md:block w-full h-[400px]"
      />

      {/* Footer Content */}
      <footer className="absolute inset-0 text-white py-10 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left pt-20">

        {/* Company Info */}
        <div className="transition-all duration-300 hover:scale-105">
          <h4 className="font-bold mb-3 text-lg sm:text-xl">COMPANY INFO</h4>
          <p className="text-sm sm:text-lg leading-relaxed">
            GyaanKool Research Labs Private Limited <br />
            <span className="font-bold">CIN:</span> U62090KA2025PTC204517 <br />
            <span className="font-bold">Grievance mail:</span> grievanceatgrl@gmail.com <br />
            <span className="font-bold">Registered Address:</span>  
            Om Chambers Binnamangala, Stage 1, Indiranagar, Bengaluru, Karnataka 560038
          </p>
        </div>

        {/* Operating Address */}
        <div className="transition-all duration-300 hover:scale-105">
          <h4 className="font-bold mb-3 text-lg sm:text-xl">OPERATING ADDRESS</h4>
          <p className="text-sm sm:text-lg leading-relaxed">
            5/3, ESS CEE Building, MSR <br />
            Industrial Area, 12th Main, 2nd Cross, Mathikere Extension, <br />
            Bengaluru, Karnataka 560054 <br />
            Phone: 9591009606
          </p>
        </div>

        {/* Quick Links */}
        <div className="transition-all duration-300 hover:scale-105">
          <h4 className="font-bold mb-3 text-lg sm:text-xl">QUICK LINKS</h4>
          <p className="text-sm sm:text-lg leading-relaxed">
            <a className="cursor-pointer hover:underline" href="/">Home</a> <br />
            <a className="cursor-pointer hover:underline" href="/about">About</a> <br />
            <a className="cursor-pointer hover:underline" href="/solutions">Products</a> <br />
            <a className="cursor-pointer hover:underline" href="/contact">Contact</a>
          </p>
        </div>

        {/* Legal */}
        <div className="transition-all duration-300 hover:scale-105">
          <h4 className="font-bold mb-3 text-lg sm:text-xl">LEGAL</h4>
          <p className="text-sm sm:text-lg leading-relaxed">

            <a
              href="https://drive.google.com/file/d/1cUFPuouxZKNqV0m5F7JE7HlV2NJWu8XQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline"
            >
              Terms & Conditions
            </a>
            <br />

            <a
              href="https://drive.google.com/file/d/1qwxFlMVbLkdfrGeVFeBEhoUmIJ6CF7Gy/view"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline"
            >
              Privacy Policy
            </a>
            <br />

            <a
              href="https://forms.gle/x7nHm7DCw6de6YH6A"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline"
            >
              Financial Reports
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
