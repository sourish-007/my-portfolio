import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import PixelCard from './PixelCard';
import PixelButton from './PixelButton';

const QuickTypeText = ({ text, delay = 0 }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setVisibleChars(prev => {
                if (prev >= text.length) {
                  clearInterval(interval);
                  return prev;
                }
                return prev + 1;
              });
            }, 20);
            observer.unobserve(entry.target);
          }
        });
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
  }, [text]);

  return (
    <span ref={containerRef}>
      {text.substring(0, visibleChars)}
      {visibleChars < text.length && (
        <span className="inline-block w-2 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
      )}
    </span>
  );
};

const Contact = () => {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          <QuickTypeText text="GET IN TOUCH" />
        </h2>
        <p className="text-gray-300">
          <QuickTypeText text="Let's connect and build something amazing together" delay={100} />
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <PixelCard>
          <h3 className="text-xl font-bold text-cyan-400 mb-6">
            <QuickTypeText text="CONTACT INFO" delay={200} />
          </h3>
          <div className="space-y-4">
            <div className="flex items-center bg-gray-800/50 p-3 rounded border border-gray-700 hover:border-cyan-400 transition-colors">
              <Mail className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
              <span className="text-gray-300">
                <QuickTypeText text="sourishsarkar0011@gmail.com" delay={300} />
              </span>
            </div>
            <div className="flex items-center bg-gray-800/50 p-3 rounded border border-gray-700 hover:border-cyan-400 transition-colors">
              <Phone className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
              <span className="text-gray-300">
                <QuickTypeText text="+91 8918821278" delay={400} />
              </span>
            </div>
          </div>
        </PixelCard>

        <PixelCard>
          <h3 className="text-xl font-bold text-cyan-400 mb-6">
            <QuickTypeText text="SOCIAL PROFILES" delay={200} />
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="https://github.com/sourish-007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-gray-800/70 hover:bg-gray-700 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-200"
            >
              <div className="p-2 bg-gray-900 rounded-full group-hover:bg-cyan-400/10 transition-colors">
                <Github className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">GitHub</div>
                <div className="text-xs text-gray-400">@sourish-007</div>
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/sarkar-sourish/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-gray-800/70 hover:bg-gray-700 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-200"
            >
              <div className="p-2 bg-gray-900 rounded-full group-hover:bg-cyan-400/10 transition-colors">
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">LinkedIn</div>
                <div className="text-xs text-gray-400">Sourish Sarkar</div>
              </div>
            </a>
            <a 
              href="https://x.com/_sourishsarkar_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-gray-800/70 hover:bg-gray-700 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-200"
            >
              <div className="p-2 bg-gray-900 rounded-full group-hover:bg-cyan-400/10 transition-colors">
                <Twitter className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Twitter</div>
                <div className="text-xs text-gray-400">@sourish_dev</div>
              </div>
            </a>
            <a 
              href="https://instagram.com/sourizz.xd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-gray-800/70 hover:bg-gray-700 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-200"
            >
              <div className="p-2 bg-gray-900 rounded-full group-hover:bg-cyan-400/10 transition-colors">
                <Instagram className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Instagram</div>
                <div className="text-xs text-gray-400">@sourizz.xd</div>
              </div>
            </a>
          </div>
        </PixelCard>
      </div>

      <PixelCard className="text-center">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">
          <QuickTypeText text="READY TO COLLABORATE?" delay={500} />
        </h3>
        <p className="text-gray-300 mb-6">
          <QuickTypeText 
            text="I'm always excited to work on innovative projects and explore new technologies." 
            delay={600} 
          />
        </p>
        <PixelButton>
          <Mail className="w-4 h-4 mr-2 inline" />
          <QuickTypeText text="SEND MESSAGE" delay={700} />
        </PixelButton>
      </PixelCard>
    </div>
  );
};

export default Contact;