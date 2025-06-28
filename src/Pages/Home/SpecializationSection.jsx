import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const specialties = [
  {
    title: 'Full Stack Web Development',
    icon: '🖥️',
    desc: 'Frontend & Backend with React, Node, MongoDB',
  },
  {
    title: 'MERN Stack Projects',
    icon: '⚙️',
    desc: 'Modern apps with MongoDB, Express, React, and Node.js',
  },
  {
    title: 'Authentication Systems',
    icon: '🔐',
    desc: 'Secure login using Firebase & JWT',
  },
  {
    title: 'UI/UX Design',
    icon: '🎨',
    desc: 'Clean, responsive interfaces with Tailwind + Figma inspiration',
  },
  {
    title: 'AI & Machine Learning',
    icon: '🧠',
    desc: 'Currently learning and building ML-powered features',
  },
  {
    title: 'Debating & Communication',
    icon: '🎤',
    desc: 'Experienced debater and public speaker',
  },
  {
    title: 'Project Leadership',
    icon: '👨‍💼',
    desc: 'Leading SDS, RATUL ART.In, and university projects',
  },
];

const SpecializationSection = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-visible  font-inter ">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 " />
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <p className="text-lime-400 text-sm font-semibold flex items-center mb-2">
              <span className="w-2 h-2 rounded-full bg-lime-400 mr-2 animate-pulse" />
              My Specialization
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug">
              What I <span className="bg-gradient-to-r from-lime-300 to-yellow-300 text-transparent bg-clip-text">Excel At</span>
            </h2>
          </div>
          <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
            <p className="mb-4 sm:mb-6">
              Beyond just coding, I build full-scale solutions — blending development, design, strategy, and communication.
            </p>
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-br from-green-400 to-lime-400 text-white font-medium hover:opacity-90 transition-all">
              Explore My Work
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          navigation
          className=" "
        >
          {specialties.map((item, index) => (
            <SwiperSlide key={index} className="">
              <div className="bg-[#1a1f2b] p-6 sm:p-8 rounded-3xl h-full group relative  border border-transparent hover:border-lime-400 transition-all duration-300 shadow-xl  hover:shadow-2xl flex flex-col justify-between    ">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                <div className="flex justify-between items-start mb-4 sm:mb-6 relative z-40">
                  <div className="text-4xl sm:text-5xl">{item.icon}</div>
                  <button className="bg-white/10 p-2 rounded-full text-white hover:bg-lime-400 hover:text-gray-900 transition transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowLongRightIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="relative z-40">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-lime-300 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Bottom */}
        <div className="text-center text-gray-400 text-sm sm:text-base mt-16 sm:mt-20 max-w-2xl mx-auto px-2">
          Ready to build something extraordinary?{' '}
          <span className="bg-gradient-to-r from-green-400 to-lime-300 text-transparent bg-clip-text font-semibold">
            Let’s create the future together.
          </span>
        </div>
      </div>

      {/* Keyframes for blobs */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default SpecializationSection;
