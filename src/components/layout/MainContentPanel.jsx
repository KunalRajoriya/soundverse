import React, { useState } from 'react';
import { ChevronLeft, X, Plus } from 'lucide-react';
import ArtistHeader from '../artist/ArtistHeader';
import ContentTabs from '../artist/ContentTab';
import StyleCardsGrid from '../cards/StyleCardsGrid';
import { musicStyles } from '../../data/musicStyles';

const MainContentPanel = ({ isOpen, onClose, onPlayCard, currentTrack, isPlaying }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeContentTab, setActiveContentTab] = useState('core');

  if (!isOpen) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <button
          onClick={onClose}
          className="w-16 h-16 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
        >
          <Plus size={32} />
        </button>
      </div>
    );
  }

  // Get styles based on active tab
  const currentStyles = activeContentTab === 'core' 
    ? musicStyles.coreStyle 
    : musicStyles.signatureSound;

  return (
    <>
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <button className="w-9 h-9 bg-black/50 backdrop-blur-sm hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200">
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={onClose}
          className="w-9 h-9 bg-black/50 backdrop-blur-sm hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-12 pt-16 pb-24">
        <div className="max-w-6xl">
          <ArtistHeader />
          <ContentTabs 
            activeTab={activeContentTab} 
            onTabChange={setActiveContentTab} 
          />
          <StyleCardsGrid 
            styles={currentStyles}
            onPlayCard={onPlayCard}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        </div>
      </div>
    </>
  );
};

export default MainContentPanel;