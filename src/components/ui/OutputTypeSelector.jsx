import React from 'react';

const OutputTypeSelector = ({ selected, onChange }) => {
  const types = ['song', 'instrumental', 'singing'];
  
  return (
    <div className="mb-2">
      <label className="text-[13px] text-gray-400 mb-3 block">Select the output</label>
      <div className="flex gap-3">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => onChange(type)}
            className={`flex-1 py-2.5 px-4 rounded-full text-[13px] font-medium capitalize transition-all duration-200 ${
              selected === type
                ? 'bg-[#2a2d3a] text-white'
                : 'bg-[#1a1d28] text-gray-400 hover:bg-[#2a2d3a]/50'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OutputTypeSelector;