Soundverse DNA Interface
A recreation of the Soundverse DNA interface with interactive audio playback and smooth animations.
Live Demo: https://soundverse-gold.vercel.app
Video Walkthrough: 

Setup & Run Locally
Clone the repository:
bashgit clone https://github.com/KunalRajoriya77/soundverseDna.git
cd soundverseDna
Install dependencies:
bashnpm install
Start the development server:
bashnpm run dev
Open http://localhost:5173 in your browser.
For production build:
bashnpm run build
npm run preview

Tech Stack

React - UI components
Tailwind CSS - Styling
HTML5 Audio API - Audio playback
Lucide React - Icons
Vercel - Deployment


What I Built
The interface has three main parts:

Left Panel - DNA controls with tabs, output selection, and lyrics input
Main Area - Artist header with animated waveform and music style cards
Global Player - Persistent audio player at the bottom

Key Features

Collapsible panels with smooth slide animations
Hover effects on cards with play button overlay
Real-time audio playback with seek and volume controls
All transitions timed at 200-300ms for smooth feel
Responsive grid layout


Design Decisions
Animations: Used CSS transitions for most effects. 200ms feels responsive without being jarring.
Audio: Went with native HTML5 Audio API instead of Howler.js. Simpler and lighter for what we need here.
State: Just React hooks (useState, useRef). No Redux - the app isn't complex enough to need it.
Components: Split everything into small, reusable pieces. Each component does one thing.

Known Limitations

Using placeholder images and audio URLs (would replace with real assets)
Mobile works but could use more touch optimization
Volume is mute/unmute only (no slider yet)
Waveform rerenders every frame (fine for now, but could optimize with canvas)


What I'd Add Next

Volume slider
Crossfade between tracks
Save last played track to localStorage
Better loading states
