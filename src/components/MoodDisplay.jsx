import React from 'react';
import './MoodDisplay.css';

const moodData = {
  Happy: {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    music: "https://www.youtube.com/embed/ZbZSe6N_BXs",
  },
  Sad: {
    quote: "Tears come from the heart and not from the brain.",
    music: "https://www.youtube.com/embed/hLQl3WQQoQ0",
  },
  Romantic: {
    quote: "Love is composed of a single soul inhabiting two bodies.",
    music: "https://www.youtube.com/embed/450p7goxZqg",
  },
  Hyped: {
    quote: "Push yourself, because no one else is going to do it for you.",
    music: "https://www.youtube.com/embed/djV11Xbc914",
  },
  Relaxed: {
    quote: "Almost everything will work again if you unplug it for a few minutes, including you.",
    music: "https://www.youtube.com/embed/2Vv-BfVoq4g",
  },
};

const MoodDisplay = ({ mood }) => {
  const { quote, music } = moodData[mood] || {};

  return (
    <div className="mood-display">
      <h1 className="typing-animation">{mood} Vibes...</h1>
      <p className="quote">\"{quote}\"</p>
      <div className="music-player">
        <iframe
          width="300"
          height="169"
          src={music}
          title={`${mood} music`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MoodDisplay;
