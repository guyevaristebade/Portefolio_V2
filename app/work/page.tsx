"use client";
import GithubIcons from "@/components/icons/GithubIcons";
import Section from "@/components/Section";
import Spacing from "@/components/Spacing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const WorkPage = () => {
  const works = [
    {
      num: "01",
      title: "Frontend Project",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem, ipsum dolor.",
      image: "/work1.png",
      site_link: "https://example.com/work1",
      code_link: "https://github/work1",
      tags: ["Html", "CSS 3", "JavaScript"],
    },
    {
      num: "02",
      title: "Full Stack Project",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, iure.",
      image: "/work2.png",
      site_link: "https://example.com/work2",
      code_link: "https://github.com/example/work2",
      tags: ["Next JS ", "Tailwind css", "Node JS"],
    },
    {
      num: "03",
      title: "Frontend Project",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, iure.",
      image: "/work1.png",
      site_link: "https://example.com/work3",
      code_link: "https://github.com/example/work3",
      tags: ["Next JS ", "Tailwind css"],
    },
  ];
  const [index, setIndex] = useState<number>(0);

  const handleNext = () => {
    if (index < works.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <Section className="h-">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-4">
        <div className="flex flex-col justify-between lg:w-1/2">
          <div className="flex flex-col justify-between gap-8  border-white/10">
            <h2 className="text-8xl text-outline text-transparent">
              {works[index].num}
            </h2>
            <h3 className="text-3xl">{works[index].title}</h3>
            <p className="text-sm text-white/80">{works[index].description}</p>
            <div className="flex gap-2">
              {works[index].tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs text-accent/80 bg-slate-800 rounded-md px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="h-0.5 bg-white/10 my-3"></div>
          <div className="flex gap-2">
            <Link
              href={works[index].site_link}
              target="_blank"
              className={cn(
                "bg-secondary rounded-[100%] p-4 text-md text-white hover:text-accent flex justify-center items-center transition-all duration-300",
                !works[index].site_link && "opacity-50 pointer-events-none"
              )}
            >
              <MoveUpRight size={20} />
            </Link>
            <Link
              href={works[index].code_link}
              target="_blank"
              className={cn(
                "bg-secondary rounded-[100%] p-4 text-md text-white hover:text-accent flex justify-center items-center transition-all duration-300",
                !works[index].code_link && "opacity-50 pointer-events-none"
              )}
            >
              <GithubIcons size={20} />
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          <Image
            src={works[index].image}
            alt={"work image"}
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />

          {/* Bouton Prev */}
          <Button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-accent rounded-full text-black hover:text-white"
            onClick={handlePrev}
            size="icon"
          >
            <ChevronLeft />
          </Button>

          {/* Bouton Next */}
          <Button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent rounded-full text-black hover:text-white"
            onClick={handleNext}
            size="icon"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <Spacing size="md" />
    </Section>
  );
};

export default WorkPage;
