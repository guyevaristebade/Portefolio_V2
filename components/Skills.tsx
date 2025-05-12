import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import GithubIcons from "./icons/GithubIcons";
import NextJSIcons from "./icons/NextJSIcons";
import TailwindIcons from "./icons/TailwindIcon";
import PostgreIcon from "./icons/PostgreIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import JavaIcon from "./icons/JavaIcon";
import NodejsIcon from "./icons/NodejsIcon";
import ReactIcon from "./icons/ReactIcon";
import HTMLIcons from "./icons/HTMLIcons";
import NestjsIcon from "./icons/NestjsIcon";

const Skills = () => {
  const skills = [
    { icon: <GithubIcons size={60} />, label: "GitHub" },
    { icon: <NextJSIcons size={60} />, label: "Next.js" },
    { icon: <ReactIcon size={60} />, label: "React" },
    { icon: <HTMLIcons size={60} />, label: "HTML" },
    { icon: <TailwindIcons size={60} />, label: "Tailwind CSS" },
    { icon: <PostgreIcon size={60} />, label: "PostgreSQL" },
    { icon: <TypescriptIcon size={60} />, label: "TypeScript" },
    { icon: <JavaIcon size={60} />, label: "Java" },
    { icon: <NodejsIcon size={60} />, label: "Node.js" },
    { icon: <NestjsIcon size={60} />, label: "Nest JS" },
  ];

  return (
    <TooltipProvider>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl text-center md:text-start">My skills</h2>
        <p className="text-sm text-white/80 text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          officia placeat .
        </p>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 max-h-[400px] overflow-auto">
          {skills.map((skill, key) => (
            <Tooltip key={key}>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-center p-4 cursor-pointer bg-[#2c2b2b] hover:text-accent rounded-[5px] transition-all duration-500 ease-in-out">
                  {skill.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-white text-black ">
                {skill.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Skills;
