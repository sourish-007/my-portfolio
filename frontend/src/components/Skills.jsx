import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Database } from 'lucide-react';
import PixelCard from './PixelCard';
import PixelProgressBar from './PixelProgressBar';

const AnimatedText = ({ text, delay = 0, trigger = false }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    
    const timer = setTimeout(() => {
      setIsAnimating(true);
      let step = 0;
      const maxSteps = 15;
      
      const animate = () => {
        if (step <= maxSteps) {
          const newText = text.split('').map(char => {
            if (char === ' ' || char === '.' || char === '/' || char === '-') return char;
            
            const targetCode = char.charCodeAt(0);
            let startCode;
            
            if (char >= 'A' && char <= 'Z') {
              startCode = 65;
            } else if (char >= 'a' && char <= 'z') {
              startCode = 97;
            } else {
              return char;
            }
            
            if (step === maxSteps) {
              return char;
            }
            
            const progress = step / maxSteps;
            const currentCode = Math.floor(startCode + (targetCode - startCode) * progress);
            return String.fromCharCode(currentCode);
          }).join('');
          
          setDisplayText(newText);
          step++;
          
          if (step <= maxSteps) {
            setTimeout(animate, 40);
          } else {
            setDisplayText(text);
            setIsAnimating(false);
          }
        }
      };
      
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, trigger]);

  return <span>{displayText}</span>;
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React.js', level: 85, color: 'bg-blue-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Python', level: 85, color: 'bg-purple-500' },
    { name: 'Machine Learning', level: 75, color: 'bg-pink-500' },
    { name: 'Database', level: 80, color: 'bg-orange-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTrigger) {
          setIsVisible(true);
          setAnimationTrigger(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [animationTrigger]);

  return (
    <div ref={skillsRef} className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          <AnimatedText text="TECHNICAL SKILLS" trigger={animationTrigger} />
        </h2>
        <p className="text-gray-300">
          <AnimatedText text="My expertise across different technologies" delay={200} trigger={animationTrigger} />
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <PixelCard>
          <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
            <Cpu className="mr-2" />
            <AnimatedText text="PROGRAMMING LANGUAGES" delay={400} trigger={animationTrigger} />
          </h3>
          <div className="space-y-4">
            {skills.slice(0, 3).map((skill, index) => (
              <PixelProgressBar key={index} skill={skill} animate={isVisible} delay={600 + index * 100} />
            ))}
          </div>
        </PixelCard>

        <PixelCard>
          <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
            <Database className="mr-2" />
            <AnimatedText text="FRAMEWORKS & TOOLS" delay={400} trigger={animationTrigger} />
          </h3>
          <div className="space-y-4">
            {skills.slice(3).map((skill, index) => (
              <PixelProgressBar key={index} skill={skill} animate={isVisible} delay={600 + (index + 3) * 100} />
            ))}
          </div>
        </PixelCard>
      </div>

      <PixelCard className="mt-8">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">
          <AnimatedText text="TECHNOLOGY STACK" delay={800} trigger={animationTrigger} />
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Python', 'Flask', 'MySQL', 'MongoDB', 'Firebase', 'Git/GitHub', 'TensorFlow'].map((tech, index) => (
            <div key={tech} className="bg-gray-800 p-3 text-center border border-gray-600 hover:border-cyan-500 transition-colors">
              <span className="text-sm text-gray-300">
                <AnimatedText text={tech} delay={1000 + index * 50} trigger={animationTrigger} />
              </span>
            </div>
          ))}
        </div>
      </PixelCard>
    </div>
  );
};

export default Skills;