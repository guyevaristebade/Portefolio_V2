import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import React from "react";

interface NavProps {
  navLinks: { href: string; label: string }[];
  applyStyle: (path: string) => string;
}
const Nav = ({ navLinks, applyStyle }: NavProps) => {
  return (
    <div className="flex items-center gap-4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn("relative text-white", applyStyle(link.href))}
        >
          {link.label}
          test
        </Link>
      ))}
    </div>
  );
};

export default Nav;
