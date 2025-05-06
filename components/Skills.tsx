import React from "react";
import GithubIcons from "./icons/GithubIcons";

const Skills = () => {
  const skills = [
    <GithubIcons key="github" />,
    <GithubIcons key="github-2" />,
    <GithubIcons key="github-3" />,
    <GithubIcons key="github-4" />,
    <GithubIcons key="github-5" />,
    <GithubIcons key="github-6" />,
    <GithubIcons key="github-7" />,
    <GithubIcons key="github-8" />,
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
