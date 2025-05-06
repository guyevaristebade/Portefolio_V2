import React from "react";

interface EducationCardProps {
  date: string;
  title: string;
  plateform: string;
}
const EducationCard = ({ date, title, plateform }: EducationCardProps) => {
  return (
    <div className="bg-[#333] p-4 rounded-[5px] flex flex-col justify-between gap-4">
      <div>
        <h3 className="text-accent">{date}</h3>
        <p className="text-xl">{title}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="h-1 w-1 rounded-full bg-accent"></span>
        <p className="text-white/80 text-sm">{plateform}</p>
      </div>
    </div>
  );
};

export default EducationCard;
