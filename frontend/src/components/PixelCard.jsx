import React from 'react';

const PixelCard = ({ children, className = '' }) => (
  <div 
    className={`
      bg-gray-900 border-2 border-cyan-500 p-6 transition-all duration-300
      hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20
      ${className}
    `}
    style={{
      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
    }}
  >
    {children}
  </div>
);

export default PixelCard;