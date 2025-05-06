import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  num: string;
  title: string;
  description: string;
}
const ServiceCard = ({ num, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-10 group">
      <div className="flex flex-row items-center justify-between ">
        <span className="text-4xl font-semibold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500 ease-in-out ">
          {num}
        </span>
        <Link
          href="#"
          className="text-black bg-white p-2 h-12 w-12 flex items-center justify-center rounded-full rotate-45 group-hover:bg-accent hover:rotate-0 transition-transform duration-500 ease-in-out"
        >
          <ArrowRight size={40} />
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <h1 className="text-2xl font-semibold group-hover:text-accent transition-colors duration-500 ease-in-out">
          {title}
        </h1>
        <p className="text-white/80 text-sm ">{description}</p>
      </div>
      <div className="bg-white/20 h-[1px] w-full"></div>
    </div>
  );
};

export default ServiceCard;
