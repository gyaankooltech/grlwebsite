import React from 'react'
import wave from "../assets/wave.png";
import wave2 from "../assets/wave2.png";
export const Footer = () => {
  return (
       <div className="relative ">
            {/* <img src={wave} alt="Wave background" className="w-full h-[1000px]  md:h-[450px]" /> */}
     {/* Mobile Wave Image */}
      <img 
        src={wave2} 
        alt="Wave background" 
        className="w-full h-[900px] md:hidden" 
      /> 
      
      {/* Desktop Wave Image */}
      <img 
        src={wave} 
        alt="Wave background" 
        className="hidden md:block w-full h-[400px]" 
      />
            <footer className="absolute inset-0 text-white py-10 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left pt-20">
              <div>
                <h4 className="font-bold mb-3 text-lg sm:text-xl">COMPANY INFO</h4>
                <p className="text-sm sm:text-lg leading-relaxed">
                  GyaanKool Research Labs Private <br /> 
                  <span className="font-bold">CIN:</span> U62090KA2025PTC204517 <br />
                  <span className="font-bold">Grievance mail:</span> grievanceatgrl@gmail.com  <br />
                  {/* Phone number:+91 97417 18160 <br /> */}
                  { /* <span className="font-bold"> */ } Registered Address:</span> Om Chambers Binnamangala, Stage 1, Indiranagar, <br />
                  Bengaluru, Karnataka 560038 <br />
                  
                </p>
              </div>
    
              <div>
                <h4 className="font-bold mb-3 text-lg sm:text-xl">Operating Address</h4>
                <p className="text-sm sm:text-lg leading-relaxed">
                5/3, ESS CEE Building, MSR <br />
                 Industrial Area, 12th Main, 2nd <br />
                  Cross, Mathikere <br />
    Extension, Bengaluru, <br />
     Karnataka 560054 <br />
     Phone number: 9591009606
                </p>
              </div>
    
              <div>
                <h4 className="OMPANY INFOfont-bold mb-3 text-lg sm:text-xl">Quick Links</h4>
                <p className="text-sm sm:text-lg leading-relaxed">
                  <a className='cursor-pointer' href="/">Home</a>  <br />
   <a className='cursor-pointer' href="/about">About</a>  <br />
   <a className='cursor-pointer' href="/solutions">Products</a>  <br />
   <a className='cursor-pointer' href="/contact">Contact</a> 
                </p>
              </div>
    
              <div>
                <h4 className="font-bold mb-3 text-lg sm:text-xl">LEGAL</h4>
                <p className="text-sm sm:text-lg leading-relaxed">
                   Terms and Condition <br />
    Privacy Policy <br />
    Financial Reports
                </p>
              </div>
            </footer>
          </div>
  )
}
