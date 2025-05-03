import React from "react";
import Section from "./Section";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcons from "./icons/GithubIcons";
import { Download } from "lucide-react";
const Hero = () => {
  return (
    <Section className="flex justify-between  md:flex-row flex-col-reverse items-center gap-8">
      <div className="flex flex-col gap-4 justify-center md:gap-4 text-center lg:text-left xl:text-left">
        <span className="text-xl text-white/80">
          {"À La recherche d'une alternance"}
        </span>
        <h1 className="text-5xl font-bold leading-tight ">
          Bonjour, Je suis <br /> <span className="text-accent">Guy BADE</span>
        </h1>
        <p className="max-w-[500px] text-md font-light mx-auto text-white/80">
          {
            "Actuellement titulaire d’un Bac +3, je suis à la recherche d'une alternance de deux ans dans le but d'intégrer un master en conception de système et cybersécurité. ou une école d'ingénieur."
          }
        </p>
        <div className="flex gap-4 max-md:justify-center">
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border rounded-full border-accent text-accent hover:text-black"
            )}
          >
            <span className="text-sm flex items-center gap-2">
              Télécharger mon CV <Download />{" "}
            </span>
          </Link>

          <Link
            href="https://github.com/guyevaristebade"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border rounded-full border-accent text-accent hover:text-black flex items-center justify-center w-10 h-10"
            )}
          >
            <GithubIcons />
          </Link>
          <Link
            href="https://www.linkedin.com/in/guy-bade-67743019b/"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border rounded-full border-accent text-accent hover:text-black flex items-center justify-center w-10 h-10"
            )}
          >
            <LinkedinIcon />
          </Link>
        </div>
      </div>
      <div className="flex justify-center rounded-full">
        <Image
          src={"/avatar.png"}
          alt="Guy BADE"
          className="w-full h-auto rounded max-w-xs"
          width={400}
          height={500}
        />
      </div>
    </Section>
  );
};

export default Hero;
