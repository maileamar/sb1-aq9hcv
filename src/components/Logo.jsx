import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M16 2L2 16L16 30L30 16L16 2Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 16H24M16 8V24" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
      </svg>
      <span className="text-2xl font-bold text-white">Leamar Hiring</span>
    </div>
  );
};

export default Logo;