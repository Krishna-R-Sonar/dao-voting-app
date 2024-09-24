'use client';

import React from 'react';

const Header = () => {
  return (
    <div 
      className="flex items-center justify-between h-16 sm:h-12 md:h-16 px-4 sm:px-2 md:px-4" 
      style={{
        backgroundImage: 'bg-gradient-to-b from-[#051937] via-[#004d7a] to-[#008793]  ',
        color: 'white',
      }}
    >
      <div className="flex items-center space-x-4">
        <img 
          src="/images/dao_logo.png" 
          alt="Logo"
          className="h-8 w-auto max-w-full" 
        />
        <div className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-red-400">TrueVote.io</div>
      </div>

      
    </div>
  );
};

export default Header;
