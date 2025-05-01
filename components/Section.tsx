import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

// PropsWithChildren rajoute la propriété children à l'objet Props
// React.FC<PropsWithChildren> est un type générique qui prend un objet PropsWithChildren
// et retourne un composant React
// Sections est un composant React qui prend un objet PropsWithChildren en argument
// et retourne un élément section
const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("max-w-4xl m-auto", props.className)}>
      {props.children}
    </section>
  );
};

export default Section;
