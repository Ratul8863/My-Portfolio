import React, { useEffect, useState } from 'react';
import projectData from '../../data/projectData.json';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#212529] text-white py-8 lg:py-20 relative overflow-hidden"
    >
      {/* Background Gradient Blob */}
     
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-green-400 font-semibold uppercase tracking-wider mb-2">
            Explore
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text  pb-2 text-transparent bg-gradient-to-r from-green-400 to-lime-400">
            My Recent Projects
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm">
            Each project reflects my passion for user-focused full-stack development, powered by the MERN stack and creative frontend design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#2c3034] rounded-xl overflow-hidden shadow-xl relative group hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{project.type}</p>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-green-400 to-teal-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300"
                >
                  View Details
                  <ArrowLongRightIcon className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
