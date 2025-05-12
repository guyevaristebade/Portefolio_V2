import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  const educations = [
    {
      title: "Full Stack Web Development",
      plateform: "Coursera",
      date: "2022",
    },
    {
      title: "Frontend Development",
      plateform: "Udemy",
      date: "2020",
    },
    {
      title: "UX/UI Design",
      plateform: "Interaction Design Foundation",
      date: "2019",
    },
    {
      title: "Cloud Computing Basics",
      plateform: "edX",
      date: "2018",
    },
    {
      title: "Web Development",
      plateform: "Codecademy",
      date: "2017",
    },
    {
      title: "Introduction to Programming",
      plateform: "Khan Academy",
      date: "2016",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-center md:text-start">My education</h2>
      <p className="text-sm text-white/80 text-center md:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia
        placeat .
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-h-[400px] overflow-auto">
        {educations.map((education, index) => (
          <EducationCard
            key={index}
            date={education.date}
            title={education.title}
            plateform={education.plateform}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
