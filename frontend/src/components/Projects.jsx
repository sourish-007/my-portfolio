import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import leftArrow from '../assets/left_arrow.png';
import righftArrow from '../assets/right_arrow.png';

const Typewriter = ({ text, delay = 30, mistakeChance = 0.2, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;
    if (currentIndex < text.length) {
      if (Math.random() < mistakeChance && currentIndex > 3) {
        const mistakeLength = Math.floor(Math.random() * 3) + 1;
        const mistakeChars = Array(mistakeLength).fill(0).map(() => 
          String.fromCharCode(97 + Math.floor(Math.random() * 26))
        ).join('');

        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + mistakeChars);
        }, delay);

        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -mistakeLength));
          setIsTyping(false);
        }, delay * (mistakeLength + 2));

        timeout = setTimeout(() => {
          setIsTyping(true);
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, delay * (mistakeLength + 4));
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, delay);
      }
    } else if (currentIndex === text.length && onComplete) {
      timeout = setTimeout(() => {
        setShowCursor(false);
        onComplete();
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay, mistakeChance, onComplete]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className={`inline-block w-3 h-8 bg-white ml-1 ${isTyping ? 'opacity-100' : 'opacity-0'}`}></span>}
    </span>
  );
};

const Project = () => {
  const projects = [
    {
      name: 'JurisDict',
      description: 'AI-driven urgent bail prioritization system to expedite judicial decisions',
      tech: ['ReactJS', 'ExpressJS', 'NodeJS', 'Python', 'ML'],
      github: 'https://github.com/sagnik-004/Jurisdict',
      live: 'https://jurisdict.pages.dev'
    },
    {
      name: 'Sonoriq',
      description: 'Collaborative music community website with dynamic feed and real-time music charts',
      tech: ['ReactJS', 'ExpressJS', 'NodeJS', 'Firebase', 'REST API'],
      github: 'https://github.com/sagnik-004/Sonoriq',
      live: 'https://sonoriq.vercel.app'
    },
    {
      name: 'Bloggify',
      description: 'Full stack blogging app to create and publish blogs',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'REST API', 'Authentication', 'Tailwind CSS'],
      github: 'https://github.com/sourish-007/bloggify',
      live: 'https://bloggify-1yui.onrender.com'
    },
    {
      name: 'SplitIt',
      description: 'Secure and fast payment splitting app powered with GEN AI for agentic features',
      tech: ['React.js', 'Flask', 'PostgreSQL', 'FAST API', 'Tailwind CSS', 'GEN AI', 'Agent AI'],
      github: 'https://github.com/sourish-007/splitit',
      live: 'https://splitit-tpfs.onrender.com'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleComplete, setTitleComplete] = useState(false);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getProjectIndex = (offset) => {
    return (currentIndex + offset + projects.length) % projects.length;
  };

  const ProjectCard = ({ project, position, isCenter = false }) => {
    const baseClasses = "relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-cyan-400 p-6 transform transition-all duration-700 ease-in-out";
    
    let positionClasses = "";
    let blurClasses = "";
    
    if (position === 'left') {
      positionClasses = "translate-x-[-200px] scale-75 -rotate-12";
      blurClasses = "blur-sm opacity-60";
    } else if (position === 'right') {
      positionClasses = "translate-x-[200px] scale-75 rotate-12";
      blurClasses = "blur-sm opacity-60";
    } else if (position === 'center') {
      positionClasses = "scale-100 z-10";
      blurClasses = "";
    }

    return (
      <div className={`${baseClasses} ${positionClasses} ${blurClasses} w-[480px] h-80 hover:scale-105`}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-red-400/10 opacity-50"></div>
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">{project.name}</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-sm font-bold text-white mb-3">TECH STACK:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs border border-gray-600 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-auto">
            <a href={project.github} className="flex items-center text-cyan-400 hover:text-red-400 transition-colors font-bold">
              <Github className="w-4 h-4 mr-2" />
              CODE
            </a>
            <a href={project.live} className="flex items-center text-cyan-400 hover:text-red-400 transition-colors font-bold">
              <ExternalLink className="w-4 h-4 mr-2" />
              LIVE
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-20 px-6 relative overflow-hidden" ref={containerRef}>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-red-400 mb-4">
          {isVisible ? (
            <Typewriter 
              text="MY PROJECTS" 
              delay={50} 
              mistakeChance={0.15} 
              onComplete={() => setTitleComplete(true)}
            />
          ) : (
            <span className="opacity-0">MY PROJECTS</span>
          )}
        </h1>
        <p className="text-white/60">
          {isVisible ? (
            <Typewriter 
              text="Building innovative solutions with modern technology" 
              delay={30} 
              mistakeChance={0.1} 
            />
          ) : (
            <span className="opacity-0">Building innovative solutions with modern technology</span>
          )}
        </p>
      </div>

      <div className="relative flex items-center justify-center h-[500px]">
        <button 
          onClick={prevProject}
          className="absolute left-20 z-20 p-3 bg-gray-800/80 hover:bg-gray-700 border-2 border-cyan-400 transition-all duration-300"
        >
          <img src={leftArrow} alt="Previous" className="w-8 h-8" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute transition-all duration-700 ease-in-out">
            <ProjectCard 
              project={projects[getProjectIndex(-1)]} 
              position="left"
            />
          </div>

          <div className="absolute transition-all duration-700 ease-in-out">
            <ProjectCard 
              project={projects[currentIndex]} 
              position="center"
              isCenter={true}
            />
          </div>

          <div className="absolute transition-all duration-700 ease-in-out">
            <ProjectCard 
              project={projects[getProjectIndex(1)]} 
              position="right"
            />
          </div>
        </div>

        <button 
          onClick={nextProject}
          className="absolute right-20 z-20 p-3 bg-gray-800/80 hover:bg-gray-700 border-2 border-cyan-400 transition-all duration-300"
        >
          <img src={righftArrow} alt="Next" className="w-8 h-8" />
        </button>
      </div>

      <div className="flex justify-center mt-12 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 border-2 transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-cyan-400 border-cyan-400' 
                : 'bg-transparent border-gray-400 hover:border-cyan-400'
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <span className="text-white/60 font-mono">
          {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default Project;