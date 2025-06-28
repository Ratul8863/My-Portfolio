import React, { useEffect, useState } from 'react';
import projectData from '../../data/projectData.json'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching from JSON
    setProjects(projectData);
  }, []);

  return (
    <section className="bg-[#212529] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* ... Top and background elements ... */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Title section ... */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#2c3034] rounded-lg overflow-hidden shadow-lg relative group hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.type}</p>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="mt-6 bg-gradient-to-br from-green-400 to-teal-500 text-white px-6 py-2 rounded-full
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0"
                >
                  View More / Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
