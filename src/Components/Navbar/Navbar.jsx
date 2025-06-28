import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, DocumentTextIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'; // For icons
import { div } from 'framer-motion/client';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', dropdown: true },
    { name: 'About Us', dropdown: false },
    { name: 'Services', dropdown: false },
    { name: 'Blog', dropdown: false },
    { name: 'Pages', dropdown: true },
    { name: 'Contact Us', dropdown: false },
  ];

  return (
   <div className='sticky top-0 z-500'>
     <nav className="  max-w-7xl mx-auto   px-4 md:px-4 py-4"> {/* Added relative z-50 for dropdowns/mobile menu */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-full p-2">
            {/* Replace with your actual logo SVG or image */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">Pixion.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 bg-[#2c3034] p-2 rounded-full">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a href="#" className="flex items-center hover:text-gray-300 px-3 py-1 rounded-full transition-colors">
                {link.name}
                {link.dropdown && (
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                )}
              </a>
              {/* Basic Dropdown Content - DaisyUI dropdown component recommended for richer features */}
              {link.dropdown && (
                <div className="absolute hidden group-hover:block bg-gray-700 text-white rounded-md shadow-lg py-2 mt-2 w-40 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Sub-item 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Sub-item 2</a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Download CV Button (Desktop) */}
        <button className="hidden lg:block bg-gradient-to-br from-green-400 to-teal-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
          Download CV
        </button>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-white bg-gradient-to-br from-green-400 to-teal-500 rounded-lg p-1" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white bg-gradient-to-br from-green-400 to-teal-500 rounded-lg p-1" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide-in Drawer) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-purple-400 to-teal-400 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden z-[999] p-4 flex flex-col`} // z-index to be on top
      >
        <div className="flex justify-end mb-8"> {/* Added margin-bottom for spacing */}
          <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none">
            <XMarkIcon className="h-8 w-8 bg-black bg-opacity-40 rounded-md p-1" />
          </button>
        </div>
        <ul className="flex flex-col items-start space-y-4 flex-grow"> {/* flex-grow to push icons to bottom */}
          {navLinks.map((link) => (
            <li key={link.name} className="w-full">
              <a href="#" className="block px-4 py-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
                {link.name}
              </a>
              {/* You might want to add a collapsable menu for dropdowns on mobile */}
            </li>
          ))}
          <li className="w-full mt-8"> {/* Added margin-top to separate from links */}
            <button className="w-full bg-gradient-to-br from-green-400 to-teal-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Download CV
            </button>
          </li>
        </ul>
        {/* Additional Icons on the right side of the mobile menu */}
        <div className="flex flex-col items-end space-y-4 pr-4 py-4"> {/* Adjusted padding */}
            <div className="bg-white bg-opacity-20 p-3 rounded-lg cursor-pointer hover:bg-opacity-30 transition-colors">
                <DocumentTextIcon className="w-6 h-6 text-white" />
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg cursor-pointer hover:bg-opacity-30 transition-colors">
                <ShoppingCartIcon className="w-6 h-6 text-white" />
            </div>
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;