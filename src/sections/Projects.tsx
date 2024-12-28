"use client";
import dhruva from "@/assets/images/dhruva.png";
import finplan from "@/assets/images/finplan.png";
import technoHackathon from "@/assets/images/Hackathon.png";
import bharathiConstruction from "@/assets/images/bharathiConstruction.png";
import bharathienterprises from "@/assets/images/bharathienterprises.png";
import abcRealtor from "@/assets/images/abcrealtor.png";
import AiTShirtMaker from "@/assets/images/aiTshirt.png";
import CodePen from "@/assets/images/codepen.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
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
      {
        title:
          "Developed the QIC (Quantum Investing Champion) module for Dhruva, a dynamic event-based platform with 8 stages for user participation in teams.",
      },
      {
        title:
          "Resolved critical bugs, including a year-end issue, ensuring smooth functionality.",
      },
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
      {
        title:
          "Implemented key modules: Income, Expense, Assets, Loans, and Insurance in Finplan.",
      },
      {
        title:
          "Developed Finfit for financial analysis and personalized advice.",
      },
      {
        title:
          "Enhanced user experience with streamlined financial goal management.",
      },
    ],

    link: "https://finplanonline.com",
    image: finplan,
  },
  {
    company: "Nuvolance Technologies",
    year: "2023",
    title: "Techno Hackathon",
    category: "Professional",
    results: [
      {
        title:
          "Developed TechnoHackathon, an event-based website with team registration and round-robin rule.",
      },
      {
        title:
          "Implemented multi-stage workflows for document uploads and user shortlisting.",
      },
      {
        title:
          "Enabled admin features for winner announcements and gift presentations.",
      },
    ],

    link: "#",
    image: technoHackathon,
  },
  {
    company: "Bharathi Construction",
    year: "2024",
    title: "Bharathi Construction",
    category: "Freelance",
    results: [
      { title: "Built Bharathi Construction website using WordPress." },
      { title: "Customized and optimized for client needs." },
      { title: "Delivered a responsive, user-friendly design." },
    ],
    link: "https://bharathiconstruction.com",
    image: bharathiConstruction,
  },
  {
    company: "ABC Realtor",
    year: "2024",
    title: "Abc Realtor",
    category: "Freelance",
    results: [
      {
        title: "Developed ABC Realtor, a real estate website using WordPress.",
      },
      {
        title:
          "Implemented property listing and search features for better user experience.",
      },
      {
        title:
          "Delivered a responsive and professional design tailored for real estate.",
      },
    ],

    link: "https://abcrealtor.co.in/",
    image: abcRealtor,
  },
  {
    company: "Bharathi Enterprises",
    year: "2024",
    title: "Bharathi Enterprises",
    category: "Freelance",
    results: [
      {
        title:
          "Created Bharathi Enterprises website for an interior design company using WordPress.",
      },
      {
        title:
          "Designed and customized pages to highlight services and portfolio.",
      },
      { title: "Ensured a responsive and visually appealing user experience." },
    ],
    link: "https://bharathienterprises.net/",
    image: bharathienterprises,
  },

  {
    company: "T-CRAFT STUDIO",
    year: "2023",
    title: "Ai T-Shirt Maker",
    category: "Others",
    results: [
      { title: "Developed AI T-Shirt Maker app using React and Three.js." },
      {
        title:
          "Integrated 3D design features for customizable T-shirt graphics.",
      },
      {
        title:
          "Enhanced user experience with real-time preview and interactive design tools.",
      },
    ],
    link: "https://ai-tshirt-maker.netlify.app/",
    image: AiTShirtMaker,
  },
  {
    company: "CodePen Clone",
    year: "2024",
    title: "A site same as like Codepen",
    category: "Others",
    results: [
      {
        title:
          "Built a CodePen clone using React.js for real-time code editing.",
      },
      { title: "Implemented live preview for HTML, CSS, and JavaScript code." },
      { title: "Enabled user to create, save, and share projects seamlessly." },
    ],

    link: "https://code-editor-htmlcssjs.netlify.app/",
    image: CodePen,
  },

  // {
  //   company: "Miracle Clickz",
  //   year: "2024",
  //   title: "Miracle Clickz",
  //   category: "Freelance",
  //   results: [
  //     {
  //       title:
  //         "Developed Miracle Clickz, a real estate website for showcasing properties.",
  //     },
  //     {
  //       title: "Implemented features for property listings and user inquiries.",
  //     },
  //     { title: "Delivered a responsive design to enhance user engagement." },
  //   ],

  //   link: "https://miracleclickz.com/",
  //   image: bharathiConstruction,
  // },
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
