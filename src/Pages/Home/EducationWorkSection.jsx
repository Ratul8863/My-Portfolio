import React from 'react';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'; // Icons for education and work

const EducationWorkSection = () => {
  // Define your educational background data
  const education = [
    {
      institution: 'University of XYZ', // Replace with your university name
      degree: 'Bachelor of Science in Computer Science', // Replace with your degree
      years: '2020 - 2024', // Replace with your years
    },
    {
      institution: 'ABC College', // Replace with your college name
      degree: 'Higher Secondary Certificate (HSC)', // Replace with your certificate
      years: '2018 - 2020', // Replace with your years
    },
    // You can add more educational entries if needed
    // {
    //   institution: 'Another Institute',
    //   degree: 'Another Degree',
    //   years: 'YYYY - YYYY',
    // },
  ];

  // Since you mentioned you don't have experience, this array will be empty.
  // If you add experience later, populate this.
  const experience = [];

  return (
    <section className="bg-[#212529] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Gradients/Shapes - consistent with other sections */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section: Title and Subtitle */}
        <div className="text-center mb-12 lg:mb-20">
          <p className="text-green-400 text-lg mb-2 flex items-center justify-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Education & Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Foundation and growth: my <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">education & work</span>
          </h2>
        </div>

        {/* Education and Work Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Education Card */}
          <div className="bg-[#2c3034] p-8 rounded-lg shadow-lg relative overflow-hidden">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-md">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-700 last:border-b-0">
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

          {/* Work Experience Card (Conditionally Rendered) */}
          {experience.length > 0 && ( // Only render if there's experience
            <div className="bg-[#2c3034] p-8 rounded-lg shadow-lg relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-md">
                  <BriefcaseIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Work experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-700 last:border-b-0">
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
          )}

          {/* If no experience, you might want to show a message or just leave the space empty,
              or remove the grid if only one card is present always on desktop.
              For now, the grid will adapt, and if no experience, it will just be the education card. */}
          {experience.length === 0 && (
              <div className="flex items-center justify-center p-8 text-gray-400 text-lg">
                <p>No professional experience to display yet. Looking forward to gaining some!</p>
              </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default EducationWorkSection;
