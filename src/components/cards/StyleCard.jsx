import React from 'react';
import { Play, Pause } from 'lucide-react';

const StyleCard = ({ style, isHovered, onHover, onLeave, onClick, isPlaying }) => {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group cursor-pointer"
    >
      <div className="relative mb-3 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 transform transition-all duration-300 group-hover:scale-105">
        <img
          src={style.image}
          alt={style.title}
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200 ${
            isHovered || isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={onClick}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center transform transition-all duration-200 hover:scale-110 active:scale-95"
          >
            {isPlaying ? (
              <Pause size={24} className="text-black" fill="black" />
            ) : (
              <Play size={24} className="text-black ml-1" fill="black" />
            )}
          </button>
        </div>
      </div>

      <h3 className="text-sm font-semibold mb-1">{style.title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed">{style.description}</p>
    </div>
  );
};

export default StyleCard;