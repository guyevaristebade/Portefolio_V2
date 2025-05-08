import React from "react";
import GithubIcons from "./icons/GithubIcons";
import NextJSIcons from "./icons/NextJSIcons";
import TailwindIcons from "./icons/TailwindIcon";
import PostgreIcon from "./icons/PostgreIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import JavaIcon from "./icons/JavaIcon";
import NodejsIcon from "./icons/NodejsIcon";
import ReactIcon from "./icons/ReactIcon";
import HTMLIcons from "./icons/HTMLIcons";

const Skills = () => {
  const skills = [
    <GithubIcons key="github" size={60} />,
    <NextJSIcons key="nextjs" size={60} />,
    <ReactIcon key="react" size={60} />,
    <HTMLIcons key="html" size={60} />,
    <TailwindIcons key="tailwind" size={60} />,
    <PostgreIcon key="postgres" size={60} />,
    <TypescriptIcon key="typescript" size={60} />,
    <JavaIcon key="java" size={60} />,
    <NodejsIcon key="nodejs" size={60} />,
  ];
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-center md:text-start">My skills</h2>
      <p className="text-sm text-white/80 text-center md:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia
        placeat .
      </p>
      <div className="grid grid-cols-3  lg:grid-cols-4 gap-6 max-h-[400px] overflow-auto">
        {skills.map((icon, key) => (
          <div
            key={key}
            className="flex items-center justify-center p-4 cursor-pointer bg-[#2c2b2b] hover:text-accent rounded-[5px] transition-all duration-500 ease-in-out"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
