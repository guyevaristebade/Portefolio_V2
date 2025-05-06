import React from "react";
// import EducationCard from "./ExperienceCard";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack  Developer",
      company: "Ivory Cost Justice Ministry",
      date: "Jan 2022 - Present",
    },
    {
      title: "Front Developer Intern",
      company: "Société Générale",
      date: "Jan 2020 - Jan 2022",
    },
    {
      title: "UX/UI Designer",
      company: "Google",
      date: "Jan 2019 - Dec 2019",
    },
    {
      title: "Freelance Web Developer",
      company: "AWS",
      date: "Jan 2018 - Dec 2018",
    },
    {
      title: "Freelance Web Developer",
      company: "Vivendi",
      date: "Jan 2016 - Dec 2017",
    },
    {
      title: "Developper logiciel intern",
      company: "Apple",
      date: "Jan 2015 - Dec 2016",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-center md:text-start">My experience</h2>
      <p className="text-sm text-white/80 text-center md:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia
        placeat .
      </p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-2 max-h-[400px] overflow-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            date={experience.date}
            title={experience.title}
            company={experience.company}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
