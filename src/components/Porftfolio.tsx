"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import parching from "../assets/parchingapp.png";
import spot from "../assets/spot.png";
import project1 from "../assets/proj1.jpg";
import project2 from "../assets/proj2.jpg";
import project3 from "../assets/proj3.png";
import project4 from "../assets/proj4.jpg";
import StarsCanvas from "./Stars";

const projects = [
  {
    title: "ParchingApp",
    description: "Parching App is a platform that connects people with shared interests through social events and outdoor activities.",
    devStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    link: "https://parchingapp.vercel.app/",
    gitLiknk: "https://github.com/sebasmzg/parching_frontend",
    src: parching,
  },
  {
    title: "Spot",
    description: "Is a platform that connects people with shared interests through social events and outdoor activities.",
    devStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    link: "#",
    gitLiknk: "https://github.com/sebasmzg/Spot.git",
    src: spot,
  },
  {
    title: "Project 1",
    description: "This is a description of project 1",
    devStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    link: "#",
    gitLiknk: "#",
    src: project1,
  },
  {
    title: "Project 2",
    description: "This is a description of project 2",
    devStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    link: "#",
    gitLiknk: "#",
    src: project2,
  },
  {
    title: "Project 3",
    description: "This is a description of project 3",
    devStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    link: "#",
    gitLiknk: "#",
    src: project3,
  },
  {
    title: "Project 4",
    description: "This is a description of project 4",
    devStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    link: "#",
    gitLiknk: "#",
    src: project4,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white relative py-18 pt-52"
      id="#portfolio"
    >
      <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-green-700">Projects</span>
      </h1>

      <div className="max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex ${
              index % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse gap-12"
                : "flex-col md:flex-row gap-12"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4 ">
                {project.description}
              </p>
              <p className="text-xl text-green-700 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.gitLiknk} className="mr-6">
                  Git
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] objet-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <StarsCanvas />
    </div>
  );
};

export default Portfolio;
