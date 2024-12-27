"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#projects", "#about", "#contact"];
      const currentSection = sections.find((section) => {
        const element = document.querySelector(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          return top >= 0 && top < window.innerHeight / 2;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (hash: string) => {
    setActiveSection(hash);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          onClick={() => handleClick("#home")}
          className={`nav-item ${
            activeSection === "#home"
              ? "bg-white text-gray-900"
              : "hover:bg-white/70 hover:text-gray-900"
          }`}
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => handleClick("#projects")}
          className={`nav-item ${
            activeSection === "#projects"
              ? "bg-white text-gray-900"
              : "hover:bg-white/70 hover:text-gray-900"
          }`}
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={() => handleClick("#about")}
          className={`nav-item ${
            activeSection === "#about"
              ? "bg-white text-gray-900"
              : "hover:bg-white/70 hover:text-gray-900"
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={() => handleClick("#contact")}
          className={`nav-item ${
            activeSection === "#contact"
              ? "bg-white text-gray-900"
              : "hover:bg-white/70 hover:text-gray-900"
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
