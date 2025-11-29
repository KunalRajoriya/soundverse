import React from 'react';
import { Plus, Home, Search, Library } from 'lucide-react';

const VerticalSidebar = ({ onDNAClick, isDNAActive }) => {
  return (
    <div className="flex flex-col w-16 bg-black border-r border-gray-800/20 items-center py-5 gap-6 z-20">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-2">
        <div className="w-5 h-5 rounded-full border-2 border-white/60" />
      </div>
      <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-lg transition-all duration-200">
        <Plus size={22} className="text-gray-400 hover:text-gray-300" />
      </button>
      <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-lg transition-all duration-200">
        <Home size={22} className="text-gray-400 hover:text-gray-300" />
      </button>
      <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-lg transition-all duration-200">
        <Search size={22} className="text-gray-400 hover:text-gray-300" />
      </button>
      <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-lg transition-all duration-200">
        <Library size={22} className="text-gray-400 hover:text-gray-300" />
      </button>
      <button 
        onClick={onDNAClick}
        className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 mt-auto ${
          isDNAActive ? 'bg-gray-800/60' : 'bg-gray-800/40 hover:bg-gray-800/50'
        }`}
      >
        <span className="text-[11px] font-bold text-white">DNA</span>
      </button>
    </div>
  );
};

export default VerticalSidebar;