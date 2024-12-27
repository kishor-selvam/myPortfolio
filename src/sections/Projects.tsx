"use client";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import dhruva from "@/assets/images/dhruva.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import finplan from "@/assets/images/finplan.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import bharathiConstruction from "@/assets/images/bharathiConstruction.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useState } from "react";

const portfolioProjects = [
  {
    company: "Nuvolance Technologies",
    year: "2023",
    title: "Dhruva",
    category: "Professional",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://app.technofundainvesting.com",
    image: dhruva,
  },
  {
    company: "Nuvolance Technologies",
    year: "2024",
    title: "FinPlan",
    category: "Professional",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://finplanonline.com",
    image: finplan,
  },
  {
    company: "Bharathi Construction",
    year: "2024",
    title: "Bharathi Construction",
    category: "Freelance",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://bharathiconstruction.com",
    image: bharathiConstruction,
  },
];

export const ProjectsSection = () => {
  const [activeSection, setActiveSection] = useState("Professional");
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description=" See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex justify-center items-center sticky  w-full top-16 z-10 mt-10">
          <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
            <button
              onClick={() => setActiveSection("Professional")}
              className={`nav-item ${
                activeSection === "Professional"
                  ? "bg-white text-gray-900"
                  : "hover:bg-white/70 hover:text-gray-900"
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setActiveSection("Freelance")}
              className={`nav-item ${
                activeSection === "Freelance"
                  ? "bg-white text-gray-900"
                  : "hover:bg-white/70 hover:text-gray-900"
              }`}
            >
              Freelance
            </button>
            <button
              onClick={() => setActiveSection("Others")}
              className={`nav-item ${
                activeSection === "Others"
                  ? "bg-white text-gray-900"
                  : "hover:bg-white/70 hover:text-gray-900"
              }`}
            >
              Others
            </button>
          </nav>
        </div>

        <div className="mt-5 md:mt-10 flex flex-col gap-20">
          {portfolioProjects
            .filter((item) => item.category === activeSection)
            .map((projects, projectIndex) => (
              <Card
                key={projects.title}
                className="px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(116px + ${projectIndex * 40}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                      <span>{projects.company}</span>
                      <span>&bull;</span>
                      <span>{projects.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">
                      {projects.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {projects.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm md:text-base text-white/50 "
                        >
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a target="_blank" href={projects.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl mt-8 font-semibold inline-flex items-center justify-center gap-2">
                        Visit Live Site
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={projects.image}
                      alt={projects.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};
