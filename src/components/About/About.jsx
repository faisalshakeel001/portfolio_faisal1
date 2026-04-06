

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { FiArrowRight, FiDownload, FiCode } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 px-[5vw] md:px-[8vw] bg-[#050414] overflow-hidden"
    >
      {/* Structural Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8245ec]/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8245ec]/10 blur-[100px] rounded-full -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
        {/* Left Side: Visual & Stats (Column 1-5) */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.05}
              className="relative z-10"
            >
              <div className="relative aspect-square w-full max-w-[380px] mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-white/5 group shadow-2xl bg-[#0f1115]">
                <img
                  src="/profile2.jpg"
                  alt="Md Faisal Shakeel"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050414] via-transparent to-transparent opacity-40"></div>
              </div>
            </Tilt>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-4 -right-4 md:right-6 bg-[#0f1115]/90 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#8245ec]/20 flex items-center justify-center text-[#8245ec]">
                  <FiCode size={18} />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-none">
                    500+
                  </p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">
                    Commits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content (Column 6-12) */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8245ec]/10 border border-[#8245ec]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8245ec] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8245ec]"></span>
            </span>
            <span className="text-[#a855f7] text-[10px] font-bold uppercase tracking-[0.2em]">
              Available for New Projects
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2]">
              Building Scalable <br />
              <span className="text-gray-500 font-medium italic">
                Digital Solutions.
              </span>
            </h1>

            {/* FIXED HEIGHT BOX: Prevents Layout Shifting */}
            <div className="text-lg md:text-xl text-gray-400 font-light flex flex-wrap gap-x-2 min-h-[30px] md:min-h-[40px] items-center">
              <span>I'm</span>
              <span className="text-white font-semibold">Md Faisal Shakeel,</span>
              <span>a</span>
              <div className="inline-block min-w-[180px]">
                <TypeAnimation
                  sequence={[
                    "Fullstack Developer",
                    2000,
                    "Python Expert",
                    2000,
                    "OpenCV Specialist",
                    2000,
                  ]}
                  repeat={Infinity}
                  className="text-[#8245ec] font-bold"
                />
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl font-light">
            Specializing in the{" "}
            <span className="text-white font-normal text-opacity-80">
              MERN Stack
            </span>{" "}
            and
            <span className="text-white font-normal text-opacity-80">
              {" "}
              Computer Vision
            </span>
            . I bridge the gap between aesthetic frontend design and complex
            backend logic to create seamless user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#8245ec] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-[#9d66f1] shadow-[0_10px_20px_rgba(130,69,236,0.2)] active:scale-95 group"
            >
              Start a Project
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-white/10 active:scale-95"
            >
              <FiDownload size={16} />
              Resume
            </a>
          </div>

          {/* Minimalist Tech Stack Row */}
          <div className="pt-8 flex items-center gap-6 opacity-30 hover:opacity-100 transition-opacity duration-500">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
              Core Tech
            </p>
            <div className="h-[1px] w-8 bg-gray-800"></div>
            <div className="flex gap-4 text-white text-[11px] font-bold uppercase tracking-tighter">
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
