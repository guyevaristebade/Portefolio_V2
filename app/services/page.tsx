import ServiceCard from "@/components/ServiceCard";
// import Spacing from "@/components/Spacing";
import React from "react";

const ServicesPage = () => {
  const services = [
    {
      num: "01",
      title: "Web Développement",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, sit. ",
    },
    {
      num: "02",
      title: "UX/UI Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, sit. ",
    },
    {
      num: "03",
      title: "Lgo Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, sit. ",
    },
    {
      num: "04",
      title: "SEO",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, sit. ",
    },
  ];

  return (
    <div>
      {/* <Spacing size="sm" /> */}
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.num}
            num={service.num}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
