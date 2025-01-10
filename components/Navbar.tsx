import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white bg-opacity-70 backdrop-blur-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl">JB</div>
        <div className="hidden md:flex space-x-8">
          <Link
            href="#about"
            onClick={(e) => handleAnchorClick(e, "about")}
            className=" hover:text-primary transition-colors"
          >
            À propos
          </Link>
          <Link
            href="#experience"
            onClick={(e) => handleAnchorClick(e, "experience")}
            className=" hover:text-primary transition-colors"
          >
            Expérience
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleAnchorClick(e, "projects")}
            className=" hover:text-primary transition-colors"
          >
            Projets
          </Link>
          <Link
            href="#skills"
            onClick={(e) => handleAnchorClick(e, "skills")}
            className=" hover:text-primary transition-colors"
          >
            Compétences
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "contact")}
            className=" hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
