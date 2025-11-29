import React from 'react';

const TabButton = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-1 px-6 rounded-full text-[13px] font-medium transition-all duration-200 ${
        active
          ? 'bg-[#2a2d3a] text-white'
          : 'bg-transparent text-gray-400 hover:bg-[#2a2d3a]/50'
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;