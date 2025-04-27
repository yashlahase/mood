import React, { useState } from 'react';
import './MoodSelector.css';

const moods = [
  { 
    name: 'Happy', 
    emoji: '😊', 
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    message: "Happy Vibes...",
    quote: "Happiness is not something ready made. It comes from your own actions."
  },
  { 
    name: 'Sad', 
    emoji: '😢', 
    bgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    message: "Feeling Blue...",
    quote: "The wound is the place where the Light enters you."
  },
  { 
    name: 'Romantic', 
    emoji: '❤️', 
    bgImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    message: "Love is in the Air...",
    quote: "Love is composed of a single soul inhabiting two bodies."
  },
  { 
    name: 'Hyped', 
    emoji: '🔥', 
    bgImage: 'https://wallpapers.com/images/featured/hd-nature-pictures-ngdfb9h966h4z3le.jpg',
    message: "Feeling Pumped...",
    quote: "The only way to do great work is to love what you do."
  },
  { 
    name: 'Relaxed', 
    emoji: '😌', 
    bgImage: 'https://getwallpapers.com/wallpaper/full/a/3/5/1096020-widescreen-relaxing-wallpaper-1920x1080-hd.jpg',
    message: "Chill Vibes...",
    quote: "Peace begins with a smile."
  }
];

const MoodSelector = ({ setMood }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [background, setBackground] = useState('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    setMood(mood.name);
    setBackground(mood.bgImage);
  };

  return (
    <>
      <div className="mood-selector-wrapper" style={{ backgroundImage: `url(${background})` }} />
      <div className="mood-selector-container">
        <h2 className="mood-title">How are you feeling today?</h2>
        <div className="moods-grid">
          {moods.map((mood) => (
            <button
              key={mood.name}
              className={`mood-button ${selectedMood?.name === mood.name ? 'selected' : ''}`}
              onClick={() => handleMoodClick(mood)}
            >
              <span className="emoji">{mood.emoji}</span>
              <span className="mood-name">{mood.name}</span>
            </button>
          ))}
        </div>
        {selectedMood && (
          <div className="mood-message-container">
            <h3 className="mood-message">{selectedMood.message}</h3>
            <p className="mood-quote">{selectedMood.quote}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MoodSelector;