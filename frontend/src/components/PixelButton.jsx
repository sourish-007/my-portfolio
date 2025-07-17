import React from 'react';

const PixelButton = ({ children, onClick, active = false, className = '' }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 font-mono text-sm font-bold transition-all duration-300 transform
      ${active 
        ? 'bg-red-600 text-white shadow-lg scale-105' 
        : 'bg-gray-800 text-cyan-400 hover:bg-red-600 hover:text-white hover:scale-105'
      }
      border-2 border-solid border-gray-600 hover:border-red-500
      ${className}
    `}
    style={{
      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
    }}
  >
    {children}
  </button>
);

export default PixelButton;