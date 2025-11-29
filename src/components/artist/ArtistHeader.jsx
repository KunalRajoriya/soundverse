import React from 'react';
import WaveformArtwork from './WaveformArtwork';

const ArtistHeader = () => {
  return (
    <div className="flex items-center gap-6 mb-8">
      <WaveformArtwork />
      
      <div className="flex-1">
        <h1 className="text-6xl font-bold tracking-tight mb-2">COLDPLAY</h1>
        <p className="text-gray-400 text-xs mb-3 leading-relaxed max-w-2xl">
          EDM visionary known for hit remixes and artist management. 6 Core Styles and 30 Signature Sounds.
        </p>
        <div className="flex gap-2 flex-wrap">
          {['House', 'Dance Pop', 'Pop', 'EDM'].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistHeader;