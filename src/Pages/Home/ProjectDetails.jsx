import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../../data/projectData.json';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);

  if (!project) return <div className="text-white text-center mt-10">Project not found</div>;

  const { name, image, details } = project;

  return (
    <div className="min-h-screen bg-[#0D1128] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <img src={image} alt={name} className="w-full rounded-xl mb-8" />
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <p className="mb-4 text-gray-300">{details.description}</p>

        <h2 className="text-xl font-semibold mt-6">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-400">
          {details.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6">Challenges</h2>
        <ul className="list-disc list-inside text-gray-400">
          {details.challenges.map((challenge) => (
            <li key={challenge}>{challenge}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6">Improvements</h2>
        <ul className="list-disc list-inside text-gray-400">
          {details.improvements.map((improve) => (
            <li key={improve}>{improve}</li>
          ))}
        </ul>

        <div className="mt-6 flex gap-4">
          <a
            href={details.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
          >
            Live Site
          </a>
          <a
            href={details.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
