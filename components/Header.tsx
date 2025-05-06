"use client";
import React, { useState } from "react";
import Section from "./Section";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Resume" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  const applyStyle = (path: string) =>
    pathname === path
      ? "after:content-[''] after:absolute after:bottom-0 after:left-0 text-accent after:bg-accent after:w-full after:h-[2px] after:rounded-full after:scale-x-100 after:transition-transform after:duration-300 hover:after:scale-x-0"
      : "";

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 px-4 shadow-md bg-primary z-50">
      <Section className="flex items-center py-4 justify-between bg-background">
        <Link
          href="/"
          className="text-3xl font-bold text-white relative after:content-['.'] after:text-accent"
        >
          Guy
        </Link>

        {/* Mobile button   */}
        <div className="md:hidden relative w-10 h-10 z-50">
          <X
            className={`absolute inset-0 cursor-pointer transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleMenuToggle}
            size={40}
          />
          <Menu
            className={`absolute inset-0 cursor-pointer transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
            onClick={handleMenuToggle}
            size={40}
          />
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-40 top-0 right-0 w-full h-screen bg-black/50 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className={`absolute top-0 right-0 w-[250px] h-screen bg-primary shadow-md`}
          >
            <div className="flex flex-col items-center h-full gap-4 pt-[200px]">
              <Link
                href="/"
                className="text-3xl font-bold text-white relative after:content-['.'] after:text-accent mb-10"
              >
                Guy
              </Link>
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
                href="/contact"
              >
                Hire me
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6 text-white relative">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("relative", applyStyle(link.href))}
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
        </nav>
      </Section>
    </header>
  );
};

export default Header;
