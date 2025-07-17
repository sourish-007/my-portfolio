import React from 'react';
import PixelButton from './PixelButton';
import nameImage from '../assets/name.png';

const Header = React.forwardRef(({ activeSection, scrollToSection, refs }, ref) => {
  return (
    <nav className="p-6 border-b border-cyan-500/30 fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src={ nameImage } alt="Sourish Sarkar" className="h-10" />
        </div>
        
        <div className="flex space-x-4">
          <PixelButton
            onClick={() => scrollToSection(refs.aboutRef)}
            active={activeSection === 'about'}
          >
            ABOUT
          </PixelButton>
          <PixelButton
            onClick={() => scrollToSection(refs.skillsRef)}
            active={activeSection === 'skills'}
          >
            SKILLS
          </PixelButton>
          <PixelButton
            onClick={() => scrollToSection(refs.projectsRef)}
            active={activeSection === 'projects'}
          >
            PROJECTS
          </PixelButton>
          <PixelButton
            onClick={() => scrollToSection(refs.contactRef)}
            active={activeSection === 'contact'}
          >
            CONTACT
          </PixelButton>
        </div>
      </div>
    </nav>
  );
});

export default Header;