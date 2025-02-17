import React from "react";
import Section from "./Section";
import Image from "next/image";
const Hero = () => {
  return (
    <Section className="grid grid-cols-3 max-md:flex max-md:flex-col max-md:text-center ">
      <div className="col-span-2 max-md:order-2">
        <h2 className="font-caption text-5xl text-primary">Guy BADE</h2>
        <h3 className="text-3xl font-caption">
          {"À La recherche d'une alternance"}
        </h3>
        <p className="max-md:text-base">
          {
            "Titulaire d’un Bac+3 en informatique (BUT), je recherche une alternance pour intégrer une école d’ingénieur ou un Master en informatique. Motivé et passionné par le développement et l’innovation technologique, je souhaite renforcer mes compétences et apporter ma contribution à une entreprise dynamique."
          }
        </p>
      </div>
      <div className="col-span-1 flex justify-center max-md:order-1">
        <Image
          src={"/avatar.png"}
          alt="Guy BADE"
          className="w-full h-auto rounded max-w-xs"
          width={300}
          height={300}
        />
      </div>
    </Section>
  );
};

export default Hero;
