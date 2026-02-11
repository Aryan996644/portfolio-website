// client/src/components/ProjectModal.jsx
import React from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <div className="bg-[#0f172a] max-w-xl w-full p-6 rounded-xl relative text-white border border-white/10">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400"
        >
          <FaTimes size={20} />
        </button>

        {/* Title & Description */}
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-contain bg-white/10 p-2 rounded mb-4"
        />

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="font-semibold mb-1">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-white/10 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
          >
            <FaGithub /> Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-gradient-to-r from-green-400 to-blue-500 px-3 py-1 rounded text-white"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
