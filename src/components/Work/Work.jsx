import React, { useState } from "react";
import { projects } from "../../constants";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[5vw] md:px-[10vw] lg:px-[12vw] bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
          Featured <span className="text-[#8245ec] font-bold">Projects</span>
        </h2>
        <div className="w-12 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full opacity-60"></div>
        <p className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl mx-auto font-light">
          A collection of my technical work ranging from Fullstack Development
          to AI and Computer Vision.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-[#0f1115]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#8245ec]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Project Image Container */}
            <div className="p-4">
              <div className="relative h-52 w-full overflow-hidden rounded-[1.5rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    View Details
                  </span>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="px-7 pb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold text-[#a855f7] uppercase tracking-widest bg-[#8245ec]/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#8245ec] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mt-3 line-clamp-2 font-light leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050414]/90 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-[#0f1115] border border-white/10 rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
            >
              <FiX size={24} />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Left: Image */}
              <div className="lg:w-1/2 p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-[1.8rem] shadow-2xl"
                />
              </div>

              {/* Right: Details */}
              <div className="lg:w-1/2 p-8 lg:pl-4 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold text-gray-400 border border-white/10 px-2 py-1 rounded uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 leading-relaxed mb-8 font-light">
                  {selectedProject.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3 rounded-2xl border border-white/10 transition-all font-semibold"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#8245ec] hover:bg-[#a855f7] text-white py-3 rounded-2xl transition-all shadow-[0_10px_20px_rgba(130,69,236,0.3)] font-semibold"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
