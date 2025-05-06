import React from "react";

interface ExperienceCardProps {
  date: string;
  title: string;
  company: string;
}
const ExperienceCard = ({ date, title, company }: ExperienceCardProps) => {
  return (
    <div className="bg-[#333] p-4 rounded-[5px] flex flex-col justify-between gap-4">
      <div>
        <h3 className="text-accent">{date}</h3>
        <p className="text-xl">{title}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="h-1 w-1 rounded-full bg-accent"></span>
        <p className="text-white/80 text-sm">{company}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
