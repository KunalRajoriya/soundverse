import React from 'react';

const WaveformArtwork = () => {
  return (
    <div className="relative flex-shrink-0">
      <div className="w-44 h-44 rounded-full bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 p-1">
        <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
          <div className="w-full h-24 flex items-center justify-center gap-0.5">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-purple-500 via-blue-500 to-pink-500 rounded-full transition-all duration-300"
                style={{
                  height: `${Math.random() * 60 + 20}%`,
                  opacity: 0.6 + Math.random() * 0.4
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveformArtwork;