import React from 'react';
import {
  Bars3Icon,
  DocumentTextIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Tools', to: 'tools' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleNavClick = (target) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 800,
          offset: -80,
        });
      }, 100); // delay to allow homepage DOM to load
    } else {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 800,
        offset: -80,
      });
    }
  };

  return (
    <div className="sticky top-0 z-[1000] bg-[#0d1128]/90 backdrop-blur-lg shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-full p-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">Ratul.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 bg-[#1c1f3b] p-2 rounded-full">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.to)}
                className="cursor-pointer px-3 py-1 rounded-full transition-colors text-white hover:text-green-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CV Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-gradient-to-br from-green-400 to-teal-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>

          {/* Mobile Menu - DaisyUI Dropdown */}
          <div className="lg:hidden dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <Bars3Icon className="h-6 w-6 text-white" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-[#1c1f3b] rounded-box w-60 z-[1000] space-y-2"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.to)}
                    className="text-white hover:text-green-400 transition w-full text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-green-400 to-teal-500 text-white text-center rounded-lg py-2 mt-2 hover:opacity-90"
                >
                  Download CV
                </a>
              </li>
              <li className="flex justify-around pt-2">
                <div className="bg-[#0d1128] p-2 rounded-lg hover:bg-green-500 transition">
                  <DocumentTextIcon className="w-5 h-5 text-white" />
                </div>
                <div className="bg-[#0d1128] p-2 rounded-lg hover:bg-green-500 transition">
                  <ShoppingCartIcon className="w-5 h-5 text-white" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
