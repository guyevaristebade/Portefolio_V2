import React from "react";

interface ContactInfosProps {
  icon: React.ReactNode;
  title: string;
  info: string;
}
const ContactInfos = ({ icon, title, info }: ContactInfosProps) => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="bg-[#2c2b2b] p-6 rounded-md text-accent">
        {/* <Phone className="text-accent w-6 h-6" /> */}
        {icon}
      </div>
      <div className="flex flex-col text-white">
        <span className="text-sm text-white/80">{title}</span>
        <span className="text-lg font-medium">{info}</span>
      </div>
    </div>
  );
};

export default ContactInfos;
