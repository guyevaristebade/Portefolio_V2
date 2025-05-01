import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import React from "react";
import { buttonVariants } from "./ui/button";

interface ResponsiveMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: { href: string; label: string }[];
  applyStyle: (path: string) => string;
}
const ResponsiveMenu = ({
  isOpen,
  setIsOpen,
  navLinks,
  applyStyle,
}: ResponsiveMenuProps) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen bg-green-300/50 z-10 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className={`relative top-0 left-0 w-[250px] h-screen bg-secondary shadow-md transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center h-full gap-4 pt-[200px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn("relative text-white", applyStyle(link.href))}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "cursor-pointer text-black rounded-full bg-accent px-4 py-1 border border-transparent hover:bg-transparent hover:text-white hover:border-accent transition-all duration-300"
            )}
            href="#"
          >
            Hire me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
