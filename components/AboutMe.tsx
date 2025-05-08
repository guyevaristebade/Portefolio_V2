import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <h2 className="text-2xl text-center md:text-start">About Me</h2>
      <p className="text-white/80 text-sm text-center md:text-start">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem, ipsum.
      </p>
      <div className="flex flex-col gap-6  items-center md:flex-row md:justify-between w-full">
        <ul className="flex flex-col items-center md:items-baseline gap-6 ">
          <li className="flex items-center gap-2 ">
            <span className="text-white/80 text-sm">Name</span> Guy BADE
          </li>
          <li className="flex items-center gap-2">
            <span className="text-white/80 text-sm">Experience</span> 1+ years
          </li>
          <li className="flex items-center gap-2 ">
            <span className="text-white/80 text-sm">Nationality</span> Apatride
          </li>
          <li className="flex items-center gap-2">
            <span className="text-white/80 text-sm">Freelance</span> Available
          </li>
        </ul>
        <ul className="flex flex-col items-center md:items-baseline gap-6">
          <li className="flex items-center gap-2   ">
            <span className="text-white/80 text-sm">Phone</span> (+40) 123 456
            789
          </li>
          <li className="flex items-center gap-2   ">
            <span className="text-white/80 text-sm">Skype</span> Testobal
          </li>
          <li className="flex items-center gap-2   ">
            <span className="text-white/80 text-sm">Email</span>{" "}
            example.01@gmail.com
          </li>
          <li className="flex items-center gap-2  ">
            <span className="text-white/80 text-sm ">Languages</span> French,
            English
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
