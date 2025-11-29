import React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const GlobalPlayer = ({ 
  track, 
  isPlaying, 
  isMuted, 
  currentTime, 
  duration,
  onPlayPause,
  onMuteToggle,
  onSeek 
}) => {
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!track) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#14141a] border-t border-gray-800/50 p-4 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center gap-6">
        {/* Track Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex-shrink-0" />
          <div className="min-w-0">
            <div className="font-semibold text-sm truncate">{track.title}</div>
            <div className="text-xs text-gray-400 truncate">COLDPLAY</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={onPlayPause}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
          >
            {isPlaying ? (
              <Pause size={20} className="text-black" fill="black" />
            ) : (
              <Play size={20} className="text-black ml-0.5" fill="black" />
            )}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 flex-1">
          <span className="text-xs text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
          <div
            onClick={onSeek}
            className="flex-1 h-1.5 bg-gray-700 rounded-full cursor-pointer group"
          >
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative transition-all duration-100"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
          <span className="text-xs text-gray-400 w-10">{formatTime(duration)}</span>
        </div>

        {/* Volume */}
        <button
          onClick={onMuteToggle}
          className="p-2 hover:bg-white/5 rounded transition-all duration-200"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
};

export default GlobalPlayer;