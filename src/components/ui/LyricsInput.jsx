import React, { useState } from 'react';

const LyricsInput = ({ value, onChange, maxLength = 3000 }) => {
  const [activeTab, setActiveTab] = useState('lyrics');

  return (
    <div className="flex-1 flex flex-col min-h-0 mb-4">
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setActiveTab('describe')}
          className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
            activeTab === 'describe'
              ? 'bg-[#2a2d3a] text-white'
              : 'bg-transparent text-gray-400 hover:bg-[#2a2d3a]/50'
          }`}
        >
          Describe your song
        </button>
        <button
          onClick={() => setActiveTab('lyrics')}
          className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
            activeTab === 'lyrics'
              ? 'bg-[#2a2d3a] text-white'
              : 'bg-transparent text-gray-400 hover:bg-[#2a2d3a]/50'
          }`}
        >
          Lyrics
        </button>
      </div>

      <div className="flex-1 bg-[#1a1d28] rounded-2xl p-4 flex flex-col min-h-0">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
          placeholder={
            activeTab === 'lyrics' 
              ? 'Enter your own lyrics' 
              : 'Describe the mood, genre, or theme of your song...'
          }
          className="flex-1 bg-transparent text-[13px] text-gray-300 placeholder-gray-500 resize-none outline-none leading-relaxed"
          maxLength={maxLength}
        />
        <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-700/30">
          <div className="flex gap-3">
            <button className="text-[13px] text-gray-400 hover:text-white transition-all duration-200">
              Help me write
            </button>
            <button 
              onClick={() => onChange('')}
              className="text-[13px] text-gray-400 hover:text-white transition-all duration-200"
            >
              Clear
            </button>
          </div>
          <span className="text-[13px] text-gray-500">{value.length}/{maxLength}</span>
        </div>
      </div>
    </div>
  );
};

export default LyricsInput;