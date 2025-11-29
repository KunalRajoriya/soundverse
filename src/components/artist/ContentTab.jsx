import React from 'react';

const ContentTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="relative flex gap-12 mb-6 border-b border-gray-800/30">
      <button 
        onClick={() => onTabChange('core')}
        className={`relative pb-3 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
          activeTab === 'core' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
        }`}
      >
        CORE STYLE
        {activeTab === 'core' && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
        )}
      </button>
      
      <button 
        onClick={() => onTabChange('signature')}
        className={`relative pb-3 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
          activeTab === 'signature' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
        }`}
      >
        SIGNATURE SOUND
        {activeTab === 'signature' && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
        )}
      </button>
      
      {/* Animated underline */}
      <div 
        className="absolute bottom-0 h-0.5 bg-white transition-all duration-300 ease-out"
        style={{
          width: activeTab === 'core' ? '85px' : '145px',
          transform: activeTab === 'core' ? 'translateX(0)' : 'translateX(133px)'
        }}
      />
    </div>
  );
};

export default ContentTabs;