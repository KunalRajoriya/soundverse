import React, { useState } from 'react';
import { X, Plus, ChevronLeft } from 'lucide-react';
import TabButton from '../ui/TabButton';
import OutputTypeSelector from '../ui/OutputTypeSelector';
import LyricsInput from '../ui/LyricsInput';

const DNAControlPanel = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('core');
  const [outputType, setOutputType] = useState('song');
  const [lyrics, setLyrics] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);

  // If panel is closed, don't render anything
  if (!isOpen) return null;

  // If collapsed, show minimal view
  if (isCollapsed) {
    return (
      <div className="w-14 bg-black border-r border-gray-800/20 flex-shrink-0 flex items-start justify-center pt-6">
        <button
          onClick={() => setIsCollapsed(false)}
          className="w-9 h-9 bg-gray-800/40 hover:bg-gray-800/60 rounded-lg flex items-center justify-center transition-all duration-200"
        >
          <ChevronLeft size={18} className="rotate-180" />
        </button>
      </div>
    );
  }

  return (
    <div 
      className="bg-black border-r border-gray-800/20 flex-shrink-0 transition-all duration-300 ease-in-out w-[360px]"
    >
      <div className="w-full h-full flex flex-col px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold tracking-wide">DNA</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsCollapsed(true)}
              className="p-1 hover:bg-white/10 rounded transition-all duration-200"
              title="Collapse panel"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded transition-all duration-200"
              title="Close panel"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Core Style / Signature Sound Tabs */}
        <div className="flex gap-3 mb-6">
          <TabButton active={activeTab === 'core'} onClick={() => setActiveTab('core')}>
            Core Style
          </TabButton>
          <TabButton active={activeTab === 'signature'} onClick={() => setActiveTab('signature')}>
            Signature Sound
          </TabButton>
        </div>

        {/* Attach Model */}
        <div className="mb-6">
          <label className="text-[13px] text-gray-400 mb-4 block">Attach Model</label>
          <div className="w-full flex justify-center">
            <div className="w-[140px] h-[140px] bg-[#1a1d28] rounded-3xl border-2 border-dashed border-gray-700/40 flex items-center justify-center hover:border-gray-600/50 transition-all duration-200 cursor-pointer group">
              <Plus size={36} className="text-gray-600 group-hover:text-gray-500 transition-colors duration-200" />
            </div>
          </div>
        </div>

        {/* Output Type Selector */}
        <OutputTypeSelector selected={outputType} onChange={setOutputType} />

        {/* Lyrics Input */}
        <LyricsInput value={lyrics} onChange={setLyrics} />

        {/* Create Button */}
        <button className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 hover:from-purple-500 hover:via-purple-400 hover:to-blue-400 rounded-full font-semibold text-[15px] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/20">
          Create
        </button>
      </div>
    </div>
  );
};

export default DNAControlPanel;