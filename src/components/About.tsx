"use client";

import StarsCanvas from "./Stars";

const About = () => {
  return (
    <div className="w-full h-full relative" id="about">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4">
          About <span className="text-green-700">Me</span>
        </h1>
        {/* <p className="text-center text-3xl pb-10 max-w-[500px] mx-auto mt-8 text-white ">
          I am a full-stack{" "}
          <span className="font-semibold italic">(and nature lover)</span>{" "}
          software developer
        </p> */}
        <div className="flex flex-col gap-6 items-center justify-center w-full max-w-[800px] mx-auto">
          <div className="w-full relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-gray-700 to-black/10 opacity-30 animate-gradient-xy"></div>

            <div className="flex flex-row p-6">
              <div className="flex flex-col mt-4">
          <h2 className="text-2xl font-bold text-white">Education</h2>
          <p className="text-lg text-white/90 mt-2">
            <ul>
              <li>Enviromental scientist at ITM</li>
              <li>Coder at Riwi</li>
            </ul>
          </p>
              </div>
            </div>
          </div>
          <div className="w-full relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-gray-700 to-black/10 opacity-30 animate-gradient-xy"></div>

            <div className="flex flex-row p-6">
              <div className="flex flex-col mt-4">
          <h2 className="text-2xl font-bold text-white">Soft skills</h2>
          <ul className="text-lg text-white/90 mt-2 list-disc list-inside">
            <li>Assertive Communication</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Problem Solving</li>
            <li>Critical Thinking</li>
            <li>Curiosity and Self-learning</li>
            <li>Empathy</li>
            <li>Leadership</li> 
          </ul>
              </div>
            </div>
          </div>
          <div className="w-full relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-gray-700 to-black/10 opacity-30 animate-gradient-xy"></div>

            <div className="flex flex-row p-6">
              <div className="flex flex-col mt-4">
          <h2 className="text-2xl font-bold text-white">Experience</h2>
          <p className="text-lg text-white/90 mt-2">Academic research</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StarsCanvas />
    </div>
  );
};

export default About;
