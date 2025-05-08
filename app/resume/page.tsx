"use client";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Spacing from "@/components/Spacing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";

const ResumePage = () => {
  const [onglet, setOnglet] = useState<string>("experience");

  const handleOngletChange = (onglet: string) => {
    setOnglet(onglet);
  };
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div className="flex flex-col justify-center md:justify-start gap-10 col-span-1 ">
        <h1 className="text-3xl text-center md:text-start">Why hire me?</h1>
        <p className="text-sm text-white/80 text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => handleOngletChange("experience")}
            className={cn(
              "bg-[#333] rounded-[5px] hover:text-white duration-500",
              onglet === "experience" && "bg-accent text-black"
            )}
          >
            Expériences
          </Button>
          <Button
            onClick={() => handleOngletChange("education")}
            className={cn(
              "bg-[#333] rounded-[5px] hover:text-white duration-500",
              onglet === "education" && "bg-accent text-black"
            )}
          >
            Education
          </Button>
          <Button
            onClick={() => handleOngletChange("skills")}
            className={cn(
              "bg-[#333] rounded-[5px] hover:text-white duration-500",
              onglet === "skills" && "bg-accent text-black"
            )}
          >
            Skills
          </Button>
          <Button
            onClick={() => handleOngletChange("about-me")}
            className={cn(
              "bg-[#333] rounded-[5px] hover:text-white duration-500",
              onglet === "about-me" && "bg-accent text-black"
            )}
          >
            About me
          </Button>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2">
        {onglet === "experience" && <Experience />}
        {onglet === "education" && <Education />}
        {onglet === "skills" && <Skills />}
        {onglet === "about-me" && <AboutMe />}
      </div>
      <Spacing size="md" />
    </div>
  );
};

export default ResumePage;
