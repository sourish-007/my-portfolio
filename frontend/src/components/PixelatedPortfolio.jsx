import React, { useState, useEffect, useRef } from "react";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import homeBackgroundImage from "../assets/home_background.png";
import projectBackgroundImage from "../assets/project_background.png";
import skillsBackgroundImage from "../assets/skills_background.png";
import contactBackgroundImage from "../assets/contact_background.png";

const PixelatedPortfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    const aboutPosition = aboutRef.current.offsetTop;
    const skillsPosition = skillsRef.current.offsetTop;
    const projectsPosition = projectsRef.current.offsetTop;
    const contactPosition = contactRef.current.offsetTop;

    if (scrollPosition >= aboutPosition && scrollPosition < skillsPosition) {
      setActiveSection("about");
    } else if (
      scrollPosition >= skillsPosition &&
      scrollPosition < projectsPosition
    ) {
      setActiveSection("skills");
    } else if (
      scrollPosition >= projectsPosition &&
      scrollPosition < contactPosition
    ) {
      setActiveSection("projects");
    } else if (scrollPosition >= contactPosition) {
      setActiveSection("contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="text-white font-mono">
      <div className="relative z-10">
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          refs={{ aboutRef, skillsRef, projectsRef, contactRef }}
        />

        <main>
          <div ref={aboutRef} className="min-h-screen relative">
            <div className="absolute inset-0 z-0">
              <img
                src={homeBackgroundImage}
                alt="Home Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="relative z-10">
              <About />
            </div>
          </div>

          <div ref={skillsRef} className="min-h-screen relative">
            <div className="absolute inset-0 z-0">
              <img
                src={skillsBackgroundImage}
                alt="Skills Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="relative z-10">
              <Skills />
            </div>
          </div>

          <div ref={projectsRef} className="min-h-screen relative">
            <div className="absolute inset-0 z-0">
              <img
                src={projectBackgroundImage}
                alt="Project Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="relative z-10">
              <Projects />
            </div>
          </div>

          <div ref={contactRef} className="min-h-screen relative bg-gray-800">
            <div className="absolute inset-0 z-0">
              <img
                src={contactBackgroundImage}
                alt="Contact Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="relative z-10">
              <Contact />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PixelatedPortfolio;