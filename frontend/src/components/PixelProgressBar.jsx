import React from 'react';

const PixelProgressBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="font-mono text-cyan-400 text-sm">{skill.name}</span>
      <span className="font-mono text-white text-sm">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-800 border border-gray-600 h-4">
      <div 
        className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

export default PixelProgressBar;