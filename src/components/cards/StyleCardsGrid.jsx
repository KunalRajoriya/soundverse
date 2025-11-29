import React from 'react';
import StyleCard from './StyleCard';

const StyleCardsGrid = ({ styles, onPlayCard, currentTrack, isPlaying, hoveredCard, setHoveredCard }) => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-6">
      {styles.map((style) => (
        <StyleCard
          key={style.id}
          style={style}
          isHovered={hoveredCard === style.id}
          onHover={() => setHoveredCard(style.id)}
          onLeave={() => setHoveredCard(null)}
          onClick={() => onPlayCard(style)}
          isPlaying={isPlaying && currentTrack?.id === style.id}
        />
      ))}
    </div>
  );
};

export default StyleCardsGrid;