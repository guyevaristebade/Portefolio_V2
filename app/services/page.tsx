import React from "react";
import { Metadata } from "next";
import Spacing from "@/components/Spacing";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description: "Discover the services I offer in web development",
};

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
      title: "Logo Design",
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
    <Section>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.num}
            num={service.num}
            title={service.title}
            description={service.description}
          />
        ))}
        <Spacing size="md" />
      </div>
    </Section>
  );
};

export default ServicesPage;
