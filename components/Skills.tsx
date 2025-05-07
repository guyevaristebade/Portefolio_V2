import React from "react";
import GithubIcons from "./icons/GithubIcons";
import NextJSIcons from "./icons/NextJSIcons";
import TailwindIcons from "./icons/TailwindIcon";
import PostgreIcon from "./icons/PostgreIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import JavaIcon from "./icons/JavaIcon";

const Skills = () => {
  const skills = [
    <GithubIcons key="github" size={100} />,
    <NextJSIcons key="nextjs" size={100} />,
    <TailwindIcons key="tailwind" size={100} />,
    <PostgreIcon key="postgres" size={100} />,
    <TypescriptIcon key="typescript" size={100} />,
    <JavaIcon key="java" size={100} />,
  ];
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-center md:text-start">My skills</h2>
      <p className="text-sm text-white/80 text-center md:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia
        placeat .
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[400px] overflow-auto">
        {skills.map((icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 cursor-pointer bg-[#333] hover:text-accent rounded-[5px] transition-all duration-500 ease-in-out"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
