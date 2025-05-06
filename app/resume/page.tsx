"use client";
import Experience from "@/components/Experience";
import Spacing from "@/components/Spacing";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ResumePage = () => {
  const [onglet, setOnglet] = useState<string>("experience");

  const handleOngletChange = (onglet: string) => {
    setOnglet(onglet);
  };
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div className="flex flex-col gap-10 col-span-1">
        <h1 className="text-3xl ">Why hire me?</h1>
        <p className="text-sm text-white/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => handleOngletChange("experience")}
            className="bg-[#333] rounded-[5px] hover:bg-accent hover:text-black duration-500 "
          >
            Expériences
          </Button>
          <Button
            onClick={() => handleOngletChange("education")}
            className="bg-[#333] rounded-[5px] hover:bg-accent hover:text-black duration-500 "
          >
            Education
          </Button>
          <Button
            onClick={() => handleOngletChange("skills")}
            className="bg-[#333] rounded-[5px] hover:bg-accent hover:text-black duration-500 "
          >
            Skills
          </Button>
          <Button
            onClick={() => handleOngletChange("about-me")}
            className="bg-[#333] rounded-[5px] hover:bg-accent hover:text-black duration-500 "
          >
            About me
          </Button>
        </div>
      </div>
      <div className="col-span-2">
        {onglet === "experience" && <Experience />}
        {onglet === "education" && <Experience />}
        {onglet === "skill" && <Experience />}
        {onglet === "about-me" && <Experience />}
      </div>
      <Spacing size="md" />
    </div>
  );
};

export default ResumePage;
