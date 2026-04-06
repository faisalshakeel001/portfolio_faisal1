// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are
//           the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;
import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[5vw] md:px-[10vw] lg:px-[15vw] bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
          Academic <span className="text-[#8245ec] font-bold">Background</span>
        </h2>
        <div className="w-12 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full opacity-60"></div>
        <p className="text-gray-400 mt-6 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
          My education has been a journey of self-discovery and technical
          specialization.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Minimalist Vertical Line */}
        <div className="absolute sm:left-1/2 left-6 transform -translate-x-1/2 w-[1px] bg-white/10 h-full"></div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#8245ec] rounded-full border-4 border-[#050414] z-10 shadow-[0_0_10px_#8245ec]"></div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] ml-12 md:ml-0 group">
                <div className="relative p-6 md:p-8 rounded-[1.5rem] bg-[#0f1115]/80 backdrop-blur-3xl border border-white/5 transition-all duration-500 hover:border-[#8245ec]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  {/* Internal Logo & Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex justify-center items-center p-1 shadow-inner overflow-hidden">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-[#8245ec] text-sm font-medium mt-1">
                        {edu.school}
                      </p>
                      <span className="text-[10px] text-gray-500 uppercase tracking-[0.1em] mt-1 font-bold">
                        {edu.date}
                      </span>
                    </div>
                  </div>

                  {/* Description & Grade */}
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {edu.desc}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#8245ec]/10 border border-[#8245ec]/20">
                      <span className="text-[10px] font-bold text-[#a855f7] uppercase tracking-wider">
                        Grade:
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <div className="w-8 h-8 border-t-2 border-r-2 border-[#8245ec] rounded-tr-lg"></div>
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

export default Education;