
import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-[5vw] md:px-[10vw] lg:px-[15vw] bg-skills-gradient"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
          Professional{" "}
          <span className="text-[#8245ec] font-bold">Experience</span>
        </h2>
        <div className="w-12 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full opacity-50"></div>
      </div>

      {/* Experience Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Centered Vertical Line (Desktop Only) */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-[1px] bg-white/10 h-full"></div>

        {/* Experience Entries */}
        <div className="space-y-12 md:space-y-4">
          {" "}
          {/* Reduced vertical gap */}
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot (Desktop Only) */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#8245ec] rounded-full border-4 border-[#0f1115] z-10 shadow-[0_0_10px_#8245ec]"></div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] group">
                <div className="relative p-6 md:p-8 rounded-[1.5rem] bg-[#111418]/90 backdrop-blur-3xl border border-white/5 transition-all duration-500 hover:border-[#8245ec]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  {/* Internal Logo & Header Group */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex justify-center items-center p-1.5 shadow-inner">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                        {experience.role}
                      </h3>
                      <p className="text-[#8245ec] text-sm font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    {experience.date}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">
                    {experience.desc}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2.5 py-1 bg-[#8245ec]/5 border border-[#8245ec]/10 text-gray-400 rounded-md group-hover:text-white group-hover:border-[#8245ec]/30 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;