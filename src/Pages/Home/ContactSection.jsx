import React from 'react';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'; // Icons for address and phone

const ContactSection = () => {
  return (
    <section className="bg-[#212529] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Gradients/Shapes - consistent with other sections, slightly subtle */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-0 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full opacity-0 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left Column: Contact Details and Title */}
        <div className="text-center lg:text-left">
          <p className="text-green-400 text-lg mb-2 flex items-center justify-center lg:justify-start">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Contact Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Get in touch to discuss <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">your next project</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-xl lg:mx-0 mx-auto">
            Are you ready to take your project to the next level? Whether you're
            looking for a new website a web application, or simply need advice.
          </p>

          {/* Contact Information */}
          <div className="space-y-8 mb-12">
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-full flex-shrink-0">
                <MapPinIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Address</p>
                <p className="text-white text-lg font-semibold">2972 Westheimer Rd. Santa Ana, New York, USA</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-full flex-shrink-0">
                <PhoneIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone Number</p>
                <p className="text-white text-lg font-semibold">+1 (123) 456-789</p>
              </div>
            </div>
            {/* WhatsApp (Optional) - Add similar block if needed */}
            {/*
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-full flex-shrink-0">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" /> // You'd need to import ChatBubbleLeftRightIcon from heroicons
              </div>
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="text-white text-lg font-semibold">+1 (987) 654-321</p>
              </div>
            </div>
            */}
          </div>

          {/* "View My Resume" Circular Button */}
          {/* Using inline SVG for the circular text effect as it's complex with Tailwind alone */}
          <div className="flex justify-center lg:justify-start mt-8">
            <a href="#" className="relative w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-teal-500 group">
              <span className="text-white font-semibold text-sm rotate-animation" style={{ animation: 'rotateText 10s linear infinite' }}>
                <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                  <path id="circlePath" fill="none" strokeWidth="0" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                  <text>
                    <textPath href="#circlePath" className="text-white text-[12px] font-semibold tracking-wide">
                      VIEW MY RESUME • VIEW MY RESUME •
                    </textPath>
                  </text>
                </svg>
              </span>
              {/* Optional: Add an icon in the center if desired */}
              {/* <DocumentTextIcon className="w-8 h-8 text-white relative z-10" /> */}
            </a>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-[#2c3034] p-8 lg:p-12 rounded-lg shadow-xl">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Fill out the form below to connect with me. I'll get back to you soon
            to discuss your project or answer any questions.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#212529] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#212529] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#212529] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-[#212529] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full bg-[#212529] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-y"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-green-400 to-teal-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-lg font-semibold"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
