import React from 'react';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const EducationWorkSection = () => {
  const education = [
    {
      institution: 'Metropolitan University, Sylhet',
      degree: 'B.Sc. in Computer Science & Engineering (CSE)',
      years: 'Jul\'2023 - Present',
    },
    {
      institution: 'Sunamganj Govt. College',
      degree: 'Higher Secondary Certificate (HSC) – Science',
      years: '2020 - 2022',
    },
    {
      institution: 'Sunamganj Govt. Jubilee High School',
      degree: 'Secondary School Certificate (SSC) – Science',
      years: '2012 - 2020',
    },
  ];

  const experience = []; // No current experience yet

  return (
    <section id="education" className="bg-[#212529] text-white py-12 lg:py-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-20">
          <p className="text-green-400 text-lg mb-2 flex items-center justify-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Education & Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Foundation and growth: my{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">
              education & work
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-[#2c3034] p-8 rounded-lg shadow-lg relative overflow-hidden">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-md">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center pb-4 border-b border-gray-700 last:border-b-0"
                >
                  <div>
                    <p className="text-lg font-semibold text-white">{item.institution}</p>
                    <p className="text-gray-400 text-sm">{item.degree}</p>
                  </div>
                  <span className="bg-gradient-to-br from-green-400 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {item.years}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          {experience.length > 0 ? (
            <div className="bg-[#2c3034] p-8 rounded-lg shadow-lg relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-md">
                  <BriefcaseIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Work Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-4 border-b border-gray-700 last:border-b-0"
                  >
                    <div>
                      <p className="text-lg font-semibold text-white">{item.company}</p>
                      <p className="text-gray-400 text-sm">{item.position}</p>
                    </div>
                    <span className="bg-gradient-to-br from-green-400 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {item.years}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center p-8 text-gray-400 text-lg bg-[#2c3034] rounded-lg shadow-lg">
              <p>No professional experience to display yet. I'm excited to begin soon!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationWorkSection;
