import React, { useState, useRef, useEffect } from 'react';
import VerticalSidebar from './components/layout/VerticalSidebar';
import DNAControlPanel from './components/layout/DNAControlPanel';
import MainContentPanel from './components/layout/MainContentPanel';
import GlobalPlayer from './components/player/GlobalPlayer';

const App = () => {
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handlePlayCard = (style) => {
    if (currentTrack?.id === style.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentTrack(style);
      setIsPlaying(true);
      setTimeout(() => audioRef.current?.play(), 100);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * duration;
  };

  return (
    <div className="flex h-screen bg-[#0a0a0f] text-white font-sans overflow-hidden">
      <audio ref={audioRef} src={currentTrack?.audioUrl} />

      <VerticalSidebar 
        onDNAClick={() => setLeftPanelOpen(!leftPanelOpen)}
        isDNAActive={leftPanelOpen}
      />

      <DNAControlPanel 
        isOpen={leftPanelOpen}
        onClose={() => setLeftPanelOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 relative">
        <MainContentPanel
          isOpen={rightPanelOpen}
          onClose={() => setRightPanelOpen(!rightPanelOpen)}
          onPlayCard={handlePlayCard}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />

        <GlobalPlayer
          track={currentTrack}
          isPlaying={isPlaying}
          isMuted={isMuted}
          currentTime={currentTime}
          duration={duration}
          onPlayPause={togglePlayPause}
          onMuteToggle={toggleMute}
          onSeek={handleSeek}
        />
      </div>
    </div>
  );
};

export default App;