// import React from "react";
// import Navbar from "./Navbar";
// import blobleft from "../assets/BlobLeft.png";
// import blobright from "../assets/BlobRight.png";
// import wave from "../assets/wave.png";
// import wave2 from "../assets/wave2.png";
// import { Footer } from "./Footer";

// const Contact = () => {
//   // const cards = [
//   //   {
//   //     icon: (
//   //       <img
//   //         src={research}
//   //         alt="Research"
//   //         className="w-12 h-12 mx-auto mb-3 object-contain"
//   //       />
//   //     ),
//   //     text: "Interdisciplinary R&D combining AI, IoT, Blockchain, and Data Science.",
//   //   },
//   //   {
//   //     icon: (
//   //       <img
//   //         src={lab}
//   //         alt="lab"
//   //         className="w-12 h-12 mx-auto mb-3 object-contain"
//   //       />
//   //     ),
//   //     text: "State-of-the-art labs for prototyping and testing AI-driven solutions.",
//   //   },
//   //   {
//   //     icon: (
//   //       <img
//   //         src={handshake}
//   //         alt="handshake"
//   //         className="w-12 h-12 mx-auto mb-3 object-contain"
//   //       />
//   //     ),
//   //     text: "Collaborations with academia, industry, and government for impactful outcomes.",
//   //   },
//   //   {
//   //     icon: (
//   //       <img
//   //         src={global}
//   //         alt="global"
//   //         className="w-12 h-12 mx-auto mb-3 object-contain"
//   //       />
//   //     ),
//   //     text: "Products designed and developed in India for global relevance.",
//   //   },
//   // ];

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Header */}
//       <Navbar />
//       <div className="">
//         <section className="relative bg-[#F3F0E9] text-center py-32 sm:py-40 md:py-52 px-6 overflow-hidden">
//           {/* Left blob */}
//           <img
//             src={blobleft}
//             alt="decorative blob left"
//             className="absolute left-0 top-0 w-40 sm:w-52 md:w-60 opacity-90 pointer-events-none select-none"
//           />
//           {/* Right blob */}
//           <img
//             src={blobright}
//             alt="decorative blob right"
//             className="absolute right-0 top-0 w-40 sm:w-60 md:w-96 opacity-90 pointer-events-none select-none"
//           />
//           {/* Main text */}
//           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold mb-2 relative z-10">
//             Contact
//           </h1>
//           <p className="text-lg sm:text-xl md:text-2xl text-gray-600 relative z-10">
//             HOME &gt;{" "}
//             <span className="text-green-600 font-semibold">CONTACT</span>
//           </p>
//         </section>

//         {/* Let's Build */}
//         <section className="text-center py-10 sm:py-12 px-6 md:px-20">
//           <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
//             LET’S BUILD THE FUTURE TOGETHER
//           </h2>
//           <p className="max-w-5xl mx-auto text-base sm:text-lg leading-relaxed tracking-wider px-4">
//             At GyaanKool Research Labs, we believe innovation thrives through
//             collaboration. Whether you’re a student, researcher, educator,
//             institution, or industry partner, we’d love to connect and explore
//             how we can work together to create AI-powered solutions for a better
//             tomorrow.
//           </p>
//         </section>
//       </div>

//       {/* Contact Form & Offices */}
//       <div className="relative w-full">
//         <img
//           src={wave2}
//           alt="Wave background"
//           className="w-full h-[1000px] md:hidden"
//         />

//         {/* Desktop Wave Image */}
//         <img
//           src={wave}
//           alt="Wave background"
//           className="hidden md:block w-full h-[600px]"
//         />

//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="max-w-7xl w-full px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 text-white">
//             {/* Left: Form */}
//             <div className="pt-6 md:pt-0">
//               <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center md:text-left">
//                 Reach Out to Us
//               </h2>
//               <form className="flex flex-col space-y-4 sm:space-y-5">
//                 <div className="flex flex-row sm:flex-row gap-4">
//                   <div className="flex flex-col w-1/2 ">
//                     <label
//                       htmlFor="firstName"
//                       className="mb-1 text-white font-medium"
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       placeholder="First Name"
//                       className="px-3 py-2 rounded-md text-gray-800 bg-white focus:outline-none"
//                     />
//                   </div>
//                   <div className="flex flex-col w-1/2 ">
//                     <label
//                       htmlFor="lastName"
//                       className="mb-1 text-white font-medium invisible sm:visible"
//                     >
//                       &nbsp;
//                     </label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       placeholder="Last Name"
//                       className="px-3 py-2 mr-2 rounded-md text-gray-800 bg-white focus:outline-none"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="email"
//                     className="mb-1 text-white font-medium"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Email"
//                     className="w-full px-3 py-2 rounded-md text-gray-800 bg-white focus:outline-none"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="phone"
//                     className="mb-1 text-white font-medium"
//                   >
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     placeholder="Phone"
//                     className="w-full px-3 py-2 rounded-md text-gray-800 bg-white focus:outline-none"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="message"
//                     className="mb-1 text-white font-medium"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     rows="4"
//                     placeholder="Message"
//                     className="w-full px-3 py-2 rounded-md text-gray-800 bg-white focus:outline-none"
//                   ></textarea>
//                 </div>
//               </form>
//             </div>

//             {/* Right: Offices */}
//             <div className="flex flex-col justify-center space-y-8 sm:space-y-10 text-center md:text-left">
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
//                   Registered Office
//                 </h3>
//                 <p className="text-base sm:text-lg leading-relaxed text-white/90">
//                   Binnamangala, Stage 1,
//                   <br />
//                   Indiranagar, Bengaluru,
//                   <br />
//                   Karnataka 560038
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
//                   Operating Office
//                 </h3>
//                 <p className="text-base sm:text-lg leading-relaxed text-white/90">
//                   5/3, ESS CEE Building, MSR Industrial Area, 12th Main,
//                   <br />
//                   2nd Cross, Mathikere Extension,
//                   <br />
//                   Bengaluru, Karnataka 560054
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//       {/* Why Choose */}
//       <div className="w-full">

//         {/* Join the Innovation */}
//         <div className="text-center py-12 sm:py-16 lg:py-40 px-4 sm:px-6">
//           <h3 className="text-green-700 font-semibold text-xl sm:text-2xl mb-4">
//             Together, We Build What’s Next
//           </h3>
//           <p className="text-green-700 max-w-5xl mx-auto text-sm sm:text-base md:text-lg tracking-wider leading-relaxed px-4">
//             At GyaanKool Research Labs, every connection is an opportunity to
//             learn, innovate, and
//             <br className="hidden sm:block" />
//             mpact lives. Reach out today let’s co-create the future of AI in
//             education, agriculture, and healthcare.
//           </p>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <Footer />
//     </div>
//   );
// };

// export default Contact;



import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import blobleft from "../assets/BlobLeft.png";
import blobright from "../assets/BlobRight.png";
import wave from "../assets/wave.png";
import wave2 from "../assets/wave2.png";
import { Footer } from "./Footer";

// Initialize EmailJS with your public key
emailjs.init("tKiktR5ozvHfwV9rY");

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "", // 'success' or 'error'
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare template parameters
      const templateParams = {
        to_email: "gyaankool.database@gmail.com", // Where you want to receive emails
        from_name: `${formData.firstName} ${formData.lastName}`,
        name: `${formData.firstName} ${formData.lastName}`, // For template's From Name field
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        "service_c2vs3nk", // Your EmailJS service ID
        "template_csu44db", // Your EmailJS template ID
        templateParams
      );

      if (response.status === 200) {
        setNotification({
          show: true,
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        // Hide notification after 2.5 seconds
        setTimeout(() => {
          setNotification({ show: false, type: "", message: "" });
        }, 2500);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Error details:", error.text || error.message || error);
      setNotification({
        show: true,
        type: "error",
        message: `Failed to send message: ${error.text || error.message || "Please check console for details"}`,
      });
      // Hide notification after 3 seconds for error messages
      setTimeout(() => {
        setNotification({ show: false, type: "", message: "" });
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Notification Toast Popup */}
      {notification.show && (
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] px-6 py-4 rounded-lg shadow-2xl text-white text-center font-medium min-w-[300px] max-w-[90%] sm:max-w-md transition-all duration-300 ease-in-out ${
            notification.type === "success"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

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
            Contact
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 relative z-10">
            HOME &gt;{" "}
            <span className="text-green-600 font-semibold">CONTACT</span>
          </p>
        </section>

        {/* Let's Build */}
        <section className="text-center py-10 sm:py-12 px-6 md:px-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
            LET'S BUILD THE FUTURE TOGETHER
          </h2>
          <p className="max-w-5xl mx-auto text-base sm:text-lg leading-relaxed tracking-wider px-4">
            At GyaanKool Research Labs, we believe innovation thrives through
            collaboration. Whether you're a student, researcher, educator,
            institution, or industry partner, we'd love to connect and explore
            how we can work together to create AI-powered solutions for a better
            tomorrow.
          </p>
        </section>
      </div>

      {/* Contact Form & Offices */}
      <div className="relative w-full">
        <img
          src={wave2}
          alt="Wave background"
          className="w-full h-[1000px] md:hidden"
        />

        {/* Desktop Wave Image */}
        <img
          src={wave}
          alt="Wave background"
          className="hidden md:block w-full h-[600px]"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl w-full px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 text-white">
            {/* Left: Form */}
            <div className="pt-6 md:pt-8 lg:pt-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center md:text-left">
                Reach Out to Us
              </h2>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 sm:space-y-5"
              >
                <div className="flex flex-row sm:flex-row gap-4">
                  <div className="flex flex-col w-1/2">
                    <label
                      htmlFor="firstName"
                      className="mb-1 text-white font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="px-3 py-2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label
                      htmlFor="lastName"
                      className="mb-1 text-white font-medium invisible sm:visible"
                    >
                      &nbsp;
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="px-3 py-2 mr-2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-1 text-white font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-1 text-white font-medium"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="mb-1 text-white font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-md transition duration-300 mt-2"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Right: Offices */}
            <div className="flex flex-col justify-center space-y-8 sm:space-y-10 text-center md:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                  Registered Office
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                  Binnamangala, Stage 1,
                  <br />
                  Indiranagar, Bengaluru,
                  <br />
                  Karnataka 560038
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                  Operating Office
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                  5/3, ESS CEE Building, MSR Industrial Area, 12th Main,
                  <br />
                  2nd Cross, Mathikere Extension,
                  <br />
                  Bengaluru, Karnataka 560054
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="w-full">
        {/* Join the Innovation */}
        <div className="text-center py-12 sm:py-16 lg:py-40 px-4 sm:px-6">
          <h3 className="text-green-700 font-semibold text-xl sm:text-2xl mb-4">
            Together, We Build What's Next
          </h3>
          <p className="text-green-700 max-w-5xl mx-auto text-sm sm:text-base md:text-lg tracking-wider leading-relaxed px-4">
            At GyaanKool Research Labs, every connection is an opportunity to
            learn, innovate, and impact lives. Reach out today let's co-create
            the future of AI in education, agriculture, and healthcare.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Contact;