import React from 'react';
import { motion } from 'framer-motion';
// Import icons from react-icons (pick your favorites)
import { FaReact, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiCplusplus } from 'react-icons/si';

const skillsData = [
  { name: 'JavaScript', level: 95 },
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'MongoDB', level: 80 },
  { name: 'C++', level: 75 },
  { name: 'Git & GitHub', level: 90 },
];

// List of tech icons to show (matching skills)
const techIcons = [
  { Icon: FaReact, name: 'React' },
  { Icon: FaNodeJs, name: 'Node.js' },
  { Icon: FaGitAlt, name: 'Git' },
  { Icon: SiCplusplus, name: 'Python' },
  { Icon: SiTailwindcss, name: 'Tailwind CSS' },
  { Icon: SiMongodb, name: 'MongoDB' },
];

const SkillsSection = () => {
  return (
    <section className="bg-[#212529] text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-green-400 to-lime-400 rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full blur-[120px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
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
            My Skills
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Crafting quality with <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">strong skills</span>
          </h2>
        </motion.div>

        {/* Skills List */}
        <div className="space-y-8 mb-16">
          {skillsData.map(({ name, level }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-white">{name}</span>
                <span className="font-semibold text-green-400">{level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.15 }}
                  className="h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-10"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {techIcons.map(({ Icon, name }, idx) => (
            <motion.div
              key={name}
              className="text-green-400 hover:text-teal-500 cursor-default"
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              title={name}
              style={{ fontSize: '3rem' }}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
