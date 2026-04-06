// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detect scroll and change navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll
//   const handleMenuItemClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "work", label: "Projects" },
//     { id: "education", label: "Education" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition duration-300 px-4 md:px-8 lg:px-20 ${
//         isScrolled
//           ? "bg-[#050414] bg-opacity-70 backdrop-blur-md shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="text-white py-5 flex justify-between items-center max-w-[1440px] mx-auto">
//         {/* Logo */}
//         <div className="text-lg font-semibold cursor-pointer">
//           <span className="text-[#8245ec]">&lt;</span>
//           <span className="text-white">Aizah</span>
//           <span className="text-[#8245ec]">/</span>
//           <span className="text-white">Sarfaraz</span>
//           <span className="text-[#8245ec]">&gt;</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-300">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               className={`cursor-pointer hover:text-[#8245ec] ${
//                 activeSection === item.id ? "text-[#8245ec]" : ""
//               }`}
//             >
//               <button onClick={() => handleMenuItemClick(item.id)}>
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons */}
//         <div className="hidden md:flex space-x-4">
//           <a
//             href="https://github.com/codingmastr"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <FaGithub size={24} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <FaLinkedin size={24} />
//           </a>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           {isOpen ? (
//             <FiX
//               className="text-3xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           ) : (
//             <FiMenu
//               className="text-3xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Items */}
//       {isOpen && (
//         <div className="md:hidden w-full bg-[#050414] bg-opacity-90 backdrop-blur-lg shadow-lg">
//           <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`cursor-pointer hover:text-white ${
//                   activeSection === item.id ? "text-[#8245ec]" : ""
//                 }`}
//               >
//                 <button
//                   className="text-lg font-medium"
//                   onClick={() => handleMenuItemClick(item.id)}
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//             <div className="flex space-x-4 mt-2">
//               <a
//                 href="https://github.com/codingmastr"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white"
//               >
//                 <FaGithub size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-6 md:px-12 lg:px-24 ${
        isScrolled
          ? "py-3 bg-[#050414]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        {/* Modern Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-tighter cursor-pointer group"
        >
          <span className="text-[#8245ec] group-hover:text-white transition-colors duration-300">
            A
          </span>
          <span className="text-white group-hover:text-[#8245ec] transition-colors duration-300">
            S
          </span>
          <span className="ml-2 text-xs font-medium tracking-[0.3em] uppercase text-gray-500 hidden sm:inline-block group-hover:text-gray-300 transition-colors">
            Portfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-[#8245ec]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
                {/* Active Indicator Underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#8245ec] transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Social Icons with Glow Hover */}
          <div className="flex items-center space-x-5 border-l border-white/10 pl-10">
            <a
              href="https://github.com/faisalshakeel001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(130,69,236,0.8)] transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aizah-se?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#8245ec] hover:drop-shadow-[0_0_8px_rgba(130,69,236,0.8)] transition-all"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white bg-white/5 rounded-lg border border-white/10"
          >
            {isOpen ? (
              <FiX size={24} className="text-[#8245ec]" />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] w-full bg-[#050414]/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-[60vh] text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`text-2xl font-semibold tracking-widest uppercase transition-all ${
                  activeSection === item.id
                    ? "text-[#8245ec]"
                    : "hover:text-white"
                }`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <div className="flex space-x-8 pt-6 border-t border-white/10 w-1/2 justify-center">
            <a
              href="https://github.com/faisalshakeel001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/aizah-se?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
