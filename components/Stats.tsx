import React from "react";

interface StatsProps {
  title: string;
  value: string;
}
const Stats = ({ value, title }: StatsProps) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-6xl font-bold">{value}</span>
      <p className="text-sm w-20 text-gray-400">{title}</p>
    </div>
  );
};

export default Stats;
