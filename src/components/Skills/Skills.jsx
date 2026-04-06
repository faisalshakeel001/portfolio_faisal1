// // import React from "react";
// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// const Skills = () => (
//   <section
//     id="skills"
//     className="py-24 px-[5vw] md:px-[10vw] lg:px-[15vw] bg-skills-gradient clip-path-custom"
//   >
//     {/* Section Header */}
//     <div className="text-center mb-16">
//       {/* Reduced font size and added tighter tracking for a high-end feel */}
//       <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
//         Technical{" "}
//         <span className="text-[#8245ec] font-bold">Proficiencies</span>
//       </h2>
//       <div className="w-16 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full opacity-80"></div>
//       <p className="text-gray-400 mt-5 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
//         A curated list of technologies and tools I use to bring digital ideas to
//         life.
//       </p>
//     </div>

//     {/* Skill Categories Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//       {SkillsInfo.map((category) => (
//         <Tilt
//           key={category.title}
//           tiltMaxAngleX={4}
//           tiltMaxAngleY={4}
//           perspective={1200}
//           scale={1.01}
//           transitionSpeed={2000}
//           className="h-full"
//         >
//           <div className="h-full bg-gray-900/40 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/5 hover:border-[#8245ec]/30 transition-all duration-700 shadow-2xl hover:shadow-[0_20px_50px_rgba(130,69,236,0.1)]">
//             <h3 className="text-lg font-medium text-gray-400 mb-8 text-center uppercase tracking-[0.2em]">
//               {category.title}
//             </h3>

//             <div className="flex flex-wrap justify-center gap-3">
//               {category.skills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="group flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl py-2 px-4 hover:bg-[#8245ec]/10 hover:border-[#8245ec]/50 transition-all duration-300"
//                 >
//                   <img
//                     src={skill.logo}
//                     alt={skill.name}
//                     className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 object-contain"
//                   />
//                   <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
//                     {skill.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Tilt>
//       ))}
//     </div>
//   </section>
// );

// export default Skills;

import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[5vw] md:px-[10vw] lg:px-[15vw] bg-skills-gradient clip-path-custom"
  >
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
        Technical{" "}
        <span className="text-[#8245ec] font-bold">Proficiencies</span>
      </h2>
      <div className="w-16 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full opacity-80"></div>
      <p className="text-gray-400 mt-5 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
        A curated list of technologies and tools I use to bring digital ideas to
        life.
      </p>
    </div>

    {/* Skill Categories Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          perspective={1200}
          scale={1.02}
          transitionSpeed={1500}
          className="h-full"
        >
          {/* Main Card Container with Relative positioning for the Glow */}
          <div className="relative group h-full">
            {/* Background Glow Layer (Matches About.jsx Profile Glow) */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

            {/* Content Card */}
            <div className="relative h-full bg-gray-900/60 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/5 group-hover:border-[#8245ec]/40 transition-all duration-500 shadow-2xl overflow-hidden">
              <h3 className="text-sm font-medium text-gray-500 mb-8 text-center uppercase tracking-[0.3em] group-hover:text-gray-300 transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl py-2 px-4 hover:bg-[#8245ec]/10 hover:border-[#8245ec]/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5 opacity-60 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300 object-contain"
                    />
                    <span className="text-xs md:text-sm font-medium text-gray-400 group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;