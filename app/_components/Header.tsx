import React from "react";
import Sections from "./Section";
import { buttonVariants } from "@/components/ui/button";
import GithubIcons from "./icons/GithubIcons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LinkedinIcon from "./icons/LinkedinIcon";

const Header = () => {
  return (
    <header className="sticky top-0 py-4 shadow-md">
      <Sections className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary">Guy B</h1>
        {/* <div className="flex-1" /> */}
        <ul className="flex items-center gap-2">
          <Link
            className={cn(buttonVariants({ variant: "outline" }))}
            href="https://github.com/guyevaristebade"
            target="_blank"
          >
            <GithubIcons size={12} className="text-foreground" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }))}
            href="https://www.linkedin.com/in/guy-bade-67743019b/ "
            target="_blank"
          >
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
          <Link className={cn(buttonVariants({ variant: "outline" }))} href="#">
            Hire Me
          </Link>
        </ul>
      </Sections>
    </header>
  );
};

export default Header;
