import React from 'react';
import { PlayCircleIcon, PlusIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'; // Social Icons
import profile from "../../assets/profilebanner.png"; // Replace with your real image if available
import { useNavigate } from 'react-router';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center py-8 sm:py-10 lg:py-2">
    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center relative z-10">

        {/* Left Content Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-200 text-center lg:text-left mb-10 lg:mb-0 pr-0  max-w-full "
        >
          <p className="text-green-400 text-base sm:text-lg mb-2 flex items-center justify-center lg:justify-start">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Code meets creativity — by Ratul Saha Roy
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">
              Ratul, <br />
            </span>{' '}
            <span className="inline-block">
              <Typewriter
                words={["Full Stack Developer", "Competitive Programmer"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
         <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
  I'm Ratul Saha Roy, a full stack developer from  Sylhet. I build modern, user-focused web applications using JavaScript and the MERN stack. I'm also actively involved in competitive programming with C++, regularly solving problems on Codeforces to sharpen my algorithmic thinking.
</p>

          <div className="flex justify-center lg:justify-start space-x-4 flex-wrap mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-400 to-teal-500 text-white px-6 sm:px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-base sm:text-lg font-semibold whitespace-nowrap"
              onClick={() => navigate('/projects')}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-white border border-gray-600 px-5 sm:px-6 py-3 rounded-full hover:bg-gray-700 transition-colors text-base sm:text-lg whitespace-nowrap mt-2 lg:mt-0"
              onClick={() => {
                // handle watch intro click
              }}
            >
              <a
            href="/resume.pdf"  // Replace with your actual resume URL or path
            download
          >
            Download Resume
          </a>

            </motion.button>
          </div>

          {/* Resume Download Button */}
         
          {/* Social Links */}
          <div className="flex space-x-6 justify-center lg:justify-start text-white text-2xl">
            <a
              href="https://github.com/Ratul8863" // replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-green-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ratul-saha-roy/" // replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/RatulSahaRoy" // replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-green-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/RATUL.BILLIBER" // replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-green-400 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        {/* Right Image and Overlays Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center items-center relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0 px-4 sm:px-0"
        >
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400 to-lime-400 rounded-full opacity-40 blur-2xl z-0"></div>

          <img
            src={profile}
            alt="Ratul Saha Roy - Full Stack Developer"
            className="
              w-[560px] h-[560px]
              sm:w-[680px] sm:h-[680px]
              md:w-[800px] md:h-[800px]
              lg:w-[900px] lg:h-[900px]
              object-cover rounded-full z-10 -mt-70 md:-mt-100 transform -translate-y-6 sm:-translate-y-8 lg:-translate-y-12
            "
          />

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.4 }}
            className="absolute top-10 sm:top-12 -right-3 sm:-right-4 md:top-24 md:right-16 lg:top-1/4 lg:right-12  bg-transparent text-gray-800 p-3 sm:p-4 rounded-lg shadow-xl text-center z-20 transform -rotate-6 min-w-[70px] sm:min-w-[90px]"
          >
            <p className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500 mb-1">
              MERN
            </p>
            <p className="text-xs text-amber-100 sm:text-sm">Stack</p>
            <p className="text-xs text-amber-100 sm:text-sm">Developer</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-12 sm:bottom-16 -left-3 sm:-left-4 md:bottom-24 md:left-16 lg:bottom-1/4 lg:left-12 bg-gradient-to-r from-green-400 to-teal-500 text-gray-800 p-2.5 sm:p-3 rounded-lg shadow-xl flex items-center space-x-1 sm:space-x-2 z-20 transform rotate-3 min-w-[110px]"
          >
            <p className="text-xs sm:text-sm font-semibold whitespace-nowrap">Connected with</p>
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba65f8?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Client"
              />
              <img
                className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Client"
              />
              <img
                className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="Client"
              />
              <span className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gray-200 ring-2 ring-white text-gray-600 text-xs sm:text-sm font-medium">
                <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
