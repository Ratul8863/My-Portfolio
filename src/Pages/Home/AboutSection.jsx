import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, TrophyIcon, LightBulbIcon } from '@heroicons/react/24/solid';

const AboutSection = () => {
  return (
    <section className="bg-[#212529] text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-green-400 to-lime-400 rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full blur-[120px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-green-400 text-lg mb-2 flex items-center justify-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            About Me
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Creative, passionate, and always <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">learning</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I’m <span className="text-white font-semibold">Ratul Saha Roy</span>, a full-stack developer and active debater based in Bangladesh.
              I enjoy building web applications that are both functional and beautiful. Outside of coding, you’ll find me expressing ideas through debate and working with teams to bring impactful visions to life.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <UserIcon className="w-6 h-6 text-green-400" />
                <span>Passionate Full-Stack Developer</span>
              </li>
              <li className="flex items-center space-x-3">
                <TrophyIcon className="w-6 h-6 text-green-400" />
                <span>Experienced Debater & Public Speaker</span>
              </li>
              <li className="flex items-center space-x-3">
                <LightBulbIcon className="w-6 h-6 text-green-400" />
                <span>Lifelong Learner in AI & Machine Learning</span>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-br from-green-400 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Let’s Talk
              </a>
            </div>
          </motion.div>

          {/* Optional Image or Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-xl overflow-hidden border-4 border-green-400 shadow-xl">
              <img
                src="https://placehold.co/300x300/2c3034/FFFFFF?text=Ratul"
                alt="Ratul Saha Roy"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
