import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#050414] pt-20 pb-10 px-[5vw] md:px-[10vw] border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#8245ec]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Side */}
          <div className="space-y-4 max-w-xs">
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              Faisal<span className="text-[#8245ec]">.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building digital products with a focus on clean code, scalable
              architecture, and exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-20">
            <div className="flex flex-col space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Navigation
              </h4>
              {[
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-gray-500 hover:text-[#8245ec] text-sm text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Social
              </h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/yourusername",
                  },
                  {
                    icon: <FaLinkedin />,
                    link: "https://linkedin.com/in/yourusername",
                  },
                  {
                    icon: <FaTwitter />,
                    link: "https://twitter.com/yourusername",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white text-lg transition-all hover:-translate-y-1"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <p className="text-xs text-gray-600 tracking-wide">
            © {currentYear} MD FAISAL SHAKEEL. Built with React & Tailwind.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-all"
          >
            Back to top
            <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
