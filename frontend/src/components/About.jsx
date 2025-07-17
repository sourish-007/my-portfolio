import React, { useState, useEffect } from 'react';
import { Code } from 'lucide-react';
import PixelCard from './PixelCard';
import nameImage from '../assets/name.png';

const SmoothTypingText = ({ text, delay = 20, startDelay = 0, charDelayVariation = 10 }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const chars = text.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const intervals = chars.map((_, i) => {
        const randomDelay = Math.random() * charDelayVariation;
        return setTimeout(() => {
          setVisibleChars(prev => Math.max(prev, i + 1));
        }, i * delay + randomDelay);
      });

      return () => intervals.forEach(clearTimeout);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [chars.length, delay, startDelay, charDelayVariation]);

  return (
    <span>
      {chars.map((char, index) => (
        <span
          key={index}
          className={`transition-opacity duration-150 ${index < visibleChars ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transitionDelay: `${index * 0.01}s`,
            display: 'inline-block',
            whiteSpace: 'pre-wrap'
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="text-center py-12">
        <img src={nameImage} alt="Sourish Sarkar" className="mx-auto h-50 mb-6" />
        <p className="text-xl text-gray-300 mb-4">
          <SmoothTypingText text="FULL-STACK DEVELOPER" delay={15} charDelayVariation={8} />
        </p>
      </div>

      <PixelCard>
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
          <Code className="mr-2" />
          <SmoothTypingText text="ABOUT ME" delay={10} startDelay={300} charDelayVariation={5} />
        </h2>
        <p className="text-gray-300 leading-relaxed">
          <SmoothTypingText 
            text="Full-stack developer with 2 years of experience specializing in backend development and web application architecture.  Proficient in modern web frameworks including Node.js and Flask, with expertise in building scalable APIs and database integration. Strong foundation in machine learning and data analytics, with proven ability to develop end-to-end solutions from concept to deployment."
            delay={5}
            startDelay={500}
            charDelayVariation={3}
          />
        </p>
      </PixelCard>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <PixelCard>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">
            <SmoothTypingText text="EDUCATION" delay={10} startDelay={1200} charDelayVariation={5} />
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-white">
                <SmoothTypingText text="B.Tech ECE" delay={10} startDelay={1400} charDelayVariation={4} />
              </h4>
              <p className="text-gray-300">
                <SmoothTypingText text="IEM Kolkata" delay={10} startDelay={1600} charDelayVariation={4} />
              </p>
              <p className="text-sm text-gray-400">
                <SmoothTypingText text="CGPA: 8.95/10" delay={10} startDelay={1800} charDelayVariation={4} />
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white">
                <SmoothTypingText text="Class XII" delay={10} startDelay={2000} charDelayVariation={4} />
              </h4>
              <p className="text-gray-300">
                <SmoothTypingText text="DAV Public School" delay={10} startDelay={2200} charDelayVariation={4} />
              </p>
              <p className="text-sm text-gray-400">
                <SmoothTypingText text="91.2%" delay={10} startDelay={2400} charDelayVariation={4} />
              </p>
            </div>
          </div>
        </PixelCard>

        <PixelCard>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">
            <SmoothTypingText text="ACHIEVEMENTS" delay={10} startDelay={1300} charDelayVariation={5} />
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 mr-3"></div>
              <span className="text-gray-300">
                <SmoothTypingText text="500+ LeetCode Problems" delay={10} startDelay={1500} charDelayVariation={4} />
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 mr-3"></div>
              <span className="text-gray-300">
                <SmoothTypingText text="250+ GeeksforGeeks Problems" delay={10} startDelay={1700} charDelayVariation={4} />
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 mr-3"></div>
              <span className="text-gray-300">
                <SmoothTypingText text="Top 200 Coder at Institute" delay={10} startDelay={1900} charDelayVariation={4} />
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 mr-3"></div>
              <span className="text-gray-300">
                <SmoothTypingText text="Postman Student Expert" delay={10} startDelay={2100} charDelayVariation={4} />
              </span>
            </div>
          </div>
        </PixelCard>
      </div>
    </div>
  );
};

export default About;